// Initial load animations
gsap.from(".nav", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    
});



gsap.from(".content h2, .content p, .content button", {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
});

// Social icons bounce in
gsap.from(".social-icons span", {
    opacity: 0,
    y: -20,
    stagger: 0.15,
    duration: 0.8,
    delay: 0.5,
    ease: "back.out(1.7)"
});

// About section scroll animation
gsap.from(".container2 h2, .container2 p, .intro h3", {
    scrollTrigger: {
        trigger: ".container2",
        start: "top 80%"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
});
gsap.fromTo(".skills li", 
    { opacity: 0, scale: 0.5, transformOrigin: "center center" }, 
    { 
        opacity: 1, 
        scale: 1, 
        stagger: 0.08, 
        duration: 0.5, 
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".container2", // animate with About section
            start: "top 90%",
            once: true, // run once even if already visible
            immediateRender: false // prevent hiding before trigger
        }
    }
);



gsap.fromTo(".project-card", 
    { opacity: 0, y: 50, scale: 1 }, // start state
    { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 1, 
        stagger: 0.3, 
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".projects",
            start: "top 85%",
            once: true,
            immediateRender: false
        }
    }
);


// Contact section animation
gsap.from(".container4 h2, .contact .left, .contact form", {
    scrollTrigger: {
        trigger: ".container4",
        start: "top 80%"
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1
});

// Footer animation
gsap.from("footer > div", {
    scrollTrigger: {
        trigger: "footer",
        start: "top 90%"
    },
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8
});
