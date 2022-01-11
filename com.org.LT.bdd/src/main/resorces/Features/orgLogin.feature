Feature: orange HRM application Login

Background:
Given user launch the URL "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F" in chrome browser
When user enters the username "admin@yourstore.com" and password "admin" for nop
And user clicks on login button for nop
Then user selects customer menu

@tc_1
Scenario: Login Success

Given user launch the URL "https://opensource-demo.orangehrmlive.com/index.php/auth/login" in chrome browser
When user enters the username "admin" and password "admin123"
And user clicks on login button
Then user must able to see the title "OrangeHRM"

@tc_2
Scenario Outline:  Add Customer
Given user launch the URL "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F" in chrome browser
When user enters the username "<email>" and password "<password>" for nop
And user clicks on login button for nop

Then user selects customer menu
And user clicks on adcustomer and enter the details

  Examples:
  | email | password |
  |admin@yourstore.com | admin |
  |priya@gmail.com     | admin1 |

  
  
@tc_3
Scenario: searchCust

And user performs search operation


  