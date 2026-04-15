import { items } from "./items"

import { makeStorage } from "./storage"

import { display } from "./display"

const newToDo = document.querySelector("#to-do")

const newPriority = document.querySelector("#priority")

const newCategory = document.querySelector("#category")

const newDeadline = document.querySelector("#deadline")

const newCategoryCreation = document.querySelector("#new-category")

export default document.addEventListener ("click", (event) =>{

    let target = event.target

    switch (target.className) {

        case "add-item":

            if (newToDo.value != "") {

                items.addItem(false,newToDo.value, newPriority.value, newCategory.value, newDeadline.value)
    
                display.updateTable(items.myItems)

                console.log(items.myItems)

                makeStorage()
            }
            break;

        case "add-category":

            if (newCategoryCreation.value != "" && !items.myCategories.includes(newCategoryCreation.value)) {

                items.addCategory(newCategoryCreation.value)
    
                display.updateCategories(items.myCategories)
    
                display.updateCategoryDropdown(items.myCategories)

                makeStorage()
    
            }
            break;
        
        case "remove-category":

            items.removeCategory(target.parentNode.id)

            display.updateCategories(items.myCategories)
    
            display.updateCategoryDropdown(items.myCategories)

            items.switchCategory(target.previousElementSibling.textContent, "miscellaneous")

            display.updateTable(items.myItems)

            makeStorage()

            break;

        case "rename-category":
            
            display.prepareRename(target.parentNode)

            break;

        case "rename-category-confirm":
            
            const categoryRename = target.previousElementSibling

            if (categoryRename.value != "" && !items.myCategories.includes(categoryRename.value)) {

                items.removeCategory(target.parentNode.id)
    
                items.addCategory(categoryRename.value)
    
                display.updateCategories(items.myCategories)
        
                display.updateCategoryDropdown(items.myCategories)
    
                items.switchCategory(categoryRename.placeholder, categoryRename.value)
    
                display.updateTable(items.myItems)

                makeStorage()
            }

            break;

        case "remove-item":

            items.removeItem(target.parentNode.parentNode.id)

            display.updateTable(items.myItems)

            makeStorage()

            break;

        case "edit-item":

            display.prepareEdit(target.parentNode.parentNode)
           
            break;

        case "edit-item-confirm":

            if (target.parentNode.parentNode.children[1].firstElementChild.value != "") {
              
                items.updateItem(target.parentNode.parentNode)
  
                display.updateTable(items.myItems)

                makeStorage()
            }
            
            break;

        case "category-name":

          
            items.hideUnhideCategory(target.textContent)

            display.updateTable(items.myItems)

            makeStorage()


            break;

        case "check":

            items.updateItemCheck(target.parentNode.parentNode)

            makeStorage()

            break;

        case "show-history":

            display.showHistory(items.myItems)

        break;

        case "show-active":
            
            display.updateTable(items.myItems)

        break;
            

    }

})