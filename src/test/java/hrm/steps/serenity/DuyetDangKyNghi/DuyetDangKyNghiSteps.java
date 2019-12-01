package hrm.steps.serenity.DuyetDangKyNghi;

import hrm.pages.DuyetDangKyNghi.DuyetDangKyNghiPage;
import net.thucydides.core.annotations.Step;

/**
 * @author AUTO
 * @version 12/1/2019 12:40:38 AM
 */
public class DuyetDangKyNghiSteps {
	DuyetDangKyNghiPage DDKNPage;

	// BEGIN DUYỆT ĐĂNG KÝ NGHỈ
	// Tìm kiếm
	@Step
	public void select_tim_kiem(String sTimKiem) {
		DDKNPage.select_tim_kiem(sTimKiem);
	}

	@Step
	public String tim_kiem() {
		return DDKNPage.tim_kiem();
	}

	@Step
	public boolean exist_tim_kiem() {
		return DDKNPage.exist_tim_kiem();
	}

	@Step
	public boolean enabled_tim_kiem() {
		return DDKNPage.enabled_tim_kiem();
	}

	@Step
	public boolean focus_tim_kiem() {
		return DDKNPage.focus_tim_kiem();
	}

	// Các bộ lọc
	@Step
	public void select_cac_bo_loc(String sCacBoLoc) {
		DDKNPage.select_cac_bo_loc(sCacBoLoc);
	}

	@Step
	public String cac_bo_loc() {
		return DDKNPage.cac_bo_loc();
	}

	@Step
	public boolean exist_cac_bo_loc() {
		return DDKNPage.exist_cac_bo_loc();
	}

	@Step
	public boolean enabled_cac_bo_loc() {
		return DDKNPage.enabled_cac_bo_loc();
	}

	@Step
	public boolean focus_cac_bo_loc() {
		return DDKNPage.focus_cac_bo_loc();
	}

	// Nhóm theo
	@Step
	public void select_nhom_theo(String sNhomTheo) {
		DDKNPage.select_nhom_theo(sNhomTheo);
	}

	@Step
	public String nhom_theo() {
		return DDKNPage.nhom_theo();
	}

	@Step
	public boolean exist_nhom_theo() {
		return DDKNPage.exist_nhom_theo();
	}

	@Step
	public boolean enabled_nhom_theo() {
		return DDKNPage.enabled_nhom_theo();
	}

	@Step
	public boolean focus_nhom_theo() {
		return DDKNPage.focus_nhom_theo();
	}

	// Yêu thích
	@Step
	public void select_yeu_thich(String sYeuThich) {
		DDKNPage.select_yeu_thich(sYeuThich);
	}

	@Step
	public String yeu_thich() {
		return DDKNPage.yeu_thich();
	}

	@Step
	public boolean exist_yeu_thich() {
		return DDKNPage.exist_yeu_thich();
	}

	@Step
	public boolean enabled_yeu_thich() {
		return DDKNPage.enabled_yeu_thich();
	}

	@Step
	public boolean focus_yeu_thich() {
		return DDKNPage.focus_yeu_thich();
	}

	// Lưới hiển thị thông tin đăng ký nghỉ
	// BEGIN LƯỚI HIỂN THỊ THÔNG TIN ĐĂNG KÝ NGHỈ
	// Page
	@Step
	public boolean lhtttdkn_go_to_tb_page(String sPage) {
		return DDKNPage.lhtttdkn_go_to_tb_page(sPage);
	}

	@Step
	public boolean exist_lhtttdkn_page() {
		return DDKNPage.exist_lhtttdkn_page();
	}

	// Page Size
	@Step
	public String lhtttdkn_set_tb_page_size(String sPageSize) {
		return DDKNPage.lhtttdkn_set_tb_page_size(sPageSize);
	}

	@Step
	public boolean exist_lhtttdkn_page_size() {
		return DDKNPage.exist_lhtttdkn_page_size();
	}

	// Total current record
	@Step
	public int lhtttdkn_records_in_current_page() {
		return DDKNPage.lhtttdkn_records_in_current_page();
	}

