package hrm.pages.DuyetDangKyNghi;

import org.openqa.selenium.WebDriver;

import hrm.lib.MyPageObject;

/**
 * @author AUTO
 * @version 12/1/2019 12:40:38 AM
 */
public class DuyetDangKyNghiPage extends MyPageObject {
	private static final String xem_chi_tiet = "//div[@class='table-responsive']//descendant-or-self::table[thead]//tbody/tr[1]";
	private static final String xem_chi_tiet_1 = "//div[@class='table-responsive']//table[@class='o_list_view table table-sm table-hover table-striped o_list_view_ungrouped']//tbody//tr";
	private static final String DIV_CLASS_TABLE = "//div[@class='table-responsive']";
	private static final String HEADER_COLUMN_TITLE = "//div[@class='o_content']";
	private static final String BUTTON_YEUTHICH = "//body[@class='o_web_client mk_sidebar_type_large']/div[@class='o_main mk_chatter_position_sided']/main[@class='o_main_content']/div[@class='o_control_panel']/div[@class='o_cp_right']/div[@class='btn-group o_search_options']/div/div[4]/button[1]";
	private static final String BUTTON_NHOM = "//body[@class='o_web_client mk_sidebar_type_large']/div[@class='o_main mk_chatter_position_sided']/main[@class='o_main_content']/div[@class='o_control_panel']/div[@class='o_cp_right']/div[@class='btn-group o_search_options']/div/div[2]/button[1]";
	private static final String BUTTON_LOC = "//body[@class='o_web_client mk_sidebar_type_large']/div[@class='o_main mk_chatter_position_sided']/main[@class='o_main_content']/div[@class='o_control_panel']/div[@class='o_cp_right']/div[@class='btn-group o_search_options']/div/div[1]/button[1]";
	private static final String SEARCHVIEW_INPUT = "//div[@class='o_searchview_input_container']//input[@class='o_searchview_input']";

	public DuyetDangKyNghiPage(WebDriver driver) {
		super(driver);
	}

	// BEGIN DUYỆT ĐĂNG KÝ NGHỈ
	private final String xPathDDKN = "";

	// Tìm kiếm
	public void select_tim_kiem(String sTimKiem) {
		selectSearchFilter(SEARCHVIEW_INPUT, sTimKiem);
	}

	public String tim_kiem() {
		return XH(SEARCHVIEW_INPUT).getTextValue();
	}

	public boolean exist_tim_kiem() {
		return isElementExistNow(SEARCHVIEW_INPUT);
	}

	public boolean enabled_tim_kiem() {
		return XH(SEARCHVIEW_INPUT).isEnabled();
	}

	public boolean focus_tim_kiem() {
		return XH(SEARCHVIEW_INPUT).hasFocus();
	}

	// Các bộ lọc
	public void select_cac_bo_loc(String sCacBoLoc) {
		XH(BUTTON_LOC).click();
		String _xPathFilter = "//div[@class='dropdown-menu o_dropdown_menu o_filters_menu show']//div//a[contains(text(),'"+ sCacBoLoc +"')]";
		clickOnElement(_xPathFilter);
//		XH(BUTTON_LOC).selectByVisibleText(sCacBoLoc);
	}

	public String cac_bo_loc() {
		return XH(BUTTON_LOC).getSelectedVisibleTextValue();
	}

	public boolean exist_cac_bo_loc() {
		return isElementExistNow(BUTTON_LOC);
	}

	public boolean enabled_cac_bo_loc() {
		return XH(BUTTON_LOC).isEnabled();
	}

	public boolean focus_cac_bo_loc() {
		return XH(BUTTON_LOC).hasFocus();
	}

	// Nhóm theo
	public void select_nhom_theo(String sNhomTheo) {
		XH(BUTTON_NHOM).selectByVisibleText(sNhomTheo);
	}

	public String nhom_theo() {
		return XH(BUTTON_NHOM).getSelectedVisibleTextValue();
	}

	public boolean exist_nhom_theo() {
		return isElementExistNow(BUTTON_NHOM);
	}

	public boolean enabled_nhom_theo() {
		return XH(BUTTON_NHOM).isEnabled();
	}

