@DuyetDangKyNghi_CTR
Feature: Sample of DuyetDangKyNghi_CTR

  Scenario Outline: Sample of DuyetDangKyNghi_CTR
    Given Thiet lap du lieu nhu "<DATA KEY>"
      | KEY   | Session Data KEY | Session Data Value |
      | LOGIN | EMAIL            | huyenttl@vnpt.vn   |
      | LOGIN | PASSWORD         | Vnpt#123456        |
    When Nguoi dung dang nhap vao he thong nhu "<LOGIN>"
      | KEY   | Email            | Password    | Mat Khau | Hien Thi Thong Bao |
      | LOGIN | huyenttl@vnpt.vn | Vnpt#123456 |          |                    |
    When Nguoi dung vao menu nhu "<MENU>"
      | KEY  | MENU                                  |
      | MENU | Quản lý ngày nghỉ>Phê duyệt ngày nghỉ |
    Given Tim kiem ban ghi can phe duyet nhu "<TIMKIEM>"
      | KEY        | Tìm kiếm      | Các bộ lọc    | Nhóm theo |
      | TimKiem-01 | Hưng, Nhân sự | Chờ phê duyệt |           |
    When Kiem tra LƯỚI HIỂN THỊ THÔNG TIN ĐĂNG KÝ NGHỈ trong DUYỆT ĐĂNG KÝ NGHỈ nhu "<KIEM TRA LHTTTDKN>"
      | KEY        | Page | Page Size | Row | Total Record | Nhân sự                 | Đơn vị / Phong ban                                   | Ngày bắt đầu | Ngày kết thúc | Lý do nghỉ | Số ngày nghỉ | Người duyệt                 | Trạng thái    | Lý do từ chối |
      | TimKiem-01 |      |           |   1 |            1 | 0022 - Vũ Đỗ Hoàng Hưng | VNPT-Vinaphone / Công ty Công nghệ thông tin VNPT-IT | 02/12/2019   | 04/12/2019    | Đi du lịch |          2,0 | 0114 - Trần Thị Lương Huyền | Chờ phê duyệt |               |
    Then Ket qua kiem tra LƯỚI HIỂN THỊ THÔNG TIN ĐĂNG KÝ NGHỈ trong DUYỆT ĐĂNG KÝ NGHỈ nhu "<THUC HIEN LHTTTDKN>"
      | KEY        | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | TimKiem-01 | Success |                |       |              |
    When Xem chi tiet ĐĂNG KÝ NGHỈ nhu "<XEM CHI TIET DKN>"
      | KEY        | Xem chi tiết | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | TimKiem-01 | Y            |         |                |       |              |
    And Kiem tra XEM CHI TIẾT ĐĂNG KÝ NGHỈ nhu "<KIEM TRA XCTDKN>"
      | KEY        | Nhân sự                 | Lý do      | Loại nghỉ | Từ ngày    | Đến ngày   | Số ngày nghỉ | Ngày tạo   |
      | XemChiTiet | 0022 - Vũ Đỗ Hoàng Hưng | Đi du lịch | PHép      | 02/12/2019 | 05/12/2019 |          4,0 | 30/11/2019 |
    Then Ket qua kiem tra thong tin ĐĂNG KÝ NGHỈ nhu "<KET QUA THONG TIN DKN>"
      | KEY        | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | XemChiTiet | Success |                |       |              |
    When Thuc hien XEM CHI TIẾT ĐĂNG KÝ NGHỈ nhu "<THUC HIEN XCTDKN>"
      | KEY         | Phê duyệt | Từ chối | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | Pheduyet-01 | Y         |         |         |                |       |              |
      | Tuchoi-01   |           | Y       |         |                |       |              |
    And Nhap PHÊ DUYỆT nhu "<NHAP PD>"
      | KEY         | Người phê duyệt lần 2 | Duyệt lần 2 | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | Pheduyet-01 |                       | NN          |         |                |       |              |
    And Thuc hien PHÊ DUYỆT nhu "<THUC HIEN PD>"
      | KEY         | Phê duyệt | Hủy bỏ | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | Pheduyet-01 | Y         |        |         |                |       |              |
    Then Kiem tra trang thai PHÊ DUYỆT nhu "<KIEM TRA PD>"
      | KEY         | Status       | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | Pheduyet-01 | Đã phê duyệt |         |                |       |              |

    #Given Nhap TỪ CHỐI nhu "<NHAP TC>"
    #| KEY | Lý do từ chối | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
    #| Tuchoi-01 | Có lịch công tác khác |         |                |       |              |
    #Then Kiem tra TỪ CHỐI nhu "<KIEM TRA TC>"
    #| NA | Nhân sự | Lý do từ chối | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
    #When Thuc hien TỪ CHỐI nhu "<THUC HIEN TC>"
    #| KEY | Từ chối | Hủy bỏ | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
    #| Tuchoi-01 | Y       |        |         |                |       |              |
    #Given Nguoi dung lay du lieu tu DB nhu "<DATA DB>"
    #| KEY | Session Data KEY | SQL Statement |
    Examples: 
      | DATA KEY | LOGIN | MENU | TIMKIEM    | KIEM TRA DDKN | XEM CHI TIET DKN | NHAP LHTTTDKN | KIEM TRA LHTTTDKN | THUC HIEN LHTTTDKN | NHAP XCTDKN | KIEM TRA XCTDKN | KET QUA THONG TIN DKN | THUC HIEN XCTDKN | NHAP PD     | KIEM TRA PD | THUC HIEN PD | NHAP TC | KIEM TRA TC | THUC HIEN TC | VERIFY DB |
      | LOGIN    | LOGIN | MENU | TimKiem-01 |               | TimKiem-01       |               | TimKiem-01        |                    |             | XemChiTiet      | XemChiTiet            | Pheduyet-01      | Pheduyet-01 | Pheduyet-01 | Pheduyet-01  |         |             |              |           |
