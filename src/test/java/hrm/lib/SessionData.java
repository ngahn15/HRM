package hrm.lib;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import net.serenitybdd.core.Serenity;

/**
 * Table data, Excel data utility for data table of cucumber feature file and
 * CRUD from Excel File for using in everywhere of FW. WARNING: for more
 * performance and easy to maintain data, please follow the rule: 1. All column
 * data must have unique name 2. Header Data ranger in each sheet must be
 * defined(not empty) 3. Key File Name must be unique.
 *
 */
public class SessionData {

	// Name key contains excel file in session variable
	private static final String EXCEL_FILE_LIST = "#ExcelFiles#";
	// Name key contains table data in session variable
	private static final String TABLE_DATA_LIST = "#TableDatas#";
	// Name key contains soft assert in session variable
	private static final String SOFT_ASSERTION_LIST = "#SoftAssertions#";
	private static final String SOFT_ASSERTION_RESULT = "#SoftAssertions#Result#";

	/**
	 * Check Session Data existed or not by data key
	 *
	 * @param _dataKey
	 * @return
	 */
	public static boolean isSessionDataExist(String _dataKey) {
		try {
			Serenity.sessionVariableCalled(_dataKey).equals(null);
			System.out.println("***** INFO ***** : Session Data exists : " + _dataKey);
			return true;
		} catch (NullPointerException e) {
			System.out.println("***** INFO ***** : Session Data does not exist : " + _dataKey);
			return false;
		}
	}

	// Region#Data Table Comparison
	/**
	 * Comparing two Data Table directly (without mapping column name). All data in
	 * target Data Table will be compared with source Data Table.This function
	 * compare by column order and ignore column name.
	 *
	 * @param _assertionKey
	 * @param _sourceDataTbKey
	 * @param _targetDataTbKey
	 * @return
	 */
	public static int compareDataTb(String _assertionKey, String _sourceDataTbKey, String _targetDataTbKey) {
		return compareDataTb(_assertionKey, _sourceDataTbKey, _targetDataTbKey, false);
	}

	/**
	 * Comparing two Data Table directly (with auto mapping column name). All data
	 * in target Data Table will be compared with source Data Table. This function
	 * compare only column name that exited in both Data Table.
	 *
	 * @author 
	 * @param _assertionKey
	 * @param _sourceDataTbKey
	 * @param _targetDataTbKey
	 * @return
	 */
	public static int compareDataTbAutoMapping(String _assertionKey, String _sourceDataTbKey, String _targetDataTbKey) {
		return compareDataTb(_assertionKey, _sourceDataTbKey, _targetDataTbKey, true);
	}

	/**
	 * Comparing two Data Table by list of column name. All data in target Data
	 * Table will be compared with source Data Table.
	 *
	 * @param _assertionKey
	 * @param _sourceDataTbKey
	 * @param _targetDataTbKey
	 * @param _columnNames
	 * @return
	 */
	public static int compareDataTb(String _assertionKey, String _sourceDataTbKey, String _targetDataTbKey,
			String... _columnNames) {
		return compareDataTb(_assertionKey, _sourceDataTbKey, _targetDataTbKey, true, _columnNames);
	}

	/**
	 * Comparing two Data Table with full option. All data in target Data Table will
	 * be compared with source Data Table.
	 *
	 * @param _assertionKey
	 * @param _sourceDataTbKey
	 * @param _targetDataTbKey
	 * @param isMatchColumnName
	 * @param _columnNames
	 * @return
	 */
	public static int compareDataTb(String _assertionKey, String _sourceDataTbKey, String _targetDataTbKey,
			boolean isMatchColumnName, String... _columnNames) {
		String sDataKey = _assertionKey.replace("COMPARE RESULT SET ", "") + ":";
		int iCountDif = 0;
		int possibleTargetDataTbSize = 0; // store number of column in Target
											// Data Table can perform comparison
		LinkedHashMap<Integer, List<String>> sourceData = getDataTbRows(_sourceDataTbKey);
		LinkedHashMap<Integer, List<String>> tartgetData = getDataTbRows(_targetDataTbKey);

		// Check data in Data Table
		if (tartgetData == null || tartgetData.size() <= 1) {
			addSoftAssertion(_assertionKey, sDataKey + "WARNING",
					"Data Table [" + _targetDataTbKey + "][" + tartgetData + "] is empty. Nothing to compare.", true,
					false);
			return 0;
		}
		if (sourceData == null || sourceData.size() <= 1) {
			addSoftAssertion(_assertionKey, sDataKey + "WARNING",
					"Data Table [" + _sourceDataTbKey + "][" + sourceData + "] is empty. Nothing to compare.", true,
					false);
			return 0;
		}

		// Validate column name in source and target Data Table
		List<String> compareColumnNames = new ArrayList<String>();
		for (String c : _columnNames) {
			boolean bColumnExistedInSource = false;
			boolean bColumnExistedInTarget = false;
			for (String s : sourceData.get(0)) {
				if (c.equalsIgnoreCase(s)) {
					bColumnExistedInSource = true;
				}
			}
			for (String t : tartgetData.get(0)) {
				if (c.equalsIgnoreCase(t)) {
					bColumnExistedInTarget = true;
				}
			}
			if (bColumnExistedInSource && bColumnExistedInTarget) {
				addSoftAssertion(_assertionKey, sDataKey + "VALIDATE", "Column [" + c + "] exists in both Data Table",
						"EXIST", "EXIST", "PASSED");
			}
			if (!bColumnExistedInSource && !bColumnExistedInTarget) {
				addSoftAssertion(_assertionKey, sDataKey + "VALIDATE",
						"Column [" + c + "] not existed in both Data Table. This column does not compare.", "EXIST",
						"NOT EXIST", "FAILURE");
			} else if (!bColumnExistedInSource) {
				addSoftAssertion(
						_assertionKey, sDataKey + "VALIDATE", "Column [" + c + "] does not exist in Data Table ["
								+ _sourceDataTbKey + "]. This column does not compare.",
						"EXIST", "NOT EXIST", "FAILURE");
			} else if (!bColumnExistedInTarget) {
				addSoftAssertion(_assertionKey, sDataKey + "VALIDATE", "Column [" + c
						+ "] does not exist in Data Table [" + tartgetData + "]. This column does not compare.",
						"EXIST", "NOT EXIST", "FAILURE");
			}
			compareColumnNames.add(c);
		}
		// Validate column to compare in case don not figure Column name
		if (compareColumnNames.size() == 0) {
			if (isMatchColumnName) {
				for (String t : tartgetData.get(0)) {
					boolean existed = false;
					for (String s : sourceData.get(0)) {
						if (t.equalsIgnoreCase(s)) {
							compareColumnNames.add(t);
							existed = true;
							break;
						}
					}
					if (!existed) {
						System.out.println("***** ASSERT FAILURE ***** Column [" + t
								+ "] does not exist in Data Table [" + _sourceDataTbKey + "]");
						addSoftAssertion(_assertionKey, sDataKey + "VALIDATE",
								"Column [" + t + "] does not exist in Data Table [" + _sourceDataTbKey
										+ "]. This column does not compare.",
								"EXIST", "NOT EXIST", "FAILURE");
					}
				}
			} else {
				for (int i = 0; i < tartgetData.get(0).size(); i++) {
					try {
						sourceData.get(0).get(i);
					} catch (Exception e) {
						System.out.println(
								"***** ASSERT FAILURE ***** Column Index [" + i + "] does not exist in Data Table ["
										+ _sourceDataTbKey + "]. Column Name is [" + tartgetData.get(0).get(i) + "]");
						addSoftAssertion(_assertionKey, sDataKey + "VALIDATE",
								"Column Index [" + i + "] does not exist in Data Table [" + _sourceDataTbKey
										+ "]. Column Name is [" + tartgetData.get(0).get(i)
										+ "]. This column does not compare.",
								"EXIST", "NOT EXIST", "FAILURE");
						if (possibleTargetDataTbSize == 0) {// get the max
															// existed ranger of
															// column
							possibleTargetDataTbSize = i;
						}
					}
				}
				if (possibleTargetDataTbSize == 0) {
					possibleTargetDataTbSize = tartgetData.get(0).size();
				}
			}
		}
		// loop row in target Data Table
		for (int key : tartgetData.keySet()) {
			if (key == 0) {// Do not compare header
				continue;
			}
			if (compareColumnNames.size() == 0) {// compare all data
				// loop each value in row in tartgetData
				for (int i = 0; i < tartgetData.get(key).size(); i++) {
					if (i >= possibleTargetDataTbSize) {
						break; // Not compare if out of column index in Source
								// Data Table
					}
					// Get the data in the same position in source file
					String target = tartgetData.get(key).get(i);
					String source = "-Not Found-";
					try {
						if (isMatchColumnName) {
							String colName = tartgetData.get(0).get(i);
							int indexColSource = sourceData.get(0).indexOf(colName);
							source = sourceData.get(key).get(indexColSource);
						} else {
							source = sourceData.get(key).get(i);
						}
					} catch (Exception e) {
						// do nothing
					}
					// Add result to soft assertion
					target = replaceAllAnnotation(target);
					source = replaceAllAnnotation(source);
					if (!target.equals(source)) {
						iCountDif += 1;
						System.out.println("***** ASSERT FAILURE ***** Target Data Table [" + _targetDataTbKey
								+ "] - Row [" + key + "] - Column [" + i + "]");
					}
					addSoftAssertion(
							_assertionKey, sDataKey + "[" + key + "][" + i + "]", "Row Index [" + key
									+ "] - Column Index [" + i + "] - Column Name [" + tartgetData.get(0).get(i) + "]",
							target, source);
				}
			} else {// compare specific Column Name only
				// loop each value in row in tartgetData
				for (int i = 0; i < tartgetData.get(key).size(); i++) {
					// ignore other column
					String currentColumn = tartgetData.get(0).get(i);
					if (!compareColumnNames.contains(currentColumn)) {
						continue;
					}
					int colIndexSource = sourceData.get(0).indexOf(currentColumn);
					// Get the data in the same position in source file
					String target = tartgetData.get(key).get(i);
					String source = "";
					source = sourceData.get(key).get(colIndexSource);
					target = replaceAllAnnotation(target);
					source = replaceAllAnnotation(source);
					// Add result to soft assertion
					if (!target.equals(source)) {
						iCountDif += 1;
						System.out.println("***** ASSERT FAILURE ***** Target Data Table [" + _targetDataTbKey
								+ "] - Row [" + key + "] - Column [" + i + "]");
					}
					addSoftAssertion(_assertionKey, sDataKey + "[" + key + "][" + i + "]",
							"Row Index [" + key + "] - Column Index [" + i + "] - Column Name [" + currentColumn + "]",
							target, source);
				}
			}
		}
		return iCountDif;
	}

	// EndRegion#Data Table Comparison
	
	// Region#Soft Assert
	/**
	 * Declare or Add description for Soft Assertion
	 *
	 * @param _assertionKey
	 * @param _description
	 */
	public static void declareSoftAssertion(String _assertionKey, String _description) {
		List<List<String>> tbReport = new ArrayList<List<String>>();
		List<String> header = new ArrayList<String>();
		header.add("OVERRALL");
		header.add(_description);
		header.add("");
		header.add("");
		header.add("");
		try {
			tbReport = Serenity.sessionVariableCalled(SOFT_ASSERTION_LIST + _assertionKey);
			tbReport.add(header);
			Serenity.setSessionVariable(SOFT_ASSERTION_LIST + _assertionKey).to(tbReport);
		} catch (NullPointerException e) {
			Serenity.setSessionVariable(SOFT_ASSERTION_LIST + _assertionKey).to(tbReport);
			tbReport = new ArrayList<List<String>>();
			tbReport.add(header);
			Serenity.setSessionVariable(SOFT_ASSERTION_LIST + _assertionKey).to(tbReport);
		}
	}

	/**
	 * Get Soft Assertion Overall Result. If one soft assertion return failure, the
	 * result is false.
	 *
	 * @param _assertionKey
	 * @return
	 */
	public static boolean getSoftAssertionOverallResult(String _assertionKey) {
		return Serenity.sessionVariableCalled(SOFT_ASSERTION_RESULT + _assertionKey);
	}

	/**
	 * Get Soft Assertion Overall Result. If one soft assertion return failure, the
	 * result is false.
	 *
	 * @return
	 */
	public static boolean getSoftAssertionOverallResult() {
		return getSoftAssertionOverallResult("");
	}

	/**
	 * Add new Soft Assertion into Soft Assertion List gen to excel.
	 *
	 * @param _assertionKey
	 * @param _assertion
	 * @param _description
	 * @param _expected
	 * @param _actual
	 * @param _result
	 */
	public static void addSoftAssertion(String _assertionKey, String _assertion, String _description, String _expected,
			String _actual, String _result) {
		List<List<String>> testResult;
		String[] currentResult = { _assertion, _expected, _actual, _result };
		TakeScreenshot ts = new TakeScreenshot();
		String dirPath = "./TestResults/Image";
		// Deleted all image file for the newest test
		if (!Serenity.hasASessionVariableCalled("HAS_DELETED")) {
			try {
				ts.deleteImageFiles(dirPath);
				Serenity.setSessionVariable("HAS_DELETED").to(1);
			} catch (Exception e) {
				System.out.println("[ERROR] Can't found image folder");
			}
		}

		if (_result.equals("FAILURE")) {
			Logging.logFailure(_assertionKey + "\t" + _assertion + "\t" + _description + "\t" + _expected + "\t"
					+ _actual + "\t" + _result);
			// Capture Failed Request
			String key_failed_id = "FAILED_IDS";

			// Collect all failed id
			List<String> failedIds = new ArrayList<>();
			Serenity.setSessionVariable("IS_FAILED").to(true);
			if (Serenity.hasASessionVariableCalled(key_failed_id)) {
				failedIds = Serenity.sessionVariableCalled(key_failed_id);
				failedIds.add(_assertion);
			} else {
				failedIds.add(_assertion);
			}
			Serenity.setSessionVariable(key_failed_id).to(failedIds);

			try {
				String fileName = "Failed_" + _assertion;
				ts.capture(dirPath, fileName);
			} catch (Exception e) {
				System.out.println("[ERROR] Cannot capture image");
				e.printStackTrace();
			}
		}
		// collect all result to generate excel report
		if (Serenity.hasASessionVariableCalled("ALL_TEST_RESULT")) {
			testResult = Serenity.sessionVariableCalled("ALL_TEST_RESULT");
			testResult.add(Arrays.asList(currentResult));
		} else {
			testResult = new ArrayList<>();
			testResult.add(Arrays.asList(currentResult));
		}
		System.out.println("Nga: " + testResult.size());
		Serenity.setSessionVariable("ALL_TEST_RESULT").to(testResult);

		List<String> assertion = Arrays.asList(_assertion, _description, _expected, _actual, _result);
		addRowToTbDataReport(SOFT_ASSERTION_LIST + _assertionKey, assertion);
	}

