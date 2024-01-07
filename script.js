


const sidebar = document.querySelector(".sidebar");
function showSidebar(){
    
    sidebar.style.display = 'flex';
}function hideSidebar(){
    sidebar.style.display = 'none'
}

document.getElementById("weatherApp").addEventListener("click", function(){
    window.open("https://gyaneshorsingh1.github.io/weatherapp/","_blank");
});

document.getElementById("servicePorvider").addEventListener("click",function(){
    window.open("https://mockvita.com/", "_blank");

});
document.getElementById("tempCon").addEventListener("click",function(){
    window.open("https://gyaneshorsingh1.github.io/tempconverter/", "_blank");

});



