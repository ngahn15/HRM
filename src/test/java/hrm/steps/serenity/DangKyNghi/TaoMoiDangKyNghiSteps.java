package hrm.steps.serenity.DangKyNghi;

import hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage;
import net.thucydides.core.annotations.Step;

/**
 * @author AUTO
 * @version 11/26/2019 1:43:33 AM
 */
public class TaoMoiDangKyNghiSteps {
	TaoMoiDangKyNghiPage TMDKNPage;

	// BEGIN TẠO MỚI ĐĂNG KÝ NGHỈ
	// Kính gửi
	@Step
	public void enter_kinh_gui(String sKinhGui) {
		TMDKNPage.enter_kinh_gui(sKinhGui);
	}

	@Step
	public String kinh_gui() {
		return TMDKNPage.kinh_gui();
	}

	@Step
	public boolean exist_kinh_gui() {
		return TMDKNPage.exist_kinh_gui();
	}

	@Step
	public boolean enabled_kinh_gui() {
		return TMDKNPage.enabled_kinh_gui();
	}

	@Step
	public boolean focus_kinh_gui() {
		return TMDKNPage.focus_kinh_gui();
	}

	// Người duyệt
	@Step
	public void select_nguoi_duyet(String sNguoiDuyet) {
		TMDKNPage.select_nguoi_duyet(sNguoiDuyet);
	}

	@Step
	public String nguoi_duyet() {
		return TMDKNPage.nguoi_duyet();
	}

	@Step
	public boolean exist_nguoi_duyet() {
		return TMDKNPage.exist_nguoi_duyet();
	}

	@Step
	public boolean enabled_nguoi_duyet() {
		return TMDKNPage.enabled_nguoi_duyet();
	}

	@Step
	public boolean focus_nguoi_duyet() {
		return TMDKNPage.focus_nguoi_duyet();
	}

	// Lý do
	@Step
	public void enter_ly_do(String sLyDo) {
		TMDKNPage.enter_ly_do(sLyDo);
	}

	@Step
	public String ly_do() {
		return TMDKNPage.ly_do();
	}

	@Step
	public boolean exist_ly_do() {
		return TMDKNPage.exist_ly_do();
	}

	@Step
	public boolean enabled_ly_do() {
		return TMDKNPage.enabled_ly_do();
	}

	@Step
	public boolean focus_ly_do() {
		return TMDKNPage.focus_ly_do();
	}

	// Loại nghỉ
	@Step
	public void select_loai_nghi(String sLoaiNghi) {
		TMDKNPage.select_loai_nghi(sLoaiNghi);
	}

	@Step
	public String loai_nghi() {
		return TMDKNPage.loai_nghi();
	}

	@Step
	public boolean exist_loai_nghi() {
		return TMDKNPage.exist_loai_nghi();
	}

	@Step
	public boolean enabled_loai_nghi() {
		return TMDKNPage.enabled_loai_nghi();
	}

	@Step
	public boolean focus_loai_nghi() {
		return TMDKNPage.focus_loai_nghi();
	}

	// Từ ngày
	@Step
	public void enter_tu_ngay(String sTuNgay) {
		TMDKNPage.enter_tu_ngay(sTuNgay);
	}

	@Step
	public String tu_ngay() {
		return TMDKNPage.tu_ngay();
	}

	@Step
	public boolean exist_tu_ngay() {
		return TMDKNPage.exist_tu_ngay();
	}

	@Step
	public boolean enabled_tu_ngay() {
		return TMDKNPage.enabled_tu_ngay();
	}

	@Step
	public boolean focus_tu_ngay() {
		return TMDKNPage.focus_tu_ngay();
	}

	@Step
	public void pick_tu_ngay(String sTuNgay) {
		TMDKNPage.pick_tu_ngay(sTuNgay);
	}

	@Step
	public String calendar_tu_ngay() {
		return TMDKNPage.calendar_tu_ngay();
	}

	@Step
	public boolean exist_calendar_tu_ngay() {
		return TMDKNPage.exist_calendar_tu_ngay();
	}

	@Step
	public boolean enabled_calendar_tu_ngay() {
		return TMDKNPage.enabled_calendar_tu_ngay();
	}

	@Step
	public boolean focus_calendar_tu_ngay() {
		return TMDKNPage.focus_calendar_tu_ngay();
	}

	// Đến ngày
	@Step
	public void enter_den_ngay(String sDenNgay) {
		TMDKNPage.enter_den_ngay(sDenNgay);
	}

