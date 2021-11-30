class ShoppingCart{
    get shoppingCart(){
        return $("#cart_title")
    }
    get checkOut(){
        return $(".button.btn.btn-default.standard-checkout.button-medium")
    }
}
export default new ShoppingCart()