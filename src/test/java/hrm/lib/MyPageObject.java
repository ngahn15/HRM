package hrm.lib;

import com.google.common.base.Predicate;

import hrm.lib.LoadConfig;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.core.pages.WebElementFacade;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.io.IOException;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalUnit;
import java.util.*;
import java.util.concurrent.TimeUnit;

/**
 * @Description A base class representing a WebDriver page object. This class
 *              extends core PageObject class and we can add common methods for
 *              HDDT site. Using likes PageObject class. WARNING: Please,
 *              consider carefully when CRUD this class and set public method.
 *              Don't create specific page here.
 */
public abstract class MyPageObject extends PageObject {
	private static final TemporalUnit SECONDS = ChronoUnit.SECONDS;

	public static Properties SETTING = null;

	private final String xPathVisible = "[not(ancestor-or-self::*[contains(@style,'none') or @aria-hidden='true'])]";

	// region Construction
	protected MyPageObject() {
		super();
		setImplicitTimeout(5, SECONDS);
		try {
			SETTING = LoadConfig.loading_config_sys("serenity.properties");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	protected MyPageObject(WebDriver driver, Predicate<? super net.serenitybdd.core.pages.PageObject> callback) {
		super(driver, callback);
		try {
			SETTING = LoadConfig.loading_config_sys("serenity.properties");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public MyPageObject(WebDriver driver, int ajaxTimeout) {
		super(driver, ajaxTimeout);
		try {
			SETTING = LoadConfig.loading_config_sys("serenity.properties");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public MyPageObject(WebDriver driver) {
		super(driver);
		try {
			SETTING = LoadConfig.loading_config_sys("serenity.properties");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	// endregion Construction

	// region Common Wait
	/**
	 * @param _timeoutInSeconds Timeout In Seconds
	 * @Description Wait for Modal loading or hiding complete
	 */
	public void waitUntilModalCompletes(int _timeoutInSeconds) {
		try {
			withTimeoutOf(_timeoutInSeconds, TimeUnit.SECONDS).waitFor(ExpectedConditions
					.presenceOfElementLocated(By.xpath("//*[contains(@class,'pace-done') or @class='background']")));
		} catch (Exception e) {
			System.out.println("***** INFO ***** MODAL STILL LOADING FOR OVER " + _timeoutInSeconds + "SECONDS.");
		}
	}

	public void waitUntilDangXulyCompletes(int _timeoutInSeconds) {
		try {
			withTimeoutOf(_timeoutInSeconds, TimeUnit.SECONDS)
					.waitFor(ExpectedConditions.invisibilityOfElementLocated(By.xpath(
							"//div[contains(@id,'dangxuly') and not (contains(@style,'none'))]//*[contains(text(),'Vui lòng chờ')]")));
		} catch (Exception e) {
			System.out.println("***** INFO ***** DANG XU LY STILL LOADING FOR OVER " + _timeoutInSeconds + "SECONDS.");
		}
	}

	/**
	 * @param _timeoutInSeconds Timeout In Seconds
	 * @Description Wait for Modal loading or hiding complete
	 */
	public void waitUntilElementVisible(String xPath, int _timeoutInSeconds) {
		try {
			withTimeoutOf(_timeoutInSeconds, TimeUnit.SECONDS)
					.waitFor(ExpectedConditions.presenceOfElementLocated(By.xpath(xPath)));
		} catch (Exception e) {
			System.out.println("***** INFO ***** ELEMENT NOT PRESENCE FOR OVER " + _timeoutInSeconds + "SECONDS.");
		}
	}

	/**
	 * @param _timeoutInSeconds Timeout In Seconds
	 * @Description Wait for jQuery complete
	 */
	public void waitUntiljQueryRequestCompletes(int _timeoutInSeconds) {
		try {
			new FluentWait<WebDriver>(getDriver()).withTimeout(_timeoutInSeconds, TimeUnit.SECONDS)
					.withMessage("***** INFO ***** JQUERY STILL LOADING FOR OVER" + _timeoutInSeconds + "SECONDS.")
					.pollingEvery(5, TimeUnit.MILLISECONDS).until(new ExpectedCondition<Boolean>() {
						public Boolean apply(WebDriver d) {
							try {
								JavascriptExecutor jsExec = (JavascriptExecutor) d;
								return (Boolean) jsExec.executeScript("return jQuery.active == 0");
							} catch (Exception e) {
								return true;
							}
						}
					});
		} catch (Exception e) {
		}
	}

	/**
	 * @param _timeoutInSeconds Timeout In Seconds
	 * @Description Wait for Ajax complete
	 */
	public void waitUntilAjaxCompletes(int _timeoutInSeconds) {
		new FluentWait<WebDriver>(getDriver()).withTimeout(_timeoutInSeconds, TimeUnit.SECONDS)
				.withMessage("***** INFO ***** AJAX STILL ACTIVE FOR OVER" + _timeoutInSeconds + "SECONDS.")
				.pollingEvery(5, TimeUnit.MILLISECONDS).until(new ExpectedCondition<Boolean>() {
					public Boolean apply(WebDriver d) {
						try {
							JavascriptExecutor jsExec = (JavascriptExecutor) d;
							return (Boolean) jsExec.executeScript("return $.active == 0");
						} catch (Exception e) {
							return true;
						}
					}
				});
	}

	/**
	 * @param _timeoutInSeconds Timeout In Seconds
	 * @Description Wait for HTML ready
	 */
	public void waitUntilHTMLReady(int _timeoutInSeconds) {
		new FluentWait<WebDriver>(getDriver()).withTimeout(_timeoutInSeconds, TimeUnit.SECONDS)
				.withMessage("***** INFO ***** HTML STILL LOADING FOR OVER" + _timeoutInSeconds + "SECONDS.")
				.pollingEvery(5, TimeUnit.MILLISECONDS).until(new ExpectedCondition<Boolean>() {
					public Boolean apply(WebDriver d) {
						try {
							JavascriptExecutor jsExec = (JavascriptExecutor) d;
							return (Boolean) jsExec.executeScript("return document.readyState").toString()
									.equals("complete");
						} catch (Exception e) {
							return true;
						}
					}
				});
	}

	/**
	 * @Description : Waiting for all HTML, JS, Ajax, Loading Date pop-up finish
	 *              when doing any action. Using before or after each action.
	 */
	public void waitForEverythingComplete(int _timeoutInSeconds) {
//		waitABit(30);
		waitUntilHTMLReady(_timeoutInSeconds);
		waitUntiljQueryRequestCompletes(_timeoutInSeconds);
//		waitUntilAjaxCompletes(_timeoutInSeconds);

	}

	public void waitForEverythingComplete() {
		waitForEverythingComplete(1);
	}

	/**
	 * Description Waiting for element invisible
	 * 
	 * @param _xPath
	 * @param _timeoutInSeconds
	 * @return
	 */
	public boolean waitUntilElementInvisible(String _xPath, int _timeoutInSeconds) {
		try {
			setImplicitTimeout(5, SECONDS);
			withTimeoutOf(_timeoutInSeconds, TimeUnit.SECONDS)
					.waitFor(ExpectedConditions.invisibilityOfElementLocated(By.xpath(_xPath)));
			resetImplicitTimeout();
			return true;
		} catch (Exception e) {
			resetImplicitTimeout();
			return false;
		}
	}

	/**
	 * Description Check element exist or not immediately
	 * 
	 * @param xPath
	 * @return
	 */
	public boolean isElementExistNow(String xPath) {
		waitForEverythingComplete();
		try {
			withTimeoutOf(500, TimeUnit.MILLISECONDS)
					.waitFor(ExpectedConditions.presenceOfElementLocated(By.xpath(xPath)));
			List<WebElementFacade> subDataCellResults = withTimeoutOf(500, TimeUnit.MILLISECONDS).findAll(xPath);
			if (subDataCellResults.size() != 0) {
				return true;
			}
		} catch (Exception e) {
		}
		return false;
	}

	public boolean isElementExistNowBasic(String xPath) {
		try {
			List<WebElementFacade> subDataCellResults = withTimeoutOf(120, TimeUnit.MILLISECONDS).findAll(xPath);
			if (subDataCellResults.size() != 0) {
				return true;
			}
		} catch (Exception e) {
		}
		return false;
	}

	/**
	 * Description Check element exist or not immediately
	 * 
	 * @param xPath
	 * @return
	 */
	public boolean isElementExist(String _xPath, int _TimeOutInSecond) {
		try {
			setImplicitTimeout(_TimeOutInSecond, SECONDS);
			XH(_xPath);
			resetImplicitTimeout();
			return true;
		} catch (Exception e) {
			resetImplicitTimeout();
		}
		return false;
	}

	/**
	 * Description Check element exist or not immediately
	 * 
	 * @param xPath
	 * @return
	 */
	public boolean isElemenReadonly(String _xPath) {
		String readonly = XH(_xPath).getAttribute("readonly");
		if (readonly == null) {
			if (XH(_xPath).isEnabled()) {
				return false;
			} else {
				return true;
			}
		} else {
			return true;
		}
	}

	// endregion Common Wait
	// region Common xPath
	/**
	 * @Description Convert from ID string to xPath string
	 * @param _ID
	 * @return xPath
	 */
	public String iD(String _ID) {
		return "//*[@id='" + _ID + "']";
	}

	public String iD(String _parentXpath, String _ID) {
		return _parentXpath + "//*[@id='" + _ID + "']";
	}

	/**
	 * @Descriptsion Highlight element by red border
	 * @param _xPath
	 */
	public void highlightElement(String _xPath) {
		try {
			((JavascriptExecutor) getDriver()).executeScript("arguments[0].style.border='1.5px solid red'",
					findBy(_xPath));
			Thread.sleep(500);
		} catch (Exception e) {
			// Do nothing
		}
	}

	public void unHighlightElement(String _xPath) {
		try {
			((JavascriptExecutor) getDriver()).executeScript("arguments[0].style.border=''", findBy(_xPath));

		} catch (Exception e) {
			// Do nothing
		}
	}

	/**
	 * @Description Convert from ID string to xPath string
	 * @param _ID
	 * @return xPath
	 */
	public String cLass(String _class) {
		return "//*[@class='" + _class + "']";
	}

	/**
	 * @Description Scroll into view of element
	 * @param _xPath
	 */
	public void scrollIntoElementView(String _xPath) {
		((JavascriptExecutor) getDriver()).executeScript("arguments[0].scrollIntoView(false);", findBy(_xPath));
		waitABit(15);
	}

	/**
	 * @param _wE
	 * @return WebElementFacade
	 * @Description Scroll into view of element.
	 */
	public WebElementFacade scrollIntoElementView(WebElementFacade _wE) {
		((JavascriptExecutor) getDriver()).executeScript("arguments[0].scrollIntoView(false);", _wE);
		waitABit(15);
		return _wE;
	}

	/**
	 * @param _xPath
	 * @return WebElementFacade
	 * @Description Wait for element to be present then scroll into view of element
	 *              and highlight it.
	 */
	public WebElementFacade waitElementToBePresentThenScrollIntoViewAndHighlight(String _xPath) {
		waitForEverythingComplete();
		waitFor(ExpectedConditions.presenceOfElementLocated(By.xpath(_xPath)));
		scrollIntoElementView(_xPath);
		highlightElement(_xPath);
		unHighlightElement(_xPath);
		return findBy(_xPath);
	}

	public WebElementFacade XH(String _xPath) {
		return waitElementToBePresentThenScrollIntoViewAndHighlight(_xPath);
	}

	/**
	 * @param _xPath
	 * @return WebElementFacade
	 * @Description Wait for element to be present then scroll into view of element.
	 */
	public WebElementFacade waitElementToBePresentThenScrollIntoView(String _xPath) {
		waitForEverythingComplete();
		waitFor(ExpectedConditions.presenceOfElementLocated(By.xpath(_xPath)));
		scrollIntoElementView(_xPath);
		return findBy(_xPath);
	}

	public WebElementFacade X(String _xPath) {
		return waitElementToBePresentThenScrollIntoView(_xPath);
	}

	/**
	 * @param _xPath
	 * @return WebElementFacade
	 * @Description Wait for element to be present.
	 */
	public WebElementFacade waitElementToBePresent(String _xPath) {
		waitForEverythingComplete();
		waitFor(ExpectedConditions.presenceOfElementLocated(By.xpath(_xPath)));
		return findBy(_xPath);
	}

	public WebElementFacade x(String _xPath) {
		return waitElementToBePresent(_xPath);
	}

	/**
	 * @param _xPath
	 * @return WebElementFacade
	 * @Description Wait for element to be clickable.
	 */
	public WebElementFacade waitElementToBeClickable(String _xPath) {
		X(_xPath).waitUntilClickable();
		highlightElement(_xPath);
		return findBy(_xPath);
	}

	/**
	 * Description Get current node text without text in sub child node
	 * 
	 * @param xPath
	 * @return
	 */
	public String getNodeTextWithoutSubChild(String xPath) {
		String text = X(xPath).getText();
		for (WebElementFacade child : X(xPath).thenFindAll("./*")) {
			text = text.replaceFirst(child.getText(), "");
		}
		return text.replaceAll("(?m)^[ \t]*\r?\n", "");
	}

	// endregion Common xPath

	// region Common Action

	/**
	 * @Description Wait, scroll into element then click.
	 * @param _xPath
	 */
	public void clickOnElement(String _xPath) {
		XH(_xPath).waitUntilClickable().click();
	}

	/**
	 * @Description Wait, scroll into element then double click.
	 * @param _xPath
	 */
	public void doubleClickOnElement(String _xPath) {
		withAction().doubleClick(XH(_xPath)).perform();
	}

	/**
	 * @Description Wait for element to be input, type given value and enter then
	 *              wait for element update value. NOTE: if existed value equal to
	 *              new value, it will keep existed value.
	 * @param _xPath
	 * @param _value
	 */
	public void waitTypeAndEnterThenUpdateValue(String _xPath, String _value) {
		if (!X(_xPath).getTextValue().equals(_value)) {
			X(_xPath).waitUntilEnabled().waitUntilVisible().typeAndEnter(_value);
			waitForEverythingComplete();
			waitTextToBePresentInElementValue(_xPath, _value);
			waitForEverythingComplete();
		}

	}

	/**
	 * @Description Wait for given text to be present in element value.
	 * @param _xPath
	 * @param _value
	 * @return WebElementFacade
	 */
	public WebElementFacade waitTextToBePresentInElementValue(String _xPath, String _value) {
		waitFor(ExpectedConditions.textToBePresentInElementValue(By.xpath(_xPath), _value));
		return findBy(_xPath);
	}

	/**
	 * @Description Click then Type into Element Char by Char
	 * @param _xPath
	 * @param _value
	 */
	public void clickThenTypeCharByChar(String _xPath, String _value) {
		WebElementFacade wEF = X(_xPath);
		wEF.click();
		wEF.clear();
		XH(_xPath).click();
		for (int i = 0; i < _value.length(); i++) {
			findBy(_xPath).waitUntilPresent().sendKeys(String.valueOf(_value.charAt(i)));
		}
	}

	/**
	 * @Description Click then Type into Element Char by Char then press Enter key
	 * @param _xPath
	 * @param _value
	 */
	public void clickThenTypeCharByCharThenEnter(String _xPath, String _value) {
		WebElementFacade wEF = X(_xPath);
		wEF.waitUntilClickable().click();
		wEF.clear();
		x(_xPath).click();
		for (int i = 0; i < _value.length(); i++) {
			findBy(_xPath).waitUntilPresent().sendKeys(String.valueOf(_value.charAt(i)));
		}
		x(_xPath).sendKeys(Keys.ENTER);
	}

	/**
	 * @Description Click then Type into Element Char by Char then press Tab key
	 * @param _xPath
	 * @param _value
	 */
	public void clickThenTypeCharByCharThenTab(String _xPath, String _value) {
		WebElementFacade wEF = X(_xPath);
		wEF.waitUntilClickable().click();
		wEF.clear();
		x(_xPath).click();
		for (int i = 0; i < _value.length(); i++) {
			findBy(_xPath).waitUntilPresent().sendKeys(String.valueOf(_value.charAt(i)));
		}
		x(_xPath).sendKeys(Keys.TAB);
	}

	/**
	 * @Description Wait for element to be input, type given value
	 * @param _xPath
	 * @param _value
	 */
	public void waitTypeAndTab(String _xPath, String _value) {
		if (_value.equals("@BLANK@")) {
			_value = "";
		}
		X(_xPath).waitUntilEnabled().typeAndTab(_value);
	}

	/**
	 * @Description Wait element then clear then type value into element
	 * @param _xPath
	 * @param _value
	 */
	public void waitClearAndType(String _xPath, String _value) {
		if (_value.equals("@BLANK@")) {
			_value = "";
		}
		XH(_xPath).clear();
		XH(_xPath).sendKeys(_value);
	}

	/**
	 * @Description Wait element then clear then type value into element, then press
	 *              Tab
	 * @param _xPath
	 * @param _value
	 */
	public void waitClearAndTypeThenTab(String _xPath, String _value) {
		if (_value.equals("@BLANK@")) {
			_value = "";
		}
		XH(_xPath).clear();
		XH(_xPath).sendKeys(_value + Keys.TAB);
	}

	/**
	 * @Description Wait element then clear then type value into element, then press
	 *              Tab
	 * @param _xPath
	 * @param _value
	 */
	public void waitClearAndTypeThenEnter(String _xPath, String _value) {
		if (_value.equals("@BLANK@")) {
			_value = "";
		}
		XH(_xPath).clear();
		XH(_xPath).sendKeys(_value + Keys.ENTER);
	}

	/**
	 * @Description Wait for element to be input, type given value then enter
	 * @param _xPath
	 * @param _value
	 */
	public void waitTypeAndEnter(String _xPath, String _value) {
		X(_xPath).waitUntilEnabled().typeAndEnter(_value);
	}

	// BEGIN Checkbox
	/**
	 * @Description xPath of Checkbox besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @return
	 */
	public String xPathChkboxWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder) {
		// return "(" + _parentXpath +
		// "//input[@type='checkbox'][preceding::*[self::label]" +
		// sTextPredicates(_labelName)
		// + xPathVisible + "[" + _labelOrder + "]])[" + _resOrder + "]";
		return "(" + _parentXpath + "//*[self::label]" + sTextPredicates(_labelName) + xPathVisible + ")[" + _labelOrder
				+ "]//following::input[@type='checkbox'][" + _resOrder + "]";
	}

	public String xPathChkboxWithLabel(String _parentXpath, String _labelName, int _labelOrder) {
		return xPathChkboxWithLabel("", _labelName, _labelOrder, 1);
	}

	public String xPathChkboxWithLabel(String _parentXpath, String _labelName) {
		return xPathChkboxWithLabel(_parentXpath, _labelName, 1, 1);
	}

	public String xPathChkboxWithLabel(String _labelName) {
		return xPathChkboxWithLabel("", _labelName, 1, 1);
	}

	/**
	 * @Description xPath of Checkbox besides Right Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @return
	 */
	public String xPathChkboxWithRightLabel(String _parentXpath, String _labelName, int _labelOrder) {
		String xPath = "(" + _parentXpath + "//input[@type='checkbox'][following::text()" + sTextPredicates(_labelName)
				+ xPathVisible + "])[last()]";
		return xPath;
	}

	public String xPathChkboxWithRightLabel(String _parentXpath, String _labelName) {
		return xPathChkboxWithRightLabel(_parentXpath, _labelName, 1);
	}

	public String xPathChkboxWithRightLabel(String _labelName, int _labelOrder) {
		return xPathChkboxWithRightLabel("", _labelName, _labelOrder);
	}

	public String xPathChkboxWithRightLabel(String _labelName) {
		return xPathChkboxWithRightLabel("", _labelName, 1);
	}

	/**
	 * @Description Set Check Box into checked or unchecked by given
	 *              value.[true|yes] means checked and otherwise.
	 * @param _xPathCheckBox
	 * @param _value
	 */
	public void setChkbox(String _xPathCheckBox, String _value) {
		if (_value.toLowerCase().equals("true") || _value.toLowerCase().equals("yes")
				|| _value.toLowerCase().equals("y")) {
			checkChkbox(_xPathCheckBox);
		} else {
			uncheckChkbox(_xPathCheckBox);
		}
	}

	/**
	 * @Description Check the Check Box.
	 * @param _xPathCheckBox
	 */
	public void checkChkbox(String _xPathCheckBox) {
		if (!x(_xPathCheckBox).isSelected()) {
			XH(_xPathCheckBox).click();
		} else {
			highlightElement(_xPathCheckBox + "//ancestor-or-self::div[1]");
		}
	}

	/**
	 * @Description Uncheck the Check Box.
	 * @param _xPathCheckBox
	 */
	public void uncheckChkbox(String _xPathCheckBox) {
		if (x(_xPathCheckBox).isSelected()) {
			clickOnElement(_xPathCheckBox);
		} else {
			highlightElement(_xPathCheckBox + "//ancestor-or-self::div[1]");
		}
	}

	/**
	 * @Description Verify Check box besides Label is checked or not
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @return
	 */
	public boolean isChkboxCheckedWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder) {
		return XH(xPathChkboxWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).isSelected();
	}

	public boolean isChkboxCheckedWithLabel(String _labelName, int _labelOrder) {
		return isChkboxCheckedWithLabel("", _labelName, _labelOrder, 1);
	}

	public boolean isChkboxCheckedWithLabel(String _labelName) {
		return isChkboxCheckedWithLabel("", _labelName, 1, 1);
	}

	/**
	 * @Description Verify Check box besides right Label is checked or not
	 * @param _parentXpath
	 * @param _labelName
	 * @param _resOrder
	 * @return
	 */
	public boolean isChkboxCheckedWithRightLabel(String _parentXpath, String _labelName, int _labelOrder) {
		return XH(xPathChkboxWithRightLabel(_parentXpath, _labelName, _labelOrder)).isSelected();
	}

	public boolean isChkboxCheckedWithRightLabel(String _parentXpath, String _labelName) {
		return isChkboxCheckedWithRightLabel(_parentXpath, _labelName, 1);
	}

	public boolean isChkboxCheckedWithRightLabel(String _labelName, int _labelOrder) {
		return isChkboxCheckedWithRightLabel("", _labelName, _labelOrder);
	}

	public boolean isChkboxCheckedWithRightLabel(String _labelName) {
		return isChkboxCheckedWithRightLabel("", _labelName, 1);
	}

	/**
	 * @Description Set Check Box besides Label into checked or unchecked by given
	 *              value.[true|yes|y] means checked and otherwise.
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @param _value
	 */
	public void setChkboxWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder,
			String _value) {
		setChkbox(xPathChkboxWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder), _value);
	}

	public void setChkboxWithLabel(String _parentXpath, String _labelName, String _value) {
		setChkboxWithLabel(_parentXpath, _labelName, 1, 1, _value);
	}

	public void setChkboxWithLabel(String _labelName, int _labelOrder, String _value) {
		setChkbox(xPathChkboxWithLabel("", _labelName, _labelOrder, 1), _value);
	}

	public void setChkboxWithLabel(String _labelName, String _value) {
		setChkboxWithLabel("", _labelName, 1, 1, _value);
	}

	/**
	 * @Description Set Check Box besides right Label into checked or unchecked by
	 *              given value.[true|yes|y] means checked and otherwise.
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _value
	 */
	public void setChkboxWithRightLabel(String _parentXpath, String _labelName, int _labelOrder, String _value) {
		setChkbox(xPathChkboxWithRightLabel(_parentXpath, _labelName, _labelOrder), _value);
	}

	public void setChkboxWithRightLabel(String _parentXpath, String _labelName, String _value) {
		setChkboxWithRightLabel(_parentXpath, _labelName, 1, _value);
	}

	public void setChkboxWithRightLabel(String _labelName, int _labelOrder, String _value) {
		setChkboxWithRightLabel("", _labelName, _labelOrder, _value);
	}

	public void setChkboxWithRightLabel(String _labelName, String _value) {
		setChkboxWithRightLabel("", _labelName, 1, _value);
	}
	// END Checkbox

	// BEGIN Radio Button
	/**
	 * @Description xPath of Radio Button besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @return
	 */
	public String xPathRadioBtnWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder) {
		// String xPath = "(" + _parentXpath +
		// "//input[@type='radio'][following::text()[1]" + sTextPredicates(_labelName)
		// + xPathVisible + "[" + _labelOrder + "]])[" + _resOrder + "]";
		String xPath = "(" + _parentXpath + "//text()[1]" + sTextPredicates(_labelName) + xPathVisible + ")["
				+ _labelOrder + "]//following::input[@type='radio'][" + _resOrder + "]";
		return xPath;
	}

	public String xPathRadioBtnWithLabel(String _parentXpath, String _labelName, int _labelOrder) {
		return xPathRadioBtnWithLabel(_parentXpath, _labelName, _labelOrder, 1);
	}

	public String xPathRadioBtnWithLabel(String _parentXpath, String _labelName) {
		return xPathRadioBtnWithLabel(_parentXpath, _labelName, 1, 1);
	}

	public String xPathRadioBtnWithLabel(String _labelName) {
		return xPathRadioBtnWithLabel("", _labelName, 1, 1);
	}

	/**
	 * @param _xPathRadioBtn
	 * @Description Select the Radio Button.
	 */
	public void selectRadioBtn(String _xPathRadioBtn, String _value) {
		if (_value.toLowerCase().equals("true") || _value.toLowerCase().equals("yes")
				|| _value.toLowerCase().equals("y")) {
			selectRadioBtn(_xPathRadioBtn);
		}
	}

	/**
	 * @param _xPathRadioBtn
	 * @Description Select the Radio Button.
	 */
	public void selectRadioBtn(String _xPathRadioBtn) {
		if (!x(_xPathRadioBtn).isSelected()) {
			clickOnElement(_xPathRadioBtn);
		} else {
			highlightElement(_xPathRadioBtn + "//ancestor-or-self::div[1]");
		}
	}

	/**
	 * @Description Select Radio Button besides Label into selected by given
	 *              value.[true|yes|y] means select and otherwise.
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @param _value
	 */
	public void selectRadioBtnWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder,
			String _value) {
		selectRadioBtn(xPathRadioBtnWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder), _value);
	}

	public void selectRadioBtnWithLabel(String _parentXpath, String _labelName, String _value) {
		selectRadioBtnWithLabel(_parentXpath, _labelName, 1, 1, _value);
	}

	public void selectRadioBtnWithLabel(String _labelName, int _labelOrder, String _value) {
		selectRadioBtnWithLabel("", _labelName, _labelOrder, 1, _value);
	}

	public void selectRadioBtnWithLabel(String _labelName, String _value) {
		selectRadioBtnWithLabel("", _labelName, 1, 1, _value);
	}

	public void selectRadioBtnWithLabel(String _labelName) {
		selectRadioBtnWithLabel("", _labelName, 1, 1, "true");
	}

	// END Radio Button

	// Button
	/**
	 * @param _parentXpath
	 * @param _btnName
	 * @param _resOrder
	 * @return xPath
	 * @Description xPath of Button by button name
	 */
	public String xPathBtn(String _parentXpath, String _btnName, int _resOrder) {
		String xPath = "(" + _parentXpath
				+ "//*[self::input[not (@type='text')] or self::button or self::a or self::span][descendant-or-self::*"
				+ sTextPredicates(_btnName) + xPathVisible + "])[" + _resOrder + "]";

		return xPath;
	}

	public String xPathBtn(String _parentXpath, String _btnName) {
		return xPathBtn(_parentXpath, _btnName, 1);
	}

	public String xPathBtn(String _btnName, int _resOrder) {
		return xPathBtn("", _btnName, _resOrder);
	}

	public String xPathBtn(String _btnName) {
		return xPathBtn("", _btnName, 1);
	}

	/**
	 * @param _parentXpath
	 * @param _btnName
	 * @param _resOrder
	 * @return WebElementFacade
	 * @Description Finding button by button name
	 */
	public WebElementFacade findBtn(String _parentXpath, String _btnName, int _resOrder) {
		return X(xPathBtn(_parentXpath, _btnName, _resOrder));
	}

	public WebElementFacade findBtn(String _btnName) {
		return X(xPathBtn(_btnName));
	}

	public WebElementFacade findBtn(String _btnName, int _resOrder) {
		return X(xPathBtn(_btnName, _resOrder));
	}

	public WebElementFacade findBtn(String _parentXpath, String _btnName) {
		return X(xPathBtn(_parentXpath, _btnName));
	}

	/**
	 * @Description Click on button by button name
	 * @param _parentXpath
	 * @param _btnName
	 * @param _resOrder
	 */
	public void clickBtn(String _parentXpath, String _btnName, int _resOrder) {
		waitForEverythingComplete();
		waitForEverythingComplete();
		XH(xPathBtn(_parentXpath, _btnName, _resOrder)).waitUntilClickable().click();
		waitForEverythingComplete();
		waitForEverythingComplete();
	}

	public void clickBtn(String _btnName, int _resOrder) {
		clickBtn("", _btnName, _resOrder);
	}

	public void clickBtn(String _parentXpath, String _btnName) {
		clickBtn(_parentXpath, _btnName, 1);
	}

	public void clickBtn(String _btnName) {
		clickBtn("", _btnName, 1);
	}

	/**
	 * @Description Check button is clickable or not by button name
	 * @param _parentXpath
	 * @param _btnName
	 * @param _resOrder
	 * @return
	 */
	public boolean isClickableBtn(String _parentXpath, String _btnName, int _resOrder) {
		return XH(xPathBtn(_parentXpath, _btnName, _resOrder)).isEnabled();
	}

	public boolean isClickableBtn(String _parentXpath, String _btnName) {
		return isClickableBtn(_parentXpath, _btnName, 1);
	}

	public boolean isClickableBtn(String _btnName, int _resOrder) {
		return isClickableBtn("", _btnName, _resOrder);
	}

	public boolean isClickableBtn(String _btnName) {
		return isClickableBtn("", _btnName, 1);
	}

	// Link
	/**
	 * @Description xPath of Link by name
	 * @param _parentXpath
	 * @param _linkName
	 * @param _resOrder
	 * @return xPath
	 */
	public String xPathLink(String _parentXpath, String _linkName, int _resOrder) {
		String xPath = "(" + _parentXpath + "//a[descendant-or-self::*" + sTextPredicates(_linkName) + xPathVisible
				+ "])[" + _resOrder + "]";
		return xPath;
	}

	public String xPathLink(String _parentXpath, String _linkName) {
		return xPathLink(_parentXpath, _linkName, 1);
	}

	public String xPathLink(String _linkName, int _resOrder) {
		return xPathLink("", _linkName, _resOrder);
	}

	public String xPathLink(String _linkName) {
		return xPathLink("", _linkName, 1);
	}

	/**
	 * @Description Finding Link by name
	 * @param _parentXpath
	 * @param _linkName
	 * @param _resOrder
	 * @return WebElementFacade
	 */
	public WebElementFacade findLink(String _parentXpath, String _linkName, int _resOrder) {
		return X(xPathLink(_parentXpath, _linkName, _resOrder));
	}

	public WebElementFacade findLink(String _parentXpath, String _linkName) {
		return X(xPathLink(_parentXpath, _linkName, 1));
	}

	public WebElementFacade findLink(String _linkName, int _resOrder) {
		return X(xPathLink("", _linkName, _resOrder));
	}

	public WebElementFacade findLink(String _linkName) {
		return X(xPathLink("", _linkName, 1));
	}

	/**
	 * @Description Click on Link by name
	 * @param _parentXpath
	 * @param _linkName
	 * @param _resOrder
	 */
	public void clickLink(String _parentXpath, String _linkName, int _resOrder) {
		XH(xPathLink(_parentXpath, _linkName, _resOrder)).waitUntilClickable().click();
		waitForEverythingComplete();
	}

	public void clickLink(String _parentXpath, String _linkName) {
		clickLink(_parentXpath, _linkName, 1);
	}

	public void clickLink(String _linkName, int _resOrder) {
		clickLink("", _linkName, _resOrder);
	}

	public void clickLink(String _linkName) {
		clickLink("", _linkName, 1);
	}

	/**
	 * @Description Check Link is clickable or not by name
	 * @param _linkName
	 */
	public boolean isClickableLink(String _parentXpath, String _linkName, int _resOrder) {
		return XH(xPathLink(_parentXpath, _linkName, _resOrder)).isEnabled();
	}

	public boolean isClickableLink(String _linkName, int _resOrder) {
		return isClickableLink("", _linkName, _resOrder);
	}

	public boolean isClickableLink(String _parentXpath, String _linkName) {
		return isClickableLink(_parentXpath, _linkName, 1);
	}

	public boolean isClickableLink(String _linkName) {
		return isClickableLink("", _linkName, 1);
	}

	// End Link
	// Dynamic Button
	/**
	 * @Description Click on Dynamic Button
	 * @param _parentXpath
	 * @param _btnDefine
	 * @return
	 */
	public void clickDBtn(String _parentXpath, String _btnDefine) {
		if (_btnDefine.contains("@>@")) {
			String[] lTemp = _btnDefine.split("@>@");
			// Click Btn
			clickBtn(_parentXpath, lTemp[0]);
			// Click Sub Btn
			clickOnElement(xPathBtn(_parentXpath, lTemp[0]) + "/following-sibling::ul//a" + sTextPredicates(lTemp[1]));
		} else {
			clickBtn(_parentXpath, _btnDefine);
		}
	}

	public void clickDBtn(String _btnDefine) {
		clickDBtn("", _btnDefine);
	}

	/**
	 * @Description Is Dynamic Button clickable
	 * @param _parentXpath
	 * @param _btnDefine
	 * @return
	 */
	public boolean isClickableDBtn(String _parentXpath, String _btnDefine) {
		boolean ret = false;
		if (_btnDefine.contains("@>@")) {
			String[] lTemp = _btnDefine.split("@>@");
			ret = isClickableBtn(_parentXpath, lTemp[0]);
			if (ret) {
				// Click Btn
				clickBtn(_parentXpath, lTemp[0]);
				// Check Sub Btn
				ret = XH(xPathBtn(_parentXpath, lTemp[0]) + "/following-sibling::ul//a" + sTextPredicates(lTemp[1]))
						.isEnabled();
			}
		} else {
			ret = isClickableBtn(_parentXpath, _btnDefine);
		}
		return ret;
	}

	public boolean isClickableDBtn(String _btnDefine) {
		return isClickableDBtn("", _btnDefine);
	}

	/**
	 * @Description Is Dynamic Button clickable
	 * @param _parentXpath
	 * @param _btnDefine
	 * @return
	 */
	public boolean isFocusDBtn(String _parentXpath, String _btnDefine) {
		boolean ret = false;
		if (_btnDefine.contains("@>@")) {
			String[] lTemp = _btnDefine.split("@>@");
			ret = XH(xPathBtn(_parentXpath, lTemp[0])).hasFocus();
		} else {
			ret = XH(xPathBtn(_parentXpath, _btnDefine)).hasFocus();
		}
		return ret;
	}

	public boolean isFocusDBtn(String _btnDefine) {
		return isFocusDBtn("", _btnDefine);
	}

	/**
	 * @Description Is Dynamic Button visible
	 * @param _parentXpath
	 * @param _btnDefine
	 * @return
	 */
	public boolean isVisibleDBtn(String _parentXpath, String _btnDefine) {
		boolean ret = false;
		if (_btnDefine.contains("@>@")) {
			String[] lTemp = _btnDefine.split("@>@");
			ret = isElementExistNow(xPathBtn(_parentXpath, lTemp[0]));
			if (ret) {
				// Click Btn
				clickBtn(_parentXpath, lTemp[0]);
				// Check Sub Btn
				ret = isElementExistNow(
						xPathBtn(_parentXpath, lTemp[0]) + "/following-sibling::ul//a" + sTextPredicates(lTemp[1]));
			}
		} else {
			ret = isElementExistNow(xPathBtn(_parentXpath, _btnDefine));
		}
		return ret;
	}

	public boolean isVisibleDBtn(String _btnDefine) {
		return isVisibleDBtn("", _btnDefine);
	}

	// Upload File Button
	/**
	 * @Description xPath of Upload File Btn besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @return xPath
	 */
	public String xPathUploadFileBtnWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder) {
		return "(" + _parentXpath + "//input[@type='file'][preceding::*[self::label]" + sTextPredicates(_labelName)
				+ xPathVisible + "[" + _labelOrder + "]])[" + _resOrder + "]";
	}

