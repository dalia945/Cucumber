$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resorces/Features/orgLogin.feature");
formatter.feature({
  "name": "orange HRM application Login",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "searchCust",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tc_3"
    }
  ]
});
formatter.step({
  "name": "user performs search operation",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefenitions.Org_Steps.search()"
});
formatter.result({
  "status": "passed"
});
});