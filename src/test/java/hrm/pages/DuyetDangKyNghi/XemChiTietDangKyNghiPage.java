package hrm.pages.DuyetDangKyNghi;

import org.openqa.selenium.WebDriver;

import hrm.lib.MyPageObject;

/**
 * @author AUTO
 * @version 12/1/2019 12:40:38 AM
 */
public class XemChiTietDangKyNghiPage extends MyPageObject {
	private static final String SPAN_NAME_DATETIME_CREATE = "//span[@name='datetime_create']";
	private static final String SPAN_NAME_SO_NGAY = "//span[@name='so_ngay']";
	private static final String SPAN_NAME_DATE_TO = "//span[@name='date_to']";
	private static final String SPAN_NAME_DATE_FROM = "//span[@name='date_from']";
	private static final String SPAN_NAME_HOLIDAY_STATUS_ID = "//span[@name='holiday_status_id']";
	private static final String SPAN_NAME_LYDO = "//span[@name='lydo']";
	private static final String SPAN_EMPLOYEE_ID = "//span[@name='employee_id']";
	private static final String BUTTON_TU_CHOI = "//button[@id='btn_refuse']//span[contains(text(),'Từ chối')]";
	private static final String BUTTON_PHE_DUYET = "//button[@id='btn_approve']//span[contains(text(),'Phê duyệt')]";
	private static final String TRANG_THAI_HIEN_TAI = "//button[@title='Giai đoạn hiện tại']";

	public XemChiTietDangKyNghiPage(WebDriver driver) {
		super(driver);
	}

	// BEGIN XEM CHI TIẾT ĐĂNG KÝ NGHỈ
	private final String xPathXCTDKN = "";

	// Phê duyệt
	public void click_phe_duyet() {
		clickOnElement(BUTTON_PHE_DUYET);
	}

	public boolean exist_phe_duyet() {
		return isElementExistNow(BUTTON_PHE_DUYET);
	}

	public boolean enabled_phe_duyet() {
		return XH(BUTTON_PHE_DUYET).isEnabled();
	}

	public boolean focus_phe_duyet() {
		return XH(BUTTON_PHE_DUYET).hasFocus();
	}

	// Từ chối
	public void click_tu_choi() {
		clickOnElement(BUTTON_TU_CHOI);
	}

	public boolean exist_tu_choi() {
		return isElementExistNow(BUTTON_TU_CHOI);
	}

	public boolean enabled_tu_choi() {
		return XH(BUTTON_TU_CHOI).isEnabled();
	}

	public boolean focus_tu_choi() {
		return XH(BUTTON_TU_CHOI).hasFocus();
	}

//	Status
	public String trang_thai_hien_tai() {
		return XH(TRANG_THAI_HIEN_TAI).getText();
	}

	public boolean exist_status() {
		return isElementExistNow(TRANG_THAI_HIEN_TAI);
	}

	public boolean focus_status() {
		return XH(TRANG_THAI_HIEN_TAI).hasFocus();
	}

	// Nhân sự
	public String nhan_su() {
		return XH(SPAN_EMPLOYEE_ID).getText();
	}

	public boolean exist_nhan_su() {
		return isElementExistNow(SPAN_EMPLOYEE_ID);
	}

	public boolean focus_nhan_su() {
		return XH(SPAN_EMPLOYEE_ID).hasFocus();
	}

	// Lý do
	public String ly_do() {
		return XH(SPAN_NAME_LYDO).getText();
	}

	public boolean exist_ly_do() {
		return isElementExistNow(SPAN_NAME_LYDO);
	}

	public boolean focus_ly_do() {
		return XH(SPAN_NAME_LYDO).hasFocus();
	}

	// Loại nghỉ
	public String loai_nghi() {
		return XH(SPAN_NAME_HOLIDAY_STATUS_ID).getText();
	}

	public boolean exist_loai_nghi() {
		return isElementExistNow(SPAN_NAME_HOLIDAY_STATUS_ID);
	}

	public boolean focus_loai_nghi() {
		return XH(SPAN_NAME_HOLIDAY_STATUS_ID).hasFocus();
	}

	// Từ ngày
	public String tu_ngay() {
		return XH(SPAN_NAME_DATE_FROM).getText();
	}

	public boolean exist_tu_ngay() {
		return isElementExistNow(SPAN_NAME_DATE_FROM);
	}

	public boolean focus_tu_ngay() {
		return XH(SPAN_NAME_DATE_FROM).hasFocus();
	}

	// Đến ngày
	public String den_ngay() {
		return XH(SPAN_NAME_DATE_TO).getText();
	}

	public boolean exist_den_ngay() {
		return isElementExistNow(SPAN_NAME_DATE_TO);
	}

	public boolean focus_den_ngay() {
		return XH(SPAN_NAME_DATE_TO).hasFocus();
	}

	// Số ngày nghỉ
	public String so_ngay_nghi() {
		return XH(SPAN_NAME_SO_NGAY).getText();
	}

	public boolean exist_so_ngay_nghi() {
		return isElementExistNow(SPAN_NAME_SO_NGAY);
	}

	public boolean focus_so_ngay_nghi() {
		return XH(SPAN_NAME_SO_NGAY).hasFocus();
	}

	// Ngày tạo
	public String ngay_tao() {
		return XH(SPAN_NAME_DATETIME_CREATE).getText();
	}

	public boolean exist_ngay_tao() {
		return isElementExistNow(SPAN_NAME_DATETIME_CREATE);
	}

	public boolean focus_ngay_tao() {
		return XH(SPAN_NAME_DATETIME_CREATE).hasFocus();
	}
	// END XEM CHI TIẾT ĐĂNG KÝ NGHỈ
}
