package hrm.steps.defs;

import java.util.LinkedHashMap;
import java.util.List;

import org.assertj.core.api.Fail;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import hrm.common.steps.CommonSteps;
import hrm.lib.SessionData;
import hrm.steps.serenity.DuyetDangKyNghi.PheDuyetSteps;
import hrm.steps.serenity.DuyetDangKyNghi.XemChiTietDangKyNghiSteps;
import net.thucydides.core.annotations.Steps;

/**
 * @author AUTO
 * @version 12/1/2019 1:47:54 PM
 */
public class PheDuyetDefs {

	@Steps
	XemChiTietDangKyNghiSteps XCTDKN;

	@Steps
	PheDuyetSteps PD;

	@Steps
	CommonSteps Common;

	@And("^Nhap PHÊ DUYỆT nhu \"([^\"]*)\"$")
	public void Nhap_PHE_DUYET_nhu(String dataKey, List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "PHE_DUYET_NHAP";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Phê duyệt");
		}
		if (XCTDKN.loai_nghi().equals("PHép")) {
			return;
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
		try {
			SessionData.generateExcelReport();
		} catch (Exception e) {
		}
		// Common.assertion_result_then_assert(DATA_TABLE,
		// SessionData.generateSoftAssertion(DATA_TABLE));
		Common.clear_assertion(DATA_TABLE);
	}

	@Then("^Kiem tra trang thai PHÊ DUYỆT nhu \"([^\"]*)\"$")
	public void Kiem_tra_trang_thai_PHE_DUYET_nhu(String dataKey, List<List<String>> dataTable) throws Exception {
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
			String sTrang_thai_hien_tai = SessionData.getDataTbVal(DATA_TABLE, row, "Status");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sTrang_thai_hien_tai.isEmpty()) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Trạng thái hiện tại", sTrang_thai_hien_tai,
						XCTDKN.trang_thai_hien_tai());
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
		try {
			SessionData.generateExcelReport();
		} catch (Exception e) {
		}
		// Common.assertion_result_then_assert(DATA_TABLE,
		// SessionData.generateSoftAssertion(DATA_TABLE));
		Common.clear_assertion(DATA_TABLE);
	}

	@And("^Thuc hien PHÊ DUYỆT nhu \"([^\"]*)\"$")
	public void Thuc_hien_PHE_DUYET_nhu(String dataKey, List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "PHE_DUYET_THUC_HIEN";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Phê duyệt");
		}
		if (XCTDKN.loai_nghi().equals("PHép")) {
			return;
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
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Phê duyệt", false,
								PD.enabled_phe_duyet());
					} else if (sPheDuyet.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Phê duyệt", true,
								PD.enabled_phe_duyet());
					} else if (sPheDuyet.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Phê duyệt", true,
								PD.focus_phe_duyet());
					} else if (sPheDuyet.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Phê duyệt", false,
								PD.focus_phe_duyet());
					} else if (sPheDuyet.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Phê duyệt", true,
								PD.exist_phe_duyet());
					} else if (sPheDuyet.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Phê duyệt", false,
								PD.exist_phe_duyet());
					}
				} else if (SessionData.isYes(sPheDuyet)) {
					PD.click_phe_duyet();
				} else {
					Fail.fail("Recheck input data for Button [Phê duyệt] : " + sPheDuyet);
				}
			}
			if (!sHuyBo.isEmpty()) {
				if (sHuyBo.startsWith("@MARK")) {
					if (sHuyBo.contains("@MARK DISABLED@@") || sHuyBo.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Hủy bỏ", false,
								PD.enabled_huy_bo());
					} else if (sHuyBo.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Hủy bỏ", true,
								PD.enabled_huy_bo());
					} else if (sHuyBo.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Hủy bỏ", true,
								PD.focus_huy_bo());
					} else if (sHuyBo.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Hủy bỏ", false,
								PD.focus_huy_bo());
					} else if (sHuyBo.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Hủy bỏ", true,
								PD.exist_huy_bo());
					} else if (sHuyBo.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Hủy bỏ", false,
								PD.exist_huy_bo());
					}
				} else if (SessionData.isYes(sHuyBo)) {
					PD.click_huy_bo();
				} else {
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
		try {
			SessionData.generateExcelReport();
		} catch (Exception e) {
		}
		Common.clear_assertion(DATA_TABLE);
	}

}
