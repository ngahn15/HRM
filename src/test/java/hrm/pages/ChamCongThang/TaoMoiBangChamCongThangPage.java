package hrm.pages.ChamCongThang;

import org.openqa.selenium.WebDriver;

import hrm.lib.MyPageObject;

/**
 * @author AUTO
 * @version 12/1/2019 5:01:33 PM
 */
public class TaoMoiBangChamCongThangPage extends MyPageObject {
	public TaoMoiBangChamCongThangPage(WebDriver driver) {
		super(driver);
	}

	// BEGIN TẠO MỚI BẢNG CHẤM CÔNG THÁNG
	private final String xPathTMBCCT = "";

	// Lưu
	public void click_luu() {
		clickOnElement("//button[@class='btn btn-primary o_form_button_save']");
	}

	public boolean exist_luu() {
		return isElementExistNow("//button[@class='btn btn-primary o_form_button_save']");
	}

	public boolean enabled_luu() {
		return XH("//button[@class='btn btn-primary o_form_button_save']").isEnabled();
	}

	public boolean focus_luu() {
		return XH("//button[@class='btn btn-primary o_form_button_save']").hasFocus();
	}

	// Hủy bỏ
	public void click_huy_bo() {
		clickOnElement("//button[@class='btn btn-secondary o_form_button_cancel']");
	}

	public boolean exist_huy_bo() {
		return isElementExistNow("//button[@class='btn btn-secondary o_form_button_cancel']");
	}

	public boolean enabled_huy_bo() {
		return XH("//button[@class='btn btn-secondary o_form_button_cancel']").isEnabled();
	}

	public boolean focus_huy_bo() {
		return XH("//button[@class='btn btn-secondary o_form_button_cancel']").hasFocus();
	}

	// Xác nhận
	public void click_xac_nhan() {
		clickOnElement("//button[@name='action_confirmed']");
	}

	public boolean exist_xac_nhan() {
		return isElementExistNow("//button[@name='action_confirmed']");
	}

	public boolean enabled_xac_nhan() {
		return XH("//button[@name='action_confirmed']").isEnabled();
	}

	public boolean focus_xac_nhan() {
		return XH("//button[@name='action_confirmed']").hasFocus();
	}

	// Cập nhật ngày nghỉ
	public void click_cap_nhat_ngay_nghi() {
		clickOnElement("//button[@name='action_update_holidays']");
	}

	public boolean exist_cap_nhat_ngay_nghi() {
		return isElementExistNow("//button[@name='action_update_holidays']");
	}

	public boolean enabled_cap_nhat_ngay_nghi() {
		return XH("//button[@name='action_update_holidays']").isEnabled();
	}

	public boolean focus_cap_nhat_ngay_nghi() {
		return XH("//button[@name='action_update_holidays']").hasFocus();
	}

	// Đơn vị
	public void select_don_vi(String sDonVi) {
		selectSearchDDL("//div[@name='department_id']//input", sDonVi);
	}

	public String don_vi() {
		return getSelectedSearchDDLText("//div[@name='department_id']//input");
	}

	public boolean exist_don_vi() {
		return isElementExistNow("//div[@name='department_id']//input");
	}

	public boolean enabled_don_vi() {
		return XH("//div[@name='department_id']//input").isEnabled();
	}

	public boolean focus_don_vi() {
		return XH("//div[@name='department_id']//input").hasFocus();
	}

	// Import dữ liệu
	public void set_import_du_lieu(String sImportDuLieu) {
		setChkbox("//div[@name='is_import']", sImportDuLieu);
		waitForEverythingComplete(3);
	}

	public boolean import_du_lieu() {
		return XH("//div[@name='is_import']").isSelected();
	}

	public boolean exist_import_du_lieu() {
		return isElementExistNow("//div[@name='is_import']");
	}

	public boolean enabled_import_du_lieu() {
		return XH("//div[@name='is_import']").isEnabled();
	}

	public boolean focus_import_du_lieu() {
		return XH("//div[@name='is_import']").hasFocus();
	}

	// Tải lên tệp tin của bạn
	public void click_tai_len_tep_tin_cua_ban(String sDir) {
		if ($("//button[@class='btn btn-primary o_select_file_button']").isVisible()) {
			clickOnElement("//button[@class='btn btn-primary o_select_file_button']");
		} else {
			clickOnElement("//button[@class='btn btn-secondary fa fa-pencil o_select_file_button']");
		}
		uploadFile(sDir);
	}

	public boolean exist_tai_len_tep_tin_cua_ban() {
		return isElementExistNow("//input[@name='vnpt_file']");
	}

	public boolean enabled_tai_len_tep_tin_cua_ban() {
		return XH("//input[@name='vnpt_file']").isEnabled();
	}

	public boolean focus_tai_len_tep_tin_cua_ban() {
		return XH("//input[@name='vnpt_file']").hasFocus();
	}

	// Tải dữ liệu chấm công
	public void click_tai_du_lieu_cham_cong() {
		clickOnElement("//button[@name='action_load_data']");
	}

	public boolean exist_tai_du_lieu_cham_cong() {
		return isElementExistNow("//button[@name='action_load_data']");
	}

	public boolean enabled_tai_du_lieu_cham_cong() {
		return XH("//button[@name='action_load_data']").isEnabled();
	}

	public boolean focus_tai_du_lieu_cham_cong() {
		return XH("//button[@name='action_load_data']").hasFocus();
	}

	// Sửa
	public void click_sua() {
		clickOnElement("//button[@class='btn btn-secondary fa fa-pencil o_select_file_button']");
	}

	public boolean exist_sua() {
		return isElementExistNow("//button[@class='btn btn-secondary fa fa-pencil o_select_file_button']");
	}

	public boolean enabled_sua() {
		return XH("//button[@class='btn btn-secondary fa fa-pencil o_select_file_button']").isEnabled();
	}

	public boolean focus_sua() {
		return XH("//button[@class='btn btn-secondary fa fa-pencil o_select_file_button']").hasFocus();
	}

	// Xóa
	public void click_xoa() {
		clickOnElement("//button[@class='btn btn-secondary fa fa-trash-o o_clear_file_button']");
	}

	public boolean exist_xoa() {
		return isElementExistNow("//button[@class='btn btn-secondary fa fa-trash-o o_clear_file_button']");
	}

	public boolean enabled_xoa() {
		return XH("//button[@class='btn btn-secondary fa fa-trash-o o_clear_file_button']").isEnabled();
	}

	public boolean focus_xoa() {
		return XH("//button[@class='btn btn-secondary fa fa-trash-o o_clear_file_button']").hasFocus();
	}
	// END TẠO MỚI BẢNG CHẤM CÔNG THÁNG
}
