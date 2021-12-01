class Order {
    get ConfirmOrder() {
        return $("//span[text()='I confirm my order']")
    }
    get orderConfirmed() {
        return $("//h1")
    }
}
export default new Order()