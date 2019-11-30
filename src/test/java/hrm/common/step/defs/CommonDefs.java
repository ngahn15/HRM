package hrm.common.step.defs;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import hrm.common.steps.CommonSteps;
import hrm.lib.DiffMatchPatch;
import hrm.lib.Excel;
import hrm.lib.ExcelReport;
import hrm.lib.PDF;
import hrm.lib.SessionData;
import hrm.lib.DiffMatchPatch.Diff;
import hrm.lib.DiffMatchPatch.Operation;
import hrm.steps.serenity.LoginSteps;
import hrm.steps.serenity.MainPageSteps;
import net.serenitybdd.core.Serenity;
import net.thucydides.core.annotations.Steps;

public class CommonDefs {
	private final String EMAIl = "Email";
	@Steps
	CommonSteps commonSteps;

	@Steps
	MainPageSteps MPPageSteps;

	@Steps
	LoginSteps loginSteps;

	// Begin Session Data

	@Given("^Thiet lap du lieu nhu \\\"([^\\\"]*)\\\"$")
	public void nguoi_dung_thiet_lap_du_lieu_nhu(String dataKey, List<List<String>> dataTable) throws Throwable {
		String DATA_TABLE = "SESSION_DATA";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sSessionDataKey = SessionData.getDataTbVal(DATA_TABLE, row, "Session Data KEY");
			String sSessionDataValue = SessionData.getDataTbVal(DATA_TABLE, row, "Session Data Value");
			sSessionDataValue = sSessionDataValue.replaceAll("/s", " "); // replace /s by space
			sSessionDataValue = SessionData.replaceAllAnnotation(sSessionDataValue);
			if (!sKey.isEmpty()) {
			}
			if (!sSessionDataKey.isEmpty() && !sSessionDataValue.isEmpty()) {
				SessionData.addToListString(sSessionDataKey, sSessionDataValue);
			}
		}
	}

	// End Session Data

	@Given("^Người dùng đăng nhập vào hệ thống với email \"([^\"]*)\" và mật khẩu \"([^\"]*)\"$")
	public void nguoi_dung_dang_nhap_vao_he_thong_voi_email_va_mat_khau(String _email, String _password)
			throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		MPPageSteps.mo_trinh_duyet();
		loginSteps.enter_email(_email);
		loginSteps.enter_mat_khau(_password);
		;
		loginSteps.click_dang_nhap();
	}

	@Given("^Nguoi dung dang nhap vao he thong nhu \"([^\"]*)\"$")
	public void nguoi_dung_dang_nhap_vao_he_thong_nhu(String dataKey, List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "LOGIN";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
		}
		for (int row : data.keySet()) {
			// String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sEmail = SessionData.getDataTbVal(DATA_TABLE, row, "Email");
			String sMatKhau = SessionData.getDataTbVal(DATA_TABLE, row, "Password");
			String sHienThiThongBao = SessionData.getDataTbVal(DATA_TABLE, row, "Hien thi thong bao");
			System.out.println("Nguoi dung dang nhap vao he thong nhu LOGIN");
			if (MPPageSteps.exist_signout()) {
				System.out.println("Click logout");
				MPPageSteps.click_signout();
			}
			MPPageSteps.mo_trinh_duyet();
			loginSteps.enter_email(sEmail);
			SessionData.addUniqueToListString(EMAIl, sEmail);
			loginSteps.enter_mat_khau(sMatKhau);
			loginSteps.click_dang_nhap();
			if (!sHienThiThongBao.isEmpty()) {
				assertThat(sHienThiThongBao).isEqualTo(loginSteps.message_error_login())
						.as("***** ASSERT FAIL ***** Thông báo hiển thị không phải là : " + sHienThiThongBao);
			}
		}
	}

	@Then("^Nguoi dung vao menu nhu \"([^\"]*)\"$")
	public void nguoi_dung_vao_menu_nhu(String dataKey, List<List<String>> dataTable) throws Throwable {
		String DATA_TABLE = "MENU";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sMenu = SessionData.getDataTbVal(DATA_TABLE, row, "MENU");
			if (!sKey.isEmpty()) {
			}
			if (!sMenu.isEmpty()) {
				MPPageSteps.vao_menu(sMenu);
			}
		}
	}

	@Then("^Người dùng vào menu \"([^\"]*)\"$")
	public void nguoi_dung_vao_menu(String _duongDanMenu) throws Throwable {
		MPPageSteps.vao_menu(_duongDanMenu);
	}

	// Begin Soft Assertion
	@Then("^user previews result of \"([^\"]*)\" Soft Assertion$")
	public void user_previews_result_of_Soft_Assertion(String _assertionKey) throws Throwable {
		commonSteps.assertion_result(SessionData.generateSoftAssertion(_assertionKey));
	}

	@Then("^user previews result of Soft Assertion$")
	public void user_previews_result_of_Soft_Assertion() throws Throwable {
		commonSteps.assertion_result(SessionData.generateSoftAssertion());
	}

	@Then("^user verifies result of \"([^\"]*)\" Soft Assertion$")
	public void user_verifies_result_of_Soft_Assertion(String _assertionKey) throws Throwable {
		commonSteps.assertion_result_then_assert(_assertionKey, SessionData.generateSoftAssertion(_assertionKey));
	}

	@Then("^user verifies result of Soft Assertion$")
	public void user_verifies_result_of_Soft_Assertion() throws Throwable {
		commonSteps.assertion_result_then_assert("", SessionData.generateSoftAssertion());
	}

	@Then("^user clears result of \"([^\"]*)\" Soft Assertion$")
	public void user_clears_result_of_Soft_Assertion(String _assertionKey) throws Throwable {
		commonSteps.clear_assertion(_assertionKey);
	}

	@Then("^user clears result of Soft Assertion$")
	public void user_clears_result_of_Soft_Assertion() throws Throwable {
		commonSteps.clear_assertion("");
	}

	@Then("^user previews failure result of \"([^\"]*)\" Soft Assertion$")
	public void user_previews_failure_result_of_Soft_Assertion(String _assertionKey) throws Throwable {
		commonSteps.assertion_result(SessionData.generateSoftAssertionFailureOnly(_assertionKey));
	}

	@Then("^user verifies result of \"([^\"]*)\" Soft Assertion and show failure result$")
	public void user_verifies_result_of_Soft_Assertion_and_show_failure_result(String _assertionKey) throws Throwable {
		commonSteps.assertion_result_then_assert(_assertionKey,
				SessionData.generateSoftAssertionFailureOnly(_assertionKey));
	}

	@Then("^user previews failure result of Soft Assertion$")
	public void user_previews_failure_result_of_Soft_Assertion() throws Throwable {
		commonSteps.assertion_result(SessionData.generateSoftAssertionFailureOnly());
	}

	@Then("^user verifies failure result of Soft Assertion$")
	public void user_verifies_failure_result_of_Soft_Assertion() throws Throwable {
		commonSteps.assertion_result_then_assert("", SessionData.generateSoftAssertionFailureOnly());
	}
	// End Soft Assertion

// log to excel
	@Then("^Log to excel$")
	public void log_to_excel(List<List<String>> _table) {
		List<List<String>> testResult = Serenity.sessionVariableCalled("ALL_TEST_RESULT");
		ExcelReport er = new ExcelReport(_table.get(1).get(0), _table.get(1).get(1), _table.get(1).get(2));
		er.set_result_to_workbook(testResult);
		er.write_and_close_io();
	}
}