	public boolean focus_nhom_theo() {
		return XH(BUTTON_NHOM).hasFocus();
	}

	// Yêu thích
	public void select_yeu_thich(String sYeuThich) {
		XH(BUTTON_YEUTHICH).selectByVisibleText(sYeuThich);
	}

	public String yeu_thich() {
		return XH(BUTTON_YEUTHICH).getSelectedVisibleTextValue();
	}

	public boolean exist_yeu_thich() {
		return isElementExistNow(BUTTON_YEUTHICH);
	}

	public boolean enabled_yeu_thich() {
		return XH(BUTTON_YEUTHICH).isEnabled();
	}

	public boolean focus_yeu_thich() {
		return XH(BUTTON_YEUTHICH).hasFocus();
	}

	// Lưới hiển thị thông tin đăng ký nghỉ
	// BEGIN LƯỚI HIỂN THỊ THÔNG TIN ĐĂNG KÝ NGHỈ
	private final String xPathLHTTTDKN = "";

	// Page
	public boolean lhtttdkn_go_to_tb_page(String _page) {
		return goToTbPage(xPathLHTTTDKN, _page);
	}

	public boolean exist_lhtttdkn_page() {
		return isElementExistNow(xPathTbPage(xPathLHTTTDKN));
	}

	// Page Size
	public String lhtttdkn_set_tb_page_size(String _pageSize) {
		return selectTbPageSize(xPathLHTTTDKN, _pageSize);
	}

	public boolean exist_lhtttdkn_page_size() {
		return isElementExistNow(xPathTbPageSize(xPathLHTTTDKN));
	}

	// Total current record
	public int lhtttdkn_records_in_current_page() {
		return getTbCountDataRow(DIV_CLASS_TABLE);
	}

	// Add new row
	public String lhtttdkn_add_row(String sRow) {
		addTbRow("");
		return "0";
	}

	// Remove row
	public String lhtttdkn_remove_row(String sRow) {
		removeTbRow("");
		return "0";
	}

	// Nhân sự
	public void click_on_lhtttdkn_nhan_su(int rowIndex) {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Nhân sự");
		String xPath = xPathTbDataCellByPosition(HEADER_COLUMN_TITLE, rowIndex, headerIndex);
		clickOnElement(xPath);
	}

	public void filter_lhtttdkn_nhan_su(String sNhanSu) {
		if (sNhanSu.contains("@MARK FILTER@@")) {
			sNhanSu = sNhanSu.replace("@MARK FILTER@@", "");
			enterThenSelectAutoComplete(xPathTbHeaderFilter(HEADER_COLUMN_TITLE, "Nhân sự"), sNhanSu);
		} else if (sNhanSu.contains("@MARK FILTER OPTION@@")) {
			sNhanSu = sNhanSu.replace("@MARK FILTER OPTION@@", "");
			setTbHeaderFilterOption(HEADER_COLUMN_TITLE, "Nhân sự", sNhanSu);
		} else {
			System.out.println("***** WARNING ***** Invalid input data for Table Header Filter : " + sNhanSu);
		}
	}

	public void order_lhtttdkn_nhan_su(String sNhanSu) {
		String xPath = xPathTbHeaderCell(HEADER_COLUMN_TITLE, "Nhân sự");
		clickOnElement(xPath);
	}

	public int row_index_lhtttdkn_nhan_su(String sNhanSu) {
		return searchInTbMultiPage(HEADER_COLUMN_TITLE, "Nhân sự", 1, sNhanSu, true);
	}

	public String text_lhtttdkn_nhan_su(int rowIndex) {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Nhân sự");
		return XH(xPathTbDataCellByPosition(HEADER_COLUMN_TITLE, rowIndex, headerIndex)).getText();
	}

	public int index_lhtttdkn_nhan_su() {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Nhân sự");
		return headerIndex;
	}

	// Đơn vị / Phong ban
	public void click_on_lhtttdkn_don_vi_phong_ban(int rowIndex) {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Đơn vị Phòng ban");
		String xPath = xPathTbDataCellByPosition(HEADER_COLUMN_TITLE, rowIndex, headerIndex);
		clickOnElement(xPath);
	}

