package hrm.pages.DuyetDangKyNghi;

import org.openqa.selenium.WebDriver;

import hrm.lib.MyPageObject;

/**
 * @author AUTO
 * @version 12/1/2019 1:47:55 PM
 */
public class TuChoiPage extends MyPageObject {
	private static final String TEXTAREA_NAME_LYDO_TUCHOI = "//textarea[@name='lydo_tuchoi']";
	private static final String A_NAME_EMPLOYEE_ID = "//a[@name='employee_id']";
	private static final String BUTTON_SPECIAL_CANCEL = "//button[@class='btn btn-link' and @special='cancel']";
	private static final String BUTTON_NAME_CREATE_REJECT = "//button[@name='create_reject']";
	public TuChoiPage(WebDriver driver) {
		super(driver);
	}
	// BEGIN TỪ CHỐI
	private final String xPathTC = "";
	// Từ chối
	public void click_tu_choi(){
		clickOnElement(BUTTON_NAME_CREATE_REJECT);
	}
	public boolean exist_tu_choi(){
		return isElementExistNow(BUTTON_NAME_CREATE_REJECT);
	}
	public boolean enabled_tu_choi(){
		return XH(BUTTON_NAME_CREATE_REJECT).isEnabled();
	}
	public boolean focus_tu_choi(){
		return XH(BUTTON_NAME_CREATE_REJECT).hasFocus();
	}
	// Hủy bỏ
	public void click_huy_bo(){
		clickOnElement(BUTTON_SPECIAL_CANCEL);
	}
	public boolean exist_huy_bo(){
		return isElementExistNow(BUTTON_SPECIAL_CANCEL);
	}
	public boolean enabled_huy_bo(){
		return XH(BUTTON_SPECIAL_CANCEL).isEnabled();
	}
	public boolean focus_huy_bo(){
		return XH(BUTTON_SPECIAL_CANCEL).hasFocus();
	}
	// Nhân sự
	public String nhan_su(){
		return XH(A_NAME_EMPLOYEE_ID).getText();
	}
	public boolean exist_nhan_su(){
		return isElementExistNow(A_NAME_EMPLOYEE_ID);
	}
	public boolean focus_nhan_su(){
		return XH(A_NAME_EMPLOYEE_ID).hasFocus();
	}
	// Lý do từ chối
	public void enter_ly_do_tu_choi(String sLyDoTuChoi){
		waitClearAndType(TEXTAREA_NAME_LYDO_TUCHOI , sLyDoTuChoi);
	}
	public String ly_do_tu_choi(){
		return XH(TEXTAREA_NAME_LYDO_TUCHOI).getAttribute("value");
	}
	public boolean exist_ly_do_tu_choi(){
		return isElementExistNow(TEXTAREA_NAME_LYDO_TUCHOI);
	}
	public boolean enabled_ly_do_tu_choi(){
		// return XH("//textarea[@name='lydo_tuchoi']").isEnabled();
		return !isElemenReadonly(TEXTAREA_NAME_LYDO_TUCHOI);
	}
	public boolean focus_ly_do_tu_choi(){
		return XH(TEXTAREA_NAME_LYDO_TUCHOI).hasFocus();
	}
	// END TỪ CHỐI
}
