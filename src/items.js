const items =(function () {
    const myItems = []

    const myCategories = ["miscellaneous"]

    const hiddenCategories = []

    const myPriorities = ["High","Normal","Low"]

    function createItem(completed,toDo,priority,category,dueDate ) {
        return {completed,toDo,priority,category,dueDate}
    }
    
    function addItem (i,j,k,l,m) {
        myItems.push(createItem(i,j,k,l,m))
        
    }
    
    function updateItem (div) {
        const index = div.id.slice(5)

        myItems[index].toDo = div.children[0].firstElementChild.value
        myItems[index].priority = div.children[1].firstElementChild.value
        myItems[index].category = div.children[2].firstElementChild.value
        myItems[index].dueDate = div.children[3].firstElementChild.value

    }

    function updateItemCheck (div) {

        const index = div.id.slice(5)

        myItems[index].completed ? myItems[index].completed = false : myItems[index].completed = true

    }
    function addCategory(string) {
        myCategories.push(string)
    }

    function hideUnhideCategory(string) {
        if (hiddenCategories.includes(string)) {

           hiddenCategories.splice(hiddenCategories.indexOf(string),1)

        }else {

            hiddenCategories.push(string)

        }
    }

    function removeCategory (id) {

        const index = id.slice(9)

        const toRemove = myCategories.splice(index,1) ////removes category from myCategories and we can use "toRemove" in the below line to find and also remove it from hiddenCategories
        
        if (hiddenCategories.indexOf(toRemove[0]) > -1) {

            hiddenCategories.splice(hiddenCategories.indexOf(toRemove[0]),1)

        }
    }

    function removeItem (id) {
        const index = id.slice(5)
        myItems.splice(index,1)
    }

    function switchCategory (oldName,newName) {
        myItems.map(element => {
            if (element.category === oldName) {
                element.category = newName
            }
        })
    }

    return {myPriorities,addItem,myItems,removeItem,updateItem,updateItemCheck,addCategory,myCategories,hiddenCategories,removeCategory,switchCategory,hideUnhideCategory}
})();



export {items}