	public void filter_lhtttdkn_don_vi_phong_ban(String sDonViPhongBan) {
		if (sDonViPhongBan.contains("@MARK FILTER@@")) {
			sDonViPhongBan = sDonViPhongBan.replace("@MARK FILTER@@", "");
			enterThenSelectAutoComplete(xPathTbHeaderFilter(HEADER_COLUMN_TITLE, "Đơn vị Phòng ban"),
					sDonViPhongBan);
		} else if (sDonViPhongBan.contains("@MARK FILTER OPTION@@")) {
			sDonViPhongBan = sDonViPhongBan.replace("@MARK FILTER OPTION@@", "");
			setTbHeaderFilterOption(HEADER_COLUMN_TITLE, "Đơn vị Phong ban", sDonViPhongBan);
		} else {
			System.out.println("***** WARNING ***** Invalid input data for Table Header Filter : " + sDonViPhongBan);
		}
	}

	public void order_lhtttdkn_don_vi_phong_ban(String sDonViPhongBan) {
		String xPath = xPathTbHeaderCell(HEADER_COLUMN_TITLE, "Đơn vị Phòng ban");
		clickOnElement(xPath);
	}

	public int row_index_lhtttdkn_don_vi_phong_ban(String sDonViPhongBan) {
		return searchInTbMultiPage(HEADER_COLUMN_TITLE, "Đơn vị Phòng ban", 1, sDonViPhongBan, true);
	}

	public String text_lhtttdkn_don_vi_phong_ban(int rowIndex) {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Đơn vị Phòng ban");
		return XH(xPathTbDataCellByPosition(HEADER_COLUMN_TITLE, rowIndex, headerIndex)).getText();
	}

	public int index_lhtttdkn_don_vi_phong_ban() {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Đơn vị Phòng ban");
		return headerIndex;
	}

	// Ngày bắt đầu
	public void click_on_lhtttdkn_ngay_bat_dau(int rowIndex) {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Ngày bắt đầu");
		String xPath = xPathTbDataCellByPosition(HEADER_COLUMN_TITLE, rowIndex, headerIndex);
		clickOnElement(xPath);
	}

	public void filter_lhtttdkn_ngay_bat_dau(String sNgayBatDau) {
		if (sNgayBatDau.contains("@MARK FILTER@@")) {
			sNgayBatDau = sNgayBatDau.replace("@MARK FILTER@@", "");
			enterThenSelectAutoComplete(xPathTbHeaderFilter(HEADER_COLUMN_TITLE, "Ngày bắt đầu"), sNgayBatDau);
		} else if (sNgayBatDau.contains("@MARK FILTER OPTION@@")) {
			sNgayBatDau = sNgayBatDau.replace("@MARK FILTER OPTION@@", "");
			setTbHeaderFilterOption(HEADER_COLUMN_TITLE, "Ngày bắt đầu", sNgayBatDau);
		} else {
			System.out.println("***** WARNING ***** Invalid input data for Table Header Filter : " + sNgayBatDau);
		}
	}

	public void order_lhtttdkn_ngay_bat_dau(String sNgayBatDau) {
		String xPath = xPathTbHeaderCell(HEADER_COLUMN_TITLE, "Ngày bắt đầu");
		clickOnElement(xPath);
	}

	public int row_index_lhtttdkn_ngay_bat_dau(String sNgayBatDau) {
		return searchInTbMultiPage(HEADER_COLUMN_TITLE, "Ngày bắt đầu", 1, sNgayBatDau, true);
	}

	public String text_lhtttdkn_ngay_bat_dau(int rowIndex) {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Ngày bắt đầu");
		return XH(xPathTbDataCellByPosition(HEADER_COLUMN_TITLE, rowIndex, headerIndex)).getText();
	}

	public int index_lhtttdkn_ngay_bat_dau() {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Ngày bắt đầu");
		return headerIndex;
	}

	// Ngày kết thúc
	public void click_on_lhtttdkn_ngay_ket_thuc(int rowIndex) {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Ngày kết thúc");
		String xPath = xPathTbDataCellByPosition(HEADER_COLUMN_TITLE, rowIndex, headerIndex);
		clickOnElement(xPath);
	}

