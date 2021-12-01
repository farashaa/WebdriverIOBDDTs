
class PersonalInformation {
    get title() {
        return $("//input[@id='id_gender2']")
    }
    async clickTitle() {
        await this.title.click()
    }
    get fName() {
        return $("//input[@id='customer_firstname']")
    }
    get lName() {
        return $("//input[@id='customer_lastname']")
    }
    async setName(name: { firstName: string, lastName: string }) {
        await this.fName.setValue(name.firstName)
        await this.lName.setValue(name.lastName)
    }
    get pswd() {
        return $("//input[@id='passwd']")
    }
    async setPswd(password: string) {
        await this.pswd.setValue(password)
    }
    get dd() {
        return $("//select[@id='days']")
    }
    get mm() {
        return $("//select[@id='months']")
    }
    get yy() {
        return $("//select[@id='years']")
    }
    async selectDateOfBirth(dateOfBirth: { day: string, month: string, year: string }) {
        await this.dd.selectByIndex(4)
        await this.mm.selectByAttribute('value', 5)
        await this.yy.selectByIndex(4)
    }
    get checkSpecialOffers() {
        return $("//input[@id='optin']")
    }
    async clickCheckSpecialOffers() {
        await this.checkSpecialOffers.click()
    }
    get compName() {
        return $("//input[@id='company']")
    }
    async setCompany(company: string) {
        await this.compName.setValue(company)
    }
    get add() {
        return $("//input[@id='address1']")
    }
    get cityName() {
        return $("//input[@id='city']")
    }
    get stateName() {
        return $("//select[@id='id_state']")
    }
    get countryName() {
        return $("//select[@id='id_country']")
    }
    get postalcode() {
        return $("//input[@id='postcode']")
    }
    async setAddress(address: { address1: string, city: string, state: string, country: string, postalCode: string }) {
        await this.add.setValue(address.address1)
        await this.cityName.setValue(address.city)
        await this.stateName.selectByIndex(3)
        await this.countryName.selectByIndex(1)
        await this.postalcode.setValue(address.postalCode)
    }
    get mobNumber() {
        return $("//input[@id='phone_mobile']")
    }
    async setMobNumber(mobileNumber: string) {
        await this.mobNumber.setValue(mobileNumber)
    }
    get aliasAdd() {
        return $("//input[@id='alias']")
    }
    async setAliasAdd(myaddress: string) {
        await this.aliasAdd.setValue(myaddress)
    }
    get register() {
        return $("//span[text()='Register']")
    }
    async clickRegister() {
        await this.register.click()
    }
    get headerElement() {
        return $("//h1[@class='page-heading']")
    }
}
export default new PersonalInformation()