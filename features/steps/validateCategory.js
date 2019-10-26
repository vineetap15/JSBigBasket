
const { Given, When, Then } = require('cucumber');
const NavCategories = require('../pages/NavCategories');
const setCat = require('../pages/setCategories');
const { addFeature } = require('@wdio/allure-reporter').default


Given(/^Given User is in home screen$/, () => {
    
});

When(/^User clicks on shop option$/,  async () => {
    browser.url('https://www.bigbasket.com');
    
    try {
        
        const cat = await NavCategories.shopByCategory;
            cat.click();
    } catch(err) {
        if(err) {
                    throw new Error(err);
                }
    }
    
//  NavCategories.shopByCategory.then(function(elem) {
//         elem.click();
//  }).catch(function(err) {
//     if(err) {
//         throw new Error(err);
//     }
//  }) 


});

Then(/^User should view all the main categories$/, async () => {
let mainCategoryList = setCat.mainCategoryList;
    for(i=0;i<mainCategoryList.length;i++){
        const e = await mainCategoryList[i];
        console.log("element is--->"+e.getText());
        mainCategoryList[i].then(function(elem){ 
            
            elem.isDisplayed();
        }).catch(function(err){
            throw new Error(err);
        })
    }

}); 