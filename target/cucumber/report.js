$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/2_DangKyNghi_CTR_DATA.feature");
formatter.feature({
  "name": "Kịch bản kiểm thử chức năng Đăng ký ngày nghỉ",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DangKyNghi_CTR"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Kịch bản kiểm thử chức năng Đăng ký ngày nghỉ",
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
        "tranngocanh@vnpt.vn"
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
        "tranngocanh@vnpt.vn",
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
        "Địa điểm nghỉ phép",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ"
      ]
    },
    {
      "cells": [
        "TC-003",
        "@BLANK@",
        "Trần Thị Lương Huyền",
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
        "TC-005",
        "Ông/ bà trưởng phòng QLCL",
        "Trần Thị Lương Huyền",
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
        "TC-006",
        "",
        "",
        "Nằm viện",
        "",
        "@BLANK@",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6"
      ]
    },
    {
      "cells": [
        "TC-012",
        "",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4"
      ]
    },
    {
      "cells": [
        "TC-013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3"
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
        "Soạn thảo"
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
        ""
      ]
    },
    {
      "cells": [
        "TC-003",
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
        "TC-005",
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
        "TC-006",
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
        "TC-007",
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
        "TC-008",
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
        "TC-009",
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
        "TC-010",
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
        "TC-011",
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
        "TC-012",
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
        "TC-013",
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
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\u003cKIEM TRA TMDKN\u003e\"",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TC-003",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-005",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-006",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-010",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-012",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-013",
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
        "TC-003",
        "TC-003",
        "TC-003",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "TC-005",
        "TC-005",
        "TC-005",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "TC-006",
        "TC-006",
        "TC-006",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "TC-007",
        "TC-007",
        "TC-007",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "TC-008",
        "TC-008",
        "TC-008",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "TC-009",
        "TC-009",
        "TC-009",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "TC-011",
        "TC-011",
        "TC-011",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "TC-012",
        "TC-012",
        "TC-012",
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
        "TC-013",
        "TC-013",
        "TC-013",
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
        "HUY",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Kịch bản kiểm thử chức năng Đăng ký ngày nghỉ",
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
        "tranngocanh@vnpt.vn"
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
        "tranngocanh@vnpt.vn",
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
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //input[@id\u003d\u0027login\u0027] (tried for 5 second(s) with 50 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.waitClearAndType(MyPageObject.java:557)\r\n\tat hrm.pages.LoginPage.enter_email(LoginPage.java:18)\r\n\tat hrm.steps.serenity.LoginSteps.enter_email(LoginSteps.java:25)\r\n\tat hrm.steps.serenity.LoginSteps$$EnhancerByCGLIB$$41aded6b.CGLIB$enter_email$11(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.LoginSteps$$EnhancerByCGLIB$$41aded6b$$FastClassByCGLIB$$2dfddebc.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.LoginSteps$$EnhancerByCGLIB$$41aded6b.enter_email(\u003cgenerated\u003e)\r\n\tat hrm.common.step.defs.CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(CommonDefs.java:95)\r\n\tat ✽.Nguoi dung dang nhap vao he thong nhu \"001\"(src/test/resources/features/2_DangKyNghi_CTR_DATA.feature:9)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027login\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BJ1JOQA\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\ngocn\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61663}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4c08000c44b925ec0f40fc054a9e03b5\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027login\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.findElement(WebDriverFacade.java:222)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.waitClearAndType(MyPageObject.java:557)\r\n\tat hrm.pages.LoginPage.enter_email(LoginPage.java:18)\r\n\tat hrm.steps.serenity.LoginSteps.enter_email(LoginSteps.java:25)\r\n\tat hrm.steps.serenity.LoginSteps$$EnhancerByCGLIB$$41aded6b.CGLIB$enter_email$11(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.LoginSteps$$EnhancerByCGLIB$$41aded6b$$FastClassByCGLIB$$2dfddebc.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.LoginSteps$$EnhancerByCGLIB$$41aded6b.enter_email(\u003cgenerated\u003e)\r\n\tat hrm.common.step.defs.CommonDefs.nguoi_dung_dang_nhap_vao_he_thong_nhu(CommonDefs.java:95)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
        "Địa điểm nghỉ phép",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ"
      ]
    },
    {
      "cells": [
        "TC-003",
        "@BLANK@",
        "Trần Thị Lương Huyền",
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
        "TC-005",
        "Ông/ bà trưởng phòng QLCL",
        "Trần Thị Lương Huyền",
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
        "TC-006",
        "",
        "",
        "Nằm viện",
        "",
        "@BLANK@",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6"
      ]
    },
    {
      "cells": [
        "TC-012",
        "",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4"
      ]
    },
    {
      "cells": [
        "TC-013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
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
        "Soạn thảo"
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
        ""
      ]
    },
    {
      "cells": [
        "TC-003",
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
        "TC-005",
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
        "TC-006",
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
        "TC-007",
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
        "TC-008",
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
        "TC-009",
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
        "TC-010",
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
        "TC-011",
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
        "TC-012",
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
        "TC-013",
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
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TC-003",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-005",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-006",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-010",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-012",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-013",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
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
  "name": "Kịch bản kiểm thử chức năng Đăng ký ngày nghỉ",
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
        "tranngocanh@vnpt.vn"
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
        "tranngocanh@vnpt.vn",
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
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-003\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Địa điểm nghỉ phép",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ"
      ]
    },
    {
      "cells": [
        "TC-003",
        "@BLANK@",
        "Trần Thị Lương Huyền",
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
        "TC-005",
        "Ông/ bà trưởng phòng QLCL",
        "Trần Thị Lương Huyền",
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
        "TC-006",
        "",
        "",
        "Nằm viện",
        "",
        "@BLANK@",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6"
      ]
    },
    {
      "cells": [
        "TC-012",
        "",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4"
      ]
    },
    {
      "cells": [
        "TC-013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //input[@name\u003d\u0027kinh_gui\u0027] (tried for 5 second(s) with 50 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.waitClearAndType(MyPageObject.java:557)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.enter_kinh_gui(TaoMoiDangKyNghiPage.java:39)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.enter_kinh_gui(TaoMoiDangKyNghiSteps.java:17)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$enter_kinh_gui$63(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.enter_kinh_gui(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:53)\r\n\tat ✽.Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-003\"(src/test/resources/features/2_DangKyNghi_CTR_DATA.feature:15)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027kinh_gui\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BJ1JOQA\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\ngocn\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61663}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4c08000c44b925ec0f40fc054a9e03b5\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027kinh_gui\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.findElement(WebDriverFacade.java:222)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.waitClearAndType(MyPageObject.java:557)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.enter_kinh_gui(TaoMoiDangKyNghiPage.java:39)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.enter_kinh_gui(TaoMoiDangKyNghiSteps.java:17)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$enter_kinh_gui$63(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.enter_kinh_gui(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:53)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-003\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo"
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
        ""
      ]
    },
    {
      "cells": [
        "TC-003",
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
        "TC-005",
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
        "TC-006",
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
        "TC-007",
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
        "TC-008",
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
        "TC-009",
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
        "TC-010",
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
        "TC-011",
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
        "TC-012",
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
        "TC-013",
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
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-003\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TC-003",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-005",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-006",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-010",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-012",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-013",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
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
  "name": "Kịch bản kiểm thử chức năng Đăng ký ngày nghỉ",
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
        "tranngocanh@vnpt.vn"
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
        "tranngocanh@vnpt.vn",
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
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-005\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Địa điểm nghỉ phép",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ"
      ]
    },
    {
      "cells": [
        "TC-003",
        "@BLANK@",
        "Trần Thị Lương Huyền",
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
        "TC-005",
        "Ông/ bà trưởng phòng QLCL",
        "Trần Thị Lương Huyền",
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
        "TC-006",
        "",
        "",
        "Nằm viện",
        "",
        "@BLANK@",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6"
      ]
    },
    {
      "cells": [
        "TC-012",
        "",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4"
      ]
    },
    {
      "cells": [
        "TC-013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //input[@name\u003d\u0027kinh_gui\u0027] (tried for 5 second(s) with 50 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.waitClearAndType(MyPageObject.java:557)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.enter_kinh_gui(TaoMoiDangKyNghiPage.java:39)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.enter_kinh_gui(TaoMoiDangKyNghiSteps.java:17)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$enter_kinh_gui$63(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.enter_kinh_gui(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:53)\r\n\tat ✽.Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-005\"(src/test/resources/features/2_DangKyNghi_CTR_DATA.feature:15)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027kinh_gui\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BJ1JOQA\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\ngocn\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61663}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4c08000c44b925ec0f40fc054a9e03b5\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027kinh_gui\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.findElement(WebDriverFacade.java:222)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.waitClearAndType(MyPageObject.java:557)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.enter_kinh_gui(TaoMoiDangKyNghiPage.java:39)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.enter_kinh_gui(TaoMoiDangKyNghiSteps.java:17)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$enter_kinh_gui$63(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.enter_kinh_gui(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:53)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-005\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo"
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
        ""
      ]
    },
    {
      "cells": [
        "TC-003",
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
        "TC-005",
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
        "TC-006",
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
        "TC-007",
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
        "TC-008",
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
        "TC-009",
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
        "TC-010",
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
        "TC-011",
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
        "TC-012",
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
        "TC-013",
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
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-005\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TC-003",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-005",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-006",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-010",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-012",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-013",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
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
  "name": "Kịch bản kiểm thử chức năng Đăng ký ngày nghỉ",
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
        "tranngocanh@vnpt.vn"
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
        "tranngocanh@vnpt.vn",
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
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-006\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Địa điểm nghỉ phép",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ"
      ]
    },
    {
      "cells": [
        "TC-003",
        "@BLANK@",
        "Trần Thị Lương Huyền",
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
        "TC-005",
        "Ông/ bà trưởng phòng QLCL",
        "Trần Thị Lương Huyền",
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
        "TC-006",
        "",
        "",
        "Nằm viện",
        "",
        "@BLANK@",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6"
      ]
    },
    {
      "cells": [
        "TC-012",
        "",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4"
      ]
    },
    {
      "cells": [
        "TC-013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //textarea[@name\u003d\u0027lydo\u0027] (tried for 5 second(s) with 50 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.waitClearAndType(MyPageObject.java:557)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.enter_ly_do(TaoMoiDangKyNghiPage.java:81)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.enter_ly_do(TaoMoiDangKyNghiSteps.java:69)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$enter_ly_do$62(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.enter_ly_do(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:59)\r\n\tat ✽.Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-006\"(src/test/resources/features/2_DangKyNghi_CTR_DATA.feature:15)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//textarea[@name\u003d\u0027lydo\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BJ1JOQA\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\ngocn\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61663}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4c08000c44b925ec0f40fc054a9e03b5\n*** Element info: {Using\u003dxpath, value\u003d//textarea[@name\u003d\u0027lydo\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor45.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.findElement(WebDriverFacade.java:222)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.waitClearAndType(MyPageObject.java:557)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.enter_ly_do(TaoMoiDangKyNghiPage.java:81)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.enter_ly_do(TaoMoiDangKyNghiSteps.java:69)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$enter_ly_do$62(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.enter_ly_do(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:59)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-006\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo"
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
        ""
      ]
    },
    {
      "cells": [
        "TC-003",
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
        "TC-005",
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
        "TC-006",
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
        "TC-007",
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
        "TC-008",
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
        "TC-009",
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
        "TC-010",
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
        "TC-011",
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
        "TC-012",
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
        "TC-013",
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
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-006\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TC-003",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-005",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-006",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-010",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-012",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-013",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
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
  "name": "Kịch bản kiểm thử chức năng Đăng ký ngày nghỉ",
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
        "tranngocanh@vnpt.vn"
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
        "tranngocanh@vnpt.vn",
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
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-007\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Địa điểm nghỉ phép",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ"
      ]
    },
    {
      "cells": [
        "TC-003",
        "@BLANK@",
        "Trần Thị Lương Huyền",
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
        "TC-005",
        "Ông/ bà trưởng phòng QLCL",
        "Trần Thị Lương Huyền",
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
        "TC-006",
        "",
        "",
        "Nằm viện",
        "",
        "@BLANK@",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6"
      ]
    },
    {
      "cells": [
        "TC-012",
        "",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4"
      ]
    },
    {
      "cells": [
        "TC-013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //div[@name\u003d\u0027holiday_status_id\u0027]//div[@class\u003d\u0027o_input_dropdown\u0027]//input (tried for 5 second(s) with 50 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.selectSearchDDL(MyPageObject.java:2694)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.select_loai_nghi(TaoMoiDangKyNghiPage.java:188)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.select_loai_nghi(TaoMoiDangKyNghiSteps.java:199)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$select_loai_nghi$65(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.select_loai_nghi(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:74)\r\n\tat ✽.Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-007\"(src/test/resources/features/2_DangKyNghi_CTR_DATA.feature:15)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@name\u003d\u0027holiday_status_id\u0027]//div[@class\u003d\u0027o_input_dropdown\u0027]//input\"}\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BJ1JOQA\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\ngocn\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61663}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4c08000c44b925ec0f40fc054a9e03b5\n*** Element info: {Using\u003dxpath, value\u003d//div[@name\u003d\u0027holiday_status_id\u0027]//div[@class\u003d\u0027o_input_dropdown\u0027]//input}\r\n\tat sun.reflect.GeneratedConstructorAccessor45.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.findElement(WebDriverFacade.java:222)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.selectSearchDDL(MyPageObject.java:2694)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.select_loai_nghi(TaoMoiDangKyNghiPage.java:188)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.select_loai_nghi(TaoMoiDangKyNghiSteps.java:199)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$select_loai_nghi$65(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.select_loai_nghi(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:74)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-007\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo"
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
        ""
      ]
    },
    {
      "cells": [
        "TC-003",
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
        "TC-005",
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
        "TC-006",
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
        "TC-007",
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
        "TC-008",
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
        "TC-009",
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
        "TC-010",
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
        "TC-011",
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
        "TC-012",
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
        "TC-013",
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
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-007\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TC-003",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-005",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-006",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-010",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-012",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-013",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
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
  "name": "Kịch bản kiểm thử chức năng Đăng ký ngày nghỉ",
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
        "tranngocanh@vnpt.vn"
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
        "tranngocanh@vnpt.vn",
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
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-008\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Địa điểm nghỉ phép",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ"
      ]
    },
    {
      "cells": [
        "TC-003",
        "@BLANK@",
        "Trần Thị Lương Huyền",
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
        "TC-005",
        "Ông/ bà trưởng phòng QLCL",
        "Trần Thị Lương Huyền",
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
        "TC-006",
        "",
        "",
        "Nằm viện",
        "",
        "@BLANK@",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6"
      ]
    },
    {
      "cells": [
        "TC-012",
        "",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4"
      ]
    },
    {
      "cells": [
        "TC-013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //div[@name\u003d\u0027date_from\u0027]//input[@name\u003d\u0027date_from\u0027] (tried for 5 second(s) with 50 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.waitClearAndTypeThenTab(MyPageObject.java:571)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.enter_tu_ngay(TaoMoiDangKyNghiPage.java:209)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.enter_tu_ngay(TaoMoiDangKyNghiSteps.java:225)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$enter_tu_ngay$79(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.enter_tu_ngay(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:80)\r\n\tat ✽.Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-008\"(src/test/resources/features/2_DangKyNghi_CTR_DATA.feature:15)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@name\u003d\u0027date_from\u0027]//input[@name\u003d\u0027date_from\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BJ1JOQA\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\ngocn\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61663}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4c08000c44b925ec0f40fc054a9e03b5\n*** Element info: {Using\u003dxpath, value\u003d//div[@name\u003d\u0027date_from\u0027]//input[@name\u003d\u0027date_from\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor45.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.findElement(WebDriverFacade.java:222)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.waitClearAndTypeThenTab(MyPageObject.java:571)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.enter_tu_ngay(TaoMoiDangKyNghiPage.java:209)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.enter_tu_ngay(TaoMoiDangKyNghiSteps.java:225)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$enter_tu_ngay$79(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.enter_tu_ngay(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:80)\r\n\tat sun.reflect.GeneratedMethodAccessor49.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-008\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo"
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
        ""
      ]
    },
    {
      "cells": [
        "TC-003",
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
        "TC-005",
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
        "TC-006",
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
        "TC-007",
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
        "TC-008",
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
        "TC-009",
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
        "TC-010",
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
        "TC-011",
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
        "TC-012",
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
        "TC-013",
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
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-008\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TC-003",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-005",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-006",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-010",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-012",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-013",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
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
  "name": "Kịch bản kiểm thử chức năng Đăng ký ngày nghỉ",
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
        "tranngocanh@vnpt.vn"
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
        "tranngocanh@vnpt.vn",
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
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-009\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Địa điểm nghỉ phép",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ"
      ]
    },
    {
      "cells": [
        "TC-003",
        "@BLANK@",
        "Trần Thị Lương Huyền",
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
        "TC-005",
        "Ông/ bà trưởng phòng QLCL",
        "Trần Thị Lương Huyền",
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
        "TC-006",
        "",
        "",
        "Nằm viện",
        "",
        "@BLANK@",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6"
      ]
    },
    {
      "cells": [
        "TC-012",
        "",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4"
      ]
    },
    {
      "cells": [
        "TC-013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //div[@name\u003d\u0027date_from\u0027]//input[@name\u003d\u0027date_from\u0027] (tried for 5 second(s) with 50 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.waitClearAndTypeThenTab(MyPageObject.java:571)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.enter_tu_ngay(TaoMoiDangKyNghiPage.java:209)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.enter_tu_ngay(TaoMoiDangKyNghiSteps.java:225)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$enter_tu_ngay$79(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.enter_tu_ngay(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:80)\r\n\tat ✽.Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-009\"(src/test/resources/features/2_DangKyNghi_CTR_DATA.feature:15)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@name\u003d\u0027date_from\u0027]//input[@name\u003d\u0027date_from\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BJ1JOQA\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\ngocn\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61663}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4c08000c44b925ec0f40fc054a9e03b5\n*** Element info: {Using\u003dxpath, value\u003d//div[@name\u003d\u0027date_from\u0027]//input[@name\u003d\u0027date_from\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor45.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.findElement(WebDriverFacade.java:222)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.waitClearAndTypeThenTab(MyPageObject.java:571)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.enter_tu_ngay(TaoMoiDangKyNghiPage.java:209)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.enter_tu_ngay(TaoMoiDangKyNghiSteps.java:225)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$enter_tu_ngay$79(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.enter_tu_ngay(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:80)\r\n\tat sun.reflect.GeneratedMethodAccessor49.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-009\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo"
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
        ""
      ]
    },
    {
      "cells": [
        "TC-003",
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
        "TC-005",
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
        "TC-006",
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
        "TC-007",
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
        "TC-008",
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
        "TC-009",
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
        "TC-010",
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
        "TC-011",
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
        "TC-012",
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
        "TC-013",
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
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-009\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TC-003",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-005",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-006",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-010",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-012",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-013",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
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
  "name": "Kịch bản kiểm thử chức năng Đăng ký ngày nghỉ",
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
        "tranngocanh@vnpt.vn"
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
        "tranngocanh@vnpt.vn",
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
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-011\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Địa điểm nghỉ phép",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ"
      ]
    },
    {
      "cells": [
        "TC-003",
        "@BLANK@",
        "Trần Thị Lương Huyền",
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
        "TC-005",
        "Ông/ bà trưởng phòng QLCL",
        "Trần Thị Lương Huyền",
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
        "TC-006",
        "",
        "",
        "Nằm viện",
        "",
        "@BLANK@",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6"
      ]
    },
    {
      "cells": [
        "TC-012",
        "",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4"
      ]
    },
    {
      "cells": [
        "TC-013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //input[@name\u003d\u0027kinh_gui\u0027] (tried for 5 second(s) with 50 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.waitClearAndType(MyPageObject.java:557)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.enter_kinh_gui(TaoMoiDangKyNghiPage.java:39)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.enter_kinh_gui(TaoMoiDangKyNghiSteps.java:17)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$enter_kinh_gui$63(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.enter_kinh_gui(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:53)\r\n\tat ✽.Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-011\"(src/test/resources/features/2_DangKyNghi_CTR_DATA.feature:15)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027kinh_gui\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BJ1JOQA\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\ngocn\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61663}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4c08000c44b925ec0f40fc054a9e03b5\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027kinh_gui\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor45.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.findElement(WebDriverFacade.java:222)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.waitClearAndType(MyPageObject.java:557)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.enter_kinh_gui(TaoMoiDangKyNghiPage.java:39)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.enter_kinh_gui(TaoMoiDangKyNghiSteps.java:17)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$enter_kinh_gui$63(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.enter_kinh_gui(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:53)\r\n\tat sun.reflect.GeneratedMethodAccessor49.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-011\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo"
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
        ""
      ]
    },
    {
      "cells": [
        "TC-003",
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
        "TC-005",
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
        "TC-006",
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
        "TC-007",
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
        "TC-008",
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
        "TC-009",
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
        "TC-010",
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
        "TC-011",
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
        "TC-012",
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
        "TC-013",
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
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-011\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TC-003",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-005",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-006",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-010",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-012",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-013",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
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
  "name": "Kịch bản kiểm thử chức năng Đăng ký ngày nghỉ",
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
        "tranngocanh@vnpt.vn"
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
        "tranngocanh@vnpt.vn",
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
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-012\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Địa điểm nghỉ phép",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ"
      ]
    },
    {
      "cells": [
        "TC-003",
        "@BLANK@",
        "Trần Thị Lương Huyền",
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
        "TC-005",
        "Ông/ bà trưởng phòng QLCL",
        "Trần Thị Lương Huyền",
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
        "TC-006",
        "",
        "",
        "Nằm viện",
        "",
        "@BLANK@",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6"
      ]
    },
    {
      "cells": [
        "TC-012",
        "",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4"
      ]
    },
    {
      "cells": [
        "TC-013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //textarea[@name\u003d\u0027lydo\u0027] (tried for 5 second(s) with 50 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.waitClearAndType(MyPageObject.java:557)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.enter_ly_do(TaoMoiDangKyNghiPage.java:81)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.enter_ly_do(TaoMoiDangKyNghiSteps.java:69)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$enter_ly_do$62(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.enter_ly_do(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:59)\r\n\tat ✽.Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-012\"(src/test/resources/features/2_DangKyNghi_CTR_DATA.feature:15)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//textarea[@name\u003d\u0027lydo\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BJ1JOQA\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\ngocn\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61663}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4c08000c44b925ec0f40fc054a9e03b5\n*** Element info: {Using\u003dxpath, value\u003d//textarea[@name\u003d\u0027lydo\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor45.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.findElement(WebDriverFacade.java:222)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.waitClearAndType(MyPageObject.java:557)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.enter_ly_do(TaoMoiDangKyNghiPage.java:81)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.enter_ly_do(TaoMoiDangKyNghiSteps.java:69)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$enter_ly_do$62(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.enter_ly_do(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:59)\r\n\tat sun.reflect.GeneratedMethodAccessor49.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-012\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo"
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
        ""
      ]
    },
    {
      "cells": [
        "TC-003",
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
        "TC-005",
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
        "TC-006",
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
        "TC-007",
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
        "TC-008",
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
        "TC-009",
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
        "TC-010",
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
        "TC-011",
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
        "TC-012",
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
        "TC-013",
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
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-012\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TC-003",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-005",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-006",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-010",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-012",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-013",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
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
  "name": "Kịch bản kiểm thử chức năng Đăng ký ngày nghỉ",
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
        "tranngocanh@vnpt.vn"
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
        "tranngocanh@vnpt.vn",
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
        "Địa điểm nghỉ phép",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ"
      ]
    },
    {
      "cells": [
        "TC-003",
        "@BLANK@",
        "Trần Thị Lương Huyền",
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
        "TC-005",
        "Ông/ bà trưởng phòng QLCL",
        "Trần Thị Lương Huyền",
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
        "TC-006",
        "",
        "",
        "Nằm viện",
        "",
        "@BLANK@",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6"
      ]
    },
    {
      "cells": [
        "TC-012",
        "",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4"
      ]
    },
    {
      "cells": [
        "TC-013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3"
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
        "Soạn thảo"
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
        ""
      ]
    },
    {
      "cells": [
        "TC-003",
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
        "TC-005",
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
        "TC-006",
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
        "TC-007",
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
        "TC-008",
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
        "TC-009",
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
        "TC-010",
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
        "TC-011",
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
        "TC-012",
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
        "TC-013",
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
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //button[@class\u003d\u0027btn btn-secondary o_form_button_create\u0027] (tried for 5 second(s) with 50 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.clickOnElement(MyPageObject.java:450)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.click_tao(TaoMoiDangKyNghiPage.java:381)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.click_tao(TaoMoiDangKyNghiSteps.java:437)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$click_tao$45(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.click_tao(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:299)\r\n\tat ✽.Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TAO\"(src/test/resources/features/2_DangKyNghi_CTR_DATA.feature:27)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@class\u003d\u0027btn btn-secondary o_form_button_create\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BJ1JOQA\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\ngocn\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61663}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4c08000c44b925ec0f40fc054a9e03b5\n*** Element info: {Using\u003dxpath, value\u003d//button[@class\u003d\u0027btn btn-secondary o_form_button_create\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor45.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.findElement(WebDriverFacade.java:222)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.clickOnElement(MyPageObject.java:450)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.click_tao(TaoMoiDangKyNghiPage.java:381)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.click_tao(TaoMoiDangKyNghiSteps.java:437)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$click_tao$45(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.click_tao(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:299)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TC-003",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-005",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-006",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-010",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-012",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-013",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
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
  "name": "Kịch bản kiểm thử chức năng Đăng ký ngày nghỉ",
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
        "tranngocanh@vnpt.vn"
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
        "tranngocanh@vnpt.vn",
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
  "name": "Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-013\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Kính gửi",
        "Người duyệt",
        "Lý do",
        "Địa điểm nghỉ phép",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ"
      ]
    },
    {
      "cells": [
        "TC-003",
        "@BLANK@",
        "Trần Thị Lương Huyền",
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
        "TC-005",
        "Ông/ bà trưởng phòng QLCL",
        "Trần Thị Lương Huyền",
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
        "TC-006",
        "",
        "",
        "Nằm viện",
        "",
        "@BLANK@",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6"
      ]
    },
    {
      "cells": [
        "TC-012",
        "",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4"
      ]
    },
    {
      "cells": [
        "TC-013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //input[@name\u003d\u0027kinh_gui\u0027] (tried for 5 second(s) with 50 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.waitClearAndType(MyPageObject.java:557)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.enter_kinh_gui(TaoMoiDangKyNghiPage.java:39)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.enter_kinh_gui(TaoMoiDangKyNghiSteps.java:17)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$enter_kinh_gui$63(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.enter_kinh_gui(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:53)\r\n\tat ✽.Nhap TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-013\"(src/test/resources/features/2_DangKyNghi_CTR_DATA.feature:15)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027kinh_gui\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BJ1JOQA\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\ngocn\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61663}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4c08000c44b925ec0f40fc054a9e03b5\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027kinh_gui\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor45.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.findElement(WebDriverFacade.java:222)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat net.serenitybdd.core.pages.RenderedPageObjectView.waitFor(RenderedPageObjectView.java:105)\r\n\tat net.serenitybdd.core.pages.PageObject.waitFor(PageObject.java:341)\r\n\tat hrm.lib.MyPageObject.waitElementToBePresentThenScrollIntoViewAndHighlight(MyPageObject.java:374)\r\n\tat hrm.lib.MyPageObject.XH(MyPageObject.java:382)\r\n\tat hrm.lib.MyPageObject.waitClearAndType(MyPageObject.java:557)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.enter_kinh_gui(TaoMoiDangKyNghiPage.java:39)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.enter_kinh_gui(TaoMoiDangKyNghiSteps.java:17)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$enter_kinh_gui$63(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.enter_kinh_gui(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Nhap_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:53)\r\n\tat sun.reflect.GeneratedMethodAccessor49.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-013\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "Lưu",
        "Hủy bỏ",
        "Gửi phê duyệt",
        "Sửa",
        "Tạo",
        "Soạn thảo"
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
        ""
      ]
    },
    {
      "cells": [
        "TC-003",
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
        "TC-005",
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
        "TC-006",
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
        "TC-007",
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
        "TC-008",
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
        "TC-009",
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
        "TC-010",
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
        "TC-011",
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
        "TC-012",
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
        "TC-013",
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
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"TC-013\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TC-003",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-005",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-006",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-010",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-012",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-013",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
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
  "name": "Kịch bản kiểm thử chức năng Đăng ký ngày nghỉ",
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
        "tranngocanh@vnpt.vn"
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
        "tranngocanh@vnpt.vn",
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
        "Địa điểm nghỉ phép",
        "Loại nghỉ",
        "Từ ngày",
        "Đến ngày",
        "Số ngày nghỉ"
      ]
    },
    {
      "cells": [
        "TC-003",
        "@BLANK@",
        "Trần Thị Lương Huyền",
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
        "TC-005",
        "Ông/ bà trưởng phòng QLCL",
        "Trần Thị Lương Huyền",
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
        "TC-006",
        "",
        "",
        "Nằm viện",
        "",
        "@BLANK@",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "",
        "",
        "",
        "",
        "nghỉ bù",
        "@BLANK@",
        "@DATEdd/MM/yyyy@@",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "",
        "",
        "",
        "",
        "",
        "@DATEdd/MM/yyyy@@",
        "@BLANK@",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "",
        "",
        "",
        "01/12/2019",
        "01/11/2019",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "3,6"
      ]
    },
    {
      "cells": [
        "TC-012",
        "",
        "",
        "Đi du lịch",
        "Đà Nẵng",
        "phép",
        "02/12/2019",
        "5/12/2019",
        "4"
      ]
    },
    {
      "cells": [
        "TC-013",
        "Ông/ Bà: Trưởng phòng QLCL",
        "",
        "Con ốm",
        "",
        "nghỉ bù",
        "05/12/2019",
        "07/12/2019",
        "3"
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
        "Soạn thảo"
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
        ""
      ]
    },
    {
      "cells": [
        "TC-003",
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
        "TC-005",
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
        "TC-006",
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
        "TC-007",
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
        "TC-008",
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
        "TC-009",
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
        "TC-010",
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
        "TC-011",
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
        "TC-012",
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
        "TC-013",
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
  "location": "TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(String,String\u003e\u003e)"
});
formatter.result({
  "error_message": "net.thucydides.core.webdriver.exceptions.ElementShouldBeEnabledException: Expected enabled element was not enabled\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilClickable(WebElementFacadeImpl.java:1161)\r\n\tat hrm.lib.MyPageObject.clickOnElement(MyPageObject.java:450)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.click_huy_bo(TaoMoiDangKyNghiPage.java:330)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.click_huy_bo(TaoMoiDangKyNghiSteps.java:374)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$click_huy_bo$50(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.click_huy_bo(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:215)\r\n\tat ✽.Thuc hien TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"HUY\"(src/test/resources/features/2_DangKyNghi_CTR_DATA.feature:27)\r\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for By.xpath: //button[@class\u003d\u0027btn btn-secondary o_form_button_cancel\u0027] to be clickable (tried for 5 second(s) with 100 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BJ1JOQA\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilClickable(WebElementFacadeImpl.java:1158)\r\n\tat hrm.lib.MyPageObject.clickOnElement(MyPageObject.java:450)\r\n\tat hrm.pages.DangKyNghi.TaoMoiDangKyNghiPage.click_huy_bo(TaoMoiDangKyNghiPage.java:330)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps.click_huy_bo(TaoMoiDangKyNghiSteps.java:374)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.CGLIB$click_huy_bo$50(\u003cgenerated\u003e)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d$$FastClassByCGLIB$$38947674.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:460)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:445)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:420)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:175)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat hrm.steps.serenity.DangKyNghi.TaoMoiDangKyNghiSteps$$EnhancerByCGLIB$$4cd1d03d.click_huy_bo(\u003cgenerated\u003e)\r\n\tat hrm.steps.defs.TaoMoiDangKyNghiDefs.Thuc_hien_TAO_MOI_DANG_KY_NGHI_nhu(TaoMoiDangKyNghiDefs.java:215)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Kiem tra TẠO MỚI ĐĂNG KÝ NGHỈ nhu \"\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "MESSAGE",
        "MESSAGE_ACTION",
        "MODAL",
        "MODAL_ACTION"
      ]
    },
    {
      "cells": [
        "TC-003",
        "Kính gửi",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-005",
        "Lý do",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-006",
        "Loại nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-007",
        "Ngày bắt đầu",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-008",
        "Ngày kết thúc",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-009",
        "",
        "",
        "Từ ngày: 01/11/2019 phải nhỏ hơn Đến ngày: 01/12/2019!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-010",
        "Số ngày nghỉ",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-011",
        "",
        "",
        "Số ngày xin nghỉ phải là nửa ngày hoặc tròn ngày!",
        "Y"
      ]
    },
    {
      "cells": [
        "TC-012",
        "Success",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "TC-013",
        "",
        "",
        "Khai báo thời gian nghỉ không hợp lệ. (Đã tồn tại bản ghi đăng ký nghỉ trùng ngày)!",
        "Y"
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
  "name": "Log to excel",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DangKyNghi_CTR"
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
        "TestCases/DangKyNghi_Testcase.xlsx",
        "TestResults/DangKyNghi_Testcase.xlsx",
        "DKNN_TESTCASE"
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
});