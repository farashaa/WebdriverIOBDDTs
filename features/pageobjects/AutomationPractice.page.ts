import randomdata from "../utils/randomdata"

class AutomationPractice{
    async openUrl(){
    await browser.url("http://automationpractice.com/index.php")
    await browser.maximizeWindow()
    }
    get login(){
        return $("//a[@class='login']")
    }
    async clickLogin(){
        await this.login.click()
    }
    get email(){
       return  $("//input[@class='is_required validate account_input form-control']")
    }
    async setEmail(emailAddress:string){
    await this.email.setValue(randomdata.generateEmail())
    }
    get createAcc(){
       return  $("//i[@class='icon-user left']")
    }
    async clickCreateAccount(){
    await this.createAcc.click()
    }
    get pageHeader(){
        return $("//h1[@class='page-heading']")
    }
    get title(){
        return $("//input[@id='id_gender2']")
    }
    async clickTitle(){
    await this.title.click()
    }

    get fName(){
        return $("//input[@id='customer_firstname']")
    }
    async setFname(Firstname:string){
        await this.fName.setValue(Firstname)
    }
    get lName(){
        return $("//input[@id='customer_lastname']")
    }
    async setLname(lastname:string){
        await this.lName.setValue(lastname)
    }
    get pswd(){
        return $("//input[@id='passwd']")
    }
    async setPswd(password:string){
        await this.pswd.setValue(password)
    }
    get dd(){
        return $("//select[@id='days']")
    }
    async selectDd(date:string){
        await this.dd.selectByIndex(4)
    }
    get mm(){
        return $("//select[@id='months']")
    }
    async selectMm(month:string){
        await this.mm.selectByAttribute('value',5)
    }
    get yy(){
        return $("//select[@id='years']")
    }
    async selectYy(year:string){
        await this.yy.selectByIndex(4)
    }
    get check(){
        return $("//input[@id='optin']")
    }
    async clickCheck(){
    await this.check.click()
    }
    get compName(){
        return $("//input[@id='company']")
    }
    async setCompany(company:string){
        await this.compName.setValue(company)
    }
    get add(){
        return $("//input[@id='address1']")
    }
    async setAdd(address:string){
    await this.add.setValue(address)
    }
    get cityName(){
        return $("//input[@id='city']")
    }
    async setCity(city:string){
        await this.cityName.setValue(city)
    }
    get stateName(){
    return $("//select[@id='id_state']")
    }
    async selectState(state:string){
        await this.stateName.selectByIndex(3)
    }
    get countryName(){
        return $("//select[@id='id_country']")
    }
    async selectCountry(country:string){
        await this.countryName.selectByIndex(1)
    }
    get postalcode(){
        return $("//input[@id='postcode']")
    }
    async setPincode(pincode:string){
        await this.postalcode.setValue(pincode)
    }
    get mobNumber(){
        return $("//input[@id='phone_mobile']")
    }
    async setMobNumber(mobileNumber:string){
    await this.mobNumber.setValue(mobileNumber)
    }
    get aliasAdd(){
        return $("//input[@id='alias']")
    }
    async setAliasAdd(myaddress:string){
    await this.aliasAdd.setValue(myaddress)
    }
    get register(){
        return $("//span[text()='Register']")
    }
    async clickRegister(){
        await this.register.click()
    }
    get headerElement(){
        return $("//h1[@class='page-heading']")
    }
  }
export default new AutomationPractice()