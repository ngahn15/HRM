@VLogin_CTR
Feature: Sample of VLogin_CTR

  Scenario Outline: Sample of VLogin_CTR
    Given Thiet lap du lieu nhu "<DATA KEY>"
      | KEY   | Session Data KEY | Session Data Value |
      | TC-01 | EMAIL            | admin              |
      | TC-01 | PASSWORD         |                123 |
      | TC-02 | EMAIL            |                    |
      | TC-02 | PASSWORD         |                    |
      | TC-03 | EMAIL            | usertesst          |
      | TC-03 | PASSWORD         |                    |
      | TC-04 | EMAIL            |                    |
      | TC-04 | PASSWORD         |            1234567 |
      | TC-05 | EMAIL            | ngocnga@gmail.com  |
      | TC-05 | PASSWORD         |             123456 |
    Given Nguoi dung dang nhap vao he thong nhu "<LOGIN>"
      | KEY   | Về Trang Chủ | Email | Password | Hiển thị thông báo |
      | TC-01 |              | admin |      123 |                    |
      | TC-02 |              |       |          |                    |
    Given Nhap MAIN PAGE nhu "<NHAP MP>"
      | KEY | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | NA  |         |                |       |              |
    Then Kiem tra MAIN PAGE nhu "<KIEM TRA MP>"
      | KEY | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | NA  |         |                |       |              |
    When Thuc hien MAIN PAGE nhu "<THUC HIEN MP>"
      | KEY   | User profile | Signout | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | TC-02 | Y            | Y       |         |                |       |              |
    Given Nhap LOGIN nhu "<NHAP LOGIN>"
      | KEY   | Email             | Mật khẩu | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      #| TC-01 | hoaps@vnpt.vn     |   123456 |         |                |       |              |
      | TC-02 | @BLANK@           | @BLANK@  |         |                |       |              |
      | TC-03 | @BLANK@           |   123456 |         |                |       |              |
      | TC-04 | Testuser          | @BLANK@  |         |                |       |              |
      | TC-05 | ngocnga@gmail.com |   123456 |         |                |       |              |
    When Thuc hien LOGIN nhu "<THUC HIEN LOGIN>"
      | KEY   | Đăng nhập | Đặt lại mật khẩu | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      #| TC-01 | Y         |                  |         |                |       |              |
      | TC-02 | Y         |                  |         |                |       |              |
      | TC-03 | Y         |                  |         |                |       |              |
      | TC-04 | Y         |                  |         |                |       |              |
      | TC-05 | Y         |                  |         |                |       |              |
    Then Kiem tra LOGIN nhu "<KIEM TRA LOGIN>"
      | KEY   | Tên đăng nhập | Mật khẩu | Message error login         | MESSAGE | MESSAGE_ACTION | ALERT | ALERT_ACTION |
      | TC-01 |               |          |                             | Success |                |       |              |
      | TC-02 |               |          | Please fill out this field. |         |                |       |              |
      | TC-03 |               |          | Please fill out this fiel.  |         |                |       |              |
      | TC-04 |               |          | Please fill out this field  |         |                |       |              |
      | TC-05 |               |          | Wrong login/password        |         |                |       |              |

    Examples: 
      | LOGIN | DATA KEY | NHAP MP | KIEM TRA MP | THUC HIEN MP | NHAP LOGIN | KIEM TRA LOGIN | THUC HIEN LOGIN | VERIFY DB |
      | TC-01 | TC-01    |         |             |              |            | TC-01          |                 |           |
      |       | TC-02    |         |             | TC-02        | TC-02      | TC-02          | TC-02           |           |
      |       | TC-03    |         |             |              | TC-03      | TC-03          | TC-03           |           |
      |       | TC-04    |         |             |              | TC-04      | TC-04          | TC-04           |           |
      |       | TC-05    |         |             |              | TC-05      | TC-05          | TC-05           |           |

  Scenario: Log to excel
    Then Log to excel
      | TestCase                      | TestResult                      | Sheet          |
      | TestCases/LOGIN_Testcase.xlsx | TestResults/LOGIN_Testcase.xlsx | LOGIN_TESTCASE |
