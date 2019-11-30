package hrm.steps.defs;

import java.util.LinkedHashMap;
import java.util.List;

import org.assertj.core.api.Fail;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hrm.common.steps.CommonSteps;
import hrm.lib.SessionData;
import hrm.steps.serenity.MainPageSteps;
import net.thucydides.core.annotations.Steps;

/**
 * @author AUTO
 * @version 11/10/2019 3:12:05 AM
 */
public class MainPageDefs {
	@Steps
	MainPageSteps MPSteps;

	@Steps
	CommonSteps commonSteps;

	@Given("^Nhap MAIN PAGE nhu \"([^\"]*)\"$")
	public void Nhap_MAIN_PAGE_nhu(String dataKey, List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "MAIN_PAGE_NHAP";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Main Page");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sMessage.isEmpty()) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Message.", sMessage, commonSteps.get_message());
			}
			if (!sMessageAction.isEmpty()) {
				if (SessionData.isYes(sMessageAction)) {
					commonSteps.close_message();
				} else {
					// TBD
				}
			}
			if (!sAlert.isEmpty()) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Alert.", sAlert, commonSteps.get_text_alert());
			}
			if (!sAlertAction.isEmpty()) {
				if (SessionData.isYes(sAlertAction)) {
					commonSteps.alert_accept();
				} else {
					commonSteps.alert_dismiss();
				}
			}
		}
		commonSteps.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try {
			SessionData.generateExcelReport();
		} catch (Exception e) {
		}
		// commonSteps.assertion_result_then_assert(DATA_TABLE,
		// SessionData.generateSoftAssertion(DATA_TABLE));
//		commonSteps.clear_assertion(DATA_TABLE);
	}

	@Then("^Kiem tra MAIN PAGE nhu \"([^\"]*)\"$")
	public void Kiem_tra_MAIN_PAGE_nhu(String dataKey, List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "MAIN_PAGE_KIEM_TRA";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Main Page");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sMessage.isEmpty()) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Message.", sMessage, commonSteps.get_message());
			}
			if (!sMessageAction.isEmpty()) {
				if (SessionData.isYes(sMessageAction)) {
					commonSteps.close_message();
				} else {
					// TBD
				}
			}
			if (!sAlert.isEmpty()) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Alert.", sAlert, commonSteps.get_text_alert());
			}
			if (!sAlertAction.isEmpty()) {
				if (SessionData.isYes(sAlertAction)) {
					commonSteps.alert_accept();
				} else {
					commonSteps.alert_dismiss();
				}
			}
		}
		commonSteps.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try {
			SessionData.generateExcelReport();
		} catch (Exception e) {
		}
		// commonSteps.assertion_result_then_assert(DATA_TABLE,
		// SessionData.generateSoftAssertion(DATA_TABLE));
//		commonSteps.clear_assertion(DATA_TABLE);
	}

	@When("^Thuc hien MAIN PAGE nhu \"([^\"]*)\"$")
	public void Thuc_hien_MAIN_PAGE_nhu(String dataKey, List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "MAIN_PAGE_THUC_HIEN";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Main Page");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sUserProfile = SessionData.getDataTbVal(DATA_TABLE, row, "User profile");
			String sSignout = SessionData.getDataTbVal(DATA_TABLE, row, "Signout");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sUserProfile.isEmpty()) {
				if (sUserProfile.startsWith("@MARK")) {
					if (sUserProfile.contains("@MARK DISABLED@@") || sUserProfile.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: User profile", false,
								MPSteps.enabled_user_profile());
					} else if (sUserProfile.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: User profile", true,
								MPSteps.enabled_user_profile());
					} else if (sUserProfile.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: User profile", true,
								MPSteps.focus_user_profile());
					} else if (sUserProfile.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: User profile", false,
								MPSteps.focus_user_profile());
					} else if (sUserProfile.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: User profile", true,
								MPSteps.exist_user_profile());
					} else if (sUserProfile.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: User profile", false,
								MPSteps.exist_user_profile());
					}
				} else if (SessionData.isYes(sUserProfile)) {
					MPSteps.click_user_profile();
				} else {
					Fail.fail("Recheck input data for Button [User profile] : " + sUserProfile);
				}
			}
			if (!sSignout.isEmpty()) {
				if (sSignout.startsWith("@MARK")) {
					if (sSignout.contains("@MARK DISABLED@@") || sSignout.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Signout", false,
								MPSteps.enabled_signout());
					} else if (sSignout.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Signout", true,
								MPSteps.enabled_signout());
					} else if (sSignout.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Signout", true,
								MPSteps.focus_signout());
					} else if (sSignout.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Signout", false,
								MPSteps.focus_signout());
					} else if (sSignout.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Signout", true,
								MPSteps.exist_signout());
					} else if (sSignout.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Signout", false,
								MPSteps.exist_signout());
					}
				} else if (SessionData.isYes(sSignout)) {
					MPSteps.click_signout();
				} else {
					Fail.fail("Recheck input data for Button [Signout] : " + sSignout);
				}
			}
			if (!sMessage.isEmpty()) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Message.", sMessage, commonSteps.get_message());
			}
			if (!sMessageAction.isEmpty()) {
				if (SessionData.isYes(sMessageAction)) {
					commonSteps.close_message();
				} else {
					// TBD
				}
			}
			if (!sAlert.isEmpty()) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Alert.", sAlert, commonSteps.get_text_alert());
			}
			if (!sAlertAction.isEmpty()) {
				if (SessionData.isYes(sAlertAction)) {
					commonSteps.alert_accept();
				} else {
					commonSteps.alert_dismiss();
				}
			}
		}
		commonSteps.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try {
			SessionData.generateExcelReport();
		} catch (Exception e) {
		}
		// commonSteps.assertion_result_then_assert(DATA_TABLE,
		// SessionData.generateSoftAssertion(DATA_TABLE));
//		commonSteps.clear_assertion(DATA_TABLE);
	}

	@Then("^Kiem tra cac Control hien thi day du tren MAIN PAGE$")
	public void Kiem_tra_cac_Control_hien_thi_day_du_tren_MAIN_PAGE() throws Exception {
		String DATA_TABLE = "MAIN_PAGE_VERIFY_CONTROL_VISIBLE";
		SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra cac Control hien thi day du tren Main Page");
		SessionData.addSoftAssertion(DATA_TABLE, "A1_V", "VISIBLE/INVISIBLE: User profile", true,
				MPSteps.exist_user_profile());
		SessionData.addSoftAssertion(DATA_TABLE, "A2_V", "VISIBLE/INVISIBLE: Signout", true, MPSteps.exist_signout());
		commonSteps.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try {
			SessionData.generateExcelReport();
		} catch (Exception e) {
		}
		// commonSteps.assertion_result_then_assert(DATA_TABLE,
		// SessionData.generateSoftAssertion(DATA_TABLE));
//		commonSteps.clear_assertion(DATA_TABLE);
	}

	@Then("^Kiem tra Tab Index cac Control tren MAIN PAGE$")
	public void Kiem_tra_Tab_Index_cac_Control_tren_MAIN_PAGE() throws Exception {
		String DATA_TABLE = "MAIN_PAGE_VERIFY_CONTROL_TAB";
		SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Tab Index cua Control tren Main Page");
		commonSteps.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try {
			SessionData.generateExcelReport();
		} catch (Exception e) {
		}
		// commonSteps.assertion_result_then_assert(DATA_TABLE,
		// SessionData.generateSoftAssertion(DATA_TABLE));
//		commonSteps.clear_assertion(DATA_TABLE);
	}
}
