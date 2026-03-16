
const mm = gsap.matchMedia();

// work pin
const workItem = gsap.utils.toArray(".work-item");

workItem.forEach((item, i) => {
    gsap.set(item, { zIndex: i });
    // 2. 카드 고정 및 쌓기 효과
    ScrollTrigger.create({
        trigger: item,
        start: "top top",      // 화면 상단에 닿으면 고정
        endTrigger: ".work-list", // 전체 리스트가 끝날 때까지 고정 유지 (선택사항)
        end: "bottom bottom",
        pin: true,             // 핵심: 여기서 고정!
        pinSpacing: false,     // 다음 카드가 빈 공간 없이 올라오게 함
        scrub: true,
        onEnter: () => item.classList.add("active"),
        onLeaveBack: () => item.classList.remove("active"),
    });

});



// profile /////////////////////////////////////////////////////////
const circleDraw = gsap.timeline({
    scrollTrigger: {
        trigger: ".profile",
        start: "24% 15%",
        end: "60% 15%",
        scrub: 1,
    }
});
circleDraw.to('.profile .circle-draw', { strokeDashoffset: 0, stagger: 0.02 });


gsap.set('.profile .circle-inner', { yPercent: 150, filter: "blur(10px)", autoAlpha: 0 });
gsap.to('.profile  .circle-inner', 1,
    {
        yPercent: -50,
        filter: "blur(0px)",
        autoAlpha: 1,
        scrollTrigger: {
            trigger: ".profile",
            start: "15% 15%",
            end: "22% 15%",
            scrub: 1,
        }
    });















// skill progressbar 효과
const progressBars = gsap.utils.toArray(".progress .line");
progressBars.forEach((item) => {
    gsap.from(item, {
        width: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".profile",
            start: "top top",
            end: "10% 10%",
            scrub: 1.5
        }
    });
});







// PC /////////////////////////////////////////////////////////
mm.add("(min-width: 993px)", () => {











    return () => { };






});

// mobile /////////////////////////////////////////////////////////
mm.add("(max-width: 992px)", () => {




});






