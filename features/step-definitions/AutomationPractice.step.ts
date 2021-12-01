import { Given, When, Then } from '@wdio/cucumber-framework';
import faker from "faker"
import AutomationPracticeData from '../testdata/AutomationPractice.json'
import signinPage from '../pageobjects/signup-createaccount/signin.page';
import createaccountPage from '../pageobjects/signup-createaccount/createaccount.page';
import personalinformationPage from '../pageobjects/signup-createaccount/personalinformation.page';
import myaccountPage from '../pageobjects/myAccount/myaccount.page';
import womenPage from '../pageobjects/myAccount/women.page';
import shoppingcartPage from '../pageobjects/cart/shoppingcart.page';
import addressPage from '../pageobjects/cart/address.page';
import shippingPage from '../pageobjects/cart/shipping.page';
import paymentPage from '../pageobjects/cart/payment.page';
import orderPage from '../pageobjects/cart/order.page';
Given(/^I am on the home page of automation practice website$/, async () => {
  await signinPage.openUrl()
});
When(/^I click on sign in button$/, async () => {
  await signinPage.clickLogin()
});
Then(/^I must be navigated to my account page with header as \"([^\"]*)\"$/, async (authentication) => {
  await expect(signinPage.AuthHeader).toHaveText(authentication)
});
When(/^I enter email address and click on create account$/, async () => {
  await createaccountPage.setEmail(faker.internet.email())
  await createaccountPage.clickCreateAccount()
});
Then(/^I should see page header text as \"([^\"]*)\"$/, async (createanaccount) => {
  await expect(createaccountPage.pageHeader).toHaveText(createanaccount)
});
When(/^I enter all required feilds and click on register button$/, async () => {
  await personalinformationPage.clickTitle()
  await personalinformationPage.setName(AutomationPracticeData.name)
  await personalinformationPage.setPswd(faker.internet.password())
  await personalinformationPage.selectDateOfBirth(AutomationPracticeData.DateOfBirth)
  await personalinformationPage.clickCheckSpecialOffers()
  await personalinformationPage.setCompany(AutomationPracticeData.company)
  await personalinformationPage.setAddress(AutomationPracticeData.address)
  await personalinformationPage.setMobNumber(AutomationPracticeData.mobNumber)
  await personalinformationPage.setAliasAdd(AutomationPracticeData.aliasAdd)
  await personalinformationPage.clickRegister()
});
Then(/^I should see header text as \"([^\"]*)\" and the url contains my-account$/, async (myaccount) => {
  await expect(personalinformationPage.headerElement).toHaveText(myaccount)
  await expect(browser).toHaveUrlContaining("my-account")
});
When(/^I click on Women item and add dress to cart$/, async () => {
  await myaccountPage.WomenItem.click()
  await womenPage.clickAddToCart()
});
Then(/^I should see product added message as \"([^\"]*)\"$/, async (productsuccessfullyaddedtoyourshoppingcart) => {
  await expect(womenPage.productAdded).toHaveText(productsuccessfullyaddedtoyourshoppingcart)
});
When(/^I click on proceed to checkout$/, async () => {
  await womenPage.checkOut.waitForClickable()
  await womenPage.checkOut.click()
});
Then(/^I should see the shopping cart header as \"([^\"]*)\"$/, async (shoppingcartsummary) => {
  await expect(shoppingcartPage.shoppingCart).toHaveTextContaining(shoppingcartsummary)
});
When(/^I click on proceed to checkout button$/, async () => {
  await shoppingcartPage.checkOut.click()
});
Then(/^I should see address header as \"([^\"]*)\"$/, async (addresses) => {
  await expect(addressPage.addressHeader).toHaveText(addresses)
});
When(/^I should click proceed to checkout$/, async () => {
  await addressPage.checkOut.click()
});
Then(/^I should be navigated to shipping page and see the header as \"([^\"]*)\"$/, async (shipping) => {
  await expect(shippingPage.shippingPage).toHaveText(shipping)
});
When(/^I check terms and conditions and click on proceed to checkout$/, async () => {
  await shippingPage.termsAndConditions.click()
  await shippingPage.checkOut.click()
});
Then(/^I should see paymet method header as \"([^\"]*)\"$/, async (pleasechooseyourpaymentmethod) => {
  await expect(paymentPage.paymentHeader).toHaveText(pleasechooseyourpaymentmethod)
});
When(/^I select payment option and confirm order$/, async () => {
  await paymentPage.Payment.click()
  await orderPage.ConfirmOrder.click()
});
Then(/^I should see header as \"([^\"]*)\"$/, async (orderconfirmation) => {
  await expect(orderPage.orderConfirmed).toHaveText(orderconfirmation)
});