	public String xPathUploadFileBtnWithLabel(String _labelName, int _labelOrder) {
		return xPathUploadFileBtnWithLabel("", _labelName, _labelOrder, 1);
	}

	public String xPathUploadFileBtnWithLabel(String _labelName) {
		return xPathUploadFileBtnWithLabel("", _labelName, 1, 1);
	}

	/**
	 * @Description xPath of Upload Button by button name
	 * @param _parentXpath
	 * @param _uBtnName
	 * @param _resOrder
	 * @return xPath
	 */
	public String xPathUploadBtn(String _parentXpath, String _uBtnName, int _resOrder) {
		String xPath = "(" + _parentXpath + "//*[self::*[input[@type='file']]][descendant-or-self::*"
				+ sTextPredicates(_uBtnName) + xPathVisible + "])[" + _resOrder + "]//input";
		return xPath;
	}

	public String xPathUploadBtn(String _uBtnName, int _resOrder) {
		return xPathUploadBtn("", _uBtnName, _resOrder);
	}

	public String xPathUploadBtn(String _uBtnName) {
		return xPathUploadBtn("", _uBtnName, 1);
	}

	/**
	 * @Description Upload file into upload file Button by sending key directly
	 * @param _xpath
	 * @param _dir
	 */
	public void uploadFile(String _xpath, String _dir) {
		XH(_xpath).sendKeys(_dir.replace("@HOME@", System.getProperty("user.dir")));
		waitForEverythingComplete();
	}

