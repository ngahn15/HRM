package hrm.steps.defs;

import java.util.LinkedHashMap;
import java.util.List;

import org.assertj.core.api.Fail;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hrm.common.steps.CommonSteps;
import hrm.lib.SessionData;
import hrm.steps.serenity.DuyetDangKyNghi.XemChiTietDangKyNghiSteps;
import net.thucydides.core.annotations.Steps;

/**
 * @author AUTO
 * @version 12/1/2019 1:47:54 PM
 */
public class XemChiTietDangKyNghiDefs {
	@Steps
	XemChiTietDangKyNghiSteps XCTDKN;

	@Steps
	CommonSteps Common;
	@Given("^Nhap XEM CHI TIẾT ĐĂNG KÝ NGHỈ nhu \"([^\"]*)\"$")
	public void Nhap_XEM_CHI_TIET_DANG_KY_NGHI_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "XEM_CHI_TIET_DANG_KY_NGHI_NHAP";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Xem chi tiết đăng ký nghỉ");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

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
	@Then("^Kiem tra XEM CHI TIẾT ĐĂNG KÝ NGHỈ nhu \"([^\"]*)\"$")
	public void Kiem_tra_XEM_CHI_TIET_DANG_KY_NGHI_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "XEM_CHI_TIET_DANG_KY_NGHI_KIEM_TRA";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Xem chi tiết đăng ký nghỉ");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sNhanSu = SessionData.getDataTbVal(DATA_TABLE, row, "Nhân sự");
			String sLyDo = SessionData.getDataTbVal(DATA_TABLE, row, "Lý do");
			String sLoaiNghi = SessionData.getDataTbVal(DATA_TABLE, row, "Loại nghỉ");
			String sTuNgay = SessionData.getDataTbVal(DATA_TABLE, row, "Từ ngày");
			String sDenNgay = SessionData.getDataTbVal(DATA_TABLE, row, "Đến ngày");
			String sSoNgayNghi = SessionData.getDataTbVal(DATA_TABLE, row, "Số ngày nghỉ");
			String sNgayTao = SessionData.getDataTbVal(DATA_TABLE, row, "Ngày tạo");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sNhanSu.isEmpty()) {
				if (sNhanSu.startsWith("@MARK")) {
					if(sNhanSu.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Nhân sự", true, XCTDKN.focus_nhan_su());
					} else if(sNhanSu.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Nhân sự", false, XCTDKN.focus_nhan_su());
					} else if(sNhanSu.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Nhân sự", true, XCTDKN.exist_nhan_su());
					} else if(sNhanSu.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Nhân sự", false, XCTDKN.exist_nhan_su());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Nhân sự", sNhanSu, XCTDKN.nhan_su());
				}
			}
			if (!sLyDo.isEmpty()) {
				if (sLyDo.startsWith("@MARK")) {
					if(sLyDo.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Lý do", true, XCTDKN.focus_ly_do());
					} else if(sLyDo.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Lý do", false, XCTDKN.focus_ly_do());
					} else if(sLyDo.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Lý do", true, XCTDKN.exist_ly_do());
					} else if(sLyDo.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Lý do", false, XCTDKN.exist_ly_do());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Lý do", sLyDo, XCTDKN.ly_do());
				}
			}
			if (!sLoaiNghi.isEmpty()) {
				if (sLoaiNghi.startsWith("@MARK")) {
					if(sLoaiNghi.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Loại nghỉ", true, XCTDKN.focus_loai_nghi());
					} else if(sLoaiNghi.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Loại nghỉ", false, XCTDKN.focus_loai_nghi());
					} else if(sLoaiNghi.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Loại nghỉ", true, XCTDKN.exist_loai_nghi());
					} else if(sLoaiNghi.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Loại nghỉ", false, XCTDKN.exist_loai_nghi());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Loại nghỉ", sLoaiNghi, XCTDKN.loai_nghi());
				}
			}
			if (!sTuNgay.isEmpty()) {
				if (sTuNgay.startsWith("@MARK")) {
					if(sTuNgay.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Từ ngày", true, XCTDKN.focus_tu_ngay());
					} else if(sTuNgay.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Từ ngày", false, XCTDKN.focus_tu_ngay());
					} else if(sTuNgay.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Từ ngày", true, XCTDKN.exist_tu_ngay());
					} else if(sTuNgay.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Từ ngày", false, XCTDKN.exist_tu_ngay());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Từ ngày", sTuNgay, XCTDKN.tu_ngay());
				}
			}
			if (!sDenNgay.isEmpty()) {
				if (sDenNgay.startsWith("@MARK")) {
					if(sDenNgay.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Đến ngày", true, XCTDKN.focus_den_ngay());
					} else if(sDenNgay.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Đến ngày", false, XCTDKN.focus_den_ngay());
					} else if(sDenNgay.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Đến ngày", true, XCTDKN.exist_den_ngay());
					} else if(sDenNgay.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Đến ngày", false, XCTDKN.exist_den_ngay());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Đến ngày", sDenNgay, XCTDKN.den_ngay());
				}
			}
			if (!sSoNgayNghi.isEmpty()) {
				if (sSoNgayNghi.startsWith("@MARK")) {
					if(sSoNgayNghi.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Số ngày nghỉ", true, XCTDKN.focus_so_ngay_nghi());
					} else if(sSoNgayNghi.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Số ngày nghỉ", false, XCTDKN.focus_so_ngay_nghi());
					} else if(sSoNgayNghi.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Số ngày nghỉ", true, XCTDKN.exist_so_ngay_nghi());
					} else if(sSoNgayNghi.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Số ngày nghỉ", false, XCTDKN.exist_so_ngay_nghi());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Số ngày nghỉ", sSoNgayNghi, XCTDKN.so_ngay_nghi());
				}
			}
			if (!sNgayTao.isEmpty()) {
				if (sNgayTao.startsWith("@MARK")) {
					if(sNgayTao.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Ngày tạo", true, XCTDKN.focus_ngay_tao());
					} else if(sNgayTao.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Ngày tạo", false, XCTDKN.focus_ngay_tao());
					} else if(sNgayTao.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Ngày tạo", true, XCTDKN.exist_ngay_tao());
					} else if(sNgayTao.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Ngày tạo", false, XCTDKN.exist_ngay_tao());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Ngày tạo", sNgayTao, XCTDKN.ngay_tao());
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
	@When("^Thuc hien XEM CHI TIẾT ĐĂNG KÝ NGHỈ nhu \"([^\"]*)\"$")
	public void Thuc_hien_XEM_CHI_TIET_DANG_KY_NGHI_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "XEM_CHI_TIET_DANG_KY_NGHI_THUC_HIEN";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Xem chi tiết đăng ký nghỉ");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sPheDuyet = SessionData.getDataTbVal(DATA_TABLE, row, "Phê duyệt");
			String sTuChoi = SessionData.getDataTbVal(DATA_TABLE, row, "Từ chối");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sPheDuyet.isEmpty()) {
				if (sPheDuyet.startsWith("@MARK")) {
					if (sPheDuyet.contains("@MARK DISABLED@@") || sPheDuyet.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Phê duyệt", false, XCTDKN.enabled_phe_duyet());
					} else if (sPheDuyet.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Phê duyệt", true, XCTDKN.enabled_phe_duyet());
					} else if(sPheDuyet.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Phê duyệt", true, XCTDKN.focus_phe_duyet());
					} else if(sPheDuyet.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Phê duyệt", false, XCTDKN.focus_phe_duyet());
					} else if(sPheDuyet.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Phê duyệt", true, XCTDKN.exist_phe_duyet());
					} else if(sPheDuyet.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Phê duyệt", false, XCTDKN.exist_phe_duyet());
					}
				} else if (SessionData.isYes(sPheDuyet)){
					XCTDKN.click_phe_duyet();
				}
				else {
					Fail.fail("Recheck input data for Button [Phê duyệt] : " + sPheDuyet);
				}
			}
			if (!sTuChoi.isEmpty()) {
				if (sTuChoi.startsWith("@MARK")) {
					if (sTuChoi.contains("@MARK DISABLED@@") || sTuChoi.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Từ chối", false, XCTDKN.enabled_tu_choi());
					} else if (sTuChoi.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Từ chối", true, XCTDKN.enabled_tu_choi());
					} else if(sTuChoi.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Từ chối", true, XCTDKN.focus_tu_choi());
					} else if(sTuChoi.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Từ chối", false, XCTDKN.focus_tu_choi());
					} else if(sTuChoi.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Từ chối", true, XCTDKN.exist_tu_choi());
					} else if(sTuChoi.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Từ chối", false, XCTDKN.exist_tu_choi());
					}
				} else if (SessionData.isYes(sTuChoi)){
					XCTDKN.click_tu_choi();
				}
				else {
					Fail.fail("Recheck input data for Button [Từ chối] : " + sTuChoi);
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
	@Then("^Kiem tra cac Control hien thi day du tren XEM CHI TIẾT ĐĂNG KÝ NGHỈ$")
	public void Kiem_tra_cac_Control_hien_thi_day_du_tren_XEM_CHI_TIET_DANG_KY_NGHI() throws Exception {
		String DATA_TABLE = "XEM_CHI_TIET_DANG_KY_NGHI_VERIFY_CONTROL_VISIBLE";
		SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra cac Control hien thi day du tren Xem chi tiết đăng ký nghỉ");
		SessionData.addSoftAssertion(DATA_TABLE, "H1_V", "VISIBLE/INVISIBLE: Phê duyệt", true, XCTDKN.exist_phe_duyet());
		SessionData.addSoftAssertion(DATA_TABLE, "H2_V", "VISIBLE/INVISIBLE: Từ chối", true, XCTDKN.exist_tu_choi());
		SessionData.addSoftAssertion(DATA_TABLE, "H3_V", "VISIBLE/INVISIBLE: Nhân sự", true, XCTDKN.exist_nhan_su());
		SessionData.addSoftAssertion(DATA_TABLE, "H4_V", "VISIBLE/INVISIBLE: Lý do", true, XCTDKN.exist_ly_do());
		SessionData.addSoftAssertion(DATA_TABLE, "H5_V", "VISIBLE/INVISIBLE: Loại nghỉ", true, XCTDKN.exist_loai_nghi());
		SessionData.addSoftAssertion(DATA_TABLE, "H6_V", "VISIBLE/INVISIBLE: Từ ngày", true, XCTDKN.exist_tu_ngay());
		SessionData.addSoftAssertion(DATA_TABLE, "H7_V", "VISIBLE/INVISIBLE: Đến ngày", true, XCTDKN.exist_den_ngay());
		SessionData.addSoftAssertion(DATA_TABLE, "H8_V", "VISIBLE/INVISIBLE: Số ngày nghỉ", true, XCTDKN.exist_so_ngay_nghi());
		SessionData.addSoftAssertion(DATA_TABLE, "H9_V", "VISIBLE/INVISIBLE: Ngày tạo", true, XCTDKN.exist_ngay_tao());
		Common.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try { SessionData.generateExcelReport(); } catch (Exception e) {}
		// Common.assertion_result_then_assert(DATA_TABLE, SessionData.generateSoftAssertion(DATA_TABLE));
		Common.clear_assertion(DATA_TABLE);
	}
	@Then("^Kiem tra Tab Index cac Control tren XEM CHI TIẾT ĐĂNG KÝ NGHỈ$")
	public void Kiem_tra_Tab_Index_cac_Control_tren_XEM_CHI_TIET_DANG_KY_NGHI() throws Exception {
		String DATA_TABLE = "XEM_CHI_TIET_DANG_KY_NGHI_VERIFY_CONTROL_TAB";
		SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Tab Index cua Control tren Xem chi tiết đăng ký nghỉ");
		Common.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try { SessionData.generateExcelReport(); } catch (Exception e) {}
		// Common.assertion_result_then_assert(DATA_TABLE, SessionData.generateSoftAssertion(DATA_TABLE));
		Common.clear_assertion(DATA_TABLE);
	}
}
