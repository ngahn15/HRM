package hrm.steps.defs;

import java.util.LinkedHashMap;
import java.util.List;

import org.assertj.core.api.Fail;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hrm.common.steps.CommonSteps;
import hrm.lib.SessionData;
import hrm.steps.serenity.LoginSteps;
import hrm.steps.serenity.MainPageSteps;
import net.thucydides.core.annotations.Steps;

/**
 * @author AUTO
 * @version 11/10/2019 3:12:05 AM
 */
public class LoginDefs {
	@Steps
	LoginSteps loginSteps;

	@Steps
	MainPageSteps mainPageSteps;

	@Steps
	CommonSteps commonSteps;
	
	@Given("^Người dùng truy cập vào hệ thống$")
	public void nguoi_dung_truy_cap_vao_he_thong() {
		loginSteps.mo_trinh_duyet();
	}

	@Given("^Nhap LOGIN nhu \"([^\"]*)\"$")
	public void Nhap_LOGIN_nhu(String dataKey, List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "LOGIN_NHAP";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra LOGIN");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sEmail = SessionData.getDataTbVal(DATA_TABLE, row, "Email");
			String sMatKhau = SessionData.getDataTbVal(DATA_TABLE, row, "Mật khẩu");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sEmail.isEmpty()) {
				loginSteps.enter_email(sEmail);
			}
			if (!sMatKhau.isEmpty()) {
				loginSteps.enter_mat_khau(sMatKhau);
			}
			if (!sMessage.isEmpty()) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Message.", sMessage,
						commonSteps.get_message());
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
		commonSteps.assertion_result_then_assert(DATA_TABLE, SessionData.generateSoftAssertion(DATA_TABLE));
		commonSteps.clear_assertion(DATA_TABLE);
	}

	@Then("^Kiem tra LOGIN nhu \"([^\"]*)\"$")
	public void Kiem_tra_LOGIN_nhu(String dataKey, List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "LOGIN_KIEM_TRA";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra LOGIN");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sEmail = SessionData.getDataTbVal(DATA_TABLE, row, "Email");
			String sMatKhau = SessionData.getDataTbVal(DATA_TABLE, row, "Mật khẩu");
			String sMessageErrorLogin = SessionData.getDataTbVal(DATA_TABLE, row, "Message error login");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sEmail.isEmpty()) {
				if (sEmail.startsWith("@MARK")) {
					if (sEmail.contains("@MARK DISABLED@@") || sEmail.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Email", false,
								loginSteps.enabled_email());
					} else if (sEmail.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Email", true,
								loginSteps.enabled_email());
					} else if (sEmail.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Email", true,
								loginSteps.focus_email());
					} else if (sEmail.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Email", false,
								loginSteps.focus_email());
					} else if (sEmail.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Email", true,
								loginSteps.exist_email());
					} else if (sEmail.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Email", false,
								loginSteps.exist_email());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Email", sEmail, loginSteps.email());
				}
			}
			if (!sMatKhau.isEmpty()) {
				if (sMatKhau.startsWith("@MARK")) {
					if (sMatKhau.contains("@MARK DISABLED@@") || sMatKhau.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Mật khẩu", false,
								loginSteps.enabled_mat_khau());
					} else if (sMatKhau.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Mật khẩu", true,
								loginSteps.enabled_mat_khau());
					} else if (sMatKhau.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Mật khẩu", true,
								loginSteps.focus_mat_khau());
					} else if (sMatKhau.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Mật khẩu", false,
								loginSteps.focus_mat_khau());
					} else if (sMatKhau.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Mật khẩu", true,
								loginSteps.exist_mat_khau());
					} else if (sMatKhau.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Mật khẩu", false,
								loginSteps.exist_mat_khau());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Mật khẩu", sMatKhau, loginSteps.mat_khau());
				}
			}
			if (!sMessageErrorLogin.isEmpty()) {
				if (sMessageErrorLogin.startsWith("@MARK")) {
					if (sMessageErrorLogin.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Message error login", true,
								loginSteps.focus_message_error_login());
					} else if (sMessageErrorLogin.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Message error login", false,
								loginSteps.focus_message_error_login());
					} else if (sMessageErrorLogin.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Message error login", true,
								loginSteps.exist_message_error_login());
					} else if (sMessageErrorLogin.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Message error login", false,
								loginSteps.exist_message_error_login());
					}
				} else {
					if (loginSteps.exist_message_error_login()) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "Message error login", sMessageErrorLogin,
								loginSteps.message_error_login());
					} else {
						if (sEmail.isEmpty() && loginSteps.exist_validation_Message_email()) {
							SessionData.addSoftAssertion(DATA_TABLE, sKey, "Message error login", sMessageErrorLogin,
									loginSteps.validationMessageEmail());
						} else if (sMatKhau.isEmpty() && loginSteps.exist_validation_Message_Password()) {
							SessionData.addSoftAssertion(DATA_TABLE, sKey, "Message error login", sMessageErrorLogin,
									loginSteps.validationMessagePassword());
						}
					}

				}
			}
			if (!sMessage.isEmpty()) {
				if (mainPageSteps.exist_user_profile()) {
					String actualMessage = "Success";
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Message.", sMessage, actualMessage);
				}
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
//		commonSteps.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try {
			SessionData.generateExcelReport();
		} catch (Exception e) {
		}
