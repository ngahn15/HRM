@DuyetDangKyNghi_CTR
Feature: Sample of DuyetDangKyNghi_CTR

  Scenario Outline: Sample of DuyetDangKyNghi_CTR
    Given Thiet lap du lieu nhu "<DATA KEY>"
      | KEY   | Session Data KEY | Session Data Value   |
      | LOGIN | EMAIL            | acoount_test@vnpt.vn |
      | LOGIN | PASSWORD         | Vnpt#123             |
    When Nguoi dung dang nhap vao he thong nhu "<LOGIN>"
      | KEY   | Email                | Password | Mat Khau | Hien Thi Thong Bao |
      | LOGIN | account_test@vnpt.vn | Vnpt#123 |          |                    |
    When Nguoi dung vao menu nhu "<MENU>"
      | KEY  | MENU                                  |
      | MENU | Quản lý ngày nghỉ>Phê duyệt ngày nghỉ |
    Given Nhap DUYỆT ĐĂNG KÝ NGHỈ nhu "<NHAP DDKN>"
      | KEY        | Tìm kiếm                      | Các bộ lọc    | Nhóm theo | Yêu thích | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | TimKiem-01 | Trần Thị Lương Huyền, Nhân sự | Chờ phê duyệt |           |           |         |                |       |              |
    Given Nhap LƯỚI HIỂN THỊ THÔNG TIN ĐĂNG KÝ NGHỈ trong DUYỆT ĐĂNG KÝ NGHỈ nhu "<NHAP LHTTTDKN>"
      | KEY | Page | Page Size | Row | Total Record | Nhân sự | Đơn vị / Phong ban | Ngày bắt đầu | Ngày kết thúc | Lý do nghỉ | Số ngày nghỉ | Người duyệt | Trạng thái | Lý do từ chối | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | NA  |      |           |     |              |         |                    |              |               |            |              |             |            |               |         |                |       |              |
    Then Kiem tra LƯỚI HIỂN THỊ THÔNG TIN ĐĂNG KÝ NGHỈ trong DUYỆT ĐĂNG KÝ NGHỈ nhu "<KIEM TRA LHTTTDKN>"
      | KEY        | Page | Page Size | Row | Total Record | Nhân sự                     | Đơn vị / Phong ban                                   | Ngày bắt đầu | Ngày kết thúc | Lý do nghỉ | Số ngày nghỉ | Người duyệt         | Trạng thái    | Lý do từ chối | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | TimKiem-01 |      |           |   1 |            1 | 0114 - Trần Thị Lương Huyền | VNPT-Vinaphone / Công ty Công nghệ thông tin VNPT-IT | 02/12/2019   | 05/12/2019    | Đi du lịch |          4,0 | 0002 - Account Test | Chờ phê duyệt |               |         |                |       |              |
    When Thuc hien LƯỚI HIỂN THỊ THÔNG TIN ĐĂNG KÝ NGHỈ trong DUYỆT ĐĂNG KÝ NGHỈ nhu "<THUC HIEN LHTTTDKN>"
      | KEY | Page | Page Size | Row | Total Record | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | NA  |      |           |     |              |         |                |       |              |
    Then Kiem tra DUYỆT ĐĂNG KÝ NGHỈ nhu "<KIEM TRA DDKN>"
      | KEY | Tìm kiếm | Các bộ lọc | Nhóm theo | Yêu thích | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | NA  |          |            |           |           |         |                |       |              |
    When Thuc hien DUYỆT ĐĂNG KÝ NGHỈ nhu "<THUC HIEN DDKN>"
      | KEY        | Xem chi tiết | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | TimKiem-01 | Y            |         |                |       |              |
    Given Nhap XEM CHI TIẾT ĐĂNG KÝ NGHỈ nhu "<NHAP XCTDKN>"
      | KEY | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | NA  |         |                |       |              |
    Then Kiem tra XEM CHI TIẾT ĐĂNG KÝ NGHỈ nhu "<KIEM TRA XCTDKN>"
      | KEY        | Nhân sự                     | Lý do      | Loại nghỉ | Từ ngày    | Đến ngày   | Số ngày nghỉ | Ngày tạo   | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | XemChiTiet | 0114 - Trần Thị Lương Huyền | Đi du lịch | PHép      | 02/12/2019 | 05/12/2019 |          4,0 | 30/11/2019 |         |                |       |              |
    When Thuc hien XEM CHI TIẾT ĐĂNG KÝ NGHỈ nhu "<THUC HIEN XCTDKN>"
      | KEY         | Phê duyệt | Từ chối | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | Pheduyet-01 | Y         |         |         |                |       |              |
      | Tuchoi-01   |           | Y       |         |                |       |              |
    Given Nhap PHÊ DUYỆT nhu "<NHAP PD>"
      | KEY         | Người phê duyệt lần 2 | Duyệt lần 2 | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | Pheduyet-01 |                       | NN          |         |                |       |              |
    Then Kiem tra PHÊ DUYỆT nhu "<KIEM TRA PD>"
      | KEY | Nhân sự | Người phê duyệt lần 2 | Duyệt lần 2 | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | NA  |         |                       |             |         |                |       |              |
    When Thuc hien PHÊ DUYỆT nhu "<THUC HIEN PD>"
      | KEY         | Phê duyệt | Hủy bỏ | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | Pheduyet-01 | Y         |        |         |                |       |              |
    Given Nhap TỪ CHỐI nhu "<NHAP TC>"
      | KEY       | Lý do từ chối         | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      #| Tuchoi-01 | Có lịch công tác khác |         |                |       |              |
    Then Kiem tra TỪ CHỐI nhu "<KIEM TRA TC>"
      | NA | Nhân sự | Lý do từ chối | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
    When Thuc hien TỪ CHỐI nhu "<THUC HIEN TC>"
      | KEY       | Từ chối | Hủy bỏ | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      #| Tuchoi-01 | Y       |        |         |                |       |              |
    Given Nguoi dung lay du lieu tu DB nhu "<DATA DB>"
      | KEY | Session Data KEY | SQL Statement |

    Examples: 
      | DATA KEY | LOGIN | MENU | NHAP DDKN  | KIEM TRA DDKN | THUC HIEN DDKN | NHAP LHTTTDKN | KIEM TRA LHTTTDKN | THUC HIEN LHTTTDKN | NHAP XCTDKN | KIEM TRA XCTDKN | THUC HIEN XCTDKN | NHAP PD     | KIEM TRA PD | THUC HIEN PD | NHAP TC | KIEM TRA TC | THUC HIEN TC | VERIFY DB |
      | LOGIN    | LOGIN | MENU | TimKiem-01 |               | TimKiem-01     |               | TimKiem-01        |                    |             | XemChiTiet      | Pheduyet-01      | Pheduyet-01 |             | Pheduyet-01  |         |             |              |           |
