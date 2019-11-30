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
			String sNguoiLienQuan = SessionData.getDataTbVal(DATA_TABLE, row, "Người liên quan");
			String sDiaDiemNghiPhep = SessionData.getDataTbVal(DATA_TABLE, row, "Địa điểm nghỉ phép");
			String sNhanSuDuocUyQuyen = SessionData.getDataTbVal(DATA_TABLE, row, "Nhân sự được ủy quyền");
			String sNghiDiNuocNgoai = SessionData.getDataTbVal(DATA_TABLE, row, "Nghỉ đi nước ngoài");
			String sLoaiNghi = SessionData.getDataTbVal(DATA_TABLE, row, "Loại nghỉ");
			String sTuNgay = SessionData.getDataTbVal(DATA_TABLE, row, "Từ ngày");
			String sDenNgay = SessionData.getDataTbVal(DATA_TABLE, row, "Đến ngày");
			String sSoNgayNghi = SessionData.getDataTbVal(DATA_TABLE, row, "Số ngày nghỉ");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sModal = SessionData.getDataTbVal(DATA_TABLE, row, "MODAL");
			String sModalAction = SessionData.getDataTbVal(DATA_TABLE, row, "MODAL_ACTION");

			if (!sKinhGui.isEmpty()) {
				TMDKN.enter_kinh_gui(sKinhGui);
			}
			if (!sNguoiDuyet.isEmpty()) {
				TMDKN.select_nguoi_duyet(sNguoiDuyet);
			}
			if (!sLyDo.isEmpty()) {
				TMDKN.enter_ly_do(sLyDo);
			}
			if (!sNguoiLienQuan.isEmpty()) {
				TMDKN.select_nguoi_lien_quan(sNguoiLienQuan);
			}
			if (!sDiaDiemNghiPhep.isEmpty()) {
				TMDKN.enter_dia_diem_nghi_phep(sDiaDiemNghiPhep);
			}
			if (!sNhanSuDuocUyQuyen.isEmpty()) {
				TMDKN.select_nhan_su_duoc_uy_quyen(sNhanSuDuocUyQuyen);
			}
			if (!sNghiDiNuocNgoai.isEmpty()) {
				TMDKN.set_nghi_di_nuoc_ngoai(sNghiDiNuocNgoai);
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
			if (!sMessage.isEmpty()) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Message.", sMessage, Common.get_message(""));
			}

			if (!sModal.isEmpty()) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Alert.", sModal, Common.get_text_alert());
			}
			if (!sModalAction.isEmpty()) {
				Common.close_modal();
			}
