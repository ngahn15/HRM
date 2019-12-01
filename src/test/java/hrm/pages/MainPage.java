package hrm.pages;

import org.openqa.selenium.WebDriver;

import hrm.lib.MyPageObject;
import net.sourceforge.htmlunit.corejs.javascript.ast.SwitchCase;

/**
 * @author AUTO
 * @version 11/10/2019 3:12:06 AM
 */
public class MainPage extends MyPageObject {
	public MainPage(WebDriver driver) {
		super(driver);
	}

	// BEGIN MAIN PAGE
	private final String xPathMP = "";

	// User profile
	public void click_user_profile() {
		clickOnElement("//span[@class='oe_topbar_name']");
	}

	public boolean exist_user_profile() {
		return element("//span[@class='oe_topbar_name']").isVisible();
	}

	public boolean enabled_user_profile() {
		return XH("//span[@class='oe_topbar_name']").isEnabled();
	}

	public boolean focus_user_profile() {
		return XH("//span[@class='oe_topbar_name']").hasFocus();
	}

	// Signout
	public void click_signout() {
		clickOnElement("//a[contains(text(),'Đăng xuất')]");
		try {
			Thread.sleep(500);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public boolean exist_signout() {
		return isElementExistNow("//a[contains(text(),'Đăng xuất')]");
	}

	public boolean enabled_signout() {
		return XH("//a[contains(text(),'Đăng xuất')]").isEnabled();
	}

	public boolean focus_signout() {
		return XH("//a[contains(text(),'Đăng xuất')]").hasFocus();
	}

	// Begin Vao menu
//	public void vao_menu(String _duongDanDenMenu) {
//		String[] asMenuPath = _duongDanDenMenu.split(">");
//		vao_man_hinh_trong_menu_header(asMenuPath[0]);
//		waitForEverythingComplete();
//		vao_man_hinh_trong_danh_sach_cap_1(asMenuPath[1]);
//		waitForEverythingComplete();
//		vao_man_hinh_tao_moi();
//		waitForEverythingComplete();
//	}

	public void vao_menu(String _duongDanDenMenu) {
		String[] asMenuPath = _duongDanDenMenu.split(">");
		int numPath = asMenuPath.length;

		switch (numPath) {
		case 1:
			vao_man_hinh_trong_menu_header(asMenuPath[0]);
			waitForEverythingComplete();
			break;
		case 2:
			vao_man_hinh_trong_menu_header(asMenuPath[0]);
			waitForEverythingComplete();
			vao_man_hinh_trong_danh_sach_cap_1(asMenuPath[1]);
			waitForEverythingComplete();
			break;
		case 3:
			vao_man_hinh_trong_menu_header(asMenuPath[0]);
			waitForEverythingComplete();
			vao_man_hinh_trong_danh_sach_cap_1(asMenuPath[1]);
			waitForEverythingComplete();
			vao_man_hinh_tao_moi();
			waitForEverythingComplete();
			break;
		default:
			break;
		}

	}

	private boolean module_header_bar_show(String _module) {
		String xPathMenuHeaders = "//ul[@class='o_menu_sections']//li//a//span[contains(text(),'" + _module + "')]";
		return element(xPathMenuHeaders).isVisible();
	}

	private void vao_man_hinh_trong_menu_header(String _tenManHinh) {
		String xPathMenuHeaders = "//ul[@class='o_menu_sections']//li//a//span[contains(text(),'" + _tenManHinh + "')]";
		if (module_header_bar_show(_tenManHinh)) {
			clickOnElement(xPathMenuHeaders);
		} else {
			System.out.println("HAHAHAH");
			String xPathMenuMore = "//ul[@class='o_menu_sections']//li//a[@class='nav-link dropdown-toggle o-no-caret']";
			clickOnElement(xPathMenuMore);
			String xPathModule = "//ul[@class='dropdown-menu show']//li//a//span[contains(text(),'" + _tenManHinh
					+ "')]";
			clickOnElement(xPathModule);
		}

	}

	private void vao_man_hinh_trong_danh_sach_cap_1(String _tenDanhSachCap1) {
		String xPathMenuLv1 = "//div[@class='mk_apps_sidebar_panel']//li//span[contains(text(),'" + _tenDanhSachCap1
				+ "')]";
		clickOnElement(xPathMenuLv1);
	}

	private void vao_man_hinh_tao_moi() {
		String addBtn = "//button[@class='btn btn-primary o_list_button_add']";
		clickOnElement(addBtn);
	}
	// End Vao menu

	// END MAIN PAGE
}
