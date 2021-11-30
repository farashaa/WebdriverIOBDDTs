
import randomdata from "../utils/randomdata"
class CreateAccount{
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
}
export default new CreateAccount()