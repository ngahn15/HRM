package hrm.pages.ChamCongThang;
import org.openqa.selenium.WebDriver;

import hrm.lib.MyPageObject;

/**
 * @author AUTO
 * @version 12/1/2019 5:01:33 PM
 */
public class XemBangChamCongThangPage extends MyPageObject {
	public XemBangChamCongThangPage(WebDriver driver) {
		super(driver);
	}
	// BEGIN XEM BẢNG CHẤM CÔNG THÁNG
	private final String xPathXBCCT = "";
	// Sửa
	public void click_sua(){
		clickOnElement("//button[@class='btn btn-primary o_form_button_edit']");
	}
	public boolean exist_sua(){
		return isElementExistNow("//button[@class='btn btn-primary o_form_button_edit']");
	}
	public boolean enabled_sua(){
		return XH("//button[@class='btn btn-primary o_form_button_edit']").isEnabled();
	}
	public boolean focus_sua(){
		return XH("//button[@class='btn btn-primary o_form_button_edit']").hasFocus();
	}
	// Tạo
	public void click_tao(){
		clickOnElement("//button[@class='btn btn-secondary o_form_button_create']");
	}
	public boolean exist_tao(){
		return isElementExistNow("//button[@class='btn btn-secondary o_form_button_create']");
	}
	public boolean enabled_tao(){
		return XH("//button[@class='btn btn-secondary o_form_button_create']").isEnabled();
	}
	public boolean focus_tao(){
		return XH("//button[@class='btn btn-secondary o_form_button_create']").hasFocus();
	}
	// Xác nhận
	public void click_xac_nhan(){
		clickOnElement("//button[@name='action_confirmed']");
	}
	public boolean exist_xac_nhan(){
		return isElementExistNow("//button[@name='action_confirmed']");
	}
	public boolean enabled_xac_nhan(){
		return XH("//button[@name='action_confirmed']").isEnabled();
	}
	public boolean focus_xac_nhan(){
		return XH("//button[@name='action_confirmed']").hasFocus();
	}
	// Cập nhật ngày nghỉ
	public void click_cap_nhat_ngay_nghi(){
		clickOnElement("//button[@name='action_update_holidays']");
	}
	public boolean exist_cap_nhat_ngay_nghi(){
		return isElementExistNow("//button[@name='action_update_holidays']");
	}
	public boolean enabled_cap_nhat_ngay_nghi(){
		return XH("//button[@name='action_update_holidays']").isEnabled();
	}
	public boolean focus_cap_nhat_ngay_nghi(){
		return XH("//button[@name='action_update_holidays']").hasFocus();
	}
	// Đơn vị
	public void select_don_vi(String sDonVi){
		selectSearchDDL("//span[@name='department_id']", sDonVi);
	}
	public String don_vi(){
		return getSelectedSearchDDLText("//span[@name='department_id']");
	}
	public boolean exist_don_vi(){
		return isElementExistNow("//span[@name='department_id']");
	}
	public boolean enabled_don_vi(){
		return XH("//span[@name='department_id']").isEnabled();
	}
	public boolean focus_don_vi(){
		return XH("//span[@name='department_id']").hasFocus();
	}
	// Bảng chấm công tháng
	public void switch_to_bang_cham_cong_thang(){
		switchTab("//div[@class='o_notebook']//li[@class='nav-item']");
	}
	public boolean exist_bang_cham_cong_thang(){
		return isElementExistNow("//div[@class='o_notebook']//li[@class='nav-item']");
	}
	public boolean enabled_bang_cham_cong_thang(){
		return XH("//div[@class='o_notebook']//li[@class='nav-item']").isEnabled();
	}
	public boolean active_bang_cham_cong_thang(){
		return isTabActive("//div[@class='o_notebook']//li[@class='nav-item']");
	}
	// Bảng chấm công tháng
	// BEGIN BẢNG CHẤM CÔNG THÁNG
	private final String xPathBCCT = "//div[@class='o_notebook']//li[@class='nav-item']";
	// Page
	public boolean bcct_go_to_tb_page(String _page) {
		return goToTbPage(xPathBCCT, _page);
	}

	public boolean exist_bcct_page() {
		return isElementExistNow(xPathTbPage(xPathBCCT));
	}

	// Page Size
	public String bcct_set_tb_page_size(String _pageSize) {
		return selectTbPageSize(xPathBCCT, _pageSize);
	}

	public boolean exist_bcct_page_size() {
		return isElementExistNow(xPathTbPageSize(xPathBCCT));
	}

	// Total current record
	public int bcct_records_in_current_page() {
		return getTbCountDataRow(xPathBCCT);
	}

	// Add new row
	public String bcct_add_row(String sRow) {
		addTbRow("");
		return "0";
	}

