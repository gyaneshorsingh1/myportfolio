


const sidebar = document.querySelector(".sidebar");
function showSidebar(){
    
    sidebar.style.display = 'flex';
}function hideSidebar(){
    sidebar.style.display = 'none'
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




//animation for all the content of the body//
var tl= gsap.timeline()

tl.from(".nav, .nav span, .nav .page,.social-icons",{
    y: -100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.3
})
tl.from(".social-icons span",{
    x: 300,
    duration:0.5,
    delay:0.1,
    opacity:0,
    stagger:0.2
})
tl.from(".content h2,.content button",{
    x: 300,
    duration:1,
    opacity:0,
    
})
tl.from(".content p",{
    x: -300,
    duration:2,
    opacity:0,
    
})
// tl.from(".content button",{
//     y:200,
//     opacity:0,
//     delay:0.01
// })



