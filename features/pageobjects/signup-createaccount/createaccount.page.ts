class CreateAccount {
    get email() {
        return $("//input[@class='is_required validate account_input form-control']")
    }
    async setEmail(emailAddress: string) {
        await this.email.setValue(emailAddress)
    }
    get createAcc() {
        return $("//i[@class='icon-user left']")
    }
    async clickCreateAccount() {
        await this.createAcc.click()
    }
    get pageHeader() {
        return $(".page-heading")
    }
}
export default new CreateAccount()