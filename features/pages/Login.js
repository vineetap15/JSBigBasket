class Login{
    get googleButton(){
        return $("a.gplusBtn.smGlobalBtn");
    }

    get productPrice(){
        return $("div#cart-items div.express_basket  span.uiv2-unit-price");
    }

    get checkoutButton(){
        return $("button#checkout");
    }


}

module.exports = new Login();