package hrm.steps.defs;

import java.util.LinkedHashMap;
import java.util.List;

import org.assertj.core.api.Fail;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hrm.common.steps.CommonSteps;
import hrm.lib.SessionData;
import hrm.steps.serenity.DuyetDangKyNghi.PheDuyetSteps;
import net.thucydides.core.annotations.Steps;

/**
 * @author AUTO
 * @version 12/1/2019 1:47:54 PM
 */
public class PheDuyetDefs {
	@Steps
	PheDuyetSteps PD;

	@Steps
	CommonSteps Common;
	@Given("^Nhap PHÊ DUYỆT nhu \"([^\"]*)\"$")
	public void Nhap_PHE_DUYET_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "PHE_DUYET_NHAP";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Phê duyệt");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sNguoiPheDuyetLan2 = SessionData.getDataTbVal(DATA_TABLE, row, "Người phê duyệt lần 2");
			String sDuyetLan2 = SessionData.getDataTbVal(DATA_TABLE, row, "Duyệt lần 2");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sNguoiPheDuyetLan2.isEmpty()) {
				PD.select_nguoi_phe_duyet_lan_2(sNguoiPheDuyetLan2);
			}
			if (!sDuyetLan2.isEmpty()) {
				PD.set_duyet_lan_2(sDuyetLan2);
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
	@Then("^Kiem tra PHÊ DUYỆT nhu \"([^\"]*)\"$")
	public void Kiem_tra_PHE_DUYET_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "PHE_DUYET_KIEM_TRA";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Phê duyệt");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sNhanSu = SessionData.getDataTbVal(DATA_TABLE, row, "Nhân sự");
			String sNguoiPheDuyetLan2 = SessionData.getDataTbVal(DATA_TABLE, row, "Người phê duyệt lần 2");
			String sDuyetLan2 = SessionData.getDataTbVal(DATA_TABLE, row, "Duyệt lần 2");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sNhanSu.isEmpty()) {
				if (sNhanSu.startsWith("@MARK")) {
					if(sNhanSu.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Nhân sự", true, PD.focus_nhan_su());
					} else if(sNhanSu.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Nhân sự", false, PD.focus_nhan_su());
					} else if(sNhanSu.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Nhân sự", true, PD.exist_nhan_su());
					} else if(sNhanSu.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Nhân sự", false, PD.exist_nhan_su());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Nhân sự", sNhanSu, PD.nhan_su());
				}
			}
			if (!sNguoiPheDuyetLan2.isEmpty()) {
				if (sNguoiPheDuyetLan2.startsWith("@MARK")) {
					if (sNguoiPheDuyetLan2.contains("@MARK DISABLED@@") || sNguoiPheDuyetLan2.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Người phê duyệt lần 2", false, PD.enabled_nguoi_phe_duyet_lan_2());
					} else if (sNguoiPheDuyetLan2.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Người phê duyệt lần 2", true, PD.enabled_nguoi_phe_duyet_lan_2());
					} else if(sNguoiPheDuyetLan2.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Người phê duyệt lần 2", true, PD.focus_nguoi_phe_duyet_lan_2());
					} else if(sNguoiPheDuyetLan2.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Người phê duyệt lần 2", false, PD.focus_nguoi_phe_duyet_lan_2());
					} else if(sNguoiPheDuyetLan2.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Người phê duyệt lần 2", true, PD.exist_nguoi_phe_duyet_lan_2());
					} else if(sNguoiPheDuyetLan2.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Người phê duyệt lần 2", false, PD.exist_nguoi_phe_duyet_lan_2());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Người phê duyệt lần 2", sNguoiPheDuyetLan2, PD.nguoi_phe_duyet_lan_2());
				}
			}
			if (!sDuyetLan2.isEmpty()) {
				if (sDuyetLan2.startsWith("@MARK")) {
					if (sDuyetLan2.contains("@MARK DISABLED@@") || sDuyetLan2.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Duyệt lần 2", false, PD.enabled_duyet_lan_2());
					} else if (sDuyetLan2.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Duyệt lần 2", true, PD.enabled_duyet_lan_2());
					} else if(sDuyetLan2.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Duyệt lần 2", true, PD.focus_duyet_lan_2());
					} else if(sDuyetLan2.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Duyệt lần 2", false, PD.focus_duyet_lan_2());
				} else if (sDuyetLan2.contains("@MARK SELECT@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "SELECT/DESESLECT: Duyệt lần 2", true, PD.duyet_lan_2());
					} else if (sDuyetLan2.contains("@MARK DESELECT@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "SELECT/DESESLECT: Duyệt lần 2", false, PD.duyet_lan_2());
					} else if(sDuyetLan2.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Duyệt lần 2", true, PD.exist_duyet_lan_2());
					} else if(sDuyetLan2.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Duyệt lần 2", false, PD.exist_duyet_lan_2());
					}
				} else {
					Fail.fail("Recheck input data for ChkBox :Duyệt lần 2");
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
	@When("^Thuc hien PHÊ DUYỆT nhu \"([^\"]*)\"$")
	public void Thuc_hien_PHE_DUYET_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "PHE_DUYET_THUC_HIEN";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Phê duyệt");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sPheDuyet = SessionData.getDataTbVal(DATA_TABLE, row, "Phê duyệt");
			String sHuyBo = SessionData.getDataTbVal(DATA_TABLE, row, "Hủy bỏ");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sPheDuyet.isEmpty()) {
				if (sPheDuyet.startsWith("@MARK")) {
					if (sPheDuyet.contains("@MARK DISABLED@@") || sPheDuyet.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Phê duyệt", false, PD.enabled_phe_duyet());
					} else if (sPheDuyet.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Phê duyệt", true, PD.enabled_phe_duyet());
					} else if(sPheDuyet.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Phê duyệt", true, PD.focus_phe_duyet());
					} else if(sPheDuyet.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Phê duyệt", false, PD.focus_phe_duyet());
					} else if(sPheDuyet.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Phê duyệt", true, PD.exist_phe_duyet());
					} else if(sPheDuyet.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Phê duyệt", false, PD.exist_phe_duyet());
					}
				} else if (SessionData.isYes(sPheDuyet)){
					PD.click_phe_duyet();
				}
				else {
					Fail.fail("Recheck input data for Button [Phê duyệt] : " + sPheDuyet);
				}
			}
			if (!sHuyBo.isEmpty()) {
				if (sHuyBo.startsWith("@MARK")) {
					if (sHuyBo.contains("@MARK DISABLED@@") || sHuyBo.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Hủy bỏ", false, PD.enabled_huy_bo());
					} else if (sHuyBo.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Hủy bỏ", true, PD.enabled_huy_bo());
					} else if(sHuyBo.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Hủy bỏ", true, PD.focus_huy_bo());
					} else if(sHuyBo.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Hủy bỏ", false, PD.focus_huy_bo());
					} else if(sHuyBo.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Hủy bỏ", true, PD.exist_huy_bo());
					} else if(sHuyBo.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Hủy bỏ", false, PD.exist_huy_bo());
					}
				} else if (SessionData.isYes(sHuyBo)){
					PD.click_huy_bo();
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
	@Then("^Kiem tra cac Control hien thi day du tren PHÊ DUYỆT$")
	public void Kiem_tra_cac_Control_hien_thi_day_du_tren_PHE_DUYET() throws Exception {
		String DATA_TABLE = "PHE_DUYET_VERIFY_CONTROL_VISIBLE";
		SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra cac Control hien thi day du tren Phê duyệt");
		SessionData.addSoftAssertion(DATA_TABLE, "I1_V", "VISIBLE/INVISIBLE: Phê duyệt", true, PD.exist_phe_duyet());
		SessionData.addSoftAssertion(DATA_TABLE, "I2_V", "VISIBLE/INVISIBLE: Hủy bỏ", true, PD.exist_huy_bo());
		SessionData.addSoftAssertion(DATA_TABLE, "I3_V", "VISIBLE/INVISIBLE: Nhân sự", true, PD.exist_nhan_su());
		SessionData.addSoftAssertion(DATA_TABLE, "I4_V", "VISIBLE/INVISIBLE: Người phê duyệt lần 2", true, PD.exist_nguoi_phe_duyet_lan_2());
		SessionData.addSoftAssertion(DATA_TABLE, "I5_V", "VISIBLE/INVISIBLE: Duyệt lần 2", true, PD.exist_duyet_lan_2());
		Common.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try { SessionData.generateExcelReport(); } catch (Exception e) {}
		// Common.assertion_result_then_assert(DATA_TABLE, SessionData.generateSoftAssertion(DATA_TABLE));
		Common.clear_assertion(DATA_TABLE);
	}
	@Then("^Kiem tra Tab Index cac Control tren PHÊ DUYỆT$")
	public void Kiem_tra_Tab_Index_cac_Control_tren_PHE_DUYET() throws Exception {
		String DATA_TABLE = "PHE_DUYET_VERIFY_CONTROL_TAB";
		SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Tab Index cua Control tren Phê duyệt");
		Common.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try { SessionData.generateExcelReport(); } catch (Exception e) {}
		// Common.assertion_result_then_assert(DATA_TABLE, SessionData.generateSoftAssertion(DATA_TABLE));
		Common.clear_assertion(DATA_TABLE);
	}
}
