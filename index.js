document.addEventListener("DOMContentLoaded",()=>{
    let form =document.querySelector("form");
    console.log(form)
    form.addEventListener(
        'submit',(e) =>{
            e.preventDefault()
            myShoppingList((e.target.new_item.value))
            form.reset();
        }
    )




})

function myShoppingList (myList){
    // let ul=document.createElement("ul");
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.textContent = "  Mark Purchased";
    btn.addEventListener("click", handleStrikethrough)
    li.textContent = `${myList} `
    li.appendChild(btn);
    document.querySelector("#myList").appendChild(li)

}

function handleStrikethrough(e){
     e.target.parentNode.style.textDecorationLine= "line-through";
}