	// Add new row
	@Step
	public String lhtttdkn_add_row(String sRow) {
		return DDKNPage.lhtttdkn_add_row(sRow);
	}

	// Remove row
	@Step
	public String lhtttdkn_remove_row(String sRow) {
		return DDKNPage.lhtttdkn_remove_row(sRow);
	}

	// Nhân sự
	@Step
	public void click_on_lhtttdkn_nhan_su(int rowIndex) {
		DDKNPage.click_on_lhtttdkn_nhan_su(rowIndex);
	}

	@Step
	public void filter_lhtttdkn_nhan_su(String sNhanSu) {
		DDKNPage.filter_lhtttdkn_nhan_su(sNhanSu);
	}

	@Step
	public void order_lhtttdkn_nhan_su(String sNhanSu) {
		DDKNPage.order_lhtttdkn_nhan_su(sNhanSu);
	}

	@Step
	public int row_index_lhtttdkn_nhan_su(String sNhanSu) {
		return DDKNPage.row_index_lhtttdkn_nhan_su(sNhanSu);
	}

	@Step
	public String text_lhtttdkn_nhan_su(int rowIndex) {
		return DDKNPage.text_lhtttdkn_nhan_su(rowIndex);
	}

	@Step
	public int index_lhtttdkn_nhan_su() {
		return DDKNPage.index_lhtttdkn_nhan_su();
	}

	// Đơn vị / Phong ban
	@Step
	public void click_on_lhtttdkn_don_vi_phong_ban(int rowIndex) {
		DDKNPage.click_on_lhtttdkn_don_vi_phong_ban(rowIndex);
	}

	@Step
	public void filter_lhtttdkn_don_vi_phong_ban(String sDonViPhongBan) {
		DDKNPage.filter_lhtttdkn_don_vi_phong_ban(sDonViPhongBan);
	}

	@Step
	public void order_lhtttdkn_don_vi_phong_ban(String sDonViPhongBan) {
		DDKNPage.order_lhtttdkn_don_vi_phong_ban(sDonViPhongBan);
	}

	@Step
	public int row_index_lhtttdkn_don_vi_phong_ban(String sDonViPhongBan) {
		return DDKNPage.row_index_lhtttdkn_don_vi_phong_ban(sDonViPhongBan);
	}

	@Step
	public String text_lhtttdkn_don_vi_phong_ban(int rowIndex) {
		return DDKNPage.text_lhtttdkn_don_vi_phong_ban(rowIndex);
	}

	@Step
	public int index_lhtttdkn_don_vi_phong_ban() {
		return DDKNPage.index_lhtttdkn_don_vi_phong_ban();
	}

	// Ngày bắt đầu
	@Step
	public void click_on_lhtttdkn_ngay_bat_dau(int rowIndex) {
		DDKNPage.click_on_lhtttdkn_ngay_bat_dau(rowIndex);
	}

	@Step
	public void filter_lhtttdkn_ngay_bat_dau(String sNgayBatDau) {
		DDKNPage.filter_lhtttdkn_ngay_bat_dau(sNgayBatDau);
	}

	@Step
	public void order_lhtttdkn_ngay_bat_dau(String sNgayBatDau) {
		DDKNPage.order_lhtttdkn_ngay_bat_dau(sNgayBatDau);
	}

	@Step
	public int row_index_lhtttdkn_ngay_bat_dau(String sNgayBatDau) {
		return DDKNPage.row_index_lhtttdkn_ngay_bat_dau(sNgayBatDau);
	}

	@Step
	public String text_lhtttdkn_ngay_bat_dau(int rowIndex) {
		return DDKNPage.text_lhtttdkn_ngay_bat_dau(rowIndex);
	}

	@Step
	public int index_lhtttdkn_ngay_bat_dau() {
		return DDKNPage.index_lhtttdkn_ngay_bat_dau();
	}

