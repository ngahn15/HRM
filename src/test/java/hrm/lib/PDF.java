package hrm.lib;

import java.io.File;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

/**
 * @author VinhTD
 * @version 20171207
 */
public class PDF {
	/**
	 * Get all Text from PDF file. Error return null.
	 * 
	 * @param _PDFFilePath
	 * @return
	 */
	public static String getAllTextPDFFile(File _PDFFilePath) {
		String ret = null;
		try {
			// Loading an existing document
			PDDocument document = PDDocument.load(_PDFFilePath);

			// Instantiate PDFTextStripper class
			PDFTextStripper pdfStripper = new PDFTextStripper();

			// Retrieving text from PDF document
			ret = pdfStripper.getText(document);

			// Closing the document
			document.close();
		} catch (Exception e) {
			System.out.println("***** ERROR ***** Get all text from PDF file : " + e.getMessage());
		}
		return ret;
	}
}
