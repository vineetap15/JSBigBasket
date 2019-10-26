class ProductDetail{
    get productTitle(){
        return $('div._2yfKw h1.GrE04');
    }

    get firstItemPrice(){
        return $('#price tr:nth-child(1)  td.IyLvo');
    }

    get addToBasketButton(){
        return $('div.Cs6YO.rippleEffect');
    }

    get myBasket(){
        return $("div.my-basket-btn > div > p:nth-child(1)");
    }

    get viewBasketAndCheckout(){
        return $("div._287jQ a[data-qa*='viewBasketCheckout']");
    }

    get loginButtonFromProductView(){
        return $('button.sc-11342g5-0-button__Btn-kljfud.jCocyc');
    }

    get emailTextFieldFromProductView(){
        return $("input[name*='email']");
    }

    get googleIcon(){
        return $("div.sc-174ra4d-1-layout__Div-heWbUY.efPWdt > div:nth-child(2) > svg");
    }

    get googleEmailTextField(){
        return $("#identifierId");
    }

    get googleNextButton(){
        return $("#identifierNext");
    }

    get googlePasswordTextField(){
        return $("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input");
    }

    get googlePasswordNextButton(){
        return $("#passwordNext > div.ZFr60d.CeoRYc");
    }

    

}

module.exports = new ProductDetail();