	public void filter_lhtttdkn_ngay_ket_thuc(String sNgayKetThuc) {
		if (sNgayKetThuc.contains("@MARK FILTER@@")) {
			sNgayKetThuc = sNgayKetThuc.replace("@MARK FILTER@@", "");
			enterThenSelectAutoComplete(xPathTbHeaderFilter(HEADER_COLUMN_TITLE, "Ngày kết thúc"),
					sNgayKetThuc);
		} else if (sNgayKetThuc.contains("@MARK FILTER OPTION@@")) {
			sNgayKetThuc = sNgayKetThuc.replace("@MARK FILTER OPTION@@", "");
			setTbHeaderFilterOption(HEADER_COLUMN_TITLE, "Ngày kết thúc", sNgayKetThuc);
		} else {
			System.out.println("***** WARNING ***** Invalid input data for Table Header Filter : " + sNgayKetThuc);
		}
	}

	public void order_lhtttdkn_ngay_ket_thuc(String sNgayKetThuc) {
		String xPath = xPathTbHeaderCell(HEADER_COLUMN_TITLE, "Ngày kết thúc");
		clickOnElement(xPath);
	}

	public int row_index_lhtttdkn_ngay_ket_thuc(String sNgayKetThuc) {
		return searchInTbMultiPage(HEADER_COLUMN_TITLE, "Ngày kết thúc", 1, sNgayKetThuc, true);
	}

	public String text_lhtttdkn_ngay_ket_thuc(int rowIndex) {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Ngày kết thúc");
		return XH(xPathTbDataCellByPosition(HEADER_COLUMN_TITLE, rowIndex, headerIndex)).getText();
	}

	public int index_lhtttdkn_ngay_ket_thuc() {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Ngày kết thúc");
		return headerIndex;
	}

	// Lý do nghỉ
	public void click_on_lhtttdkn_ly_do_nghi(int rowIndex) {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Lý do nghỉ");
		String xPath = xPathTbDataCellByPosition(HEADER_COLUMN_TITLE, rowIndex, headerIndex);
		clickOnElement(xPath);
	}

	public void filter_lhtttdkn_ly_do_nghi(String sLyDoNghi) {
		if (sLyDoNghi.contains("@MARK FILTER@@")) {
			sLyDoNghi = sLyDoNghi.replace("@MARK FILTER@@", "");
			enterThenSelectAutoComplete(xPathTbHeaderFilter(HEADER_COLUMN_TITLE, "Lý do nghỉ"), sLyDoNghi);
		} else if (sLyDoNghi.contains("@MARK FILTER OPTION@@")) {
			sLyDoNghi = sLyDoNghi.replace("@MARK FILTER OPTION@@", "");
			setTbHeaderFilterOption(HEADER_COLUMN_TITLE, "Lý do nghỉ", sLyDoNghi);
		} else {
			System.out.println("***** WARNING ***** Invalid input data for Table Header Filter : " + sLyDoNghi);
		}
	}

	public void order_lhtttdkn_ly_do_nghi(String sLyDoNghi) {
		String xPath = xPathTbHeaderCell(HEADER_COLUMN_TITLE, "Lý do nghỉ");
		clickOnElement(xPath);
	}

	public int row_index_lhtttdkn_ly_do_nghi(String sLyDoNghi) {
		return searchInTbMultiPage(HEADER_COLUMN_TITLE, "Lý do nghỉ", 1, sLyDoNghi, true);
	}

	public String text_lhtttdkn_ly_do_nghi(int rowIndex) {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Lý do nghỉ");
		return XH(xPathTbDataCellByPosition(HEADER_COLUMN_TITLE, rowIndex, headerIndex)).getText();
	}

	public int index_lhtttdkn_ly_do_nghi() {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Lý do nghỉ");
		return headerIndex;
	}

	// Số ngày nghỉ
	public void click_on_lhtttdkn_so_ngay_nghi(int rowIndex) {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Số ngày nghỉ");
		String xPath = xPathTbDataCellByPosition(HEADER_COLUMN_TITLE, rowIndex, headerIndex);
		clickOnElement(xPath);
	}

