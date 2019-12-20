@ChamCongThang_CTR
Feature: Sample of ChamCongThang_CTR

  Scenario Outline: Sample of ChamCongThang_CTR
    Given Thiet lap du lieu nhu "<DATA KEY>"
      | KEY   | Session Data KEY | Session Data Value   |
      | LOGIN | EMAIL            | acoount_test@vnpt.vn |
      | LOGIN | PASSWORD         | Vnpt#123             |
    When Nguoi dung dang nhap vao he thong nhu "<LOGIN>"
      | KEY   | Email                | Password | Mat Khau | Hien Thi Thong Bao |
      | LOGIN | account_test@vnpt.vn | Vnpt#123 |          |                    |
    When Nguoi dung vao menu nhu "<MENU>"
      | KEY  | MENU                                       |
      | MENU | Quản lý chấm công>Bảng chấm công tháng>Tạo |
    Given Nhap TẠO MỚI BẢNG CHẤM CÔNG THÁNG nhu "<NHAP TMBCCT>"
      | KEY        | Đơn vị     | Import dữ liệu | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | Taomoi-001 | ERP - QLCL | Y              |         |                |       |              |
    Then Kiem tra TẠO MỚI BẢNG CHẤM CÔNG THÁNG nhu "<KIEM TRA TMBCCT>"
      | KEY | Đơn vị | Import dữ liệu | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | NA  |        |                |         |                |       |              |
    When Thuc hien TẠO MỚI BẢNG CHẤM CÔNG THÁNG nhu "<THUC HIEN TMBCCT>"
      | KEY        | Tải lên tệp tin của bạn                                | Tải dữ liệu chấm công | Lưu | Hủy bỏ | Xác nhận | Cập nhật ngày nghỉ | Sửa | Xóa | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | Taomoi-001 | C:\\Users\\ngocn\\Desktop\\Upload test\\chamcong.xlsx |                       |     |        |          |                    |     |     |         |                |       |              |
      | TAI        |                                                        | Y                     |     |        |          |                    |     |     |         |                |       |              |
      | LUU        |                                                        |                       | Y   |        |          |                    |     |     |         |                |       |              |
    Given Nhap XEM BẢNG CHẤM CÔNG THÁNG nhu "<NHAP XBCCT>"
      | KEY | Đơn vị | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | NA  |        |         |                |       |              |
    Then Kiem tra XEM BẢNG CHẤM CÔNG THÁNG nhu "<KIEM TRA XBCCT>"
      | KEY    | Đơn vị                                                            | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | Xem001 | VNPT-Vinaphone / Công ty Công nghệ thông tin VNPT-IT / ERP - QLCL |         |                |       |              |
    When Thuc hien XEM BẢNG CHẤM CÔNG THÁNG nhu "<THUC HIEN XBCCT>"
      | KEY     | Cập nhật ngày nghỉ | Xác nhận | Sửa | Tạo | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | Capnhat | Y                  |          |     |     |         |                |       |              |
      | Xacnhan |                    | Y        |     |     |         |                |       |              |
    Given Nhap BẢNG CHẤM CÔNG THÁNG trong XEM BẢNG CHẤM CÔNG THÁNG nhu "<NHAP BCCT>"
      | KEY | Page | Page Size | Row | Total Record | Nhân sự | Công chuẩn | Ngày công | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | NA  |      |           |     |              |         |            |           |         |                |       |              |
    Then Kiem tra BẢNG CHẤM CÔNG THÁNG trong XEM BẢNG CHẤM CÔNG THÁNG nhu "<KIEM TRA BCCT>"
      | KEY           | Page | Page Size | Row | Total Record | Nhân sự | Công chuẩn | Ngày công | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | XemBangCC-001 |      |           |   5 |            5 |         |            |           |         |                |       |              |
    When Thuc hien BẢNG CHẤM CÔNG THÁNG trong XEM BẢNG CHẤM CÔNG THÁNG nhu "<THUC HIEN BCCT>"
      | KEY | Page | Page Size | Row | Total Record | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | NA  |      |           |     |              |         |                |       |              |
    Given Nguoi dung lay du lieu tu DB nhu "<DATA DB>"
      | KEY | Session Data KEY | SQL Statement |

    Examples: 
      | DATA KEY | LOGIN | MENU | NHAP TMBCCT | KIEM TRA TMBCCT | THUC HIEN TMBCCT | NHAP XBCCT | KIEM TRA XBCCT | THUC HIEN XBCCT | NHAP BCCT | KIEM TRA BCCT | THUC HIEN BCCT | VERIFY DB |
      | LOGIN    | LOGIN | MENU | Taomoi-001  |                 | Taomoi-001       |            |                |                 |           |               |                |           |
      |          |       |      |             |                 | TAI              |            |                |                 |           |               |                |           |
      |          |       |      |             |                 | LUU              |            |                |                 |           |               |                |           |
      |          |       |      |             |                 |                  |            | Xem001         |                 |           |               |                |           |
      |          |       |      |             |                 |                  |            |                | Capnhat         |           |               |                |           |
      |          |       |      |             |                 |                  |            |                | Xacnhan         |           |               |                |           |
      |          |       |      |             |                 |                  |            |                |                 |           | XemBangCC-001 |                |           |
