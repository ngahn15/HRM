package hrm.lib;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.apache.poi.common.usermodel.HyperlinkType;
import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.ClientAnchor;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.DataFormat;
import org.apache.poi.ss.usermodel.ExtendedColor;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.FormulaEvaluator;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.Hyperlink;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.RichTextString;
import org.apache.poi.ss.usermodel.VerticalAlignment;
import org.apache.poi.ss.util.AreaReference;
import org.apache.poi.ss.util.CellReference;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFHyperlink;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelReport {
	// Define table header of Test Case file
	private final String TESTCASE_ID = "ID";
	private final String CHROME_RESULT = "Chrome 56";
	private final String FIREFOX_RESULT = "Firefox 44";
	private final String NOTE = "Ghi chú";

	// Define failed text from soft assertion
	private final String FAILED = "FAILURE";

	// DECLARATION
	public XSSFWorkbook wb;
	private XSSFSheet sheet;
	private CellStyle passedStyle;
	private CellStyle failedStyle;
	private CellStyle hyperlink;
	private String outputFilePath;
	private int lastRowNum;
	private int firstRowIndex;
	List<Object[]> testcaseIdList;
	// Column index
	private int tcIDIndex;
	private int chromeResultIndex;
	private int ffResultIndex;
	private int noteIndex;

	public ExcelReport(String _inputFilePath, String _outputFilePath, String _sheet) {
		// If user not define output file path, then result will be write to same input
		// file path
		if (_outputFilePath.isEmpty())
			this.outputFilePath = _inputFilePath;
		else
			this.outputFilePath = _outputFilePath;

		FileInputStream fi;
		// Declare workbook, get column id inside workbook, store test case id
		try {
			fi = new FileInputStream(_inputFilePath);
			wb = new XSSFWorkbook(fi);
			fi.close();
		} catch (IOException e) {
			e.printStackTrace();
			System.out.println("[ERROR] Cannot load workbook");
		}
		sheet = wb.getSheet(_sheet);
		lastRowNum = sheet.getLastRowNum();
		get_first_row_index();
		find_specific_column_index();
		testcaseIdList = get_testcase_id_list();

		// Declare result column style
		passedStyle = create_result_color(IndexedColors.GREEN);
		failedStyle = create_result_color(IndexedColors.RED);
		hyperlink = create_hyperlink_style();
	}

	private int get_first_row_index() {
		XSSFRow row;
		XSSFCell cell;
		String cellValue;
		for (int i = 0; i < lastRowNum; i++) {
			row = sheet.getRow(i);
			cell = row.getCell(0);
			if (row != null) {
				if (cell != null && cell.getCellTypeEnum() == CellType.STRING) {
					cellValue = cell.getStringCellValue();
					if (cellValue.equals(TESTCASE_ID)) {
						firstRowIndex = i + 2; // Because Header is merge by 2 rows
						break;
					}
				}
			}
		}
		System.out.println("[INFO] First row index is: " + firstRowIndex);
		return firstRowIndex;
	}

	private void find_specific_column_index() {
		XSSFRow row;
		XSSFCell cell;
		String cellValue;
		int headerRowIndex = firstRowIndex - 2; // Because Header is merge by 2 rows
		int lastColCount;

		row = sheet.getRow(headerRowIndex);
		lastColCount = row.getLastCellNum();
		for (int i = 0; i < lastColCount; i++) {
			cell = row.getCell(i);
			if (cell != null) {
				cellValue = cell.getStringCellValue();
				if (cellValue.equals(TESTCASE_ID))
					tcIDIndex = i;
				if (cellValue.equals(CHROME_RESULT))
					chromeResultIndex = i;
				if (cellValue.equals(FIREFOX_RESULT))
					ffResultIndex = i;
				if (cellValue.equals(NOTE)) {
					noteIndex = i;
					break;
				}
			}
		}
		System.out.println("[INFO] Index of Testcase ID is: " + tcIDIndex);
		System.out.println("[INFO] Index of column Result is: " + chromeResultIndex + " (for Chrome), " + ffResultIndex
				+ " (for Firefox)");
		System.out.println("[INFO] Index of column Note is: " + noteIndex);
	}

	/**
	 * <p>From list test result, based on Testcase ID to find Testcase in Testcase file, if matches
	 * then fill result, and notes (if result is FAILURE). This method not create Excel Result yet. 
	 * To create Excel Report, after call this method, you must call method {@link #write_and_close_io()}</b></p>

	 * @param _testResult
	 * 		List result got from Sort Assertion. each list have 4 elements. From index 0 to 3 is: Testcase ID,
	 * 		Expected Result, Actual Result, Result
	 */
	public void set_result_to_workbook(List<List<String>> _testResult) {
		System.out.println("[INFO] Test Result have " + _testResult.size() + " record(s)");
		Collections.sort(_testResult, new Comparator<List<String>>() {
			@Override
			public int compare(List<String> o1, List<String> o2) {
				return o1.get(0).compareTo(o2.get(0));
			}
		});
		
		XSSFRow row;
		XSSFCell cell;
		
		//Remove duplicate result and store only failed result for duplicate test case id
		_testResult = sort_result(_testResult);
		int resultCount = _testResult.size();
		
		NextId: for (int i = 0; i < resultCount; i++) {
			List<String> resultData = _testResult.get(i);
			String rId = resultData.get(0);
			String rExpected = resultData.get(1);
			String rActual = resultData.get(2);
			String result = resultData.get(3);
			System.out.println("[INFO] Checking test id " + rId);

			for (int j = 0; j < testcaseIdList.size(); j++) {
				String testcaseID = (String) testcaseIdList.get(j)[0];
				int index;
				if (rId.equals(testcaseID)) {
					System.out.println("[INFO] Found");
					index = (int) testcaseIdList.get(j)[1];
					row = sheet.getRow(index);
					cell = row.getCell(chromeResultIndex);
					if(cell == null) //Create cell if cell is null
						cell = row.createCell(chromeResultIndex);
					
					if (!cell.getStringCellValue().equals(FAILED))
						cell.setCellValue(result);
					if (result.equals(FAILED)) {
						String notes = "Expected is: [" + rExpected + "] but was [" + rActual + "]";
						cell.setCellStyle(failedStyle);
						cell = row.getCell(noteIndex);
						if (!cell.getStringCellValue().isEmpty()) {
							String prevNotes = cell.getStringCellValue();
							String newNotes = prevNotes + "\n" + notes;
							cell.setCellValue(newNotes);
						} else {
							cell.setCellValue(notes);
						}
						
						//Create hyper link for captured failed test
						int otherColIndex = noteIndex + 1;
						cell = row.getCell(otherColIndex);
						while (cell != null) {
							otherColIndex++;
							cell = row.getCell(otherColIndex);
						}
						cell = row.createCell(otherColIndex);
						set_hyper_link(cell, "FAILED_IMG",
								"../TestResults/Image/Failed_" + rId + "_" + (otherColIndex - noteIndex) + ".png");
					} else {
						cell.setCellStyle(passedStyle);
					}
					continue NextId;
				}
			}
		}

		// Auto resize result column
		sheet.autoSizeColumn(chromeResultIndex);
	}
	
	private void set_hyper_link(XSSFCell _cell, String _cellValue, String _address) {
		CreationHelper helper = wb.getCreationHelper();
		XSSFHyperlink link = new XSSFHyperlink(helper.createHyperlink(HyperlinkType.URL));
		link.setAddress(_address);
		_cell.setCellValue(_cellValue);
		_cell.setHyperlink(link);
		_cell.setCellStyle(hyperlink);
	}

	private CellStyle create_result_color(IndexedColors _color) {
		// Set background color and alignment
		CellStyle myStyle = wb.createCellStyle();
		myStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
		myStyle.setFillForegroundColor(_color.getIndex());
		myStyle.setAlignment(HorizontalAlignment.CENTER_SELECTION);
		myStyle.setVerticalAlignment(VerticalAlignment.CENTER);
		myStyle.setWrapText(true);

		// Set Border
		myStyle.setBorderBottom(BorderStyle.THIN);
		myStyle.setBorderTop(BorderStyle.THIN);
		myStyle.setBorderLeft(BorderStyle.THIN);
		myStyle.setBorderRight(BorderStyle.THIN);

		// Set text color
		Font font = wb.createFont();
		font.setColor(IndexedColors.YELLOW.getIndex());
		font.setBold(true);
		myStyle.setFont(font);

		return myStyle;
	}
	
	private CellStyle create_hyperlink_style() {
		// Set background color and alignment
		CellStyle myStyle = wb.createCellStyle();
		myStyle.setAlignment(HorizontalAlignment.CENTER_SELECTION);
		myStyle.setVerticalAlignment(VerticalAlignment.CENTER);
		myStyle.setWrapText(false);

		// Set text color
		Font font = wb.createFont();
		font.setColor(IndexedColors.BLUE.getIndex());
		font.setUnderline(XSSFFont.U_SINGLE);
		myStyle.setFont(font);

		return myStyle;
	}

	/**
	 * <p>Create Excel Report only when method {@link #set_result_to_workbook(List)} is called</p>
	 */
	public void write_and_close_io() {
		FileOutputStream fo;
		try {
			fo = new FileOutputStream(outputFilePath);
			wb.write(fo);
			fo.close();
			wb.close();
			System.out.println("[INFO] Write completed, Result file path: " + outputFilePath);
		} catch (IOException e) {
			e.printStackTrace();
			System.out.println("[ERROR] Cannot write excel result");
		}
	}

	private List<Object[]> get_testcase_id_list() {
		XSSFRow row;
		XSSFCell cell;
		List<Object[]> tcIdList = new ArrayList<>();

		for (int i = firstRowIndex; i <= lastRowNum; i++) {
			row = sheet.getRow(i);
			if (row != null) {
				cell = row.getCell(tcIDIndex);
				if (cell != null
						&& (cell.getCellTypeEnum() == CellType.STRING || cell.getCellTypeEnum() == CellType.FORMULA)) {
					if (!cell.getStringCellValue().isEmpty()) {
						Object[] tcId = { cell.getStringCellValue(), new Integer(i) };
						tcIdList.add(tcId);
					}
				}
			}
		}
		System.out.println("[INFO] Store " + tcIdList.size() + " Test Case ID from input file");
		return tcIdList;
	}
	
	/**
	 * 
	 * @param _testResult Test Result got from Sort Assertion
	 * @return new test result list that remove duplicate result when the are more test case id
	 * appeared and got only failed result for those duplicate result that have the same testcase id
	 */
	private List<List<String>> sort_result(List<List<String>> _testResult) {
		List<List<String>> sortedResult = new ArrayList<>();
		int resultCount = _testResult.size();
		String prevId = "";
		String prevExpected = "";
		String prevActual = "";
		String prevResult = "";
		boolean isDuplicate = false;

		for (int i = 0; i < resultCount; i++) {
			List<String> resultData = _testResult.get(i);
			String rId = resultData.get(0);
			String rExpected = resultData.get(1);
			String rActual = resultData.get(2);
			String result = resultData.get(3);
			if (rId.equals(prevId)) {
				// If Id of current test equal id of previous test and previous test is failed,
				// then store previous test result (ensure first row of duplicated test case id
				// is stored)
				if (prevResult.equals(FAILED)) {
					String[] collectedResult = { prevId, prevExpected, prevActual, prevResult };
					sortedResult.add(Arrays.asList(collectedResult));
				}

				// If duplicate id in the last row & last row still Failed, then store current
				// result (not previous)
				if (i == (resultCount - 1) && result.equals(FAILED)) {
					String[] collectedResult = { rId, rExpected, rActual, result };
					sortedResult.add(Arrays.asList(collectedResult));
				}
 
				// Assign new previous result to check with next element
				prevExpected = rExpected;
				prevActual = rActual;
				prevResult = result;
				isDuplicate = true;
			} else {
				// Store previous result because it's not duplicated, bypass first record
				// because this time don't have any previous result
				if (i > 0 && !isDuplicate) {
					String[] collectedResult = { prevId, prevExpected, prevActual, prevResult };
					sortedResult.add(Arrays.asList(collectedResult));
				} else if (i == (resultCount - 1)) { // If last row, then store its value no matter pass or failed
					String[] collectedResult = { rId, rExpected, rActual, result };
					sortedResult.add(Arrays.asList(collectedResult));
				} else {
					// If it duplicate and previous result is failed, then store it (ensure not miss
					// failed of first or end duplicate id
					if (isDuplicate && prevResult.equals(FAILED)) {
						String[] collectedResult = { prevId, prevExpected, prevActual, prevResult };
						sortedResult.add(Arrays.asList(collectedResult));
						
					}else if(isDuplicate) {
						String[] collectedResult = { prevId, prevExpected, prevActual, prevResult };
						sortedResult.add(Arrays.asList(collectedResult));
					}
				}

				// Assign new previous result to check with next element
				prevId = rId;
				prevExpected = rExpected;
				prevActual = rActual;
				prevResult = result;
				isDuplicate = false;
			}
		}
		
		if (isDuplicate && prevResult.equals(FAILED)) {
			String[] collectedResult = { prevId, prevExpected, prevActual, prevResult };
			sortedResult.add(Arrays.asList(collectedResult));
		} else if (!isDuplicate) {
			String[] collectedResult = { prevId, prevExpected, prevActual, prevResult };
			sortedResult.add(Arrays.asList(collectedResult));
		}
		
		System.out.println("[INFO] Test Result have sorted to " + sortedResult.size() + " record(s)");
		return sortedResult;
	}
}
