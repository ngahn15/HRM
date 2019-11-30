package hrm.steps.serenity;

import hrm.pages.LoginPage;
import net.thucydides.core.annotations.Step;

/**
 * @author AUTO
 * @version 11/10/2019 3:12:05 AM
 */
public class LoginSteps {
	LoginPage LPage;
	// BEGIN LOGIN
	// Email
	@Step
	public void enter_email(String sEmail){
		LPage.enter_email(sEmail);
	}
	@Step
	public String email(){
		return LPage.email();
	}
	@Step
	public boolean exist_email(){
		return LPage.exist_email();
	}
	@Step
	public boolean enabled_email(){
		return LPage.enabled_email();
	}
	@Step
	public boolean focus_email(){
		return LPage.focus_email();
	}
	// Mật khẩu
	@Step
	public void enter_mat_khau(String sMatKhau){
		LPage.enter_mat_khau(sMatKhau);
	}
	@Step
	public String mat_khau(){
		return LPage.mat_khau();
	}
	@Step
	public boolean exist_mat_khau(){
		return LPage.exist_mat_khau();
	}
	@Step
	public boolean enabled_mat_khau(){
		return LPage.enabled_mat_khau();
	}
	@Step
	public boolean focus_mat_khau(){
		return LPage.focus_mat_khau();
	}
	// Đăng nhập
	@Step
	public void click_dang_nhap(){
		LPage.click_dang_nhap();

	}
	@Step
	public boolean exist_dang_nhap(){
		return LPage.exist_dang_nhap();
	}
	@Step
	public boolean enabled_dang_nhap(){
		return LPage.enabled_dang_nhap();
	}
	@Step
	public boolean focus_dang_nhap(){
		return LPage.focus_dang_nhap();
	}
	// Đặt lại mật khẩu
	@Step
	public void click_dat_lai_mat_khau(){
		LPage.click_dat_lai_mat_khau();
	}
	@Step
	public boolean exist_dat_lai_mat_khau(){
		return LPage.exist_dat_lai_mat_khau();
	}
	@Step
	public boolean enabled_dat_lai_mat_khau(){
		return LPage.enabled_dat_lai_mat_khau();
	}
	@Step
	public boolean focus_dat_lai_mat_khau(){
		return LPage.focus_dat_lai_mat_khau();
	}
	// Message error login
	@Step
	public String message_error_login(){
		return LPage.message_error_login();
	}
	@Step
	public boolean exist_message_error_login(){
		return LPage.exist_message_error_login();
	}
	@Step
	public boolean focus_message_error_login(){
		return LPage.focus_message_error_login();
	}
	
//	Validation
	public String validationMessageEmail() {
		return LPage.validationMessageEmail();
	}

	public boolean exist_validation_Message_email() {
		return LPage.exist_validation_Message_email();
	}

	public String validationMessagePassword() {
		return LPage.validationMessagePassword();
	}

	public boolean exist_validation_Message_Password() {
		return LPage.exist_validation_Message_Password();
	}
	// END LOGIN
}
