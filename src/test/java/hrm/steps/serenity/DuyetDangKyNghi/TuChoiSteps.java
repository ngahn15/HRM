package hrm.steps.serenity.DuyetDangKyNghi;

import hrm.pages.DuyetDangKyNghi.TuChoiPage;
import net.thucydides.core.annotations.Step;

/**
 * @author AUTO
 * @version 12/1/2019 1:47:55 PM
 */
public class TuChoiSteps {
	TuChoiPage TCPage;
	// BEGIN TỪ CHỐI
	// Từ chối
	@Step
	public void click_tu_choi(){
		TCPage.click_tu_choi();
	}
	@Step
	public boolean exist_tu_choi(){
		return TCPage.exist_tu_choi();
	}
	@Step
	public boolean enabled_tu_choi(){
		return TCPage.enabled_tu_choi();
	}
	@Step
	public boolean focus_tu_choi(){
		return TCPage.focus_tu_choi();
	}
	// Hủy bỏ
	@Step
	public void click_huy_bo(){
		TCPage.click_huy_bo();
	}
	@Step
	public boolean exist_huy_bo(){
		return TCPage.exist_huy_bo();
	}
	@Step
	public boolean enabled_huy_bo(){
		return TCPage.enabled_huy_bo();
	}
	@Step
	public boolean focus_huy_bo(){
		return TCPage.focus_huy_bo();
	}
	// Nhân sự
	@Step
	public String nhan_su(){
		return TCPage.nhan_su();
	}
	@Step
	public boolean exist_nhan_su(){
		return TCPage.exist_nhan_su();
	}
	@Step
	public boolean focus_nhan_su(){
		return TCPage.focus_nhan_su();
	}
	// Lý do từ chối
	@Step
	public void enter_ly_do_tu_choi(String sLyDoTuChoi){
		TCPage.enter_ly_do_tu_choi(sLyDoTuChoi);
	}
	@Step
	public String ly_do_tu_choi(){
		return TCPage.ly_do_tu_choi();
	}
	@Step
	public boolean exist_ly_do_tu_choi(){
		return TCPage.exist_ly_do_tu_choi();
	}
	@Step
	public boolean enabled_ly_do_tu_choi(){
		return TCPage.enabled_ly_do_tu_choi();
	}
	@Step
	public boolean focus_ly_do_tu_choi(){
		return TCPage.focus_ly_do_tu_choi();
	}
	// END TỪ CHỐI
}