//			if (!sModalAction.isEmpty()) {
//				if (SessionData.isYes(sModalAction)) {
//					Common.cl();
//				} else {
//					Common.alert_dismiss();
//				}
//			}
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
			String sKinhGui = SessionData.getDataTbVal(DATA_TABLE, row, "Kính gửi");
			String sNguoiDuyet = SessionData.getDataTbVal(DATA_TABLE, row, "Người duyệt");
			String sLyDo = SessionData.getDataTbVal(DATA_TABLE, row, "Lý do");
			String sNguoiLienQuan = SessionData.getDataTbVal(DATA_TABLE, row, "Người liên quan");
			String sDiaDiemNghiPhep = SessionData.getDataTbVal(DATA_TABLE, row, "Địa điểm nghỉ phép");
			String sNhanSuDuocUyQuyen = SessionData.getDataTbVal(DATA_TABLE, row, "Nhân sự được ủy quyền");
			String sNghiDiNuocNgoai = SessionData.getDataTbVal(DATA_TABLE, row, "Nghỉ đi nước ngoài");
			String sLoaiNghi = SessionData.getDataTbVal(DATA_TABLE, row, "Loại nghỉ");
			String sTuNgay = SessionData.getDataTbVal(DATA_TABLE, row, "Từ ngày");
			String sDenNgay = SessionData.getDataTbVal(DATA_TABLE, row, "Đến ngày");
			String sSoNgayNghi = SessionData.getDataTbVal(DATA_TABLE, row, "Số ngày nghỉ");
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sAlert = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT");
			String sAlertAction = SessionData.getDataTbVal(DATA_TABLE, row, "ALERT_ACTION");

			if (!sKinhGui.isEmpty()) {
				if (sKinhGui.startsWith("@MARK")) {
					if (sKinhGui.contains("@MARK DISABLED@@") || sKinhGui.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Kính gửi", false,
								TMDKN.enabled_kinh_gui());
					} else if (sKinhGui.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Kính gửi", true,
								TMDKN.enabled_kinh_gui());
					} else if (sKinhGui.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Kính gửi", true,
								TMDKN.focus_kinh_gui());
					} else if (sKinhGui.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Kính gửi", false,
								TMDKN.focus_kinh_gui());
					} else if (sKinhGui.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Kính gửi", true,
								TMDKN.exist_kinh_gui());
					} else if (sKinhGui.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Kính gửi", false,
								TMDKN.exist_kinh_gui());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Kính gửi", sKinhGui, TMDKN.kinh_gui());
				}
			}
			if (!sNguoiDuyet.isEmpty()) {
				if (sNguoiDuyet.startsWith("@MARK")) {
					if (sNguoiDuyet.contains("@MARK DISABLED@@") || sNguoiDuyet.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Người duyệt", false,
								TMDKN.enabled_nguoi_duyet());
					} else if (sNguoiDuyet.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Người duyệt", true,
								TMDKN.enabled_nguoi_duyet());
					} else if (sNguoiDuyet.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Người duyệt", true,
								TMDKN.focus_nguoi_duyet());
					} else if (sNguoiDuyet.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Người duyệt", false,
								TMDKN.focus_nguoi_duyet());
					} else if (sNguoiDuyet.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Người duyệt", true,
								TMDKN.exist_nguoi_duyet());
					} else if (sNguoiDuyet.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Người duyệt", false,
								TMDKN.exist_nguoi_duyet());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Người duyệt", sNguoiDuyet, TMDKN.nguoi_duyet());
				}
			}
			if (!sLyDo.isEmpty()) {
				if (sLyDo.startsWith("@MARK")) {
					if (sLyDo.contains("@MARK DISABLED@@") || sLyDo.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Lý do", false,
								TMDKN.enabled_ly_do());
					} else if (sLyDo.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Lý do", true,
								TMDKN.enabled_ly_do());
					} else if (sLyDo.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Lý do", true,
								TMDKN.focus_ly_do());
					} else if (sLyDo.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Lý do", false,
								TMDKN.focus_ly_do());
					} else if (sLyDo.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Lý do", true,
								TMDKN.exist_ly_do());
					} else if (sLyDo.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Lý do", false,
								TMDKN.exist_ly_do());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Lý do", sLyDo, TMDKN.ly_do());
				}
			}
			if (!sNguoiLienQuan.isEmpty()) {
				if (sNguoiLienQuan.startsWith("@MARK")) {
					if (sNguoiLienQuan.contains("@MARK DISABLED@@") || sNguoiLienQuan.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Người liên quan", false,
								TMDKN.enabled_nguoi_lien_quan());
					} else if (sNguoiLienQuan.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Người liên quan", true,
								TMDKN.enabled_nguoi_lien_quan());
					} else if (sNguoiLienQuan.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Người liên quan", true,
								TMDKN.focus_nguoi_lien_quan());
					} else if (sNguoiLienQuan.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Người liên quan", false,
								TMDKN.focus_nguoi_lien_quan());
					} else if (sNguoiLienQuan.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Người liên quan", true,
								TMDKN.exist_nguoi_lien_quan());
					} else if (sNguoiLienQuan.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Người liên quan", false,
								TMDKN.exist_nguoi_lien_quan());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Người liên quan", sNguoiLienQuan,
							TMDKN.nguoi_lien_quan());
				}
			}
			if (!sDiaDiemNghiPhep.isEmpty()) {
				if (sDiaDiemNghiPhep.startsWith("@MARK")) {
					if (sDiaDiemNghiPhep.contains("@MARK DISABLED@@")
							|| sDiaDiemNghiPhep.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Địa điểm nghỉ phép", false,
								TMDKN.enabled_dia_diem_nghi_phep());
					} else if (sDiaDiemNghiPhep.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Địa điểm nghỉ phép", true,
								TMDKN.enabled_dia_diem_nghi_phep());
					} else if (sDiaDiemNghiPhep.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Địa điểm nghỉ phép", true,
								TMDKN.focus_dia_diem_nghi_phep());
					} else if (sDiaDiemNghiPhep.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Địa điểm nghỉ phép", false,
								TMDKN.focus_dia_diem_nghi_phep());
					} else if (sDiaDiemNghiPhep.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Địa điểm nghỉ phép", true,
								TMDKN.exist_dia_diem_nghi_phep());
					} else if (sDiaDiemNghiPhep.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Địa điểm nghỉ phép", false,
								TMDKN.exist_dia_diem_nghi_phep());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Địa điểm nghỉ phép", sDiaDiemNghiPhep,
							TMDKN.dia_diem_nghi_phep());
				}
			}
			if (!sNhanSuDuocUyQuyen.isEmpty()) {
				if (sNhanSuDuocUyQuyen.startsWith("@MARK")) {
					if (sNhanSuDuocUyQuyen.contains("@MARK DISABLED@@")
							|| sNhanSuDuocUyQuyen.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Nhân sự được ủy quyền", false,
								TMDKN.enabled_nhan_su_duoc_uy_quyen());
					} else if (sNhanSuDuocUyQuyen.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Nhân sự được ủy quyền", true,
								TMDKN.enabled_nhan_su_duoc_uy_quyen());
					} else if (sNhanSuDuocUyQuyen.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Nhân sự được ủy quyền", true,
								TMDKN.focus_nhan_su_duoc_uy_quyen());
					} else if (sNhanSuDuocUyQuyen.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Nhân sự được ủy quyền",
								false, TMDKN.focus_nhan_su_duoc_uy_quyen());
					} else if (sNhanSuDuocUyQuyen.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Nhân sự được ủy quyền", true,
								TMDKN.exist_nhan_su_duoc_uy_quyen());
					} else if (sNhanSuDuocUyQuyen.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Nhân sự được ủy quyền",
								false, TMDKN.exist_nhan_su_duoc_uy_quyen());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Nhân sự được ủy quyền", sNhanSuDuocUyQuyen,
							TMDKN.nhan_su_duoc_uy_quyen());
				}
			}
			if (!sNghiDiNuocNgoai.isEmpty()) {
				if (sNghiDiNuocNgoai.startsWith("@MARK")) {
					if (sNghiDiNuocNgoai.contains("@MARK DISABLED@@")
							|| sNghiDiNuocNgoai.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Nghỉ đi nước ngoài", false,
								TMDKN.enabled_nghi_di_nuoc_ngoai());
					} else if (sNghiDiNuocNgoai.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Nghỉ đi nước ngoài", true,
								TMDKN.enabled_nghi_di_nuoc_ngoai());
					} else if (sNghiDiNuocNgoai.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Nghỉ đi nước ngoài", true,
								TMDKN.focus_nghi_di_nuoc_ngoai());
					} else if (sNghiDiNuocNgoai.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Nghỉ đi nước ngoài", false,
								TMDKN.focus_nghi_di_nuoc_ngoai());
					} else if (sNghiDiNuocNgoai.contains("@MARK SELECT@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "SELECT/DESESLECT: Nghỉ đi nước ngoài", true,
								TMDKN.nghi_di_nuoc_ngoai());
					} else if (sNghiDiNuocNgoai.contains("@MARK DESELECT@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "SELECT/DESESLECT: Nghỉ đi nước ngoài", false,
								TMDKN.nghi_di_nuoc_ngoai());
					} else if (sNghiDiNuocNgoai.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Nghỉ đi nước ngoài", true,
								TMDKN.exist_nghi_di_nuoc_ngoai());
					} else if (sNghiDiNuocNgoai.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Nghỉ đi nước ngoài", false,
								TMDKN.exist_nghi_di_nuoc_ngoai());
					}
				} else {
					Fail.fail("Recheck input data for ChkBox :Nghỉ đi nước ngoài");
				}
			}
			if (!sLoaiNghi.isEmpty()) {
				if (sLoaiNghi.startsWith("@MARK")) {
					if (sLoaiNghi.contains("@MARK DISABLED@@") || sLoaiNghi.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Loại nghỉ", false,
								TMDKN.enabled_loai_nghi());
					} else if (sLoaiNghi.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Loại nghỉ", true,
								TMDKN.enabled_loai_nghi());
					} else if (sLoaiNghi.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Loại nghỉ", true,
								TMDKN.focus_loai_nghi());
					} else if (sLoaiNghi.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Loại nghỉ", false,
								TMDKN.focus_loai_nghi());
					} else if (sLoaiNghi.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Loại nghỉ", true,
								TMDKN.exist_loai_nghi());
					} else if (sLoaiNghi.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Loại nghỉ", false,
								TMDKN.exist_loai_nghi());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Loại nghỉ", sLoaiNghi, TMDKN.loai_nghi());
				}
			}
			if (sTuNgay.contains("Calendar>")) {
				sTuNgay = sTuNgay.replace("Calendar>", "");
				if (sTuNgay.startsWith("@MARK")) {
					if (sTuNgay.contains("@MARK DISABLED@@") || sTuNgay.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Từ ngày", false,
								TMDKN.enabled_calendar_tu_ngay());
					} else if (sTuNgay.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Từ ngày", true,
								TMDKN.enabled_calendar_tu_ngay());
					} else if (sTuNgay.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Từ ngày", true,
								TMDKN.focus_calendar_tu_ngay());
					} else if (sTuNgay.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Từ ngày", false,
								TMDKN.focus_calendar_tu_ngay());
					} else if (sTuNgay.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Từ ngày", true,
								TMDKN.exist_tu_ngay());
					} else if (sTuNgay.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Từ ngày", false,
								TMDKN.exist_tu_ngay());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Từ ngày", sTuNgay, TMDKN.calendar_tu_ngay());
				}
			} else if (!sTuNgay.isEmpty()) {
				if (sTuNgay.startsWith("@MARK")) {
					if (sTuNgay.contains("@MARK DISABLED@@") || sTuNgay.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Từ ngày", false,
								TMDKN.enabled_tu_ngay());
					} else if (sTuNgay.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Từ ngày", true,
								TMDKN.enabled_tu_ngay());
					} else if (sTuNgay.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Từ ngày", true,
								TMDKN.focus_tu_ngay());
					} else if (sTuNgay.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Từ ngày", false,
								TMDKN.focus_tu_ngay());
					} else if (sTuNgay.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Từ ngày", true,
								TMDKN.exist_tu_ngay());
					} else if (sTuNgay.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Từ ngày", false,
								TMDKN.exist_tu_ngay());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Từ ngày", sTuNgay, TMDKN.tu_ngay());
				}
			}
			if (sDenNgay.contains("Calendar>")) {
				sDenNgay = sDenNgay.replace("Calendar>", "");
				if (sDenNgay.startsWith("@MARK")) {
					if (sDenNgay.contains("@MARK DISABLED@@") || sDenNgay.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Đến ngày", false,
								TMDKN.enabled_calendar_den_ngay());
					} else if (sDenNgay.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Đến ngày", true,
								TMDKN.enabled_calendar_den_ngay());
					} else if (sDenNgay.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Đến ngày", true,
								TMDKN.focus_calendar_den_ngay());
					} else if (sDenNgay.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Đến ngày", false,
								TMDKN.focus_calendar_den_ngay());
					} else if (sDenNgay.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Đến ngày", true,
								TMDKN.exist_den_ngay());
					} else if (sDenNgay.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Đến ngày", false,
								TMDKN.exist_den_ngay());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Đến ngày", sDenNgay, TMDKN.calendar_den_ngay());
				}
			} else if (!sDenNgay.isEmpty()) {
				if (sDenNgay.startsWith("@MARK")) {
					if (sDenNgay.contains("@MARK DISABLED@@") || sDenNgay.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Đến ngày", false,
								TMDKN.enabled_den_ngay());
					} else if (sDenNgay.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Đến ngày", true,
								TMDKN.enabled_den_ngay());
					} else if (sDenNgay.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Đến ngày", true,
								TMDKN.focus_den_ngay());
					} else if (sDenNgay.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Đến ngày", false,
								TMDKN.focus_den_ngay());
					} else if (sDenNgay.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Đến ngày", true,
								TMDKN.exist_den_ngay());
					} else if (sDenNgay.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Đến ngày", false,
								TMDKN.exist_den_ngay());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Đến ngày", sDenNgay, TMDKN.den_ngay());
				}
			}
			if (!sSoNgayNghi.isEmpty()) {
				if (sSoNgayNghi.startsWith("@MARK")) {
					if (sSoNgayNghi.contains("@MARK DISABLED@@") || sSoNgayNghi.contains("@MARK READONLY@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Số ngày nghỉ", false,
								TMDKN.enabled_so_ngay_nghi());
					} else if (sSoNgayNghi.contains("@MARK ENABLED@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "ENABLED/DISABLED: Số ngày nghỉ", true,
								TMDKN.enabled_so_ngay_nghi());
					} else if (sSoNgayNghi.contains("@MARK HASFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Số ngày nghỉ", true,
								TMDKN.focus_so_ngay_nghi());
					} else if (sSoNgayNghi.contains("@MARK NOTFOCUS@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "HASFOCUS/NOTFOCUS: Số ngày nghỉ", false,
								TMDKN.focus_so_ngay_nghi());
					} else if (sSoNgayNghi.contains("@MARK VISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Số ngày nghỉ", true,
								TMDKN.exist_so_ngay_nghi());
					} else if (sSoNgayNghi.contains("@MARK INVISIBLE@@")) {
						SessionData.addSoftAssertion(DATA_TABLE, sKey, "VISIBLE/INVISIBLE: Số ngày nghỉ", false,
								TMDKN.exist_so_ngay_nghi());
					}
				} else {
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Số ngày nghỉ", sSoNgayNghi, TMDKN.so_ngay_nghi());
				}
			}
			if (!sMessage.isEmpty()) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Message.", sMessage, Common.get_message(""));
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
			String sMessage = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE");
			String sMessageAction = SessionData.getDataTbVal(DATA_TABLE, row, "MESSAGE_ACTION");
			String sModal = SessionData.getDataTbVal(DATA_TABLE, row, "MODAL");
			String sModalAction = SessionData.getDataTbVal(DATA_TABLE, row, "MODAL_ACTION");

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
			if (!sMessage.isEmpty()) {
				SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Message.", sMessage,
						Common.get_message(sMessage));
			} else {
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
					SessionData.addSoftAssertion(DATA_TABLE, sKey, "Expected Alert.", sModal, Common.get_modal());
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
		// Common.assertion_result_then_assert(DATA_TABLE,
		// SessionData.generateSoftAssertion(DATA_TABLE));
		Common.clear_assertion(DATA_TABLE);
	}

	@Then("^Kiem tra cac Control hien thi day du tren TẠO MỚI ĐĂNG KÝ NGHỈ$")
	public void Kiem_tra_cac_Control_hien_thi_day_du_tren_TAO_MOI_DANG_KY_NGHI() throws Exception {
		String DATA_TABLE = "TAO_MOI_DANG_KY_NGHI_VERIFY_CONTROL_VISIBLE";
		SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra cac Control hien thi day du tren Tạo mới Đăng ký nghỉ");
		SessionData.addSoftAssertion(DATA_TABLE, "A1_V", "VISIBLE/INVISIBLE: Kính gửi", true, TMDKN.exist_kinh_gui());
		SessionData.addSoftAssertion(DATA_TABLE, "A2_V", "VISIBLE/INVISIBLE: Người duyệt", true,
				TMDKN.exist_nguoi_duyet());
		SessionData.addSoftAssertion(DATA_TABLE, "A3_V", "VISIBLE/INVISIBLE: Lý do", true, TMDKN.exist_ly_do());
		SessionData.addSoftAssertion(DATA_TABLE, "A4_V", "VISIBLE/INVISIBLE: Người liên quan", true,
				TMDKN.exist_nguoi_lien_quan());
		SessionData.addSoftAssertion(DATA_TABLE, "A5_V", "VISIBLE/INVISIBLE: Địa điểm nghỉ phép", true,
				TMDKN.exist_dia_diem_nghi_phep());
		SessionData.addSoftAssertion(DATA_TABLE, "A6_V", "VISIBLE/INVISIBLE: Nhân sự được ủy quyền", true,
				TMDKN.exist_nhan_su_duoc_uy_quyen());
		SessionData.addSoftAssertion(DATA_TABLE, "A7_V", "VISIBLE/INVISIBLE: Nghỉ đi nước ngoài", true,
				TMDKN.exist_nghi_di_nuoc_ngoai());
		SessionData.addSoftAssertion(DATA_TABLE, "A8_V", "VISIBLE/INVISIBLE: Loại nghỉ", true, TMDKN.exist_loai_nghi());
		SessionData.addSoftAssertion(DATA_TABLE, "A9_V", "VISIBLE/INVISIBLE: Từ ngày", true, TMDKN.exist_tu_ngay());
		SessionData.addSoftAssertion(DATA_TABLE, "A10_V", "VISIBLE/INVISIBLE: Đến ngày", true, TMDKN.exist_den_ngay());
		SessionData.addSoftAssertion(DATA_TABLE, "A11_V", "VISIBLE/INVISIBLE: Số ngày nghỉ", true,
				TMDKN.exist_so_ngay_nghi());
		SessionData.addSoftAssertion(DATA_TABLE, "A12_V", "VISIBLE/INVISIBLE: Lưu", true, TMDKN.exist_luu());
		SessionData.addSoftAssertion(DATA_TABLE, "A13_V", "VISIBLE/INVISIBLE: Hủy bỏ", true, TMDKN.exist_huy_bo());
		SessionData.addSoftAssertion(DATA_TABLE, "A14_V", "VISIBLE/INVISIBLE: Gửi xác nhận", true,
				TMDKN.exist_gui_phe_duyet());
		Common.assertion_result(SessionData.generateSoftAssertion(DATA_TABLE));
		try {
			SessionData.generateExcelReport();
		} catch (Exception e) {
		}
		// Common.assertion_result_then_assert(DATA_TABLE,
		// SessionData.generateSoftAssertion(DATA_TABLE));
		Common.clear_assertion(DATA_TABLE);
	}

	@Then("^Kiem tra Tab Index cac Control tren TẠO MỚI ĐĂNG KÝ NGHỈ$")
	public void Kiem_tra_Tab_Index_cac_Control_tren_TAO_MOI_DANG_KY_NGHI() throws Exception {
		String DATA_TABLE = "TAO_MOI_DANG_KY_NGHI_VERIFY_CONTROL_TAB";
		SessionData.declareSoftAssertion(DATA_TABLE, "Kiem tra Tab Index cua Control tren Tạo mới Đăng ký nghỉ");
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
