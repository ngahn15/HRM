package hrm.pages.DangKyNghi;

import org.openqa.selenium.WebDriver;

import hrm.lib.MyPageObject;

/**
 * @author AUTO
 * @version 11/26/2019 1:43:33 AM
 */
public class TaoMoiDangKyNghiPage extends MyPageObject {
	private static final String BUTTON_SOẠN_THẢO = "//button[@name='action_draft']//span[contains(text(),'Soạn thảo')]";
	private static final String BUTTON_CREATE = "//button[@class='btn btn-secondary o_form_button_create']";
	private static final String BUTTON_EDIT = "//button[@class='btn btn-primary o_form_button_edit']";
	private static final String BUTTON_SEND_APPROVE = "//button[@name='action_send_approve']";
	private static final String BUTTON_CANCEL = "//button[@class='btn btn-secondary o_form_button_cancel']";
	private static final String BUTTON_SAVE = "//button[@class='btn btn-primary o_form_button_save']";
	private static final String INPUT_NAME_SO_NGAY_NGHI = "//input[@name='so_ngay']";
	private static final String INPUT_NAME_DATE_TO = "//div[@name='date_to']//input[@name='date_to']";
	private static final String INPUT_NAME_DATE_FROM = "//div[@name='date_from']//input[@name='date_from']";
	private static final String INPUT_NAME_KINH_GUI = "//input[@name='kinh_gui']";
	private static final String INPUT_NAME_NGHI_DI_NUOC_NGOAI = "//div[@name='nghi_di_nuoc_ngoai']//input";
	private static final String TEXTAREA_NAME_DIADIEM_NGHIPHEP = "//textarea[@name='diadiem_nghiphep']";
	private static final String TEXTAREA_NAME_LYDO = "//textarea[@name='lydo']";
	private static final String combobox_LoaiNghi = "//div[@name='holiday_status_id']//div[@class='o_input_dropdown']//input";
	private static final String ComboboxNHANSU_UYQUYEN = "//div[@name='nhansu_uyquyen']//div[@class='o_input_dropdown']//input";
	private static final String comboboxNguoiLienQuan = "//div[@name='nguoi_lien_quan']//div[@name='nguoi_lien_quan']//input";
	private static final String comboboxNguoiDuyet = "//div[@name='nguoi_duyet']//div[@class='o_input_dropdown']//input";

	public TaoMoiDangKyNghiPage(WebDriver driver) {
		super(driver);
	}

	// BEGIN TẠO MỚI ĐĂNG KÝ NGHỈ
	private final String xPathTMDKN = "";

	// Kính gửi
	public void enter_kinh_gui(String sKinhGui) {
		waitClearAndType(INPUT_NAME_KINH_GUI, sKinhGui);
	}

	public String kinh_gui() {
		return XH(INPUT_NAME_KINH_GUI).getAttribute("value");
	}

	public boolean exist_kinh_gui() {
		return isElementExistNow(INPUT_NAME_KINH_GUI);
	}

	public boolean enabled_kinh_gui() {
		return !isElemenReadonly(INPUT_NAME_KINH_GUI);
	}

	public boolean focus_kinh_gui() {
		return XH(INPUT_NAME_KINH_GUI).hasFocus();
	}

	// Người duyệt
	public void select_nguoi_duyet(String sNguoiDuyet) {
		selectSearchDDL(comboboxNguoiDuyet, sNguoiDuyet);
	}

	public String nguoi_duyet() {
		return getSelectedSearchDDLText(comboboxNguoiDuyet);
	}

	public boolean exist_nguoi_duyet() {
		return isElementExistNow(comboboxNguoiDuyet);
	}

	public boolean enabled_nguoi_duyet() {
		return XH(comboboxNguoiDuyet).isEnabled();
	}

	public boolean focus_nguoi_duyet() {
		return XH(comboboxNguoiDuyet).hasFocus();
	}

	// Lý do
	public void enter_ly_do(String sLyDo) {
		waitClearAndType(TEXTAREA_NAME_LYDO, sLyDo);
	}

	public String ly_do() {
		return XH(TEXTAREA_NAME_LYDO).getAttribute("value");
	}

	public boolean exist_ly_do() {
		return isElementExistNow(TEXTAREA_NAME_LYDO);
	}

	public boolean enabled_ly_do() {
		// return XH(TEXTAREA_NAME_LYDO).isEnabled();
		return !isElemenReadonly(TEXTAREA_NAME_LYDO);
	}

	public boolean focus_ly_do() {
		return XH(TEXTAREA_NAME_LYDO).hasFocus();
	}

	// Người liên quan
	public void select_nguoi_lien_quan(String sNguoiLienQuan) {
		selectSearchDDL(comboboxNguoiLienQuan, sNguoiLienQuan);
	}

	public String nguoi_lien_quan() {
		return getSelectedSearchDDLText(comboboxNguoiLienQuan);
	}

	public boolean exist_nguoi_lien_quan() {
		return isElementExistNow(comboboxNguoiLienQuan);
	}

