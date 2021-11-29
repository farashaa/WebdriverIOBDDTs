class Shipping{
    get shippingPage(){
        return $("//h1")
    }
    get termsAndConditions(){
        return $("#cgv")
    } 
    get checkOut(){
        return $("//button[@name='processCarrier']")
    }
}
export default new Shipping()