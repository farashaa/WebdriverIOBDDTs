import { Given, When, Then } from '@wdio/cucumber-framework';
import AutomationPracticePage from '../pageobjects/AutomationPractice.page';
import faker from "faker"
import randomdata from '../utils/randomdata';
import AutomationPracticeData from '../testdata/AutomationPractice.json'
Given(/^I am on the home page of automation practice website$/, async () => {
  await AutomationPracticePage.openUrl()
});
When(/^I click on sign in button, I must be navigated to my account page$/, async () => {
  AutomationPracticePage.clickLogin()
});
When(/^I enter email address and click on create account, I must be navigated to account creation page$/, async () => {
  await AutomationPracticePage.setEmail(faker.internet.email())
  await AutomationPracticePage.clickCreateAccount()
});
Then(/^I should see page header text$/, async () => {
  //  await AutomationPracticePage.valiadtePageHeader(createanaccount)
  await expect(AutomationPracticePage.pageHeader).toHaveText("CREATE AN ACCOUNT")
});
When(/^I enter title as Mrs$/, async () => {
  await AutomationPracticePage.clickTitle()
});
When(/^I enter Firstname ,Lastname ,password$/, async () => {
  await AutomationPracticePage.setFname(AutomationPracticeData.FirstName)
  await AutomationPracticePage.setLname(AutomationPracticeData.LastName)
  await AutomationPracticePage.setPswd(AutomationPracticeData.password)
});
When(/^I give Date of Birth$/, async () => {
  await AutomationPracticePage.selectDd(AutomationPracticeData.DateOfBirth.dd)
  await AutomationPracticePage.selectMm(AutomationPracticeData.DateOfBirth.mm)
  await AutomationPracticePage.selectYy(AutomationPracticeData.DateOfBirth.yy)
});
When(/^I check for Receive special offers from our partners!$/, async () => {
  await AutomationPracticePage.clickCheck()
});
When(/^I enter company and address$/, async () => {
  await AutomationPracticePage.setCompany(AutomationPracticeData.company)
  await AutomationPracticePage.setAdd(AutomationPracticeData.address)
});
When(/^I enter city,state,country and Postal code$/, async () => {
  await AutomationPracticePage.setCity(AutomationPracticeData.city)
  await AutomationPracticePage.selectState(AutomationPracticeData.state)
  await AutomationPracticePage.selectState(AutomationPracticeData.country)
  await AutomationPracticePage.setPincode(AutomationPracticeData.postalCode)
});
When(/^I enter mobile number$/, async () => {
  await AutomationPracticePage.setMobNumber(AutomationPracticeData.mobNumber)
});
When(/^I assign any alias address$/, async () => {
  await AutomationPracticePage.setAliasAdd(AutomationPracticeData.aliasAdd)
});
When(/^I click on Register button$/, async () => {
  await AutomationPracticePage.clickRegister()
});
Then(/^I should see header text as \"([^\"]*)\"$/, async (pageHeader) => {
  
  await expect(AutomationPracticePage.headerElement).toHaveText(pageHeader)

});
Then(/^I should see the url contains my-account$/, async () => {
 
  await expect(browser).toHaveUrlContaining("my-account")
});