	public boolean enabled_nguoi_lien_quan() {
		return XH(comboboxNguoiLienQuan).isEnabled();
	}

	public boolean focus_nguoi_lien_quan() {
		return XH(comboboxNguoiLienQuan).hasFocus();
	}

	// Địa điểm nghỉ phép
	public void enter_dia_diem_nghi_phep(String sDiaDiemNghiPhep) {
		waitClearAndType(TEXTAREA_NAME_DIADIEM_NGHIPHEP, sDiaDiemNghiPhep);
	}

	public String dia_diem_nghi_phep() {
		return XH(TEXTAREA_NAME_DIADIEM_NGHIPHEP).getAttribute("value");
	}

	public boolean exist_dia_diem_nghi_phep() {
		return isElementExistNow(TEXTAREA_NAME_DIADIEM_NGHIPHEP);
	}

	public boolean enabled_dia_diem_nghi_phep() {
		// return XH(TEXTAREA_NAME_DIADIEM_NGHIPHEP).isEnabled();
		return !isElemenReadonly(TEXTAREA_NAME_DIADIEM_NGHIPHEP);
	}

	public boolean focus_dia_diem_nghi_phep() {
		return XH(TEXTAREA_NAME_DIADIEM_NGHIPHEP).hasFocus();
	}

	// Nhân sự được ủy quyền
	public void select_nhan_su_duoc_uy_quyen(String sNhanSuDuocUyQuyen) {
		selectSearchDDL(ComboboxNHANSU_UYQUYEN, sNhanSuDuocUyQuyen);
	}

	public String nhan_su_duoc_uy_quyen() {
		return getSelectedSearchDDLText(ComboboxNHANSU_UYQUYEN);
	}

	public boolean exist_nhan_su_duoc_uy_quyen() {
		return isElementExistNow(ComboboxNHANSU_UYQUYEN);
	}

	public boolean enabled_nhan_su_duoc_uy_quyen() {
		return XH(ComboboxNHANSU_UYQUYEN).isEnabled();
	}

	public boolean focus_nhan_su_duoc_uy_quyen() {
		return XH(ComboboxNHANSU_UYQUYEN).hasFocus();
	}

	// Nghỉ đi nước ngoài
	public void set_nghi_di_nuoc_ngoai(String sNghiDiNuocNgoai) {
		setChkbox(INPUT_NAME_NGHI_DI_NUOC_NGOAI, sNghiDiNuocNgoai);
	}

	public boolean nghi_di_nuoc_ngoai() {
		return XH(INPUT_NAME_NGHI_DI_NUOC_NGOAI).isSelected();
	}

	public boolean exist_nghi_di_nuoc_ngoai() {
		return isElementExistNow(INPUT_NAME_NGHI_DI_NUOC_NGOAI);
	}

	public boolean enabled_nghi_di_nuoc_ngoai() {
		return XH(INPUT_NAME_NGHI_DI_NUOC_NGOAI).isEnabled();
	}

	public boolean focus_nghi_di_nuoc_ngoai() {
		return XH(INPUT_NAME_NGHI_DI_NUOC_NGOAI).hasFocus();
	}

	// Loại nghỉ
	public void select_loai_nghi(String sLoaiNghi) {
		selectSearchDDL(combobox_LoaiNghi, sLoaiNghi);
	}

	public String loai_nghi() {
		return getSelectedSearchDDLText(combobox_LoaiNghi);
	}

	public boolean exist_loai_nghi() {
		return isElementExistNow(combobox_LoaiNghi);
	}

	public boolean enabled_loai_nghi() {
		return XH(combobox_LoaiNghi).isEnabled();
	}

	public boolean focus_loai_nghi() {
		return XH(combobox_LoaiNghi).hasFocus();
	}

	// Từ ngày
	public void enter_tu_ngay(String sTuNgay) {
		waitClearAndTypeThenTab(INPUT_NAME_DATE_FROM, sTuNgay);
	}

	public String tu_ngay() {
		return XH(INPUT_NAME_DATE_FROM).getAttribute("value");
	}

	public boolean exist_tu_ngay() {
		return isElementExistNow(INPUT_NAME_DATE_FROM);
	}

	public boolean enabled_tu_ngay() {
		return XH(INPUT_NAME_DATE_FROM).isEnabled();
	}

	public boolean focus_tu_ngay() {
		return XH(INPUT_NAME_DATE_FROM).hasFocus();
	}

	public void pick_tu_ngay(String sTuNgay) {
		pickCalendar("Từ ngày", sTuNgay);
	}

	public String calendar_tu_ngay() {
		return getCalendar("Từ ngày");
	}

	public boolean exist_calendar_tu_ngay() {
		return isElementExistNow(INPUT_NAME_DATE_FROM);
	}

	public boolean enabled_calendar_tu_ngay() {
		return XH(INPUT_NAME_DATE_FROM).isEnabled();
	}