	// Ngày kết thúc
	@Step
	public void click_on_lhtttdkn_ngay_ket_thuc(int rowIndex) {
		DDKNPage.click_on_lhtttdkn_ngay_ket_thuc(rowIndex);
	}

	@Step
	public void filter_lhtttdkn_ngay_ket_thuc(String sNgayKetThuc) {
		DDKNPage.filter_lhtttdkn_ngay_ket_thuc(sNgayKetThuc);
	}

	@Step
	public void order_lhtttdkn_ngay_ket_thuc(String sNgayKetThuc) {
		DDKNPage.order_lhtttdkn_ngay_ket_thuc(sNgayKetThuc);
	}

	@Step
	public int row_index_lhtttdkn_ngay_ket_thuc(String sNgayKetThuc) {
		return DDKNPage.row_index_lhtttdkn_ngay_ket_thuc(sNgayKetThuc);
	}

	@Step
	public String text_lhtttdkn_ngay_ket_thuc(int rowIndex) {
		return DDKNPage.text_lhtttdkn_ngay_ket_thuc(rowIndex);
	}

	@Step
	public int index_lhtttdkn_ngay_ket_thuc() {
		return DDKNPage.index_lhtttdkn_ngay_ket_thuc();
	}

	// Lý do nghỉ
	@Step
	public void click_on_lhtttdkn_ly_do_nghi(int rowIndex) {
		DDKNPage.click_on_lhtttdkn_ly_do_nghi(rowIndex);
	}

	@Step
	public void filter_lhtttdkn_ly_do_nghi(String sLyDoNghi) {
		DDKNPage.filter_lhtttdkn_ly_do_nghi(sLyDoNghi);
	}

	@Step
	public void order_lhtttdkn_ly_do_nghi(String sLyDoNghi) {
		DDKNPage.order_lhtttdkn_ly_do_nghi(sLyDoNghi);
	}

	@Step
	public int row_index_lhtttdkn_ly_do_nghi(String sLyDoNghi) {
		return DDKNPage.row_index_lhtttdkn_ly_do_nghi(sLyDoNghi);
	}

	@Step
	public String text_lhtttdkn_ly_do_nghi(int rowIndex) {
		return DDKNPage.text_lhtttdkn_ly_do_nghi(rowIndex);
	}

	@Step
	public int index_lhtttdkn_ly_do_nghi() {
		return DDKNPage.index_lhtttdkn_ly_do_nghi();
	}

	// Số ngày nghỉ
	@Step
	public void click_on_lhtttdkn_so_ngay_nghi(int rowIndex) {
		DDKNPage.click_on_lhtttdkn_so_ngay_nghi(rowIndex);
	}

	@Step
	public void filter_lhtttdkn_so_ngay_nghi(String sSoNgayNghi) {
		DDKNPage.filter_lhtttdkn_so_ngay_nghi(sSoNgayNghi);
	}

	@Step
	public void order_lhtttdkn_so_ngay_nghi(String sSoNgayNghi) {
		DDKNPage.order_lhtttdkn_so_ngay_nghi(sSoNgayNghi);
	}

	@Step
	public int row_index_lhtttdkn_so_ngay_nghi(String sSoNgayNghi) {
		return DDKNPage.row_index_lhtttdkn_so_ngay_nghi(sSoNgayNghi);
	}

	@Step
	public String text_lhtttdkn_so_ngay_nghi(int rowIndex) {
		return DDKNPage.text_lhtttdkn_so_ngay_nghi(rowIndex);
	}

	@Step
	public int index_lhtttdkn_so_ngay_nghi() {
		return DDKNPage.index_lhtttdkn_so_ngay_nghi();
	}

	// Người duyệt
	@Step
	public void click_on_lhtttdkn_nguoi_duyet(int rowIndex) {
		DDKNPage.click_on_lhtttdkn_nguoi_duyet(rowIndex);
	}

	@Step
	public void filter_lhtttdkn_nguoi_duyet(String sNguoiDuyet) {
		DDKNPage.filter_lhtttdkn_nguoi_duyet(sNguoiDuyet);
	}