	/**
	 * Add new Soft Assertion into Soft Assertion List.
	 *
	 * @param _assertion
	 * @param _description
	 * @param _expected
	 * @param _actual
	 */
	public static void addSoftAssertion(String _assertion, String _description, String _expected, String _actual) {
		addSoftAssertion("", _assertion, _description, _expected, _actual);
	}

	/**
	 * Add new Soft Assertion into Soft Assertion List.
	 *
	 * @param _assertionKey
	 * @param _assertion    : Case or Name of assertion
	 * @param _description
	 * @param _expected
	 * @param _actual
	 */
	public static void addSoftAssertion(String _assertionKey, String _assertion, String _description, String _expected,
			String _actual) {
		// SET Null value
		if (_expected == null) {
			_expected = "NULL";
		}
		if (_actual == null) {
			_actual = "NULL";
		}
		// SET BLANK value
		if (_expected.equals("") || _expected.equals("@BLANK@")) {
			_expected = "BLANK";
		}
		if (_actual.equals("") || _actual.equals("@BLANK@")) {
			_actual = "BLANK";
		}
		// Replace special character
		_expected = _expected.replace("@nbsp;", " ");
		_expected = _expected.replace("|", "@verbar;");
		_actual = _actual.replace("|", "@verbar;");
		_expected = _expected.replace("\r\n", "@br;");
		_actual = _actual.replace("\r\n", "@br;");
		_expected = _expected.replace("\r", "@br;").replace("\n", "@br;");
		_actual = _actual.replace("\r", "@br;").replace("\n", "@br;");
		// Replace firsr space, last space if having for easier viewing
		if (_expected.startsWith(" ")) {
			_expected = _expected.replaceFirst(" ", "@nbsp;");
		}
		if (_actual.startsWith(" ")) {
			_actual = _actual.replaceFirst(" ", "@nbsp;");
		}
		if (_expected.endsWith(" ")) {
			_expected = replaceLast(_expected, " ", "@nbsp;");
		}
		if (_actual.endsWith(" ")) {
			_actual = replaceLast(_actual, " ", "@nbsp;");
		}
		// Compare expected and actual
		String result = "PASSED";
		if (!compareTextWithIgnoreAnnotation(_expected, _actual)) {
			result = "FAILURE";
		}
		_expected = SessionData.replaceIgnoreAnnotation(_expected);

		// Store result to log to excel
		String[] testResult = { _assertion, result };
		Serenity.setSessionVariable("PREV_TEST_RESULT").to(testResult);
		addSoftAssertion(_assertionKey, _assertion, _description, _expected, _actual, result);
	}

