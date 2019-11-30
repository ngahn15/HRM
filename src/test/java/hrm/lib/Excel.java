package hrm.lib;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.ClientAnchor;
import org.apache.poi.ss.usermodel.Comment;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Drawing;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.RichTextString;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Row.MissingCellPolicy;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;

/**
 * @author VinhTD
 * @version 20171206
 */
public class Excel {

	/**
	 * Load all data from Excel file to raw data Note: All data have to formatted
	 * with Text type.
	 * 
	 * @author VinhTD
	 * @param _ExcelFilePath
	 * @return
	 */

	public static HashMap<String, LinkedHashMap<Integer, List<String>>> loadExcelLinesByHeaderRanger(
			File _ExcelFilePath) {
		// Used the LinkedHashMap and LikedList to maintain the order
		HashMap<String, LinkedHashMap<Integer, List<String>>> workBooksData = new LinkedHashMap<String, LinkedHashMap<Integer, List<String>>>();
		LinkedHashMap<Integer, List<String>> workBookData = new LinkedHashMap<Integer, List<String>>();
		String sheetName = null;
		FileInputStream fis = null;
		DataFormatter fmt = new DataFormatter();
		try {
			fis = new FileInputStream(_ExcelFilePath);
			// Create an excel workbook from the file
			Workbook workBook = WorkbookFactory.create(fis);
			for (int i = 0; i < workBook.getNumberOfSheets(); i++) {
				Sheet sheet = workBook.getSheetAt(i);
				sheetName = workBook.getSheetName(i);
				int countCellInRowHeader = 0;
				Iterator<Row> rows = sheet.rowIterator();
				while (rows.hasNext()) {
					Row row = rows.next();
					Cell cell;
					List<String> data = new LinkedList<String>();
					if (countCellInRowHeader == 0) { // Get the header size
						Iterator<Cell> cells = row.cellIterator();
						while (cells.hasNext()) {
							Cell cellCol = cells.next();
							data.add(fmt.formatCellValue(cellCol));
						}
						countCellInRowHeader = data.size();
						System.out.println("HEADER COLUMN NAME of SHEET : [" + sheet.getSheetName() + "]");
						System.out.println(data);
						workBookData.put(row.getRowNum(), data);
					} else {
						for (int j = 0; j < countCellInRowHeader; j++) {
							cell = row.getCell(j, MissingCellPolicy.CREATE_NULL_AS_BLANK);
							data.add(fmt.formatCellValue(cell));
						}
						workBookData.put(row.getRowNum(), data);
					}
				}
				workBooksData.put(sheetName, workBookData);
				workBookData = new LinkedHashMap<Integer, List<String>>();
				workBook.close();
			}
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (fis != null) {
				try {
					fis.close();
				} catch (IOException e) {
					System.out.println(e.getMessage());
					e.printStackTrace();
				}
			}
		}
		return workBooksData;
	}

	/**
	 * Load all data in specific Sheet of Excel File to raw data. Note: All data
	 * have to formatted with Text type.
	 *
	 * @author VinhTD
	 * @param _ExcelFilePath
	 * @param _SheetName
	 * @return
	 */
	public static LinkedHashMap<Integer, List<String>> loadExcelLinesByHeaderRanger(File _ExcelFilePath,
			String _SheetName) throws InvalidFormatException {
		// Used the LinkedHashMap to maintain the order of data
		LinkedHashMap<Integer, List<String>> workBookData = new LinkedHashMap<Integer, List<String>>();
		FileInputStream fis = null;
		DataFormatter fmt = new DataFormatter();
		try {
			fis = new FileInputStream(_ExcelFilePath);
			// Create an excel workbook from the file system
			Workbook workBook = WorkbookFactory.create(fis);
			Sheet sheet = workBook.getSheet(_SheetName);
			int countCellInRowHeader = 0;
			Iterator<Row> rows = sheet.rowIterator();
			while (rows.hasNext()) {
				Row row = rows.next();
				Cell cell;
				List<String> data = new LinkedList<String>();
				if (countCellInRowHeader == 0) { // Get the header size
					Iterator<Cell> cells = row.cellIterator();
					while (cells.hasNext()) {
						Cell cellCol = cells.next();
						data.add(fmt.formatCellValue(cellCol));
					}
					countCellInRowHeader = data.size();
					System.out.println("HEADER COLUMN NAME of SHEET : [" + sheet.getSheetName() + "]");
					System.out.println(data);
				} else {
					for (int j = 0; j < countCellInRowHeader; j++) {
						cell = row.getCell(j, MissingCellPolicy.CREATE_NULL_AS_BLANK);
						data.add(fmt.formatCellValue(cell));
					}
				}
				workBookData.put(row.getRowNum(), data);
			}
			workBook.close();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (fis != null) {
				try {
					fis.close();
				} catch (IOException e) {
					System.out.println(e.getMessage());
					e.printStackTrace();
				}
			}
		}
		return workBookData;
	}