	@Step
	public String den_ngay() {
		return TMDKNPage.den_ngay();
	}

	@Step
	public boolean exist_den_ngay() {
		return TMDKNPage.exist_den_ngay();
	}

	@Step
	public boolean enabled_den_ngay() {
		return TMDKNPage.enabled_den_ngay();
	}

	@Step
	public boolean focus_den_ngay() {
		return TMDKNPage.focus_den_ngay();
	}

	@Step
	public void pick_den_ngay(String sDenNgay) {
		TMDKNPage.pick_den_ngay(sDenNgay);
	}

	@Step
	public String calendar_den_ngay() {
		return TMDKNPage.calendar_den_ngay();
	}

	@Step
	public boolean exist_calendar_den_ngay() {
		return TMDKNPage.exist_calendar_den_ngay();
	}

	@Step
	public boolean enabled_calendar_den_ngay() {
		return TMDKNPage.enabled_calendar_den_ngay();
	}

	@Step
	public boolean focus_calendar_den_ngay() {
		return TMDKNPage.focus_calendar_den_ngay();
	}

	// Số ngày nghỉ
	@Step
	public void enter_so_ngay_nghi(String sSoNgayNghi) {
		TMDKNPage.enter_so_ngay_nghi(sSoNgayNghi);
	}

	@Step
	public String so_ngay_nghi() {
		return TMDKNPage.so_ngay_nghi();
	}

	@Step
	public boolean exist_so_ngay_nghi() {
		return TMDKNPage.exist_so_ngay_nghi();
	}

	@Step
	public boolean enabled_so_ngay_nghi() {
		return TMDKNPage.enabled_so_ngay_nghi();
	}

	@Step
	public boolean focus_so_ngay_nghi() {
		return TMDKNPage.focus_so_ngay_nghi();
	}

	// Lưu
	@Step
	public void click_luu() {
		TMDKNPage.click_luu();
	}

	@Step
	public boolean exist_luu() {
		return TMDKNPage.exist_luu();
	}

	@Step
	public boolean enabled_luu() {
		return TMDKNPage.enabled_luu();
	}

	@Step
	public boolean focus_luu() {
		return TMDKNPage.focus_luu();
	}

	// Hủy bỏ
	@Step
	public void click_huy_bo() {
		TMDKNPage.click_huy_bo();
	}

	@Step
	public boolean exist_huy_bo() {
		return TMDKNPage.exist_huy_bo();
	}

	@Step
	public boolean enabled_huy_bo() {
		return TMDKNPage.enabled_huy_bo();
	}

	@Step
	public boolean focus_huy_bo() {
		return TMDKNPage.focus_huy_bo();
	}

	// Gửi xác nhận
	@Step
	public void click_gui_phe_duyet() {
		TMDKNPage.click_gui_phe_duyet();
	}

	@Step
	public boolean exist_gui_phe_duyet() {
		return TMDKNPage.exist_gui_phe_duyet();
	}

	@Step
	public boolean enabled_gui_phe_duyet() {
		return TMDKNPage.enabled_gui_phe_duyet();
	}

	@Step
	public boolean focus_gui_phe_duyet() {
		return TMDKNPage.focus_gui_phe_duyet();
	}

	// Sửa
	@Step
	public void click_sua() {
		TMDKNPage.click_sua();
	}

	@Step
	public boolean exist_sua() {
		return TMDKNPage.exist_sua();
	}

	@Step
	public boolean enabled_sua() {
		return TMDKNPage.enabled_sua();
	}

	@Step
	public boolean focus_sua() {
		return TMDKNPage.focus_sua();
	}

	// Tạo
	@Step
	public void click_tao() {
		TMDKNPage.click_tao();
	}

	@Step
	public boolean exist_tao() {
		return TMDKNPage.exist_tao();
	}

	@Step
	public boolean enabled_tao() {
		return TMDKNPage.enabled_tao();
	}

	@Step
	public boolean focus_tao() {
		return TMDKNPage.focus_tao();
	}

	// Soạn thảo
	@Step
	public void click_soan_thao() {
		TMDKNPage.click_soan_thao();
	}

	@Step
	public boolean exist_soan_thao() {
		return TMDKNPage.exist_soan_thao();
	}

	@Step
	public boolean enabled_soan_thao() {
		return TMDKNPage.enabled_soan_thao();
	}

	@Step
	public boolean focus_soan_thao() {
		return TMDKNPage.focus_soan_thao();
	}
	// END TẠO MỚI ĐĂNG KÝ NGHỈ
}
