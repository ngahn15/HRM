package hrm.common.steps;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Ignore;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import hrm.common.pages.CommonPage;
import hrm.lib.SessionData;
import net.thucydides.core.annotations.Step;
import net.thucydides.core.steps.ScenarioSteps;

public class CommonSteps extends ScenarioSteps {
	private static final long serialVersionUID = 1L;
	private final static String CURRENT_WINDOW_HANDLE = "Current_Window_Handle";
	private final static String KEY_PDF_FILE = "PDF FILE";

	CommonPage commonPage;

	@Step
	public void mo_trinh_duyet() {
		commonPage.open();
		getDriver().manage().window().maximize();
	}
	
	@Step
	public String getTitle() {
		return commonPage.getTitle();
	}

	// BEGIN Press keyboard
	@Step
	public void pressTab() {
		commonPage.withAction().sendKeys(Keys.TAB).build().perform();
	}

	@Step
	public void pressShiftTab() {
		commonPage.withAction().sendKeys(Keys.chord(Keys.SHIFT, Keys.TAB)).build().perform();
	}

	@Step
	public void pressEnter() {
		commonPage.withAction().sendKeys(Keys.ENTER);
	}

	// END Press keyboard
	// BEGIN Switching IFrame
	@Step
	public void switchToParentIFrame() {
		getDriver().switchTo().parentFrame();
	}

	@Step
	public void switchToDefaultIFrame() {
		getDriver().switchTo().defaultContent();
	}

	@Step
	public void switchToIFrame(String iFrameID) {
		getDriver().switchTo().frame(iFrameID);
	}

	// END Switching IFrame

	// BEGIN Soft Assertion
	@Step
	@Ignore
	public void assertion_result(String _assertion) {
		// Display report only
	}

	@Step
	public void assertion_result_then_assert(String _assertionKey, String _assertion) {
		assertThat(SessionData.getSoftAssertionOverallResult(_assertionKey))
				.as("Overall assertion of " + _assertionKey + " have to pass.").isTrue();
	}

	@Step
	public void clear_assertion(String _assertionKey) {
		SessionData.clearSoftAssertion(_assertionKey);
	}

	// END Soft Assertion
	// BEGIN Preview Report
	@Step
	public int count_text_sections_in_report() {
		return commonPage.count_text_sections_in_report();
	}

	@Step
	public boolean switch_to_preview_report_window() {
		return commonPage.switch_to_preview_report_window(10);
	}

	@Step
	public boolean verify_preview_report_content(String _givenContent) {
		return commonPage.verify_preview_report_content(_givenContent);
	}

//	@Step
//	public String getCurrentWindowHandle() {
//		String windowHandle = getDriver().getWindowHandle();
//		System.out.println("***** INFO ***** Get current window handle : " + windowHandle);
//		SessionData.addUniqueToListString(CURRENT_WINDOW_HANDLE, windowHandle);
//		return windowHandle;
//	}

	@Step
	public boolean switchToWindowHandle(String _handle) {
		waitABit(500);
		try {
			getDriver().switchTo().window(_handle);
			getDriver().manage().window().maximize();
			return true;
		} catch (Exception e) {
			System.out.println("Switch to window this window unsuccessfully : " + _handle);
			return false;
		}
	}

	@Step
	public boolean xPathExistInPreviewPDF(String _xPath) {
		return commonPage.isXPathExistInPreviewPDF(_xPath);
	}

	// END Preview Report
	// BEGIN Common message
	// Get message
	@Step
	public String get_message(String _text) {
		return commonPage.get_message(_text);
	}

	@Step
	public String get_message() {
		return commonPage.get_message();
	}

	@Step
	public String get_modal() {
		return commonPage.get_modal();
	}

	@Step
	public void close_message(String text) {
		commonPage.close_message(text);
	}

	@Step
	public void close_message() {
		commonPage.close_message();
	}

	@Step
	public void close_modal() {
		commonPage.close_modal();
	}

	// END Common message
	// BEGIN Alert message
	@Step
	public String alert_message() {
		try {
			WebDriverWait wait = new WebDriverWait(getDriver(), 2);
			wait.until(ExpectedConditions.alertIsPresent());
			Alert alert = getDriver().switchTo().alert();
			String message = alert.getText();
			System.out.println("***** INFO ***** Alert Message: [" + message + "]");
			return message;
		} catch (Exception e) {
			System.out.println("Exception Alert: " + e);
			return null;
		}
	}

	@Step
	public void alert_accept() {
		Alert alert = getDriver().switchTo().alert();
		alert.accept();
		// getDriver().switchTo().defaultContent();
		waitABit(1000);
	}

	@Step
	public void alert_dismiss() {
		Alert alert = getDriver().switchTo().alert();
		alert.dismiss();
		// getDriver().switchTo().defaultContent();
	}

	@Step
	public boolean is_alert_displayed() {
		return commonPage.is_alert_displayed();
	}

