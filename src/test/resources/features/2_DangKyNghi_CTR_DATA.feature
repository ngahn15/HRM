@DangKyNghi_CTR
Feature: Kịch bản kiểm thử chức năng Đăng ký ngày nghỉ

  Scenario Outline: Kịch bản kiểm thử chức năng Đăng ký ngày nghỉ
    Given Thiet lap du lieu nhu "<DATA KEY>"
      | KEY | Session Data KEY | Session Data Value  |
      | 001 | EMAIL            | tranngocanh@vnpt.vn |
      | 001 | PASSWORD         | Vnpt#123            |
    When Nguoi dung dang nhap vao he thong nhu "<LOGIN>"
      | KEY | Email               | Password | Hien Thi Thong Bao |
      | 001 | tranngocanh@vnpt.vn | Vnpt#123 |                    |
    When Nguoi dung vao menu nhu "<MENU>"
      | KEY | MENU                                   |
      | 001 | Quản lý ngày nghỉ>Đăng ký nghỉ>Tạo mới |
    Given Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu "<NHAP TMDKN>"
      | KEY    | Kính gửi                   | Người duyệt          | Lý do      | Địa điểm nghỉ phép | Loại nghỉ | Từ ngày           | Đến ngày          | Số ngày nghỉ |
      | TC-003 | @BLANK@                    | Trần Thị Lương Huyền |            |                    |           |                   |                   |              |
      | TC-005 | Ông/ bà trưởng phòng QLCL  | Trần Thị Lương Huyền | @BLANK@    |                    |           |                   |                   |              |
      | TC-006 |                            |                      | Nằm viện   |                    | @BLANK@   |                   |                   |              |
      | TC-007 |                            |                      |            |                    | nghỉ bù   | @BLANK@           | @DATEdd/MM/yyyy@@ |              |
      | TC-008 |                            |                      |            |                    |           | @DATEdd/MM/yyyy@@ | @BLANK@           |              |
      | TC-009 |                            |                      |            |                    |           | 01/12/2019        | 01/11/2019        |              |
      | TC-010 |                            |                      |            |                    |           | 01/12/2019        | 01/12/2019        |         -100 |
      | TC-011 | Ông/ Bà: Trưởng phòng QLCL |                      | Đi du lịch | Đà Nẵng            | phép      | 02/12/2019        | 5/12/2019         |          3,6 |
      | TC-012 |                            |                      | Đi du lịch | Đà Nẵng            | phép      | 02/12/2019        | 5/12/2019         |            4 |
      | TC-013 | Ông/ Bà: Trưởng phòng QLCL |                      | Con ốm     |                    | nghỉ bù   | 05/12/2019        | 07/12/2019        |            3 |
    When Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu "<THUC HIEN TMDKN>"
      | KEY           | Lưu | Hủy bỏ | Gửi phê duyệt | Sửa | Tạo | Soạn thảo |
      | TAO           |     |        |               |     | Y   |           |
      | SUA           |     |        |               | Y   |     |           |
      | HUY           |     | Y      |               |     |     |           |
      | GUI_PHE_DUYET |     |        | Y             |     |     |           |
      | TC-003        | Y   |        |               |     |     |           |
      | TC-005        | Y   |        |               |     |     |           |
      | TC-006        | Y   |        |               |     |     |           |
      | TC-007        | Y   |        |               |     |     |           |
      | TC-008        | Y   |        |               |     |     |           |
      | TC-009        | Y   |        |               |     |     |           |
      | TC-010        | Y   |        |               |     |     |           |
      | TC-011        | Y   |        |               |     |     |           |
      | TC-012        | Y   |        |               |     |     |           |
      | TC-013        | Y   |        |               |     |     |           |
    Then Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu "<KIEM TRA TMDKN>"
      | KEY    | MESSAGE       | MESSAGE_ACTION | MODAL                                                                               | MODAL_ACTION |
      | TC-003 | Kính gửi      |                |                                                                                     |              |
      | TC-005 | Lý do         |                |                                                                                     |              |
      | TC-006 | Loại nghỉ     |                |                                                                                     |              |
      | TC-007 | Ngày bắt đầu  |                |                                                                                     |              |
      | TC-008 | Ngày kết thúc |                |                                                                                     |              |
      | TC-009 |               |                | Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!                              | Y            |
      | TC-010 | Số ngày nghỉ  |                |                                                                                     |              |
      | TC-011 |               |                | Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!                                   | Y            |
      | TC-012 | Success       |                |                                                                                     |              |
      | TC-013 |               |                | Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)! | Y            |
    When Thuc hien MAIN PAGE nhu "<THUC HIEN MP>"
      | KEY    | User profile | Signout | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | LOGOUT | Y            | Y       |         |                |       |              |

    Examples: 
      | LOGIN | DATA KEY | MENU | NHAP TMDKN | KIEM TRA TMDKN | THUC HIEN TMDKN | THUC HIEN MP |
      |   001 |      001 |  001 |            |                |                 |              |
      |       |          |      | TC-003     | TC-003         | TC-003          |              |
      |       |          |      | TC-005     | TC-005         | TC-005          |              |
      |       |          |      | TC-006     | TC-006         | TC-006          |              |
      |       |          |      | TC-007     | TC-007         | TC-007          |              |
      |       |          |      | TC-008     | TC-008         | TC-008          |              |
      |       |          |      | TC-009     | TC-009         | TC-009          |              |
      |       |          |      | TC-010     | TC-010         | TC-010          |              |
      |       |          |      |            |                | TAO             |              |
      |       |          |      | TC-011     | TC-011         | TC-011          |              |
      |       |          |      | TC-012     | TC-012         | TC-012          |              |
      |       |          |      |            |                | GUI_PHE_DUYET   |              |
      |       |          |      |            |                | TAO             |              |
      |       |          |      | TC-013     | TC-013         | TC-013          |              |
      |       |          |      |            |                | HUY             |              |
      |       |          |      |            |                |                 | LOGOUT       |

  Scenario: Log to excel
    Then Log to excel
      | TestCase                           | TestResult                           | Sheet         |
      | TestCases/DangKyNghi_Testcase.xlsx | TestResults/DangKyNghi_Testcase.xlsx | DKNN_TESTCASE |
