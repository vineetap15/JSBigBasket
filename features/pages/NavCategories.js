class NavCategories{

    get  shopByCategory() {
        return $('li.dropdown.full-wid.hvr-drop');
    }

    get fruitsAndVegetableCategory() {
        return $('div#navbar li[data-submenu-id*=fruits-vegetables]');
    }

    get foodgrainsOilAndMasalaCategory() {
        return $('div#navbar li[data-submenu-id*=foodgrains-oil-masala]');
    }

    get bakeryCakesAndDairyCategory() {
        return $('div#navbar li[data-submenu-id*=bakery-cakes-dairy]');
    }

    get beveragesCategory() {
        return $('div#navbar li[data-submenu-id*=beverages]');
    }

    get snacksAndBrandedFoodsCategory() {
        return $('div#navbar li[data-submenu-id*=snacks-branded-foods]');
    }

    get beautyAndHygieneCategory() {
        return $('div#navbar li[data-submenu-id*=beauty-hygiene]');
    }

    get cleaningAndHouseholdCategory() {
        return $('div#navbar li[data-submenu-id*=cleaning-household]');
    }
    get kitchenGardenAndPetsCategory() {
        return $('div#navbar li[data-submenu-id*=kitchen-garden-pets]');
    }
    get eggsMeatAndFishCategory() {
        return $('div#navbar li[data-submenu-id*=eggs-meat-fish]');
    }
    get gourmetAndWorldFoodCategory() {
        return $('div#navbar li[data-submenu-id*=gourmet-world-food]');
    }
    get babyCareCategory() {
        return $('div#navbar li[data-submenu-id*=baby-care]');
    }

    
}


module.exports = new NavCategories();

// export class NavCategories{
//     NavCategories = new NavCategories();
// }  