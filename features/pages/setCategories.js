const nav = require('../pages/NavCategories');

class setCategories{
    
    get mainCategoryList(){
        let mcl = [];
        
        mcl.push(nav.fruitsAndVegetableCategory);
        mcl.push(nav.babyCareCategory);
        mcl.push(nav.bakeryCakesAndDairyCategory);
        mcl.push(nav.beautyAndHygieneCategory);
        mcl.push(nav.beveragesCategory);
        mcl.push(nav.cleaningAndHouseholdCategory);
        mcl.push(nav.eggsMeatAndFishCategory);
        mcl.push(nav.foodgrainsOilAndMasalaCategory);
        mcl.push(nav.gourmetAndWorldFoodCategory);
        mcl.push(nav.kitchenGardenAndPetsCategory);
        mcl.push(nav.snacksAndBrandedFoodsCategory);

        return mcl;
    }

}

module.exports = new setCategories();