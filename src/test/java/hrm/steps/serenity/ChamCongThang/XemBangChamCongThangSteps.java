package hrm.steps.serenity.ChamCongThang;

import hrm.pages.ChamCongThang.XemBangChamCongThangPage;
import net.thucydides.core.annotations.Step;


/**
 * @author AUTO
 * @version 12/1/2019 5:01:33 PM
 */
public class XemBangChamCongThangSteps {
	XemBangChamCongThangPage XBCCTPage;
	// BEGIN XEM BẢNG CHẤM CÔNG THÁNG
	// Sửa
	@Step
	public void click_sua(){
		XBCCTPage.click_sua();
	}
	@Step
	public boolean exist_sua(){
		return XBCCTPage.exist_sua();
	}
	@Step
	public boolean enabled_sua(){
		return XBCCTPage.enabled_sua();
	}
	@Step
	public boolean focus_sua(){
		return XBCCTPage.focus_sua();
	}
	// Tạo
	@Step
	public void click_tao(){
		XBCCTPage.click_tao();
	}
	@Step
	public boolean exist_tao(){
		return XBCCTPage.exist_tao();
	}
	@Step
	public boolean enabled_tao(){
		return XBCCTPage.enabled_tao();
	}
	@Step
	public boolean focus_tao(){
		return XBCCTPage.focus_tao();
	}
	// Xác nhận
	@Step
	public void click_xac_nhan(){
		XBCCTPage.click_xac_nhan();
	}
	@Step
	public boolean exist_xac_nhan(){
		return XBCCTPage.exist_xac_nhan();
	}
	@Step
	public boolean enabled_xac_nhan(){
		return XBCCTPage.enabled_xac_nhan();
	}
	@Step
	public boolean focus_xac_nhan(){
		return XBCCTPage.focus_xac_nhan();
	}
	// Cập nhật ngày nghỉ
	@Step
	public void click_cap_nhat_ngay_nghi(){
		XBCCTPage.click_cap_nhat_ngay_nghi();
	}
	@Step
	public boolean exist_cap_nhat_ngay_nghi(){
		return XBCCTPage.exist_cap_nhat_ngay_nghi();
	}
	@Step
	public boolean enabled_cap_nhat_ngay_nghi(){
		return XBCCTPage.enabled_cap_nhat_ngay_nghi();
	}
	@Step
	public boolean focus_cap_nhat_ngay_nghi(){
		return XBCCTPage.focus_cap_nhat_ngay_nghi();
	}
	// Đơn vị
	@Step
	public void select_don_vi(String sDonVi){
		XBCCTPage.select_don_vi(sDonVi);
	}
	@Step
	public String don_vi(){
		return XBCCTPage.don_vi();
	}
	@Step
	public boolean exist_don_vi(){
		return XBCCTPage.exist_don_vi();
	}
	@Step
	public boolean enabled_don_vi(){
		return XBCCTPage.enabled_don_vi();
	}
	@Step
	public boolean focus_don_vi(){
		return XBCCTPage.focus_don_vi();
	}
	// Bảng chấm công tháng
		// BEGIN BẢNG CHẤM CÔNG THÁNG
		// Page
		@Step
		public boolean bcct_go_to_tb_page(String sPage) {
			return XBCCTPage.bcct_go_to_tb_page(sPage);
		}
		@Step
		public boolean exist_bcct_page() {
			return XBCCTPage.exist_bcct_page();
		}
		// Page Size
		@Step
		public String bcct_set_tb_page_size(String sPageSize) {
			return XBCCTPage.bcct_set_tb_page_size(sPageSize);
		}
		@Step
		public boolean exist_bcct_page_size() {
			return XBCCTPage.exist_bcct_page_size();
		}
		// Total current record
		@Step
		public int bcct_records_in_current_page() {
			return XBCCTPage.bcct_records_in_current_page();
		}
		// Add new row
		@Step
		public String bcct_add_row(String sRow) {
			return XBCCTPage.bcct_add_row(sRow);
		}
		// Remove row
		@Step
		public String bcct_remove_row(String sRow) {
			return XBCCTPage.bcct_remove_row(sRow);
		}
		// Nhân sự
		@Step
		public void click_on_bcct_nhan_su(int rowIndex){
			XBCCTPage.click_on_bcct_nhan_su(rowIndex);
		}
		@Step
		public void filter_bcct_nhan_su(String sNhanSu){
			XBCCTPage.filter_bcct_nhan_su(sNhanSu);
		}
		@Step
		public void order_bcct_nhan_su(String sNhanSu){
			XBCCTPage.order_bcct_nhan_su(sNhanSu);
		}
		@Step
		public int row_index_bcct_nhan_su(String sNhanSu){
			return XBCCTPage.row_index_bcct_nhan_su(sNhanSu);
		}
		@Step
		public String text_bcct_nhan_su(int rowIndex){
			return XBCCTPage.text_bcct_nhan_su( rowIndex );
		}
		@Step
		public int index_bcct_nhan_su(){
			return XBCCTPage.index_bcct_nhan_su();
		}
		// Công chuẩn
		@Step
		public void click_on_bcct_cong_chuan(int rowIndex){
			XBCCTPage.click_on_bcct_cong_chuan(rowIndex);
		}
		@Step
		public void filter_bcct_cong_chuan(String sCongChuan){
			XBCCTPage.filter_bcct_cong_chuan(sCongChuan);
		}
		@Step
		public void order_bcct_cong_chuan(String sCongChuan){
			XBCCTPage.order_bcct_cong_chuan(sCongChuan);
		}
		@Step
		public int row_index_bcct_cong_chuan(String sCongChuan){
			return XBCCTPage.row_index_bcct_cong_chuan(sCongChuan);
		}
		@Step
		public String text_bcct_cong_chuan(int rowIndex){
			return XBCCTPage.text_bcct_cong_chuan( rowIndex );
		}
		@Step
		public int index_bcct_cong_chuan(){
			return XBCCTPage.index_bcct_cong_chuan();
		}
		// Ngày công
		@Step
		public void click_on_bcct_ngay_cong(int rowIndex){
			XBCCTPage.click_on_bcct_ngay_cong(rowIndex);
		}
		@Step
		public void filter_bcct_ngay_cong(String sNgayCong){
			XBCCTPage.filter_bcct_ngay_cong(sNgayCong);
		}
		@Step
		public void order_bcct_ngay_cong(String sNgayCong){
			XBCCTPage.order_bcct_ngay_cong(sNgayCong);
		}
		@Step
		public int row_index_bcct_ngay_cong(String sNgayCong){
			return XBCCTPage.row_index_bcct_ngay_cong(sNgayCong);
		}
		@Step
		public String text_bcct_ngay_cong(int rowIndex){
			return XBCCTPage.text_bcct_ngay_cong( rowIndex );
		}
		@Step
		public int index_bcct_ngay_cong(){
			return XBCCTPage.index_bcct_ngay_cong();
		}
		// Nhân sự
		// Công chuẩn
		// Ngày công
		// END Bảng chấm công tháng
	// END XEM BẢNG CHẤM CÔNG THÁNG
}
