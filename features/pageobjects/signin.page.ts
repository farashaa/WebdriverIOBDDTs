class Signin {
    async openUrl() {
        await browser.url("http://automationpractice.com/index.php")
        await browser.maximizeWindow()
    }
    get login() {
        return $("//a[@class='login']")
    }
    async clickLogin() {
        await this.login.click()
    }
    get AuthHeader() {
        return $("//h1")
    }
}
export default new Signin()