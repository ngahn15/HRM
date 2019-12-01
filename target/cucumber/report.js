$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/1_kichbanlogin.feature");
formatter.feature({
  "name": "Sample of VLogin_CTR",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@VLogin_CTR"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Sample of VLogin_CTR",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"\u003cDATA KEY\u003e\"",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "TC-01",
        "EMAIL",
        "admin"
      ]
    },
    {
      "cells": [
        "TC-01",
        "PASSWORD",
        "123"
      ]
    },
    {
      "cells": [
        "TC-02",
        "EMAIL",
        ""
      ]
    },
    {
      "cells": [
        "TC-02",
        "PASSWORD",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "EMAIL",
        "usertesst"
      ]
    },
    {
      "cells": [
        "TC-03",
        "PASSWORD",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "EMAIL",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "PASSWORD",
        "1234567"
      ]
    },
    {
      "cells": [
        "TC-05",
        "EMAIL",
        "ngocnga@gmail.com"
      ]
    },
    {
      "cells": [
        "TC-05",
        "PASSWORD",
        "123456"
      ]
    }
  ]
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\u003cLOGIN\u003e\"",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Về Trang Chủ",
        "Email",
        "Password",
        "Hiển thị thông báo"
      ]
    },
    {
      "cells": [
        "TC-01",
        "",
        "admin",
        "123",
        ""
      ]
    },
    {
      "cells": [
        "TC-02",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Nhap MAIN PAGE nhu \"\u003cNHAP MP\u003e\"",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Kiem tra MAIN PAGE nhu \"\u003cKIEM TRA MP\u003e\"",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\u003cTHUC HIEN MP\u003e\"",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-02",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Nhap LOGIN nhu \"\u003cNHAP LOGIN\u003e\"",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Mật khẩu",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-02",
        "@BLANK@",
        "@BLANK@",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "@BLANK@",
        "123456",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "Testuser",
        "@BLANK@",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-05",
        "ngocnga@gmail.com",
        "123456",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Thuc hien LOGIN nhu \"\u003cTHUC HIEN LOGIN\u003e\"",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Đăng nhập",
        "Đặt lại mật khẩu",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-02",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-05",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Kiem tra LOGIN nhu \"\u003cKIEM TRA LOGIN\u003e\"",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Tên đăng nhập",
        "Mật khẩu",
        "Message error login",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-01",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-02",
        "",
        "",
        "Please fill out this field.",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "",
        "",
        "Please fill out this fiel.",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "",
        "",
        "Please fill out this field",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-05",
        "",
        "",
        "Wrong login/password",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "LOGIN",
        "DATA KEY",
        "NHAP MP",
        "KIEM TRA MP",
        "THUC HIEN MP",
        "NHAP LOGIN",
        "KIEM TRA LOGIN",
        "THUC HIEN LOGIN",
        "VERIFY DB"
      ]
    },
    {
      "cells": [
        "TC-01",
        "TC-01",
        "",
        "",
        "",
        "",
        "TC-01",
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        "TC-02",
        "",
        "",
        "TC-02",
        "TC-02",
        "TC-02",
        "TC-02",
        ""
      ]
    },
    {
      "cells": [
        "",
        "TC-03",
        "",
        "",
        "",
        "TC-03",
        "TC-03",
        "TC-03",
        ""
      ]
    },
    {
      "cells": [
        "",
        "TC-04",
        "",
        "",
        "",
        "TC-04",
        "TC-04",
        "TC-04",
        ""
      ]
    },
    {
      "cells": [
        "",
        "TC-05",
        "",
        "",
        "",
        "TC-05",
        "TC-05",
        "TC-05",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Sample of VLogin_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VLogin_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"TC-01\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "TC-01",
        "EMAIL",
        "admin"
      ]
    },
    {
      "cells": [
        "TC-01",
        "PASSWORD",
        "123"
      ]
    },
    {
      "cells": [
        "TC-02",
        "EMAIL",
        ""
      ]
    },
    {
      "cells": [
        "TC-02",
        "PASSWORD",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "EMAIL",
        "usertesst"
      ]
    },
    {
      "cells": [
        "TC-03",
        "PASSWORD",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "EMAIL",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "PASSWORD",
        "1234567"
      ]
    },
    {
      "cells": [
        "TC-05",
        "EMAIL",
        "ngocnga@gmail.com"
      ]
    },
    {
      "cells": [
        "TC-05",
        "PASSWORD",
        "123456"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"TC-01\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Về Trang Chủ",
        "Email",
        "Password",
        "Hiển thị thông báo"
      ]
    },
    {
      "cells": [
        "TC-01",
        "",
        "admin",
        "123",
        ""
      ]
    },
    {
      "cells": [
        "TC-02",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "MainPageDefs.Nhap_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MainPageDefs.Kiem_tra_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-02",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap LOGIN nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Mật khẩu",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-02",
        "@BLANK@",
        "@BLANK@",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "@BLANK@",
        "123456",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "Testuser",
        "@BLANK@",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-05",
        "ngocnga@gmail.com",
        "123456",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "LoginDefs.Nhap_LOGIN_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien LOGIN nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Đăng nhập",
        "Đặt lại mật khẩu",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-02",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-05",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginDefs.Thuc_hien_LOGIN_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra LOGIN nhu \"TC-01\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Tên đăng nhập",
        "Mật khẩu",
        "Message error login",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-01",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-02",
        "",
        "",
        "Please fill out this field.",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "",
        "",
        "Please fill out this fiel.",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "",
        "",
        "Please fill out this field",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-05",
        "",
        "",
        "Wrong login/password",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefs.Kiem_tra_LOGIN_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sample of VLogin_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VLogin_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"TC-02\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "TC-01",
        "EMAIL",
        "admin"
      ]
    },
    {
      "cells": [
        "TC-01",
        "PASSWORD",
        "123"
      ]
    },
    {
      "cells": [
        "TC-02",
        "EMAIL",
        ""
      ]
    },
    {
      "cells": [
        "TC-02",
        "PASSWORD",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "EMAIL",
        "usertesst"
      ]
    },
    {
      "cells": [
        "TC-03",
        "PASSWORD",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "EMAIL",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "PASSWORD",
        "1234567"
      ]
    },
    {
      "cells": [
        "TC-05",
        "EMAIL",
        "ngocnga@gmail.com"
      ]
    },
    {
      "cells": [
        "TC-05",
        "PASSWORD",
        "123456"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Về Trang Chủ",
        "Email",
        "Password",
        "Hiển thị thông báo"
      ]
    },
    {
      "cells": [
        "TC-01",
        "",
        "admin",
        "123",
        ""
      ]
    },
    {
      "cells": [
        "TC-02",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "MainPageDefs.Nhap_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MainPageDefs.Kiem_tra_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"TC-02\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-02",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap LOGIN nhu \"TC-02\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Mật khẩu",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-02",
        "@BLANK@",
        "@BLANK@",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "@BLANK@",
        "123456",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "Testuser",
        "@BLANK@",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-05",
        "ngocnga@gmail.com",
        "123456",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "LoginDefs.Nhap_LOGIN_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien LOGIN nhu \"TC-02\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Đăng nhập",
        "Đặt lại mật khẩu",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-02",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-05",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginDefs.Thuc_hien_LOGIN_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra LOGIN nhu \"TC-02\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Tên đăng nhập",
        "Mật khẩu",
        "Message error login",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-01",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-02",
        "",
        "",
        "Please fill out this field.",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "",
        "",
        "Please fill out this fiel.",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "",
        "",
        "Please fill out this field",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-05",
        "",
        "",
        "Wrong login/password",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefs.Kiem_tra_LOGIN_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sample of VLogin_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VLogin_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"TC-03\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "TC-01",
        "EMAIL",
        "admin"
      ]
    },
    {
      "cells": [
        "TC-01",
        "PASSWORD",
        "123"
      ]
    },
    {
      "cells": [
        "TC-02",
        "EMAIL",
        ""
      ]
    },
    {
      "cells": [
        "TC-02",
        "PASSWORD",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "EMAIL",
        "usertesst"
      ]
    },
    {
      "cells": [
        "TC-03",
        "PASSWORD",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "EMAIL",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "PASSWORD",
        "1234567"
      ]
    },
    {
      "cells": [
        "TC-05",
        "EMAIL",
        "ngocnga@gmail.com"
      ]
    },
    {
      "cells": [
        "TC-05",
        "PASSWORD",
        "123456"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Về Trang Chủ",
        "Email",
        "Password",
        "Hiển thị thông báo"
      ]
    },
    {
      "cells": [
        "TC-01",
        "",
        "admin",
        "123",
        ""
      ]
    },
    {
      "cells": [
        "TC-02",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "MainPageDefs.Nhap_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MainPageDefs.Kiem_tra_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-02",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap LOGIN nhu \"TC-03\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Mật khẩu",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-02",
        "@BLANK@",
        "@BLANK@",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "@BLANK@",
        "123456",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "Testuser",
        "@BLANK@",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-05",
        "ngocnga@gmail.com",
        "123456",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "LoginDefs.Nhap_LOGIN_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien LOGIN nhu \"TC-03\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Đăng nhập",
        "Đặt lại mật khẩu",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-02",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-05",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginDefs.Thuc_hien_LOGIN_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra LOGIN nhu \"TC-03\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Tên đăng nhập",
        "Mật khẩu",
        "Message error login",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-01",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-02",
        "",
        "",
        "Please fill out this field.",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "",
        "",
        "Please fill out this fiel.",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "",
        "",
        "Please fill out this field",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-05",
        "",
        "",
        "Wrong login/password",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefs.Kiem_tra_LOGIN_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sample of VLogin_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VLogin_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"TC-04\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "TC-01",
        "EMAIL",
        "admin"
      ]
    },
    {
      "cells": [
        "TC-01",
        "PASSWORD",
        "123"
      ]
    },
    {
      "cells": [
        "TC-02",
        "EMAIL",
        ""
      ]
    },
    {
      "cells": [
        "TC-02",
        "PASSWORD",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "EMAIL",
        "usertesst"
      ]
    },
    {
      "cells": [
        "TC-03",
        "PASSWORD",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "EMAIL",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "PASSWORD",
        "1234567"
      ]
    },
    {
      "cells": [
        "TC-05",
        "EMAIL",
        "ngocnga@gmail.com"
      ]
    },
    {
      "cells": [
        "TC-05",
        "PASSWORD",
        "123456"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Về Trang Chủ",
        "Email",
        "Password",
        "Hiển thị thông báo"
      ]
    },
    {
      "cells": [
        "TC-01",
        "",
        "admin",
        "123",
        ""
      ]
    },
    {
      "cells": [
        "TC-02",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "MainPageDefs.Nhap_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MainPageDefs.Kiem_tra_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-02",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap LOGIN nhu \"TC-04\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Mật khẩu",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-02",
        "@BLANK@",
        "@BLANK@",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "@BLANK@",
        "123456",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "Testuser",
        "@BLANK@",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-05",
        "ngocnga@gmail.com",
        "123456",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "LoginDefs.Nhap_LOGIN_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien LOGIN nhu \"TC-04\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Đăng nhập",
        "Đặt lại mật khẩu",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-02",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-05",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginDefs.Thuc_hien_LOGIN_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra LOGIN nhu \"TC-04\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Tên đăng nhập",
        "Mật khẩu",
        "Message error login",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-01",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-02",
        "",
        "",
        "Please fill out this field.",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "",
        "",
        "Please fill out this fiel.",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "",
        "",
        "Please fill out this field",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-05",
        "",
        "",
        "Wrong login/password",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefs.Kiem_tra_LOGIN_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sample of VLogin_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VLogin_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"TC-05\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "TC-01",
        "EMAIL",
        "admin"
      ]
    },
    {
      "cells": [
        "TC-01",
        "PASSWORD",
        "123"
      ]
    },
    {
      "cells": [
        "TC-02",
        "EMAIL",
        ""
      ]
    },
    {
      "cells": [
        "TC-02",
        "PASSWORD",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "EMAIL",
        "usertesst"
      ]
    },
    {
      "cells": [
        "TC-03",
        "PASSWORD",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "EMAIL",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "PASSWORD",
        "1234567"
      ]
    },
    {
      "cells": [
        "TC-05",
        "EMAIL",
        "ngocnga@gmail.com"
      ]
    },
    {
      "cells": [
        "TC-05",
        "PASSWORD",
        "123456"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Về Trang Chủ",
        "Email",
        "Password",
        "Hiển thị thông báo"
      ]
    },
    {
      "cells": [
        "TC-01",
        "",
        "admin",
        "123",
        ""
      ]
    },
    {
      "cells": [
        "TC-02",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "MainPageDefs.Nhap_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MainPageDefs.Kiem_tra_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-02",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap LOGIN nhu \"TC-05\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Mật khẩu",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-02",
        "@BLANK@",
        "@BLANK@",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "@BLANK@",
        "123456",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "Testuser",
        "@BLANK@",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-05",
        "ngocnga@gmail.com",
        "123456",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "LoginDefs.Nhap_LOGIN_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien LOGIN nhu \"TC-05\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Đăng nhập",
        "Đặt lại mật khẩu",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-02",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-05",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginDefs.Thuc_hien_LOGIN_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra LOGIN nhu \"TC-05\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Tên đăng nhập",
        "Mật khẩu",
        "Message error login",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TC-01",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-02",
        "",
        "",
        "Please fill out this field.",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-03",
        "",
        "",
        "Please fill out this fiel.",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-04",
        "",
        "",
        "Please fill out this field",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-05",
        "",
        "",
        "Wrong login/password",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefs.Kiem_tra_LOGIN_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Log to excel",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@VLogin_CTR"
    }
  ]
});
formatter.step({
  "name": "Log to excel",
  "rows": [
    {
      "cells": [
        "TestCase",
        "TestResult",
        "Sheet"
      ]
    },
    {
      "cells": [
        "TestCases/LOGIN_Testcase.xlsx",
        "TestResults/LOGIN_Testcase.xlsx",
        "LOGIN_TESTCASE"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonDefs.log_to_excel(String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/2_DangKyNghi_CTR_DATA.feature");
formatter.feature({
  "name": "Sample of DangKyNghi_CTR",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DangKyNghi_CTR"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Sample of DangKyNghi_CTR",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"\u003cDATA KEY\u003e\"",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "001",
        "EMAIL",
        "huyenttl@vnpt.vn"
      ]
    },
    {
      "cells": [
        "001",
        "PASSWORD",
        "Vnpt#123"
      ]
    }
  ]
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\u003cLOGIN\u003e\"",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Password",
        "Hien Thi Thong Bao"
      ]
    },
    {
      "cells": [
        "001",
        "huyenttl@vnpt.vn",
        "Vnpt#123",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Nguoi dung vao menu nhu \"\u003cMENU\u003e\"",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "KEY",
        "MENU"
      ]
    },
    {
      "cells": [
        "001",
        "Quản lý ngày nghỉ\u003eĐăng ký nghỉ\u003eTạo mới"
      ]
    }
  ]
});
formatter.step({
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\u003cNHAP TMDKN\u003e\"",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "003",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Ông: Nguyễn Hồng Sơn",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "",
        "",
        "Nằm viện",
        "",
        "",
        "",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "010",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/12/2019",
        "-100",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "012",
        "",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "Hà Nội",
        "",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\u003cKIEM TRA TMDKN\u003e\"",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION",
        ""
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\u003cTHUC HIEN TMDKN\u003e\"",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TAO",
        "",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "SUA",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "HUY",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "GUI_PHE_DUYET",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "003",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "010",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "012",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
      ]
    }
  ]
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\u003cTHUC HIEN MP\u003e\"",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "LOGOUT",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "LOGIN",
        "DATA KEY",
        "MENU",
        "NHAP TMDKN",
        "KIEM TRA TMDKN",
        "THUC HIEN TMDKN",
        "THUC HIEN MP"
      ]
    },
    {
      "cells": [
        "001",
        "001",
        "001",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "003",
        "",
        "003",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "004",
        "",
        "004",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "005",
        "",
        "005",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "006",
        "",
        "006",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "007",
        "",
        "007",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "008",
        "",
        "008",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "010",
        "",
        "010",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "",
        "TAO",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "011",
        "",
        "011",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "012",
        "",
        "012",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "",
        "GUI_PHE_DUYET",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "",
        "TAO",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "013",
        "",
        "013",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "013",
        "",
        "HUY",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "",
        "",
        "LOGOUT"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Sample of DangKyNghi_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DangKyNghi_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"001\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "001",
        "EMAIL",
        "huyenttl@vnpt.vn"
      ]
    },
    {
      "cells": [
        "001",
        "PASSWORD",
        "Vnpt#123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"001\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Password",
        "Hien Thi Thong Bao"
      ]
    },
    {
      "cells": [
        "001",
        "huyenttl@vnpt.vn",
        "Vnpt#123",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung vao menu nhu \"001\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MENU"
      ]
    },
    {
      "cells": [
        "001",
        "Quản lý ngày nghỉ\u003eĐăng ký nghỉ\u003eTạo mới"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_vao_menu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "003",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Ông: Nguyễn Hồng Sơn",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "",
        "",
        "Nằm viện",
        "",
        "",
        "",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "010",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/12/2019",
        "-100",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "012",
        "",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "Hà Nội",
        "",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION",
        ""
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Kiem_tra_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TAO",
        "",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "SUA",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "HUY",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "GUI_PHE_DUYET",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "003",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "010",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "012",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "LOGOUT",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sample of DangKyNghi_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DangKyNghi_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "001",
        "EMAIL",
        "huyenttl@vnpt.vn"
      ]
    },
    {
      "cells": [
        "001",
        "PASSWORD",
        "Vnpt#123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Password",
        "Hien Thi Thong Bao"
      ]
    },
    {
      "cells": [
        "001",
        "huyenttl@vnpt.vn",
        "Vnpt#123",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung vao menu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MENU"
      ]
    },
    {
      "cells": [
        "001",
        "Quản lý ngày nghỉ\u003eĐăng ký nghỉ\u003eTạo mới"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_vao_menu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"003\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "003",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Ông: Nguyễn Hồng Sơn",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "",
        "",
        "Nằm viện",
        "",
        "",
        "",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "010",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/12/2019",
        "-100",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "012",
        "",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "Hà Nội",
        "",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION",
        ""
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Kiem_tra_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"003\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TAO",
        "",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "SUA",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "HUY",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "GUI_PHE_DUYET",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "003",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "010",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "012",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "LOGOUT",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sample of DangKyNghi_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DangKyNghi_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "001",
        "EMAIL",
        "huyenttl@vnpt.vn"
      ]
    },
    {
      "cells": [
        "001",
        "PASSWORD",
        "Vnpt#123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Password",
        "Hien Thi Thong Bao"
      ]
    },
    {
      "cells": [
        "001",
        "huyenttl@vnpt.vn",
        "Vnpt#123",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung vao menu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MENU"
      ]
    },
    {
      "cells": [
        "001",
        "Quản lý ngày nghỉ\u003eĐăng ký nghỉ\u003eTạo mới"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_vao_menu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"004\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "003",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Ông: Nguyễn Hồng Sơn",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "",
        "",
        "Nằm viện",
        "",
        "",
        "",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "010",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/12/2019",
        "-100",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "012",
        "",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "Hà Nội",
        "",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION",
        ""
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Kiem_tra_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"004\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TAO",
        "",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "SUA",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "HUY",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "GUI_PHE_DUYET",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "003",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "010",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "012",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "LOGOUT",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sample of DangKyNghi_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DangKyNghi_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "001",
        "EMAIL",
        "huyenttl@vnpt.vn"
      ]
    },
    {
      "cells": [
        "001",
        "PASSWORD",
        "Vnpt#123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Password",
        "Hien Thi Thong Bao"
      ]
    },
    {
      "cells": [
        "001",
        "huyenttl@vnpt.vn",
        "Vnpt#123",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung vao menu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MENU"
      ]
    },
    {
      "cells": [
        "001",
        "Quản lý ngày nghỉ\u003eĐăng ký nghỉ\u003eTạo mới"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_vao_menu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"005\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "003",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Ông: Nguyễn Hồng Sơn",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "",
        "",
        "Nằm viện",
        "",
        "",
        "",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "010",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/12/2019",
        "-100",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "012",
        "",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "Hà Nội",
        "",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION",
        ""
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Kiem_tra_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"005\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TAO",
        "",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "SUA",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "HUY",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "GUI_PHE_DUYET",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "003",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "010",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "012",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "LOGOUT",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sample of DangKyNghi_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DangKyNghi_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "001",
        "EMAIL",
        "huyenttl@vnpt.vn"
      ]
    },
    {
      "cells": [
        "001",
        "PASSWORD",
        "Vnpt#123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Password",
        "Hien Thi Thong Bao"
      ]
    },
    {
      "cells": [
        "001",
        "huyenttl@vnpt.vn",
        "Vnpt#123",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung vao menu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MENU"
      ]
    },
    {
      "cells": [
        "001",
        "Quản lý ngày nghỉ\u003eĐăng ký nghỉ\u003eTạo mới"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_vao_menu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"006\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "003",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Ông: Nguyễn Hồng Sơn",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "",
        "",
        "Nằm viện",
        "",
        "",
        "",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "010",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/12/2019",
        "-100",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "012",
        "",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "Hà Nội",
        "",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION",
        ""
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Kiem_tra_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"006\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TAO",
        "",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "SUA",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "HUY",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "GUI_PHE_DUYET",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "003",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "010",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "012",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "LOGOUT",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sample of DangKyNghi_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DangKyNghi_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "001",
        "EMAIL",
        "huyenttl@vnpt.vn"
      ]
    },
    {
      "cells": [
        "001",
        "PASSWORD",
        "Vnpt#123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Password",
        "Hien Thi Thong Bao"
      ]
    },
    {
      "cells": [
        "001",
        "huyenttl@vnpt.vn",
        "Vnpt#123",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung vao menu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MENU"
      ]
    },
    {
      "cells": [
        "001",
        "Quản lý ngày nghỉ\u003eĐăng ký nghỉ\u003eTạo mới"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_vao_menu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"007\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "003",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Ông: Nguyễn Hồng Sơn",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "",
        "",
        "Nằm viện",
        "",
        "",
        "",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "010",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/12/2019",
        "-100",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "012",
        "",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "Hà Nội",
        "",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION",
        ""
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Kiem_tra_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"007\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TAO",
        "",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "SUA",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "HUY",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "GUI_PHE_DUYET",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "003",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "010",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "012",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "LOGOUT",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sample of DangKyNghi_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DangKyNghi_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "001",
        "EMAIL",
        "huyenttl@vnpt.vn"
      ]
    },
    {
      "cells": [
        "001",
        "PASSWORD",
        "Vnpt#123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Password",
        "Hien Thi Thong Bao"
      ]
    },
    {
      "cells": [
        "001",
        "huyenttl@vnpt.vn",
        "Vnpt#123",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung vao menu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MENU"
      ]
    },
    {
      "cells": [
        "001",
        "Quản lý ngày nghỉ\u003eĐăng ký nghỉ\u003eTạo mới"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_vao_menu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"008\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "003",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Ông: Nguyễn Hồng Sơn",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "",
        "",
        "Nằm viện",
        "",
        "",
        "",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "010",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/12/2019",
        "-100",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "012",
        "",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "Hà Nội",
        "",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION",
        ""
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Kiem_tra_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"008\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TAO",
        "",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "SUA",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "HUY",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "GUI_PHE_DUYET",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "003",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "010",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "012",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "LOGOUT",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sample of DangKyNghi_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DangKyNghi_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "001",
        "EMAIL",
        "huyenttl@vnpt.vn"
      ]
    },
    {
      "cells": [
        "001",
        "PASSWORD",
        "Vnpt#123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Password",
        "Hien Thi Thong Bao"
      ]
    },
    {
      "cells": [
        "001",
        "huyenttl@vnpt.vn",
        "Vnpt#123",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung vao menu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MENU"
      ]
    },
    {
      "cells": [
        "001",
        "Quản lý ngày nghỉ\u003eĐăng ký nghỉ\u003eTạo mới"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_vao_menu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"010\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "003",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Ông: Nguyễn Hồng Sơn",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "",
        "",
        "Nằm viện",
        "",
        "",
        "",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "010",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/12/2019",
        "-100",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "012",
        "",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "Hà Nội",
        "",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION",
        ""
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Kiem_tra_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"010\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TAO",
        "",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "SUA",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "HUY",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "GUI_PHE_DUYET",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "003",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "010",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "012",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "LOGOUT",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sample of DangKyNghi_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DangKyNghi_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "001",
        "EMAIL",
        "huyenttl@vnpt.vn"
      ]
    },
    {
      "cells": [
        "001",
        "PASSWORD",
        "Vnpt#123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Password",
        "Hien Thi Thong Bao"
      ]
    },
    {
      "cells": [
        "001",
        "huyenttl@vnpt.vn",
        "Vnpt#123",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung vao menu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MENU"
      ]
    },
    {
      "cells": [
        "001",
        "Quản lý ngày nghỉ\u003eĐăng ký nghỉ\u003eTạo mới"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_vao_menu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "003",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Ông: Nguyễn Hồng Sơn",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "",
        "",
        "Nằm viện",
        "",
        "",
        "",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "010",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/12/2019",
        "-100",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "012",
        "",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "Hà Nội",
        "",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION",
        ""
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Kiem_tra_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TAO\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TAO",
        "",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "SUA",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "HUY",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "GUI_PHE_DUYET",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "003",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "010",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "012",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "LOGOUT",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sample of DangKyNghi_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DangKyNghi_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "001",
        "EMAIL",
        "huyenttl@vnpt.vn"
      ]
    },
    {
      "cells": [
        "001",
        "PASSWORD",
        "Vnpt#123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Password",
        "Hien Thi Thong Bao"
      ]
    },
    {
      "cells": [
        "001",
        "huyenttl@vnpt.vn",
        "Vnpt#123",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung vao menu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MENU"
      ]
    },
    {
      "cells": [
        "001",
        "Quản lý ngày nghỉ\u003eĐăng ký nghỉ\u003eTạo mới"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_vao_menu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"011\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "003",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Ông: Nguyễn Hồng Sơn",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "",
        "",
        "Nằm viện",
        "",
        "",
        "",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "010",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/12/2019",
        "-100",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "012",
        "",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "Hà Nội",
        "",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION",
        ""
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Kiem_tra_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"011\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TAO",
        "",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "SUA",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "HUY",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "GUI_PHE_DUYET",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "003",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "010",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "012",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "LOGOUT",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sample of DangKyNghi_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DangKyNghi_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "001",
        "EMAIL",
        "huyenttl@vnpt.vn"
      ]
    },
    {
      "cells": [
        "001",
        "PASSWORD",
        "Vnpt#123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Password",
        "Hien Thi Thong Bao"
      ]
    },
    {
      "cells": [
        "001",
        "huyenttl@vnpt.vn",
        "Vnpt#123",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung vao menu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MENU"
      ]
    },
    {
      "cells": [
        "001",
        "Quản lý ngày nghỉ\u003eĐăng ký nghỉ\u003eTạo mới"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_vao_menu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"012\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "003",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Ông: Nguyễn Hồng Sơn",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "",
        "",
        "Nằm viện",
        "",
        "",
        "",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "010",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/12/2019",
        "-100",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "012",
        "",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "Hà Nội",
        "",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION",
        ""
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Kiem_tra_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"012\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TAO",
        "",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "SUA",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "HUY",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "GUI_PHE_DUYET",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "003",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "010",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "012",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "LOGOUT",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sample of DangKyNghi_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DangKyNghi_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "001",
        "EMAIL",
        "huyenttl@vnpt.vn"
      ]
    },
    {
      "cells": [
        "001",
        "PASSWORD",
        "Vnpt#123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Password",
        "Hien Thi Thong Bao"
      ]
    },
    {
      "cells": [
        "001",
        "huyenttl@vnpt.vn",
        "Vnpt#123",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung vao menu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MENU"
      ]
    },
    {
      "cells": [
        "001",
        "Quản lý ngày nghỉ\u003eĐăng ký nghỉ\u003eTạo mới"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_vao_menu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "003",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Ông: Nguyễn Hồng Sơn",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "",
        "",
        "Nằm viện",
        "",
        "",
        "",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "010",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/12/2019",
        "-100",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "012",
        "",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "Hà Nội",
        "",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION",
        ""
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Kiem_tra_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"GUI_PHE_DUYET\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TAO",
        "",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "SUA",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "HUY",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "GUI_PHE_DUYET",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "003",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "010",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "012",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "LOGOUT",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sample of DangKyNghi_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DangKyNghi_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "001",
        "EMAIL",
        "huyenttl@vnpt.vn"
      ]
    },
    {
      "cells": [
        "001",
        "PASSWORD",
        "Vnpt#123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Password",
        "Hien Thi Thong Bao"
      ]
    },
    {
      "cells": [
        "001",
        "huyenttl@vnpt.vn",
        "Vnpt#123",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung vao menu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MENU"
      ]
    },
    {
      "cells": [
        "001",
        "Quản lý ngày nghỉ\u003eĐăng ký nghỉ\u003eTạo mới"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_vao_menu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "003",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Ông: Nguyễn Hồng Sơn",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "",
        "",
        "Nằm viện",
        "",
        "",
        "",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "010",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/12/2019",
        "-100",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "012",
        "",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "Hà Nội",
        "",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION",
        ""
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Kiem_tra_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TAO\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TAO",
        "",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "SUA",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "HUY",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "GUI_PHE_DUYET",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "003",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "010",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "012",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "LOGOUT",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sample of DangKyNghi_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DangKyNghi_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "001",
        "EMAIL",
        "huyenttl@vnpt.vn"
      ]
    },
    {
      "cells": [
        "001",
        "PASSWORD",
        "Vnpt#123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Password",
        "Hien Thi Thong Bao"
      ]
    },
    {
      "cells": [
        "001",
        "huyenttl@vnpt.vn",
        "Vnpt#123",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung vao menu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MENU"
      ]
    },
    {
      "cells": [
        "001",
        "Quản lý ngày nghỉ\u003eĐăng ký nghỉ\u003eTạo mới"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_vao_menu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"013\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "003",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Ông: Nguyễn Hồng Sơn",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "",
        "",
        "Nằm viện",
        "",
        "",
        "",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "010",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/12/2019",
        "-100",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "012",
        "",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "Hà Nội",
        "",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION",
        ""
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Kiem_tra_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"013\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TAO",
        "",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "SUA",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "HUY",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "GUI_PHE_DUYET",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "003",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "010",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "012",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "LOGOUT",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sample of DangKyNghi_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DangKyNghi_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "001",
        "EMAIL",
        "huyenttl@vnpt.vn"
      ]
    },
    {
      "cells": [
        "001",
        "PASSWORD",
        "Vnpt#123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Password",
        "Hien Thi Thong Bao"
      ]
    },
    {
      "cells": [
        "001",
        "huyenttl@vnpt.vn",
        "Vnpt#123",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung vao menu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MENU"
      ]
    },
    {
      "cells": [
        "001",
        "Quản lý ngày nghỉ\u003eĐăng ký nghỉ\u003eTạo mới"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_vao_menu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"013\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "003",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Ông: Nguyễn Hồng Sơn",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "",
        "",
        "Nằm viện",
        "",
        "",
        "",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "010",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/12/2019",
        "-100",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "012",
        "",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "Hà Nội",
        "",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION",
        ""
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Kiem_tra_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"HUY\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TAO",
        "",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "SUA",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "HUY",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "GUI_PHE_DUYET",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "003",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "010",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "012",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "LOGOUT",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sample of DangKyNghi_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DangKyNghi_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "001",
        "EMAIL",
        "huyenttl@vnpt.vn"
      ]
    },
    {
      "cells": [
        "001",
        "PASSWORD",
        "Vnpt#123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Password",
        "Hien Thi Thong Bao"
      ]
    },
    {
      "cells": [
        "001",
        "huyenttl@vnpt.vn",
        "Vnpt#123",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung vao menu nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MENU"
      ]
    },
    {
      "cells": [
        "001",
        "Quản lý ngày nghỉ\u003eĐăng ký nghỉ\u003eTạo mới"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_vao_menu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "003",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Ông: Nguyễn Hồng Sơn",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "",
        "",
        "Nằm viện",
        "",
        "",
        "",
        "",
        "@BLANK@",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "010",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/12/2019",
        "-100",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "012",
        "",
        "",
        "Đi du lịch",
        "",
        "Đà Nẵng",
        "",
        "",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "Hà Nội",
        "",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Người liên quan",
        "Địa điểm nghỉ phép",
        "Nhân sự được ủy quyền",
        "Nghỉ đi nước ngoài",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION",
        ""
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Kiem_tra_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TAO",
        "",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "SUA",
        "",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "HUY",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "GUI_PHE_DUYET",
        "",
        "",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "003",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "004",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "005",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "006",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "007",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "008",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "010",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "011",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "012",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "013",
        "Y",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien MAIN PAGE nhu \"LOGOUT\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "User profile",
        "Signout",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "LOGOUT",
        "Y",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainPageDefs.Thuc_hien_MAIN_PAGE_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/3_DuyetDangKyNghi_CTR_DATA.feature");
formatter.feature({
  "name": "Sample of DuyetDangKyNghi_CTR",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DuyetDangKyNghi_CTR"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Sample of DuyetDangKyNghi_CTR",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"\u003cDATA KEY\u003e\"",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "LOGIN",
        "EMAIL",
        "acoount_test@vnpt.vn"
      ]
    },
    {
      "cells": [
        "LOGIN",
        "PASSWORD",
        "Vnpt#123"
      ]
    }
  ]
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"\u003cLOGIN\u003e\"",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Password",
        "Mat Khau",
        "Hien Thi Thong Bao"
      ]
    },
    {
      "cells": [
        "LOGIN",
        "account_test@vnpt.vn",
        "Vnpt#123",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Nguoi dung vao menu nhu \"\u003cMENU\u003e\"",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "KEY",
        "MENU"
      ]
    },
    {
      "cells": [
        "MENU",
        "Quản lý ngày nghỉ\u003ePhê duyệt ngày nghỉ"
      ]
    }
  ]
});
formatter.step({
  "name": "Nhap DUYỆT ĐĂNG KÝ NGHỈ nhu \"\u003cNHAP DDKN\u003e\"",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Tìm kiếm",
        "Các bộ lọc",
        "Nhóm theo",
        "Yêu thích",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TimKiem-01",
        "Trần Thị Lương Huyền, Nhân sự",
        "Chờ phê duyệt",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Nhap LƯỚI HIỂN THỊ THÔNG TIN ĐĂNG KÝ NGHỈ trong DUYỆT ĐĂNG KÝ NGHỈ nhu \"\u003cNHAP LHTTTDKN\u003e\"",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Page",
        "Page Size",
        "Row",
        "Total Record",
        "Nhân sự",
        "Đơn vị / Phong ban",
        "Ngày bắt đầu",
        "Ngày kết thúc",
        "Lý do nghỉ",
        "Số ngày nghỉ",
        "Người duyệt",
        "Trạng thái",
        "Lý do từ chối",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Kiem tra LƯỚI HIỂN THỊ THÔNG TIN ĐĂNG KÝ NGHỈ trong DUYỆT ĐĂNG KÝ NGHỈ nhu \"\u003cKIEM TRA LHTTTDKN\u003e\"",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Page",
        "Page Size",
        "Row",
        "Total Record",
        "Nhân sự",
        "Đơn vị / Phong ban",
        "Ngày bắt đầu",
        "Ngày kết thúc",
        "Lý do nghỉ",
        "Số ngày nghỉ",
        "Người duyệt",
        "Trạng thái",
        "Lý do từ chối",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TimKiem-01",
        "",
        "",
        "1",
        "1",
        "0114 - Trần Thị Lương Huyền",
        "VNPT-Vinaphone / Công ty Công nghệ thông tin VNPT-IT",
        "02/12/2019",
        "05/12/2019",
        "Đi du lịch",
        "4,0",
        "0002 - Account Test",
        "Chờ phê duyệt",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Thuc hien LƯỚI HIỂN THỊ THÔNG TIN ĐĂNG KÝ NGHỈ trong DUYỆT ĐĂNG KÝ NGHỈ nhu \"\u003cTHUC HIEN LHTTTDKN\u003e\"",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Page",
        "Page Size",
        "Row",
        "Total Record",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Kiem tra DUYỆT ĐĂNG KÝ NGHỈ nhu \"\u003cKIEM TRA DDKN\u003e\"",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Tìm kiếm",
        "Các bộ lọc",
        "Nhóm theo",
        "Yêu thích",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Thuc hien DUYỆT ĐĂNG KÝ NGHỈ nhu \"\u003cTHUC HIEN DDKN\u003e\"",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Xem chi tiết",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TimKiem-01",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Nhap XEM CHI TIẾT ĐĂNG KÝ NGHỈ nhu \"\u003cNHAP XCTDKN\u003e\"",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Kiem tra XEM CHI TIẾT ĐĂNG KÝ NGHỈ nhu \"\u003cKIEM TRA XCTDKN\u003e\"",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Nhân sự",
        "Lý do",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "Ngày tạo",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "XemChiTiet",
        "0114 - Trần Thị Lương Huyền",
        "Đi du lịch",
        "PHép",
        "02/12/2019",
        "05/12/2019",
        "4,0",
        "30/11/2019",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Thuc hien XEM CHI TIẾT ĐĂNG KÝ NGHỈ nhu \"\u003cTHUC HIEN XCTDKN\u003e\"",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Phê duyệt",
        "Từ chối",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "Pheduyet-01",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "Tuchoi-01",
        "",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Nhap PHÊ DUYỆT nhu \"\u003cNHAP PD\u003e\"",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Người phê duyệt lần 2",
        "Duyệt lần 2",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "Pheduyet-01",
        "",
        "NN",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Kiem tra PHÊ DUYỆT nhu \"\u003cKIEM TRA PD\u003e\"",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Nhân sự",
        "Người phê duyệt lần 2",
        "Duyệt lần 2",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Thuc hien PHÊ DUYỆT nhu \"\u003cTHUC HIEN PD\u003e\"",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Phê duyệt",
        "Hủy bỏ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "Pheduyet-01",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Nhap TỪ CHỐI nhu \"\u003cNHAP TC\u003e\"",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lý do từ chối",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "Tuchoi-01",
        "Có lịch công tác khác",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Kiem tra TỪ CHỐI nhu \"\u003cKIEM TRA TC\u003e\"",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "NA",
        "Nhân sự",
        "Lý do từ chối",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    }
  ]
});
formatter.step({
  "name": "Thuc hien TỪ CHỐI nhu \"\u003cTHUC HIEN TC\u003e\"",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Từ chối",
        "Hủy bỏ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "Tuchoi-01",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.step({
  "name": "Nguoi dung lay du lieu tu DB nhu \"\u003cDATA DB\u003e\"",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "SQL Statement"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "DATA KEY",
        "LOGIN",
        "MENU",
        "NHAP DDKN",
        "KIEM TRA DDKN",
        "THUC HIEN DDKN",
        "NHAP LHTTTDKN",
        "KIEM TRA LHTTTDKN",
        "THUC HIEN LHTTTDKN",
        "NHAP XCTDKN",
        "KIEM TRA XCTDKN",
        "THUC HIEN XCTDKN",
        "NHAP PD",
        "KIEM TRA PD",
        "THUC HIEN PD",
        "NHAP TC",
        "KIEM TRA TC",
        "THUC HIEN TC",
        "VERIFY DB"
      ]
    },
    {
      "cells": [
        "LOGIN",
        "LOGIN",
        "MENU",
        "TimKiem-01",
        "",
        "TimKiem-01",
        "",
        "TimKiem-01",
        "",
        "",
        "XemChiTiet",
        "Pheduyet-01",
        "Pheduyet-01",
        "",
        "Pheduyet-01",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Sample of DuyetDangKyNghi_CTR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DuyetDangKyNghi_CTR"
    }
  ]
});
formatter.step({
  "name": "Thiet lap du lieu nhu \"LOGIN\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "Session Data Value"
      ]
    },
    {
      "cells": [
        "LOGIN",
        "EMAIL",
        "acoount_test@vnpt.vn"
      ]
    },
    {
      "cells": [
        "LOGIN",
        "PASSWORD",
        "Vnpt#123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_thiet_lap_du_lieu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung dang nhap vao he thong nhu \"LOGIN\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Email",
        "Password",
        "Mat Khau",
        "Hien Thi Thong Bao"
      ]
    },
    {
      "cells": [
        "LOGIN",
        "account_test@vnpt.vn",
        "Vnpt#123",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nguoi dung vao menu nhu \"MENU\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MENU"
      ]
    },
    {
      "cells": [
        "MENU",
        "Quản lý ngày nghỉ\u003ePhê duyệt ngày nghỉ"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonDefs.nguoi_dung_vao_menu_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap DUYỆT ĐĂNG KÝ NGHỈ nhu \"TimKiem-01\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Tìm kiếm",
        "Các bộ lọc",
        "Nhóm theo",
        "Yêu thích",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TimKiem-01",
        "Trần Thị Lương Huyền, Nhân sự",
        "Chờ phê duyệt",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "DuyetDangKyNghiDefs.Nhap_DUYET_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap LƯỚI HIỂN THỊ THÔNG TIN ĐĂNG KÝ NGHỈ trong DUYỆT ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Page",
        "Page Size",
        "Row",
        "Total Record",
        "Nhân sự",
        "Đơn vị / Phong ban",
        "Ngày bắt đầu",
        "Ngày kết thúc",
        "Lý do nghỉ",
        "Số ngày nghỉ",
        "Người duyệt",
        "Trạng thái",
        "Lý do từ chối",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "DuyetDangKyNghiDefs.Nhap_LUOI_HIEN_THI_THONG_TIN_DANG_KY_NGHI_trong_DUYET_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra LƯỚI HIỂN THỊ THÔNG TIN ĐĂNG KÝ NGHỈ trong DUYỆT ĐĂNG KÝ NGHỈ nhu \"TimKiem-01\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Page",
        "Page Size",
        "Row",
        "Total Record",
        "Nhân sự",
        "Đơn vị / Phong ban",
        "Ngày bắt đầu",
        "Ngày kết thúc",
        "Lý do nghỉ",
        "Số ngày nghỉ",
        "Người duyệt",
        "Trạng thái",
        "Lý do từ chối",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TimKiem-01",
        "",
        "",
        "1",
        "1",
        "0114 - Trần Thị Lương Huyền",
        "VNPT-Vinaphone / Công ty Công nghệ thông tin VNPT-IT",
        "02/12/2019",
        "05/12/2019",
        "Đi du lịch",
        "4,0",
        "0002 - Account Test",
        "Chờ phê duyệt",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuyetDangKyNghiDefs.Kiem_tra_LUOI_HIEN_THI_THONG_TIN_DANG_KY_NGHI_trong_DUYET_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien LƯỚI HIỂN THỊ THÔNG TIN ĐĂNG KÝ NGHỈ trong DUYỆT ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Page",
        "Page Size",
        "Row",
        "Total Record",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "DuyetDangKyNghiDefs.Thuc_hien_LUOI_HIEN_THI_THONG_TIN_DANG_KY_NGHI_trong_DUYET_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra DUYỆT ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Tìm kiếm",
        "Các bộ lọc",
        "Nhóm theo",
        "Yêu thích",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuyetDangKyNghiDefs.Kiem_tra_DUYET_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien DUYỆT ĐĂNG KÝ NGHỈ nhu \"TimKiem-01\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Xem chi tiết",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "TimKiem-01",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "DuyetDangKyNghiDefs.Thuc_hien_DUYET_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap XEM CHI TIẾT ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "XemChiTietDangKyNghiDefs.Nhap_XEM_CHI_TIET_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra XEM CHI TIẾT ĐĂNG KÝ NGHỈ nhu \"XemChiTiet\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Nhân sự",
        "Lý do",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ",
        "Ngày tạo",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "XemChiTiet",
        "0114 - Trần Thị Lương Huyền",
        "Đi du lịch",
        "PHép",
        "02/12/2019",
        "05/12/2019",
        "4,0",
        "30/11/2019",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "XemChiTietDangKyNghiDefs.Kiem_tra_XEM_CHI_TIET_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien XEM CHI TIẾT ĐĂNG KÝ NGHỈ nhu \"Pheduyet-01\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Phê duyệt",
        "Từ chối",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "Pheduyet-01",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "Tuchoi-01",
        "",
        "Y",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "XemChiTietDangKyNghiDefs.Thuc_hien_XEM_CHI_TIET_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap PHÊ DUYỆT nhu \"Pheduyet-01\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Người phê duyệt lần 2",
        "Duyệt lần 2",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "Pheduyet-01",
        "",
        "NN",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "PheDuyetDefs.Nhap_PHE_DUYET_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra PHÊ DUYỆT nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Nhân sự",
        "Người phê duyệt lần 2",
        "Duyệt lần 2",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "NA",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PheDuyetDefs.Kiem_tra_PHE_DUYET_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Thuc hien PHÊ DUYỆT nhu \"Pheduyet-01\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Phê duyệt",
        "Hủy bỏ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "Pheduyet-01",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "PheDuyetDefs.Thuc_hien_PHE_DUYET_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nhap TỪ CHỐI nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lý do từ chối",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "Tuchoi-01",
        "Có lịch công tác khác",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TuChoiDefs.Nhap_TU_CHOI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kiem tra TỪ CHỐI nhu \"\"",
  "rows": [
    {
      "cells": [
        "NA",
        "Nhân sự",
        "Lý do từ chối",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TuChoiDefs.Kiem_tra_TU_CHOI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "error_message": "java.lang.IllegalArgumentException: Column [KEY] not found in Data Table [TU_CHOI_KIEM_TRA]. Re check data !\r\n\tat hrm.lib.SessionData.getDataTbRowsByValEqualInCol(SessionData.java:1584)\r\n\tat hrm.steps.defs.TuChoiDefs.Kiem_tra_TU_CHOI_nhu(TuChoiDefs.java:77)\r\n\tat ✽.Kiem tra TỪ CHỐI nhu \"\"(src/test/resources/features/3_DuyetDangKyNghi_CTR_DATA.feature:55)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Thuc hien TỪ CHỐI nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Từ chối",
        "Hủy bỏ",
        "MESSAGE",
        "MESSAGE_ACTION",
        "ALERT",
        "ALERT_ACTION"
      ]
    },
    {
      "cells": [
        "Tuchoi-01",
        "Y",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TuChoiDefs.Thuc_hien_TU_CHOI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Nguoi dung lay du lieu tu DB nhu \"\u003cDATA DB\u003e\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Session Data KEY",
        "SQL Statement"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});