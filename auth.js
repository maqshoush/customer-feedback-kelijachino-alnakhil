function checkSession(){

let loggedIn = localStorage.getItem("loggedIn");
alert(
"الدخول: " + loggedIn +
"\nآخر نشاط: " + localStorage.getItem("lastActivity")
);
let lastActivity = localStorage.getItem("lastActivity");


if(loggedIn!="true" || !lastActivity){

location.replace("admin.html");

return;

}


let now = Date.now();

let diff = (now - Number(lastActivity)) / 1000 / 60;


if(diff >= 1/60){

localStorage.clear();

location.replace("admin.html");

}

}


// تحديث وقت النشاط

document.addEventListener("mousemove",function(){

localStorage.setItem("lastActivity",Date.now());

});


document.addEventListener("click",function(){

localStorage.setItem("lastActivity",Date.now());

});


document.addEventListener("keydown",function(){

localStorage.setItem("lastActivity",Date.now());

});


checkSession();
