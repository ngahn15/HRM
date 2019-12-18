package hrm.steps.defs;
import java.util.LinkedHashMap;
import java.util.List;

import org.assertj.core.api.Fail;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hrm.common.steps.CommonSteps;
import hrm.lib.SessionData;
import hrm.steps.serenity.ChamCongThang.TaoMoiBangChamCongThangSteps;
import net.thucydides.core.annotations.Steps;

/**
 * @author AUTO
 * @version 12/1/2019 5:01:32 PM
 */
public class TaoMoiBangChamCongThangDefs {
	@Steps
	TaoMoiBangChamCongThangSteps TMBCCT;

	@Steps
	CommonSteps Common;
	@Given("^Nhap TẠO MỚI BẢNG CHẤM CÔNG THÁNG nhu \"([^\"]*)\"$")
	public void Nhap_TAO_MOI_BANG_CHAM_CONG_THANG_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "TAO_MOI_BANG_CHAM_CONG_THANG_NHAP";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Tạo mới bảng chấm công tháng");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sDonVi = SessionData.getDataTbVal(DATA_TABLE, row, "Đơn vị");
			String sImportDuLieu = SessionData.getDataTbVal(DATA_TABLE, row, "Import dữ liệu");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sDonVi.isEmpty()) {
				TMBCCT.select_don_vi(sDonVi);
			}
			if (!sImportDuLieu.isEmpty()) {
				TMBCCT.set_import_du_lieu(sImportDuLieu);
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
	@Then("^Kiem tra TẠO MỚI BẢNG CHẤM CÔNG THÁNG nhu \"([^\"]*)\"$")
	public void Kiem_tra_TAO_MOI_BANG_CHAM_CONG_THANG_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "TAO_MOI_BANG_CHAM_CONG_THANG_KIEM_TRA";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Tạo mới bảng chấm công tháng");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sDonVi = SessionData.getDataTbVal(DATA_TABLE, row, "Đơn vị");
			String sImportDuLieu = SessionData.getDataTbVal(DATA_TABLE, row, "Import dữ liệu");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sDonVi.isEmpty()) {
				if (sDonVi.startsWith("@MARK")) {
					if (sDonVi.contains("@MARK DISABLED@@") || sDonVi.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Đơn vị", false, TMBCCT.enabled_don_vi());
					} else if (sDonVi.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Đơn vị", true, TMBCCT.enabled_don_vi());
					} else if(sDonVi.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Đơn vị", true, TMBCCT.focus_don_vi());
					} else if(sDonVi.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Đơn vị", false, TMBCCT.focus_don_vi());
					} else if(sDonVi.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Đơn vị", true, TMBCCT.exist_don_vi());
					} else if(sDonVi.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Đơn vị", false, TMBCCT.exist_don_vi());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Đơn vị", sDonVi, TMBCCT.don_vi());
				}
			}
			if (!sImportDuLieu.isEmpty()) {
				if (sImportDuLieu.startsWith("@MARK")) {
					if (sImportDuLieu.contains("@MARK DISABLED@@") || sImportDuLieu.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Import dữ liệu", false, TMBCCT.enabled_import_du_lieu());
					} else if (sImportDuLieu.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Import dữ liệu", true, TMBCCT.enabled_import_du_lieu());
					} else if(sImportDuLieu.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Import dữ liệu", true, TMBCCT.focus_import_du_lieu());
					} else if(sImportDuLieu.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Import dữ liệu", false, TMBCCT.focus_import_du_lieu());
				} else if (sImportDuLieu.contains("@MARK SELECT@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "SELECT/DESESLECT: Import dữ liệu", true, TMBCCT.import_du_lieu());
					} else if (sImportDuLieu.contains("@MARK DESELECT@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "SELECT/DESESLECT: Import dữ liệu", false, TMBCCT.import_du_lieu());
					} else if(sImportDuLieu.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Import dữ liệu", true, TMBCCT.exist_import_du_lieu());
					} else if(sImportDuLieu.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Import dữ liệu", false, TMBCCT.exist_import_du_lieu());
					}
				} else {
					Fail.fail("Recheck input data for ChkBox :Import dữ liệu");
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
	@When("^Thuc hien TẠO MỚI BẢNG CHẤM CÔNG THÁNG nhu \"([^\"]*)\"$")
	public void Thuc_hien_TAO_MOI_BANG_CHAM_CONG_THANG_nhu(String dataKey,
			List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "TAO_MOI_BANG_CHAM_CONG_THANG_THUC_HIEN";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Tạo mới bảng chấm công tháng");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sLuu = SessionData.getDataTbVal(DATA_TABLE, row, "Lưu");
			String sHuyBo = SessionData.getDataTbVal(DATA_TABLE, row, "Hủy bỏ");
			String sXacNhan = SessionData.getDataTbVal(DATA_TABLE, row, "Xác nhận");
			String sCapNhatNgayNghi = SessionData.getDataTbVal(DATA_TABLE, row, "Cập nhật ngày nghỉ");
			String sTaiLenTepTinCuaBan = SessionData.getDataTbVal(DATA_TABLE, row, "Tải lên tệp tin của bạn");
			String sTaiDuLieuChamCong = SessionData.getDataTbVal(DATA_TABLE, row, "Tải dữ liệu chấm công");
			String sSua = SessionData.getDataTbVal(DATA_TABLE, row, "Sửa");
			String sXoa = SessionData.getDataTbVal(DATA_TABLE, row, "Xóa");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sLuu.isEmpty()) {
				if (sLuu.startsWith("@MARK")) {
					if (sLuu.contains("@MARK DISABLED@@") || sLuu.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Lưu", false, TMBCCT.enabled_luu());
					} else if (sLuu.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Lưu", true, TMBCCT.enabled_luu());
					} else if(sLuu.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Lưu", true, TMBCCT.focus_luu());
					} else if(sLuu.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Lưu", false, TMBCCT.focus_luu());
					} else if(sLuu.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Lưu", true, TMBCCT.exist_luu());
					} else if(sLuu.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Lưu", false, TMBCCT.exist_luu());
					}
				} else if (SessionData.isYes(sLuu)){
					TMBCCT.click_luu();
				}
				else {
					Fail.fail("Recheck input data for Button [Lưu] : " + sLuu);
				}
			}
			if (!sHuyBo.isEmpty()) {
				if (sHuyBo.startsWith("@MARK")) {
					if (sHuyBo.contains("@MARK DISABLED@@") || sHuyBo.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Hủy bỏ", false, TMBCCT.enabled_huy_bo());
					} else if (sHuyBo.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Hủy bỏ", true, TMBCCT.enabled_huy_bo());
					} else if(sHuyBo.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Hủy bỏ", true, TMBCCT.focus_huy_bo());
					} else if(sHuyBo.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Hủy bỏ", false, TMBCCT.focus_huy_bo());
					} else if(sHuyBo.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Hủy bỏ", true, TMBCCT.exist_huy_bo());
					} else if(sHuyBo.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Hủy bỏ", false, TMBCCT.exist_huy_bo());
					}
				} else if (SessionData.isYes(sHuyBo)){
					TMBCCT.click_huy_bo();
				}
				else {
					Fail.fail("Recheck input data for Button [Hủy bỏ] : " + sHuyBo);
				}
			}
			if (!sXacNhan.isEmpty()) {
				if (sXacNhan.startsWith("@MARK")) {
					if (sXacNhan.contains("@MARK DISABLED@@") || sXacNhan.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Xác nhận", false, TMBCCT.enabled_xac_nhan());
					} else if (sXacNhan.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Xác nhận", true, TMBCCT.enabled_xac_nhan());
					} else if(sXacNhan.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Xác nhận", true, TMBCCT.focus_xac_nhan());
					} else if(sXacNhan.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Xác nhận", false, TMBCCT.focus_xac_nhan());
					} else if(sXacNhan.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Xác nhận", true, TMBCCT.exist_xac_nhan());
					} else if(sXacNhan.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Xác nhận", false, TMBCCT.exist_xac_nhan());
					}
				} else if (SessionData.isYes(sXacNhan)){
					TMBCCT.click_xac_nhan();
				}
				else {
					Fail.fail("Recheck input data for Button [Xác nhận] : " + sXacNhan);
				}
			}
			if (!sCapNhatNgayNghi.isEmpty()) {
				if (sCapNhatNgayNghi.startsWith("@MARK")) {
					if (sCapNhatNgayNghi.contains("@MARK DISABLED@@") || sCapNhatNgayNghi.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Cập nhật ngày nghỉ", false, TMBCCT.enabled_cap_nhat_ngay_nghi());
					} else if (sCapNhatNgayNghi.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Cập nhật ngày nghỉ", true, TMBCCT.enabled_cap_nhat_ngay_nghi());
					} else if(sCapNhatNgayNghi.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Cập nhật ngày nghỉ", true, TMBCCT.focus_cap_nhat_ngay_nghi());
					} else if(sCapNhatNgayNghi.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Cập nhật ngày nghỉ", false, TMBCCT.focus_cap_nhat_ngay_nghi());
					} else if(sCapNhatNgayNghi.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Cập nhật ngày nghỉ", true, TMBCCT.exist_cap_nhat_ngay_nghi());
					} else if(sCapNhatNgayNghi.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Cập nhật ngày nghỉ", false, TMBCCT.exist_cap_nhat_ngay_nghi());
					}
				} else if (SessionData.isYes(sCapNhatNgayNghi)){
					TMBCCT.click_cap_nhat_ngay_nghi();
				}
				else {
					Fail.fail("Recheck input data for Button [Cập nhật ngày nghỉ] : " + sCapNhatNgayNghi);
				}
			}
			if (!sTaiLenTepTinCuaBan.isEmpty()) {
				if (sTaiLenTepTinCuaBan.startsWith("@MARK")) {
					if (sTaiLenTepTinCuaBan.contains("@MARK DISABLED@@") || sTaiLenTepTinCuaBan.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Tải lên tệp tin của bạn", false, TMBCCT.enabled_tai_len_tep_tin_cua_ban());
					} else if (sTaiLenTepTinCuaBan.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Tải lên tệp tin của bạn", true, TMBCCT.enabled_tai_len_tep_tin_cua_ban());
					} else if(sTaiLenTepTinCuaBan.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Tải lên tệp tin của bạn", true, TMBCCT.focus_tai_len_tep_tin_cua_ban());
					} else if(sTaiLenTepTinCuaBan.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Tải lên tệp tin của bạn", false, TMBCCT.focus_tai_len_tep_tin_cua_ban());
					} else if(sTaiLenTepTinCuaBan.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Tải lên tệp tin của bạn", true, TMBCCT.exist_tai_len_tep_tin_cua_ban());
					} else if(sTaiLenTepTinCuaBan.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Tải lên tệp tin của bạn", false, TMBCCT.exist_tai_len_tep_tin_cua_ban());
					}
				} else {
					TMBCCT.click_tai_len_tep_tin_cua_ban(sTaiLenTepTinCuaBan);
				}
			}
			if (!sTaiDuLieuChamCong.isEmpty()) {
				if (sTaiDuLieuChamCong.startsWith("@MARK")) {
					if (sTaiDuLieuChamCong.contains("@MARK DISABLED@@") || sTaiDuLieuChamCong.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Tải dữ liệu chấm công", false, TMBCCT.enabled_tai_du_lieu_cham_cong());
					} else if (sTaiDuLieuChamCong.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Tải dữ liệu chấm công", true, TMBCCT.enabled_tai_du_lieu_cham_cong());
					} else if(sTaiDuLieuChamCong.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Tải dữ liệu chấm công", true, TMBCCT.focus_tai_du_lieu_cham_cong());
					} else if(sTaiDuLieuChamCong.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Tải dữ liệu chấm công", false, TMBCCT.focus_tai_du_lieu_cham_cong());
					} else if(sTaiDuLieuChamCong.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Tải dữ liệu chấm công", true, TMBCCT.exist_tai_du_lieu_cham_cong());
					} else if(sTaiDuLieuChamCong.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Tải dữ liệu chấm công", false, TMBCCT.exist_tai_du_lieu_cham_cong());
					}
				} else if (SessionData.isYes(sTaiDuLieuChamCong)){
					TMBCCT.click_tai_du_lieu_cham_cong();
				}
				else {
					Fail.fail("Recheck input data for Button [Tải dữ liệu chấm công] : " + sTaiDuLieuChamCong);
				}
			}
			if (!sSua.isEmpty()) {
				if (sSua.startsWith("@MARK")) {
					if (sSua.contains("@MARK DISABLED@@") || sSua.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Sửa", false, TMBCCT.enabled_sua());
					} else if (sSua.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Sửa", true, TMBCCT.enabled_sua());
					} else if(sSua.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Sửa", true, TMBCCT.focus_sua());
					} else if(sSua.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Sửa", false, TMBCCT.focus_sua());
					} else if(sSua.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Sửa", true, TMBCCT.exist_sua());
					} else if(sSua.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Sửa", false, TMBCCT.exist_sua());
					}
				} else if (SessionData.isYes(sSua)){
					TMBCCT.click_sua();
				}
				else {
					Fail.fail("Recheck input data for Button [Sửa] : " + sSua);
				}
			}
			if (!sXoa.isEmpty()) {
				if (sXoa.startsWith("@MARK")) {
					if (sXoa.contains("@MARK DISABLED@@") || sXoa.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Xóa", false, TMBCCT.enabled_xoa());
					} else if (sXoa.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Xóa", true, TMBCCT.enabled_xoa());
					} else if(sXoa.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Xóa", true, TMBCCT.focus_xoa());
					} else if(sXoa.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Xóa", false, TMBCCT.focus_xoa());
					} else if(sXoa.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Xóa", true, TMBCCT.exist_xoa());
					} else if(sXoa.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Xóa", false, TMBCCT.exist_xoa());
					}
				} else if (SessionData.isYes(sXoa)){
					TMBCCT.click_xoa();
				}
				else {
					Fail.fail("Recheck input data for Button [Xóa] : " + sXoa);
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
	@Then("^Kiem tra cac Control hien thi day du tren TẠO MỚI BẢNG CHẤM CÔNG THÁNG$")
	public void Kiem_tra_cac_Control_hien_thi_day_du_tren_TAO_MOI_BANG_CHAM_CONG_THANG() throws Exception {
		String DATA_TABLE = "TAO_MOI_BANG_CHAM_CONG_THANG_VERIFY_CONTROL_VISIBLE";
		SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra cac Control hien thi day du tren Tạo mới bảng chấm công tháng");
		SessionData.addSoftAssertion(DATA_TABLE, "B1_V", "VISIBLE/INVISIBLE: Lưu", true, TMBCCT.exist_luu());
		SessionData.addSoftAssertion(DATA_TABLE, "B2_V", "VISIBLE/INVISIBLE: Hủy bỏ", true, TMBCCT.exist_huy_bo());
		SessionData.addSoftAssertion(DATA_TABLE, "B3_V", "VISIBLE/INVISIBLE: Xác nhận", true, TMBCCT.exist_xac_nhan());
		SessionData.addSoftAssertion(DATA_TABLE, "B4_V", "VISIBLE/INVISIBLE: Cập nhật ngày nghỉ", true, TMBCCT.exist_cap_nhat_ngay_nghi());
		SessionData.addSoftAssertion(DATA_TABLE, "B5_V", "VISIBLE/INVISIBLE: Đơn vị", true, TMBCCT.exist_don_vi());
		SessionData.addSoftAssertion(DATA_TABLE, "B6_V", "VISIBLE/INVISIBLE: Import dữ liệu", true, TMBCCT.exist_import_du_lieu());
		SessionData.addSoftAssertion(DATA_TABLE, "B7_V", "VISIBLE/INVISIBLE: Tải lên tệp tin của bạn", true, TMBCCT.exist_tai_len_tep_tin_cua_ban());
		SessionData.addSoftAssertion(DATA_TABLE, "B8_V", "VISIBLE/INVISIBLE: Tải dữ liệu chấm công", true, TMBCCT.exist_tai_du_lieu_cham_cong());
		SessionData.addSoftAssertion(DATA_TABLE, "B9_V", "VISIBLE/INVISIBLE: Sửa", true, TMBCCT.exist_sua());
		SessionData.addSoftAssertion(DATA_TABLE, "B10_V", "VISIBLE/INVISIBLE: Xóa", true, TMBCCT.exist_xoa());
		Common.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try { SessionData.generateExcelReport(); } catch (Exception e) {}
		// Common.assertion_result_then_assert(DATA_TABLE, SessionData.generateSoftAssertion(DATA_TABLE));
		Common.clear_assertion(DATA_TABLE);
	}
	@Then("^Kiem tra Tab Index cac Control tren TẠO MỚI BẢNG CHẤM CÔNG THÁNG$")
	public void Kiem_tra_Tab_Index_cac_Control_tren_TAO_MOI_BANG_CHAM_CONG_THANG() throws Exception {
		String DATA_TABLE = "TAO_MOI_BANG_CHAM_CONG_THANG_VERIFY_CONTROL_TAB";
		SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Tab Index cua Control tren Tạo mới bảng chấm công tháng");
		Common.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try { SessionData.generateExcelReport(); } catch (Exception e) {}
		// Common.assertion_result_then_assert(DATA_TABLE, SessionData.generateSoftAssertion(DATA_TABLE));
		Common.clear_assertion(DATA_TABLE);
	}
}
