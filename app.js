let form = document.querySelector("#todo-form");
let newTodo = document.querySelector("#todo");
let button = document.querySelector("#button");
let div = document.querySelector("#div");


function newElement(element , text){
    let li = document.createElement(element);
    let liText = document.createTextNode(text);
    li.appendChild(liText);
    return li;
    // newTodo.appendChild(li);
}

let liMake;
function todoFunc(){
    liMake = newElement("LI" , form.value);
    newTodo.appendChild(liMake);
    let delBut = newElement("BUTTON" , "delete");
    delBut.setAttribute("onclick" , "deleteTodo(this)");
    liMake.appendChild(delBut);
    let editBut = newElement("BUTTON" , "Edit");
    editBut.setAttribute("onclick" , "editTodo(this)");
    liMake.appendChild(editBut);


    form.value = "";
    form.focus();
}
function deleteTodo(element){
    newTodo.removeChild(element.parentNode);
}


// function editTodo(element){
//     let oldEle = element.parentNode.childNodes[0].nodeValue;
//     form.value = oldEle;
//     // newTodo.removeChild(element.parentNode);
//     button.innerHTML = "save";
//     let abc = button.setAttribute("onclick" , "save()")
//     // let newEl = newElement("LI" , form.value);
// }
// function save(){
//     let newEl = newElement("LI" , form.value);
// }
let oldEle;
function editTodo(element){
    oldEle = element.parentNode;
    // console.log(oldEle);
    let saveButton = newElement("BUTTON" , "save");
    saveButton.setAttribute("onclick" , "changedValue()")
    div.appendChild(saveButton);
    let valueInForm = element.parentNode.childNodes[0].nodeValue;
    form.value = valueInForm;

}
function changedValue(){
    let newEl = newElement("LI" , form.value);
    let delBut = newElement("BUTTON" , "delete");
    delBut.setAttribute("onclick" , "deleteTodo(this)");
    newEl.appendChild(delBut);
    let editBut = newElement("BUTTON" , "Edit");
    editBut.setAttribute("onclick" , "editTodo(this)");
    newEl.appendChild(editBut);
    newTodo.replaceChild(newEl , oldEle);
    // console.log(div.childNodes[3]);
    div.removeChild(div.childNodes[3])
}


