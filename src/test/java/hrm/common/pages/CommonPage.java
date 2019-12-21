package hrm.common.pages;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;

import hrm.lib.MyPageObject;
import net.serenitybdd.core.pages.WebElementFacade;

public class CommonPage extends MyPageObject {
	public CommonPage(WebDriver driver) {
		super(driver);
	}
	

	public String get_message() {
		return null;
	}

	// Get message
	public String get_message(String _text) {
		String xPath = "//div[@class='o_notification_manager']//div[@class='o_notification  o_error']//div[@class='o_notification_content']//ul//li";
		List<String> msg = new ArrayList<String>();
		String message = "";
		if (element(xPath).isVisible()) {
			List<WebElementFacade> listElements = findAll(xPath);
			for (WebElementFacade element : listElements) {
				msg.add(element.getText());
				System.out.println(element.getText());
			}
			if (msg.contains(_text)) {
				System.out.println("Hellel");
				message = _text;
				System.out.println("***** INFO ***** Message : [" + message + "]");
				return message;
			} else {
				System.out.println("***** INFO ***** Message not display.");
				return null;
			}

		} else {
			System.out.println("***** INFO ***** Message not display.");
			return null;
		}

	}

	// Get message in modal
	public String get_modal() {
		String xPath = "//div[@class='o_dialog_warning modal-body']";
		String message = "";
		if ($(xPath).isVisible()) {
			System.out.println("Hellel");
			message = String.valueOf(XH(xPath).getText());
			System.out.println("***** INFO ***** Message : [" + message + "]");
		} else {
			System.out.println("***** INFO ***** Message not display.");
		}
		return message;
	}

	public boolean close_modal() {
		String xPath = "//footer[@class='modal-footer']//button[@class='btn btn-primary']";
		if (isElementExist(xPath, 5)) {
			clickOnElement(xPath);
			return true;
		} else {
			System.out.println("***** INFO ***** Message not display. Can not click button : ");
			return false;
		}
	}

	public boolean close_message(String text) {
		String xPath = "//*[@id='toast-container']/div[contains(@style,'block')] | //div[@role='dialog' and contains(@style,'block')][descendant::h5] | //div[contains(@class,'bootbox-alert') and @role='dialog' and contains(@style,'block')]";
		if (isElementExist(xPath, 5)) {
			WebElementFacade wEF = X(xPath);
			if (wEF.getAttribute("role") != null && wEF.getAttribute("role").contains("dialog")) { // dialog mesage
				clickOnElement("//div[@role='dialog' and contains(@style,'block')]//button");
			} else { // toat message
				// do nothing
			}
			return true;
		} else {
			System.out.println("***** INFO ***** Message not display.");
			return false;
		}
	}

	public boolean close_message() {
		String xPath = "//*[@id='toast-container']/div[contains(@style,'block')] | //div[@role='dialog' and contains(@style,'block')][descendant::h5] | //div[contains(@class,'bootbox-alert') and @role='dialog' and contains(@style,'block')]";
		if (isElementExist(xPath, 5)) {
			WebElementFacade wEF = X(xPath);
			if (wEF.getAttribute("role") != null && wEF.getAttribute("role").contains("dialog")) { // dialog mesage
				clickOnElement("//div[@role='dialog' and contains(@style,'block')]//button");
			} else { // toat message
				// do nothing
			}
			return true;
		} else {
			System.out.println("***** INFO ***** Message not display.");
			return false;
		}
	}

	// BEGIN Preview Report
	/**
	 * @Description Count number of text section in report
	 * @return
	 */
	public int count_text_sections_in_report() {
		int count = 0;
		String xPath = "//body//div[@class='textLayer']//*[string-length()>=1]";
		count = findAll(xPath).size();
		System.out.println("***** INFO ***** Số lượng từ trong Mẫu In : " + count);
		return count;
	}

	/**
	 * @Description Switch to preview PDF report window
	 * @param _timeoutInSeconds
	 * @return
	 */
	public boolean switch_to_preview_report_window(int _timeoutInSeconds) {
		int polling = 0;
		_timeoutInSeconds = _timeoutInSeconds * 1000; // Convert from second to
														// millisecond
		boolean ret = false;
		do {
			waitABit(500);
			polling += 500;
			for (String sHandle : getDriver().getWindowHandles()) {
				getDriver().switchTo().window(sHandle);
				if (getDriver().getTitle().contains("reportDirect.jsp")) {
					ret = true;
					waitABit(1000);
					break;
				}
			}
		} while (polling < _timeoutInSeconds && ret == false);
		// Scroll into the end
		waitUntilHTMLReady(10);
		scrollIntoElementView("//body//div[@class='textLayer']");
		waitABit(1000);
		return ret;
	}

	/**
	 * @Description Verify preview PDF report contains given text(s)
	 * @param _givenContent
	 * @return
	 */
	public boolean verify_preview_report_content(String _givenContent) {
		String[] tokens = _givenContent.split(" ");
		// waitUntilHTMLReady(10);
		int numText = tokens.length;
		String xPathSearchPattern = "";
		if (numText > 1) {
			xPathSearchPattern = "contains(*,'" + tokens[0] + "')";
			for (int i = 1; i < numText; i++) {
				xPathSearchPattern += " and contains(*,'" + tokens[i] + "')";
			}
			xPathSearchPattern = "//body[" + xPathSearchPattern + "]";
		} else {
			xPathSearchPattern = "//body[contains(*,'" + _givenContent + "')]";
		}
		// Check text exist
		try {
			List<WebElementFacade> subDataCellResults = withTimeoutOf(120, TimeUnit.MILLISECONDS)
					.findAll(xPathSearchPattern);
			if (subDataCellResults.size() != 0) {
				return true;
			}
		} catch (Exception e) {
		}
		return false;
	}

	public String getAlertText() {
		return getAlert().getText();
	}

	public boolean is_alert_displayed() {
		try {
			@SuppressWarnings("unused")
			Alert alert = getAlert();
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	/**
	 * @Description Check given xPath exist on Preview PDF
	 * @param _xPath
	 * @return
	 */
	public boolean isXPathExistInPreviewPDF(String _xPath) {
		try {
			List<WebElementFacade> subDataCellResults = withTimeoutOf(120, TimeUnit.MILLISECONDS).findAll(_xPath);
			if (subDataCellResults.size() != 0) {
				return true;
			}
		} catch (Exception e) {
		}
		return false;
	}

	// END Preview Report

}
