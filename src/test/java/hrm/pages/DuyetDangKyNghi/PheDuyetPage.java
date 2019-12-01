package hrm.pages.DuyetDangKyNghi;

import org.openqa.selenium.WebDriver;

import hrm.lib.MyPageObject;

/**
 * @author AUTO
 * @version 12/1/2019 1:47:55 PM
 */
public class PheDuyetPage extends MyPageObject {
	private static final String checkbox_phe_duyet_lan_2 = "//div[@name='is_duyetcap2_display']//input[@type='checkbox']";
	private static final String A_NAME_EMPLOYEE_ID = "//a[@name='employee_id']";
	private static final String BUTTON_SPECIAL_CANCEL = "//button[@class='btn btn-link' and @special='cancel']";
	private static final String BUTTON_NAME_CREATE_APPROVE2 = "//button[@name='create_approve2']";
	public PheDuyetPage(WebDriver driver) {
		super(driver);
	}
	// BEGIN PHÊ DUYỆT
	private final String xPathPD = "";
	// Phê duyệt
	public void click_phe_duyet(){
		clickOnElement(BUTTON_NAME_CREATE_APPROVE2);
		waitForEverythingComplete(10);
		try {
			Thread.sleep(500);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public boolean exist_phe_duyet(){
		return isElementExistNow(BUTTON_NAME_CREATE_APPROVE2);
	}
	public boolean enabled_phe_duyet(){
		return XH(BUTTON_NAME_CREATE_APPROVE2).isEnabled();
	}
	public boolean focus_phe_duyet(){
		return XH(BUTTON_NAME_CREATE_APPROVE2).hasFocus();
	}
	// Hủy bỏ
	public void click_huy_bo(){
		clickBtn(xPathPD, "Hủy bỏ");
	}
	public boolean exist_huy_bo(){
		return isElementExistNow(xPathBtn(xPathPD, "Hủy bỏ"));
	}
	public boolean enabled_huy_bo(){
		return XH(xPathBtn(xPathPD, "Hủy bỏ")).isEnabled();
	}
	public boolean focus_huy_bo(){
		return XH(xPathBtn(xPathPD, "Hủy bỏ")).hasFocus();
	}
	// Nhân sự
	public String nhan_su(){
		return XH(BUTTON_SPECIAL_CANCEL).getText();
	}
	public boolean exist_nhan_su(){
		return isElementExistNow(BUTTON_SPECIAL_CANCEL);
	}
	public boolean focus_nhan_su(){
		return XH(BUTTON_SPECIAL_CANCEL).hasFocus();
	}
	// Người phê duyệt lần 2
	public void select_nguoi_phe_duyet_lan_2(String sNguoiPheDuyetLan2){
		selectSearchDDL(A_NAME_EMPLOYEE_ID, sNguoiPheDuyetLan2);
	}
	public String nguoi_phe_duyet_lan_2(){
		return getSelectedSearchDDLText(A_NAME_EMPLOYEE_ID);
	}
	public boolean exist_nguoi_phe_duyet_lan_2(){
		return isElementExistNow(A_NAME_EMPLOYEE_ID);
	}
	public boolean enabled_nguoi_phe_duyet_lan_2(){
		return XH(A_NAME_EMPLOYEE_ID).isEnabled();
	}
	public boolean focus_nguoi_phe_duyet_lan_2(){
		return XH(A_NAME_EMPLOYEE_ID).hasFocus();
	}
	// Duyệt lần 2
	public void set_duyet_lan_2(String sDuyetLan2){
		setChkbox(checkbox_phe_duyet_lan_2, sDuyetLan2);
	}
	
	public void uncheck_duyet_lan_2(){
		uncheckChkbox(checkbox_phe_duyet_lan_2);
	}
	
	public boolean duyet_lan_2(){
		return XH(checkbox_phe_duyet_lan_2).isSelected();
	}
	public boolean exist_duyet_lan_2(){
		return isElementExistNow(checkbox_phe_duyet_lan_2);
	}
	public boolean enabled_duyet_lan_2(){
		return XH(checkbox_phe_duyet_lan_2).isEnabled();
	}
	public boolean focus_duyet_lan_2(){
		return XH(checkbox_phe_duyet_lan_2).hasFocus();
	}
	// END PHÊ DUYỆT
}
