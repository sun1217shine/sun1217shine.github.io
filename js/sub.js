const mm = gsap.matchMedia();

// profile /////////////////////////////////////////////////////////
const profileSection = document.querySelector('.profile');
const profileItem = gsap.utils.toArray(".profile-item", profileSection);
const profileTl = gsap.timeline();

// why 텍스트 효과
profileTl.to(".profile-name span",{width:'auto', duration:1});

// 원형 효과
profileItem.forEach((item, j) => { profileTl.to(item, {opacity:1}, j * .5);},"+=1");


// work /////////////////////////////////////////////////////////
const workSection = document.querySelector(".work");
const workList = document.querySelector(".work-list");
const workItems = gsap.utils.toArray(".work-item");
const colorItems = document.querySelectorAll('.color-chip li[data-color]');

// 가로 스크롤
gsap.to(workList, {
    xPercent: -100 * (workItems.length - 1), 
    ease: "none", 
    scrollTrigger: {
        trigger: ".work-body", 
        start: "top top",      
        end: () => `+=${workList.offsetWidth}`, 
        pin: true,
        scrub: 1.5,          
        onToggle: (self) => {
            // self.isActive는 핀이 고정된 상태일 때 true가 됩니다.
            if (self.isActive) {
                workList.classList.add("active");
                workSection.classList.add("active"); 
            } else {
                workSection.classList.remove("active"); 
                workList.classList.remove("active");
            }
        }
    }
});

// 홈페이지 별 색상칩
colorItems.forEach(item => {
    const color = item.dataset.color; 
    item.style.setProperty('--chip-color', color);
});






// PC /////////////////////////////////////////////////////////
mm.add("(min-width: 993px)", () => {
    // introduction title 패딩 효과
    const introTit = document.querySelectorAll('.induction-tit span');
    introTit.forEach((item) => {
        gsap.to(item, {
            paddingLeft: 100, 
            duration: 1.5,  
            scrollTrigger: {
                trigger: item,
                start: "center bottom",
                end: "top top",
                scrub: 1,
            }
        });
    });











    return () => { };
});

// mobile /////////////////////////////////////////////////////////
mm.add("(max-width: 992px)", () => {




});






