package hrm.steps.defs;

import java.util.LinkedHashMap;
import java.util.List;

import org.assertj.core.api.Fail;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hrm.common.steps.CommonSteps;
import hrm.lib.SessionData;
import hrm.steps.serenity.ChamCongThang.XemBangChamCongThangSteps;
import net.thucydides.core.annotations.Steps;

/**
 * @author AUTO
 * @version 12/1/2019 5:01:33 PM
 */
public class XemBangChamCongThangDefs {
	@Steps
	XemBangChamCongThangSteps XBCCT;

	@Steps
	CommonSteps Common;
	@Given("^Nhap BẢNG CHẤM CÔNG THÁNG trong XEM BẢNG CHẤM CÔNG THÁNG nhu \"([^\"]*)\"$")
	public void Nhap_BANG_CHAM_CONG_THANG_trong_XEM_BANG_CHAM_CONG_THANG_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "XEM_BANG_CHAM_CONG_THANG_BANG_CHAM_CONG_THANG_NHAP";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Bảng chấm công tháng trong Xem bảng chấm công tháng");
		}
		int rowIndex = 0;
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sPage = SessionData.getDataTbVal(DATA_TABLE, row, "Page");
			String sPageSize = SessionData.getDataTbVal(DATA_TABLE, row, "Page Size");
			String sRow = SessionData.getDataTbVal(DATA_TABLE, row, "Row");
			String sTotalRecord = SessionData.getDataTbVal(DATA_TABLE, row, "Total Record");
			String sNhanSu = SessionData.getDataTbVal(DATA_TABLE, row, "Nhân sự");
			String sCongChuan = SessionData.getDataTbVal(DATA_TABLE, row, "Công chuẩn");
			String sNgayCong = SessionData.getDataTbVal(DATA_TABLE, row, "Ngày công");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (sTotalRecord.equals("0")) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "No result found!", "0",
						String.valueOf(XBCCT.bcct_records_in_current_page()));
				continue;
			}
			try {// Calculate Page, Row by Total Record and Page Size
				if (!sPageSize.isEmpty() || !sRow.isEmpty() || !sPage.isEmpty() || !sTotalRecord.isEmpty()) {
					int iPageSize = 0;
					if (sPageSize.toLowerCase().contains("default")) {
						iPageSize = Integer.parseInt(sPageSize.replace("DEFAULT==", ""));
					} else if (!sPageSize.isEmpty()) {
						iPageSize = Integer.parseInt(sPageSize);
					}
					int iTotalRecord = 0;
					if (!sTotalRecord.isEmpty()) {
						iTotalRecord = Integer.parseInt(sTotalRecord);
					}
					if (sRow.equals("@LAST@")) {
						if (iPageSize != 0) {
							sRow = String.valueOf((int) iTotalRecord % iPageSize);
							if (sRow.equals("0")) {
								sRow = String.valueOf(iPageSize);
								sPage = String.valueOf((int) iTotalRecord / iPageSize);
							} else {
								sPage = String.valueOf((int) iTotalRecord / iPageSize + 1);
							}
							XBCCT.bcct_set_tb_page_size(sPageSize);
							XBCCT.bcct_go_to_tb_page(sPage);
						} else {
							sRow = sTotalRecord;
						}
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "Total rows in last page : ", sRow,
								String.valueOf(XBCCT.bcct_records_in_current_page()));
					} else if (sRow.contains("@ADD@")) {
						sRow = XBCCT.bcct_add_row(sRow);
					} else if (sRow.contains("@REMOVE@")) {
						XBCCT.bcct_remove_row(sRow);
						sRow = "0";
					} else {
						if (!sPageSize.isEmpty()) {
							XBCCT.bcct_set_tb_page_size(sPageSize);
						}
						if (!sPage.isEmpty()) {
							XBCCT.bcct_go_to_tb_page(sPage);
						}
						if (!sTotalRecord.isEmpty()) {
							SessionData.addSoftAssertion(DATA_TABLE, sKey, "Total rows in last page : ", sTotalRecord,
									String.valueOf(XBCCT.bcct_records_in_current_page()));
						}
					}
					if (!sRow.isEmpty()) {
						rowIndex = Integer.parseInt(sRow);
					}
				}
			} catch (Exception e) {
				Fail.fail("Recheck input data of Page, Page Size, Row and Total Record : " + e.getMessage());
			}
			if (!sNhanSu.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = XBCCT.row_index_bcct_nhan_su(sNhanSu);
				}
				if (sNhanSu.contains("@MARK CLICKON@@")) {
					XBCCT.click_on_bcct_nhan_su(rowIndex);
				}
			}
			if (!sCongChuan.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = XBCCT.row_index_bcct_cong_chuan(sCongChuan);
				}
				if (sCongChuan.contains("@MARK CLICKON@@")) {
					XBCCT.click_on_bcct_cong_chuan(rowIndex);
				}
			}
			if (!sNgayCong.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = XBCCT.row_index_bcct_ngay_cong(sNgayCong);
				}
				if (sNgayCong.contains("@MARK CLICKON@@")) {
					XBCCT.click_on_bcct_ngay_cong(rowIndex);
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
	@Then("^Kiem tra BẢNG CHẤM CÔNG THÁNG trong XEM BẢNG CHẤM CÔNG THÁNG nhu \"([^\"]*)\"$")
	public void Kiem_tra_BANG_CHAM_CONG_THANG_trong_XEM_BANG_CHAM_CONG_THANG_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "XEM_BANG_CHAM_CONG_THANG_BANG_CHAM_CONG_THANG_KIEM_TRA";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Bảng chấm công tháng trong Xem bảng chấm công tháng");
		}
		int rowIndex = 0;
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sPage = SessionData.getDataTbVal(DATA_TABLE, row, "Page");
			String sPageSize = SessionData.getDataTbVal(DATA_TABLE, row, "Page Size");
			String sRow = SessionData.getDataTbVal(DATA_TABLE, row, "Row");
			String sTotalRecord = SessionData.getDataTbVal(DATA_TABLE, row, "Total Record");
			String sNhanSu = SessionData.getDataTbVal(DATA_TABLE, row, "Nhân sự");
			String sCongChuan = SessionData.getDataTbVal(DATA_TABLE, row, "Công chuẩn");
			String sNgayCong = SessionData.getDataTbVal(DATA_TABLE, row, "Ngày công");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (sTotalRecord.equals("0")) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "No result found!", "0",
						String.valueOf(XBCCT.bcct_records_in_current_page()));
				continue;
			}
			try {// Calculate Page, Row by Total Record and Page Size
				if (!sPageSize.isEmpty() || !sRow.isEmpty() || !sPage.isEmpty() || !sTotalRecord.isEmpty()) {
					int iPageSize = 0;
					if (sPageSize.toLowerCase().contains("default")) {
						iPageSize = Integer.parseInt(sPageSize.replace("DEFAULT==", ""));
					} else if (!sPageSize.isEmpty()) {
						iPageSize = Integer.parseInt(sPageSize);
					}
					int iTotalRecord = 0;
					if (!sTotalRecord.isEmpty()) {
						iTotalRecord = Integer.parseInt(sTotalRecord);
					}
					if (sRow.equals("@LAST@")) {
						if (iPageSize != 0) {
							sRow = String.valueOf((int) iTotalRecord % iPageSize);
							if (sRow.equals("0")) {
								sRow = String.valueOf(iPageSize);
								sPage = String.valueOf((int) iTotalRecord / iPageSize);
							} else {
								sPage = String.valueOf((int) iTotalRecord / iPageSize + 1);
							}
							XBCCT.bcct_set_tb_page_size(sPageSize);
							XBCCT.bcct_go_to_tb_page(sPage);
						} else {
							sRow = sTotalRecord;
						}
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "Total rows in last page : ", sRow,
								String.valueOf(XBCCT.bcct_records_in_current_page()));
					} else if (sRow.contains("@ADD@")) {
						sRow = XBCCT.bcct_add_row(sRow);
					} else if (sRow.contains("@REMOVE@")) {
						XBCCT.bcct_remove_row(sRow);
						sRow = "0";
					} else {
						if (!sPageSize.isEmpty()) {
							XBCCT.bcct_set_tb_page_size(sPageSize);
						}
						if (!sPage.isEmpty()) {
							XBCCT.bcct_go_to_tb_page(sPage);
						}
						if (!sTotalRecord.isEmpty()) {
							SessionData.addSoftAssertion(DATA_TABLE, sKey, "Total rows in last page : ", sTotalRecord,
									String.valueOf(XBCCT.bcct_records_in_current_page()));
						}
					}
					if (!sRow.isEmpty()) {
						rowIndex = Integer.parseInt(sRow);
					}
				}
			} catch (Exception e) {
				Fail.fail("Recheck input data of Page, Page Size, Row and Total Record : " + e.getMessage());
			}
			if (!sNhanSu.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = XBCCT.row_index_bcct_nhan_su(sNhanSu);
				}
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Nhân sự", sNhanSu, XBCCT.text_bcct_nhan_su(rowIndex));
			}
			if (!sCongChuan.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = XBCCT.row_index_bcct_cong_chuan(sCongChuan);
				}
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Công chuẩn", sCongChuan, XBCCT.text_bcct_cong_chuan(rowIndex));
			}
			if (!sNgayCong.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = XBCCT.row_index_bcct_ngay_cong(sNgayCong);
				}
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Ngày công", sNgayCong, XBCCT.text_bcct_ngay_cong(rowIndex));
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
	@When("^Thuc hien BẢNG CHẤM CÔNG THÁNG trong XEM BẢNG CHẤM CÔNG THÁNG nhu \"([^\"]*)\"$")
	public void Thuc_hien_BANG_CHAM_CONG_THANG_trong_XEM_BANG_CHAM_CONG_THANG_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "XEM_BANG_CHAM_CONG_THANG_BANG_CHAM_CONG_THANG_THUC_HIEN";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Bảng chấm công tháng trong Xem bảng chấm công tháng");
		}
		int rowIndex = 0;
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sPage = SessionData.getDataTbVal(DATA_TABLE, row, "Page");
			String sPageSize = SessionData.getDataTbVal(DATA_TABLE, row, "Page Size");
			String sRow = SessionData.getDataTbVal(DATA_TABLE, row, "Row");
			String sTotalRecord = SessionData.getDataTbVal(DATA_TABLE, row, "Total Record");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (sTotalRecord.equals("0")) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "No result found!", "0",
						String.valueOf(XBCCT.bcct_records_in_current_page()));
				continue;
			}
			try {// Calculate Page, Row by Total Record and Page Size
				if (!sPageSize.isEmpty() || !sRow.isEmpty() || !sPage.isEmpty() || !sTotalRecord.isEmpty()) {
					int iPageSize = 0;
					if (sPageSize.toLowerCase().contains("default")) {
						iPageSize = Integer.parseInt(sPageSize.replace("DEFAULT==", ""));
					} else if (!sPageSize.isEmpty()) {
						iPageSize = Integer.parseInt(sPageSize);
					}
					int iTotalRecord = 0;
					if (!sTotalRecord.isEmpty()) {
						iTotalRecord = Integer.parseInt(sTotalRecord);
					}
					if (sRow.equals("@LAST@")) {
						if (iPageSize != 0) {
							sRow = String.valueOf((int) iTotalRecord % iPageSize);
							if (sRow.equals("0")) {
								sRow = String.valueOf(iPageSize);
								sPage = String.valueOf((int) iTotalRecord / iPageSize);
							} else {
								sPage = String.valueOf((int) iTotalRecord / iPageSize + 1);
							}
							XBCCT.bcct_set_tb_page_size(sPageSize);
							XBCCT.bcct_go_to_tb_page(sPage);
						} else {
							sRow = sTotalRecord;
						}
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "Total rows in last page : ", sRow,
								String.valueOf(XBCCT.bcct_records_in_current_page()));
					} else if (sRow.contains("@ADD@")) {
						sRow = XBCCT.bcct_add_row(sRow);
					} else if (sRow.contains("@REMOVE@")) {
						XBCCT.bcct_remove_row(sRow);
						sRow = "0";
					} else {
						if (!sPageSize.isEmpty()) {
							XBCCT.bcct_set_tb_page_size(sPageSize);
						}
						if (!sPage.isEmpty()) {
							XBCCT.bcct_go_to_tb_page(sPage);
						}
						if (!sTotalRecord.isEmpty()) {
							SessionData.addSoftAssertion(DATA_TABLE, sKey, "Total rows in last page : ", sTotalRecord,
									String.valueOf(XBCCT.bcct_records_in_current_page()));
						}
					}
					if (!sRow.isEmpty()) {
						rowIndex = Integer.parseInt(sRow);
					}
				}
			} catch (Exception e) {
				Fail.fail("Recheck input data of Page, Page Size, Row and Total Record : " + e.getMessage());
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
	@Given("^Nhap XEM BẢNG CHẤM CÔNG THÁNG nhu \"([^\"]*)\"$")
	public void Nhap_XEM_BANG_CHAM_CONG_THANG_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "XEM_BANG_CHAM_CONG_THANG_NHAP";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Xem bảng chấm công tháng");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sDonVi = SessionData.getDataTbVal(DATA_TABLE, row, "Đơn vị");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sDonVi.isEmpty()) {
				XBCCT.select_don_vi(sDonVi);
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
	@Then("^Kiem tra XEM BẢNG CHẤM CÔNG THÁNG nhu \"([^\"]*)\"$")
	public void Kiem_tra_XEM_BANG_CHAM_CONG_THANG_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "XEM_BANG_CHAM_CONG_THANG_KIEM_TRA";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Xem bảng chấm công tháng");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sDonVi = SessionData.getDataTbVal(DATA_TABLE, row, "Đơn vị");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sDonVi.isEmpty()) {
				if (sDonVi.startsWith("@MARK")) {
					if (sDonVi.contains("@MARK DISABLED@@") || sDonVi.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Đơn vị", false, XBCCT.enabled_don_vi());
					} else if (sDonVi.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Đơn vị", true, XBCCT.enabled_don_vi());
					} else if(sDonVi.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Đơn vị", true, XBCCT.focus_don_vi());
					} else if(sDonVi.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Đơn vị", false, XBCCT.focus_don_vi());
					} else if(sDonVi.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Đơn vị", true, XBCCT.exist_don_vi());
					} else if(sDonVi.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Đơn vị", false, XBCCT.exist_don_vi());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Đơn vị", sDonVi, XBCCT.don_vi());
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
	@When("^Thuc hien XEM BẢNG CHẤM CÔNG THÁNG nhu \"([^\"]*)\"$")
	public void Thuc_hien_XEM_BANG_CHAM_CONG_THANG_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "XEM_BANG_CHAM_CONG_THANG_THUC_HIEN";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Xem bảng chấm công tháng");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sSua = SessionData.getDataTbVal(DATA_TABLE, row, "Sửa");
			String sTao = SessionData.getDataTbVal(DATA_TABLE, row, "Tạo");
			String sXacNhan = SessionData.getDataTbVal(DATA_TABLE, row, "Xác nhận");
			String sCapNhatNgayNghi = SessionData.getDataTbVal(DATA_TABLE, row, "Cập nhật ngày nghỉ");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sSua.isEmpty()) {
				if (sSua.startsWith("@MARK")) {
					if (sSua.contains("@MARK DISABLED@@") || sSua.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Sửa", false, XBCCT.enabled_sua());
					} else if (sSua.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Sửa", true, XBCCT.enabled_sua());
					} else if(sSua.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Sửa", true, XBCCT.focus_sua());
					} else if(sSua.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Sửa", false, XBCCT.focus_sua());
					} else if(sSua.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Sửa", true, XBCCT.exist_sua());
					} else if(sSua.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Sửa", false, XBCCT.exist_sua());
					}
				} else if (SessionData.isYes(sSua)){
					XBCCT.click_sua();
				}
				else {
					Fail.fail("Recheck input data for Button [Sửa] : " + sSua);
				}
			}
			if (!sTao.isEmpty()) {
				if (sTao.startsWith("@MARK")) {
					if (sTao.contains("@MARK DISABLED@@") || sTao.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Tạo", false, XBCCT.enabled_tao());
					} else if (sTao.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Tạo", true, XBCCT.enabled_tao());
					} else if(sTao.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Tạo", true, XBCCT.focus_tao());
					} else if(sTao.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Tạo", false, XBCCT.focus_tao());
					} else if(sTao.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Tạo", true, XBCCT.exist_tao());
					} else if(sTao.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Tạo", false, XBCCT.exist_tao());
					}
				} else if (SessionData.isYes(sTao)){
					XBCCT.click_tao();
				}
				else {
					Fail.fail("Recheck input data for Button [Tạo] : " + sTao);
				}
			}
			if (!sXacNhan.isEmpty()) {
				if (sXacNhan.startsWith("@MARK")) {
					if (sXacNhan.contains("@MARK DISABLED@@") || sXacNhan.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Xác nhận", false, XBCCT.enabled_xac_nhan());
					} else if (sXacNhan.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Xác nhận", true, XBCCT.enabled_xac_nhan());
					} else if(sXacNhan.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Xác nhận", true, XBCCT.focus_xac_nhan());
					} else if(sXacNhan.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Xác nhận", false, XBCCT.focus_xac_nhan());
					} else if(sXacNhan.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Xác nhận", true, XBCCT.exist_xac_nhan());
					} else if(sXacNhan.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Xác nhận", false, XBCCT.exist_xac_nhan());
					}
				} else if (SessionData.isYes(sXacNhan)){
					XBCCT.click_xac_nhan();
				}
				else {
					Fail.fail("Recheck input data for Button [Xác nhận] : " + sXacNhan);
				}
			}
			if (!sCapNhatNgayNghi.isEmpty()) {
				if (sCapNhatNgayNghi.startsWith("@MARK")) {
					if (sCapNhatNgayNghi.contains("@MARK DISABLED@@") || sCapNhatNgayNghi.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Cập nhật ngày nghỉ", false, XBCCT.enabled_cap_nhat_ngay_nghi());
					} else if (sCapNhatNgayNghi.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Cập nhật ngày nghỉ", true, XBCCT.enabled_cap_nhat_ngay_nghi());
					} else if(sCapNhatNgayNghi.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Cập nhật ngày nghỉ", true, XBCCT.focus_cap_nhat_ngay_nghi());
					} else if(sCapNhatNgayNghi.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Cập nhật ngày nghỉ", false, XBCCT.focus_cap_nhat_ngay_nghi());
					} else if(sCapNhatNgayNghi.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Cập nhật ngày nghỉ", true, XBCCT.exist_cap_nhat_ngay_nghi());
					} else if(sCapNhatNgayNghi.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Cập nhật ngày nghỉ", false, XBCCT.exist_cap_nhat_ngay_nghi());
					}
				} else if (SessionData.isYes(sCapNhatNgayNghi)){
					XBCCT.click_cap_nhat_ngay_nghi();
				}
				else {
					Fail.fail("Recheck input data for Button [Cập nhật ngày nghỉ] : " + sCapNhatNgayNghi);
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
}
