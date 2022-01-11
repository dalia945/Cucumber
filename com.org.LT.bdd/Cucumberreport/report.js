$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resorces/Features/orgLogin.feature");
formatter.feature({
  "name": "orange HRM application Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add Customer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc_1"
    }
  ]
});
formatter.step({
  "name": "user launch the URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\" in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters the username \"\u003cemail\u003e\" and password \"\u003cpassword\u003e\" for nop",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on login button for nop",
  "keyword": "And "
});
formatter.step({
  "name": "user selects customer menu",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on adcustomer and enter the details",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "priya@gmail.com",
        "admin1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add Customer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc_1"
    }
  ]
});
formatter.step({
  "name": "user launch the URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\" in chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefenitions.Org_Steps.launchApp(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the username \"admin@yourstore.com\" and password \"admin\" for nop",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefenitions.Org_Steps.enterUn(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button for nop",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefenitions.Org_Steps.clickLoginbtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects customer menu",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefenitions.Org_Steps.custmenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on adcustomer and enter the details",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefenitions.Org_Steps.custdetails()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Customer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc_1"
    }
  ]
});
formatter.step({
  "name": "user launch the URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\" in chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefenitions.Org_Steps.launchApp(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the username \"priya@gmail.com\" and password \"admin1\" for nop",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefenitions.Org_Steps.enterUn(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button for nop",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefenitions.Org_Steps.clickLoginbtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects customer menu",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefenitions.Org_Steps.custmenu()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"html[1]/body[1]/div[3]/aside[1]/div[1]/div[4]/div[1]/div[1]/nav[1]/ul[1]/li[4]/a[1]\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-Q2RM1HI\u0027, ip: \u002710.1.10.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51706}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 222a787a972b7131a73e63e403b5388b\n*** Element info: {Using\u003dxpath, value\u003dhtml[1]/body[1]/div[3]/aside[1]/div[1]/div[4]/div[1]/div[1]/nav[1]/ul[1]/li[4]/a[1]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefenitions.Org_Steps.custmenu(Org_Steps.java:65)\r\n\tat ✽.user selects customer menu(file:///C:/Users/admin/eclipse-workspace/com.org.LT.bdd/./src/main/resorces/Features/orgLogin.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on adcustomer and enter the details",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefenitions.Org_Steps.custdetails()"
});
formatter.result({
  "status": "skipped"
});
});