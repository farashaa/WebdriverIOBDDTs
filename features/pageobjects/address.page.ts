class Address{
    get addressHeader(){
        return $(".page-heading")
    }
    get deliveryAddress(){
        return ("//label[@for='id_address_delivery']")
    }
    get checkOut(){
        return $("//button[@name='processAddress']")
    }

}
export default new Address()