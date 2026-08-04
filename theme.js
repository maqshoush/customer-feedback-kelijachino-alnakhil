function loadTheme(){

let theme = localStorage.getItem("theme");


if(theme=="dark"){

document.body.classList.add("dark");

changeIcon();

}

}



function toggleTheme(){

document.body.classList.toggle("dark");


if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

}

else{

localStorage.setItem("theme","light");

}


changeIcon();

}



function changeIcon(){

let btn=document.getElementById("themeBtn");

if(!btn) return;


if(document.body.classList.contains("dark")){

btn.innerHTML="☀️";

}

else{

btn.innerHTML="🌙";

}

}



window.onload=function(){

loadTheme();

};
