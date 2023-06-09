const loginForm= document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //string 문자열만 있는 변수는 주로 대문자로 작성
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;    
    localStorage.setItem(USERNAME_KEY, username);
    
    paintGreetions(username);
}

function paintGreetions(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}!`;
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit );
} else {
    //show the greeting
    paintGreetions(saveUsername);
}


