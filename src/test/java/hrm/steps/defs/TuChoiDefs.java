package hrm.steps.defs;

import java.util.LinkedHashMap;
import java.util.List;

import org.assertj.core.api.Fail;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hrm.common.steps.CommonSteps;
import hrm.lib.SessionData;
import hrm.steps.serenity.DuyetDangKyNghi.TuChoiSteps;
import net.thucydides.core.annotations.Steps;

/**
 * @author AUTO
 * @version 12/1/2019 1:47:54 PM
 */
public class TuChoiDefs {
	@Steps
	TuChoiSteps TC;

	@Steps
	CommonSteps Common;
	@Given("^Nhap TỪ CHỐI nhu \"([^\"]*)\"$")
	public void Nhap_TU_CHOI_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "TU_CHOI_NHAP";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Từ chối");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sLyDoTuChoi = SessionData.getDataTbVal(DATA_TABLE, row, "Lý do từ chối");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sLyDoTuChoi.isEmpty()) {
				TC.enter_ly_do_tu_choi(sLyDoTuChoi);
			}
			if (!sMessage.isEmpty()) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Message.", sMessage, Common.get_message());
			}
			if (!sMessageAction.isEmpty()) {
				Common.close_message(sMessageAction);
			}
			if (!sAlert.isEmpty()) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Alert.", sAlert, Common.get_text_alert());
			}
			if (!sAlertAction.isEmpty()) {
				if (SessionData.isYes(sAlertAction)) {
					Common.alert_accept();
				} else {
					Common.alert_dismiss();
				}
			}
		}
		Common.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try { SessionData.generateExcelReport(); } catch (Exception e) {}
		// Common.assertion_result_then_assert(DATA_TABLE, SessionData.generateSoftAssertion(DATA_TABLE));
		Common.clear_assertion(DATA_TABLE);
	}
	@Then("^Kiem tra TỪ CHỐI nhu \"([^\"]*)\"$")
	public void Kiem_tra_TU_CHOI_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "TU_CHOI_KIEM_TRA";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Từ chối");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sNhanSu = SessionData.getDataTbVal(DATA_TABLE, row, "Nhân sự");
			String sLyDoTuChoi = SessionData.getDataTbVal(DATA_TABLE, row, "Lý do từ chối");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sNhanSu.isEmpty()) {
				if (sNhanSu.startsWith("@MARK")) {
					if(sNhanSu.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Nhân sự", true, TC.focus_nhan_su());
					} else if(sNhanSu.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Nhân sự", false, TC.focus_nhan_su());
					} else if(sNhanSu.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Nhân sự", true, TC.exist_nhan_su());
					} else if(sNhanSu.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Nhân sự", false, TC.exist_nhan_su());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Nhân sự", sNhanSu, TC.nhan_su());
				}
			}
			if (!sLyDoTuChoi.isEmpty()) {
				if (sLyDoTuChoi.startsWith("@MARK")) {
					if (sLyDoTuChoi.contains("@MARK DISABLED@@") || sLyDoTuChoi.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Lý do từ chối", false, TC.enabled_ly_do_tu_choi());
					} else if (sLyDoTuChoi.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Lý do từ chối", true, TC.enabled_ly_do_tu_choi());
					} else if(sLyDoTuChoi.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Lý do từ chối", true, TC.focus_ly_do_tu_choi());
					} else if(sLyDoTuChoi.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Lý do từ chối", false, TC.focus_ly_do_tu_choi());
					} else if(sLyDoTuChoi.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Lý do từ chối", true, TC.exist_ly_do_tu_choi());
					} else if(sLyDoTuChoi.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Lý do từ chối", false, TC.exist_ly_do_tu_choi());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Lý do từ chối", sLyDoTuChoi, TC.ly_do_tu_choi());
				}
			}
			if (!sMessage.isEmpty()) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Message.", sMessage, Common.get_message());
			}
			if (!sMessageAction.isEmpty()) {
				Common.close_message(sMessageAction);
			}
			if (!sAlert.isEmpty()) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Alert.", sAlert, Common.get_text_alert());
			}
			if (!sAlertAction.isEmpty()) {
				if (SessionData.isYes(sAlertAction)) {
					Common.alert_accept();
				} else {
					Common.alert_dismiss();
				}
			}
		}
		Common.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try { SessionData.generateExcelReport(); } catch (Exception e) {}
		// Common.assertion_result_then_assert(DATA_TABLE, SessionData.generateSoftAssertion(DATA_TABLE));
		Common.clear_assertion(DATA_TABLE);
	}
	@When("^Thuc hien TỪ CHỐI nhu \"([^\"]*)\"$")
	public void Thuc_hien_TU_CHOI_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "TU_CHOI_THUC_HIEN";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Từ chối");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sTuChoi = SessionData.getDataTbVal(DATA_TABLE, row, "Từ chối");
			String sHuyBo = SessionData.getDataTbVal(DATA_TABLE, row, "Hủy bỏ");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sTuChoi.isEmpty()) {
				if (sTuChoi.startsWith("@MARK")) {
					if (sTuChoi.contains("@MARK DISABLED@@") || sTuChoi.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Từ chối", false, TC.enabled_tu_choi());
					} else if (sTuChoi.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Từ chối", true, TC.enabled_tu_choi());
					} else if(sTuChoi.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Từ chối", true, TC.focus_tu_choi());
					} else if(sTuChoi.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Từ chối", false, TC.focus_tu_choi());
					} else if(sTuChoi.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Từ chối", true, TC.exist_tu_choi());
					} else if(sTuChoi.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Từ chối", false, TC.exist_tu_choi());
					}
				} else if (SessionData.isYes(sTuChoi)){
					TC.click_tu_choi();
				}
				else {
					Fail.fail("Recheck input data for Button [Từ chối] : " + sTuChoi);
				}
			}
			if (!sHuyBo.isEmpty()) {
				if (sHuyBo.startsWith("@MARK")) {
					if (sHuyBo.contains("@MARK DISABLED@@") || sHuyBo.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Hủy bỏ", false, TC.enabled_huy_bo());
					} else if (sHuyBo.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Hủy bỏ", true, TC.enabled_huy_bo());
					} else if(sHuyBo.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Hủy bỏ", true, TC.focus_huy_bo());
					} else if(sHuyBo.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Hủy bỏ", false, TC.focus_huy_bo());
					} else if(sHuyBo.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Hủy bỏ", true, TC.exist_huy_bo());
					} else if(sHuyBo.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Hủy bỏ", false, TC.exist_huy_bo());
					}
				} else if (SessionData.isYes(sHuyBo)){
					TC.click_huy_bo();
				}
				else {
					Fail.fail("Recheck input data for Button [Hủy bỏ] : " + sHuyBo);
				}
			}
			if (!sMessage.isEmpty()) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Message.", sMessage, Common.get_message());
			}
			if (!sMessageAction.isEmpty()) {
				Common.close_message(sMessageAction);
			}
			if (!sAlert.isEmpty()) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Alert.", sAlert, Common.get_text_alert());
			}
			if (!sAlertAction.isEmpty()) {
				if (SessionData.isYes(sAlertAction)) {
					Common.alert_accept();
				} else {
					Common.alert_dismiss();
				}
			}
		}
		Common.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try { SessionData.generateExcelReport(); } catch (Exception e) {}
		// Common.assertion_result_then_assert(DATA_TABLE, SessionData.generateSoftAssertion(DATA_TABLE));
		Common.clear_assertion(DATA_TABLE);
	}
	@Then("^Kiem tra cac Control hien thi day du tren TỪ CHỐI$")
	public void Kiem_tra_cac_Control_hien_thi_day_du_tren_TU_CHOI() throws Exception {
		String DATA_TABLE = "TU_CHOI_VERIFY_CONTROL_VISIBLE";
		SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra cac Control hien thi day du tren Từ chối");
		SessionData.addSoftAssertion(DATA_TABLE, "I1_V", "VISIBLE/INVISIBLE: Từ chối", true, TC.exist_tu_choi());
		SessionData.addSoftAssertion(DATA_TABLE, "I2_V", "VISIBLE/INVISIBLE: Hủy bỏ", true, TC.exist_huy_bo());
		SessionData.addSoftAssertion(DATA_TABLE, "I3_V", "VISIBLE/INVISIBLE: Nhân sự", true, TC.exist_nhan_su());
		SessionData.addSoftAssertion(DATA_TABLE, "I4_V", "VISIBLE/INVISIBLE: Lý do từ chối", true, TC.exist_ly_do_tu_choi());
		Common.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try { SessionData.generateExcelReport(); } catch (Exception e) {}
		// Common.assertion_result_then_assert(DATA_TABLE, SessionData.generateSoftAssertion(DATA_TABLE));
		Common.clear_assertion(DATA_TABLE);
	}
	@Then("^Kiem tra Tab Index cac Control tren TỪ CHỐI$")
	public void Kiem_tra_Tab_Index_cac_Control_tren_TU_CHOI() throws Exception {
		String DATA_TABLE = "TU_CHOI_VERIFY_CONTROL_TAB";
		SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Tab Index cua Control tren Từ chối");
		Common.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try { SessionData.generateExcelReport(); } catch (Exception e) {}
		// Common.assertion_result_then_assert(DATA_TABLE, SessionData.generateSoftAssertion(DATA_TABLE));
		Common.clear_assertion(DATA_TABLE);
	}
}
