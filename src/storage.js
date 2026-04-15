import { items } from "./items"
import { display } from "./display"

function makeStorage() {

    localStorage.setItem("myItems",JSON.stringify(items.myItems))

    localStorage.setItem("myCategories",JSON.stringify(items.myCategories))

    localStorage.setItem("hiddenCategories",JSON.stringify(items.hiddenCategories))

}


function executeStorage() {
    if (window.localStorage.length > 0) {

        const elementArray = JSON.parse(localStorage.getItem("myItems"))
        elementArray.forEach(element => {
            items.myItems.push(element)
        });


        const categoryArray = JSON.parse(localStorage.getItem("myCategories"))
        categoryArray.forEach(element => {
            if (element != "miscellaneous") {
                items.myCategories.push(element)
            }
        });

        const hiddenArray = JSON.parse(localStorage.getItem("hiddenCategories"))
        hiddenArray.forEach(element => {
            items.hiddenCategories.push(element)
        });


        display.updateTable(items.myItems)
        display.updateCategories(items.myCategories)
        display.updateCategoryDropdown(items.myCategories)
    }
}

export {executeStorage, makeStorage}