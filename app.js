import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
GoogleAuthProvider,
signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getFirestore,
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_PROJECT.firebaseapp.com",
projectId: "YOUR_PROJECT_ID",
storageBucket: "YOUR_PROJECT.appspot.com",
messagingSenderId: "YOUR_SENDER_ID",
appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.signUp = async function(){
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

try{
await createUserWithEmailAndPassword(auth,email,password);
alert("Account created successfully");
}catch(error){
alert(error.message);
}
}

window.login = async function(){
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

try{
await signInWithEmailAndPassword(auth,email,password);
alert("Login successful");
}catch(error){
alert(error.message);
}
}

window.googleLogin = async function(){
const provider = new GoogleAuthProvider();

try{
await signInWithPopup(auth, provider);
alert("Google Login Successful");
}catch(error){
alert(error.message);
}
}

window.uploadProduct = async function(){
const name = document.getElementById("productName").value;
const price = document.getElementById("productPrice").value;
const image = document.getElementById("productImage").value;
const description = document.getElementById("productDescription").value;

try{
await addDoc(collection(db,"products"),{
name,
price,
image,
description
});

alert("Product Uploaded Successfully");
}catch(error){
alert(error.message);
}
  } 
