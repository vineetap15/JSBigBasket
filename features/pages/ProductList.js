class ProductList{
    get firstItem(){
        return $('div.items > div:nth-child(1) div[qa="product_name"] a');
    }

    get productTitle(){
        return $('div.items > div:nth-child(1) div.col-sm-12.col-xs-7.prod-name a');
    }

    get firstItemPrice(){
        return $('div.items > div:nth-child(1) div.po-markup span.discnt-price span.ng-binding');
    }
}

module.exports = new ProductList();