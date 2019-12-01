package hrm.steps.serenity.DuyetDangKyNghi;

import hrm.pages.DuyetDangKyNghi.PheDuyetPage;
import net.thucydides.core.annotations.Step;

/**
 * @author AUTO
 * @version 12/1/2019 1:47:55 PM
 */
public class PheDuyetSteps {
	PheDuyetPage PDPage;
	// BEGIN PHÊ DUYỆT
	// Phê duyệt
	@Step
	public void click_phe_duyet(){
		PDPage.click_phe_duyet();
	}
	@Step
	public boolean exist_phe_duyet(){
		return PDPage.exist_phe_duyet();
	}
	@Step
	public boolean enabled_phe_duyet(){
		return PDPage.enabled_phe_duyet();
	}
	@Step
	public boolean focus_phe_duyet(){
		return PDPage.focus_phe_duyet();
	}
	// Hủy bỏ
	@Step
	public void click_huy_bo(){
		PDPage.click_huy_bo();
	}
	@Step
	public boolean exist_huy_bo(){
		return PDPage.exist_huy_bo();
	}
	@Step
	public boolean enabled_huy_bo(){
		return PDPage.enabled_huy_bo();
	}
	@Step
	public boolean focus_huy_bo(){
		return PDPage.focus_huy_bo();
	}
	// Nhân sự
	@Step
	public String nhan_su(){
		return PDPage.nhan_su();
	}
	@Step
	public boolean exist_nhan_su(){
		return PDPage.exist_nhan_su();
	}
	@Step
	public boolean focus_nhan_su(){
		return PDPage.focus_nhan_su();
	}
	// Người phê duyệt lần 2
	@Step
	public void select_nguoi_phe_duyet_lan_2(String sNguoiPheDuyetLan2){
		PDPage.select_nguoi_phe_duyet_lan_2(sNguoiPheDuyetLan2);
	}
	@Step
	public String nguoi_phe_duyet_lan_2(){
		return PDPage.nguoi_phe_duyet_lan_2();
	}
	@Step
	public boolean exist_nguoi_phe_duyet_lan_2(){
		return PDPage.exist_nguoi_phe_duyet_lan_2();
	}
	@Step
	public boolean enabled_nguoi_phe_duyet_lan_2(){
		return PDPage.enabled_nguoi_phe_duyet_lan_2();
	}
	@Step
	public boolean focus_nguoi_phe_duyet_lan_2(){
		return PDPage.focus_nguoi_phe_duyet_lan_2();
	}
	// Duyệt lần 2
	@Step
	public void set_duyet_lan_2(String sDuyetLan2){
		PDPage.set_duyet_lan_2(sDuyetLan2);
	}
	@Step
	public void uncheck_duyet_lan_2() {
		PDPage.uncheck_duyet_lan_2();
	}
	@Step
	public boolean duyet_lan_2(){
		return PDPage.duyet_lan_2();
	}
	@Step
	public boolean exist_duyet_lan_2(){
		return PDPage.exist_duyet_lan_2();
	}
	@Step
	public boolean enabled_duyet_lan_2(){
		return PDPage.enabled_duyet_lan_2();
	}
	@Step
	public boolean focus_duyet_lan_2(){
		return PDPage.focus_duyet_lan_2();
	}
	// END PHÊ DUYỆT

}
