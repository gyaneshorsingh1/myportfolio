


const sidebar = document.querySelector(".sidebar");
function showSidebar(){
    
    sidebar.style.display = 'flex';
    sidebar.style.left = "0%";
    hidebar.style.display = 'flex';
    hidebar.style.left = "0%"
}function hideSidebar(){
    sidebar.style.display = 'none';
    hidebar.style.display = 'none';
    hidebar.style.left = "0%"
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
tl.from(".content h2",{
    x: 300,
    duration:1,
    opacity:0,
    
})
tl.from(".content p",{
    x:-300,
    duration:2,
    opacity:0,
    
})
tl.from(".content button",{
    y:20,
    opacity:0,
    delay:0,
    duration:1,
    repeat: -1,
    yoyo: true
})
gsap.from(".container2 h2, .container2 h3",{
    scale:0,
    opacity:0,
    y:-50,
    duration:1,
    delay:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".container2 h2,.container2 h3",
        scroller:"body",
        start:"top 50%",
        
    
    }
})
gsap.from(".container2 p",{
    scale:0,
    opacity:0,
    x: 300,
    delay:1,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"p",
        scroller:"body",
        start:"top 50%",
        end: "top 10%",
        scrub:7
    
    }
})
gsap.from(".container2 .skills",{
    scale:0,
    opacity:0,
    x:500,
    delay:1,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"p",
        scroller:"body",
        start:"top 50%",
        end: "top 10%",
        scrub:7
    
    }
})
gsap.from(".container3 h2",{
    scale:0,
    opacity:0,
    y:-200,
    duration:3,
    stagger:0.3,
    delay:1,
    scrollTrigger:{
        trigger:".container3 h2",
        scroller:"body",
        start:"top 50%",
        end:"top 20%",
        scrub:3
        
    
    }
})


//project1//
gsap.from(".container3 .project1 .right",{
    scale:0,
    opacity:0,
    x: 300,
    y: -200,
    delay:1,
    duration:2,
    stagger:0.3,
    scrollTrigger:{
        trigger:".container3 .project1 .right",
        scroller:"body",
        start:"top 80%",
        end:"top 40%",
        scrub:3,
        
        
    
    }
})
gsap.from(".container3 .project1 img",{
    scale:0,
    opacity:0,
    x: -300,
    y: -200,
    delay:1,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".container3 .project1 img",
        scroller:"body",
        start:"top 80%",
        end:"top 40%",
        scrub:3
        
    
    }
})

//project2//

gsap.from(".container3 .project2 .right",{
    scale:0,
    opacity:0,
    x: -300,
    y: -200,
    delay:1,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".container3 .project2 .right",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:3
        
    
    }
})
gsap.from(".container3 .project2 img",{
    scale:0,
    opacity:0,
    x: 300,
    y: -200,
    delay:1,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".container3 .project2 img",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:3
        
    
    }
})


//project3//

gsap.from(".container3 .project3 .right",{
    scale:0,
    opacity:0,
    x: 300,
    y: -200,
    delay:1,
    duration:2,
    stagger:0.3,
    scrollTrigger:{
        trigger:".container3 .project3 .right",
        scroller:"body",
        start:"top 90%",
        end:"top 50%",
        scrub:3
    
    }
})
gsap.from(".container3 .project3 img",{
    scale:0,
    opacity:0,
    x: -500,
    y: -300,
    delay:1,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".container3 .project3 img",
        scroller:"body",
        start:"top 90%",
        end:"top 50%",
        scrub:3
        
    
    }
})


//contact form//
gsap.from(".container4 h2",{
    scale:0,
    opacity:0,
    y:-50,
    delay:1,
    duration:2,
    stagger:0.3,
    scrollTrigger:{
        trigger:".container4 h2",
        scroller:"body",
        start:"top 90%",
        end:"top 50%",
        scrub:3
        
    }
})


gsap.from(".container4 .right",{
    scale:0,
    opacity:0,
    x: 300,
    y: -200,
    delay:1,
    duration:2,
    stagger:0.3,
    scrollTrigger:{
        trigger:".container4 .right",
        
        scroller:"body",
        start:"top 85%",
        end:"top 50%",
        scrub:3
        
    
    }
})
gsap.from(".container4 img",{
    scale:1.5,
    opacity:0,
    x: -300,
    y: -100,
    delay:1,
    duration:2,
    stagger:0.3,
    scrollTrigger:{
        trigger:".container4 img",
        scroller:"body",
        start:"top 85%",
        end:"top 50%",
        scrub:3
        
    
    }
})


//footer ///

gsap.from("footer .quick-links, footer .footer-about, footer .social-medias, footer .contact",{
    scale:1.5,
    opacity:0,
    x: -300,
    y: -100,
    delay:1,
    duration:3,
    stagger:1,
    scrollTrigger:{
        trigger:"footer .quick-links, footer .footer-about, footer .social-medias, footer .contact",
        scroller:"body",
        start:"top 90%",
        end: "top 60%",
        scrub: 2
        
    }
})




