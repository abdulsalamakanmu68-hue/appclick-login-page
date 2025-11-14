const username = document.querySelector(".username");
const password = document.querySelector(".password");
const btn1 = document.querySelector(".signin");

btn1.addEventListener("click", function () {
     const usernameValue = username.value;
     const passwordValue = password.value;

if (usernameValue == "appclickict" && passwordValue == "appclick1234") {
     alert ("login sucessful");
} else {
     alert("wrong passwort or username");
}
});
//  const greeting = document.querySelector(".create");
//  const btn = document.querySelector(".log");

//  greeting.addEventListener("click", function(){
//      btn.textContent = "Welcome Boss";
//  });



// const button = document.querySelector(".button");
// const span = document.querySelector(".span");

// button.addEventListener("click", function () {
//     span.textContent = "Welcome boss";
// })


const button = document.querySelector(".create");
const span = document.querySelector("#span");

button.addEventListener("click", function () {
    span.replaceWith =  "welcome Boss" ;
});