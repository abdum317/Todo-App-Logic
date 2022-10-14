import { db, auth } from "./config.js";
import { collection, addDoc, Timestamp, getDocs, where, query, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";






let form = document.querySelector("#todo-form");
let newTodo = document.querySelector("#todo");
let button = document.querySelector("#button");
let div = document.querySelector("#div");


function newElement(element, text) {
    let li = document.createElement(element);
    let liText = document.createTextNode(text);
    li.appendChild(liText);
    return li;
    // newTodo.appendChild(li);
}
let liMake;
let var1 = {};



window.todoMake = async function () {



    liMake = newElement("LI", form.value);
    newTodo.appendChild(liMake);
    let delBut = newElement("BUTTON", "delete");
    delBut.setAttribute("onclick", "deleteTodo(this)");
    liMake.appendChild(delBut);
    let editBut = newElement("BUTTON", "Edit");
    editBut.setAttribute("onclick", "editTodo(this)");
    liMake.appendChild(editBut);



    let sendDoc = await addDoc(collection(db, "todos"), {
        todo: form.value,
        uid: auth.currentUser.uid,
        todoCreateDate: Timestamp.fromDate(new Date())
    })


    form.value = "";
    form.focus();



}

window.deleteTodo = async function (element) {
    console.log(id);
    newTodo.removeChild(element.parentNode);
    // await deleteDoc(doc(db, "todos", "abdullah"));
}

let oldEle;
window.editTodo = function (element) {
    oldEle = element.parentNode;
    // console.log(oldEle);
    let saveButton = newElement("BUTTON", "save");
    saveButton.setAttribute("onclick", "changedValue()")
    div.appendChild(saveButton);
    let valueInForm = element.parentNode.childNodes[0].nodeValue;
    form.value = valueInForm;

}
window.changedValue = function () {
    let newEl = newElement("LI", form.value);
    let delBut = newElement("BUTTON", "delete");
    delBut.setAttribute("onclick", "deleteTodo(this)");
    newEl.appendChild(delBut);
    let editBut = newElement("BUTTON", "Edit");
    editBut.setAttribute("onclick", "editTodo(this)");
    newEl.appendChild(editBut);
    newTodo.replaceChild(newEl, oldEle);
    // console.log(div.childNodes[3]);
    div.removeChild(div.childNodes[3])
}



