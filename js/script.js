"use strict";
document.addEventListener("DOMContentLoaded", () => {
    // plugin
    gsap.registerPlugin(ScrollTrigger);
    feather.replace();



    const porfileTxt = gsap.utils.toArray('.profile .txt');
    porfileTxt.forEach(text => {
        gsap.to(text, {
            backgroundSize: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: text,
                start: 'center 96%',
                end: 'center 70%',
                scrub: 2,
            },
        });
    });









});