	public boolean focus_calendar_tu_ngay() {
		return XH(INPUT_NAME_DATE_FROM).hasFocus();
	}

	// Đến ngày
	public void enter_den_ngay(String sDenNgay) {
		waitClearAndTypeThenTab(INPUT_NAME_DATE_TO, sDenNgay);
	}

	public String den_ngay() {
		return XH(INPUT_NAME_DATE_TO).getAttribute("value");
	}

	public boolean exist_den_ngay() {
		return isElementExistNow(INPUT_NAME_DATE_TO);
	}

	public boolean enabled_den_ngay() {
		return XH(INPUT_NAME_DATE_TO).isEnabled();
	}

	public boolean focus_den_ngay() {
		return XH(INPUT_NAME_DATE_TO).hasFocus();
	}

	public void pick_den_ngay(String sDenNgay) {
		pickCalendar("Đến ngày", sDenNgay);
	}

	public String calendar_den_ngay() {
		return getCalendar("Đến ngày");
	}

	public boolean exist_calendar_den_ngay() {
		return isElementExistNow(INPUT_NAME_DATE_TO);
	}

	public boolean enabled_calendar_den_ngay() {
		return XH(INPUT_NAME_DATE_TO).isEnabled();
	}

	public boolean focus_calendar_den_ngay() {
		return XH(INPUT_NAME_DATE_TO).hasFocus();
	}

	// Số ngày nghỉ
	public void enter_so_ngay_nghi(String sSoNgayNghi) {
		waitClearAndType(INPUT_NAME_SO_NGAY_NGHI, sSoNgayNghi);
	}

	public String so_ngay_nghi() {
		return XH(INPUT_NAME_SO_NGAY_NGHI).getAttribute("value");
	}

	public boolean exist_so_ngay_nghi() {
		return isElementExistNow(INPUT_NAME_SO_NGAY_NGHI);
	}

	public boolean enabled_so_ngay_nghi() {
		// return XH(INPUT_NAME_SO_NGAY_NGHI).isEnabled();
		return !isElemenReadonly(INPUT_NAME_SO_NGAY_NGHI);
	}

	public boolean focus_so_ngay_nghi() {
		return XH(INPUT_NAME_SO_NGAY_NGHI).hasFocus();
	}

	// Lưu
	public void click_luu() {
		clickOnElement(BUTTON_SAVE);
	}

	public boolean exist_luu() {
		return isElementExistNow(BUTTON_SAVE);
	}

	public boolean enabled_luu() {
		return XH(BUTTON_SAVE).isEnabled();
	}

	public boolean focus_luu() {
		return XH(BUTTON_SAVE).hasFocus();
	}

	// Hủy bỏ
	public void click_huy_bo() {
		clickOnElement(BUTTON_CANCEL);
	}

	public boolean exist_huy_bo() {
		return isElementExistNow(BUTTON_CANCEL);
	}

	public boolean enabled_huy_bo() {
		return XH(BUTTON_CANCEL).isEnabled();
	}

	public boolean focus_huy_bo() {
		return XH(BUTTON_CANCEL).hasFocus();
	}

	// Gửi xác nhận
	public void click_gui_phe_duyet() {
		clickOnElement(BUTTON_SEND_APPROVE);
	}

	public boolean exist_gui_phe_duyet() {
		return isElementExistNow(BUTTON_SEND_APPROVE);
	}

	public boolean enabled_gui_phe_duyet() {
		return XH(BUTTON_SEND_APPROVE).isEnabled();
	}

	public boolean focus_gui_phe_duyet() {
		return XH(BUTTON_SEND_APPROVE).hasFocus();
	}

	// Sửa
	public void click_sua() {
		clickOnElement(BUTTON_EDIT);
	}

	public boolean exist_sua() {
		return isElementExistNow(BUTTON_EDIT);
	}

	public boolean enabled_sua() {
		return XH(BUTTON_EDIT).isEnabled();
	}

	public boolean focus_sua() {
		return XH(BUTTON_EDIT).hasFocus();
	}

	// Tạo
	public void click_tao() {
		clickOnElement(BUTTON_CREATE);
	}

	public boolean exist_tao() {
		return isElementExistNow(BUTTON_CREATE);
	}

	public boolean enabled_tao() {
		return XH(BUTTON_CREATE).isEnabled();
	}

	public boolean focus_tao() {
		return XH(BUTTON_CREATE).hasFocus();
	}

	// Soạn thảo
	public void click_soan_thao() {
		clickOnElement(BUTTON_SOẠN_THẢO);
	}

	public boolean exist_soan_thao() {
		return isElementExistNow(BUTTON_SOẠN_THẢO);
	}

	public boolean enabled_soan_thao() {
		return XH(BUTTON_SOẠN_THẢO).isEnabled();
	}

	public boolean focus_soan_thao() {
		return XH(BUTTON_SOẠN_THẢO).hasFocus();
	}
	// END TẠO MỚI ĐĂNG KÝ NGHỈ
}