	public void filter_lhtttdkn_so_ngay_nghi(String sSoNgayNghi) {
		if (sSoNgayNghi.contains("@MARK FILTER@@")) {
			sSoNgayNghi = sSoNgayNghi.replace("@MARK FILTER@@", "");
			enterThenSelectAutoComplete(xPathTbHeaderFilter(HEADER_COLUMN_TITLE, "Số ngày nghỉ"), sSoNgayNghi);
		} else if (sSoNgayNghi.contains("@MARK FILTER OPTION@@")) {
			sSoNgayNghi = sSoNgayNghi.replace("@MARK FILTER OPTION@@", "");
			setTbHeaderFilterOption(HEADER_COLUMN_TITLE, "Số ngày nghỉ", sSoNgayNghi);
		} else {
			System.out.println("***** WARNING ***** Invalid input data for Table Header Filter : " + sSoNgayNghi);
		}
	}

	public void order_lhtttdkn_so_ngay_nghi(String sSoNgayNghi) {
		String xPath = xPathTbHeaderCell(HEADER_COLUMN_TITLE, "Số ngày nghỉ");
		clickOnElement(xPath);
	}

	public int row_index_lhtttdkn_so_ngay_nghi(String sSoNgayNghi) {
		return searchInTbMultiPage(HEADER_COLUMN_TITLE, "Số ngày nghỉ", 1, sSoNgayNghi, true);
	}

	public String text_lhtttdkn_so_ngay_nghi(int rowIndex) {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Số ngày nghỉ");
		return XH(xPathTbDataCellByPosition(HEADER_COLUMN_TITLE, rowIndex, headerIndex)).getText();
	}

	public int index_lhtttdkn_so_ngay_nghi() {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Số ngày nghỉ");
		return headerIndex;
	}

	// Người duyệt
	public void click_on_lhtttdkn_nguoi_duyet(int rowIndex) {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Người duyệt");
		String xPath = xPathTbDataCellByPosition(HEADER_COLUMN_TITLE, rowIndex, headerIndex);
		clickOnElement(xPath);
	}

	public void filter_lhtttdkn_nguoi_duyet(String sNguoiDuyet) {
		if (sNguoiDuyet.contains("@MARK FILTER@@")) {
			sNguoiDuyet = sNguoiDuyet.replace("@MARK FILTER@@", "");
			enterThenSelectAutoComplete(xPathTbHeaderFilter(HEADER_COLUMN_TITLE, "Người duyệt"), sNguoiDuyet);
		} else if (sNguoiDuyet.contains("@MARK FILTER OPTION@@")) {
			sNguoiDuyet = sNguoiDuyet.replace("@MARK FILTER OPTION@@", "");
			setTbHeaderFilterOption(HEADER_COLUMN_TITLE, "Người duyệt", sNguoiDuyet);
		} else {
			System.out.println("***** WARNING ***** Invalid input data for Table Header Filter : " + sNguoiDuyet);
		}
	}

	public void order_lhtttdkn_nguoi_duyet(String sNguoiDuyet) {
		String xPath = xPathTbHeaderCell(HEADER_COLUMN_TITLE, "Người duyệt");
		clickOnElement(xPath);
	}

	public int row_index_lhtttdkn_nguoi_duyet(String sNguoiDuyet) {
		return searchInTbMultiPage(HEADER_COLUMN_TITLE, "Người duyệt", 1, sNguoiDuyet, true);
	}

	public String text_lhtttdkn_nguoi_duyet(int rowIndex) {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Người duyệt");
		return XH(xPathTbDataCellByPosition(HEADER_COLUMN_TITLE, rowIndex, headerIndex)).getText();
	}

	public int index_lhtttdkn_nguoi_duyet() {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Người duyệt");
		return headerIndex;
	}

	// Trạng thái
	public void click_on_lhtttdkn_trang_thai(int rowIndex) {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Trạng thái");
		String xPath = xPathTbDataCellByPosition(HEADER_COLUMN_TITLE, rowIndex, headerIndex);
		clickOnElement(xPath);
	}