	@Step
	public String get_text_alert() {
		String sAlertText = "";
		try {
			// Alert alert = getDriver().switchTo().alert();
			sAlertText = commonPage.getAlertText();
			System.out.println(sAlertText);
			// getDriver().switchTo().defaultContent();
		} catch (Exception e) {
			// getDriver().switchTo().defaultContent();
		}
		return sAlertText;
	}

	// END Alert message
	// BEGIN Print PDF using Microsoft PDF
//	@Step
//	public int printPDFFileUsingPrint(String _OutputFilePath) {
//		String browserName = LoadConfig.get_config_value("webdriver.driver");
//		System.out.println("***** INFO ***** BROWSER NAME " + browserName);
//		// _OutputFilePath = SessionData.replaceAllAnnotation(_OutputFilePath);
//		_OutputFilePath = _OutputFilePath.replace("@HOME@", System.getProperty("user.dir"));
//		if (browserName.toLowerCase().contains("chrome")) {
//			return printPDFFileUsingPrintChrome(_OutputFilePath);
//		} else {
//			return printPDFFileUsingPrintFirefox(_OutputFilePath);
//		}
//	}

//	public int printPDFFileUsingPrintFirefox(String _OutputFilePath) {
//
//		SessionData.addUniqueToListString(KEY_PDF_FILE, _OutputFilePath);
//		int iExitCode = EXE.callExe(System.getProperty("user.dir") + "//etc//PrintMicrosoftPDFWin10Firefox.exe",
//				_OutputFilePath);
//		assertThat(0).isEqualTo(iExitCode).as("***** ASSERT FAIL ***** In tệp PDF bằng Microsoft PDF thất bại.");
//		return iExitCode;
//	}

//	public int printPDFFileUsingPrintChrome(String _OutputFilePath) {
//		String xPathChromePrinPreview = "//html[@id='print-preview']";
//		String xPathChangeBtn = "//div[@id='navbar-container']//button[contains(text(),'Change…')]";
//		String xPathMicrPrintToPDF = "//div[@class='print-list']//span[text()='Microsoft Print to PDF']";
//		String xPathPrintBtn = "//div[@id='navbar-container']//button[contains(text(),'Print')]";
//		waitABit(5000);
//		commonPage.waitUntilHTMLReady(10);
//		// Switch to Chrome Print Preview window
//		int polling = 0;
//		int _timeoutInSeconds = 5;
//		_timeoutInSeconds = _timeoutInSeconds * 1000; // Convert from second to
//														// millisecond
//		boolean ret = false;
//		do {
//			waitABit(500);
//			polling += 500;
//			for (String sHandle : getDriver().getWindowHandles()) {
//				getDriver().switchTo().window(sHandle);
//				if (commonPage.isElementExistNowBasic(xPathChromePrinPreview)) {
//					ret = true;
//					waitABit(1000);
//					break;
//				}
//			}
//		} while (polling < _timeoutInSeconds && ret == false);
//		if (ret == true) {
//			commonPage.findBy(xPathChangeBtn).waitUntilClickable().click();
//			waitABit(2000);
//			commonPage.findBy(xPathMicrPrintToPDF).waitUntilClickable().click();
//			waitABit(2000);
//			commonPage.findBy(xPathPrintBtn).waitUntilClickable().click();
//			waitABit(2000);
//			SessionData.addUniqueToListString(KEY_PDF_FILE, _OutputFilePath);
//			int iExitCode = EXE.callExe(System.getProperty("user.dir") + "//etc//PrintMicrosoftPDFWin10Chrome.exe",
//					_OutputFilePath);
//			waitABit(1000);
//			assertThat(iExitCode).isEqualTo(0).as("***** ASSERT FAIL ***** In tệp PDF bằng Microsoft PDF thất bại.");
//			return iExitCode;
//		} else {
//			assertThat(0).isEqualTo(-1)
//					.as("***** ASSERT FAIL ***** In tệp PDF bằng Microsoft PDF thất bại. Không tìm thấy Print Privew!");
//			return 0;
//		}
//	}

//	@Step
//	public int saveDownloadFileFirefox(String _OriginalFileName, String _OutputFilePath) {
//		_OutputFilePath = SessionData.replaceAllAnnotation(_OutputFilePath);
//		_OutputFilePath = _OutputFilePath.replace("@HOME@", System.getProperty("user.dir"));
//		SessionData.addUniqueToListString(KEY_PDF_FILE, _OutputFilePath);
//		int iExitCode = EXE.callExe(System.getProperty("user.dir") + "//etc//DownloadFileDialogWin10Firefox.exe",
//				_OriginalFileName, _OutputFilePath);
//		assertThat(0).isEqualTo(iExitCode)
//				.as("***** ASSERT FAIL ***** Tải file xuống từ trình duyệt Firefox thất bại.");
//		return iExitCode;
//	}

	// END Print PDF using Microsoft PDF

}
