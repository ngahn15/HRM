package hrm.steps.serenity;

import hrm.pages.MainPage;
import net.thucydides.core.annotations.Step;
import net.thucydides.core.steps.ScenarioSteps;
/**
 * @author AUTO
 * @version 11/10/2019 3:12:05 AM
 */
public class MainPageSteps extends ScenarioSteps{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	MainPage MPPage;

	// BEGIN MAIN PAGE
	
	public void mo_trinh_duyet() {
		MPPage.open();
		getDriver().manage().window().maximize();
	}
	// User profile
	@Step
	public void click_user_profile() {
		MPPage.click_user_profile();
	}

	@Step
	public boolean exist_user_profile() {
		return MPPage.exist_user_profile();
	}

	@Step
	public boolean enabled_user_profile() {
		return MPPage.enabled_user_profile();
	}

	@Step
	public boolean focus_user_profile() {
		return MPPage.focus_user_profile();
	}

	// Signout
	@Step
	public void click_signout() {
		MPPage.click_signout();
	}

	@Step
	public boolean exist_signout() {
		return MPPage.exist_signout();
	}

	@Step
	public boolean enabled_signout() {
		return MPPage.enabled_signout();
	}

	@Step
	public boolean focus_signout() {
		return MPPage.focus_signout();
	}
	
	@Step
	public void vao_menu(String _duongDanDenMenu) {
		MPPage.vao_menu(_duongDanDenMenu);
	}
	// END MAIN PAGE


}
