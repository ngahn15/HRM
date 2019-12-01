package hrm.steps.defs;

import java.util.LinkedHashMap;
import java.util.List;

import org.assertj.core.api.Fail;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hrm.common.steps.CommonSteps;
import hrm.lib.SessionData;
import hrm.steps.serenity.DuyetDangKyNghi.DuyetDangKyNghiSteps;
import net.thucydides.core.annotations.Steps;

/**
 * @author AUTO
 * @version 12/1/2019 12:40:38 AM
 */
public class DuyetDangKyNghiDefs {
	@Steps
	DuyetDangKyNghiSteps DDKN;

	@Steps
	CommonSteps Common;

	@Given("^Nhap LƯỚI HIỂN THỊ THÔNG TIN ĐĂNG KÝ NGHỈ trong DUYỆT ĐĂNG KÝ NGHỈ nhu \"([^\"]*)\"$")
	public void Nhap_LUOI_HIEN_THI_THONG_TIN_DANG_KY_NGHI_trong_DUYET_DANG_KY_NGHI_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "DUYET_DANG_KY_NGHI_LUOI_HIEN_THI_THONG_TIN_DANG_KY_NGHI_NHAP";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE,
					"Kiem tra Lưới hiển thị thông tin đăng ký nghỉ trong Duyệt đăng ký nghỉ");
		}
		int rowIndex = 0;
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sPage = SessionData.getDataTbVal(DATA_TABLE, row, "Page");
			String sPageSize = SessionData.getDataTbVal(DATA_TABLE, row, "Page Size");
			String sRow = SessionData.getDataTbVal(DATA_TABLE, row, "Row");
			String sTotalRecord = SessionData.getDataTbVal(DATA_TABLE, row, "Total Record");
			String sNhanSu = SessionData.getDataTbVal(DATA_TABLE, row, "Nhân sự");
			String sDonViPhongBan = SessionData.getDataTbVal(DATA_TABLE, row, "Đơn vị / Phong ban");
			String sNgayBatDau = SessionData.getDataTbVal(DATA_TABLE, row, "Ngày bắt đầu");
			String sNgayKetThuc = SessionData.getDataTbVal(DATA_TABLE, row, "Ngày kết thúc");
			String sLyDoNghi = SessionData.getDataTbVal(DATA_TABLE, row, "Lý do nghỉ");
			String sSoNgayNghi = SessionData.getDataTbVal(DATA_TABLE, row, "Số ngày nghỉ");
			String sNguoiDuyet = SessionData.getDataTbVal(DATA_TABLE, row, "Người duyệt");
			String sTrangThai = SessionData.getDataTbVal(DATA_TABLE, row, "Trạng thái");
			String sLyDoTuChoi = SessionData.getDataTbVal(DATA_TABLE, row, "Lý do từ chối");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (sTotalRecord.equals("0")) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "No result found!", "0",
						String.valueOf(DDKN.lhtttdkn_records_in_current_page()));
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
							DDKN.lhtttdkn_set_tb_page_size(sPageSize);
							DDKN.lhtttdkn_go_to_tb_page(sPage);
						} else {
							sRow = sTotalRecord;
						}
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "Total rows in last page : ", sRow,
								String.valueOf(DDKN.lhtttdkn_records_in_current_page()));
					} else if (sRow.contains("@ADD@")) {
						sRow = DDKN.lhtttdkn_add_row(sRow);
					} else if (sRow.contains("@REMOVE@")) {
						DDKN.lhtttdkn_remove_row(sRow);
						sRow = "0";
					} else {
						if (!sPageSize.isEmpty()) {
							DDKN.lhtttdkn_set_tb_page_size(sPageSize);
						}
						if (!sPage.isEmpty()) {
							DDKN.lhtttdkn_go_to_tb_page(sPage);
						}
						if (!sTotalRecord.isEmpty()) {
							SessionData.addSoftAssertion(DATA_TABLE, sKey, "Total rows in last page : ", sTotalRecord,
									String.valueOf(DDKN.lhtttdkn_records_in_current_page()));
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
					rowIndex = DDKN.row_index_lhtttdkn_nhan_su(sNhanSu);
				}
				if (sNhanSu.contains("@MARK CLICKON@@")) {
					DDKN.click_on_lhtttdkn_nhan_su(rowIndex);
				}
			}
			if (!sDonViPhongBan.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = DDKN.row_index_lhtttdkn_don_vi_phong_ban(sDonViPhongBan);
				}
				if (sDonViPhongBan.contains("@MARK CLICKON@@")) {
					DDKN.click_on_lhtttdkn_don_vi_phong_ban(rowIndex);
				}
			}
			if (!sNgayBatDau.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = DDKN.row_index_lhtttdkn_ngay_bat_dau(sNgayBatDau);
				}
				if (sNgayBatDau.contains("@MARK CLICKON@@")) {
					DDKN.click_on_lhtttdkn_ngay_bat_dau(rowIndex);
				}
			}
			if (!sNgayKetThuc.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = DDKN.row_index_lhtttdkn_ngay_ket_thuc(sNgayKetThuc);
				}
				if (sNgayKetThuc.contains("@MARK CLICKON@@")) {
					DDKN.click_on_lhtttdkn_ngay_ket_thuc(rowIndex);
				}
			}
			if (!sLyDoNghi.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = DDKN.row_index_lhtttdkn_ly_do_nghi(sLyDoNghi);
				}
				if (sLyDoNghi.contains("@MARK CLICKON@@")) {
					DDKN.click_on_lhtttdkn_ly_do_nghi(rowIndex);
				}
			}
			if (!sSoNgayNghi.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = DDKN.row_index_lhtttdkn_so_ngay_nghi(sSoNgayNghi);
				}
				if (sSoNgayNghi.contains("@MARK CLICKON@@")) {
					DDKN.click_on_lhtttdkn_so_ngay_nghi(rowIndex);
				}
			}
			if (!sNguoiDuyet.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = DDKN.row_index_lhtttdkn_nguoi_duyet(sNguoiDuyet);
				}
				if (sNguoiDuyet.contains("@MARK CLICKON@@")) {
					DDKN.click_on_lhtttdkn_nguoi_duyet(rowIndex);
				}
			}
			if (!sTrangThai.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = DDKN.row_index_lhtttdkn_trang_thai(sTrangThai);
				}
				if (sTrangThai.contains("@MARK CLICKON@@")) {
					DDKN.click_on_lhtttdkn_trang_thai(rowIndex);
				}
			}
			if (!sLyDoTuChoi.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = DDKN.row_index_lhtttdkn_ly_do_tu_choi(sLyDoTuChoi);
				}
				if (sLyDoTuChoi.contains("@MARK CLICKON@@")) {
					DDKN.click_on_lhtttdkn_ly_do_tu_choi(rowIndex);
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
		// Common.assertion_result_then_assert(DATA_TABLE,
		// SessionData.generateSoftAssertion(DATA_TABLE));
		Common.clear_assertion(DATA_TABLE);
	}

	@Then("^Kiem tra LƯỚI HIỂN THỊ THÔNG TIN ĐĂNG KÝ NGHỈ trong DUYỆT ĐĂNG KÝ NGHỈ nhu \"([^\"]*)\"$")
	public void Kiem_tra_LUOI_HIEN_THI_THONG_TIN_DANG_KY_NGHI_trong_DUYET_DANG_KY_NGHI_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "DUYET_DANG_KY_NGHI_LUOI_HIEN_THI_THONG_TIN_DANG_KY_NGHI_KIEM_TRA";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE,
					"Kiem tra Lưới hiển thị thông tin đăng ký nghỉ trong Duyệt đăng ký nghỉ");
		}
		int rowIndex = 0;
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sPage = SessionData.getDataTbVal(DATA_TABLE, row, "Page");
			String sPageSize = SessionData.getDataTbVal(DATA_TABLE, row, "Page Size");
			String sRow = SessionData.getDataTbVal(DATA_TABLE, row, "Row");
			String sTotalRecord = SessionData.getDataTbVal(DATA_TABLE, row, "Total Record");
			String sNhanSu = SessionData.getDataTbVal(DATA_TABLE, row, "Nhân sự");
			String sDonViPhongBan = SessionData.getDataTbVal(DATA_TABLE, row, "Đơn vị / Phong ban");
			String sNgayBatDau = SessionData.getDataTbVal(DATA_TABLE, row, "Ngày bắt đầu");
			String sNgayKetThuc = SessionData.getDataTbVal(DATA_TABLE, row, "Ngày kết thúc");
			String sLyDoNghi = SessionData.getDataTbVal(DATA_TABLE, row, "Lý do nghỉ");
			String sSoNgayNghi = SessionData.getDataTbVal(DATA_TABLE, row, "Số ngày nghỉ");
			String sNguoiDuyet = SessionData.getDataTbVal(DATA_TABLE, row, "Người duyệt");
			String sTrangThai = SessionData.getDataTbVal(DATA_TABLE, row, "Trạng thái");
			String sLyDoTuChoi = SessionData.getDataTbVal(DATA_TABLE, row, "Lý do từ chối");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (sTotalRecord.equals("0")) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "No result found!", "0",
						String.valueOf(DDKN.lhtttdkn_records_in_current_page()));
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
							DDKN.lhtttdkn_set_tb_page_size(sPageSize);
							DDKN.lhtttdkn_go_to_tb_page(sPage);
						} else {
							sRow = sTotalRecord;
						}
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "Total rows in last page : ", sRow,
								String.valueOf(DDKN.lhtttdkn_records_in_current_page()));
					} else if (sRow.contains("@ADD@")) {
						sRow = DDKN.lhtttdkn_add_row(sRow);
					} else if (sRow.contains("@REMOVE@")) {
						DDKN.lhtttdkn_remove_row(sRow);
						sRow = "0";
					} else {
						if (!sPageSize.isEmpty()) {
							DDKN.lhtttdkn_set_tb_page_size(sPageSize);
						}
						if (!sPage.isEmpty()) {
							DDKN.lhtttdkn_go_to_tb_page(sPage);
						}
						if (!sTotalRecord.isEmpty()) {
							SessionData.addSoftAssertion(DATA_TABLE, sKey, "Total rows in last page : ", sTotalRecord,
									String.valueOf(DDKN.lhtttdkn_records_in_current_page()));
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
					rowIndex = DDKN.row_index_lhtttdkn_nhan_su(sNhanSu);
				}
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Nhân sự", sNhanSu,
						DDKN.text_lhtttdkn_nhan_su(rowIndex));
			}
			if (!sDonViPhongBan.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = DDKN.row_index_lhtttdkn_don_vi_phong_ban(sDonViPhongBan);
				}
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Đơn vị / Phong ban", sDonViPhongBan,
						DDKN.text_lhtttdkn_don_vi_phong_ban(rowIndex));
			}
			if (!sNgayBatDau.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = DDKN.row_index_lhtttdkn_ngay_bat_dau(sNgayBatDau);
				}
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Ngày bắt đầu", sNgayBatDau,
						DDKN.text_lhtttdkn_ngay_bat_dau(rowIndex));
			}
			if (!sNgayKetThuc.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = DDKN.row_index_lhtttdkn_ngay_ket_thuc(sNgayKetThuc);
				}
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Ngày kết thúc", sNgayKetThuc,
						DDKN.text_lhtttdkn_ngay_ket_thuc(rowIndex));
			}
			if (!sLyDoNghi.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = DDKN.row_index_lhtttdkn_ly_do_nghi(sLyDoNghi);
				}
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Lý do nghỉ", sLyDoNghi,
						DDKN.text_lhtttdkn_ly_do_nghi(rowIndex));
			}
			if (!sSoNgayNghi.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = DDKN.row_index_lhtttdkn_so_ngay_nghi(sSoNgayNghi);
				}
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Số ngày nghỉ", sSoNgayNghi,
						DDKN.text_lhtttdkn_so_ngay_nghi(rowIndex));
			}
			if (!sNguoiDuyet.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = DDKN.row_index_lhtttdkn_nguoi_duyet(sNguoiDuyet);
				}
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Người duyệt", sNguoiDuyet,
						DDKN.text_lhtttdkn_nguoi_duyet(rowIndex));
			}
			if (!sTrangThai.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = DDKN.row_index_lhtttdkn_trang_thai(sTrangThai);
				}
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Trạng thái", sTrangThai,
						DDKN.text_lhtttdkn_trang_thai(rowIndex));
			}
			if (!sLyDoTuChoi.isEmpty()) {
				if (rowIndex == 0) {
					rowIndex = DDKN.row_index_lhtttdkn_ly_do_tu_choi(sLyDoTuChoi);
				}
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Lý do từ chối", sLyDoTuChoi,
						DDKN.text_lhtttdkn_ly_do_tu_choi(rowIndex));
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

	@When("^Thuc hien LƯỚI HIỂN THỊ THÔNG TIN ĐĂNG KÝ NGHỈ trong DUYỆT ĐĂNG KÝ NGHỈ nhu \"([^\"]*)\"$")
	public void Thuc_hien_LUOI_HIEN_THI_THONG_TIN_DANG_KY_NGHI_trong_DUYET_DANG_KY_NGHI_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "DUYET_DANG_KY_NGHI_LUOI_HIEN_THI_THONG_TIN_DANG_KY_NGHI_THUC_HIEN";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE,
					"Kiem tra Lưới hiển thị thông tin đăng ký nghỉ trong Duyệt đăng ký nghỉ");
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
						String.valueOf(DDKN.lhtttdkn_records_in_current_page()));
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
							DDKN.lhtttdkn_set_tb_page_size(sPageSize);
							DDKN.lhtttdkn_go_to_tb_page(sPage);
						} else {
							sRow = sTotalRecord;
						}
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "Total rows in last page : ", sRow,
								String.valueOf(DDKN.lhtttdkn_records_in_current_page()));
					} else if (sRow.contains("@ADD@")) {
						sRow = DDKN.lhtttdkn_add_row(sRow);
					} else if (sRow.contains("@REMOVE@")) {
						DDKN.lhtttdkn_remove_row(sRow);
						sRow = "0";
					} else {
						if (!sPageSize.isEmpty()) {
							DDKN.lhtttdkn_set_tb_page_size(sPageSize);
						}
						if (!sPage.isEmpty()) {
							DDKN.lhtttdkn_go_to_tb_page(sPage);
						}
						if (!sTotalRecord.isEmpty()) {
							SessionData.addSoftAssertion(DATA_TABLE, sKey, "Total rows in last page : ", sTotalRecord,
									String.valueOf(DDKN.lhtttdkn_records_in_current_page()));
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
		try {
			SessionData.generateExcelReport();
		} catch (Exception e) {
		}
		// Common.assertion_result_then_assert(DATA_TABLE,
		// SessionData.generateSoftAssertion(DATA_TABLE));
		Common.clear_assertion(DATA_TABLE);
	}

	@Given("^Nhap DUYỆT ĐĂNG KÝ NGHỈ nhu \"([^\"]*)\"$")
	public void Nhap_DUYET_DANG_KY_NGHI_nhu(String dataKey, List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "DUYET_DANG_KY_NGHI_NHAP";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Duyệt đăng ký nghỉ");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sTimKiem = SessionData.getDataTbVal(DATA_TABLE, row, "Tìm kiếm");
			String sCacBoLoc = SessionData.getDataTbVal(DATA_TABLE, row, "Các bộ lọc");
			String sNhomTheo = SessionData.getDataTbVal(DATA_TABLE, row, "Nhóm theo");
			String sYeuThich = SessionData.getDataTbVal(DATA_TABLE, row, "Yêu thích");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sCacBoLoc.isEmpty()) {
				DDKN.select_cac_bo_loc(sCacBoLoc);
			}
			if (!sTimKiem.isEmpty()) {
				DDKN.select_tim_kiem(sTimKiem);
			}
			if (!sNhomTheo.isEmpty()) {
				DDKN.select_nhom_theo(sNhomTheo);
			}
			if (!sYeuThich.isEmpty()) {
				DDKN.select_yeu_thich(sYeuThich);
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

	@Then("^Kiem tra DUYỆT ĐĂNG KÝ NGHỈ nhu \"([^\"]*)\"$")
	public void Kiem_tra_DUYET_DANG_KY_NGHI_nhu(String dataKey, List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "DUYET_DANG_KY_NGHI_KIEM_TRA";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Duyệt đăng ký nghỉ");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sTimKiem = SessionData.getDataTbVal(DATA_TABLE, row, "Tìm kiếm");
			String sCacBoLoc = SessionData.getDataTbVal(DATA_TABLE, row, "Các bộ lọc");
			String sNhomTheo = SessionData.getDataTbVal(DATA_TABLE, row, "Nhóm theo");
			String sYeuThich = SessionData.getDataTbVal(DATA_TABLE, row, "Yêu thích");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sCacBoLoc.isEmpty()) {
				if (sCacBoLoc.startsWith("@MARK")) {
					if (sCacBoLoc.contains("@MARK DISABLED@@") || sCacBoLoc.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Các bộ lọc", false,
								DDKN.enabled_cac_bo_loc());
					} else if (sCacBoLoc.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Các bộ lọc", true,
								DDKN.enabled_cac_bo_loc());
					} else if (sCacBoLoc.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Các bộ lọc", true,
								DDKN.focus_cac_bo_loc());
					} else if (sCacBoLoc.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Các bộ lọc", false,
								DDKN.focus_cac_bo_loc());
					} else if (sCacBoLoc.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Các bộ lọc", true,
								DDKN.exist_cac_bo_loc());
					} else if (sCacBoLoc.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Các bộ lọc", false,
								DDKN.exist_cac_bo_loc());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Các bộ lọc", sCacBoLoc, DDKN.cac_bo_loc());
				}
			}
			if (!sTimKiem.isEmpty()) {
				if (sTimKiem.startsWith("@MARK")) {
					if (sTimKiem.contains("@MARK DISABLED@@") || sTimKiem.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Tìm kiếm", false,
								DDKN.enabled_tim_kiem());
					} else if (sTimKiem.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Tìm kiếm", true,
								DDKN.enabled_tim_kiem());
					} else if (sTimKiem.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Tìm kiếm", true,
								DDKN.focus_tim_kiem());
					} else if (sTimKiem.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Tìm kiếm", false,
								DDKN.focus_tim_kiem());
					} else if (sTimKiem.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Tìm kiếm", true,
								DDKN.exist_tim_kiem());
					} else if (sTimKiem.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Tìm kiếm", false,
								DDKN.exist_tim_kiem());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Tìm kiếm", sTimKiem, DDKN.tim_kiem());
				}
			}

			if (!sNhomTheo.isEmpty()) {
				if (sNhomTheo.startsWith("@MARK")) {
					if (sNhomTheo.contains("@MARK DISABLED@@") || sNhomTheo.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Nhóm theo", false,
								DDKN.enabled_nhom_theo());
					} else if (sNhomTheo.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Nhóm theo", true,
								DDKN.enabled_nhom_theo());
					} else if (sNhomTheo.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Nhóm theo", true,
								DDKN.focus_nhom_theo());
					} else if (sNhomTheo.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Nhóm theo", false,
								DDKN.focus_nhom_theo());
					} else if (sNhomTheo.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Nhóm theo", true,
								DDKN.exist_nhom_theo());
					} else if (sNhomTheo.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Nhóm theo", false,
								DDKN.exist_nhom_theo());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Nhóm theo", sNhomTheo, DDKN.nhom_theo());
				}
			}
			if (!sYeuThich.isEmpty()) {
				if (sYeuThich.startsWith("@MARK")) {
					if (sYeuThich.contains("@MARK DISABLED@@") || sYeuThich.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Yêu thích", false,
								DDKN.enabled_yeu_thich());
					} else if (sYeuThich.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Yêu thích", true,
								DDKN.enabled_yeu_thich());
					} else if (sYeuThich.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Yêu thích", true,
								DDKN.focus_yeu_thich());
					} else if (sYeuThich.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Yêu thích", false,
								DDKN.focus_yeu_thich());
					} else if (sYeuThich.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Yêu thích", true,
								DDKN.exist_yeu_thich());
					} else if (sYeuThich.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Yêu thích", false,
								DDKN.exist_yeu_thich());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Yêu thích", sYeuThich, DDKN.yeu_thich());
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
		// Common.assertion_result_then_assert(DATA_TABLE,
		// SessionData.generateSoftAssertion(DATA_TABLE));
		Common.clear_assertion(DATA_TABLE);
	}

	@When("^Thuc hien DUYỆT ĐĂNG KÝ NGHỈ nhu \"([^\"]*)\"$")
	public void Thuc_hien_DUYET_DANG_KY_NGHI_nhu(String dataKey, List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "DUYET_DANG_KY_NGHI_THUC_HIEN";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Duyệt đăng ký nghỉ");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sXemChiTiet = SessionData.getDataTbVal(DATA_TABLE, row, "Xem chi tiết");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sXemChiTiet.isEmpty()) {
				if (sXemChiTiet.startsWith("@MARK")) {
					if (sXemChiTiet.contains("@MARK DISABLED@@") || sXemChiTiet.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Xem chi tiết", false,
								DDKN.enabled_xem_chi_tiet());
					} else if (sXemChiTiet.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Xem chi tiết", true,
								DDKN.enabled_xem_chi_tiet());
					} else if (sXemChiTiet.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Xem chi tiết", true,
								DDKN.focus_xem_chi_tiet());
					} else if (sXemChiTiet.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Xem chi tiết", false,
								DDKN.focus_xem_chi_tiet());
					} else if (sXemChiTiet.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Xem chi tiết", true,
								DDKN.exist_xem_chi_tiet());
					} else if (sXemChiTiet.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Xem chi tiết", false,
								DDKN.exist_xem_chi_tiet());
					}
				} else if (SessionData.isYes(sXemChiTiet)) {
					DDKN.click_xem_chi_tiet();
				} else {
					Fail.fail("Recheck input data for Link [Xem chi tiết] : " + sXemChiTiet);
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
		// Common.assertion_result_then_assert(DATA_TABLE,
		// SessionData.generateSoftAssertion(DATA_TABLE));
		Common.clear_assertion(DATA_TABLE);
	}
}
