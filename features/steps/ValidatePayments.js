
const { Given, When, Then } = require('cucumber');
const NavCategories = require('../pages/NavCategories');
const ProductList = require('../pages/ProductList');
const ProductDetail = require('../pages/ProductDetail');
const MyBasket = require('../pages/MyBasket');


Given(/^User selects a category$/, async () => {
    browser.url('https://www.bigbasket.com');
    const shopByCategory = await NavCategories.shopByCategory;
    const bakeryCakesAndDairyCategory = await NavCategories.bakeryCakesAndDairyCategory;

    shopByCategory.click();
    bakeryCakesAndDairyCategory.click();
});

When(/^User adds  the product in his basket$/, async () => {
    const firstItem = await ProductList.firstItem;
    const firstItemPrice = await ProductList.firstItemPrice;
    const price = await firstItemPrice.getText();
    const firstItemTitle = await ProductList.productTitle;
    const title = await firstItemTitle.getText();

    await console.log('product price in list view', price);
    await console.log('product title in list view', title);
    await browser.pause(3000);
    await firstItem.click();
    await browser.pause(3000);
    const fip = await ProductDetail.firstItemPrice;
    //const fipText = await fip.getText();
    const fit = await ProductDetail.productTitle;
    const priceDetail = await fip.getText();
    const titleDetail = await fit.getText();
    console.log("product price in detail view: " +priceDetail);
    console.log("product title in details view: " +titleDetail)

    const addToBasket = await ProductDetail.addToBasketButton;
    addToBasket.click();

    const mybasket = await ProductDetail.myBasket;
    mybasket.click();
    
    const viewBasketAndCheckout = await ProductDetail.viewBasketAndCheckout;
    viewBasketAndCheckout.click();


});

Then(/^user should be able to complete the payment$/, async () => {
    const viewBasket = await ProductDetail.viewBasketAndCheckout;
    viewBasket.click();

    const loginGooglePlus = await ProductDetail.googleIcon;
    loginGooglePlus.click();



    mybasket.click();
    viewBasket.click();
    

}); 