//		commonSteps.assertion_result_then_assert(DATA_TABLE, SessionData.generateSoftAssertion(DATA_TABLE));
		commonSteps.clear_assertion(DATA_TABLE);
	}

	@When("^Thuc hien LOGIN nhu \"([^\"]*)\"$")
	public void Thuc_hien_LOGIN_nhu(String dataKey, List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "LOGIN_THUC_HIEN";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra LOGIN");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sDangNhap = SessionData.getDataTbVal(DATA_TABLE, row, "Đăng nhập");
			String sDatLaiMatKhau = SessionData.getDataTbVal(DATA_TABLE, row, "Đặt lại mật khẩu");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sDangNhap.isEmpty()) {
				if (sDangNhap.startsWith("@MARK")) {
					if (sDangNhap.contains("@MARK DISABLED@@") || sDangNhap.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Đăng nhập", false,
								loginSteps.enabled_dang_nhap());
					} else if (sDangNhap.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Đăng nhập", true,
								loginSteps.enabled_dang_nhap());
					} else if (sDangNhap.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Đăng nhập", true,
								loginSteps.focus_dang_nhap());
					} else if (sDangNhap.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Đăng nhập", false,
								loginSteps.focus_dang_nhap());
					} else if (sDangNhap.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Đăng nhập", true,
								loginSteps.exist_dang_nhap());
					} else if (sDangNhap.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Đăng nhập", false,
								loginSteps.exist_dang_nhap());
					}
				} else if (SessionData.isYes(sDangNhap)) {
					loginSteps.click_dang_nhap();
				} else {
					Fail.fail("Recheck input data for Button [Đăng nhập] : " + sDangNhap);
				}
			}
			if (!sDatLaiMatKhau.isEmpty()) {
				if (sDatLaiMatKhau.startsWith("@MARK")) {
					if (sDatLaiMatKhau.contains("@MARK DISABLED@@") || sDatLaiMatKhau.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Đặt lại mật khẩu", false,
								loginSteps.enabled_dat_lai_mat_khau());
					} else if (sDatLaiMatKhau.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Đặt lại mật khẩu", true,
								loginSteps.enabled_dat_lai_mat_khau());
					} else if (sDatLaiMatKhau.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Đặt lại mật khẩu", true,
								loginSteps.focus_dat_lai_mat_khau());
					} else if (sDatLaiMatKhau.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Đặt lại mật khẩu", false,
								loginSteps.focus_dat_lai_mat_khau());
					} else if (sDatLaiMatKhau.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Đặt lại mật khẩu", true,
								loginSteps.exist_dat_lai_mat_khau());
					} else if (sDatLaiMatKhau.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Đặt lại mật khẩu", false,
								loginSteps.exist_dat_lai_mat_khau());
					}
				} else if (SessionData.isYes(sDatLaiMatKhau)) {
					loginSteps.click_dat_lai_mat_khau();
				} else {
					Fail.fail("Recheck input data for Button [Đặt lại mật khẩu] : " + sDatLaiMatKhau);
				}
			}
			if (!sMessage.isEmpty()) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Message.", sMessage,
						commonSteps.get_message());
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
//		commonSteps.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try {
			SessionData.generateExcelReport();
		} catch (Exception e) {
		}
		commonSteps.assertion_result_then_assert(DATA_TABLE, SessionData.generateSoftAssertion(DATA_TABLE));
		commonSteps.clear_assertion(DATA_TABLE);
	}

}
