import { Given, When, Then } from '@wdio/cucumber-framework';
import faker from "faker"
import randomdata from '../utils/randomdata';
import AutomationPracticeData from '../testdata/AutomationPractice.json'
import signinPage from '../pageobjects/signin.page';
import createaccountPage from '../pageobjects/createaccount.page';
import personalinformationPage from '../pageobjects/personalinformation.page';
import myaccountPage from '../pageobjects/myaccount.page';
import womenPage from '../pageobjects/women.page';
import shoppingcartPage from '../pageobjects/shoppingcart.page';
import addressPage from '../pageobjects/address.page';
import shippingPage from '../pageobjects/shipping.page';
import paymentPage from '../pageobjects/payment.page';
import orderPage from '../pageobjects/order.page';
Given(/^I am on the home page of automation practice website$/, async () => {
  await signinPage.openUrl()
});
When(/^I click on sign in button$/, async () => {
  signinPage.clickLogin()
});
Then(/^I must be navigated to my account page with header as \"([^\"]*)\"$/, async(authentication)=> {
  await expect(signinPage.AuthHeader).toHaveText(authentication)
});
 
When(/^I enter email address and click on create account$/, async () => {
  await createaccountPage.setEmail(faker.internet.email())
  await createaccountPage.clickCreateAccount()
});
Then(/^I should see page header text as \"([^\"]*)\"$/, async (createanaccount)=> {
  //  await AutomationPracticePage.valiadtePageHeader(createanaccount)
  await expect(createaccountPage.pageHeader).toHaveText("CREATE AN ACCOUNT")
});
When(/^I enter title as Mrs,Firstname ,Lastname ,password,Date of Birth and check for Receive special offers from our partners!$/, async()=> {
  await personalinformationPage.clickTitle()
  await personalinformationPage.setFname(AutomationPracticeData.FirstName)
  await personalinformationPage.setLname(AutomationPracticeData.LastName)
  await personalinformationPage.setPswd(AutomationPracticeData.password)
  await personalinformationPage.selectDd(AutomationPracticeData.DateOfBirth.dd)
  await personalinformationPage.selectMm(AutomationPracticeData.DateOfBirth.mm)
  await personalinformationPage.selectYy(AutomationPracticeData.DateOfBirth.yy)
  await personalinformationPage.clickCheck()
});
When(/^I enter company and address,city,state,country and Postal code,mobile number,any alias address$/, async ()=> {
  await personalinformationPage.setCompany(AutomationPracticeData.company)
  await personalinformationPage.setAdd(AutomationPracticeData.address)
  await personalinformationPage.setCity(AutomationPracticeData.city)
  await personalinformationPage.selectState(AutomationPracticeData.state)
  await personalinformationPage.selectState(AutomationPracticeData.country)
  await personalinformationPage.setPincode(AutomationPracticeData.postalCode)
  await personalinformationPage.setMobNumber(AutomationPracticeData.mobNumber)
  await personalinformationPage.setAliasAdd(AutomationPracticeData.aliasAdd)
});
When(/^I click on Register button$/, async () => {
  await personalinformationPage.clickRegister()
});
Then(/^I should see header text as \"([^\"]*)\"$/, async (pageHeader) => {
await expect(personalinformationPage.headerElement).toHaveText(pageHeader)
});
Then(/^I should see the url contains my-account$/, async () => {
 await expect(browser).toHaveUrlContaining("my-account")
});
When(/^I click on Women item and add dress to cart$/, async() =>{
  await myaccountPage.WomenItem.click()
  await womenPage.clickAddToCart()
});
Then(/^I should see product added message as \"([^\"]*)\"$/, async(productsuccessfullyaddedtoyourshoppingcart) =>{
  await expect(womenPage.productAdded).toHaveText(productsuccessfullyaddedtoyourshoppingcart)
});
When(/^I click on proceed to checkout$/, async()=> {
  await womenPage.checkOut.waitForClickable()
 await womenPage.checkOut.click()
});
Then(/^I should see the shopping cart header as \"([^\"]*)\"$/, async(shoppingcartsummary)=> {
  await expect(shoppingcartPage.shoppingCart).toHaveTextContaining(shoppingcartsummary)
 });
  When(/^I click on proceed to checkout button$/, async()=> {
  await shoppingcartPage.checkOut.click()
 });
 Then(/^I should see address header as \"([^\"]*)\"$/, async(addresses)=> {
  await expect(addressPage.addressHeader).toHaveText(addresses)
 });
 When(/^I should click proceed to checkout$/, async()=> {
  await addressPage.checkOut.click()
 });
 Then(/^I should be navigated to shipping page and see the header as \"([^\"]*)\"$/, async(shipping)=>{
  await expect(shippingPage.shippingPage).toHaveText(shipping)
 });
 When(/^I check terms and conditions and click on proceed to checkout$/, async()=> {
  await shippingPage.termsAndConditions.click()
  await shippingPage.checkOut.click()
});
Then(/^I should see paymet method header as \"([^\"]*)\"$/, async(pleasechooseyourpaymentmethod) =>{
  await expect(paymentPage.paymentHeader).toHaveText(pleasechooseyourpaymentmethod)
 });
 When(/^I select payment option and confirm order$/, async()=> {
  await paymentPage.Payment.click()
  await orderPage.ConfirmOrder.click()
});
Then(/^I should see header as \"([^\"]*)\"$/, async(orderconfirmation)=> {
 await expect(orderPage.orderConfirmed).toHaveText(orderconfirmation)
});

