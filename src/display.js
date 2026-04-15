import { items } from "./items";
import { formatDistanceToNow, isFuture, isPast, isToday, isTomorrow, isYesterday, getDay } from "date-fns";

const display = (function() {

    function showHistory (array) {

        const tableBody = document.querySelector("tbody")

        tableBody.innerHTML = ""

        array.forEach(element => {

            if (!items.hiddenCategories.includes(element.category) && element.completed === true) {

                const row = document.createElement("tr")

                const toDo = document.createElement("td")
                const priority = document.createElement("td")
                const category = document.createElement("td")
                const date = document.createElement("td")

                toDo.textContent = element.toDo
                priority.textContent = element.priority
                category.textContent = element.category
                date.textContent = element.dueDate

                row.append(toDo,priority,category,date)
                tableBody.append(row)

            }
        })

    }

    function updateTable (array) {

        const tableBody = document.querySelector("tbody")

        tableBody.innerHTML = ""

        array.forEach(element => {
        
           if (!items.hiddenCategories.includes(element.category) && element.completed === false) {


             const row = document.createElement("tr")
             row.id = `item-${array.indexOf(element)}`
             const checkMark = document.createElement("td")
             const check = document.createElement("input")
             check.type = "checkbox"
             check.className = "check"
             checkMark.append(check)
 
             const toDo = document.createElement("td")
             const priority = document.createElement("td")
             const category = document.createElement("td")
             const date = document.createElement("td")
 
             const edit = document.createElement("td")
             const editButton = document.createElement("button")
             editButton.className = "edit-item"
             editButton.textContent = "edit"
             edit.append(editButton)
 
             const deleteD = document.createElement("td")
             const deleteButton = document.createElement("button")
             deleteButton.className = "remove-item"
             deleteButton.textContent = "remove"
             deleteD.append(deleteButton)
 
             toDo.textContent = element.toDo
             priority.textContent = element.priority
             category.textContent = element.category
             date.textContent = dateDisplay(element.dueDate)
 
             row.append(toDo,priority,category,date,checkMark,edit,deleteD)
             tableBody.append(row)
           }

        });
        }

    function dateDisplay (date) {
        if (date == "") {
            return "indefinite"
        }else if (isToday(date)) {
            return " today"
        }else if (isTomorrow(date)) {
            return "tomorrow"
        }else if (isFuture(date)) {
            return date
        }else {
            return "past deadline"
        }
    }

    function updateCategories (categoryArray) {
        const categories = document.querySelector("#categories")

        categories.innerHTML = ""
        
        categoryArray.toSorted().forEach(element => {

            const div = document.createElement("div")
    
            div.id = `category-${categoryArray.indexOf(element)}`
                
            const textDiv = document.createElement("div")

            textDiv.className = "category-name"
                                
            textDiv.textContent = element
                            
            div.append(textDiv)
    
            if (element !== "miscellaneous") {
    
                const removeButton = document.createElement("button")
    
                removeButton.className = "remove-category"
    
                const renameButton = document.createElement("button")
    
                renameButton.className = "rename-category"
    
                removeButton.textContent = "remove"
    
                renameButton.textContent = "rename"
    
                div.append(removeButton,renameButton)
            }
    
            categories.append(div) 
        });      
    }
 
    
    function updateCategoryDropdown (categoryArray) {
        
        const categoryDropDown = document.querySelector("#category")

        categoryDropDown.innerHTML = ""

        categoryArray.toSorted().forEach(element => {

            const newCategory = document.createElement("option")
            newCategory.textContent = element
            newCategory.value = element

            categoryDropDown.append(newCategory)
    
        });

    }

    function prepareRename (div) {

        const placeHolder = div.firstElementChild.textContent

        div.innerHTML = ""

        const inputText = document.createElement("input")

        inputText.placeholder = placeHolder

        const confirmRename = document.createElement("button")

        confirmRename.className = "rename-category-confirm"

        confirmRename.textContent = "rename"

        div.append(inputText,confirmRename)

    }

    function prepareEdit (row) {

        const index = row.id.slice(5)

        const oldValues = items.myItems[index]

        row.innerHTML = ""

        const toDo = document.createElement("td")
        const inputText = document.createElement("input")
        inputText.value = oldValues.toDo
        toDo.append(inputText)

        const priority = document.createElement("td")
        const selectPriority = document.createElement("select")
        displayOptions(items.myPriorities,selectPriority,oldValues.priority)
        priority.append(selectPriority)
        
        const category = document.createElement("td")
        const selectCategory = document.createElement("select")
        displayOptions(items.myCategories,selectCategory,oldValues.category)
        category.append(selectCategory)

        const date = document.createElement("td")
        const selectDate = document.createElement("input")
        selectDate.type = "date"
        selectDate.value = oldValues.dueDate
        date.append(selectDate)

        const confirmEdit = document.createElement("td")
        const confirmButton = document.createElement("button")
        confirmButton.textContent = "confirm"
        confirmButton.className = "edit-item-confirm"
        confirmEdit.append(confirmButton)

    
        row.append(toDo,priority,category,date,confirmEdit)

    }

    function displayOptions (array,div,oldValue) {
        array.forEach(element => {
            const option = document.createElement("option")
            option.value = element
            option.textContent = element
            if (oldValue === element) {
                option.selected = true
            }
            div.append(option)
        })
    }

    return {updateTable, updateCategories, updateCategoryDropdown, prepareRename, prepareEdit, showHistory}
})();

export {display};