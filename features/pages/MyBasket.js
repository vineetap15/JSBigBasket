class myBasket{
    get productTitle(){
        return $("div#cart-items div.express_basket a[id^=p_name_]");
    }

    get productPrice(){
        return $("div#cart-items div.express_basket  span.uiv2-unit-price");
    }

    get checkoutButton(){
        return $("button#checkout");
    }


}

module.exports = new myBasket();