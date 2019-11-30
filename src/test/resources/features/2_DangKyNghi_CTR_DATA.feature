@DangKyNghi_CTR
Feature: Sample of DangKyNghi_CTR

  Scenario Outline: Sample of DangKyNghi_CTR
    Given Thiet lap du lieu nhu "<DATA KEY>"
      | KEY | Session Data KEY | Session Data Value |
      | 001 | EMAIL            | huyenttl@vnpt.vn   |
      | 001 | PASSWORD         | Vnpt#123           |
    When Nguoi dung dang nhap vao he thong nhu "<LOGIN>"
      | KEY | Email            | Password | Hien Thi Thong Bao |
      | 001 | huyenttl@vnpt.vn | Vnpt#123 |                    |
    When Nguoi dung vao menu nhu "<MENU>"
      | KEY | MENU                                   |
      | 001 | Quản lý ngày nghỉ>Đăng ký nghỉ>Tạo mới |
    Given Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu "<NHAP TMDKN>"
      | KEY | Kính gửi                   | Người duyệt | Lý do      | Người liên quan | Địa điểm nghỉ phép | Nhân sự được ủy quyền | Nghỉ đi nước ngoài | Loại nghỉ | Từ ngày           | Đến ngày          | Số ngày nghỉ | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | 003 | @BLANK@                    |             |            |                 |                    |                       |                    |           |                   |                   |              |         |                |       |              |
      | 004 | Ông: Nguyễn Hồng Sơn       |             | @BLANK@    |                 |                    |                       |                    |           |                   |                   |              |         |                |       |              |
      | 005 |                            |             | Nằm viện   |                 |                    |                       |                    | @BLANK@   |                   |                   |              |         |                |       |              |
      | 006 |                            |             |            |                 |                    |                       |                    | nghỉ bù   | @BLANK@           | @DATEdd/MM/yyyy@@ |              |         |                |       |              |
      | 007 |                            |             |            |                 |                    |                       |                    |           | @DATEdd/MM/yyyy@@ | @BLANK@           |              |         |                |       |              |
      | 008 |                            |             |            |                 |                    |                       |                    |           | 01/12/2019        | 01/11/2019        |              |         |                |       |              |
      | 010 |                            |             |            |                 |                    |                       |                    |           | 01/12/2019        | 01/12/2019        |         -100 |         |                |       |              |
      | 011 | Ông/ Bà: Trưởng phòng QLCL |             | Đi du lịch |                 | Đà Nẵng            |                       |                    | phép      | 02/12/2019        | 5/12/2019         |          3,6 |         |                |       |              |
      | 012 |                            |             | Đi du lịch |                 | Đà Nẵng            |                       |                    | phép      | 02/12/2019        | 5/12/2019         |            4 |         |                |       |              |
      | 013 | Ông/ Bà: Trưởng phòng QLCL |             | Con ốm     |                 | Hà Nội             |                       |                    | nghỉ bù   | 05/12/2019        | 07/12/2019        |            3 |         |                |       |              |
    Then Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu "<KIEM TRA TMDKN>"
      | KEY | Kính gửi | Người duyệt | Lý do | Người liên quan | Địa điểm nghỉ phép | Nhân sự được ủy quyền | Nghỉ đi nước ngoài | Loại nghỉ | Từ ngày | Đến ngày | Số ngày nghỉ | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |  |
      | NA  |          |             |       |                 |                    |                       |                    |           |         |          |              |         |                |       |              |  |
    When Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu "<THUC HIEN TMDKN>"
      | KEY           | Lưu | Hủy bỏ | Gửi phê duyệt | Sửa | Tạo | Soạn thảo | MESSAGE       | MESSAGE_ACTION | MODAL                                                                               | MODAL_ACTION |
      | TAO           |     |        |               |     | Y   |           |               |                |                                                                                     |              |
      | SUA           |     |        |               | Y   |     |           |               |                |                                                                                     |              |
      | HUY           |     | Y      |               |     |     |           |               |                |                                                                                     |              |
      | GUI_PHE_DUYET |     |        | Y             |     |     |           |               |                |                                                                                     |              |
      |           003 | Y   |        |               |     |     |           | Kính gửi      |                |                                                                                     |              |
      |           004 | Y   |        |               |     |     |           | Lý do         |                |                                                                                     |              |
      |           005 | Y   |        |               |     |     |           | Loại nghỉ     |                |                                                                                     |              |
      |           006 | Y   |        |               |     |     |           | Ngày bắt đầu  |                |                                                                                     |              |
      |           007 | Y   |        |               |     |     |           | Ngày kết thúc |                |                                                                                     |              |
      |           008 | Y   |        |               |     |     |           |               |                | Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!                              | Y            |
      |           010 | Y   |        |               |     |     |           | Số ngày nghỉ  |                |                                                                                     |              |
      |           011 | Y   |        |               |     |     |           |               |                | Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!                                   | Y            |
      |           012 | Y   |        |               |     |     |           | Success       |                |                                                                                     |              |
      |           013 | Y   |        |               |     |     |           |               |                | Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)! | Y            |
    When Thuc hien MAIN PAGE nhu "<THUC HIEN MP>"
      | KEY    | User profile | Signout | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | LOGOUT | Y            | Y       |         |                |       |              |

    Examples: 
      | LOGIN | DATA KEY | MENU | NHAP TMDKN | KIEM TRA TMDKN | THUC HIEN TMDKN | THUC HIEN MP |
      |   001 |      001 |  001 |            |                |                 |              |
      |       |          |      |        003 |                |             003 |              |
      |       |          |      |        004 |                |             004 |              |
      |       |          |      |        005 |                |             005 |              |
      |       |          |      |        006 |                |             006 |              |
      |       |          |      |        007 |                |             007 |              |
      |       |          |      |        008 |                |             008 |              |
      |       |          |      |        010 |                |             010 |              |
      |       |          |      |            |                | TAO             |              |
      |       |          |      |        011 |                |             011 |              |
      |       |          |      |        012 |                |             012 |              |
      |       |          |      |            |                | GUI_PHE_DUYET   |              |
      |       |          |      |            |                | TAO             |              |
      |       |          |      |        013 |                |             013 |              |
      |       |          |      |        013 |                | HUY             |              |
      |       |          |      |            |                |                 | LOGOUT       |
