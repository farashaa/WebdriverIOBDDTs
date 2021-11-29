class Women{
    get productContainer(){
        return $("//img[@title='Blouse']/ancestor::div[@class='product-container']")
    }
    get addToCart(){
        return $("//a[@title='Add to cart' and @data-id-product='2']")
    }
    async clickAddToCart(){
        await this.productContainer.scrollIntoView()
        await this.productContainer.moveTo()
        await this.addToCart.waitForClickable()
        await this.addToCart.click()
    }
    get productAdded(){
        return $("//i[@class='icon-ok']/..")
    }
    get checkOut() { return $('//a[@title="Proceed to checkout"]') }

    // get checkOut(){
    //     return $("//a[@class='btn btn-default button button-medium']")
    // }
}
export default new Women()