	// Remove row
	public String bcct_remove_row(String sRow) {
		removeTbRow("");
		return "0";
	}
	// Nhân sự
	public void click_on_bcct_nhan_su(int rowIndex){
		int headerIndex = getTbColHeaderIndex(xPathBCCT, "Nhân sự");
		String xPath = xPathTbDataCellByPosition(xPathBCCT, rowIndex, headerIndex);
		clickOnElement(xPath);
	}
	public void filter_bcct_nhan_su(String sNhanSu){
		if (sNhanSu.contains("@MARK FILTER@@")) {
			sNhanSu = sNhanSu.replace("@MARK FILTER@@", "");
			enterThenSelectAutoComplete(xPathTbHeaderFilter(xPathBCCT, "Nhân sự"), sNhanSu);
		} else if (sNhanSu.contains("@MARK FILTER OPTION@@")) {
			sNhanSu = sNhanSu.replace("@MARK FILTER OPTION@@", "");
			setTbHeaderFilterOption(xPathBCCT, "Nhân sự", sNhanSu);
		} else {
			System.out.println("***** WARNING ***** Invalid input data for Table Header Filter : " + sNhanSu);
		}
	}
	public void order_bcct_nhan_su(String sNhanSu){
		String xPath = xPathTbHeaderCell(xPathBCCT, "Nhân sự");
		clickOnElement(xPath);
	}
	public int row_index_bcct_nhan_su(String sNhanSu){
		return searchInTbMultiPage(xPathBCCT, "Nhân sự", 1, sNhanSu, true);
	}
	public String text_bcct_nhan_su(int rowIndex){
		int headerIndex = getTbColHeaderIndex(xPathBCCT, "Nhân sự");
		return XH(xPathTbDataCellByPosition(xPathBCCT, rowIndex, headerIndex)).getText();
	}
	public int index_bcct_nhan_su(){
		int headerIndex = getTbColHeaderIndex(xPathBCCT, "Nhân sự");
		return headerIndex;
	}
	// Công chuẩn
	public void click_on_bcct_cong_chuan(int rowIndex){
		int headerIndex = getTbColHeaderIndex(xPathBCCT, "Công chuẩn");
		String xPath = xPathTbDataCellByPosition(xPathBCCT, rowIndex, headerIndex);
		clickOnElement(xPath);
	}
	public void filter_bcct_cong_chuan(String sCongChuan){
		if (sCongChuan.contains("@MARK FILTER@@")) {
			sCongChuan = sCongChuan.replace("@MARK FILTER@@", "");
			enterThenSelectAutoComplete(xPathTbHeaderFilter(xPathBCCT, "Công chuẩn"), sCongChuan);
		} else if (sCongChuan.contains("@MARK FILTER OPTION@@")) {
			sCongChuan = sCongChuan.replace("@MARK FILTER OPTION@@", "");
			setTbHeaderFilterOption(xPathBCCT, "Công chuẩn", sCongChuan);
		} else {
			System.out.println("***** WARNING ***** Invalid input data for Table Header Filter : " + sCongChuan);
		}
	}
	public void order_bcct_cong_chuan(String sCongChuan){
		String xPath = xPathTbHeaderCell(xPathBCCT, "Công chuẩn");
		clickOnElement(xPath);
	}
	public int row_index_bcct_cong_chuan(String sCongChuan){
		return searchInTbMultiPage(xPathBCCT, "Công chuẩn", 1, sCongChuan, true);
	}
	public String text_bcct_cong_chuan(int rowIndex){
		int headerIndex = getTbColHeaderIndex(xPathBCCT, "Công chuẩn");
		return XH(xPathTbDataCellByPosition(xPathBCCT, rowIndex, headerIndex)).getText();
	}
	public int index_bcct_cong_chuan(){
		int headerIndex = getTbColHeaderIndex(xPathBCCT, "Công chuẩn");
		return headerIndex;
	}
	// Ngày công
	public void click_on_bcct_ngay_cong(int rowIndex){
		int headerIndex = getTbColHeaderIndex(xPathBCCT, "Ngày công");
		String xPath = xPathTbDataCellByPosition(xPathBCCT, rowIndex, headerIndex);
		clickOnElement(xPath);
	}
	public void filter_bcct_ngay_cong(String sNgayCong){
		if (sNgayCong.contains("@MARK FILTER@@")) {
			sNgayCong = sNgayCong.replace("@MARK FILTER@@", "");
			enterThenSelectAutoComplete(xPathTbHeaderFilter(xPathBCCT, "Ngày công"), sNgayCong);
		} else if (sNgayCong.contains("@MARK FILTER OPTION@@")) {
			sNgayCong = sNgayCong.replace("@MARK FILTER OPTION@@", "");
			setTbHeaderFilterOption(xPathBCCT, "Ngày công", sNgayCong);
		} else {
			System.out.println("***** WARNING ***** Invalid input data for Table Header Filter : " + sNgayCong);
		}
	}
	public void order_bcct_ngay_cong(String sNgayCong){
		String xPath = xPathTbHeaderCell(xPathBCCT, "Ngày công");
		clickOnElement(xPath);
	}
	public int row_index_bcct_ngay_cong(String sNgayCong){
		return searchInTbMultiPage(xPathBCCT, "Ngày công", 1, sNgayCong, true);
	}
	public String text_bcct_ngay_cong(int rowIndex){
		int headerIndex = getTbColHeaderIndex(xPathBCCT, "Ngày công");
		return XH(xPathTbDataCellByPosition(xPathBCCT, rowIndex, headerIndex)).getText();
	}
	public int index_bcct_ngay_cong(){
		int headerIndex = getTbColHeaderIndex(xPathBCCT, "Ngày công");
		return headerIndex;
	}
	// Nhân sự
	// Công chuẩn
	// Ngày công
	// END Bảng chấm công tháng
	// END XEM BẢNG CHẤM CÔNG THÁNG
}
