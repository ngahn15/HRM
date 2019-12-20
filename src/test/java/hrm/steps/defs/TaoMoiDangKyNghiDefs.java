package hrm.steps.defs;

import java.util.LinkedHashMap;
import java.util.List;

import org.assertj.core.api.Fail;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hrm.common.steps.CommonSteps;
import hrm.lib.SessionData;
import hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps;
import net.thucydides.core.annotations.Steps;

/**
 * @author AUTO
 * @version 11/26/2019 1:43:33 AM
 */
public class TaoMoiDangKyNghiDefs {
	@Steps
	TaoMoiDangKyNghiSteps TMDKN;

	@Steps
	CommonSteps Common;

	@Given("^Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"([^\"]*)\"$")
	public void Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String dataKey, List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "TAO_MOI_DANG_KY_NGHI_NHAP";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Tạo mới Đăng ký nghỉ");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sKinhGui = SessionData.getDataTbVal(DATA_TABLE, row, "Kính gửi");
			String sNguoiDuyet = SessionData.getDataTbVal(DATA_TABLE, row, "Người duyệt");
			String sLyDo = SessionData.getDataTbVal(DATA_TABLE, row, "Lý do");
			String sLoaiNghi = SessionData.getDataTbVal(DATA_TABLE, row, "Loại nghỉ");
			String sTuNgay = SessionData.getDataTbVal(DATA_TABLE, row, "Từ ngày");
			String sDenNgay = SessionData.getDataTbVal(DATA_TABLE, row, "Đến ngày");
			String sSoNgayNghi = SessionData.getDataTbVal(DATA_TABLE, row, "Số ngày nghỉ");

			if (!sKinhGui.isEmpty()) {
				TMDKN.enter_kinh_gui(sKinhGui);
			}
			if (!sNguoiDuyet.isEmpty()) {
				TMDKN.select_nguoi_duyet(sNguoiDuyet);
			}
			if (!sLyDo.isEmpty()) {
				TMDKN.enter_ly_do(sLyDo);
			}
			if (!sLoaiNghi.isEmpty()) {
				TMDKN.select_loai_nghi(sLoaiNghi);
			}
			if (sTuNgay.startsWith("Calendar>")) {
				sTuNgay = sTuNgay.replaceFirst("Calendar>", "");
				TMDKN.pick_tu_ngay(sTuNgay);
			} else if (!sTuNgay.isEmpty()) {
				TMDKN.enter_tu_ngay(sTuNgay);
			}
			if (sDenNgay.startsWith("Calendar>")) {
				sDenNgay = sDenNgay.replaceFirst("Calendar>", "");
				TMDKN.pick_den_ngay(sDenNgay);
			} else if (!sDenNgay.isEmpty()) {
				TMDKN.enter_den_ngay(sDenNgay);
			}
			if (!sSoNgayNghi.isEmpty()) {
				TMDKN.enter_so_ngay_nghi(sSoNgayNghi);
			}
		}
		Common.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try {
			SessionData.generateExcelReport();
		} catch (Exception e) {
		}
		Common.clear_assertion(DATA_TABLE);
	}

