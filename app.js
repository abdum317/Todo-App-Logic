import { auth } from "./config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


let button = document.getElementById("button");
let email = document.getElementById("email");
let password = document.getElementById("password");

button.addEventListener("click" , ()=>{
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    window.open("./sendver.html", "Send Verification", "height=400, width=800 top=200, left=400");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    alert("Please give the correct value");
  });
})