	/**
	 * @Description Generate Excel Report for previous result base on it ID Test
	 *              case path and it's sheet name will be define in
	 *              serenity.properties file. For test case path, just get property
	 *              name:tcPath. For sheet name, just get property name: detailSheet
	 */
	public static void generateExcelReport() {
		String testType = "";
		int detailResultColIndex = 7;
		int testTypeColIndex = 3;
		int descriptionColIndex = 1;
		int overallResultColIndex = 6;

		// Load file Path and sheet name from properties file
		Properties p = new Properties();
		FileInputStream fi;
		try {
			fi = new FileInputStream("serenity.properties");
			p.load(fi);
			detailResultColIndex = Integer.parseInt(p.getProperty("detailResultColIndex"));
			testTypeColIndex = Integer.parseInt(p.getProperty("testTypeColIndex"));
			descriptionColIndex = Integer.parseInt(p.getProperty("descriptionColIndex"));
			overallResultColIndex = Integer.parseInt(p.getProperty("overallResultColIndex"));
			fi.close();
		} catch (FileNotFoundException e1) {
			e1.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (NumberFormatException e) {
			System.out.println("Cannot load column index of sheet Data Control from properties file,"
					+ " so system will using default index value");
		}
		

		String filePath = p.getProperty("tcPath");
		String detailSheetName = p.getProperty("detailSheet");

		// Get previous test result
		String[] testResult = Serenity.sessionVariableCalled("PREV_TEST_RESULT");
		System.out.println("testResult: " + testResult[0]);
		String resultId = testResult[0];
		String controlID = resultId.split("_")[0];
		resultId = resultId.split("_")[1]; // Extract message id
		FileInputStream fi2 = null;
		FileOutputStream fo = null;
		XSSFWorkbook wb = null;
		XSSFRow row = null;
		XSSFCell cell = null;
		try {
			fi2 = new FileInputStream(filePath);
			wb = new XSSFWorkbook(fi2);
			fi2.close();
			XSSFSheet sheetControlMsg = wb.getSheet(detailSheetName);
			int rowCount = sheetControlMsg.getLastRowNum();

			// Check if first time write result, then clear all previous test result
			if (!Serenity.hasASessionVariableCalled("IS_FIRST_TEST")) {
				System.out.println("Clear test result"); // TODO Clear it
				for (int i = 0; i <= rowCount; i++) {
					row = sheetControlMsg.getRow(i);
					XSSFCell cellResult = row.getCell(detailResultColIndex);
					XSSFCell cellNote = row.getCell(detailResultColIndex + 1);

					if (cellResult != null)
						row.removeCell(cellResult);
					if (cellNote != null)
						row.removeCell(cellNote);
				}
				Serenity.setSessionVariable("IS_FIRST_TEST").to(false);
			}

			for (int i = 0; i <= rowCount; i++) {
				row = sheetControlMsg.getRow(i);
				cell = row.getCell(0);
				if (cell != null) {
					String tcId = "";
					try {
						tcId = cell.getStringCellValue();
					} catch (Exception e) {
						tcId = String.valueOf(cell.getNumericCellValue());
						if (tcId.split("\\.")[1].equals("0"))
							tcId = tcId.split("\\.")[0];
					}
					if (tcId.equals(resultId)) {
						String prevResult = "";
						cell = row.getCell(detailResultColIndex);
						if (cell == null)
							cell = row.createCell(detailResultColIndex);
						try {
							prevResult = cell.getStringCellValue();
						} catch (Exception e) {
						}

						// Print control id if test failed
						if (testResult[1].equals("FAILURE")) {
							if (!prevResult.equals("FAILURE"))
								cell.setCellValue(testResult[1]);
							XSSFCell cellNote = row.getCell(detailResultColIndex + 1);
							if (cellNote == null)
								cellNote = row.createCell(detailResultColIndex + 1);

							if (cellNote.getCellTypeEnum() == CellType.STRING) {
								String currentLoggedText = cellNote.getStringCellValue();
								// If control id not exist, then log that in cell
								if (!currentLoggedText.contains(controlID)) {
									String newLogged = currentLoggedText + ", " + controlID;
									cellNote.setCellValue(newLogged);
								}
							} else {
								cellNote.setCellValue("Failed Control ID: " + controlID);
							}
						} else {
							if (prevResult.isEmpty())
								cell.setCellValue(testResult[1]);
						}

						testType = row.getCell(testTypeColIndex).getStringCellValue();
						break;
					}
				}
			}

			try {
				generateTestLogForTestCaseFile(wb, testType, testResult, descriptionColIndex, overallResultColIndex, p);
			} catch (Exception e) {
				System.out.println("Cannot write result to sheet testcase. Error message:");
				e.printStackTrace();
			}

			fo = new FileOutputStream(filePath);
			wb.write(fo);
			wb.close();
			fo.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	private static void generateTestLogForTestCaseFile(XSSFWorkbook wb, String testType, String[] testResult,
			int descriptionColIndex, int overallResultColIndex, Properties p) {
		int sheetTestcasesIndex = 1;
		// int validMaxLenRow = 0;
		int inValidMaxLenRow = 0;
		int inValidMandatoryRow = 0;

		final String RESULT_FAILED = "FAILED";
		final String RESULT_PASSED = "PASSED";

		String msgID = testResult[0];
		msgID = msgID.split("_")[1];
		String result = testResult[1];

		// Find index of sheet COTROL_MSG AND CONTROL
		if (!Serenity.hasASessionVariableCalled("CONTROL")) {
			int sheetCount = wb.getNumberOfSheets();
			for (int i = 0; i < sheetCount; i++) {
				String sheetName = wb.getSheetName(i);
				if (!sheetName.contains("CONTROL")) {
					sheetTestcasesIndex = i;
					Serenity.setSessionVariable("CONTROL").to(sheetTestcasesIndex);
					break;
				}
			}
		} else {
			sheetTestcasesIndex = Serenity.sessionVariableCalled("CONTROL");
		}

		// Check for failure case
		if (result.equalsIgnoreCase("FAILURE")) {
			XSSFSheet sheetTestcases = wb.getSheetAt(sheetTestcasesIndex);
			XSSFRow rowTestCase = null;
			int sheetTestcasesRowCount = sheetTestcases.getLastRowNum();

			XSSFCell resultCell = sheetTestcases.getRow(inValidMaxLenRow).getCell(overallResultColIndex);
			if (resultCell == null || resultCell.getStringCellValue().isEmpty())
				resultCell.setCellValue(RESULT_PASSED);
			resultCell = sheetTestcases.getRow(inValidMandatoryRow).getCell(overallResultColIndex);
			if (resultCell == null || resultCell.getStringCellValue().isEmpty())
				resultCell.setCellValue(RESULT_PASSED);

			// Search for Invalid Length row
			for (int i = 0; i <= sheetTestcasesRowCount; i++) {
				String description = "";
				XSSFRow tmpRow = sheetTestcases.getRow(i);
				XSSFCell cellDesc = tmpRow.getCell(descriptionColIndex);
				if (cellDesc != null) {
					boolean hasFoundMaxLenRow = false;
					boolean hasFoundRequiredRow = false;
					try {
						description = cellDesc.getStringCellValue();
					} catch (Exception e) {
					}

					if (description.contains("Kiểm tra max length của các trường")) {
						// validMaxLenRow = i;
						inValidMaxLenRow = i + 1;
						hasFoundMaxLenRow = true;
					} else if (description.contains("Kiểm tra trường bắt buộc khi không nhập dữ liệu")) {
						inValidMandatoryRow = i;
						hasFoundRequiredRow = true;
					}

					if (hasFoundMaxLenRow && hasFoundRequiredRow) {
						break;
					}
				}
			}

			// If type equal Max Length, check if result column in sheet Testcase is filled
			// or not
			if (testType.equals("MAXLENGTH")) {
				rowTestCase = sheetTestcases.getRow(inValidMaxLenRow);
				XSSFCell cellResult = rowTestCase.getCell(overallResultColIndex);
				String overallResult = "";
				if (cellResult != null) {
					overallResult = cellResult.getStringCellValue();
				}
				// If result has not filled, then fill it, else skip
				if (!overallResult.equals(RESULT_FAILED)) {
					cellResult.setCellValue(RESULT_FAILED);
				}
			} else if (testType.equals("REQUIRED")) {
				rowTestCase = sheetTestcases.getRow(inValidMandatoryRow);
				XSSFCell cellResult = rowTestCase.getCell(overallResultColIndex);
				String overallResult = "";
				if (cellResult != null) {
					overallResult = cellResult.getStringCellValue();
				}
				if (!overallResult.equals(RESULT_FAILED)) {
					cellResult.setCellValue(RESULT_FAILED);
				}
			} else if (testType.equals("FORMAT")) {
				findAndFillResultForSpecificControl(wb, sheetTestcases, p, msgID, overallResultColIndex, RESULT_FAILED);
			}
		} else {
			XSSFSheet sheetTestcases = wb.getSheetAt(sheetTestcasesIndex);

			// Find Passed case for enter invalid data to control
			if (testType.equals("FORMAT")) {
				findAndFillResultForSpecificControl(wb, sheetTestcases, p, msgID, overallResultColIndex, RESULT_PASSED);
			}
		}
	}

	private static void findAndFillResultForSpecificControl(XSSFWorkbook wb, XSSFSheet sheetTestcases, Properties p,
			String msgID, int overallResultColIndex, String resultValueInUpperCase) {
		int sheetTestcasesRowCount = sheetTestcases.getLastRowNum();
		XSSFSheet sheetControl = wb.getSheet(p.getProperty("dataControlSheet"));
		int msgIdColIndex = Integer.parseInt(p.getProperty("msgId"));
		int rowCount = sheetControl.getLastRowNum();
		String controlName = "";

		// Find name of control
		for (int i = 0; i <= rowCount; i++) {
			String cellValue = "";

			XSSFRow rowControlData = sheetControl.getRow(i);
			XSSFCell cellControlData = rowControlData.getCell(msgIdColIndex);
			if (cellControlData != null) {
				cellValue = cellControlData.getStringCellValue();
			}

			if (cellValue.trim().equals(msgID)) {
				controlName = rowControlData.getCell(1).getStringCellValue();
				break;
			} else {
				try {
					String[] msgIdList = cellValue.trim().split("\n");
					for (int j = 0; j < msgIdList.length; j++) {
						if (msgIdList[j].trim().equals(msgID)) {
							controlName = rowControlData.getCell(1).getStringCellValue();
							break;
						}
					}
				} catch (Exception e) {
				}
			}
		}

		// Locate row that contain control name and has description about validate
		// format
		int testCaseRowIndex = 0;
		for (int i = 0; i <= sheetTestcasesRowCount; i++) {
			String description = "";
			XSSFRow rowTestcase = sheetTestcases.getRow(i);
			XSSFCell cellDesc = rowTestcase.getCell(1);
			if (cellDesc != null) {
				try {
					description = cellDesc.getStringCellValue();
				} catch (Exception e) {
				}
			}

			if (description.contains("[" + controlName + "]") && description.contains("không hợp lệ")) {
				testCaseRowIndex = i;
				break;
			}
		}

		// Write result to row
		XSSFCell cellResult = sheetTestcases.getRow(testCaseRowIndex).getCell(overallResultColIndex);
		String overallResult = "";
		if (cellResult != null) {
			overallResult = cellResult.getStringCellValue();
		}
		if (!overallResult.equals(resultValueInUpperCase)) {
			cellResult.setCellValue(resultValueInUpperCase);
		}
	}

	/**
	 * Add new Soft Assertion into Soft Assertion List.
	 *
	 * @param _assertion
	 * @param _description
	 * @param _expected
	 * @param _actual
	 */
	public static void addSoftAssertion(String _assertion, String _description, boolean _expected, boolean _actual) {
		addSoftAssertion("", _assertion, _description, _expected, _actual);
	}

	/**
	 * Add new Soft Assertion into Soft Assertion List.
	 *
	 * @param _assertionKey
	 * @param _assertion
	 * @param _description
	 * @param _expected
	 * @param _actual
	 */
	public static void addSoftAssertion(String _assertionKey, String _assertion, String _description, boolean _expected,
			boolean _actual) {
		// Compare expected and actual
		String result = "PASSED";
		if (_expected != _actual) {
			result = "FAILURE";
		}
		addSoftAssertion(_assertionKey, _assertion, _description, new Boolean(_expected).toString(),
				new Boolean(_actual).toString(), result);
	}

	/**
	 * Add new Soft Assertion which contain boolean annotation into Soft Assertion
	 * List.
	 * 
	 * @param _assertionKey
	 * @param _assertion
	 * @param _description
	 * @param _expected
	 * @param _actual
	 */
	public static void addAnnotationSoftAssertion(String _assertionKey, String _assertion, String _description,
			String _expected, boolean _actual) {
		boolean bExpected = true;
		if (_expected.contains("@MARK SELECT@@") || _expected.contains("@MARK HASFOCUS@@")
				|| _expected.contains("@MARK ENABLED@@") || _expected.contains("@MARK VISIBLE@@")) {
			bExpected = true;
		} else if (_expected.contains("@MARK DESELECT@@") || _expected.contains("@MARK NOFOCUS@@")
				|| _expected.contains("@MARK DISABLED@@") || _expected.contains("@MARK INVISIBLE@@")) {
			bExpected = false;
		}
		String result = "PASSED";
		if (bExpected != _actual) {
			result = "FAILURE";
		}
		addSoftAssertion(_assertionKey, _assertion, _description, new Boolean(bExpected).toString(),
				new Boolean(_actual).toString(), result);
	}

	/**
	 * Clear Soft Assertion data
	 *
	 * @param _assertionKey
	 */
	public static void clearSoftAssertion(String _assertionKey) {
		clearTbDataReport(SOFT_ASSERTION_LIST + _assertionKey);
		if (Serenity.sessionVariableCalled(SOFT_ASSERTION_RESULT + _assertionKey) != null) {
			Serenity.setSessionVariable(SOFT_ASSERTION_RESULT + _assertionKey).to(null);
		}
	}

	/**
	 * Clear Soft Assertion data
	 *
	 * @author 
	 */
	public static void clearSoftAssertion() {
		clearSoftAssertion("");
	}

	/**
	 * Generating Soft Assertion
	 *
	 * @param _assertionKey
	 * @return
	 */
	public static String generateSoftAssertion(String _assertionKey) {
		List<List<String>> tbReport = Serenity.sessionVariableCalled(SOFT_ASSERTION_LIST + _assertionKey);
		List<List<String>> tbReport1 = new ArrayList<List<String>>();
		// Count number of FAILURE and PASSED and create report
		int iAssert = 0;
		int iFailure = 0;
		int iPassed = 0;
		// Add Report Header
		List<String> header = Arrays.asList("Assertion", "Description", "Expected", "Actual", "Result");
		tbReport1.add(header);
		// Count result and print out report detail
		for (List<String> temp : tbReport) {
			String result = temp.get(4);
			if (result.equalsIgnoreCase("FAILURE")) {
				iFailure += 1;
			} else if (result.equalsIgnoreCase("PASSED")) {
				iPassed += 1;
			}
			tbReport1.add(new ArrayList<String>(temp));
		}
		iAssert = iFailure + iPassed;
		// Set overall result for this Soft Assertion
		if (iFailure != 0) {
			Serenity.setSessionVariable(SOFT_ASSERTION_RESULT + _assertionKey).to(false);
		} else {
			Serenity.setSessionVariable(SOFT_ASSERTION_RESULT + _assertionKey).to(true);
		}
		// Add Report Result
		String result = "[" + _assertionKey + "]" + System.getProperty("line.separator") + "- Total Assertion: ["
				+ iAssert + "] - Total Passed: [" + iPassed + "] - Total Failure: [" + iFailure + "]"
				+ System.getProperty("line.separator");
		System.out.println(result + generateTbDataReport(tbReport1) + System.getProperty("line.separator") + result);
		Logging.log(result + generateTbDataReport(tbReport1) + System.getProperty("line.separator"));
		return result + generateTbDataReport(tbReport1) + System.getProperty("line.separator") + result;
	}

	/**
	 * Generating Soft Assertion and display failure assertion only
	 *
	 * @param _assertionKey
	 * @return
	 */
	public static String generateSoftAssertionFailureOnly(String _assertionKey) {
		List<List<String>> tbReport = Serenity.sessionVariableCalled(SOFT_ASSERTION_LIST + _assertionKey);
		List<List<String>> tbReport1 = new ArrayList<List<String>>();
		// Count number of FAILURE and PASSED and create report
		int iAssert = 0;
		int iFailure = 0;
		int iPassed = 0;
		// Add Report Header
		List<String> header = Arrays.asList("Assertion", "Description", "Expected", "Actual", "Result");
		tbReport1.add(header);
		// Count result and print out report detail
		for (List<String> temp : tbReport) {
			iAssert += 1;
			String result = temp.get(4);
			if (result.equals("FAILURE")) {
				iFailure += 1;
				tbReport1.add(new ArrayList<String>(temp));
			} else if (result.equalsIgnoreCase("PASSED")) {
				iPassed += 1;
			}
		}
		// Set overall result for this Soft Assertion
		if (iFailure != 0) {
			Serenity.setSessionVariable(SOFT_ASSERTION_RESULT + _assertionKey).to(false);
		} else {
			Serenity.setSessionVariable(SOFT_ASSERTION_RESULT + _assertionKey).to(true);
		}
		// Add Report Result
		String result = "[" + _assertionKey + "]" + System.getProperty("line.separator") + "- Total Assertion: ["
				+ iAssert + "] - Total Passed: [" + iPassed + "] - Total Failure: [" + iFailure + "]"
				+ System.getProperty("line.separator");
		return result + generateTbDataReport(tbReport1) + System.getProperty("line.separator") + result;
	}

	/**
	 * Generating Soft Assertion
	 *
	 * @author 
	 * @return
	 */
	public static String generateSoftAssertion() {
		return generateSoftAssertion("");
	}

	/**
	 * Generating Soft Assertion
	 *
	 * @author 
	 * @return
	 */
	public static String generateSoftAssertionFailureOnly() {
		return generateSoftAssertionFailureOnly("");
	}

	// EndRegion#Soft Assert

	// Region#Data Table
	/**
	 * Update value in Data Table by index of Row and Column. Note: index starts
	 * from 0
	 *
	 * @param _keyDataTableName
	 * @param _colIndex
	 * @param _rowIndex
	 * @param _value
	 */
	public static void updateDataTbVal(String _keyDataTableName, int _colIndex, int _rowIndex, String _value) {
		// Get session data
		HashMap<String, LinkedHashMap<Integer, List<String>>> hSession_DataTable = new HashMap<>();
		hSession_DataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
		// Check Data Table exist or not in Session Data
		if (hSession_DataTable.get(_keyDataTableName) == null) {
			System.out.println("***** ERROR ***** Data Table does not exist. Update value is impossible. ["
					+ _keyDataTableName + "]");
			throw new IllegalArgumentException(
					"Data Table does not exist. Update value is impossible. [" + _keyDataTableName + "]");
		} else {// Update value
			HashMap<String, LinkedHashMap<Integer, List<String>>> hSessionDataTable = new HashMap<>();
			hSessionDataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
			LinkedHashMap<Integer, List<String>> mAddDataTable = hSessionDataTable.get(_keyDataTableName);
			String colName = "";
			String originalVal = "";
			try {
				colName = mAddDataTable.get(0).get(_colIndex);
				originalVal = mAddDataTable.get(_rowIndex).get(_colIndex);
				mAddDataTable.get(_rowIndex).set(_colIndex, _value);
				System.out.println("***** INFO ***** Update [" + originalVal + "] by [" + _value + "] in Data Table ["
						+ _keyDataTableName + "] column [" + colName + "] row [" + _rowIndex + "]");
			} catch (Exception e) {
				System.out.println("***** ERROR ***** Update [" + _value + "] in Data Table [" + _keyDataTableName
						+ "] unsuccessful!. Can not find data at column [" + _colIndex + "] and row [" + _rowIndex
						+ "]");
				throw new IllegalArgumentException("Update [" + _value + "] in Data Table [" + _keyDataTableName
						+ "] unsuccessful!. Can not find data at column [" + _colIndex + "] and row [" + _rowIndex
						+ "]");
			}
		}
	}

	/**
	 * Update value in Data Table by Row index and Column name. Note: index starts
	 * from 0
	 *
	 * @author 
	 * @param _keyDataTableName
	 * @param _colName
	 * @param _rowIndex
	 * @param _value
	 */
	public static void updateDataTbVal(String _keyDataTableName, String _colName, int _rowIndex, String _value) {
		// Get session data
		HashMap<String, LinkedHashMap<Integer, List<String>>> hSession_DataTable = new HashMap<>();
		hSession_DataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
		// Check Data Table exist or not in Session Data
		if (hSession_DataTable.get(_keyDataTableName) == null) {
			System.out.println("***** ERROR ***** Data Table does not exist. Update value is impossible. ["
					+ _keyDataTableName + "]");
			throw new IllegalArgumentException(
					"Data Table does not exist. Update value is impossible. [" + _keyDataTableName + "]");
		} else {// Update value
			HashMap<String, LinkedHashMap<Integer, List<String>>> hSessionDataTable = new HashMap<>();
			hSessionDataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
			LinkedHashMap<Integer, List<String>> mAddDataTable = hSessionDataTable.get(_keyDataTableName);
			int colIndex = 0;
			String originalVal = "";
			try {
				colIndex = mAddDataTable.get(0).indexOf(_colName);
				originalVal = mAddDataTable.get(_rowIndex).get(colIndex);
				mAddDataTable.get(_rowIndex).set(colIndex, _value);
				System.out.println("***** INFO ***** Update [" + originalVal + "] by [" + _value + "] in Data Table ["
						+ _keyDataTableName + "] column [" + _colName + "] row [" + _rowIndex + "]");
			} catch (Exception e) {
				System.out.println("***** ERROR ***** Update [" + _value + "] in Data Table [" + _keyDataTableName
						+ "] unsuccessful!. Can not find data at column [" + _colName + "] and row [" + _rowIndex
						+ "]");
				throw new IllegalArgumentException("Update [" + _value + "] in Data Table [" + _keyDataTableName
						+ "] unsuccessful!. Can not find data at column [" + _colName + "] and row [" + _rowIndex
						+ "]");
			}
		}
	}

	/**
	 * Add new Row data before the last existed row into Data Table in Session Data
	 * variable.
	 *
	 * @author 
	 * @param _keyDataTableName
	 * @param _newRowData
	 */
	public static void addDataTbNewRow(String _keyDataTableName, List<String> _newRowData) {
		addDataTbNewRow(_keyDataTableName, _newRowData, -1);
	}

	/**
	 * Add new Row data into Data Table in Session Data variable. Note: if index of
	 * new Row out of number existed row or negative value, new Row will be added
	 * before the last existed Row.It is not permitted to add new row to Data Table
	 * Header(index = 0)
	 *
	 * @author 
	 * @param _keyDataTableName
	 * @param _newRowData
	 * @param _index
	 */

	public static void addDataTbNewRow(String _keyDataTableName, List<String> _newRowData, int _index) {
		// Get session data
		HashMap<String, LinkedHashMap<Integer, List<String>>> hSession_DataTable = new HashMap<>();
		hSession_DataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
		// If session data not exist then initialize
		if (hSession_DataTable == null) {
			HashMap<String, LinkedHashMap<Integer, List<String>>> hDataTable = new HashMap<>();
			Serenity.setSessionVariable(TABLE_DATA_LIST).to(hDataTable);
			hSession_DataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
		}
		// Check Data Table exist or not in Session Data
		if (hSession_DataTable.get(_keyDataTableName) == null) {
			System.out.println("***** ERROR ***** Data Table does not exist. Adding more row is impossible. ["
					+ _keyDataTableName + "]");
		} else {// Adding new row
			HashMap<String, LinkedHashMap<Integer, List<String>>> hSessionDataTable = new HashMap<>();
			hSessionDataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
			LinkedHashMap<Integer, List<String>> mAddDataTable = hSessionDataTable.get(_keyDataTableName);
			int numCol = mAddDataTable.get(0).size();
			// Validate input
			if (_index == 0) {
				System.out.println("***** ERROR ***** It is not permitted to add new row to Data Table Header");
				throw new IllegalArgumentException(
						"It is not permitted to add new row to header of Data Table. Data Table [" + _keyDataTableName
								+ "]");
			}
			System.out.println("***** INFO ***** Adding new row into Data Table [" + _keyDataTableName + "]");
			if (_newRowData.size() != numCol) {
				System.out.println(
						"***** WARNING ***** New row data does not map with Data Table [" + _keyDataTableName + "]");
				System.out.println("***** WARNING ***** Data Table Header size is [" + numCol + "]");
				System.out.println("***** WARNING ***** New row data size is [" + _newRowData.size() + "]");
			}
			// Create new instant for data to insert
			LinkedHashMap<Integer, List<String>> newAddDataTable = new LinkedHashMap<>();
			// Insert new row
			// If index > the last row or negative, add before the last row
			int lastRowIndex = 0;
			for (int key : mAddDataTable.keySet()) {
				if (key < _index) {
					newAddDataTable.put(key, mAddDataTable.get(key));
				}
				if (key == _index) {
					newAddDataTable.put(key, _newRowData);
				}
				if (key >= _index) {
					newAddDataTable.put(key + 1, mAddDataTable.get(key));
				}
				lastRowIndex = key;
			}
			if (_index > lastRowIndex || _index < 0) {
				newAddDataTable.put(lastRowIndex + 1, _newRowData);
			}
			hSession_DataTable.put(_keyDataTableName, newAddDataTable);
			Serenity.setSessionVariable(TABLE_DATA_LIST).to(hSession_DataTable);
		}
	}

	/**
	 * Remove existed Row data of Data Table in Session Data variable. Negative
	 * value will remove the last row. Note: if index of Row out of number existed
	 * row will raise Exception.Index starts from 0 (0 is header row and can not be
	 * removed).
	 *
	 * @author 
	 * @param _keyDataTableName
	 * @param _index
	 */
	public static void removeDataTbRow(String _keyDataTableName, int _index) {
		// Get session data
		HashMap<String, LinkedHashMap<Integer, List<String>>> hSession_DataTable = new HashMap<>();
		hSession_DataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
		// If session data not exist then initialize
		if (hSession_DataTable == null) {
			HashMap<String, LinkedHashMap<Integer, List<String>>> hDataTable = new HashMap<>();
			Serenity.setSessionVariable(TABLE_DATA_LIST).to(hDataTable);
			hSession_DataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
		}
		// Check Data Table exist or not in Session Data
		if (hSession_DataTable.get(_keyDataTableName) == null) {
			System.out.println("***** ERROR ***** Data Table does not exist. Remove existed row is impossible. ["
					+ _keyDataTableName + "]");
		} else {// Adding new row
			HashMap<String, LinkedHashMap<Integer, List<String>>> hSessionDataTable = new HashMap<>();
			hSessionDataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
			LinkedHashMap<Integer, List<String>> mAddDataTable = hSessionDataTable.get(_keyDataTableName);
			// Validate input
			if (_index == 0) {
				System.out.println("***** ERROR ***** It is not permitted to remove Data Table Header");
				throw new IllegalArgumentException(
						"It is not permitted to remove header of Data Table. Data Table [" + _keyDataTableName + "]");
			}
			System.out
					.println("***** INFO ***** Remove row [" + _index + "] of Data Table [" + _keyDataTableName + "]");
			// Create new instant for data to remove
			LinkedHashMap<Integer, List<String>> newAddDataTable = new LinkedHashMap<>();
			// Remove row
			// If index is negative value, remove row before the last row
			int lastRowIndex = 0;
			for (int key : mAddDataTable.keySet()) {
				if (key < _index) {
					newAddDataTable.put(key, mAddDataTable.get(key));
				}
				if (key == _index) {
					// remove this row
				}
				if (key > _index) {
					newAddDataTable.put(key - 1, mAddDataTable.get(key));
				}
				lastRowIndex = key;
			}
			if (_index < 0) {
				newAddDataTable.remove(lastRowIndex);
			}
			// If index > index of last existed row,raise error
			if (_index > lastRowIndex) {
				System.out.println("***** ERROR ***** Row [" + _index
						+ "] does not exist. Remove existed row is impossible. Data Table [" + _keyDataTableName + "]");
				throw new IllegalArgumentException("Row [" + _index
						+ "] does not exist. Remove existed row is impossible. Data Table [" + _keyDataTableName + "]");
			}
			hSession_DataTable.put(_keyDataTableName, newAddDataTable);
			Serenity.setSessionVariable(TABLE_DATA_LIST).to(hSession_DataTable);
		}
	}

	/**
	 * Add new Column into Data Table in Session Data variable. Note: if index of
	 * new Column out of Column ranger or negative value, new Column will be added
	 * before the last existed Column.
	 *
	 * @author 
	 * @param _keyDataTableName
	 * @param _fileName
	 * @param _sheetname
	 * @param bOnceTime
	 */
	public static void addDataTbNewColumn(String _keyDataTableName, String _newColName, int _index) {
		// Get session data
		HashMap<String, LinkedHashMap<Integer, List<String>>> hSession_DataTable = new HashMap<>();
		hSession_DataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
		// If session data not exist then initialize
		if (hSession_DataTable == null) {
			HashMap<String, LinkedHashMap<Integer, List<String>>> hDataTable = new HashMap<>();
			Serenity.setSessionVariable(TABLE_DATA_LIST).to(hDataTable);
			hSession_DataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
		}
		// Check Data Table exist or not in Session Data
		if (hSession_DataTable.get(_keyDataTableName) == null) {
			System.out.println("***** ERROR ***** Data Table does not exist. Adding more column is impossible. ["
					+ _keyDataTableName + "]");
			throw new IllegalArgumentException(
					"Data Table does not exist. Adding more column is impossible. [" + _keyDataTableName + "]");
		} else {// Adding more column
			HashMap<String, LinkedHashMap<Integer, List<String>>> hSessionDataTable = new HashMap<>();
			hSessionDataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
			LinkedHashMap<Integer, List<String>> mAddDataTable = hSessionDataTable.get(_keyDataTableName);
			int numCol = mAddDataTable.get(0).size();

			if (_index == 0) {
				System.out.println("***** INFO ***** Adding the first column [" + _newColName + "] into Data Table ["
						+ _keyDataTableName + "]");
			} else if (_index <= numCol) {
				String afterColName = getDataTbColName(_keyDataTableName, _index - 1);
				System.out.println("***** INFO ***** Adding column [" + _newColName + "] after column [" + afterColName
						+ "] into Data Table [" + _keyDataTableName + "]");
			} else if (_index > numCol || _index < 0) {// add to the last
				String afterColName = getDataTbColName(_keyDataTableName, _index);
				System.out.println("***** INFO ***** Adding column [" + _newColName + "] before column [" + afterColName
						+ "] into Data Table [" + _keyDataTableName + "]");
				_index = numCol;
			}
			for (int row : mAddDataTable.keySet()) {
				// Add new header
				if (row == 0) {
					mAddDataTable.get(row).add(_index, _newColName);
				} else {// add blank value to other row
					mAddDataTable.get(row).add(_index, "");
				}
			}
		}
	}

	/**
	 * Add new Column into Data Table in Session Data variable. New Column will be
	 * added before the last existed Column.
	 *
	 * @author 
	 * @param _keyDataTableName
	 * @param _newColName
	 */
	public static void addDataTbNewColumn(String _keyDataTableName, String _newColName) {
		addDataTbNewColumn(_keyDataTableName, _newColName, -1);
	}

	/**
	 * Load data from data table in feature file to raw data
	 *
	 * @author 
	 * @param _dataTable
	 * @return
	 */
	private static LinkedHashMap<Integer, List<String>> loadDataTable(List<List<String>> _dataTable) {
		// Used the LinkedHashMap to maintain the order
		LinkedHashMap<Integer, List<String>> hashMap = new LinkedHashMap<Integer, List<String>>();
		// Add
		for (int i = 0; i < _dataTable.size(); i++) {
			hashMap.put(i, _dataTable.get(i));
		}
		return hashMap;
	}

	/**
	 * Store data table (data in specific sheet of Excel file) to Session Data
	 * variable.
	 *
	 * @author 
	 * @param _keyDataTableName
	 * @param _fileName
	 * @param _sheetname
	 * @param bOnceTime
	 * @throws InvalidFormatException 
	 */
	public static void addDataTable(String _keyDataTableName, String _fileName, String _sheetName, boolean bOnceTime) throws InvalidFormatException {
		// Get session data
		File file = new File(_fileName);
		HashMap<String, LinkedHashMap<Integer, List<String>>> hSession_DataTable = new HashMap<>();
		hSession_DataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
		// If session data not exist then initialize
		if (hSession_DataTable == null) {
			HashMap<String, LinkedHashMap<Integer, List<String>>> hDataTable = new HashMap<>();
			Serenity.setSessionVariable(TABLE_DATA_LIST).to(hDataTable);
			hSession_DataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
		}
		// Check Data Table exist or not in Session Data
		boolean bExist = true;
		if (hSession_DataTable.get(_keyDataTableName) == null) {
			bExist = false;
		}

		// Load data from excel sheet to data table
		if (((bExist) && (!bOnceTime)) || (!bExist)) {
			// Add data for session data
			LinkedHashMap<Integer, List<String>> mAddDataTable = new LinkedHashMap<>();
			System.out.println("***** INFO ***** Loading data from Data Table into [" + _keyDataTableName + "]");
			mAddDataTable = Excel.loadExcelLinesByHeaderRanger(file, _sheetName);
			hSession_DataTable.put(_keyDataTableName, mAddDataTable);
			Serenity.setSessionVariable(TABLE_DATA_LIST).to(hSession_DataTable);
		}
	}

	/**
	 * Store data table (data in specific sheet of Excel file) to Session Data
	 * variable.
	 *
	 * @author 
	 * @param _keyDataTableName
	 * @param _fileName
	 * @param _sheetname
	 * @throws InvalidFormatException 
	 */
	public static void addDataTable(String _keyDataTableName, String _fileName, String _sheetName) throws InvalidFormatException {
		addDataTable(_keyDataTableName, _fileName, _sheetName, true);
	}

	/**
	 * Store data table (description in feature file) to Session Data variable.
	 *
	 * @author 
	 * @param _keyDataTableName
	 * @param _dataTable
	 */
	public static void addDataTable(String _keyDataTableName, List<List<String>> _dataTable, boolean bOnceTime) {
		// Get session data
		HashMap<String, LinkedHashMap<Integer, List<String>>> hSession_DataTable = new HashMap<>();
		hSession_DataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
		// If session data not exist then initialize
		if (hSession_DataTable == null) {
			HashMap<String, LinkedHashMap<Integer, List<String>>> hDataTable = new HashMap<>();
			Serenity.setSessionVariable(TABLE_DATA_LIST).to(hDataTable);
			hSession_DataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
		}
		// Check Data Table exist or not in Session Data
		boolean bExist = true;
		if (hSession_DataTable.get(_keyDataTableName) == null) {
			bExist = false;
		}

		if (((bExist) && (!bOnceTime)) || (!bExist)) {
			// Add data for session data
			LinkedHashMap<Integer, List<String>> mAddDataTable = new LinkedHashMap<>();
			System.out.println("***** INFO ***** Loading data from Data Table into [" + _keyDataTableName + "]");
			mAddDataTable = loadDataTable(_dataTable);
			hSession_DataTable.put(_keyDataTableName, mAddDataTable);
			Serenity.setSessionVariable(TABLE_DATA_LIST).to(hSession_DataTable);
		}
	}

	/**
	 * Store data table (description in feature file) to Session Data variable.
	 *
	 * @author 
	 * @param _keyDataTableName
	 * @param _dataTable
	 */
	public static void addDataTable(String _keyDataTableName, LinkedHashMap<Integer, List<String>> _dataTable,
			boolean bOnceTime) {
		// Get session data
		HashMap<String, LinkedHashMap<Integer, List<String>>> hSession_DataTable = new HashMap<>();
		hSession_DataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
		// If session data not exist then initialize
		if (hSession_DataTable == null) {
			HashMap<String, LinkedHashMap<Integer, List<String>>> hDataTable = new HashMap<>();
			Serenity.setSessionVariable(TABLE_DATA_LIST).to(hDataTable);
			hSession_DataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
		}
		// Check Data Table exist or not in Session Data
		boolean bExist = true;
		if (hSession_DataTable.get(_keyDataTableName) == null) {
			bExist = false;
		}
		if (((bExist) && (!bOnceTime)) || (!bExist)) {
			// Add data for session data
			System.out.println("***** INFO ***** Loading data from Data Table into [" + _keyDataTableName + "]");
			hSession_DataTable.put(_keyDataTableName, _dataTable);
			Serenity.setSessionVariable(TABLE_DATA_LIST).to(hSession_DataTable);
		}
	}

	/**
	 * Get next row key by given row and number of next row.
	 * 
	 * @param data
	 * @param currentRow
	 * @param next
	 * @return -1 : no next row, -2 : current row not exist
	 */
	public static int getDataNextRowKey(LinkedHashMap<Integer, List<String>> _data, int _currentRow, int _next) {
		int iNextRowKey = -2;
		for (int row : _data.keySet()) {
			if (iNextRowKey == -1) {
				_next -= 1;
				if (_next == 0) {
					iNextRowKey = row;
					break;
				}
			}
			if (row == _currentRow) {
				iNextRowKey = -1;
			}
		}
		return iNextRowKey;
	}

	/**
	 * Get next row key by given row.
	 * 
	 * @param data
	 * @param currentRow
	 * @param next
	 * @return -1 : no next row, -2 : current row not exist
	 */
	public static int getDataTbNextRowKey(LinkedHashMap<Integer, List<String>> _data, int _currentRow) {
		return getDataNextRowKey(_data, _currentRow, 1);
	}

	/**
	 * Store data table one times (description in feature file) to Session Data
	 * variable.
	 *
	 * @author 
	 * @param _keyDataTableName
	 * @param _dataTable
	 */
	public static void addDataTable(String _keyDataTableName, List<List<String>> _dataTable) {
		addDataTable(_keyDataTableName, _dataTable, true);
	}

	/**
	 * Remove data table (description in feature file) from Session Data variable.
	 *
	 * @author 
	 * @param _keyDataTableName
	 */
	public static void removeDataTable(String _keyDataTableName) {
		// Remove data data table
		HashMap<String, LinkedHashMap<Integer, List<String>>> hSessionDataTable = new HashMap<>();
		hSessionDataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
		hSessionDataTable.remove(_keyDataTableName);
		Serenity.setSessionVariable(TABLE_DATA_LIST).to(hSessionDataTable);
		System.out.println("***** INFO ***** Remove Data Table [" + _keyDataTableName + "] from Session Data");
	}

	/**
	 * Get data table rows (data table description in feature file) from Session
	 * Data variable by added Data Table Key.
	 *
	 * @author 
	 * @param _dataTableKey
	 * @return
	 */
	public static LinkedHashMap<Integer, List<String>> getDataTbRows(String _dataTableKey) {
		HashMap<String, LinkedHashMap<Integer, List<String>>> hSessionDataTable = new HashMap<>();
		hSessionDataTable = Serenity.sessionVariableCalled(TABLE_DATA_LIST);
		return hSessionDataTable.get(_dataTableKey);
	}

	/**
	 * Get data table rows (data table description in feature file) without header
	 * (without first row) from Session Data variable by added Data Table Key.
	 *
	 * @author 
	 * @param _dataTableKey
	 * @return
	 */
	public static LinkedHashMap<Integer, List<String>> getDataTbRowsNoHeader(String _dataTableKey) {
		HashMap<String, LinkedHashMap<Integer, List<String>>> hSessionDataTable = Serenity
				.sessionVariableCalled(TABLE_DATA_LIST);
		LinkedHashMap<Integer, List<String>> ret = new LinkedHashMap<Integer, List<String>>(
				hSessionDataTable.get(_dataTableKey));
		ret.remove(0);
		return ret;
	}

	/**
	 * Get data table row (data table description in feature file) from Session Data
	 * variable by Row Index.
	 *
	 * @author 
	 * @param _dataTableKey
	 * @param _row
	 * @return List<String>
	 */
	public static List<String> getDataTbRowByRowIndex(String _dataTableKey, int _row) {
		return getDataTbRows(_dataTableKey).get(_row);
	}

	/**
	 * Get index of data table column (data table description in feature file) from
	 * Session Data variable by Column Name.
	 *
	 * @author 
	 * @param _dataTableKey
	 * @param _colName
	 * @return
	 */
	public static int getDataTbColIndex(String _dataTableKey, String _colName) {
		int colIndex = getDataTbRows(_dataTableKey).get(0).indexOf(_colName);
		if (colIndex == -1) {
			System.out
					.println("***ERROR*** Column [" + _colName + "] not found in Data Table [" + _dataTableKey + "].");
			throw new IllegalArgumentException(
					"Column [" + _colName + "] not found in Data Table [" + _dataTableKey + "]. Re check data !");
		}
		return colIndex;
	}

	/**
	 * Get name of data table column (data table description in feature file) from
	 * Session Data variable by Column index. Return null if not found.
	 *
	 * @author 
	 * @param _dataTableKey
	 * @param _colIndex
	 * @return
	 */
	public static String getDataTbColName(String _dataTableKey, int _colIndex) {
		String colName = null;
		try {
			colName = getDataTbRows(_dataTableKey).get(0).get(_colIndex);
		} catch (Exception e) {
			System.out.println(
					"***ERROR*** Column Index [" + _colIndex + "] not found in Data Table [" + _dataTableKey + "].");
			throw new IllegalArgumentException("Column Index [" + _colIndex + "] not found in Data Table ["
					+ _dataTableKey + "]. Re check data !");
		}
		return colName;
	}

	/**
	 * Get data rows (data table description in feature file) from Session Data
	 * variable by given Value equals in specific Column Name.
	 *
	 * @author 
	 * @param _dataTableKey
	 * @param _colName
	 * @param _givenVal
	 * @return
	 */
	public static LinkedHashMap<Integer, List<String>> getDataTbRowsByValEqualInCol(String _dataTableKey,
			String _colName, String _givenVal) {
		LinkedHashMap<Integer, List<String>> lhTempSessionDataTable = getDataTbRows(_dataTableKey);
		LinkedHashMap<Integer, List<String>> lhOuput = new LinkedHashMap<>();
		int colIndex = lhTempSessionDataTable.get(0).indexOf(_colName);
		if (colIndex == -1) {
			System.out
					.println("***ERROR*** Column [" + _colName + "] not found in Data Table [" + _dataTableKey + "].");
			throw new IllegalArgumentException(
					"Column [" + _colName + "] not found in Data Table [" + _dataTableKey + "]. Re check data !");
		} else {
			// Loop through data in data table and add match data row
			for (int key : lhTempSessionDataTable.keySet()) {
				List<String> lTemp = lhTempSessionDataTable.get(key);
				if (!(lTemp.size() == 0)) {
					if (lTemp.get(colIndex).equals(_givenVal)) {
						lhOuput.put(key, lTemp);
					}
				} else {
					System.out.println(
							"***ERROR*** Data Row not found in Data Table [" + _dataTableKey + "].[" + key + "].");
					throw new IllegalArgumentException(
							"Data Row not found in Data Table [" + _dataTableKey + "].[" + key + "]. Re check data !");
				}
			}
		}
		return lhOuput;
	}

	/**
	 * Get data rows (data table description in feature file) from Session Data
	 * variable by given Value equals in specific Column Name and reset linked
	 * integer key
	 *
	 * @author 
	 * @param _dataTableKey
	 * @param _colName
	 * @param _givenVal
	 * @return
	 */
	public static LinkedHashMap<Integer, List<String>> getDataTbRowsByValEqualInColResetKey(String _dataTableKey,
			String _colName, String _givenVal) {
		LinkedHashMap<Integer, List<String>> lhTempSessionDataTable = getDataTbRows(_dataTableKey);
		LinkedHashMap<Integer, List<String>> lhOuput = new LinkedHashMap<>();
		int colIndex = lhTempSessionDataTable.get(0).indexOf(_colName);
		if (colIndex == -1) {
			System.out
					.println("***ERROR*** Column [" + _colName + "] not found in Data Table [" + _dataTableKey + "].");
			throw new IllegalArgumentException(
					"Column [" + _colName + "] not found in Data Table [" + _dataTableKey + "]. Re check data !");
		} else {
			// Loop through data in data table and add match data row
			int i = 1;// Reset key in table
			for (int key : lhTempSessionDataTable.keySet()) {
				List<String> lTemp = lhTempSessionDataTable.get(key);
				if (!(lTemp.size() == 0)) {
					if (lTemp.get(colIndex).equals(_givenVal)) {
						lhOuput.put(i, lTemp);
						i++;
					}
				} else {
					System.out.println(
							"***ERROR*** Data Row not found in Data Table [" + _dataTableKey + "].[" + key + "].");
					throw new IllegalArgumentException(
							"Data Row not found in Data Table [" + _dataTableKey + "].[" + key + "]. Re check data !");
				}
			}
		}
		return lhOuput;
	}

	/**
	 * Get data rows (data table description in feature file) from Session Data
	 * variable by given Value is contained in specific Column Name.
	 *
	 * @author 
	 * @param _dataTableKey
	 * @param _colName
	 * @param _givenVal
	 * @return
	 */
	public static LinkedHashMap<Integer, List<String>> getDataTbRowsByValContainsInCol(String _dataTableKey,
			String _colName, String _givenVal) {
		LinkedHashMap<Integer, List<String>> lhTempSessionDataTable = getDataTbRows(_dataTableKey);
		LinkedHashMap<Integer, List<String>> lhOuput = new LinkedHashMap<>();
		int colIndex = lhTempSessionDataTable.get(0).indexOf(_colName);
		if (colIndex == -1) {
			System.out
					.println("***ERROR*** Column [" + _colName + "] not found in Data Table [" + _dataTableKey + "].");
			throw new IllegalArgumentException(
					"Column [" + _colName + "] not found in Data Table [" + _dataTableKey + "]. Re check data !");
		} else {
			// Loop through data in data table and add match data row
			for (int key : lhTempSessionDataTable.keySet()) {
				List<String> lTemp = lhTempSessionDataTable.get(key);
				if (!(lTemp.size() == 0)) {
					if (lTemp.get(colIndex).contains(_givenVal)) {
						lhOuput.put(key, lTemp);
					}
				} else {
					System.out.println("***ERROR*** There are unexpected errors in Data Table [" + _dataTableKey + "].["
							+ key + "].");
				}
			}
		}
		return lhOuput;
	}

	/**
	 * Get cell data value (data table description in feature file) from Session
	 * Data variable by index of Row and Column Name.
	 *
	 * @author 
	 * @param _dataTableKey
	 * @param _rowIndex
	 * @param _colName
	 * @return
	 */
	public static String getDataTbVal(String _dataTableKey, int _rowIndex, String _colName) {
		String ret = "";
		LinkedHashMap<Integer, List<String>> lhTempSessionDataTable = getDataTbRows(_dataTableKey);
		int colIndex = lhTempSessionDataTable.get(0).indexOf(_colName);
		if (colIndex == -1) {
			System.out.println(
					"***WARNING*** Column [" + _colName + "] not found in Data Table [" + _dataTableKey + "].");
			return ret;
		} else {
			try {
				ret = lhTempSessionDataTable.get(_rowIndex).get(colIndex);
				// Replace common annotation, specific annotation not replace here
				ret = replaceAllAnnotation(ret);
			} catch (Exception e) {
				ret = "";
				System.out.println(
						"***WARNING*** Row [" + _rowIndex + "] not found in Data Table [" + _dataTableKey + "].");
			}

		}
		return ret;
	}

	/**
	 * Get cell data value (data table description in feature file) from Session
	 * Data variable by index of Row and Column.Noted: index start from 0.
	 *
	 * @author 
	 * @param _dataTableKey
	 * @param _rowIndex
	 * @param _colIndex
	 * @return
	 */
	public static String getDataTbVal(String _dataTableKey, int _rowIndex, int _colIndex) {
		String ret = "";
		LinkedHashMap<Integer, List<String>> lhTempSessionDataTable = getDataTbRows(_dataTableKey);
		try {
			ret = lhTempSessionDataTable.get(_rowIndex).get(_colIndex);
		} catch (Exception e) {
			ret = "";
			System.out
					.println("***WARNING*** Row [" + _rowIndex + "] not found in Data Table [" + _dataTableKey + "].");
		}
		return ret;
	}

	/**
	 * Get list of Cell value in specific Column Name (data table description in
	 * feature file) from Session Data variable by reference Value of reference
	 * ColumnName.
	 *
	 * @author 
	 * @param _dataTableKey
	 * @param _refColName
	 * @param _refValue
	 * @param _givenColName
	 * @return
	 */
	public static List<String> getDataTbValsByRefVal(String _dataTableKey, String _refColName, String _refValue,
			String _givenColName) {
		// Get column index
		LinkedHashMap<Integer, List<String>> lhData = getDataTbRows(_dataTableKey);
		int colRefIndex = lhData.get(0).indexOf(_refColName);
		if (colRefIndex == -1) {
			System.out.println(
					"***WARNING*** Column [" + _refColName + "] not found in Data Table [" + _dataTableKey + "].");
			return null;
		}
		int colIndex = lhData.get(0).indexOf(_givenColName);
		if (colIndex == -1) {
			System.out.println(
					"***WARNING*** Column [" + _givenColName + "] not found in Data Table [" + _dataTableKey + "].");
			return null;
		}
		List<String> lResulValue = new ArrayList<String>();
		for (Integer key : lhData.keySet()) {
			if (lhData.get(key).size() == 0) {
				System.out.println("***Warning*** No data in row [" + key + "] of [" + _dataTableKey + "].");
			} else {
				try {
					if (lhData.get(key).get(colRefIndex).equals(_refValue)) {
						lResulValue.add(lhData.get(key).get(colIndex));
					}
				} catch (Exception e) {
					System.out.println(
							"***ERROR*** Incorret data format with row  [" + key + "] of [" + _dataTableKey + "].");
					throw e;
				}
			}
		}
		return lResulValue;
	}

	// #EndRegion#Data Table
	// #Region#Data Annotation Replacement
	private static final List<String> ANNOTATION_DEFINE = Arrays.asList("@DATA", "@DATE", "@MAXI", "@MAXIC", "@MAXID",
			"@MAXS", "@MAXSU", "@MAXSL", "@MAXM", "@MAXMU", "@MAXML", "@MAXU", "@MAXUL", "@MAXUU", "@RAND", "@IGNORE");
	private static final String ANNOTATION_END_MARK = "@@";

	public static String replaceAllAnnotation(String _input) {
		String output = _input;
		output = output.replace("@num;", "#");
		output = output.replace("@nbsp;", " ");
		output = output.replace("@verbar;", "|");
		List<String> lAnnotion = getAllAnnotation(_input);
		for (String annotation : lAnnotion) {
			if (annotation.startsWith("@DATA")) {
				output = output.replace(annotation, replaceAnnotationData(annotation));
			}
			if (annotation.startsWith("@DATE")) {
				output = output.replace(annotation, replaceAnnotationDate(annotation));
			}
			if (annotation.startsWith("@MAX")) {
				output = output.replace(annotation, replaceAnnotationMax(annotation));
			}
			if (annotation.startsWith("@RAN")) {
				output = output.replace(annotation, replaceAnnotationRandom(annotation));
			}
		}
		return output;
	}

	private static final List<String> ANNOTATION_MARK = Arrays.asList("@MARK SELECT@@", "@MARK DESELECT@@",
			"@MARK HASFOCUS@@", "@MARK NOTFOCUS@@", "@MARK DISABLED@@", "@MARK ENABLED@@", "@MARK READONLY@@",
			"@MARK VISIBLE@@", "@MARK INVISIBLE@@");

	/**
	 * Remove all mark annotation data
	 * 
	 * @param _data
	 * @return
	 */
	public static String removeMarkAnnotation(String _data) {
		for (String markAnno : ANNOTATION_MARK) {
			_data = _data.replace(markAnno, "");
		}
		return _data;
	}

	/**
	 * Check input data contains Mark Annotation or not
	 * 
	 * @param _data
	 */
	public static boolean containMarkAnnotation(String _data) {
		for (String markAnno : ANNOTATION_MARK) {
			if (_data.contains(markAnno)) {
				return true;
			}
		}
		return false;
	}

	// @DATA
	private static String replaceAnnotationData(String _annotation) {
		String sBeginMark = "@DATA";
		String output = _annotation;
		String sKeyName = "";
		String indexInListKeyName = "";
		try {
			int index1 = _annotation.indexOf(sBeginMark);
			_annotation = _annotation.substring(index1 + sBeginMark.length());
			int index2 = _annotation.indexOf(ANNOTATION_END_MARK);
			int index3 = _annotation.indexOf("==");
			if ((index3 != -1) && (index3 < index2)) { // Contain index of
														// list string
				sKeyName = _annotation.substring(0, index3).trim();
				indexInListKeyName = _annotation.substring(index3 + 2, index2);
				output = SessionData.getListStringByIndex(sKeyName, Integer.parseInt(indexInListKeyName));
			} else {
				sKeyName = _annotation.substring(0, index2).trim();
				output = SessionData.getListStringLastValue(sKeyName);
			}
		} catch (Exception e) {
			System.out.println("***** WARNING ***** : Data with Data Key Anotation not valid : " + _annotation);
		}
		return output;
	}

	// @MAX
	private static String replaceAnnotationMax(String _annotation) {
		String s = "";
		try {
			if (_annotation.contains("@MAXI==")) {
				int iMaxLength = Integer.parseInt(_annotation.replace("@MAXI==", "").replace(ANNOTATION_END_MARK, ""));
				return _annotation.replace(_annotation, SessionData.generateMaxLengthString("1234567890", iMaxLength));
			} else if (_annotation.contains("@MAXIC==")) {
				int iMaxLength = Integer.parseInt(_annotation.replace("@MAXIC==", "").replace(ANNOTATION_END_MARK, ""));
				s = _annotation.replace(_annotation, SessionData.generateMaxLengthString("1234567890", iMaxLength));
				String regex = "(\\d)(?=(\\d{3})+$)";
				String[] splittedNum = s.split("\\.");
				if (splittedNum.length == 2) {
					return splittedNum[0].replaceAll(regex, "$1,") + "." + splittedNum[1];
				} else {
					return s.replaceAll(regex, "$1,");
				}
			} else if (_annotation.contains("@MAXID==")) {
				int iMaxLength = Integer.parseInt(_annotation.replace("@MAXID==", "").replace(ANNOTATION_END_MARK, ""));
				s = _annotation.replace(_annotation, SessionData.generateMaxLengthString("1234567890", iMaxLength));
				String regex = "(\\d)(?=(\\d{3})+$)";
				String[] splittedNum = s.split("\\.");
				if (splittedNum.length == 2) {
					s = splittedNum[0].replaceAll(regex, "$1,") + "." + splittedNum[1];
				} else {
					s = s.replaceAll(regex, "$1,");
				}
				return s.replace(",", ".");
			} else if (_annotation.contains("@MAXM==")) {
				int iMaxLength = Integer.parseInt(_annotation.replace("@MAXM==", "").replace(ANNOTATION_END_MARK, ""));
				return _annotation.replace(_annotation, SessionData.generateMaxLengthString("12 Aut 890", iMaxLength));
			} else if (_annotation.contains("@MAXML==")) {
				int iMaxLength = Integer.parseInt(_annotation.replace("@MAXML==", "").replace(ANNOTATION_END_MARK, ""));
				return _annotation.replace(_annotation, SessionData.generateMaxLengthString("123AutO890", iMaxLength))
						.toLowerCase();
			} else if (_annotation.contains("@MAXMU==")) {
				int iMaxLength = Integer.parseInt(_annotation.replace("@MAXMU==", "").replace(ANNOTATION_END_MARK, ""));
				return _annotation.replace(_annotation, SessionData.generateMaxLengthString("123AutO890", iMaxLength))
						.toUpperCase();
			} else if (_annotation.contains("@MAXS==")) {
				int iMaxLength = Integer.parseInt(_annotation.replace("@MAXS==", "").replace(ANNOTATION_END_MARK, ""));
				return _annotation.replace(_annotation, SessionData.generateMaxLengthString("abcdefghij", iMaxLength));
			} else if (_annotation.contains("@MAXSL==")) {
				int iMaxLength = Integer.parseInt(_annotation.replace("@MAXSL==", "").replace(ANNOTATION_END_MARK, ""));
				return _annotation.replace(_annotation, SessionData.generateMaxLengthString("abcdefghij", iMaxLength))
						.toLowerCase();
			} else if (_annotation.contains("@MAXSU==")) {
				int iMaxLength = Integer.parseInt(_annotation.replace("@MAXSU==", "").replace(ANNOTATION_END_MARK, ""));
				return _annotation.replace(_annotation, SessionData.generateMaxLengthString("abcdefghij", iMaxLength))
						.toUpperCase();
			} else if (_annotation.contains("@MAXU==")) {
				int iMaxLength = Integer.parseInt(_annotation.replace("@MAXU==", "").replace(ANNOTATION_END_MARK, ""));
				return _annotation.replace(_annotation, SessionData.generateMaxLengthString("âđêôưưôêđă", iMaxLength));
			} else if (_annotation.contains("@MAXUL==")) {
				int iMaxLength = Integer.parseInt(_annotation.replace("@MAXUL==", "").replace(ANNOTATION_END_MARK, ""));
				return _annotation.replace(_annotation, SessionData.generateMaxLengthString("ăâđêôơưôơư", iMaxLength))
						.toLowerCase();
			} else if (_annotation.contains("@MAXUU==")) {
				int iMaxLength = Integer.parseInt(_annotation.replace("@MAXUU==", "").replace(ANNOTATION_END_MARK, ""));
				return _annotation.replace(_annotation, SessionData.generateMaxLengthString("ăâđêôơưôơư", iMaxLength))
						.toUpperCase();
			} else {
				System.out.println("***** WARNING ***** : Data with @MAX annotation not handled yet : " + _annotation);
				return _annotation;
			}
		} catch (Exception e) {
			System.out.println("***** WARNING ***** : Data with @MAX Annotation not valid : " + _annotation);
			System.out.println(e.getMessage());
			return _annotation;
		}
	}

	private static String replaceAnnotationRandom(String _annotation) {
		String output = "";
		Calendar c = Calendar.getInstance();
		// @random@4@ random 4 digit
		if (_annotation.equals("@RAND12@@")) {
			SimpleDateFormat random = new SimpleDateFormat("yyMMddHHmmss");
			output = _annotation.replace("@RAND12@@", random.format(c.getTime()).toString());
		} else if (_annotation.equals("@RAND6@@")) {
			SimpleDateFormat random = new SimpleDateFormat("HHmmss");
			output = _annotation.replace("@RAND6@@", random.format(c.getTime()).toString());
		} else {
			System.out.println("***** WARNING ***** : Data with @RAND annotation not handled yet : " + _annotation);
			output = _annotation;
		}
		return output;
	}

	private static String replaceAnnotationIgnore(String _annotation) {
		String output = "";
		int startAnno = _annotation.indexOf("@IGNORE==");
		int endAnno = _annotation.indexOf("@@");
		try {
			int numAnno = Integer.parseInt(_annotation.substring(startAnno + 9, endAnno));
			output = SessionData.generateMaxLengthString("X", numAnno);
		} catch (NumberFormatException nfe) {
			System.out.println("***** ERROR ***** : Incorret annotation format with actual string :");
			System.out.println(output);
			output = _annotation;
		}
		return output;
	}

	private static String replaceAnnotationDate(String _annotation) {
		String output = "";
		String sBeginMark = "@DATE";
		String sMain = "";
		String sEdit = "";
		// Get current date time
		SimpleDateFormat sdf = new SimpleDateFormat("ddMMyyyy");
		String ddMMyyyy = sdf.format(new Date()).toString();
		String dd = ddMMyyyy.substring(0, 2); // now day
		String MM = ddMMyyyy.substring(2, 4); // now month
		String yyyy = ddMMyyyy.substring(4, 8); // now year
		Calendar c = Calendar.getInstance();
		try {
			// Get editing date
			int index1 = _annotation.indexOf(sBeginMark);
			_annotation = _annotation.substring(index1 + sBeginMark.length());
			int index2 = _annotation.indexOf(ANNOTATION_END_MARK);
			int index3 = _annotation.indexOf("==");
			if ((index3 != -1) && (index3 < index2)) { // Contain index of
														// list string
				sMain = _annotation.substring(0, index3);
				sEdit = _annotation.substring(index3 + 2, index2);
			} else {
				sMain = _annotation.substring(0, index2);
				sEdit = "";
			}
			// Parse main date
			if (sMain.contains("ld")) {
				c.setTime(sdf.parse(ddMMyyyy));
				c.set(Calendar.DAY_OF_MONTH, c.getActualMaximum(Calendar.DAY_OF_MONTH));
				ddMMyyyy = sdf.format(c.getTime()).toString();
			}
			// Parse edit date
			if (!sEdit.isEmpty()) {
				int field = Calendar.DATE;
				if (sEdit.contains("dd")) {
					sEdit = sEdit.replace("dd", "");
					field = Calendar.DATE;
				} else if (sEdit.contains("MM")) {
					sEdit = sEdit.replace("MM", "");
					field = Calendar.MONTH;
				} else if (sEdit.contains("yyyy")) {
					sEdit = sEdit.replace("yyyy", "");
					field = Calendar.YEAR;
				}
				int add = Integer.parseInt(sEdit);
				c.setTime(sdf.parse(ddMMyyyy));
				c.add(field, add);
				ddMMyyyy = sdf.format(c.getTime()).toString();
				dd = ddMMyyyy.substring(0, 2); // changed day
				MM = ddMMyyyy.substring(2, 4); // changed month
				yyyy = ddMMyyyy.substring(4, 8); // changed year
			}
			output = sMain.replace("ld", dd).replace("dd", dd).replace("MM", MM).replace("yyyy", yyyy);
		} catch (Exception e) {
			System.out.println("***** WARNING ***** : Data with Date Anotation not valid : " + _annotation);
			output = _annotation;
		}
		return output;
	}

	private static List<String> getAllAnnotation(String _original) {
		List<String> lAnnotion = new ArrayList<String>();
		// Get all annotation to a L
		while (true) {
			int iAnnotationBeginIndex = -1;
			for (String anno : ANNOTATION_DEFINE) {
				int index = _original.indexOf(anno);
				if (index != -1) {
					if (iAnnotationBeginIndex == -1) {
						iAnnotationBeginIndex = index;
					}
					if (iAnnotationBeginIndex > index) {
						iAnnotationBeginIndex = index;
					}
				}
			}
			if (iAnnotationBeginIndex != -1) {
				int iAnnotationEndIndex = -1;
				iAnnotationEndIndex = _original.indexOf(ANNOTATION_END_MARK, iAnnotationBeginIndex);
				if (iAnnotationEndIndex != -1) {
					lAnnotion.add(_original.substring(iAnnotationBeginIndex,
							iAnnotationEndIndex + ANNOTATION_END_MARK.length()));
					_original = _original.substring(iAnnotationEndIndex);
				} else {
					System.out.println("***** WARNING ***** Data contained Annotation but wrong format.");
					break;
				}
			} else {
				break;// Not contain any annotation
			}
		}
		return lAnnotion;
	}

	public static String generateMaxLengthString(String loopString, int max) {
		String sRet = "";
		int maxLoopStringIndex = loopString.length();
		int j = 0;
		for (int i = 0; i < max; i++) {
			if (j == maxLoopStringIndex) {
				j = 0;
			}
			sRet += loopString.charAt(j);
			j++;
		}
		return sRet;
	}

	public static boolean isYes(String _value) {
		_value = _value.toLowerCase();
		if (_value.contains("yes") || _value.contains("y") || _value.contains("co") || _value.contains("true")
				|| _value.contains("dong y") || _value.contains("ok")) {
			return true;
		} else {
			return false;
		}
	}
	// #EndRegion#Data Annotation Replacement
	// #Region# Session Data Variable : List<String>

	/**
	 * Replace annotation for Session Data List String Key EG: input =
	 * "@@KEY1==INDEX1@@@@KEY2==INDEX2"
	 *
	 * @author 
	 * @param input
	 * @return
	 */

	public static String replaceAnnotationByListString(String input) { // Count number of Session Data Key
		String[] aInput = input.split("@@");
		if (aInput.length == 0) {
			return input;
		}
		int iAnotation = 0;
		try {
			iAnotation = aInput.length / 2; // Replace all annotation with data in Data Key
			String sKeyName = "";
			String indexInListKeyName = "";
			String output = "";
			for (int i = 1; i <= iAnotation; i++) {
				int index1 = input.indexOf("@@");
				output += input.substring(0, index1);
				input = input.substring(index1 + 2);
				int index2 = input.indexOf("@@");
				int index3 = input.indexOf("==");
				if ((index3 != -1) && (index3 < index2)) { // Contain index of // list string sKeyName =
					input.substring(0, index3);
					indexInListKeyName = input.substring(index3 + 2, index2);
					output += getListStringByIndex(sKeyName, Integer.parseInt(indexInListKeyName));
				} else {
					sKeyName = input.substring(0, index2);
					output += getListStringLastValue(sKeyName);
				}
				input = input.substring(index2 + 2);
			}
			return output + input;
		} catch (Exception e) {
			System.out.println("***** WARNING ***** : Data with Data Key Anotation not valid : " + input);
		}
		return input;
	}

	/**
	 * Add new string for List<String> via Session Data
	 *
	 * @author 
	 * @param dataKey
	 * @param value
	 */
	public static void addToListString(String dataKey, String value) {
		try {
			System.out.println("***** INFO ***** : Add [" + value + "] value to [" + dataKey + "] KEY");
			List<String> getlString = Serenity.sessionVariableCalled(dataKey);
			getlString.add(value);
			Serenity.setSessionVariable(dataKey).to(getlString);
		} catch (NullPointerException e) {
			System.out.println("***** WARNING ***** : Session Data does not exist: " + dataKey);
			List<String> getlString = new ArrayList<String>();
			getlString.add(value);
			Serenity.setSessionVariable(dataKey).to(getlString);
		}
	}

	/**
	 * Add new unique string for List<String> via Session Data.(List String contains
	 * each different value once)
	 *
	 * @author 
	 * @param dataKey
	 * @param value
	 */
	public static void addUniqueToListString(String dataKey, String value) {
		try {
			System.out.println("***** INFO ***** : Add [" + value + "] value to [" + dataKey + "] KEY");
			List<String> getlString = Serenity.sessionVariableCalled(dataKey);
			if (getlString.indexOf(value) != -1) {
				return;
			}
			getlString.add(value);
			Serenity.setSessionVariable(dataKey).to(getlString);
		} catch (NullPointerException e) {
			System.out.println("***** WARNING ***** : Session Data does not exist: " + dataKey);
			List<String> getlString = new ArrayList<String>();
			if (getlString.indexOf(value) != -1) {
				return;
			}
			getlString.add(value);
			Serenity.setSessionVariable(dataKey).to(getlString);
		}
	}

	/**
	 * Clear all string for List<String> via Session Data
	 *
	 * @author 
	 * @param dataKey
	 */
	public static void clearListString(String dataKey) {
		try {
			List<String> getlString = Serenity.sessionVariableCalled(dataKey);
			getlString.clear();
			Serenity.setSessionVariable(dataKey).to(getlString);
		} catch (NullPointerException e) {
			System.out.println("***** WARNING ***** : Session Data List String does not exist: " + dataKey);
		}
	}

	/**
	 * Get the last added string for List<String> via Session Data
	 *
	 * @author 
	 * @param dataKey
	 */
	public static String getListStringLastValue(String dataKey) {
		try {
			List<String> getlString = Serenity.sessionVariableCalled(dataKey);
			return getlString.get(getlString.size() - 1);
		} catch (NullPointerException e) {
			System.out.println("***** WARNING ***** : Session Data List String does not exist: " + dataKey);
			return null;
		}
	}

	/**
	 * Get the last added string for List<String> via Session Data
	 *
	 * @author 
	 * @param dataKey
	 */
	public static int getListStringValueIndex(String dataKey, String value) {
		try {
			List<String> getlString = Serenity.sessionVariableCalled(dataKey);
			return getlString.indexOf(value);
		} catch (NullPointerException e) {
			System.out.println("***** WARNING ***** : Session Data List String does not exist: " + dataKey);
			return -1;
		}
	}

	/**
	 * Get value string for List<String> via Session Data. Negative number for get
	 * from the last.
	 *
	 * @author 
	 * @param dataKey
	 * @param index
	 */
	public static String getListStringByIndex(String dataKey, int index) {
		try {
			List<String> getlString = Serenity.sessionVariableCalled(dataKey);
			if (index >= 0) {
				return getlString.get(index - 1);
			} else {
				System.out.println("***** INFO ***** : Session Data [" + dataKey + "] "
						+ System.getProperty("line.separator") + getlString);
				return getlString.get((getlString.size() - 1) + index);
			}
		} catch (NullPointerException e) {
			System.out.println("***** WARNING ***** : Session Data List String does not exist: " + dataKey);
			return null;
		}
	}

	/**
	 * Get the number of added string for List<String> via Session Data
	 *
	 * @author 
	 * @param dataKey
	 */
	public static int countListString(String dataKey) {
		try {
			List<String> getlString = Serenity.sessionVariableCalled(dataKey);
			return getlString.size();
		} catch (NullPointerException e) {
			System.out.println("***** WARNING ***** : Session Data List String does not exist: " + dataKey);
			return 0;
		}
	}

	// #EndRegion# Session Data Variable : List<String>
	// #Region# Report
	/**
	 * Generate Data Table Report as String
	 *
	 * @author 
	 * @param reportKey
	 * @return String
	 */
	public static String generateTbDataReport(String reportKey) {
		List<List<String>> tbReport = Serenity.sessionVariableCalled(reportKey);
		List<List<String>> tbReport1 = new ArrayList<List<String>>();
		for (List<String> temp : tbReport) {
			tbReport1.add(new ArrayList<String>(temp));
		}
		return generateTbDataReport(tbReport1);
	}

	/**
	 * Clear data in Data Table Report
	 *
	 * @param reportKey
	 * @return String
	 */
	public static void clearTbDataReport(String reportKey) {
		try {
			List<List<String>> tbReport = Serenity.sessionVariableCalled(reportKey);
			tbReport.clear();
			Serenity.setSessionVariable(reportKey).to(tbReport);
		} catch (NullPointerException e) {
			System.out.println("***** WARNING ***** : Data Table Report does not exist: " + reportKey);
		}
	}

	/**
	 * Add data row to Data Table Report
	 *
	 * @author 
	 * @param reportKey
	 * @param rowData
	 */
	public static void addRowToTbDataReport(String reportKey, List<String> rowData) {
		List<List<String>> tbReport = new ArrayList<List<String>>();
		try {
			tbReport = Serenity.sessionVariableCalled(reportKey);
			tbReport.add(rowData);
			Serenity.setSessionVariable(reportKey).to(tbReport);
		} catch (NullPointerException e) {
			Serenity.setSessionVariable(reportKey).to(tbReport);
			tbReport = new ArrayList<List<String>>();
			tbReport.add(rowData);
			Serenity.setSessionVariable(reportKey).to(tbReport);
		}
	}

	/**
	 * Generate table data view
	 *
	 * @author 
	 * @param rawData
	 * @return
	 */
	public static String generateTbDataReport(List<List<String>> rawData) {
		// Re create raw data (defend update raw data)
		List<List<String>> data = new ArrayList<List<String>>();
		for (List<String> list : rawData) {
			List<String> newList = new ArrayList<String>();
			newList.addAll(list);
			data.add(newList);
		}

		// Get max length of each column
		List<Integer> columnLength = new ArrayList<Integer>();
		for (List<String> row : data) {
			// Set max length for each column
			for (int i = 0; i < row.size(); i++) {
				int length = 0;
				if (row.get(i) != null) {
					length = row.get(i).length();
				} else {
					length = 4;
				}

				if (columnLength.size() < i + 1) {// New column
					columnLength.add(length);
				} else {// existed column
					if (columnLength.get(i) < length) {
						columnLength.set(i, length);
					}
				}
			}
		}
		// Set table data as String
		StringBuilder sb = new StringBuilder();
		sb.append(System.getProperty("line.separator"));
		for (List<String> row : data) {
			String rowContent = "";
			// Set max length for each column
			for (int i = 0; i < row.size(); i++) {
				String cell = row.get(i);
				if (cell == null) {
					cell = "null";
				}
				int length = columnLength.get(i);
				if (i == 0) {
					row.set(i, "|" + padRight(cell, length) + " | ");
				} else {
					row.set(i, padRight(cell, length) + " | ");
				}
				rowContent += row.get(i);
			}
			sb.append(rowContent);
			sb.append(System.getProperty("line.separator"));
		}
		return sb.toString();
	}

	/**
	 * @author 
	 * @param s
	 * @param n
	 * @return
	 */
	private static String padRight(String s, int n) {
		if (n == 0) {
			return s;
		} else {
			return String.format("%1$-" + n + "s", s);
		}
	}

	public static boolean isSameDecimalValue(String _actual, String _expected) {
		System.out.println("Actual: " + _actual + " Expected: " + _expected);
		int maxlength = 0;
		if (!_actual.contains(".")) {
			_actual += ".";
		}
		if (!_expected.contains(".")) {
			_expected += ".";
		}
		if (_actual.length() >= _expected.length()) {
			maxlength = _actual.length();
		} else {
			maxlength = _expected.length();
		}
		_actual = padRight(_actual, maxlength).replace(' ', '0');
		_expected = padRight(_expected, maxlength).replace(' ', '0');
		if (_actual.equals(_expected)) {
			return true;
		} else {
			return false;
		}
	}

	// #EndRegion# Report

	// #Region#ReadExcelData
	/**
	 * Get cell data value (data in Excel file) from Session Data variable by key of
	 * Excel file, Sheet Name, Column Name and index of row .
	 *
	 * @author 
	 * @param _keyFileName
	 * @param _sheetName
	 * @param _columnName
	 * @param _rowIndex
	 * @return
	 */
	public static String getExcelDataVal(String _keyFileName, String _sheetName, String _columnName, int _rowIndex) {
		String ret = "";
		int colIndex = getExcelColNameIndex(_keyFileName, _sheetName, _columnName);
		ret = getExcelSheetData(_keyFileName, _sheetName).get(_rowIndex).get(colIndex);
		return ret;
	}

	/**
	 * Get cell data value (data in Excel file) from Session Data variable by key of
	 * Excel file, Sheet Name, Column Index and index of row. Note, Column index
	 * start from 0
	 *
	 * @author 
	 * @param _keyFileName
	 * @param _sheetName
	 * @param _columnIndex
	 * @param _rowIndex
	 * @return
	 */
	public static String getExcelDataVal(String _keyFileName, String _sheetName, int _columnIndex, int _rowIndex) {
		String ret = "";
		ret = getExcelSheetData(_keyFileName, _sheetName).get(_rowIndex).get(_columnIndex);
		return ret;
	}

	/**
	 * Store excel data file (.xls) to session data variable.
	 *
	 * @author 
	 * @param _keyFileName
	 * @param _fileName
	 */
	public static void addExcelData(String _keyFileName, String _fileName) {
		// Get session data
		File file = new File(_fileName);
		Map<String, HashMap<String, LinkedHashMap<Integer, List<String>>>> mSession_ExcelFile = new HashMap<>();
		mSession_ExcelFile = Serenity.sessionVariableCalled(EXCEL_FILE_LIST);
		// If session data not exist then initialize
		if (mSession_ExcelFile == null) {
			Map<String, HashMap<String, LinkedHashMap<Integer, List<String>>>> mExcelFile = new HashMap<>();
			Serenity.setSessionVariable(EXCEL_FILE_LIST).to(mExcelFile);
			mSession_ExcelFile = Serenity.sessionVariableCalled(EXCEL_FILE_LIST);
		}

		// Add data for session data
		HashMap<String, LinkedHashMap<Integer, List<String>>> mAddExcelFile = new HashMap<>();
		System.out.println("***** INFO ***** Loading data from [" + file + "] into [" + _keyFileName + "]");
		mAddExcelFile = Excel.loadExcelLinesByHeaderRanger(file);
		mSession_ExcelFile.put(_keyFileName, mAddExcelFile);
		Serenity.setSessionVariable(EXCEL_FILE_LIST).to(mSession_ExcelFile);
		// System.out.println("Import Data: " + mAddExcelFile);

		// Add column index to map
		HashMap<String, LinkedHashMap<String, Integer>> mSheet_ColumnName_ColumnIndex = new HashMap<>();
		// Create session variable store with format "#Excel Files#Key File
		// Name#"
		// Iterator iteSheet = mAddExcelFile.entrySet().iterator();
		Iterator<HashMap.Entry<String, LinkedHashMap<Integer, List<String>>>> iterator = mAddExcelFile.entrySet()
				.iterator();
		while (iterator.hasNext()) { // loop all sheet
			HashMap.Entry<String, LinkedHashMap<Integer, List<String>>> pair = (HashMap.Entry<String, LinkedHashMap<Integer, List<String>>>) iterator
					.next();
			// Get header row
			LinkedHashMap<Integer, List<String>> dataSheet = (LinkedHashMap<Integer, List<String>>) pair.getValue();
			List<String> lColumnHeader = (List<String>) dataSheet.get(0);
			if (lColumnHeader != null) {
				int i = 0;
				LinkedHashMap<String, Integer> mColumnName_Index = new LinkedHashMap<String, Integer>();
				for (String temp : lColumnHeader) {
					mColumnName_Index.put(temp, i);
					i++;
				}
				mSheet_ColumnName_ColumnIndex.put(pair.getKey().toString(), mColumnName_Index);
			}
		}
		Serenity.setSessionVariable(EXCEL_FILE_LIST + _keyFileName + "#").to(mSheet_ColumnName_ColumnIndex);
	}

	/**
	 * Remove (delete) all data of Excel Data in Session Data by Data Key Name
	 *
	 * @author 
	 * @param _keyFileName
	 */
	public static void removeExcelData(String _keyFileName) {
		// Remove data
		Map<String, HashMap<String, LinkedHashMap<Integer, List<String>>>> mSession_ExcelFile = new HashMap<>();
		mSession_ExcelFile = Serenity.sessionVariableCalled(EXCEL_FILE_LIST);
		mSession_ExcelFile.remove(_keyFileName);
		Serenity.setSessionVariable(EXCEL_FILE_LIST).to(mSession_ExcelFile);
		// Remove release data
		Serenity.setSessionVariable(EXCEL_FILE_LIST + _keyFileName + "#").to(null);
	}

	/**
	 * Get all data in Excel Data in Session Data by Excel File Name key
	 *
	 * @author 
	 * @param _keyFileName
	 * @return
	 */
	public static HashMap<String, LinkedHashMap<Integer, List<String>>> getExcelData(String _keyFileName) {
		// Get session data
		Map<String, HashMap<String, LinkedHashMap<Integer, List<String>>>> mSessionExcelFile = new HashMap<>();
		mSessionExcelFile = Serenity.sessionVariableCalled(EXCEL_FILE_LIST);
		return mSessionExcelFile.get(_keyFileName);
	}

	/**
	 * Get data in Excel Data Sheet in Session Data by Excel File Name key and Sheet
	 * name
	 *
	 * @author 
	 * @param _keyFileName
	 * @param _sheetName
	 * @return
	 */
	public static LinkedHashMap<Integer, List<String>> getExcelSheetData(String _keyFileName, String _sheetName) {
		// Get session data
		Map<String, HashMap<String, LinkedHashMap<Integer, List<String>>>> mSessionExcelFile = new HashMap<>();
		mSessionExcelFile = Serenity.sessionVariableCalled(EXCEL_FILE_LIST);
		return mSessionExcelFile.get(_keyFileName).get(_sheetName);
	}

	/**
	 * Get data without column header in Excel Data Sheet in Session Data by Excel
	 * File Name key and Sheet name.
	 *
	 * @author 
	 * @param _keyFileName
	 * @param _sheetName
	 * @return
	 */
	public static LinkedHashMap<Integer, List<String>> getExcelSheetDataNoHeader(String _keyFileName,
			String _sheetName) {
		// Get session data
		LinkedHashMap<Integer, List<String>> temp = new LinkedHashMap<Integer, List<String>>(
				getExcelSheetData(_keyFileName, _sheetName));
		temp.remove(0);
		return temp;
	}

	/**
	 * Get index of Column name in Excel Data by Excel File Name key , Sheet name
	 * and Column name
	 *
	 * @author 
	 * @param _keyFileName
	 * @param _sheetName
	 * @param _columnName
	 * @return
	 */
	public static int getExcelColNameIndex(String _keyFileName, String _sheetName, String _columnName) {
		// Get session data
		Map<String, HashMap<String, Integer>> mSheet_ColumnName_ColumnIndex = new HashMap<>();
		// Generate session variable key
		mSheet_ColumnName_ColumnIndex = Serenity.sessionVariableCalled(getExcelSessionKeyColName(_keyFileName));
		return mSheet_ColumnName_ColumnIndex.get(_sheetName).get(_columnName);
	}

	/**
	 * Get all Column name in Excel Data by Excel File Name key and Sheet Name
	 *
	 * @author 
	 * @param _keyFileName
	 * @param _sheetName
	 * @return
	 */

	public static HashMap<String, Integer> getExcelColNameBySheetName(String _keyFileName, String _sheetName) {
		// Get session data
		Map<String, HashMap<String, Integer>> mSheet_ColumnName_ColumnIndex = new HashMap<>();
		// Generate session variable key
		mSheet_ColumnName_ColumnIndex = Serenity.sessionVariableCalled(getExcelSessionKeyColName(_keyFileName));
		return mSheet_ColumnName_ColumnIndex.get(_sheetName);
	}

	/**
	 * Get list of all rows in Excel Data which Cell value contain given value by
	 * Excel File Name key , Sheet name and Column name
	 *
	 * @author 
	 * @param _keyFileName
	 * @param _sheetName
	 * @param _columnName
	 * @param _givenValue
	 * @return
	 */
	public static List<Integer> getExcelRowNumsContainVal(String _keyFileName, String _sheetName, String _columnName,
			String _givenValue) {
		// Get column index
		List<Integer> lResultRowNums = new ArrayList<Integer>();
		int columnIndex = getExcelColNameIndex(_keyFileName, _sheetName, _columnName);
		// Get data sheet
		LinkedHashMap<Integer, List<String>> lhSheet_data = getExcelSheetData(_keyFileName, _sheetName);
		// Get data row list
		for (Integer key : lhSheet_data.keySet()) {
			if (lhSheet_data.get(key).size() == 0) {
				System.out.println("Warning : No data in row " + key + "of" + _keyFileName + "#" + _sheetName);
			} else {
				try {
					if (lhSheet_data.get(key).get(columnIndex).contains(_givenValue)) {
						lResultRowNums.add(key);
					}
				} catch (Exception e) {
					System.out.println(
							"Error : Incorret data format with row  " + key + "of" + _keyFileName + "#" + _sheetName);
					throw e;
				}
			}
		}
		return lResultRowNums;
	}

	/**
	 * Get list of all rows in Excel Data which Cell value contain given value by
	 * Excel File Name key , Sheet name and Column name
	 *
	 * @author 
	 * @param _keyFileName
	 * @param _sheetName
	 * @param _columnName
	 * @param _givenValue
	 * @return
	 */
	public static List<Integer> getExcelRowNumsEqualVal(String _keyFileName, String _sheetName, String _columnName,
			String _givenValue) {
		// Get column index
		List<Integer> lResultRowNums = new ArrayList<Integer>();
		int columnIndex = getExcelColNameIndex(_keyFileName, _sheetName, _columnName);
		// Get data sheet
		LinkedHashMap<Integer, List<String>> lhSheet_data = getExcelSheetData(_keyFileName, _sheetName);
		// Get data row list
		for (Integer key : lhSheet_data.keySet()) {
			if (lhSheet_data.get(key).size() == 0) {
				System.out.println("Warning : No data in row " + key + "of" + _keyFileName + "#" + _sheetName);
			} else {
				try {
					if (lhSheet_data.get(key).get(columnIndex).equals(_givenValue)) {
						lResultRowNums.add(key);
					}
				} catch (Exception e) {
					System.out.println(
							"Error : Incorret data format with row  " + key + "of" + _keyFileName + "#" + _sheetName);
					throw e;
				}
			}
		}
		return lResultRowNums;
	}

	/**
	 * Get data rows in Excel Data which Cell value contain given value by Excel
	 * File Name key , Sheet name and Column name
	 *
	 * @author 
	 * @param _keyFileName
	 * @param _sheetName
	 * @param _columnName
	 * @param _givenValue
	 * @return
	 */
	public static LinkedHashMap<Integer, List<String>> getExcelDataRowsContainVal(String _keyFileName,
			String _sheetName, String _columnName, String _givenValue) {
		// Get column index
		LinkedHashMap<Integer, List<String>> lResultRowNums = new LinkedHashMap<Integer, List<String>>();
		int columnIndex = getExcelColNameIndex(_keyFileName, _sheetName, _columnName);
		// Get data sheet
		LinkedHashMap<Integer, List<String>> lhSheet_data = getExcelSheetData(_keyFileName, _sheetName);
		// Get data row list
		for (Integer key : lhSheet_data.keySet()) {
			if (lhSheet_data.get(key).size() == 0) {
				System.out.println("Warning : No data in row " + key + "of" + _keyFileName + "#" + _sheetName);
			} else {
				try {
					if (lhSheet_data.get(key).get(columnIndex).contains(_givenValue)) {
						lResultRowNums.put(key, lhSheet_data.get(key));
					}
				} catch (Exception e) {
					System.out.println(
							"Error : Incorret data format with row  " + key + "of" + _keyFileName + "#" + _sheetName);
					throw e;
				}
			}
		}
		return lResultRowNums;
	}

	/**
	 * Get data rows in Excel Data which Cell value equal given value by Excel File
	 * Name key , Sheet name and Column name
	 *
	 * @author 
	 * @param _keyFileName
	 * @param _sheetName
	 * @param _columnName
	 * @param _givenValue
	 * @return
	 */
	public static LinkedHashMap<Integer, List<String>> getExcelDataRowsEqualVal(String _keyFileName, String _sheetName,
			String _columnName, String _givenValue) {
		// Get column index
		LinkedHashMap<Integer, List<String>> lResultRowNums = new LinkedHashMap<Integer, List<String>>();
		int columnIndex = getExcelColNameIndex(_keyFileName, _sheetName, _columnName);
		// Get data sheet
		LinkedHashMap<Integer, List<String>> lhSheet_data = getExcelSheetData(_keyFileName, _sheetName);
		// Get data row list
		for (Integer key : lhSheet_data.keySet()) {
			if (lhSheet_data.get(key).size() == 0) {
				System.out.println("Warning : No data in row " + key + "of" + _keyFileName + "#" + _sheetName);
			} else {
				try {
					if (lhSheet_data.get(key).get(columnIndex).equals(_givenValue)) {
						lResultRowNums.put(key, lhSheet_data.get(key));
					}
				} catch (Exception e) {
					System.out.println(
							"Error : Incorret data format with row  " + key + "of" + _keyFileName + "#" + _sheetName);
					throw e;
				}
			}
		}
		return lResultRowNums;
	}

	/**
	 * Get list of Cell value in Excel Data by reference value of reference Column
	 * name
	 *
	 * @author 
	 * @param _keyFileName
	 * @param _sheetName
	 * @param _refColName
	 * @param _refValue
	 * @param _givenColName
	 * @return
	 */
	public static List<String> getExcelValsByRefVal(String _keyFileName, String _sheetName, String _refColName,
			String _refValue, String _givenColName) {
		// Get column index
		int refColIndex = getExcelColNameIndex(_keyFileName, _sheetName, _refColName);
		int givenColIndex = getExcelColNameIndex(_keyFileName, _sheetName, _givenColName);
		List<String> lResulValue = new ArrayList<String>();
		// Get data sheet
		LinkedHashMap<Integer, List<String>> lhSheet_data = getExcelSheetData(_keyFileName, _sheetName);
		// Get data row list
		for (Integer key : lhSheet_data.keySet()) {
			if (lhSheet_data.get(key).size() == 0) {
				System.out.println("Warning : No data in row " + key + "of" + _keyFileName + "#" + _sheetName);
			} else {
				try {
					if (lhSheet_data.get(key).get(refColIndex).equals(_refValue)) {
						lResulValue.add(lhSheet_data.get(key).get(givenColIndex));
					}
				} catch (Exception e) {
					System.out.println(
							"Error : Incorret data format with row  " + key + "of" + _keyFileName + "#" + _sheetName);
					throw e;
				}
			}
		}
		return lResulValue;
	}

	/**
	 * Get Key name of Column in Excel Data
	 *
	 * @author 
	 * @param _keyFileName
	 * @return
	 */
	private static String getExcelSessionKeyColName(String _keyFileName) {
		return EXCEL_FILE_LIST + _keyFileName + "#";
	}

	// #EndRegion#ReadExcelData
	// #Region#File Name, File Path
	public static File getFileFromPath(String _filePath) {
		_filePath = SessionData.replaceAllAnnotation(_filePath);
		_filePath = _filePath.replace("@HOME@", System.getProperty("user.dir"));
		return new File(_filePath);
	}

	// #EndRegion#File Name, File Path
	public static String replaceLast(String string, String toReplace, String replacement) {
		int pos = string.lastIndexOf(toReplace);
		if (pos > -1) {
			return string.substring(0, pos) + replacement + string.substring(pos + toReplace.length(), string.length());
		} else {
			return string;
		}
	}

	/**
	 * Compare two String with First String contain @IGNORE==?@@ annotation
	 * 
	 * @param expected
	 * @param actual
	 * @return
	 */
	public static boolean compareTextWithIgnoreAnnotation(String expected, String actual) {
		String tempExpected = expected;
		String tempActual = actual;
		boolean ret = true;
		while (tempExpected.contains("@IGNORE==")) {
			// if (tempExpected.contains("@IGNORE==")) {
			int startAnno = tempExpected.indexOf("@IGNORE==");
			int endAnno = tempExpected.indexOf("@@");
			try {
				int numAnno = Integer.parseInt(tempExpected.substring(startAnno + 9, endAnno));
				// Compare
				if (!tempExpected.substring(0, startAnno).equals(tempActual.substring(0, startAnno))) {
					return false;
				}
				// Remove compared
				tempExpected = tempExpected.substring(endAnno + 2, tempExpected.length());
				tempActual = tempActual.substring(startAnno + numAnno, tempActual.length());
			} catch (NumberFormatException nfe) {
				System.out.println("Error : Incorret data format with actual string :");
				System.out.println(expected);
				return false;
			} catch (Exception e) { // length not equal
				return false;
			}
		}
		if (!tempExpected.equals(tempActual)) {
			return false;
		}
		return ret;
	}

	/**
	 * Replace @IGNORE==?@@ annotation of string by X
	 * 
	 * @param _input
	 * @return
	 */
	public static String replaceIgnoreAnnotation(String _input) {
		String output = _input;
		List<String> lAnnotion = getAllAnnotation(_input);
		for (String annotation : lAnnotion) {
			if (annotation.startsWith("@IGNORE")) {
				output = output.replace(annotation, replaceAnnotationIgnore(annotation));
			}
		}
		return output;
	}
}
