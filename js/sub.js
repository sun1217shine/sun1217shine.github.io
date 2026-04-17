const mm = gsap.matchMedia();

// profile /////////////////////////////////////////////////////////
const profileSection = document.querySelector('.profile');
const profileItem = gsap.utils.toArray(".profile-item", profileSection);
const profileTl = gsap.timeline();


// profile 원형 효과
profileItem.forEach((item, j) => { profileTl.to(item, {opacity:1}, j * .3);},"+=1");


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
        markers:true,
        scrub: 1.5,          
        onToggle: (self) => {
            // self.isActive는 핀이 고정된 상태일 때 true가 됩니다.
            if (self.isActive) {
                workSection.classList.add("active"); 
            } else {
                workSection.classList.remove("active"); 
            }

        }
    }
});

// 홈페이지 별 색상칩
colorItems.forEach(item => {
    const color = item.dataset.color; 
    item.style.setProperty('--chip-color', color);
});


// design /////////////////////////////////////////////////////////
gsap.to(workList, {
    scrollTrigger: {
        trigger: ".work-body", 
        start: "top top",      
        markers:true,
        scrub: 1.5,          
        onToggle: (self) => {
            // self.isActive는 핀이 고정된 상태일 때 true가 됩니다.
            if (self.isActive) {
                workSection.classList.add("active"); 
            } else {
                workSection.classList.remove("active"); 
            }

        }
    }
});





// PC /////////////////////////////////////////////////////////
mm.add("(min-width: 993px)", () => {











    return () => { };
});

// mobile /////////////////////////////////////////////////////////
mm.add("(max-width: 992px)", () => {




});






