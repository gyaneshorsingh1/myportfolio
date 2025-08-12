


const sidebar = document.querySelector(".sidebar");
const hidebar = document.querySelector("#hidebar");
const myintro = document.querySelector("#myintro");
function showSidebar() {
  document.querySelector('.sidebar').classList.add('active');
}

function hideSidebar() {
  document.querySelector('.sidebar').classList.remove('active');
}

//click events for social medias//

//events for github
document.getElementById("gitHub").addEventListener("click", function(){
    window.open("https://github.com/gyaneshorsingh1","_blank");
});

//events for linkedin
document.getElementById("linkedIn").addEventListener("click", function(){
    window.open("https://www.linkedin.com/in/gyaneshor-prasad-singh/","_blank");
});

//events for instagram
document.getElementById("instaGram").addEventListener("click", function(){
    window.open("https://www.instagram.com/princerahul132/","_blank");
});


//events for facebook
document.getElementById("faceBook").addEventListener("click", function(){
    window.open("https://www.facebook.com/rahulsingh.hancy1","_blank");
});






//links of projects
document.getElementById("weatherApp").addEventListener("click", function(){
    window.open("https://gyaneshorsingh1.github.io/weatherapp/","_blank");
});

document.getElementById("servicePorvider").addEventListener("click",function(){
    window.open("https://mockvita.com/", "_blank");

});
document.getElementById("tempCon").addEventListener("click",function(){
    window.open("https://gyaneshorsingh1.github.io/tempconverter/", "_blank");

});











