package hrm.steps.serenity.ChamCongThang;

import hrm.pages.ChamCongThang.TaoMoiBangChamCongThangPage;
import net.thucydides.core.annotations.Step;


/**
 * @author AUTO
 * @version 12/1/2019 5:01:33 PM
 */
public class TaoMoiBangChamCongThangSteps {
	TaoMoiBangChamCongThangPage TMBCCTPage;
	// BEGIN TẠO MỚI BẢNG CHẤM CÔNG THÁNG
	// Lưu
	@Step
	public void click_luu(){
		TMBCCTPage.click_luu();
	}
	@Step
	public boolean exist_luu(){
		return TMBCCTPage.exist_luu();
	}
	@Step
	public boolean enabled_luu(){
		return TMBCCTPage.enabled_luu();
	}
	@Step
	public boolean focus_luu(){
		return TMBCCTPage.focus_luu();
	}
	// Hủy bỏ
	@Step
	public void click_huy_bo(){
		TMBCCTPage.click_huy_bo();
	}
	@Step
	public boolean exist_huy_bo(){
		return TMBCCTPage.exist_huy_bo();
	}
	@Step
	public boolean enabled_huy_bo(){
		return TMBCCTPage.enabled_huy_bo();
	}
	@Step
	public boolean focus_huy_bo(){
		return TMBCCTPage.focus_huy_bo();
	}
	// Xác nhận
	@Step
	public void click_xac_nhan(){
		TMBCCTPage.click_xac_nhan();
	}
	@Step
	public boolean exist_xac_nhan(){
		return TMBCCTPage.exist_xac_nhan();
	}
	@Step
	public boolean enabled_xac_nhan(){
		return TMBCCTPage.enabled_xac_nhan();
	}
	@Step
	public boolean focus_xac_nhan(){
		return TMBCCTPage.focus_xac_nhan();
	}
	// Cập nhật ngày nghỉ
	@Step
	public void click_cap_nhat_ngay_nghi(){
		TMBCCTPage.click_cap_nhat_ngay_nghi();
	}
	@Step
	public boolean exist_cap_nhat_ngay_nghi(){
		return TMBCCTPage.exist_cap_nhat_ngay_nghi();
	}
	@Step
	public boolean enabled_cap_nhat_ngay_nghi(){
		return TMBCCTPage.enabled_cap_nhat_ngay_nghi();
	}
	@Step
	public boolean focus_cap_nhat_ngay_nghi(){
		return TMBCCTPage.focus_cap_nhat_ngay_nghi();
	}
	// Đơn vị
	@Step
	public void select_don_vi(String sDonVi){
		TMBCCTPage.select_don_vi(sDonVi);
	}
	@Step
	public String don_vi(){
		return TMBCCTPage.don_vi();
	}
	@Step
	public boolean exist_don_vi(){
		return TMBCCTPage.exist_don_vi();
	}
	@Step
	public boolean enabled_don_vi(){
		return TMBCCTPage.enabled_don_vi();
	}
	@Step
	public boolean focus_don_vi(){
		return TMBCCTPage.focus_don_vi();
	}
	// Import dữ liệu
	@Step
	public void set_import_du_lieu(String sImportDuLieu){
		TMBCCTPage.set_import_du_lieu(sImportDuLieu);
	}
	@Step
	public boolean import_du_lieu(){
		return TMBCCTPage.import_du_lieu();
	}
	@Step
	public boolean exist_import_du_lieu(){
		return TMBCCTPage.exist_import_du_lieu();
	}
	@Step
	public boolean enabled_import_du_lieu(){
		return TMBCCTPage.enabled_import_du_lieu();
	}
	@Step
	public boolean focus_import_du_lieu(){
		return TMBCCTPage.focus_import_du_lieu();
	}
	// Tải lên tệp tin của bạn
	@Step
	public void click_tai_len_tep_tin_cua_ban(String sTaiLenTepTinCuaBan){
		TMBCCTPage.click_tai_len_tep_tin_cua_ban(sTaiLenTepTinCuaBan);
	}
	@Step
	public boolean exist_tai_len_tep_tin_cua_ban(){
		return TMBCCTPage.exist_tai_len_tep_tin_cua_ban();
	}
	@Step
	public boolean enabled_tai_len_tep_tin_cua_ban(){
		return TMBCCTPage.enabled_tai_len_tep_tin_cua_ban();
	}
	@Step
	public boolean focus_tai_len_tep_tin_cua_ban(){
		return TMBCCTPage.focus_tai_len_tep_tin_cua_ban();
	}
	// Tải dữ liệu chấm công
	@Step
	public void click_tai_du_lieu_cham_cong(){
		TMBCCTPage.click_tai_du_lieu_cham_cong();
	}
	@Step
	public boolean exist_tai_du_lieu_cham_cong(){
		return TMBCCTPage.exist_tai_du_lieu_cham_cong();
	}
	@Step
	public boolean enabled_tai_du_lieu_cham_cong(){
		return TMBCCTPage.enabled_tai_du_lieu_cham_cong();
	}
	@Step
	public boolean focus_tai_du_lieu_cham_cong(){
		return TMBCCTPage.focus_tai_du_lieu_cham_cong();
	}
	// Sửa
	@Step
	public void click_sua(){
		TMBCCTPage.click_sua();
	}
	@Step
	public boolean exist_sua(){
		return TMBCCTPage.exist_sua();
	}
	@Step
	public boolean enabled_sua(){
		return TMBCCTPage.enabled_sua();
	}
	@Step
	public boolean focus_sua(){
		return TMBCCTPage.focus_sua();
	}
	// Xóa
	@Step
	public void click_xoa(){
		TMBCCTPage.click_xoa();
	}
	@Step
	public boolean exist_xoa(){
		return TMBCCTPage.exist_xoa();
	}
	@Step
	public boolean enabled_xoa(){
		return TMBCCTPage.enabled_xoa();
	}
	@Step
	public boolean focus_xoa(){
		return TMBCCTPage.focus_xoa();
	}
	// END TẠO MỚI BẢNG CHẤM CÔNG THÁNG
}
