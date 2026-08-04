function checkSession(){

let loggedIn = localStorage.getItem("loggedIn");

let lastActivity = localStorage.getItem("lastActivity");


if(loggedIn!="true" || !lastActivity){

localStorage.clear();

location.replace("admin.html");

return;

}


let now = Date.now();

let diff = (now - Number(lastActivity)) / 1000 / 60;


// اختبار مؤقت 30 ثانية
if(diff >= 0.5){

localStorage.clear();

location.replace("admin.html");

}

}


// تحديث وقت النشاط

function updateActivity(){

localStorage.setItem("lastActivity",Date.now());

}


document.addEventListener("mousemove",updateActivity);

document.addEventListener("click",updateActivity);

document.addEventListener("keydown",updateActivity);

document.addEventListener("touchstart",updateActivity);


// فحص الجلسة عند فتح الصفحة

checkSession();


// إعادة الفحص كل ثانية

setInterval(checkSession,1000);
