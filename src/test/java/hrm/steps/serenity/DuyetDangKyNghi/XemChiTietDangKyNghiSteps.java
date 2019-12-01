package hrm.steps.serenity.DuyetDangKyNghi;

import hrm.pages.DuyetDangKyNghi.XemChiTietDangKyNghiPage;
import net.thucydides.core.annotations.Step;

/**
 * @author AUTO
 * @version 12/1/2019 12:40:38 AM
 */
public class XemChiTietDangKyNghiSteps {
	XemChiTietDangKyNghiPage XCTDKNPage;
	// BEGIN XEM CHI TIẾT ĐĂNG KÝ NGHỈ
	// Phê duyệt
	@Step
	public void click_phe_duyet(){
		XCTDKNPage.click_phe_duyet();
	}
	@Step
	public boolean exist_phe_duyet(){
		return XCTDKNPage.exist_phe_duyet();
	}
	@Step
	public boolean enabled_phe_duyet(){
		return XCTDKNPage.enabled_phe_duyet();
	}
	@Step
	public boolean focus_phe_duyet(){
		return XCTDKNPage.focus_phe_duyet();
	}
	// Từ chối
	@Step
	public void click_tu_choi(){
		XCTDKNPage.click_tu_choi();
	}
	@Step
	public boolean exist_tu_choi(){
		return XCTDKNPage.exist_tu_choi();
	}
	@Step
	public boolean enabled_tu_choi(){
		return XCTDKNPage.enabled_tu_choi();
	}
	@Step
	public boolean focus_tu_choi(){
		return XCTDKNPage.focus_tu_choi();
	}
	// Nhân sự
	@Step
	public String nhan_su(){
		return XCTDKNPage.nhan_su();
	}
	@Step
	public boolean exist_nhan_su(){
		return XCTDKNPage.exist_nhan_su();
	}
	@Step
	public boolean focus_nhan_su(){
		return XCTDKNPage.focus_nhan_su();
	}
	// Lý do
	@Step
	public String ly_do(){
		return XCTDKNPage.ly_do();
	}
	@Step
	public boolean exist_ly_do(){
		return XCTDKNPage.exist_ly_do();
	}
	@Step
	public boolean focus_ly_do(){
		return XCTDKNPage.focus_ly_do();
	}
	// Loại nghỉ
	@Step
	public String loai_nghi(){
		return XCTDKNPage.loai_nghi();
	}
	@Step
	public boolean exist_loai_nghi(){
		return XCTDKNPage.exist_loai_nghi();
	}
	@Step
	public boolean focus_loai_nghi(){
		return XCTDKNPage.focus_loai_nghi();
	}
	// Từ ngày
	@Step
	public String tu_ngay(){
		return XCTDKNPage.tu_ngay();
	}
	@Step
	public boolean exist_tu_ngay(){
		return XCTDKNPage.exist_tu_ngay();
	}
	@Step
	public boolean focus_tu_ngay(){
		return XCTDKNPage.focus_tu_ngay();
	}
	// Đến ngày
	@Step
	public String den_ngay(){
		return XCTDKNPage.den_ngay();
	}
	@Step
	public boolean exist_den_ngay(){
		return XCTDKNPage.exist_den_ngay();
	}
	@Step
	public boolean focus_den_ngay(){
		return XCTDKNPage.focus_den_ngay();
	}
	// Số ngày nghỉ
	@Step
	public String so_ngay_nghi(){
		return XCTDKNPage.so_ngay_nghi();
	}
	@Step
	public boolean exist_so_ngay_nghi(){
		return XCTDKNPage.exist_so_ngay_nghi();
	}
	@Step
	public boolean focus_so_ngay_nghi(){
		return XCTDKNPage.focus_so_ngay_nghi();
	}
	// Ngày tạo
	@Step
	public String ngay_tao(){
		return XCTDKNPage.ngay_tao();
	}
	@Step
	public boolean exist_ngay_tao(){
		return XCTDKNPage.exist_ngay_tao();
	}
	@Step
	public boolean focus_ngay_tao(){
		return XCTDKNPage.focus_ngay_tao();
	}
	// END XEM CHI TIẾT ĐĂNG KÝ NGHỈ
}