	public void filter_lhtttdkn_trang_thai(String sTrangThai) {
		if (sTrangThai.contains("@MARK FILTER@@")) {
			sTrangThai = sTrangThai.replace("@MARK FILTER@@", "");
			enterThenSelectAutoComplete(xPathTbHeaderFilter(HEADER_COLUMN_TITLE, "Trạng thái"), sTrangThai);
		} else if (sTrangThai.contains("@MARK FILTER OPTION@@")) {
			sTrangThai = sTrangThai.replace("@MARK FILTER OPTION@@", "");
			setTbHeaderFilterOption(HEADER_COLUMN_TITLE, "Trạng thái", sTrangThai);
		} else {
			System.out.println("***** WARNING ***** Invalid input data for Table Header Filter : " + sTrangThai);
		}
	}

	public void order_lhtttdkn_trang_thai(String sTrangThai) {
		String xPath = xPathTbHeaderCell(HEADER_COLUMN_TITLE, "Trạng thái");
		clickOnElement(xPath);
	}

	public int row_index_lhtttdkn_trang_thai(String sTrangThai) {
		return searchInTbMultiPage(HEADER_COLUMN_TITLE, "Trạng thái", 1, sTrangThai, true);
	}

	public String text_lhtttdkn_trang_thai(int rowIndex) {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Trạng thái");
		return XH(xPathTbDataCellByPosition(HEADER_COLUMN_TITLE, rowIndex, headerIndex)).getText();
	}

	public int index_lhtttdkn_trang_thai() {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Trạng thái");
		return headerIndex;
	}

	// Lý do từ chối
	public void click_on_lhtttdkn_ly_do_tu_choi(int rowIndex) {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Lý do từ chối");
		String xPath = xPathTbDataCellByPosition(HEADER_COLUMN_TITLE, rowIndex, headerIndex);
		clickOnElement(xPath);
	}

	public void filter_lhtttdkn_ly_do_tu_choi(String sLyDoTuChoi) {
		if (sLyDoTuChoi.contains("@MARK FILTER@@")) {
			sLyDoTuChoi = sLyDoTuChoi.replace("@MARK FILTER@@", "");
			enterThenSelectAutoComplete(xPathTbHeaderFilter(HEADER_COLUMN_TITLE, "Lý do từ chối"), sLyDoTuChoi);
		} else if (sLyDoTuChoi.contains("@MARK FILTER OPTION@@")) {
			sLyDoTuChoi = sLyDoTuChoi.replace("@MARK FILTER OPTION@@", "");
			setTbHeaderFilterOption(HEADER_COLUMN_TITLE, "Lý do từ chối", sLyDoTuChoi);
		} else {
			System.out.println("***** WARNING ***** Invalid input data for Table Header Filter : " + sLyDoTuChoi);
		}
	}

	public void order_lhtttdkn_ly_do_tu_choi(String sLyDoTuChoi) {
		String xPath = xPathTbHeaderCell(HEADER_COLUMN_TITLE, "Lý do từ chối");
		clickOnElement(xPath);
	}

	public int row_index_lhtttdkn_ly_do_tu_choi(String sLyDoTuChoi) {
		return searchInTbMultiPage(HEADER_COLUMN_TITLE, "Lý do từ chối", 1, sLyDoTuChoi, true);
	}

	public String text_lhtttdkn_ly_do_tu_choi(int rowIndex) {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Lý do từ chối");
		return XH(xPathTbDataCellByPosition(HEADER_COLUMN_TITLE, rowIndex, headerIndex)).getText();
	}

	public int index_lhtttdkn_ly_do_tu_choi() {
		int headerIndex = getTbColHeaderIndex(HEADER_COLUMN_TITLE, "Lý do từ chối");
		return headerIndex;
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
	public void click_xem_chi_tiet(){
		clickOnElement(xem_chi_tiet);
	}
	public boolean exist_xem_chi_tiet(){
		return isElementExistNow(xem_chi_tiet);
	}
	public boolean enabled_xem_chi_tiet(){
		return XH(xem_chi_tiet).isEnabled();
	}
	public boolean focus_xem_chi_tiet(){
		return XH(xem_chi_tiet).hasFocus();
	}
	// END DUYỆT ĐĂNG KÝ NGHỈ
}