	/**
	 * @Description Upload file into upload file Button besides Label by sending key
	 *              directly
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @param _dir
	 */
	public void uploadFileByBtnWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder,
			String _dir) {
		XH(xPathUploadFileBtnWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder))
				.sendKeys(_dir.replace("@HOME@", System.getProperty("user.dir")));
		waitForEverythingComplete();
	}

	public void uploadFileByBtnWithLabel(String _parentXpath, String _labelName, int _labelOrder, String _dir) {
		uploadFileByBtnWithLabel(_parentXpath, _labelName, _labelOrder, 1, _dir);
	}

	public void uploadFileByBtnWithLabel(String _parentXpath, String _labelName, String _dir) {
		uploadFileByBtnWithLabel(_parentXpath, _labelName, 1, 1, _dir);
	}

	public void uploadFileByBtnWithLabel(String _labelName, int _labelOrder, String _dir) {
		uploadFileByBtnWithLabel("", _labelName, _labelOrder, 1, _dir);
	}

	public void uploadFileByBtnWithLabel(String _labelName, String _dir) {
		uploadFileByBtnWithLabel("", _labelName, 1, 1, _dir);
	}

	// Tab
	/**
	 * @Description xpath of Tab
	 * @param _parentXpath
	 * @param _tabName
	 * @param _resOrder
	 * @return
	 */
	public String xPathTabWithName(String _parentXpath, String _tabName, int _resOrder) {
		String xPath = "(" + _parentXpath + "//li//span/a" + sTextPredicates(_tabName) + xPathVisible + ")[" + _resOrder
				+ "]";
		return xPath;
	}

	public String xPathTabWithName(String _parentXpath, String _tabName) {
		return xPathTabWithName(_parentXpath, _tabName, 1);
	}

	public String xPathTabWithName(String _tabName, int _resOrder) {
		return xPathTabWithName("", _tabName, _resOrder);
	}

	public String xPathTabWithName(String _tabName) {
		return xPathTabWithName("", _tabName, 1);
	}

	/**
	 * @Description Is Tab active or not
	 * @param _parentXpath
	 * @param _tabName
	 * @param _resOrder
	 * @return
	 */
	public boolean isTabActiveWithName(String _parentXpath, String _tabName, int _resOrder) {
		String classAtt = XH(xPathTabWithName(_parentXpath, _tabName, _resOrder) + "//ancestor::li[1]")
				.getAttribute("class");
		if ((classAtt != null) && classAtt.contains("selected")) {
			return true;
		} else {
			return false;
		}
	}

	public boolean isTabActiveWithName(String _parentXpath, String _tabName) {
		return isTabActiveWithName(_parentXpath, _tabName, 1);
	}

	public boolean isTabActiveWithName(String _tabName, int _resOrder) {
		return isTabActiveWithName("", _tabName, _resOrder);
	}

	public boolean isTabActiveWithName(String _tabName) {
		return isTabActiveWithName("", _tabName, 1);
	}

	/**
	 * @Description Is Tab active or not
	 * @param _xPath
	 * @return
	 */
	public boolean isTabActive(String _xPath) {
		String classAtt = XH(_xPath).getAttribute("class");
		if ((classAtt != null) && classAtt.contains("active")) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * @Description Switch Tab by Tab name
	 * @param _parentXpath
	 * @param _tabName
	 * @param _resOrder
	 */
	public void switchTabWithName(String _parentXpath, String _tabName, int _resOrder) {
		if (isTabActiveWithName(_parentXpath, _tabName, _resOrder) == false) {
			clickOnElement(xPathTabWithName(_parentXpath, _tabName, _resOrder));
		}
	}

	public void switchTabWithName(String _parentXpath, String _tabName) {
		switchTabWithName(_parentXpath, _tabName, 1);
	}

	public void switchTabWithName(String _tabName, int _resOrder) {
		switchTabWithName("", _tabName, _resOrder);
	}

	public void switchTabWithName(String _tabName) {
		switchTabWithName("", _tabName, 1);
	}

	/**
	 * @Description Switch Tab
	 * @param _xPath
	 */
	public void switchTab(String _xPath) {
		if (isTabActive(_xPath) == false) {
			clickOnElement(_xPath);
		}
	}
	// region Input Field, TEXT AREA with Label and Calendar

	// Input Field
	/**
	 * @Description xPath of Input Field besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @return
	 */
	public String xPathInputFieldWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder) {
		return "(" + _parentXpath
				+ "//*[self::label or self::b or self::span or self::th[not(ancestor::table[1][descendant::thead])]]"
				+ sTextPredicates(_labelName) + xPathVisible + ")[" + _labelOrder + "]//following::input[" + _resOrder
				+ "]";
	}

	public String xPathInputFieldWithLabel(String _parentXpath, String _labelName, int _labelOrder) {
		return xPathInputFieldWithLabel(_parentXpath, _labelName, _labelOrder, 1);
	}

	public String xPathInputFieldWithLabel(String _labelName, int _labelOrder, int _resOrder) {
		return xPathInputFieldWithLabel("", _labelName, _labelOrder, _resOrder);
	}

	public String xPathInputFieldWithLabel(String _labelName, int _labelOrder) {
		return xPathInputFieldWithLabel("", _labelName, _labelOrder, 1);
	}

	public String xPathInputFieldWithLabel(String _parentXpath, String _labelName) {
		return xPathInputFieldWithLabel("", _labelName, 1, 1);
	}

	public String xPathInputFieldWithLabel(String _labelName) {
		return xPathInputFieldWithLabel("", _labelName, 1, 1);
	}

	/**
	 * @Description xPath of Error Text besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @return
	 */
	public String xPathErrorTextWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder) {
		return "(" + _parentXpath
				+ "//label[preceding::*[self::label or self::span or self::th[not(ancestor::table[1][descendant::thead])]]"
				+ sTextPredicates(_labelName) + xPathVisible + "[" + _labelOrder + "]])[" + _resOrder + "]";
	}

	/**
	 * @Description xPath of Text Area Field besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @return
	 */
	public String xPathTextAreaWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder) {
		// return "(" + _parentXpath + "//textarea[preceding::*[self::label]" +
		// sTextPredicates(_labelName) + xPathVisible
		// + "[" + _labelOrder + "]])[" + _resOrder + "]";
		return "(" + _parentXpath
				+ "//*[self::label or self::b or self::span or self::th[not(ancestor::table[1][descendant::thead])]]"
				+ sTextPredicates(_labelName) + xPathVisible + ")[" + _labelOrder + "]//following::textarea["
				+ _resOrder + "]";

	}

	public String xPathTextAreaWithLabel(String _parentXpath, String _labelName, int _labelOrder) {
		return xPathTextAreaWithLabel(_parentXpath, _labelName, _labelOrder, 1);
	}

	public String xPathTextAreaWithLabel(String _parentXpath, String _labelName) {
		return xPathTextAreaWithLabel(_parentXpath, _labelName, 1, 1);
	}

	public String xPathTextAreaWithLabel(String _labelName, int _labelOrder) {
		return xPathTextAreaWithLabel("", _labelName, _labelOrder, 1);
	}

	public String xPathTextAreaWithLabel(String _labelName) {
		return xPathTextAreaWithLabel("", _labelName, 1, 1);
	}

	/**
	 * @Description Get content of Text Area besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @return
	 */
	public String getTextAreaWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder) {
		return XH(xPathTextAreaWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).getAttribute("value");
	}

	public String getTextAreaWithLabel(String _parentXpath, String _labelName, int _labelOrder) {
		return getTextAreaWithLabel(_parentXpath, _labelName, _labelOrder, 1);
	}

	public String getTextAreaWithLabel(String _labelName, int _labelOrder, int _resOrder) {
		return getTextAreaWithLabel("", _labelName, _labelOrder, _resOrder);
	}

	public String getTextAreaWithLabel(String _parentXpath, String _labelName) {
		return getTextAreaWithLabel(_parentXpath, _labelName, 1, 1);
	}

	public String getTextAreaWithLabel(String _labelName, int _labelOrder) {
		return getTextAreaWithLabel("", _labelName, _labelOrder, 1);
	}

	public String getTextAreaWithLabel(String _labelName) {
		return getTextAreaWithLabel("", _labelName, 1, 1);
	}

	/**
	 * @Description Enter value into Text Area besides Label then tab
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @param _value
	 */
	public void enterTextAreaWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder,
			String _value) {
		waitTypeAndTab(xPathTextAreaWithLabel("", _labelName, _labelOrder, _resOrder), _value);
	}

	public void enterTextAreaWithLabel(String _parentXpath, String _labelName, int _labelOrder, String _value) {
		enterTextAreaWithLabel(_parentXpath, _labelName, _labelOrder, 1, _value);
	}

	public void enterTextAreaWithLabel(String _parentXpath, String _labelName, String _value) {
		enterTextAreaWithLabel(_parentXpath, _labelName, 1, 1, _value);
	}

	public void enterTextAreaWithLabel(String _labelName, int _labelOrder, String _value) {
		enterTextAreaWithLabel("", _labelName, _labelOrder, 1, _value);
	}

	public void enterTextAreaWithLabel(String _labelName, String _value) {
		enterTextAreaWithLabel("", _labelName, 1, 1, _value);
	}

	/**
	 * @Description Type value into Text Area Field besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @param _value
	 */
	public void typeTextAreaWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder,
			String _value) {
		if (_value.equals("@BLANK@")) {
			_value = "";
		}
		if (_value.contains("@br;")) {
			String[] lTemp = _value.split("@br;");
			for (int i = 0; i < lTemp.length; i++) {
				XH(xPathTextAreaWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).sendKeys(lTemp[i]);
				if (i < lTemp.length - 1) {
					XH(xPathTextAreaWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).sendKeys(Keys.ENTER);
				}
			}
		} else {
			XH(xPathTextAreaWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).sendKeys(_value);
		}
	}

	public void typeTextAreaWithLabel(String _parentXpath, String _labelName, int _labelOrder, String _value) {
		typeTextAreaWithLabel(_parentXpath, _labelName, _labelOrder, 1, _value);
	}

	public void typeTextAreaWithLabel(String _parentXpath, String _labelName, String _value) {
		typeTextAreaWithLabel(_parentXpath, _labelName, 1, 1, _value);
	}

	public void typeTextAreaWithLabel(String _labelName, int _labelOrder, String _value) {
		typeTextAreaWithLabel("", _labelName, _labelOrder, 1, _value);
	}

	public void typeTextAreaWithLabel(String _labelName, String _value) {
		typeTextAreaWithLabel("", _labelName, 1, 1, _value);
	}

	/**
	 * @Description Clear Then Type value into Text Area Field besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @param _value
	 */
	public void clearAndTypeTextAreaWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder,
			String _value) {
		XH(xPathTextAreaWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).clear();
		if (_value.equals("@BLANK@")) {
			_value = "";
		}
		if (_value.contains("@br;")) {
			String[] lTemp = _value.split("@br;");
			for (int i = 0; i < lTemp.length; i++) {
				XH(xPathTextAreaWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).sendKeys(lTemp[i]);
				if (i < lTemp.length - 1) {
					XH(xPathTextAreaWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).sendKeys(Keys.ENTER);
				}
			}
		} else {
			XH(xPathTextAreaWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).sendKeys(_value);
		}
	}

	public void clearAndTypeTextAreaWithLabel(String _parentXpath, String _labelName, int _labelOrder, String _value) {
		clearAndTypeTextAreaWithLabel(_parentXpath, _labelName, _labelOrder, 1, _value);
	}

	public void clearAndTypeTextAreaWithLabel(String _parentXpath, String _labelName, String _value) {
		clearAndTypeTextAreaWithLabel(_parentXpath, _labelName, 1, 1, _value);
	}

	public void clearAndTypeTextAreaWithLabel(String _labelName, int _labelOrder, String _value) {
		clearAndTypeTextAreaWithLabel("", _labelName, _labelOrder, 1, _value);
	}

	public void clearAndTypeTextAreaWithLabel(String _labelName, String _value) {
		clearAndTypeTextAreaWithLabel("", _labelName, 1, 1, _value);
	}

	// Calendar
	/**
	 * @Description xPath of Calendar selector besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @return
	 */
	public String xPathCalendarWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder) {
		return "(" + _parentXpath + "//input[@type='text'][preceding::*[self::label]" + sTextPredicates(_labelName)
				+ xPathVisible + "[" + _labelOrder + "]])[" + _resOrder + "]";
	}

	public String xPathCalendarWithLabel(String _parentXpath, String _labelName, int _labelOrder) {
		return xPathCalendarWithLabel(_parentXpath, _labelName, _labelOrder, 1);
	}

	public String xPathCalendarWithLabel(String _parentXpath, String _labelName) {
		return xPathCalendarWithLabel(_parentXpath, _labelName, 1, 1);
	}

	public String xPathCalendarWithLabel(String _labelName, int _labelOrder) {
		return xPathCalendarWithLabel("", _labelName, _labelOrder, 1);
	}

	public String xPathCalendarWithLabel(String _labelName) {
		return xPathCalendarWithLabel("", _labelName, 1, 1);
	}

	/**
	 * @Description xPath of Calendar Picker besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @return
	 */
	public String xPathCalendarPickerWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder) {
		return "(" + _parentXpath + "//img[@class='ui-datepicker-trigger']" + sTextPredicates(_labelName) + xPathVisible
				+ "[" + _labelOrder + "]])[" + _resOrder + "]";
	}

	public String xPathCalendarPickerWithLabel(String _parentXpath, String _labelName, int _labelOrder) {
		return xPathCalendarPickerWithLabel("", _labelName, _labelOrder, 1);
	}

	public String xPathCalendarPickerWithLabel(String _labelName, int _labelOrder, int _resOrder) {
		return xPathCalendarPickerWithLabel("", _labelName, _labelOrder, _resOrder);
	}

	public String xPathCalendarPickerWithLabel(String _labelName, int _labelOrder) {
		return xPathCalendarPickerWithLabel("", _labelName, _labelOrder, 1);
	}

	public String xPathCalendarPickerWithLabel(String _parentXpath, String _labelName) {
		return xPathCalendarPickerWithLabel(_parentXpath, _labelName, 1, 1);
	}

	public String xPathCalendarPickerWithLabel(String _labelName) {
		return xPathCalendarPickerWithLabel("", _labelName, 1, 1);
	}

	/**
	 * @Description Pick a given date from Calendar besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @param _date
	 */
	public void pickCalendarDateWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder,
			String _date) {
		clickOnElement(xPathCalendarPickerWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder));
		pickDateInCalendar(_date);
	}

	public void pickCalendarDateWithLabel(String _labelName, int _labelOrder, String _date) {
		pickCalendarDateWithLabel("", _labelName, _labelOrder, 1, _date);
	}

	public void pickCalendarDateWithLabel(String _labelName, String _date) {
		pickCalendarDateWithLabel("", _labelName, 1, 1, _date);
	}

	// Calendar
	private static final String xPathDatePikcer = "//div[@id='ui-datepicker-div']";

	public void pickCalendarWithLabel(String _parentXpath, String _label, String _date) {
		pickCalendar(xPathCalendarWithLabel(_parentXpath, _label), _date);
	}

	public void pickCalendarWithLabel(String _label, String _date) {
		pickCalendar(xPathCalendarWithLabel(_label), _date);
	}

	public void pickCalendar(String _xPath, String _date) {
		clickOnElement(_xPath);
		if (!isElementExistNow(xPathDatePikcer)) {
			clickOnElement(_xPath);
		}
		pickDateInCalendar(_date);
		waitForDatePickerClosed();
	}

	private void waitForDatePickerClosed() {
		WebDriverWait wait = new WebDriverWait(getDriver(), 10);
		wait.until(new ExpectedCondition<Boolean>() {
			@Override
			public Boolean apply(WebDriver d) {
				return d.findElement(By.xpath(xPathDatePikcer)).getAttribute("style").contains("display: none;");
			}
		});
	}

	public String getCalendarWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder) {
		return XH(xPathCalendarWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).getAttribute("value");
	}

	public String getCalendarWithLabel(String _parentXpath, String _labelName) {
		return XH(xPathCalendarWithLabel(_parentXpath, _labelName, 1, 1)).getAttribute("value");
	}

	public String getCalendarWithLabel(String _labelName) {
		return XH(xPathCalendarWithLabel("", _labelName, 1, 1)).getAttribute("value");
	}

	public String getCalendar(String _parentXpath, String _xpath) {
		return XH(_parentXpath + _xpath).getAttribute("value");
	}

	public String getCalendar(String _xpath) {
		return XH(_xpath).getAttribute("value");
	}

	public void pickDateInCalendarUsingNavMonth(String _date) {
		String dd = "", MM = "", yyyy = "";
		if (_date.length() == 10) {
			// Get value
			_date = _date.replace("/", "");
			dd = _date.substring(0, 2);
			MM = _date.substring(2, 4);
			yyyy = _date.substring(4, 8);
			// Remove 0
			if (dd.startsWith("0")) {
				dd = dd.substring(1);
			}
			if (MM.startsWith("0")) {
				MM = MM.substring(1);
			}
		} else {
			System.out.println("***** ERROR ***** : INVALID DATE FORMAT FOR CALENDAR " + _date);
		}
		String curM, curYYYY;
		// Get current month, year
		curM = x(xPathDatePikcer + "//span[@class='ui-datepicker-month']").getText().replaceAll("Tháng ", "");
		curYYYY = x(xPathDatePikcer + "//span[@class='ui-datepicker-year']").getText();
		Calendar startCalendar = new GregorianCalendar();
		Calendar endCalendar = new GregorianCalendar();
		Date setDate = new GregorianCalendar(Integer.parseInt(yyyy), Integer.parseInt(MM), Integer.parseInt(dd))
				.getTime();
		startCalendar.setTime(setDate);
		Date curDate = new GregorianCalendar(Integer.parseInt(curYYYY), Integer.parseInt(curM), 1).getTime();
		endCalendar.setTime(curDate);
		int diffYear = endCalendar.get(Calendar.YEAR) - startCalendar.get(Calendar.YEAR);
		int diffMonth = diffYear * 12 + endCalendar.get(Calendar.MONTH) - startCalendar.get(Calendar.MONTH);
		// If set date > current display date -> next month until go to set date
		String xPathPreMonthNav = xPathDatePikcer + "//span[@class='ui-icon ui-icon-circle-triangle-w']";
		String xPathNextMonthNav = xPathDatePikcer + "//span[@class='ui-icon ui-icon-circle-triangle-e']";
		if (diffMonth > 0) {
			for (int i = 0; i < diffMonth; i++) {
				x(xPathPreMonthNav).click();
			}
		} else if (diffMonth < 0) {
			for (int i = 0; i > diffMonth; i--) {
				x(xPathNextMonthNav).click();
			}
		}
		// Select day
		String xPathSelectDay = xPathDatePikcer + "//td/a[contains(@class,'ui-state-default')][text()='" + dd + "']";
		x(xPathSelectDay).click();
	}

	public void pickDateInCalendar(String _date) {
		String dd = "", MM = "", yyyy = "";
		if (_date.length() == 10) {
			// Get value
			_date = _date.replace("/", "");
			dd = _date.substring(0, 2);
			MM = _date.substring(2, 4);
			yyyy = _date.substring(4, 8);
			// Remove 0
			if (dd.startsWith("0")) {
				dd = dd.substring(1);
			}
			if (MM.startsWith("0")) {
				MM = MM.substring(1);
			}
		} else {
			System.out.println("***** ERROR ***** : INVALID DATE FORMAT FOR CALENDAR " + _date);
		}

		// ThanhVC: Check if displayed Year is equal with incoming select year or not
		// If less than new year, then next month until displayed year is equal with
		// selecting year, and via versa
		String displayedYear = getYearInOpenedCalendar();
		if ((Integer.parseInt(yyyy) - Integer.parseInt(displayedYear)) > 0) {
			while ((Integer.parseInt(yyyy) - Integer.parseInt(displayedYear)) > 0) {
				clickNextMonthOnCalendar();
				displayedYear = getYearInOpenedCalendar();
			}
		} else if ((Integer.parseInt(yyyy) - Integer.parseInt(displayedYear)) < 0) {
			while ((Integer.parseInt(yyyy) - Integer.parseInt(displayedYear)) < 0) {
				clickBackMonthOnCalendar();
				displayedYear = getYearInOpenedCalendar();
			}
		}

		// Check if displayed Month is equal with incoming select year or not
		// If less than selecting month, then click next month until displayed month is
		// equal with selecting month, and via versa
		String displayedMonth = getMonthInOpenedCalendar();
		if ((Integer.parseInt(MM) - Integer.parseInt(displayedMonth)) > 0) {
			while ((Integer.parseInt(MM) - Integer.parseInt(displayedMonth)) > 0) {
				clickNextMonthOnCalendar();
				displayedMonth = getMonthInOpenedCalendar();
			}
		} else if ((Integer.parseInt(MM) - Integer.parseInt(displayedMonth)) < 0) {
			while ((Integer.parseInt(MM) - Integer.parseInt(displayedMonth)) < 0) {
				clickBackMonthOnCalendar();
				displayedMonth = getMonthInOpenedCalendar();
			}
		}

		// Select day
		String xPathSelectDay = xPathDatePikcer + "//td/a[contains(@class,'ui-state-default')][text()='" + dd + "']";
		XH(xPathSelectDay).click();
	}

	private String getYearInOpenedCalendar() {
		String displayedYear = xPathDatePikcer + "/div/div/span[2]";
		return XH(displayedYear).getText().trim();
	}

	private String getMonthInOpenedCalendar() {
		String displayedMonth = xPathDatePikcer + "/div/div/span[1]";
		String monthInText = XH(displayedMonth).getText().trim();
		String monthInNum = "";

		switch (monthInText) {
		case "Tháng Một":
			monthInNum = "01";
			break;
		case "Tháng Hai":
			monthInNum = "02";
			break;
		case "Tháng Ba":
			monthInNum = "03";
			break;
		case "Tháng Tư":
			monthInNum = "04";
			break;
		case "Tháng Năm":
			monthInNum = "05";
			break;
		case "Tháng Sáu":
			monthInNum = "06";
			break;
		case "Tháng Bảy":
			monthInNum = "07";
			break;
		case "Tháng Tám":
			monthInNum = "08";
			break;
		case "Tháng Chín":
			monthInNum = "09";
			break;
		case "Tháng Mười":
			monthInNum = "10";
			break;
		case "Tháng Mười Một":
			monthInNum = "11";
			break;
		case "Tháng Mười Hai":
			monthInNum = "12";
			break;
		default:
			break;
		}

		return monthInNum;
	}

	private void clickNextMonthOnCalendar() {
		String nextMonthBtn = xPathDatePikcer + "/div/a[2]";
		XH(nextMonthBtn).click();
	}

	private void clickBackMonthOnCalendar() {
		String backMonthBtn = xPathDatePikcer + "/div/a[1]";
		XH(backMonthBtn).click();
	}

	// Calendar with time and today
	public void pickDateTodayInCalendar(String _dateTime) {
		System.out.println("***** INFO ***** Chọn ngày: " + _dateTime);
		if (_dateTime.toLowerCase().contains("hien thoi") || _dateTime.toLowerCase().contains("hom nay")) {
			String xPathDefaultToday = xPathDatePikcer
					+ "//td/a[contains(@class,'ui-state-default ui-state-highlight')]";
			clickOnElement(xPathDefaultToday);
		} else if (_dateTime.length() == 10) {
			pickDateInCalendar(_dateTime);
		} else {
			System.out.println("***** ERROR ***** Định dạng ngày không đúng " + _dateTime);
		}
	}

	// Text or Label besides Label
	/**
	 * @Description xPath of Text besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @return
	 */
	public String xPathTextWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder) {
		return "(" + _parentXpath
				+ "//label[preceding::*[self::label or self::span or self::th[not(ancestor::table[1][descendant::thead])]]"
				+ sTextPredicates(_labelName) + xPathVisible + "[" + _labelOrder + "]])[" + _resOrder + "]";
	}

	public String xPathTextWithLabel(String _parentXpath, String _labelName, int _labelOrder) {
		return xPathTextWithLabel(_parentXpath, _labelName, _labelOrder, 1);
	}

	public String xPathTextWithLabel(String _labelName, int _labelOrder) {
		return xPathTextWithLabel("", _labelName, _labelOrder, 1);
	}

	public String xPathTextWithLabel(String _parentXpath, String _labelName) {
		return xPathTextWithLabel(_parentXpath, _labelName, 1, 1);
	}

	public String xPathTextWithLabel(String _labelName) {
		return xPathTextWithLabel("", _labelName, 1, 1);
	}

	/**
	 * @Description Get Text besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @return
	 */
	public String getTextWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder) {
		return XH(xPathTextWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).getText();
	}

	public String getTextWithLabel(String _parentXpath, String _labelName, int _labelOrder) {
		return getTextWithLabel(_parentXpath, _labelName, _labelOrder, 1);
	}

	public String getTextWithLabel(String _parentXpath, String _labelName) {
		return getTextWithLabel(_parentXpath, _labelName, 1, 1);
	}

	public String getTextWithLabel(String _labelName, int _labelOrder) {
		return getTextWithLabel("", _labelName, _labelOrder, 1);
	}

	public String getTextWithLabel(String _labelName) {
		return getTextWithLabel("", _labelName, 1, 1);
	}

	/**
	 * @Description Get Text Value besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @return
	 */
	public String getTextValueWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder) {
		return XH(xPathTextWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).getTextValue();
	}

	public String getTextValueWithLabel(String _parentXpath, String _labelName, int _labelOrder) {
		return getTextValueWithLabel(_parentXpath, _labelName, _labelOrder, 1);
	}

	public String getTextValueWithLabel(String _labelName, int _labelOrder) {
		return getTextValueWithLabel("", _labelName, _labelOrder, 1);
	}

	public String getTextValueWithLabel(String _labelName) {
		return getTextValueWithLabel("", _labelName, 1, 1);
	}

	/**
	 * @Description Get Attribute Value of input besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _resOrder
	 * @return String
	 */
	public String getAttValueWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder) {
		return XH(xPathInputFieldWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).getAttribute("value");
	}

	public String getAttValueWithLabel(String _parentXpath, String _labelName, int _labelOrder) {
		return getAttValueWithLabel(_parentXpath, _labelName, _labelOrder, 1);
	}

	public String getAttValueWithLabel(String _labelName, int _labelOrder, int _resOrder) {
		return getAttValueWithLabel("", _labelName, _labelOrder, _resOrder);
	}

	public String getAttValueWithLabel(String _parentXpath, String _labelName) {
		return getAttValueWithLabel(_parentXpath, _labelName, 1, 1);
	}

	public String getAttValueWithLabel(String _labelName, int _labelOrder) {
		return getAttValueWithLabel("", _labelName, _labelOrder, 1);
	}

	public String getAttValueWithLabel(String _labelName) {
		return getAttValueWithLabel("", _labelName, 1, 1);
	}

	/**
	 * @Description Enter value into Input Field besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @param _value
	 */
	public void enterInputFieldWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder,
			String _value) {
		if (_value.equals("@BLANK@")) {
			_value = "";
		}
		XH(xPathInputFieldWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).type(_value);
	}

	public void enterInputFieldWithLabel(String _labelName, int _labelOrder, int _resOrder, String _value) {
		enterInputFieldWithLabel("", _labelName, _labelOrder, _resOrder, _value);
	}

	public void enterInputFieldWithLabel(String _labelName, String _value) {
		enterInputFieldWithLabel("", _labelName, 1, 1, _value);
	}

	public void enterInputFieldWithLabel(String _labelName, int _labelOrder, String _value) {
		enterInputFieldWithLabel("", _labelName, _labelOrder, 1, _value);
	}

	public void enterInputFieldWithLabel(String _parentXpath, String _labelName, String _value) {
		enterInputFieldWithLabel(_parentXpath, _labelName, 1, 1, _value);
	}

	/**
	 * @Description Type value into Input Field besides Label then press Tab
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @param _value
	 */
	public void clearAndTypeThenTabInputFieldWithLabel(String _parentXpath, String _labelName, int _labelOrder,
			int _resOrder, String _value) {
		if (_value.equals("@BLANK@")) {
			_value = "";
		}
		XH(xPathInputFieldWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).clear();
		XH(xPathInputFieldWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).sendKeys(_value + Keys.TAB);
	}

	public void clearAndTypeThenTabInputFieldWithLabel(String _parentXpath, String _labelName, String _value) {
		clearAndTypeThenTabInputFieldWithLabel(_parentXpath, _labelName, 1, 1, _value);
	}

	public void clearAndTypeThenTabInputFieldWithLabel(String _labelName, String _value) {
		clearAndTypeThenTabInputFieldWithLabel("", _labelName, 1, 1, _value);
	}

	/**
	 * @Description Type value into Input Field besides Label then press Enter
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @param _value
	 */
	public void clearAndTypeThenEnterInputFieldWithLabel(String _parentXpath, String _labelName, int _labelOrder,
			int _resOrder, String _value) {
		if (_value.equals("@BLANK@")) {
			_value = "";
		}
		XH(xPathInputFieldWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).clear();
		XH(xPathInputFieldWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).sendKeys(_value + Keys.ENTER);
	}

	public void clearAndTypeThenEnterInputFieldWithLabel(String _labelName, String _value) {
		clearAndTypeThenEnterInputFieldWithLabel("", _labelName, 1, 1, _value);
	}

	/**
	 * @Description Type value into Input Field besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @param _value
	 */
	public void typeInputFieldWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder,
			String _value) {
		if (_value.equals("@BLANK@")) {
			_value = "";
		}
		XH(xPathInputFieldWithLabel(_parentXpath, _labelName, _resOrder)).sendKeys(_value);
	}

	public void typeInputFieldWithLabel(String _parentXpath, String _labelName, int _labelOrder, String _value) {
		typeInputFieldWithLabel(_parentXpath, _labelName, _labelOrder, 1, _value);
	}

	public void typeInputFieldWithLabel(String _parentXpath, String _labelName, String _value) {
		typeInputFieldWithLabel(_parentXpath, _labelName, 1, 1, _value);
	}

	public void typeInputFieldWithLabel(String _labelName, int _labelOrder, String _value) {
		typeInputFieldWithLabel("", _labelName, _labelOrder, 1, _value);
	}

	public void typeInputFieldWithLabel(String _labelName, String _value) {
		typeInputFieldWithLabel("", _labelName, 1, 1, _value);
	}

	/**
	 * @Description Clear Then Type value into Input Field besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @param _value
	 */
	public void clearAndTypeInputFieldWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder,
			String _value) {
		if (_value.equals("@BLANK@")) {
			_value = "";
		}
		XH(xPathInputFieldWithLabel("", _labelName, _labelOrder, _resOrder)).clear();
		XH(xPathInputFieldWithLabel("", _labelName, _labelOrder, _resOrder)).sendKeys(_value);
	}

	public void clearAndTypeInputFieldWithLabel(String _parentXpath, String _labelName, int _labelOrder,
			String _value) {
		clearAndTypeInputFieldWithLabel(_parentXpath, _labelName, _labelOrder, 1, _value);
	}

	public void clearAndTypeInputFieldWithLabel(String _parentXpath, String _labelName, String _value) {
		clearAndTypeInputFieldWithLabel(_parentXpath, _labelName, 1, 1, _value);
	}

	public void clearAndTypeInputFieldWithLabel(String _labelName, int _labelOrder, String _value) {
		clearAndTypeInputFieldWithLabel("", _labelName, _labelOrder, 1, _value);
	}

	public void clearAndTypeInputFieldWithLabel(String _labelName, String _value) {
		clearAndTypeInputFieldWithLabel("", _labelName, 1, 1, _value);
	}

	/**
	 * @Description Type value then Tab into Input Field besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @param _value
	 */
	public void typeInputFieldThenTabWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder,
			String _value) {
		if (_value.equals("@BLANK@")) {
			_value = "";
		}
		XH(xPathInputFieldWithLabel(_parentXpath, _labelName, _resOrder)).sendKeys(_value + Keys.TAB);
	}

	public void typeInputFieldThenTabWithLabel(String _parentXpath, String _labelName, String _value) {
		typeInputFieldThenTabWithLabel(_parentXpath, _labelName, 1, 1, _value);
	}

	public void typeInputFieldThenTabWithLabel(String _parentXpath, String _labelName, int _labelOrder, String _value) {
		typeInputFieldThenTabWithLabel(_parentXpath, _labelName, _labelOrder, 1, _value);
	}

	public void typeInputFieldThenTabWithLabel(String _labelName, int _labelOrder, String _value) {
		typeInputFieldThenTabWithLabel("", _labelName, 1, 1, _value);
	}

	public void typeInputFieldThenTabWithLabel(String _labelName, String _value) {
		typeInputFieldThenTabWithLabel("", _labelName, 1, 1, _value);
	}

	// endregion Input Field with Label and Calendar
	// Drop down list
	/**
	 * @Description xPath of Drop Down List besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @return
	 */
	public String xPathDDLWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder) {
		return "(" + _parentXpath + "//select[preceding::*[self::label]" + sTextPredicates(_labelName) + xPathVisible
				+ "[" + _labelOrder + "]])[" + _resOrder + "]";
	}

	public String xPathDDLWithLabel(String _parentXpath, String _labelName, int _labelOrder) {
		return xPathDDLWithLabel(_parentXpath, _labelName, _labelOrder, 1);
	}

	public String xPathDDLWithLabel(String _parentXpath, String _labelName) {
		return xPathDDLWithLabel(_parentXpath, _labelName, 1, 1);
	}

	public String xPathDDLWithLabel(String _labelName, int _labelOrder) {
		return xPathDDLWithLabel("", _labelName, _labelOrder, 1);
	}

	public String xPathDDLWithLabel(String _labelName) {
		return xPathDDLWithLabel("", _labelName, 1, 1);
	}

	/**
	 * @Description Get current selected Text of DDL besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @return
	 */
	public String getSelectedVisibleTextValueDDLWithLabel(String _parentXpath, String _labelName, int _labelOrder,
			int _resOrder) {
		return XH(xPathDDLWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).getSelectedVisibleTextValue();
	}

	public String getSelectedVisibleTextValueDDLWithLabel(String _parentXpath, String _labelName, int _labelOrder) {
		return getSelectedVisibleTextValueDDLWithLabel(_parentXpath, _labelName, _labelOrder, 1);
	}

	public String getSelectedVisibleTextValueDDLWithLabel(String _parentXpath, String _labelName) {
		return getSelectedVisibleTextValueDDLWithLabel(_parentXpath, _labelName, 1, 1);
	}

	public String getSelectedVisibleTextValueDDLWithLabel(String _labelName, int _labelOrder) {
		return getSelectedVisibleTextValueDDLWithLabel("", _labelName, _labelOrder, 1);
	}

	public String getSelectedVisibleTextValueDDLWithLabel(String _labelName) {
		return getSelectedVisibleTextValueDDLWithLabel("", _labelName, 1, 1);
	}

	/**
	 * @Description Select visible text in DDL
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @param _value
	 */
	public void selectDDLText(String _xPath, String _value) {
		XH(_xPath).selectByVisibleText(_value);
	}

	/**
	 * @Description Select visible text in DDL besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @param _value
	 */
	public void selectDDLTextWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder,
			String _value) {
		XH(xPathDDLWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).selectByVisibleText(_value);
	}

	public void selectDDLTextWithLabel(String _parentXpath, String _labelName, int _labelOrder, String _value) {
		selectDDLTextWithLabel(_parentXpath, _labelName, _labelOrder, 1, _value);
	}

	public void selectDDLTextWithLabel(String _parentXpath, String _labelName, String _value) {
		selectDDLTextWithLabel(_parentXpath, _labelName, 1, 1, _value);
	}

	public void selectDDLTextWithLabel(String _labelName, int _labelOrder, String _value) {
		selectDDLTextWithLabel("", _labelName, _labelOrder, 1, _value);
	}

	public void selectDDLTextWithLabel(String _labelName, String _value) {
		selectDDLTextWithLabel("", _labelName, 1, 1, _value);
	}

	/**
	 * @Description Select by index of item in DDL
	 * @param xPath
	 * @param _index
	 */
	public void selectDDLIndex(String xPath, String _index) {
		XH(xPath).selectByIndex(Integer.parseInt(_index) - 1);
	}

	/**
	 * @Description Select by index of item in DDL besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @param _value
	 */
	public void selectDDLIndexWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder,
			String _index) {
		XH(xPathDDLWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder))
				.selectByIndex(Integer.parseInt(_index) - 1);
	}

	public void selectDDLIndexWithLabel(String _parentXpath, String _labelName, int _labelOrder, String _index) {
		selectDDLIndexWithLabel(_parentXpath, _labelName, _labelOrder, 1, _index);
	}

	public void selectDDLIndexWithLabel(String _parentXpath, String _labelName, String _index) {
		selectDDLIndexWithLabel(_parentXpath, _labelName, 1, 1, _index);
	}

	public void selectDDLIndexWithLabel(String _labelName, int _labelOrder, String _index) {
		selectDDLIndexWithLabel("", _labelName, _labelOrder, 1, _index);
	}

	public void selectDDLIndexWithLabel(String _labelName, String _index) {
		selectDDLIndexWithLabel("", _labelName, 1, 1, _index);
	}

	/**
	 * @Description Select option contain given text in DDL besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @param _value
	 */
	public void selectDDLContainTextWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder,
			String _value) {
		// Get all options in DDL
		List<String> options = X(xPathDDLWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder))
				.getSelectOptions();
		// Check option contain given text then select
		for (String temp : options) {
			if (temp.contains(_value)) {
				X(xPathDDLWithLabel(_parentXpath, _labelName, _resOrder)).selectByIndex(options.indexOf(temp));
				break;
			}
		}
	}

	/**
	 * @param _parentXpath
	 * @param _labelName
	 * @param _resOrder
	 * @return
	 * @Description Get current selected option of DDL besides Label
	 */
	public String getSelectedValueDDLWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder) {
		return X(xPathDDLWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder)).getSelectedValue();
	}

	public String getSelectedValueDDLWithLabel(String _parentXpath, String _labelName, int _labelOrder) {
		return getSelectedValueDDLWithLabel(_parentXpath, _labelName, _labelOrder, 1);
	}

	public String getSelectedValueDDLWithLabel(String _labelName, int _labelOrder) {
		return getSelectedValueDDLWithLabel("", _labelName, _labelOrder, 1);
	}

	public String getSelectedValueDDLWithLabel(String _parentXpath, String _labelName) {
		return getSelectedValueDDLWithLabel(_parentXpath, _labelName, 1, 1);
	}

	public String getSelectedValueDDLWithLabel(String _labelName) {
		return getSelectedValueDDLWithLabel("", _labelName, 1, 1);
	}

	/**
	 * @Description Select DDL option
	 * @param _parentXpath
	 * @param _labelName
	 * @param _resOrder
	 * @param _value
	 */
	public void selectDDL(String _xpath, String _value) {
		if (_value.startsWith("@MARK INDEX@@ ")) {
			selectDDLIndex(_xpath, _value.replaceFirst("@MARK INDEX@@ ", ""));
		} else {
			selectDDLText(_xpath, _value);
		}
	}

	/**
	 * @Description Select visible text in DDL besides Label
	 * @param _parentXpath
	 * @param _labelName
	 * @param _resOrder
	 * @param _value
	 */
	public void selectDDLWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder,
			String _value) {
		if (_value.startsWith("@MARK INDEX@@ ")) {
			selectDDLIndexWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder,
					_value.replaceFirst("@MARK INDEX@@ ", ""));
		} else {
			selectDDLTextWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder, _value);
		}
	}

	public void selectDDLWithLabel(String _parentXpath, String _labelName, String _value) {
		selectDDLWithLabel(_parentXpath, _labelName, 1, 1, _value);
	}

	public void selectDDLWithLabel(String _labelName, String _value, int _labelOrder) {
		selectDDLWithLabel("", _labelName, _labelOrder, 1, _value);
	}

	public void selectDDLWithLabel(String _labelName, String _value) {
		selectDDLWithLabel("", _labelName, 1, 1, _value);
	}

	// Search Multi Drop Down List (Search Multi DDL)
	/**
	 * @Description Open DDL, Search then Select Value(s). NOTE: selected option(s)
	 *              will be unselected
	 * @param _xPath
	 * @param _option
	 */
	public void selectSearchMultiDDL(String _xPath, String _option) {
		if (_option.contains("@>@")) {// Case search then select
			String[] lTemp = _option.split("@>@");
			// Open
			clickOnElement(_xPath + "//button[contains(@class,'dropdown')]");
			// Search
			waitClearAndTypeThenEnter(_xPath + "//input[@type='text']", lTemp[0]);
			waitForEverythingComplete();
			// Select
			if (lTemp[1].contains(";")) { // Click on multi option
				String[] lOptionTemp = lTemp[1].split(";");
				for (String option : lOptionTemp) {
					clickOnElement(_xPath + "//li//a//label" + sTextPredicates(option.trim()));
				}
			} else { // Click only one option
				clickOnElement(_xPath + "//li//a//label" + sTextPredicates(lTemp[1]));
			}
			// Close
			clickOnElement("(" + _xPath + "//*[self::div[contains(@class,'dropdown-backdrop')] or self::b])[last()]");
		} else {// Select only
			// Open
			clickOnElement(_xPath + "//button[contains(@class,'dropdown')]");
			// Clear
			clickOnElement(_xPath + "//i[@class='glyphicon glyphicon-remove-circle']");
			waitForEverythingComplete();
			// Select
			if (_option.contains(";")) { // Click on multi option
				String[] lOptionTemp = _option.split(";");
				for (String option : lOptionTemp) {
					clickOnElement(_xPath + "//li//a//label" + sTextPredicates(option.trim()));
				}
			} else { // Click only one option
				clickOnElement(_xPath + "//li//a//label" + sTextPredicates(_option));
			}
			// Close
			clickOnElement("(" + _xPath + "//*[self::div[contains(@class,'dropdown-backdrop')] or self::b])[last()]");
		}
	}

	/**
	 * @Description Open DDL, Search then Select Value(s). NOTE: selected option(s)
	 *              will be unselected
	 * @param _parentXpath
	 * @param _label
	 * @param _labelOrder
	 * @param _resOrder
	 * @param _option
	 */
	public void selectSearchMultiDDLWithLabel(String _parentXpath, String _label, int _labelOrder, int _resOrder,
			String _option) {
		String xPath = xPathSearchMultiDDLWithLabel(_parentXpath, _label, _labelOrder, _resOrder);
		if (_option.contains("@>@")) {// Case search then select
			String[] lTemp = _option.split("@>@");
			// Open
			clickOnElement(xPath + "//button[contains(@class,'dropdown')]");
			// Search
			waitClearAndTypeThenEnter(xPath + "//input[@type='text']", lTemp[0]);
			// Select
			if (lTemp[1].contains(";")) { // Click on multi option
				String[] lOptionTemp = lTemp[1].split(";");
				for (String option : lOptionTemp) {
					clickOnElement(xPath + "//li//a//label" + sTextPredicates(option.trim()));
				}
			} else { // Click only one option
				clickOnElement(xPath + "//li//a//label" + sTextPredicates(lTemp[1]));
			}
			// Close
			clickOnElement("(" + xPath + "//*[self::div[contains(@class,'dropdown-backdrop')] or self::b])[last()]");
		} else {// Select only
			// Open
			clickOnElement(xPath + "//button[contains(@class,'dropdown')]");
			// Clear
			clickOnElement(xPath + "//i[@class='glyphicon glyphicon-remove-circle']");
			// Select
			if (_option.contains(";")) { // Click on multi option
				String[] lOptionTemp = _option.split(";");
				for (String option : lOptionTemp) {
					clickOnElement(xPath + "//li//a//label" + sTextPredicates(option.trim()));
				}
			} else { // Click only one option
				clickOnElement(xPath + "//li//a//label" + sTextPredicates(_option));
			}
			// Close
			clickOnElement("(" + xPath + "//*[self::div[contains(@class,'dropdown-backdrop')] or self::b])[last()]");
		}
	}

	public void selectSearchMultiDDLWithLabel(String _parentXpath, String _label, String _values) {
		selectSearchMultiDDLWithLabel(_parentXpath, _label, 1, 1, _values);
	}

	public void selectSearchMultiDDLWithLabel(String _label, String _values) {
		selectSearchMultiDDLWithLabel("", _label, 1, 1, _values);
	}

	/**
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @return
	 */
	public String xPathSearchMultiDDLWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder) {
		return "(" + _parentXpath + "//span[@class='multiselect-native-select'][preceding::*[self::label]"
				+ sTextPredicates(_labelName) + xPathVisible + "[" + _labelOrder + "]])[" + _resOrder + "]";
	}

	public String xPathSearchMultiDDLWithLabel(String _parentXpath, String _labelName, int _labelOrder) {
		return xPathSearchMultiDDLWithLabel(_parentXpath, _labelName, _labelOrder, 1);
	}

	public String xPathSearchMultiDDLWithLabel(String _parentXpath, String _labelName) {
		return xPathSearchMultiDDLWithLabel(_parentXpath, _labelName, 1, 1);
	}

	public String xPathSearchMultiDDLWithLabel(String _labelName) {
		return xPathSearchMultiDDLWithLabel("", _labelName, 1, 1);
	}

	/**
	 * @Description Get current selected value(s) of Search Multiple DDL
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @return
	 */
	public String getSelectedSearchMultiDDLTextWithLabel(String _parentXpath, String _labelName, int _labelOrder,
			int _resOrder) {
		return XH(xPathSearchMultiDDLWithLabel(_parentXpath, _parentXpath, _labelOrder, _resOrder) + "//button//span")
				.getText().trim();
	}

	public String getSelectedSearchMultiDDLTextWithLabel(String _parentXpath, String _label) {
		return XH(xPathSearchMultiDDLWithLabel(_parentXpath, _label, 1, 1) + "//button//span").getText().trim();
	}

	public String getSelectedSearchMultiDDLTextWithLabel(String _label) {
		return XH(xPathSearchMultiDDLWithLabel("", _label, 1, 1) + "//button//span").getText().trim();
	}

	/**
	 * @Description Get current selected value(s) of Search Multiple DDL
	 * @param _label
	 * @return
	 */
	public String getSelectedSearchMultiDDLText(String _xPath) {
		return XH(_xPath + "//button//span").getText().trim();
	}

	// Search Drop-down List
	/**
	 * @Description xpath of Drop-down list including filter inside
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @return
	 */
	public String xPathSearchDDLWithLabel(String _parentXpath, String _labelName, int _labelOrder, int _resOrder) {
		return "(" + _parentXpath + "//span[@class='multiselect-native-select'][preceding::*[self::label]"
				+ sTextPredicates(_labelName) + xPathVisible + "[" + _labelOrder + "]])[" + _resOrder + "]";
	}

	public String xPathSearchDDLWithLabel(String _parentXpath, String _labelName, int _labelOrder) {
		return xPathSearchDDLWithLabel(_parentXpath, _labelName, _labelOrder, 1);
	}

	public String xPathSearchDDLWithLabel(String _parentXpath, String _labelName) {
		return xPathSearchDDLWithLabel(_parentXpath, _labelName, 1, 1);
	}

	public String xPathSearchDDLWithLabel(String _labelName) {
		return xPathSearchDDLWithLabel("", _labelName, 1, 1);
	}

	/**
	 * @Description Open DDL, Search then Select Value of Drop-down list including
	 *              filter inside
	 * @param _parentXpath
	 * @param _label
	 * @param _labelOrder
	 * @param _resOrder
	 * @param _option
	 */
	public List<String> getText_listElement(String xPath){
		List<WebElementFacade> listElements = new ArrayList<>();
		List<String> text = new ArrayList<>();
//		System.out.println("XH(xPath).isVisible()" + XH(xPath).isVisible());
		if(XH(xPath).isVisible()) {
			listElements = findAll(xPath);
			for (WebElementFacade e : listElements) {
				text.add(e.getText().toLowerCase());
			}
			return text;
		}
		return null;
	}
	
	public void selectSearchDDL(String _xPath, String _option) {
		if (_option.equals("@BLANK@")) {
			_option = "";
			XH(_xPath).clear();
			XH(_xPath).sendKeys(_option);
			return ;
		}
		XH(_xPath).clear();
		XH(_xPath).sendKeys(_option);
		_option = _option.toLowerCase();
		String xPath = "//ul[@class='ui-autocomplete ui-front ui-menu ui-widget ui-widget-content'][contains(@style,'display: block')]//li";
		List<String> text = getText_listElement(xPath);
//		for (String string : text) {
//			System.out.println(string);
//		}
		if (text.contains(_option)) {
//			System.out.println("text.contains(_option) " + _option);
			int i = text.indexOf(_option) + 1;
			clickOnElement(xPath + "[" + i + "]");
		}else {
			_option = _option.toLowerCase();
			for(int i=0; i< text.size(); i++) {
				String str = text.get(i);
//				System.out.println("Str " + str);
				if (str.contains(_option)) {
//					System.out.println("str.contains(_option) " + _option);
					int k = i+1;
					clickOnElement(xPath + "[" + k + "]");
					return;
				}
			}
		}
	}

	/**
	 * @Description Open DDL, Search then Select Value of Drop-down list including
	 *              filter inside
	 * @param _parentXpath
	 * @param _label
	 * @param _labelOrder
	 * @param _resOrder
	 * @param _option
	 */
	public void selectSearchDDLWithLabel(String _parentXpath, String _label, int _labelOrder, int _resOrder,
			String _option) {
		String xPath = xPathSearchDDLWithLabel(_parentXpath, _label, _labelOrder, _resOrder);
		if (!XH(xPath + "//button//span").getText().trim().equals(_option)) {
			if (_option.contains("@>@")) {// Case search then select
				String[] lTemp = _option.split("@>@");
				// Open
				clickOnElement(xPath + "//button[contains(@class,'dropdown')]");
				// Search
				waitClearAndTypeThenEnter(xPath + "//input[@type='text']", lTemp[0]);
				waitForEverythingComplete();
				// Select
				clickOnElement(xPath + "//li//a[label" + sTextPredicates(lTemp[1]) + "]");
			} else {// select only
				// Open
				clickOnElement(xPath + "//button[contains(@class,'dropdown')]");
				// Clear
				clickOnElement(xPath + "//i[@class='glyphicon glyphicon-remove-circle']");
				// Select
				// clickOnElement(xPath + "//li//a[label" + sTextPredicates(_option) + "]");
				clickOnElement(xPath + "//li//a[label[normalize-space(text())='" + _option + "']]"); // Select with
																										// correct
																										// option
				// System.out.println(xPath +
				// "//li//a[label[normalize-space(text())='"+_option+"']]");
			}
		}
	}

	public void selectSearchDDLWithLabel(String _parentXpath, String _label, int _labelOrder, String _option) {
		selectSearchDDLWithLabel(_parentXpath, _label, _labelOrder, 1, _option);
	}

	public void selectSearchDDLWithLabel(String _parentXpath, String _label, String _option) {
		selectSearchDDLWithLabel(_parentXpath, _label, 1, 1, _option);
	}

	public void selectSearchDDLWithLabel(String _label, String _option) {
		selectSearchDDLWithLabel("", _label, 1, 1, _option);
	}

	public void selectSearchDDLWithXpath(String _xpath, String _option) {
		String xPath = _xpath;
		if (!XH(xPath + "//button//span").getText().trim().equals(_option)) {
			if (_option.contains("@>@")) {// Case search then select
				String[] lTemp = _option.split("@>@");
				// Open
				clickOnElement(xPath + "//button[contains(@class,'dropdown')]");
				// Search
				waitClearAndTypeThenEnter(xPath + "//input[@type='text']", lTemp[0]);
				waitForEverythingComplete();
				// Select
				clickOnElement(xPath + "//li//a[label" + sTextPredicates(lTemp[1]) + "]");
			} else {// select only
				// Open
				clickOnElement(xPath + "//button[contains(@class,'dropdown')]");
				// Clear
				clickOnElement(xPath + "//i[@class='glyphicon glyphicon-remove-circle']");
				// Select
				// clickOnElement(xPath + "//li//a[label" + sTextPredicates(_option) + "]");

			}
		}
	}

	/**
	 * Description Get selected text of Drop-down list including filter inside
	 * 
	 * @param _parentXpath
	 * @param _labelName
	 * @param _labelOrder
	 * @param _resOrder
	 * @return
	 */
	public String getSelectedSearchDDLTextWithLabel(String _parentXpath, String _labelName, int _labelOrder,
			int _resOrder) {
		return XH(xPathSearchDDLWithLabel(_parentXpath, _labelName, _labelOrder, _resOrder) + "//button//span")
				.getText().trim();
	}

	public String getSelectedSearchDDLTextWithLabel(String _parentXpath, String _labelName, int _labelOrder) {
		return getSelectedSearchDDLTextWithLabel(_parentXpath, _labelName, _labelOrder, 1);
	}

	public String getSelectedSearchDDLTextWithLabel(String _parentXpath, String _labelName) {
		return getSelectedSearchDDLTextWithLabel(_parentXpath, _labelName, 1, 1);
	}

	public String getSelectedSearchDDLTextWithLabel(String _labelName) {
		return getSelectedSearchDDLTextWithLabel("", _labelName, 1, 1);
	}

	public String getSelectedSearchDDLText(String _xPath) {
		return XH(_xPath).getText().trim();
	}

	// Outer HTML
	/**
	 * @Description Get text in [content] of ":after" pseudo
	 * @param _xPath
	 * @return
	 */
	public String getTextInPseudoAfter(String _xPath) {
		WebElement wE = x(_xPath);
		return (String) evaluateJavascript(
				"return window.getComputedStyle(arguments[0],':after').getPropertyValue('content')", wE);
	}

	/**
	 * @Description Get text in [content] of ":before" pseudo
	 * @param _xPath
	 * @return
	 */
	public String getTextInPseudoBefore(String _xPath) {
		WebElement wE = x(_xPath);
		return (String) evaluateJavascript(
				"return window.getComputedStyle(arguments[0],':before').getPropertyValue('content')", wE);
	}

	// Switch Tab
	public void switchToTab(String _tabName) {
		switchToTab("", _tabName);
	}

	public void switchToTab(String _parentXpath, String _tabName) {
		String xPath = _parentXpath + "//a[@role='tab' or @data-toggle='tab'][contains(text(),'" + _tabName
				+ "') and string-length( text()) < " + (int) (_tabName.length() + 12) + "]";
		clickOnElement(xPath);
		X(xPath + "//parent::li[contains(@class,'active')]").shouldBePresent();
	}

	// Switch Iframe
	public void switchToIframe(String _iFrameId) {
		getDriver().switchTo().frame(_iFrameId);
	}

	public void switchToLastIframe(String _iFrameId) {
		getDriver().switchTo().frame(getDriver().findElement(By.xpath("(//iframe[@id='" + _iFrameId + "'])[last()]")));
	}

	// Get message
	public String getAlertifyMessage(String str) {
		String xPath = "//*div[@role='alertdialog']//div[@class='o_notification_content']//ul//li";
		if (isElementExist(xPath, 5)) {
			return XH(xPath).getText();
		} else {
			return "";
		}
	}

	public void closeAlertifyMessage() {
		clickOnElement("//*[@id='toast-container']/div[contains(@style,'block')]");
	}

	// Auto complete - Search
	private final String xPathSugestion = "//ul[contains(@class,'ui-autocomplete') and contains(@style,'block')]";

	public boolean selectAutoComplete(String _selectValue) {
		try {
			clickOnElement(
					xPathSugestion + "//a[contains(text(),'" + _selectValue + "')]" + sTextPredicates(_selectValue));
			return true;
		} catch (Exception e) {
			System.out.println("***** INFO ***** KHÔNG TÌM THẤY KẾT QUẢ CỦA : [" + _selectValue + "].");
			return false;
		}
	}

	public boolean enterInputFieldThenSelectAutoCompleteWithLabel(String _parentXpath, String _label, int _resOrder,
			String _searchValue, String _resultValue) {
		XH(xPathInputFieldWithLabel(_parentXpath, _label, _resOrder)).type(_searchValue);
		boolean ret = false;
		ret = selectAutoComplete(_resultValue);
		if (!ret) {
			XH(xPathInputFieldWithLabel(_parentXpath, _label, _resOrder)).sendKeys(Keys.TAB);
		}
		return ret;
	}

	public boolean enterInputFieldThenSelectAutoCompleteWithLabel(String _label, String _searchValueAndResult) {
		return enterThenSelectAutoComplete(xPathInputFieldWithLabel("", _label, 1), _searchValueAndResult);
	}

	public boolean enterInputFieldThenSelectAutoCompleteWithLabel(String _label, String _searchValue,
			String _resultValue) {
		return enterInputFieldThenSelectAutoCompleteWithLabel("", _label, 1, _searchValue, _resultValue);
	}

	public boolean enterThenSelectAutoComplete(String _xPath, String _searchValue, String _resultValue) {
		XH(_xPath).type(_searchValue);
		boolean ret = false;
		ret = selectAutoComplete(_resultValue);
		if (!ret) {
			XH(_xPath).sendKeys(Keys.TAB);
		}
		return ret;
	}

	public boolean enterThenSelectAutoComplete(String _xPath, String _searchValueAndResult) {
		if (_searchValueAndResult.contains("@>@")) {
			String[] lTemp = _searchValueAndResult.split("@>@");
			return enterThenSelectAutoComplete(_xPath, lTemp[0], lTemp[1]);
		} else {
			waitClearAndType(_xPath, _searchValueAndResult);
			return false;
		}
	}

	public boolean enterInputFieldThenSelectAutoCompleteWithLabel(String _parentXpath, String _labelName, int _resOrder,
			String _searchValueAndResult) {
		return enterThenSelectAutoComplete(xPathInputFieldWithLabel(_parentXpath, _labelName, _resOrder),
				_searchValueAndResult);
	}

	// endregion Common Action

	// BEGIN Text Utilities
	/**
	 * @param _givenText
	 * @return
	 * @Description Create text predicates with text contains special characters.
	 *              Note: It's not include [].
	 */
	public String sSpecialTextPredicates(String _givenText) {
		String[] tokens = _givenText.split("\"|\\'");
		int numText = tokens.length;
		String sSearchPattern = "";
		if (numText > 1) {
			sSearchPattern = "contains(text(),'" + tokens[0] + "')";
			for (int i = 1; i < numText; i++) {
				sSearchPattern += " and contains(text(),'" + tokens[i] + "')";
			}
			return sSearchPattern;
		} else {
			return "contains(text(),'" + _givenText + "')";
		}
	}

	/**
	 * @param _givenText
	 * @return
	 * @Description Create text predicates with text contains special characters and
	 *              space. Note: It included [].
	 */
	public String sTextPredicates(String _givenText) {
		String[] tokens = _givenText.split("\"|\\'| ");
		int numText = tokens.length;
		String sSearchPattern = "";
		if (numText > 1) {
			sSearchPattern = "[contains(.,'" + tokens[0] + "')";
			for (int i = 1; i < numText; i++) {
				sSearchPattern += " and contains(.,'" + tokens[i] + "')";
			}
			return sSearchPattern + "and string-length(normalize-space(translate(., '\u00A0', ''))) < "
					+ (int) (_givenText.length() + 5) + "]";
		} else {
			return "[contains(text(),'" + _givenText
					+ "') and string-length(normalize-space(translate(., '\u00A0', ''))) < "
					+ (int) (_givenText.length() + 5) + "]";
		}
	}

	/**
	 * @param input
	 * @param lineIndex
	 * @return
	 * @Description Get line of text in multiple line by index. Index start from 0.
	 */
	public String getTextInMultiLineByLineIndex(String input, int lineIndex) {
		String[] lString = input.split("\\r?\\n");
		if (lString.length > 0) {
			return lString[lineIndex];
		} else {
			return input;
		}
	}

	/**
	 * @Description Get boolean from given string
	 * @param _value
	 * @return
	 */
	public boolean isYes(String _value) {
		_value = _value.toLowerCase();
		if (_value.contains("yes") || _value.contains("y") || _value.contains("co") || _value.contains("true")) {
			return true;
		} else {
			return false;
		}
	}

	// END Text Utilities
	// BEGIN TABLE
	public void addTbRow(String _parentXpath) {
		String xPath = _parentXpath + "//i[@class='fa fa fa-plus-square']";
		clickOnElement(xPath);
	}

	public void removeTbRow(String _parentXpath) {
		String xPath = _parentXpath + "//i[@class='fa fa-scissors']";
		clickOnElement(xPath);
	}

	public void addTbRow(String _parentXpath, String _xPath) {
		String xPath = _parentXpath + _xPath;
		clickOnElement(xPath);
	}

	public void removeTbRow(String _parentXpath, String _xPath) {
		String xPath = _parentXpath + _xPath;
		clickOnElement(xPath);
	}

	/**
	 * xPath of Table Header Filter
	 * 
	 * @param _parentXpath
	 * @param _headerText
	 * @param _resOrder
	 * @return
	 */
	public String xPathTbHeaderFilter(String _parentXpath, String _headerText, int _resOrder) {
		int headerIndex = getTbColHeaderIndex(xPathTbHeaderCell(_parentXpath, _headerText, 1));
		_parentXpath += "//div[contains(@class,'k-grid-header')]//descendant-or-self::table";
		String xPath = "(" + _parentXpath + "//tr[contains(@class,'filter')]//th[" + headerIndex
				+ "])//input[@type='text']";
		highlightElement(xPath);
		return xPath;
	}

	public String xPathTbHeaderFilter(String _parentXpath, String _headerText) {
		return xPathTbHeaderFilter(_parentXpath, _headerText, 1);

	}

	/**
	 * xPath of Table Header Filter Clear Button
	 * 
	 * @param _parentXpath
	 * @param _headerText
	 * @param _resOrder
	 * @return
	 */
	public String xPathTbHeaderFilterClear(String _parentXpath, String _headerText, int _resOrder) {
		int headerIndex = getTbColHeaderIndex(xPathTbHeaderCell(_parentXpath, _headerText, 1));
		_parentXpath += "//div[contains(@class,'k-grid-header')]//descendant-or-self::table";
		String xPath = "(" + _parentXpath + "//tr[contains(@class,'filter')]//th[" + headerIndex
				+ "])//button[@title='Clear' and not (contains(@style,'none'))]";
		highlightElement(xPath);
		return xPath;
	}

	public String xPathTbHeaderFilterClear(String _parentXpath, String _headerText) {
		return xPathTbHeaderFilterClear(_parentXpath, _headerText, 1);
	}

	/**
	 * xPath of Table Header Filter Select Option
	 * 
	 * @param _parentXpath
	 * @param _headerText
	 * @param _resOrder
	 * @return
	 */
	public String xPathTbHeaderFilterOption(String _parentXpath, String _headerText, int _resOrder) {
		int headerIndex = getTbColHeaderIndex(xPathTbHeaderCell(_parentXpath, _headerText, 1));
		_parentXpath += "//div[contains(@class,'k-grid-header')]//descendant-or-self::table";
		String xPath = "(" + _parentXpath + "//tr[contains(@class,'filter')]//th[" + headerIndex
				+ "])//span[@role='listbox']";
		highlightElement(xPath);
		return xPath;
	}

	public String xPathTbHeaderFilterOption(String _parentXpath, String _headerText) {
		return xPathTbHeaderFilterOption(_parentXpath, _headerText, 1);
	}

	/**
	 * Select Filter Option of Header Filter
	 * 
	 * @param _parentXpath
	 * @param _headerText
	 * @param _resOrder
	 * @param _option
	 * @return
	 */
	public void setTbHeaderFilterOption(String _parentXpath, String _headerText, int _resOrder, String _option) {
		clickOnElement(xPathTbHeaderFilterOption(_parentXpath, _headerText, _resOrder));
		String iD = x(xPathTbHeaderFilterOption(_parentXpath, _headerText, _resOrder))
				.getAttribute("aria-activedescendant");
		clickOnElement("//ul[li[@id='" + iD + "']]//li[text()='" + _option + "']");
	}

	public void setTbHeaderFilterOption(String _parentXpath, String _headerText, String _option) {
		setTbHeaderFilterOption(_parentXpath, _headerText, 1, _option);
	}

	/**
	 * @param _parentXpath
	 * @param _headerText
	 * @param _headerOrder
	 * @return xPath
	 * @Description xPath of Table Header Cell contains all kind of text presented
	 *              in cell (separated by space).
	 */
	public String xPathTbHeaderCell(String _parentXpath, String _headerText, int _resOrder) {
		String[] aHeaderText = _headerText.split(" ");
		String sSearchPattern = "";
		int numText = aHeaderText.length;
		_parentXpath += "//descendant-or-self::table//tr";
		if (numText > 1) {
			sSearchPattern = "descendant-or-self::*[contains(*,'" + aHeaderText[0] + "') or contains(text(),'"
					+ aHeaderText[0] + "')" + "or contains(.,'" + aHeaderText[0] + "')]";
			for (int i = 1; i < numText; i++) {
				sSearchPattern += " and descendant-or-self::*[contains(*,'" + aHeaderText[i] + "') or contains(text(),'"
						+ aHeaderText[i] + "')" + " or contains(.,'" + aHeaderText[i] + "')]";
			}
			return "(" + _parentXpath + "//descendant-or-self::th[" + sSearchPattern + "])[" + _resOrder + "]";
		} else {
			sSearchPattern = "[descendant-or-self::*[contains(*,'" + _headerText + "') or contains(text(),'"
					+ _headerText + "')" + "or contains(.,'" + _headerText + "')]]";
			return "(" + _parentXpath + "//descendant-or-self::th" + sSearchPattern + ")[" + _resOrder + "]";
		}
	}

	/**
	 * @param _headerText
	 * @return xPath
	 * @Description xPath of Table Header Cell contains all kind of text presented
	 *              in cell (separated by space).
	 */
	public String xPathTbHeaderCell(String _headerText) {
		return xPathTbHeaderCell("", _headerText, 1);
	}

	/**
	 * @param _headerText
	 * @param _resOrder
	 * @return xPath
	 * @Description xPath of Table Header Cell contains all kind of text presented
	 *              in cell (separated by space).
	 */
	public String xPathTbHeaderCell(String _headerText, int _resOrder) {
		return xPathTbHeaderCell("", _headerText, _resOrder);
	}

	/**
	 * @param _parentXpath
	 * @param _headerText
	 * @return xPath
	 * @Description xPath of Table Header Cell contains all kind of text presented
	 *              in cell (separated by space).
	 */
	public String xPathTbHeaderCell(String _parentXpath, String _headerText) {
		return xPathTbHeaderCell(_parentXpath, _headerText, 1);
	}

	/**
	 * @param _parentXpath
	 * @param _resOrder
	 * @return xPath
	 * @Description xPath of Table Header Cell contains Check Box.
	 */
	public String xPathTbHeaderChkbox(String _parentXpath, int _resOrder) {
		_parentXpath += "//descendant-or-self::table//tr[@role='rowheader']";
		return ("(" + _parentXpath
				+ "//descendant-or-self::th[@role='columnheader'][descendant-or-self::input[@type='checkbox']])["
				+ _resOrder + "]");
	}

	/**
	 * @return xPath
	 * @Description xPath of Table Header Cell contains Check Box.
	 */
	public String xPathTbHeaderChkbox() {
		return xPathTbHeaderChkbox("", 1);
	}

	/**
	 * @param _resOrder
	 * @return xPath
	 * @Description xPath of Table Header Cell contains Check Box.
	 */
	public String xPathTbHeaderChkbox(int _resOrder) {
		return xPathTbHeaderChkbox("", _resOrder);
	}

	/**
	 * @param _parentXpath
	 * @return xPath
	 * @Description xPath of Table Header Cell contains Check Box.
	 */
	public String xPathTbHeaderChkbox(String _parentXpath) {
		return xPathTbHeaderChkbox(_parentXpath, 1);
	}

	/**
	 * @param _parentXpath
	 * @param _chkboxText
	 * @param _resOrder
	 * @return xPath
	 * @Description xPath of Table Header Cell contains Check Box with Label.
	 */
	public String xPathTbHeaderChkboxWithLabel(String _parentXpath, String _chkboxText, int _resOrder) {
		String[] aHeaderText = _chkboxText.split(" ");
		String sSearchPattern = "";
		int numText = aHeaderText.length;
		if (numText > 1) {
			sSearchPattern = "descendant-or-self::*[contains(*,'" + aHeaderText[0] + "') or contains(text(),'"
					+ aHeaderText[0] + "')]";
			for (int i = 1; i < numText; i++) {
				sSearchPattern += " and descendant-or-self::*[contains(*,'" + aHeaderText[i] + "') or contains(text(),'"
						+ aHeaderText[i] + "')]";
			}
			return "(" + _parentXpath + "//thead//descendant-or-self::th[" + sSearchPattern
					+ "]//input[@type='checkbox'])[" + _resOrder + "]";
		} else {
			sSearchPattern = "[contains(*,'" + _chkboxText + "') or contains(text(),'" + _chkboxText + "')]";
			return "(" + _parentXpath + "//thead//descendant-or-self::th" + sSearchPattern
					+ ")//input[@type='checkbox'][" + _resOrder + "]";
		}
	}

	/**
	 * @param _parentXpath
	 * @param _chkboxText
	 * @return
	 * @Description xPath of Table Header Cell contains Check Box with Label.
	 */
	public String xPathTbHeaderChkboxWithLabel(String _parentXpath, String _chkboxText) {
		return xPathTbHeaderChkboxWithLabel(_parentXpath, _chkboxText, 1);
	}

	/**
	 * @param _chkboxText
	 * @return
	 * @Description xPath of Header Cell contains Check Box with Label.
	 */
	public String xPathTbHeaderChkboxWithLabel(String _chkboxText) {
		return xPathTbHeaderChkboxWithLabel("", _chkboxText, 1);
	}

	/**
	 * @param _xPathHeaderCell
	 * @return int
	 * @Description Get Table Column Header index by xPath of Header Cell. Return 0
	 *              if not found.
	 */
	public int getTbColHeaderIndex(String _xPathHeaderCell) {
		x(_xPathHeaderCell);
		try {
			return findAll(_xPathHeaderCell + "/preceding-sibling::th").size() + 1;
		} catch (Exception e) {
			return 0;
		}
	}

	/**
	 * @param _headerText
	 * @return
	 * @Description Get Table Column Header index by Text insides Header Cell.
	 *              Return 0 if not found.
	 */
	public int getTbColHeaderIndexByText(String _headerText) {
		return getTbColHeaderIndex(xPathTbHeaderCell(_headerText));
	}

	/**
	 * @param _headerText
	 * @param _resOrder
	 * @return
	 * @Description Get Table Column Header index by Text insides Header Cell.
	 *              Return 0 if not found.
	 */
	public int getTbColHeaderIndex(String _headerText, int _resOrder) {
		return getTbColHeaderIndex(xPathTbHeaderCell(_headerText, _resOrder));
	}

	/**
	 * @param _parentXpath
	 * @param _headerText
	 * @return index
	 * @Description Get Table Column Header index by Text insides Header Cell.
	 *              Return 0 if not found.
	 */
	public int getTbColHeaderIndex(String _parentXpath, String _headerText) {
		return getTbColHeaderIndex(xPathTbHeaderCell(_parentXpath, _headerText));
	}

	/**
	 * @param _parentXpath
	 * @param _headerText
	 * @param _resOrder
	 * @return index
	 * @Description Get Table Column Header index by Text insides Header Cell.
	 *              Return 0 if not found.
	 */
	public int getTbColHeaderIndex(String _parentXpath, String _headerText, int _resOrder) {
		return getTbColHeaderIndex(xPathTbHeaderCell(_parentXpath, _headerText, _resOrder));
	}

	/**
	 * @param _parentXpath
	 * @return xPath
	 * @Description xPath of all Table Data Rows.
	 */
	public String xPathTbGetAllDataRows(String _parentXpath) {
		_parentXpath += "//descendant-or-self::table[thead]";
		return _parentXpath + "//tbody/tr";
	}

	/**
	 * @param _parentXpath
	 * @param _headerIndex
	 * @return
	 * @Description xPath of Last Table Data Cell in Column by Header Cell index.
	 */
	public String xPathTbGetLastDataCellByHeaderIndex(String _parentXpath, int _headerIndex) {
		_parentXpath += "//descendant-or-self::table";
		return "(" + _parentXpath + "//tr//td[" + _headerIndex + "])[last()]";
	}

	/**
	 * @param _headerIndex
	 * @return xPath
	 * @Description xPath of Table Data Cells in same Column by Header Cell index.
	 */
	public String xPathTbGetAllDataCellsByHeaderIndex(int _headerIndex) {
		return "//descendant-or-self::table//tbody//tr//td[" + _headerIndex + "]";
	}

	/**
	 * @param _parentXpath
	 * @param _headerIndex
	 * @return xPath
	 * @Description xPath of Table Data Cells in same Column by Header Cell index.
	 */
	public String xPathTbGetAllDataCellsByHeaderIndex(String _parentXpath, int _headerIndex) {
		_parentXpath += "//descendant-or-self::table";
		return "(" + _parentXpath + "//tr//td[" + _headerIndex + "])[" + _headerIndex + "]";
	}

	/**
	 * @param _headerIndex
	 * @return WebElementFacade(s)
	 * @Description Finding Table Data Cells in same Column by Header Cell index.
	 */
	public List<WebElementFacade> findTbAllDataCellsByHeaderIndex(int _headerIndex) {
		return x(xPathTbGetAllDataCellsByHeaderIndex(_headerIndex))
				.thenFindAll(xPathTbGetAllDataCellsByHeaderIndex(_headerIndex));
	}

	/**
	 * @param _parentXpath
	 * @param _headerIndex
	 * @return WebElementFacade(s)
	 * @Description Finding Table Data Cells in same Column by Header Cell index.
	 */
	public List<WebElementFacade> findTbAllDataCellsByHeaderIndex(String _parentXpath, int _headerIndex) {
		return x(xPathTbGetAllDataCellsByHeaderIndex(_parentXpath, _headerIndex))
				.thenFindAll(xPathTbGetAllDataCellsByHeaderIndex(_parentXpath, _headerIndex));
	}

	/**
	 * @param _parentXpath
	 * @return WebElementFacade(s)
	 * @Description Finding all Table Data Rows.
	 */
	public List<WebElementFacade> findTbAllDataRows(String _parentXpath) {
		return x(xPathTbGetAllDataRows(_parentXpath)).thenFindAll(xPathTbGetAllDataRows(_parentXpath));
	}

	/**
	 * @param _parentXpath
	 * @return int
	 * @Description Count the number of data row in table.
	 */
	public int getTbCountDataRow(String _parentXpath) {
		try {
			return findTbAllDataRows(_parentXpath).size();
		} catch (Exception e) {
			// System.out.println(e.getMessage());
			return 0;
		}
	}

	/**
	 * @param _parentXpath
	 * @param _rowIndex
	 * @return WebElementFacade
	 * @Description Finding Table Data Row By Row Index.
	 */
	public WebElementFacade findTbDataRowByIndex(String _parentXpath, int _rowIndex) {
		return findTbAllDataRows(_parentXpath).get(_rowIndex);
	}

	/**
	 * @param _parentXpath
	 * @param _givenText
	 * @return xPath
	 * @Description xPath of Table Data Rows by any given text insides Data Row
	 */
	public String xPathTbDataRowsByAnyText(String _parentXpath, String _givenText) {
		_parentXpath += "//descendant-or-self::table";
		String[] aGivenText = _givenText.split(" ");
		String sSearchPattern = "";
		int numText = aGivenText.length;
		if (numText > 1) {
			sSearchPattern = "descendant-or-self::*[contains(@value,'" + aGivenText[0] + "') or contains(text(),'"
					+ aGivenText[0] + "')]";
			for (int i = 1; i < numText; i++) {
				sSearchPattern += " and descendant-or-self::*[contains(@value,'" + aGivenText[i]
						+ "') or contains(text(),'" + aGivenText[i] + "')]";
			}
			return "(" + _parentXpath + "//tr[" + sSearchPattern + "])";
		} else {
			sSearchPattern = "[descendant-or-self::*[contains(@value,'" + _givenText + "') or contains(text(),'"
					+ _givenText + "')]]";
			return "(" + _parentXpath + "//tr" + sSearchPattern + ")";
		}
	}

	/**
	 * @param _givenText
	 * @return xPath
	 * @Description xPath of Table Data Rows by any given text insides Data Rows
	 */
	public String xPathTbDataRowsByAnyText(String _givenText) {
		return xPathTbDataRowsByAnyText("", _givenText);
	}

	/**
	 * @param _parentXpath
	 * @param _givenText
	 * @param _resOrder
	 * @return xPath
	 * @Description xPath of Table Data Row by any given text insides Data Row.
	 */
	public String xPathTbDataRowByAnyText(String _parentXpath, String _givenText, int _resOrder) {
		_parentXpath += "//descendant-or-self::table";
		String[] aGivenText = _givenText.split(" ");
		String sSearchPattern = "";
		int numText = aGivenText.length;
		if (numText > 1) {
			sSearchPattern = "descendant-or-self::*[contains(@value,'" + aGivenText[0] + "') or contains(text(),'"
					+ aGivenText[0] + "')]";
			for (int i = 1; i < numText; i++) {
				sSearchPattern += " and descendant-or-self::*[contains(@value,'" + aGivenText[i]
						+ "') or contains(text(),'" + aGivenText[i] + "')]";
			}
			return "(" + _parentXpath + "//tr[" + sSearchPattern + "])[" + _resOrder + "]";
		} else {
			sSearchPattern = "[descendant-or-self::*[contains(@value,'" + _givenText + "') or contains(text(),'"
					+ _givenText + "')]]";
			return "(" + _parentXpath + "//tr" + sSearchPattern + ")[" + _resOrder + "]";
		}
	}

	/**
	 * @param _givenText
	 * @return xPath
	 * @Description xPath of Table Data Row by any given text insides Data Row.
	 */
	public String xPathTbDataRowByAnyText(String _givenText) {
		return xPathTbDataRowByAnyText("", _givenText, 1);
	}

	/**
	 * @param _parentXpath
	 * @param _givenText
	 * @return xPath
	 * @Description xPath of Table Data Row by any given text insides Data Row.
	 */
	public String xPathTbDataRowByAnyText(String _parentXpath, String _givenText) {
		return xPathTbDataRowByAnyText(_parentXpath, _givenText, 1);
	}

	/**
	 * @param _givenText
	 * @param _rowOrder
	 * @return xPath
	 * @Description xPath of Table Data Row by any given text insides Data Row.
	 */
	public String xPathTbDataRowByAnyText(String _givenText, int _rowOrder) {
		return xPathTbDataRowByAnyText("", _givenText, _rowOrder);
	}

	/**
	 * @param _parentXpath
	 * @param _givenText
	 * @param _cellOrder
	 * @return xPath
	 * @Description xPath of Table Data Cell by any given text insides Data Cell.
	 */
	public String xPathTbDataCellByText(String _parentXpath, String _givenText, int _cellOrder) {
		_parentXpath += "//descendant-or-self::table";
		String[] aGivenText = _givenText.split(" ");
		String sSearchPattern = "";
		int numText = aGivenText.length;
		if (numText > 1) {
			sSearchPattern = "descendant-or-self::*[contains(@value,'" + aGivenText[0] + "') or contains(text(),'"
					+ aGivenText[0] + "')]";
			for (int i = 1; i < numText; i++) {
				sSearchPattern += " and descendant-or-self::*[contains(@value,'" + aGivenText[i]
						+ "') or contains(text(),'" + aGivenText[i] + "')]";
			}
			return "(" + _parentXpath + "//tr//descendant-or-self::td[" + sSearchPattern + "])[" + _cellOrder + "]";
		} else {
			sSearchPattern = "[descendant-or-self::*[contains(@value,'" + _givenText + "') or contains(text(),'"
					+ _givenText + "')]]";
			return "(" + _parentXpath + "//tr//descendant-or-self::td" + sSearchPattern + ")[" + _cellOrder + "]";
		}
	}

	/**
	 * @param _givenText
	 * @return xPath
	 * @Description xPath of Table Data Cell by any given text insides Data Cell.
	 */
	public String xPathTbDataCellByText(String _givenText) {
		return xPathTbDataCellByText("", _givenText, 1);
	}

	/**
	 * @param _parentXpath
	 * @param _givenText
	 * @return xPath
	 * @Description xPath of Table Data Cell by any given text insides Data Cell.
	 */
	public String xPathTbDataCellByText(String _parentXpath, String _givenText) {
		return xPathTbDataCellByText(_parentXpath, _givenText, 1);
	}

	/**
	 * @param _givenText
	 * @param _resOrder
	 * @return xPath
	 * @Description xPath of Table Data Cell by any given text insides Data Cell.
	 */
	public String xPathTbDataCellByText(String _givenText, int _resOrder) {
		return xPathTbDataCellByText("", _givenText, _resOrder);
	}

	/**
	 * @param _parentXpath
	 * @param _givenText
	 * @param _resOrder
	 * @return xPath
	 * @Description xPath of Table Data Cell by equal Text insides Data Cell.
	 */
	public String xPathTbDataCellByTextEqual(String _parentXpath, String _givenText, int _resOrder) {
		_parentXpath += "//descendant-or-self::table";
		String sSearchPattern = "[descendant-or-self::*[*='" + _givenText + "' or text()='" + _givenText + "']]";
		return "(" + _parentXpath + "//tr//descendant-or-self::td" + sSearchPattern + ")[" + _resOrder + "]";
	}

	/**
	 * @param _parentXpath
	 * @param _givenText
	 * @return xPath
	 * @Description xPath of Table Data Cell by equal Text insides Data Cell.
	 */
	public String xPathTbDataCellByTextEqual(String _parentXpath, String _givenText) {
		return xPathTbDataCellByTextEqual(_parentXpath, _givenText, 1);
	}

	/**
	 * @param _givenText
	 * @return xPath
	 * @Description xPath of Table Data Cell by equal Text insides Data Cell.
	 */
	public String xPathTbDataCellByTextEqual(String _givenText) {
		return xPathTbDataCellByTextEqual("", _givenText, 1);
	}

	/**
	 * @param _givenText
	 * @param _resOrder
	 * @return xPath
	 * @Description xPath of Table Data Cell by equal Text insides Data Cell.
	 */
	public String xPathTbDataCellByTextEqual(String _givenText, int _resOrder) {
		return xPathTbDataCellByTextEqual("", _givenText, _resOrder);
	}

	/**
	 * @param _parentXpath
	 * @param _rowIndex
	 * @param _headerIndex
	 * @return xPath
	 * @Description xPath of Table Data Cell by position of Data Cell (Row and
	 *              Column Index).
	 */
	public String xPathTbDataCellByPosition(String _parentXpath, int _rowIndex, int _headerIndex) {
		_parentXpath += "//descendant-or-self::table[thead/tr]";
		String xPath = _parentXpath + "//tr[" + _rowIndex + "]//td[" + _headerIndex + "]";
		highlightElement(xPath);
		return xPath;
	}

	/**
	 * @param _parentXpath
	 * @param _givenText
	 * @param _resOrder
	 * @param _headerIndex
	 * @return
	 * @Description xPath of Table Data Cell by given text appear in column
	 */
	public String xPathTbDataCellByTextInCol(String _parentXpath, String _givenText, int _resOrder, int _headerIndex) {
		_parentXpath += "//descendant-or-self::table";
		String[] aGivenText = _givenText.split(" ");
		String sSearchPattern = "";
		int numText = aGivenText.length;
		if (numText > 1) {
			sSearchPattern = "descendant-or-self::*[contains(*,'" + aGivenText[0] + "') or contains(text(),'"
					+ aGivenText[0] + "')]";
			for (int i = 1; i < numText; i++) {
				sSearchPattern += " and descendant-or-self::*[contains(*,'" + aGivenText[i] + "') or contains(text(),'"
						+ aGivenText[i] + "')]";
			}
			return "(" + _parentXpath + "//tr//descendant-or-self::td[" + _headerIndex + "][" + sSearchPattern + "])["
					+ _resOrder + "]";
		} else {
			sSearchPattern = "[descendant-or-self::*[contains(*,'" + _givenText + "') or contains(text(),'" + _givenText
					+ "')]]";
			return "(" + _parentXpath + "//tr//descendant-or-self::td[" + _headerIndex + "]" + sSearchPattern + ")["
					+ _resOrder + "]";
		}
	}

	/**
	 * @param _parentXpath
	 * @param _givenText
	 * @param _resOrder
	 * @param _headerIndex
	 * @return
	 * @Description
	 */
	public String xPathTbDataCellByTextEqualInCol(String _parentXpath, String _givenText, int _resOrder,
			int _headerIndex) {
		_parentXpath += "//descendant-or-self::table";
		String sSearchPattern = "[descendant-or-self::*[@*='" + _givenText + "' or text()='" + _givenText + "']]";
		return "(" + _parentXpath + "//tr//descendant-or-self::td[" + _headerIndex + "]" + sSearchPattern + ")["
				+ _resOrder + "]";
	}

	/**
	 * @param _parentXpath
	 * @param _headerIndex
	 * @return xPath
	 * @Description xPath of all data cell in specific column of table
	 */
	public String xPathTbDataCellsInCol(String _parentXpath, int _headerIndex) {
		_parentXpath += "//descendant-or-self::table";
		return "(" + _parentXpath + "//tr//td[" + _headerIndex + "])";
	}

	/**
	 * @param _parentXpath
	 * @param _givenText
	 * @param _resDataOrder
	 * @param _headerText
	 * @param _headerResOrder
	 * @return
	 * @Description
	 */
	public String xPathTbDataCellByTextEqualInCol(String _parentXpath, String _givenText, int _resOrder,
			String _headerText, int _headerResOrder) {
		int headerIndex = getTbColHeaderIndex(_headerText, _headerResOrder);
		String sSearchPattern = "[descendant-or-self::*[@*='" + _givenText + "' or text()='" + _givenText + "']]";
		return "(" + _parentXpath + "//tr//td[" + headerIndex + "]" + sSearchPattern + ")[" + _resOrder + "]";
	}

	/**
	 * @param _parentXpath
	 * @param _givenText
	 * @param _resDataOrder
	 * @param _headerText
	 * @param _headerResOrder
	 * @return
	 * @Description
	 */
	public WebElementFacade findTbDataCellByTextEqualInCol(String _parentXpath, String _givenText, int _resDataOrder,
			String _headerText, int _headerResOrder) {
		return waitElementToBePresent(
				xPathTbDataCellByTextEqualInCol(_parentXpath, _givenText, _resDataOrder, _headerText, _headerResOrder));
	}

	/**
	 * @param _XpathDataCell
	 * @return
	 * @Description Get Column Index of Table Data Cell. NOTE: Return 0 if not found
	 */
	public int getTbColIndexOfDataCell(String _XpathDataCell) {
		waitElementToBePresent(_XpathDataCell);
		try {
			return findAll(_XpathDataCell + "/preceding-sibling::td").size() + 1;
		} catch (Exception e) {
			return 0;
		}
	}

	/**
	 * @param _XpathDataCell
	 * @return
	 * @Description Get Row Index of Table Data Cell. NOTE: Return 0 if not found.
	 */
	public int getTbRowIndexOfDataCell(String _XpathDataCell) {
		waitElementToBePresent(_XpathDataCell);
		try {
			return findAll(_XpathDataCell + "/ancestor::tr[1]/preceding-sibling::tr").size() + 1;
		} catch (Exception e) {
			return 0;
		}
	}

	// Common TABLE action
	private static final String TABLE_PAGE_SIZE = "//td[contains(text(),'bản ghi/trang:')]//following-sibling::td//select";

	public String xPathTbPageSize(String _parentXpath) {
		return _parentXpath + "//following-sibling::div[contains(.,'bản ghi/trang')]" + TABLE_PAGE_SIZE;
	}

	public String xPathTbPage(String _parentXpath) {
		return _parentXpath + "//following-sibling::div[contains(.,'bản ghi/trang')]"
				+ "//ul[contains(@class,'pagination')]";
	}

	/**
	 * Select page size of table
	 * 
	 * @param _parentXpath
	 * @param _pageSize
	 * @return
	 */
	public String selectTbPageSize(String _parentXpath, String _pageSize) {
		_parentXpath = _parentXpath + "//following-sibling::div[contains(.,'bản ghi/trang')]";
		if (!_pageSize.contains("DEFAULT")) { // if default , not select
			XH(_parentXpath + TABLE_PAGE_SIZE).selectByVisibleText(_pageSize);
			return XH(_parentXpath + TABLE_PAGE_SIZE).getSelectedVisibleTextValue();
		} else {
			return "";
		}
	}

	/**
	 * Go to visible page on grid data
	 * 
	 * @param _parentXpath
	 * @param _page
	 * @return
	 */
	public boolean goToTbPage(String _parentXpath, String _page) {
		String xPath = xPathPage(_parentXpath + "//following-sibling::div[contains(.,'bản ghi/trang')]")
				+ "//li//a[text()='" + _page + "']";
		if (isElementExistNow(xPath)) {
			clickOnElement(xPath);
			return true;
		} else {
			return false;
		}
	}

	/**
	 * xPath of Page
	 * 
	 * @return
	 */
	public String xPathPage() {
		return "//ul[contains(@class,'pagination')]";
	}

	/**
	 * xPath of Page
	 * 
	 * @param _parentXpath
	 * @return
	 */
	public String xPathPage(String _parentXpath) {
		return _parentXpath + "//ul[contains(@class,'pagination')]";
	}

	/**
	 * Go to visible page
	 * 
	 * @param _parentXpath
	 * @param _page
	 * @return
	 */
	public boolean goToPage(String _parentXpath, String _page) {
		String xPath = xPathPage(_parentXpath) + "//li//a[text()='" + _page + "']";
		if (isElementExistNow(xPath)) {
			clickOnElement(xPath);
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Select page size of table
	 * 
	 * @param _pageSize
	 * @return
	 */
	public String selectTbPageSize(String _pageSize) {
		return selectTbPageSize("", _pageSize);
	}

	/**
	 * Get current selected page size of table
	 * 
	 * @param _parentXpath
	 * @return
	 */
	public String getTbPageSize(String _parentXpath) {
		return XH(_parentXpath + TABLE_PAGE_SIZE).getSelectedVisibleTextValue();
	}

	/**
	 * Get current selected page size of table
	 * 
	 * @return
	 */
	public String getTbPageSize() {
		return getTbPageSize("");
	}

	// BEGIN Search In MultiPage
	private static final String SCROLL_TABLE_FIRST_BUTTON = "//ul[contains(@class,'pagination ')]/descendant::i[contains(@class,'fa-step-backward')]";
	private static final String SCROLL_TABLE_PREVIOUS_BUTTON = "//ul[contains(@class,'pagination ')]/descendant::i[contains(@class,'fa-backward')]";
	private static final String SCROLL_TABLE_NEXT_BUTTON = "//ul[contains(@class,'pagination ')]/descendant::i[contains(@class,'fa-forward')]";
	private static final String SCROLL_TABLE_LAST_BUTTON = "//ul[contains(@class,'pagination ')]/descendant::i[contains(@class,'fa-step-forward')]";
	// private static final String INPUT_TABLE_PAGE =
	// "//input[@class='ui-pg-input']";
	// private static final String SELECT_ITEM_EACH_PAGE =
	// "//select[@class='ui-pg-selbox']";

	public int searchInTbMultiPage(String _parentXpath, int _colIndex, String _value, boolean _searchFromFirstPage) {
		String btnNav1 = "";
		String btnNav2 = "";
		if (_searchFromFirstPage == false) {
			btnNav1 = _parentXpath + SCROLL_TABLE_LAST_BUTTON;
			btnNav2 = _parentXpath + SCROLL_TABLE_PREVIOUS_BUTTON;
		} else {
			btnNav1 = _parentXpath + SCROLL_TABLE_FIRST_BUTTON;
			btnNav2 = _parentXpath + SCROLL_TABLE_NEXT_BUTTON;
		}
		// Go to last page or first list
		if (isElementExistNow(btnNav1)) {
			clickOnElement(btnNav1);
			waitForEverythingComplete();
		}

		while (true) {
			// Get column index of value to search
			int colIndex = _colIndex;
			XH("(" + xPathTbDataCellsInCol(_parentXpath, colIndex) + ")[1]");
			List<WebElementFacade> dataCellResults = withTimeoutOf(100, TimeUnit.MILLISECONDS)
					.findAll(xPathTbDataCellsInCol(_parentXpath, colIndex));
			// Check all data cell results
			for (int i = 0; i < dataCellResults.size(); i++) {
				if (dataCellResults.get(i).containsOnlyText(_value)) {
					return i + 1;
				}
				int k = i + 1;
				List<WebElementFacade> subDataCellResults = withTimeoutOf(100, TimeUnit.MILLISECONDS)
						.findAll("(" + xPathTbDataCellsInCol(_parentXpath, colIndex) + ")[" + k + "]//*");
				for (int j = 0; j < subDataCellResults.size(); j++) {
					try {
						if (subDataCellResults.get(j).getText().equals(_value)
								|| subDataCellResults.get(j).getValue().equals(_value)) {
							return i + 1;
						}
					} catch (Exception e) {
						// Do nothing
					}
				}
				try {
					subDataCellResults = withTimeoutOf(100, TimeUnit.MILLISECONDS)
							.findAll("(" + xPathTbDataCellsInCol(_parentXpath, colIndex) + ")[" + k + "]//*[@value = '"
									+ _value + "']");
					if (subDataCellResults.size() > 0) {
						return i + 1;
					}
				} catch (Exception e) {
				}
			}

			{ // next page
				if (isElementExistNow(btnNav2)) {
					clickOnElement(btnNav2);
					waitForEverythingComplete();
				} else {
					return 0;// Only one page
				}
			} // loop
		}

	}

	public int searchInTbMultiPage(String _parentXpath, String _headerText, int _colResOrder, String _value,
			boolean _searchFromFirstPage) {
		String btnNav1 = "";
		String btnNav2 = "";
		if (_searchFromFirstPage == false) {
			btnNav1 = _parentXpath + SCROLL_TABLE_LAST_BUTTON;
			btnNav2 = _parentXpath + SCROLL_TABLE_PREVIOUS_BUTTON;
		} else {
			btnNav1 = _parentXpath + SCROLL_TABLE_FIRST_BUTTON;
			btnNav2 = _parentXpath + SCROLL_TABLE_NEXT_BUTTON;
		}
		// Go to last page or first list
		if (isElementExistNow(btnNav1)) {
			clickOnElement(btnNav1);
			waitForEverythingComplete();
		}

		// Get column index of value to search
		int colIndex = getTbColHeaderIndex(_parentXpath, _headerText, _colResOrder);

		while (true) {
			List<WebElementFacade> dataCellResults = withTimeoutOf(100, TimeUnit.MILLISECONDS)
					.findAll(xPathTbDataCellsInCol(_parentXpath, colIndex));
			// Check all data cell results
			for (int i = 0; i < dataCellResults.size(); i++) {
				if (dataCellResults.get(i).containsOnlyText(_value)) {
					return i + 1;
				}
				int k = i + 1;
				List<WebElementFacade> subDataCellResults = withTimeoutOf(100, TimeUnit.MILLISECONDS)
						.findAll("(" + xPathTbDataCellsInCol(_parentXpath, colIndex) + ")[" + k + "]//*");
				for (int j = 0; j < subDataCellResults.size(); j++) {
					try {
						if (subDataCellResults.get(j).getText().equals(_value)
								|| subDataCellResults.get(j).getValue().equals(_value)) {
							return i + 1;
						}
					} catch (Exception e) {
						// Do nothing
					}
				}
				try {
					subDataCellResults = withTimeoutOf(100, TimeUnit.MILLISECONDS)
							.findAll("(" + xPathTbDataCellsInCol(_parentXpath, colIndex) + ")[" + k + "]//*[@value = '"
									+ _value + "']");
					if (subDataCellResults.size() > 0) {
						return i + 1;
					}
				} catch (Exception e) {
				}
			}

			{ // next page
				if (isElementExistNow(btnNav2)) {
					clickOnElement(btnNav2);
					waitForEverythingComplete();
				} else {
					return 0;// Only one page
				}
			} // loop
		}

	}

	public int searchInTbMultiPageIgnoreVal(String _parentXpath, String _headerText, int _colResOrder, String _value,
			boolean _searchFromFirstPage) {
		String btnNav1 = "";
		String btnNav2 = "";
		if (_searchFromFirstPage == false) {
			btnNav1 = _parentXpath + SCROLL_TABLE_LAST_BUTTON;
			btnNav2 = _parentXpath + SCROLL_TABLE_PREVIOUS_BUTTON;
		} else {
			btnNav1 = _parentXpath + SCROLL_TABLE_FIRST_BUTTON;
			btnNav2 = _parentXpath + SCROLL_TABLE_NEXT_BUTTON;
		}
		// Go to last page or first list
		if (isElementExistNow(btnNav1)) {
			clickOnElement(btnNav1);
			waitForEverythingComplete();
		}

		// Get column index of value to search
		int colIndex = getTbColHeaderIndex(_parentXpath, _headerText, _colResOrder);

		while (true) {
			List<WebElementFacade> dataCellResults = withTimeoutOf(100, TimeUnit.MILLISECONDS)
					.findAll(xPathTbDataCellsInCol(_parentXpath, colIndex));
			// Check all data cell results
			for (int i = 0; i < dataCellResults.size(); i++) {
				if (dataCellResults.get(i).containsOnlyText(_value)) {
					return i + 1;
				}
				int k = i + 1;
				List<WebElementFacade> subDataCellResults = withTimeoutOf(100, TimeUnit.MILLISECONDS)
						.findAll("(" + xPathTbDataCellsInCol(_parentXpath, colIndex) + ")[" + k + "]//*");
				for (int j = 0; j < subDataCellResults.size(); j++) {
					try {
						if (subDataCellResults.get(j).getText().equals(_value)
								|| subDataCellResults.get(j).getValue().equals(_value)) {
							return i + 1;
						}
					} catch (Exception e) {
						// Do nothing
					}
				}
			}

			{ // next page
				if (isElementExistNow(btnNav2)) {
					clickOnElement(btnNav2);
					waitForEverythingComplete();
				} else {
					return 0;// Only one page
				}
			} // loop
		}

	}

	/**
	 * Search row index by value equals in column name and Page Size, Page, Row
	 * Index. Return 0 if not found
	 * 
	 * @param _parentXpath
	 * @param _headerText
	 * @param _colResOrder
	 * @param _value
	 * @param _searchFromFirstPage
	 * @param _pageSize
	 * @param _Page
	 * @param _rowIndex
	 * @return
	 */
	public int searchInTbMultiPageAdvance(String _parentXpath, String _headerText, int _colResOrder, String _value,
			boolean _searchFromFirstPage, String _pageSize, String _Page, String _rowIndex) {
		System.out.println(
				"Pase size : " + _pageSize + " Page : " + _Page + " RowIndex : " + _rowIndex + " Value : " + _value);
		String btnNav1 = "";
		String btnNav2 = "";
		int rowIndex = Integer.parseInt(_rowIndex);
		// Select Page Size
		if (!_pageSize.isEmpty()) {
			selectTbPageSize(_parentXpath, _pageSize);
		}
		if (_searchFromFirstPage == false) {
			btnNav1 = _parentXpath + SCROLL_TABLE_LAST_BUTTON;
			btnNav2 = _parentXpath + SCROLL_TABLE_PREVIOUS_BUTTON;
			// Go to last page
			while (isElementExistNow(_parentXpath + SCROLL_TABLE_NEXT_BUTTON)) {
				clickOnElement(btnNav1);
				waitForEverythingComplete();
			}
		} else {
			btnNav1 = _parentXpath + SCROLL_TABLE_FIRST_BUTTON;
			btnNav2 = _parentXpath + SCROLL_TABLE_NEXT_BUTTON;
			// Go to first page
			while (isElementExistNow(_parentXpath + SCROLL_TABLE_PREVIOUS_BUTTON)) {
				clickOnElement(btnNav1);
				waitForEverythingComplete();
			}
		}
		// Go to Page
		if (_Page.isEmpty()) {
			clickOnElement(btnNav1);
			waitForEverythingComplete();
		} else {
			while (!goToTbPage(_parentXpath, _Page)) {
				// In case page not listed
				if (isElementExistNow(btnNav2)) {
					clickOnElement(btnNav2);
					waitForEverythingComplete();
				} else {
					return 0;
				}
			}
		}

		while (true) {
			// Get column index of value to search
			int colIndex = getTbColHeaderIndex(_parentXpath, _headerText, _colResOrder);
			List<WebElementFacade> dataCellResults = withTimeoutOf(100, TimeUnit.MILLISECONDS)
					.findAll(xPathTbDataCellsInCol(_parentXpath, colIndex));
			// Check all data cell results
			if (rowIndex == 0) {
				for (int i = 0; i < dataCellResults.size(); i++) {
					if (dataCellResults.get(i).containsOnlyText(_value)) {
						return i + 1;
					}
					int k = i + 1;
					List<WebElementFacade> subDataCellResults = withTimeoutOf(100, TimeUnit.MILLISECONDS)
							.findAll("(" + xPathTbDataCellsInCol(_parentXpath, colIndex) + ")[" + k + "]//*");
					for (int j = 0; j < subDataCellResults.size(); j++) {
						try {
							if (subDataCellResults.get(j).getText().equals(_value)
									|| subDataCellResults.get(j).getValue().equals(_value)) {
								return i + 1;
							}
						} catch (Exception e) {
							// Do nothing
						}
					}
					try {
						subDataCellResults = withTimeoutOf(100, TimeUnit.MILLISECONDS)
								.findAll("(" + xPathTbDataCellsInCol(_parentXpath, colIndex) + ")[" + k
										+ "]//*[@value = '" + _value + "']");
						if (subDataCellResults.size() > 0) {
							return i + 1;
						}
					} catch (Exception e) {
					}
				}
			} else {// Row Index <> 0
				if (dataCellResults.get(rowIndex - 1).containsOnlyText(_value)) {
					return rowIndex;
				}
				List<WebElementFacade> subDataCellResults = withTimeoutOf(100, TimeUnit.MILLISECONDS)
						.findAll("(" + xPathTbDataCellsInCol(_parentXpath, colIndex) + ")[" + _rowIndex + "]//*");
				for (int j = 0; j < subDataCellResults.size(); j++) {
					try {
						if (subDataCellResults.get(j).getText().equals(_value)
								|| subDataCellResults.get(j).getValue().equals(_value)) {
							return rowIndex;
						}
					} catch (Exception e) {
						// Do nothing
					}
				}
				try {
					subDataCellResults = withTimeoutOf(100, TimeUnit.MILLISECONDS)
							.findAll("(" + xPathTbDataCellsInCol(_parentXpath, colIndex) + ")[" + _rowIndex
									+ "]//*[@value = '" + _value + "']");
					if (subDataCellResults.size() > 0) {
						return rowIndex;
					}
				} catch (Exception e) {
				}
				// find in cell sub element
			}
			{ // next page
				if (_Page.isEmpty()) {
					if (isElementExistNow(btnNav2)) {
						clickOnElement(btnNav2);
						waitForEverythingComplete();
					} else {
						return 0;
					}
				} else {
					return 0;
				}
			} // loop
		}

	}

	public int searchInTbMultiPage(String _parentXpath, int colIndex1, String _value1, int colIndex2, String _value2,
			boolean _searchFromFirstPage) {
		String btnNav1 = "";
		String btnNav2 = "";
		if (_searchFromFirstPage == false) {
			btnNav1 = _parentXpath + SCROLL_TABLE_LAST_BUTTON;
			btnNav2 = _parentXpath + SCROLL_TABLE_PREVIOUS_BUTTON;
		} else {
			btnNav1 = _parentXpath + SCROLL_TABLE_FIRST_BUTTON;
			btnNav2 = _parentXpath + SCROLL_TABLE_NEXT_BUTTON;
		}
		// Go to last page or first list
		if (isElementExistNow(btnNav1)) {
			clickOnElement(btnNav1);
			waitForEverythingComplete();
		}
		while (true) {
			int result = 0;
			int lastResult = 0;
			// Get column index of value to search
			// Get all data cells
			List<WebElementFacade> dataCellResults = withTimeoutOf(100, TimeUnit.MILLISECONDS)
					.findAll(xPathTbDataCellsInCol(_parentXpath, colIndex1));
			// Check all data cell results
			for (int i = 0; i < dataCellResults.size() && i > result - 1; i++) {
				if (dataCellResults.get(i).containsOnlyText(_value1)) {
					result = i + 1;
				} else {
					int k = i + 1;
					List<WebElementFacade> subDataCellResults = withTimeoutOf(100, TimeUnit.MILLISECONDS)
							.findAll("(" + xPathTbDataCellsInCol(_parentXpath, colIndex1) + ")[" + k + "]//*");
					int subResult = 0;
					for (int j = 0; j < subDataCellResults.size(); j++) {
						try {
							if (subDataCellResults.get(j).getText().equals(_value1)
									|| subDataCellResults.get(j).getValue().equals(_value1)) {
								subResult = i + 1;
								break;
							}
						} catch (Exception e) {
							// Do nothing
						}
					}
					if (subResult == 0) {
						try {
							subDataCellResults = withTimeoutOf(100, TimeUnit.MILLISECONDS)
									.findAll("(" + xPathTbDataCellsInCol(_parentXpath, colIndex1) + ")[" + k
											+ "]//*[@value = '" + _value1 + "']");
							if (subDataCellResults.size() > 0) {
								result = i + 1;
							}
						} catch (Exception e) {
						}
					} else {
						result = subResult;
					}
				}
				if (result != 0 && lastResult != result) {// find next condition
					lastResult = result;
					WebElementFacade wEF = findBy(xPathTbDataCellByPosition(_parentXpath, result, colIndex2));
					if (wEF.containsOnlyText(_value2)) {
						return result;
					}
					List<WebElementFacade> subDataCellResults2 = withTimeoutOf(100, TimeUnit.MILLISECONDS)
							.findAll(xPathTbDataCellByPosition(_parentXpath, result, colIndex2) + "//*");
					for (int j = 0; j < subDataCellResults2.size(); j++) {
						try {
							if (subDataCellResults2.get(j).getText().equals(_value1)
									|| subDataCellResults2.get(j).getValue().equals(_value1)) {
								return result;
							}
						} catch (Exception e) {
							// Do nothing
						}
					}
					try {
						subDataCellResults2 = withTimeoutOf(200, TimeUnit.MILLISECONDS)
								.findAll(xPathTbDataCellByPosition(_parentXpath, result, colIndex2) + "//*[@value = '"
										+ _value2 + "']");
						if (subDataCellResults2.size() > 0) {
							return result;
						}
					} catch (Exception e) {
					}
				}
			}

			{ // next page
				if (isElementExistNow(btnNav2)) {
					clickOnElement(btnNav2);
					waitForEverythingComplete();
				} else {
					return 0;// Only one page
				}
			} // loop
		}
	}

	// END Search In MultiPage

	// #EndRegion HTML TABLE.

	/**
	 * @Description Hover an element.
	 * @param _xPath
	 */
	public void hoverElement(String _xPath) {
		withAction().moveToElement(XH(_xPath)).build().perform();
	}

	/**
	 * @Description Hover, then click a element.
	 * @param _xPath
	 */
	public void hoverThenClickElement(String _xPath) {
		withAction().moveToElement(XH(_xPath)).click().build().perform();
	}

	// region Alert message
	public String alert_message() {
		try {
			WebDriverWait wait = new WebDriverWait(getDriver(), 2);
			wait.until(ExpectedConditions.alertIsPresent());
			Alert alert = getDriver().switchTo().alert();
			String message = alert.getText();
			getDriver().switchTo().defaultContent();
			return message;
		} catch (Exception e) {
			return null;
		}
	}

	public void alertAccept() {
		Alert alert = getDriver().switchTo().alert();
		alert.accept();
		getDriver().switchTo().defaultContent();
	}

	public void alertDismiss() {
		Alert alert = getDriver().switchTo().alert();
		alert.dismiss();
		getDriver().switchTo().defaultContent();
	}

	// endregion Alert message
}
