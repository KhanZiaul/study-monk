const login = document.getElementById('login-container');
const register = document.getElementById('register-container');

document.getElementById('login-link').addEventListener("click",function(){
    login.style.display = 'none';
    register.style.display = 'block';
})

document.getElementById('register-link').addEventListener("click",function(){
    register.style.display = 'none';
    login.style.display = 'block';
})