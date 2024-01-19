const formopenbtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formcontainer = document.querySelector(".form_container"),
formclosebtn = document.querySelector(".form_close"),
signupbtn = document.querySelector("#signup"),
loginbtn = document.querySelector("#signup"),
pwshowhide = document.querySelectorAll(".pw_hide");

formopenbtn.addEventListener("click" , ()=> home.classList.add("show"));
formclosebtn.addEventListener("click" , ()=> home.classList.remove("show"));