	@Step
	public void order_lhtttdkn_nguoi_duyet(String sNguoiDuyet) {
		DDKNPage.order_lhtttdkn_nguoi_duyet(sNguoiDuyet);
	}

	@Step
	public int row_index_lhtttdkn_nguoi_duyet(String sNguoiDuyet) {
		return DDKNPage.row_index_lhtttdkn_nguoi_duyet(sNguoiDuyet);
	}

	@Step
	public String text_lhtttdkn_nguoi_duyet(int rowIndex) {
		return DDKNPage.text_lhtttdkn_nguoi_duyet(rowIndex);
	}

	@Step
	public int index_lhtttdkn_nguoi_duyet() {
		return DDKNPage.index_lhtttdkn_nguoi_duyet();
	}

	// Trạng thái
	@Step
	public void click_on_lhtttdkn_trang_thai(int rowIndex) {
		DDKNPage.click_on_lhtttdkn_trang_thai(rowIndex);
	}

	@Step
	public void filter_lhtttdkn_trang_thai(String sTrangThai) {
		DDKNPage.filter_lhtttdkn_trang_thai(sTrangThai);
	}

	@Step
	public void order_lhtttdkn_trang_thai(String sTrangThai) {
		DDKNPage.order_lhtttdkn_trang_thai(sTrangThai);
	}

	@Step
	public int row_index_lhtttdkn_trang_thai(String sTrangThai) {
		return DDKNPage.row_index_lhtttdkn_trang_thai(sTrangThai);
	}

	@Step
	public String text_lhtttdkn_trang_thai(int rowIndex) {
		return DDKNPage.text_lhtttdkn_trang_thai(rowIndex);
	}

	@Step
	public int index_lhtttdkn_trang_thai() {
		return DDKNPage.index_lhtttdkn_trang_thai();
	}

	// Lý do từ chối
	@Step
	public void click_on_lhtttdkn_ly_do_tu_choi(int rowIndex) {
		DDKNPage.click_on_lhtttdkn_ly_do_tu_choi(rowIndex);
	}

	@Step
	public void filter_lhtttdkn_ly_do_tu_choi(String sLyDoTuChoi) {
		DDKNPage.filter_lhtttdkn_ly_do_tu_choi(sLyDoTuChoi);
	}

	@Step
	public void order_lhtttdkn_ly_do_tu_choi(String sLyDoTuChoi) {
		DDKNPage.order_lhtttdkn_ly_do_tu_choi(sLyDoTuChoi);
	}

	@Step
	public int row_index_lhtttdkn_ly_do_tu_choi(String sLyDoTuChoi) {
		return DDKNPage.row_index_lhtttdkn_ly_do_tu_choi(sLyDoTuChoi);
	}

	@Step
	public String text_lhtttdkn_ly_do_tu_choi(int rowIndex) {
		return DDKNPage.text_lhtttdkn_ly_do_tu_choi(rowIndex);
	}

	@Step
	public int index_lhtttdkn_ly_do_tu_choi() {
		return DDKNPage.index_lhtttdkn_ly_do_tu_choi();
	}
	// Nhân sự
	// Mã hội viên
	// Đơn vị / Phong ban
	// Ngày bắt đầu
	// Ngày kết thúc
	// Lý do nghỉ
	// Số ngày nghỉ
	// Người duyệt
	// Trạng thái
	// Lý do từ chối
	// END Lưới hiển thị thông tin đăng ký nghỉ

	// Xem chi tiết
	@Step
	public void click_xem_chi_tiet(){
		DDKNPage.click_xem_chi_tiet();
	}
	@Step
	public boolean exist_xem_chi_tiet(){
		return DDKNPage.exist_xem_chi_tiet();
	}
	@Step
	public boolean enabled_xem_chi_tiet(){
		return DDKNPage.enabled_xem_chi_tiet();
	}
	@Step
	public boolean focus_xem_chi_tiet(){
		return DDKNPage.focus_xem_chi_tiet();
	}
	// END DUYỆT ĐĂNG KÝ NGHỈ
}
