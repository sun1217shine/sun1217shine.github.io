'use strict';
document.addEventListener('DOMContentLoaded', () => {
    // plugin
    const lenis = new Lenis();
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    // 스크롤 부드럽게
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);


    

    // PC /////////////////////////////////////////////////////////
    mm.add("(min-width: 993px)", () => {
        // 마우스 글자 따라 다니기
        window.addEventListener("mousemove", e => {
            gsap.to(".cursor .txt", {
                x: e.clientX,
                y: e.clientY,
                duration: 0.8,
                ease: "power2.out",
                stagger: {
                    each: 0.05,
                }
            });
            gsap.to(".cursor .txt span", {
                x: e.clientX + 10,
                y: e.clientY + 10,
                duration: 0.8,
                ease: "power2.out",
                stagger: {
                    each: 0.05,
                }
            });
        });

        // a 태그에 마우스 올렸을 때 글자 및 색상 변경
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                updateCursorText("click!", "#FFFF12", "1px #FFFF12");
            });
            link.addEventListener('mouseleave', () => {
                updateCursorText("scroll down", "#4747D4", "1px #4747D4");
            });
            link.addEventListener('click', () => {
                updateCursorText("scroll down", "#4747D4", "1px #4747D4");
            });
        });
        function updateCursorText(text, color, stroke) {
            const cursorTexts = document.querySelectorAll('.cursor .txt');
            cursorTexts.forEach(txt => {
                const span = txt.querySelector('.cursor span');
                if (span) {
                    span.textContent = text;
                    span.style.color = color;
                } else {
                    txt.textContent = text;
                    txt.style.webkitTextStroke = stroke;
                }
            });
            gsap.to(".cursor .txt", { duration: 0.3 });
        }
    });



});