	/**
	 * Compare two excel file then create output file with different mark.
	 * 
	 * @param _SourceExcelFile
	 * @param _TargetExcelFile
	 * @param _OutputExcelFile
	 * @return
	 */
	public static LinkedHashMap<String, String> compareExcelFiles(File _SourceExcelFile, File _TargetExcelFile,
			File _OutputExcelFile) {
		// Declare variable
		FileInputStream fisTarget = null; // Read target file
		FileInputStream fisSource = null; // Read source file
		int iCountDiff = 0; // Count number of different
		String sMessage = ""; // Set sMessage log, comment
		String sTargetFileName, sSourceFileName;
		DataFormatter fmt = new DataFormatter();
		sTargetFileName = _TargetExcelFile.getName();
		sSourceFileName = _SourceExcelFile.getName();
		LinkedHashMap<String, String> mDiff = new LinkedHashMap<String, String>();// Collect different
		try {
			System.out.println(
					"***** INFO ***** Comaring excel file: [" + sTargetFileName + "] and [" + sSourceFileName + "]");
			fisTarget = new FileInputStream(_TargetExcelFile);
			fisSource = new FileInputStream(_SourceExcelFile);

			// Create an excel workbook from the file
			Workbook workBookTarget = WorkbookFactory.create(fisTarget);
			Workbook workBookSource = WorkbookFactory.create(fisSource);

			// Create cell style for marking different
			CellStyle styleFillRed = workBookTarget.createCellStyle();
			styleFillRed.setFillForegroundColor(IndexedColors.GOLD.getIndex());
			styleFillRed.setFillPattern(FillPatternType.SOLID_FOREGROUND);
			CellStyle styleFillGrey = workBookTarget.createCellStyle();
			styleFillGrey.setFillForegroundColor(IndexedColors.GREY_80_PERCENT.getIndex());
			styleFillGrey.setFillPattern(FillPatternType.SOLID_FOREGROUND);

			// Compare Sheet name
			LinkedHashMap<Integer, String> lhSheetTarget = new LinkedHashMap<Integer, String>();
			LinkedHashMap<Integer, String> lhSheetSource = new LinkedHashMap<Integer, String>();
			LinkedHashMap<Integer, String> lhSheetDiff = new LinkedHashMap<Integer, String>(); // List of sheet name
																								// will be compared
			for (int i = 0; i < workBookTarget.getNumberOfSheets(); i++) {
				lhSheetTarget.put(i, workBookTarget.getSheetName(i));
			}
			for (int i = 0; i < workBookSource.getNumberOfSheets(); i++) {
				lhSheetSource.put(i, workBookSource.getSheetName(i));
			}

			for (int keyT : lhSheetTarget.keySet()) {
				String sTargetSheetName = lhSheetTarget.get(keyT);
				// Diff mapping Sheet order
				if (lhSheetSource.get(keyT) != null) {// Sheet exists in target and source file at the same index
					if (!sTargetSheetName.equals(lhSheetSource.get(keyT))) {
						sMessage = "[" + sTargetFileName + "].[" + sTargetSheetName + "] with index [" + keyT
								+ "] not be the same with [" + sSourceFileName + "].[" + lhSheetSource.get(keyT) + "]";
						mDiff.put("[" + sTargetSheetName + "]", sMessage.replace(System.lineSeparator(), " "));
						System.out.println("***** FAILED ***** " + sMessage);
					}
				} else { // Sheet not exist in source file at this index.
					sMessage = "[" + sTargetFileName + "].[" + sTargetSheetName + "] with index [" + keyT
							+ "] not exist in [" + sSourceFileName + "].[" + lhSheetSource.get(keyT) + "]";
					mDiff.put("[" + sTargetSheetName + "]", sMessage.replace(System.lineSeparator(), " "));
					System.out.println("***** FAILED ***** " + sMessage);
				}
				// Get list of Sheet name to compare
				for (int keyS : lhSheetSource.keySet()) {
					if (lhSheetSource.get(keyS).equals(sTargetSheetName)) {
						lhSheetDiff.put(keyT, sTargetSheetName);
						break;
					}
				}
				// Print out Sheet not exist in source file
				if (lhSheetDiff.get(keyT) == null) {
					sMessage = "[" + sTargetFileName + "][" + sTargetSheetName + "] not exist in [" + sSourceFileName
							+ "]";
					System.out.println("***** FAILED ***** " + sMessage);
				}
			}

			// Compare Sheet by Sheet, Row by Row
			for (int i = 0; i < workBookTarget.getNumberOfSheets(); i++) {
				Sheet sheetTarget = workBookTarget.getSheetAt(i);
				String sTargetSheetName = sheetTarget.getSheetName();
				if (!lhSheetDiff.containsValue(sTargetSheetName)) {
					// Mark all data as grey
					Iterator<Row> iteratorTarget = sheetTarget.iterator();
					while (iteratorTarget.hasNext()) {
						Row rowTarget = iteratorTarget.next();
						Iterator<Cell> cellIterator = rowTarget.cellIterator();
						while (cellIterator.hasNext()) {
							Cell cellTarget = cellIterator.next();
							cellTarget.setCellStyle(styleFillGrey);
						}
					}
					continue;
				}
				Iterator<Row> iteratorTarget = sheetTarget.iterator();
				Sheet sheetSource = workBookSource.getSheet(sTargetSheetName);

				while (iteratorTarget.hasNext()) {
					Row rowTarget = iteratorTarget.next();
					Iterator<Cell> cellIterator = rowTarget.cellIterator();
					while (cellIterator.hasNext()) {
						// Get Target Cell position
						int x, y;
						Cell cellTarget = cellIterator.next();
						x = cellTarget.getRowIndex();
						y = cellTarget.getColumnIndex();
						// Get Source Cell
						Row rowSource = sheetSource.getRow(x);
						if (rowSource == null) {
							iCountDiff += 1;
							// Set cell style
							sMessage = "[" + workBookTarget.getSheetName(i) + "][" + x + "][" + y + "] Value"
									+ System.lineSeparator() + "Exp: NOT EXIST" + System.lineSeparator() + "Act: "
									+ fmt.formatCellValue(cellTarget);
							cellTarget.setCellStyle(styleFillRed);
							// Write comment in target file
							addCellComment(cellTarget, sMessage);
							mDiff.put("[" + sTargetSheetName + "][" + x + "][" + y + "]",
									sMessage.replace(System.lineSeparator(), " "));
							System.out.println("***** FAILED ***** " + sMessage);
							continue;
						}
						Cell cellSource = rowSource.getCell(y, MissingCellPolicy.CREATE_NULL_AS_BLANK);

						// Compare each cell
						if (cellTarget.getCellTypeEnum() == cellSource.getCellTypeEnum()) {// Same Type
							if (!fmt.formatCellValue(cellTarget).equals(fmt.formatCellValue(cellSource))) { // Diff data
								iCountDiff += 1;
								sMessage = "[" + workBookTarget.getSheetName(i) + "][" + x + "][" + y + "] Value"
										+ System.lineSeparator() + "Exp: " + fmt.formatCellValue(cellSource)
										+ System.lineSeparator() + "Act: " + fmt.formatCellValue(cellTarget);
								// Write comment in target file
								// Set cell style
								cellTarget.setCellStyle(styleFillRed);
								addCellComment(cellTarget, sMessage);
								mDiff.put("[" + sTargetSheetName + "][" + x + "][" + y + "]",
										sMessage.replace(System.lineSeparator(), " "));
								System.out.println("***** FAILED ***** " + sMessage);
							}
						} else { // Diff Type
							iCountDiff += 1;
							// Write comment in target file
							sMessage = "[" + workBookTarget.getSheetName(i) + "][" + x + "][" + y + "] Type "
									+ System.lineSeparator() + "Exp: " + cellSource.getCellTypeEnum()
									+ System.lineSeparator() + "Act: " + cellTarget.getCellTypeEnum();
							if (fmt.formatCellValue(cellTarget) != fmt.formatCellValue(cellSource)) { // Diff data
								sMessage = sMessage + System.lineSeparator() + "and Value " + System.lineSeparator()
										+ "Exp: " + fmt.formatCellValue(cellSource) + System.lineSeparator() + "Act: "
										+ fmt.formatCellValue(cellTarget);
							}
							addCellComment(cellTarget, sMessage);
							// Set cell style
							cellTarget.setCellStyle(styleFillRed);
							mDiff.put("[" + sTargetSheetName + "][" + x + "][" + y + "]",
									sMessage.replace(System.lineSeparator(), " "));
							System.out.println("***** FAILED ***** " + sMessage);
						}
					}

				}
			}

			// If having different , write to output file
			if (iCountDiff != 0) {
				try {
					FileOutputStream fileOut = new FileOutputStream(_OutputExcelFile);
					workBookTarget.write(fileOut);
					fileOut.close();
				} catch (Exception e) {
					System.out.println("***** ERROR ***** Can not create result output file : " + e.getMessage());
				}
			}
			// Close all workbook
			workBookTarget.close();
			workBookSource.close();
			fisTarget.close();
			fisSource.close();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (iCountDiff == 0) {
				iCountDiff = -1;
			}
			try {
				fisTarget.close();
			} catch (Exception e) {
				System.out.println(e.getMessage());
			}
			try {
				fisSource.close();
			} catch (Exception e) {
				System.out.println(e.getMessage());
			}
		}
		System.out.println("***** INFO ***** Number of different: " + iCountDiff);
		return mDiff;
	}

	/**
	 * Add comment to cell
	 * 
	 * @param cell
	 * @param commentText
	 */
	private static void addCellComment(Cell cell, String commentText) {
		Sheet sheet = cell.getSheet();
		Workbook book = sheet.getWorkbook();
		Row row = cell.getRow();
		Drawing<?> drawing = sheet.createDrawingPatriarch();
		CreationHelper factory = book.getCreationHelper();
		ClientAnchor anchor = factory.createClientAnchor();
		anchor.setCol1(cell.getColumnIndex());
		anchor.setCol2(cell.getColumnIndex() + 8);
		anchor.setRow1(row.getRowNum());
		anchor.setRow2(row.getRowNum() + 8);
		Comment comment = drawing.createCellComment(anchor);
		RichTextString str = factory.createRichTextString(commentText);
		comment.setString(str);
		cell.setCellComment(comment);
	}
}
