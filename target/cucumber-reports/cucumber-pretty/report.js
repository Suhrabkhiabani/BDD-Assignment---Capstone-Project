$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/RetailPageLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Retail Page Login Testing",
  "description": "",
  "id": "retail-page-login-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JenkinTest"
    }
  ]
});
formatter.before({
  "duration": 3159787300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enter username \u0027jamal@gmail.com\u0027 and password \u0027asdf\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2494885300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 81664500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3703127300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jamal@gmail.com",
      "offset": 21
    },
    {
      "val": "asdf",
      "offset": 52
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 681170900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 472860500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3355424600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Register as an Affiliate userwith Cheque Payment Method",
  "description": "",
  "id": "retail-page-login-testing;register-as-an-affiliate-userwith-cheque-payment-method",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@TEsting"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User click on‘Register for an Affiliate Account’link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User fill affiliate form with below information",
  "rows": [
    {
      "cells": [
        "company",
        "website",
        "taxID",
        "Cheque Payee Name"
      ],
      "line": 17
    },
    {
      "cells": [
        "Landover",
        "www.Landover.com",
        "121014",
        "David Dawson"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User check on About us check box",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Continue button affiliate",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should see a success messages",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Register_for_an_Affiliate_Account_link()"
});
formatter.result({
  "duration": 324022600,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_fill_affiliate_form_with_below_information(DataTable)"
});
formatter.result({
  "duration": 436125400,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_check_on_About_us_check_box()"
});
formatter.result({
  "duration": 77542300,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Continue_button_affiliate()"
});
formatter.result({
  "duration": 561887300,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_should_see_a_success_messages()"
});
formatter.result({
  "duration": 360592600,
  "status": "passed"
});
formatter.after({
  "duration": 825550400,
  "status": "passed"
});
formatter.before({
  "duration": 1787321600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enter username \u0027jamal@gmail.com\u0027 and password \u0027asdf\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2337363400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 487122500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3717380000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jamal@gmail.com",
      "offset": 21
    },
    {
      "val": "asdf",
      "offset": 52
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 733212800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 432381500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3346803000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Edit your affiliate information from Cheque payment method to Bank Transfer",
  "description": "",
  "id": "retail-page-login-testing;edit-your-affiliate-information-from-cheque-payment-method-to-bank-transfer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@TEsting"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User click on‘Edit your affiliate informationlink",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user click on Bank Transfer radio button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User fill Bank information with below information",
  "rows": [
    {
      "cells": [
        "bankName",
        "abaNumber",
        "swiftCode",
        "accountName",
        "accountNumber"
      ],
      "line": 28
    },
    {
      "cells": [
        "Bank of America",
        "100200",
        "225588",
        "Suhrab",
        "112233665544"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on Continue AffiliateButton",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should see a success message",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Edit_your_affiliate_informationlink()"
});
formatter.result({
  "duration": 321285300,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Bank_Transfer_radio_button()"
});
formatter.result({
  "duration": 86203900,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_fill_Bank_information_with_below_information(DataTable)"
});
formatter.result({
  "duration": 520360300,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_continue_affiliatebutton()"
});
formatter.result({
  "duration": 456658400,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_should_see_a_success_message()"
});
formatter.result({
  "duration": 350827300,
  "status": "passed"
});
formatter.after({
  "duration": 777676100,
  "status": "passed"
});
});