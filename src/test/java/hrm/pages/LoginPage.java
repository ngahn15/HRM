package hrm.pages;

import org.openqa.selenium.WebDriver;

import hrm.lib.MyPageObject;

/**
 * @author AUTO
 * @version 11/10/2019 3:12:06 AM
 */
public class LoginPage extends MyPageObject {
	public LoginPage(WebDriver driver) {
		super(driver);
	}

	// Email
	public void enter_email(String sEmail) {
		waitClearAndType("//input[@id='login']", sEmail);
	}

	public String email() {
		return XH("//input[@id='login']").getAttribute("value");
	}

	public boolean exist_email() {
		return isElementExistNow("//input[@id='login']");
	}

	public boolean enabled_email() {
		// return XH("//input[@id='login']").isEnabled();
		return !isElemenReadonly("//input[@id='login']");
	}

	public boolean focus_email() {
		return XH("//input[@id='login']").hasFocus();
	}

	// Mật khẩu
	public void enter_mat_khau(String sMatKhau) {
		waitClearAndType("//input[@id='password']", sMatKhau);
	}

	public String mat_khau() {
		return XH("//input[@id='password']").getAttribute("value");
	}

	public boolean exist_mat_khau() {
		return isElementExistNow("//input[@id='password']");
	}

	public boolean enabled_mat_khau() {
		// return XH("//input[@id='password']").isEnabled();
		return !isElemenReadonly("//input[@id='password']");
	}

	public boolean focus_mat_khau() {
		return XH("//input[@id='password']").hasFocus();
	}

	// Đăng nhập
	public void click_dang_nhap() {
		XH("//button[@class='btn btn-primary btn-block']").click();
//		element("//button[@class='btn btn-primary']").click();
//		clickOnElement("//button[@class='btn btn-primary']");
//		waitForEverythingComplete();
//		waitUntilProgressBarComplete(60);
	}

	public boolean exist_dang_nhap() {
		return isElementExistNow("//button[@class='btn btn-primary btn-block']");
	}

	public boolean enabled_dang_nhap() {
		return XH("//button[@class='btn btn-primary btn-block']").isEnabled();
	}

	public boolean focus_dang_nhap() {
		return XH("//button[@class='btn btn-primary btn-block']").hasFocus();
	}

	// Đặt lại mật khẩu
	public void click_dat_lai_mat_khau() {
//		clickOnElement("//a[@class='btn btn-link pull-right']");
	}

	public boolean exist_dat_lai_mat_khau() {
		return isElementExistNow("//a[@class='btn btn-link pull-right']");
	}

	public boolean enabled_dat_lai_mat_khau() {
		return XH("//a[@class='btn btn-link pull-right']").isEnabled();
	}

	public boolean focus_dat_lai_mat_khau() {
		return XH("//a[@class='btn btn-link pull-right']").hasFocus();
	}

	// Message error login
	public String message_error_login() {
		return XH("//p[@class='alert alert-danger']").getText();
	}

	public boolean exist_message_error_login() {
		return isElementExistNow("//p[@class='alert alert-danger']");
	}

	public boolean focus_message_error_login() {
		return XH("//p[@class='alert alert-danger']").hasFocus();
	}

//	Validation
	public String validationMessageEmail() {
		return XH("//input[@id='login']").getAttribute("validationMessage");
	}

	public boolean exist_validation_Message_email() {
		if (validationMessageEmail().isEmpty()) {
			return false;
		}
		return true;
	}

	public String validationMessagePassword() {
		return XH("//input[@id='password']").getAttribute("validationMessage");
	}

	public boolean exist_validation_Message_Password() {
		if (validationMessagePassword().isEmpty()) {
			return false;
		}
		return true;
	}
	// END LOGIN
}
