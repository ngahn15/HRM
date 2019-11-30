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
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //div[@class\u003d\u0027o_dialog_warning modal-body\u0027] (tried for 5 second(s) with 50 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:350)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:358)\r\n\tat hrm.common.pages.CommonPage.get_modal(CommonPage.java:54)\r\n\tat hrm.common.steps.CommonSteps.get_modal(CommonSteps.java:140)\r\n\tat hrm.common.steps.CommonSteps$$EnhancerByCGLIB$$b1a38023.CGLIB$get_modal$5(\u003cgenerated\u003e)\r\n\tat hrm.common.steps.CommonSteps$$EnhancerByCGLIB$$b1a38023$$FastClassByCGLIB$$624f1563.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.common.steps.CommonSteps$$EnhancerByCGLIB$$b1a38023.get_modal(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:715)\r\n\tat ✽.Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"008\"(src/test/resources/features/2_DangKyNghi_CTR_DATA.feature:30)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027o_dialog_warning modal-body\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BJ1JOQA\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\ngocn\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58713}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: dd1942998a1340d83e5dd2e0e50eeade\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027o_dialog_warning modal-body\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.findElement(WebDriverFacade.java:222)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:350)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:358)\r\n\tat hrm.common.pages.CommonPage.get_modal(CommonPage.java:54)\r\n\tat hrm.common.steps.CommonSteps.get_modal(CommonSteps.java:140)\r\n\tat hrm.common.steps.CommonSteps$$EnhancerByCGLIB$$b1a38023.CGLIB$get_modal$5(\u003cgenerated\u003e)\r\n\tat hrm.common.steps.CommonSteps$$EnhancerByCGLIB$$b1a38023$$FastClassByCGLIB$$624f1563.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.common.steps.CommonSteps$$EnhancerByCGLIB$$b1a38023.get_modal(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:715)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //div[@name\u003d\u0027date_from\u0027]//input[@name\u003d\u0027date_from\u0027] (tried for 5 second(s) with 50 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:350)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:358)\r\n\tat hrm.lib.MyPageObject.waitClearAndTypeThenTab(MyPageObject.java:547)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.enter_tu_ngay(TaoMoiDangKyNghiPage.java:209)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.enter_tu_ngay(TaoMoiDangKyNghiSteps.java:225)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$enter_tu_ngay$3(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.enter_tu_ngay(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:83)\r\n\tat ✽.Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"010\"(src/test/resources/features/2_DangKyNghi_CTR_DATA.feature:15)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@name\u003d\u0027date_from\u0027]//input[@name\u003d\u0027date_from\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BJ1JOQA\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\ngocn\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58713}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: dd1942998a1340d83e5dd2e0e50eeade\n*** Element info: {Using\u003dxpath, value\u003d//div[@name\u003d\u0027date_from\u0027]//input[@name\u003d\u0027date_from\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.findElement(WebDriverFacade.java:222)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:350)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:358)\r\n\tat hrm.lib.MyPageObject.waitClearAndTypeThenTab(MyPageObject.java:547)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.enter_tu_ngay(TaoMoiDangKyNghiPage.java:209)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.enter_tu_ngay(TaoMoiDangKyNghiSteps.java:225)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$enter_tu_ngay$3(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.enter_tu_ngay(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
});