	@Then("^Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"([^\"]*)\"$")
	public void Kiem_tra_TAO_MOI_DANG_KY_NGHI_nhu(String dataKey, List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "TAO_MOI_DANG_KY_NGHI_KIEM_TRA";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Tạo mới Đăng ký nghỉ");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sModal = SessionData.getDataTbVal(DATA_TABLE, row, "MODAL");
			String sModalAction = SessionData.getDataTbVal(DATA_TABLE, row, "MODAL_ACTION");

			if (!sMessage.isEmpty()) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Message.", sMessage,
						Common.get_message(sMessage));
			} else if(sMessage.equals("Success")){
				String actualMessage = "Success";
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Message.", sMessage, actualMessage);
			}
			if (!sMessageAction.isEmpty()) {
				Common.close_message(sMessageAction);
			}
			if (!sModal.isEmpty()) {
				String actualMassage = Common.get_modal();
				System.out.println("actualMassage: " + actualMassage);
				if (actualMassage.contains(sModal)) {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Message.", sModal, actualMassage);
				}
			}
			if (!sModalAction.isEmpty()) {
				Common.close_modal();
			}
		}
		Common.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try {
			SessionData.generateExcelReport();
		} catch (Exception e) {
		}
		Common.clear_assertion(DATA_TABLE);
	}

	@When("^Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"([^\"]*)\"$")
	public void Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String dataKey, List<List<String>> dataTable) throws Exception {
		String DATA_TABLE = "TAO_MOI_DANG_KY_NGHI_THUC_HIEN";
		SessionData.addDataTable(DATA_TABLE, dataTable, false);
		LinkedHashMap<Integer, List<String>> data = new LinkedHashMap<>();
		data = SessionData.getDataTbRowsByValEqualInCol(DATA_TABLE, "KEY", dataKey);
		if (data.isEmpty()) {
			return;
		} else {
			SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Tạo mới Đăng ký nghỉ");
		}
		for (int row : data.keySet()) {
			String sKey = SessionData.getDataTbVal(DATA_TABLE, row, "KEY");
			String sLuu = SessionData.getDataTbVal(DATA_TABLE, row, "Lưu");
			String sHuyBo = SessionData.getDataTbVal(DATA_TABLE, row, "Hủy bỏ");
			String sGuiPheDuyet = SessionData.getDataTbVal(DATA_TABLE, row, "Gửi phê duyệt");
			String sSua = SessionData.getDataTbVal(DATA_TABLE, row, "Sửa");
			String sTao = SessionData.getDataTbVal(DATA_TABLE, row, "Tạo");
			String sSoanThao = SessionData.getDataTbVal(DATA_TABLE, row, "Soạn thảo");
			if (!sLuu.isEmpty()) {
				if (sLuu.startsWith("@MARK")) {
					if (sLuu.contains("@MARK DISABLED@@") || sLuu.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Lưu", false,
								TMDKN.enabled_luu());
					} else if (sLuu.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Lưu", true,
								TMDKN.enabled_luu());
					} else if (sLuu.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Lưu", true,
								TMDKN.focus_luu());
					} else if (sLuu.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Lưu", false,
								TMDKN.focus_luu());
					} else if (sLuu.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Lưu", true,
								TMDKN.exist_luu());
					} else if (sLuu.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Lưu", false,
								TMDKN.exist_luu());
					}
				} else if (SessionData.isYes(sLuu)) {
					TMDKN.click_luu();
				} else {
					Fail.fail("Recheck input data for Button [Lưu] : " + sLuu);
				}
			}
			if (!sHuyBo.isEmpty()) {
				if (sHuyBo.startsWith("@MARK")) {
					if (sHuyBo.contains("@MARK DISABLED@@") || sHuyBo.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Hủy bỏ", false,
								TMDKN.enabled_huy_bo());
					} else if (sHuyBo.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Hủy bỏ", true,
								TMDKN.enabled_huy_bo());
					} else if (sHuyBo.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Hủy bỏ", true,
								TMDKN.focus_huy_bo());
					} else if (sHuyBo.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Hủy bỏ", false,
								TMDKN.focus_huy_bo());
					} else if (sHuyBo.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Hủy bỏ", true,
								TMDKN.exist_huy_bo());
					} else if (sHuyBo.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Hủy bỏ", false,
								TMDKN.exist_huy_bo());
					}
				} else if (SessionData.isYes(sHuyBo)) {
					TMDKN.click_huy_bo();
					Common.close_modal();
				} else {
					Fail.fail("Recheck input data for Button [Hủy bỏ] : " + sHuyBo);
				}
			}
			if (!sGuiPheDuyet.isEmpty()) {
				if (sGuiPheDuyet.startsWith("@MARK")) {
					if (sGuiPheDuyet.contains("@MARK DISABLED@@") || sGuiPheDuyet.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Gửi xác nhận", false,
								TMDKN.enabled_gui_phe_duyet());
					} else if (sGuiPheDuyet.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Gửi xác nhận", true,
								TMDKN.enabled_gui_phe_duyet());
					} else if (sGuiPheDuyet.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Gửi xác nhận", true,
								TMDKN.focus_gui_phe_duyet());
					} else if (sGuiPheDuyet.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Gửi xác nhận", false,
								TMDKN.focus_gui_phe_duyet());
					} else if (sGuiPheDuyet.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Gửi xác nhận", true,
								TMDKN.exist_gui_phe_duyet());
					} else if (sGuiPheDuyet.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Gửi xác nhận", false,
								TMDKN.exist_gui_phe_duyet());
					}
				} else if (SessionData.isYes(sGuiPheDuyet)) {
					TMDKN.click_gui_phe_duyet();
				} else {
					Fail.fail("Recheck input data for Button [Gửi xác nhận] : " + sGuiPheDuyet);
				}
			}

			if (!sSua.isEmpty()) {
				if (sSua.startsWith("@MARK")) {
					if (sSua.contains("@MARK DISABLED@@") || sSua.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Sửa", false,
								TMDKN.enabled_sua());
					} else if (sSua.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Sửa", true,
								TMDKN.enabled_sua());
					} else if (sSua.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Sửa", true,
								TMDKN.focus_sua());
					} else if (sSua.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Sửa", false,
								TMDKN.focus_sua());
					} else if (sSua.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Sửa", true,
								TMDKN.exist_sua());
					} else if (sSua.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Sửa", false,
								TMDKN.exist_sua());
					}
				} else if (SessionData.isYes(sSua)) {
					TMDKN.click_sua();
				} else {
					Fail.fail("Recheck input data for Button [Sửa] : " + sSua);
				}
			}
			if (!sTao.isEmpty()) {
				if (sTao.startsWith("@MARK")) {
					if (sTao.contains("@MARK DISABLED@@") || sTao.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Tạo", false,
								TMDKN.enabled_tao());
					} else if (sTao.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Tạo", true,
								TMDKN.enabled_tao());
					} else if (sTao.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Tạo", true,
								TMDKN.focus_tao());
					} else if (sTao.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Tạo", false,
								TMDKN.focus_tao());
					} else if (sTao.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Tạo", true,
								TMDKN.exist_tao());
					} else if (sTao.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Tạo", false,
								TMDKN.exist_tao());
					}
				} else if (SessionData.isYes(sTao)) {
					System.out.println("CLICK TAO");
					TMDKN.click_tao();
				} else {
					Fail.fail("Recheck input data for Button [Tạo] : " + sTao);
				}
			}
			if (!sSoanThao.isEmpty()) {
				if (sSoanThao.startsWith("@MARK")) {
					if (sSoanThao.contains("@MARK DISABLED@@") || sSoanThao.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Soạn thảo", false,
								TMDKN.enabled_soan_thao());
					} else if (sSoanThao.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Soạn thảo", true,
								TMDKN.enabled_soan_thao());
					} else if (sSoanThao.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Soạn thảo", true,
								TMDKN.focus_soan_thao());
					} else if (sSoanThao.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Soạn thảo", false,
								TMDKN.focus_soan_thao());
					} else if (sSoanThao.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Soạn thảo", true,
								TMDKN.exist_soan_thao());
					} else if (sSoanThao.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Soạn thảo", false,
								TMDKN.exist_soan_thao());
					}
				} else if (SessionData.isYes(sSoanThao)) {
					TMDKN.click_soan_thao();
				} else {
					Fail.fail("Recheck input data for Button [Soạn thảo] : " + sSoanThao);
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
