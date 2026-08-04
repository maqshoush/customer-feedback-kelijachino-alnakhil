function updateActivity(){
localStorage.setItem("lastActivity", Date.now());
}


// نشاط المستخدم في جميع الأجهزة

document.addEventListener("click", updateActivity);

document.addEventListener("keydown", updateActivity);

document.addEventListener("touchstart", updateActivity);

document.addEventListener("mousemove", function(){

// للكمبيوتر فقط
localStorage.setItem("lastActivity", Date.now());

});



// فحص الجلسة

function checkSession(){

let loggedIn = localStorage.getItem("loggedIn");

let lastActivity = localStorage.getItem("lastActivity");


if(loggedIn!="true" || !lastActivity){

location.replace("admin.html");
return;

}


let now = Date.now();

let diff = (now - Number(lastActivity)) / 1000 / 60;


if(diff >= 10){

localStorage.clear();

location.replace("admin.html");

}

}


// فحص كل دقيقة

setInterval(checkSession,60000);


checkSession();
