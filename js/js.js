let menuTop = document.querySelectorAll('a[href*="#"]');
for (let anchor of menuTop) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        let blockId = anchor.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};

let spin = document.querySelectorAll(".spin"),
    skill = document.querySelector(".skills"),
    skillsBlock = document.querySelectorAll(".skills-block"),
    procent = document.querySelectorAll(".procent");

for (let p = 0; p < procent.length; p++) {
    let small = 0;
    let medium = 0;
    let big = 0;
    let big2 = 0;
    let procentData = procent[p].dataset.procent;

    function smallInterval() {
        let intervalSmallNum = setInterval(() => {
            small++
            if (procentData <= 20 && small <= procentData) {
                procent[2].textContent = small + '%';
            } else if (small == 10) {
                setTimeout(intervalSmallNum)
            }

        }, 320);
    };
    function mediumInterval() {
        let intervalMedNum = setInterval(() => {
            medium++
            if (procentData <= 60 && medium <= procentData) {
                procent[3].textContent = medium + '%';
            } else if (medium == 50) setTimeout(intervalMedNum)

        }, 100);
    };
    function bigInterval() {
        let intervalBigNum = setInterval(() => {
            big++
            if (procentData <= 80 && big <= procentData) {
                procent[0].textContent = big + '%';
            } else if (big == 70) setTimeout(intervalBigNum)

        }, 60);
    };
    function big2Interval() {
        let intervalBig2Num = setInterval(() => {
            big2++
            if (procentData <= 80 && big2 <= procentData) {
                procent[1].textContent = big2 + '%';
            } else if (big2 == 70) setTimeout(intervalBig2Num)

        }, 60);
    };
    window.addEventListener("scroll", function () {
        if (pageYOffset >= 250) {
            smallInterval();
            mediumInterval();
            bigInterval();
            big2Interval();
        };
    });
}
let menu = document.querySelectorAll(".menu-link");
let m = document.querySelector("#slills");
for (let i = 0; i < skillsBlock.length; i++) {
    for (let b = 0; b <= 20; b++) {
        window.addEventListener("scroll", function () {
            if (pageYOffset > 250 && skillsBlock[i].children[b].classList.contains("spin")) {
                skillsBlock[i].children[b].classList.remove("spin");
                skillsBlock[i].children[b].classList.add("elements" + [b] + "_anim");
            } else if (pageYOffset > 250 && skillsBlock[i].children[b].classList.contains("spin_on")) {
                skillsBlock[i].children[b].classList.remove("spin_on");
                skillsBlock[i].children[b].classList.add("elements" + [b] + "_animation");
            };
            let width = document.body.offsetWidth;
            for (let i = 0; i < menu.length; i++) {
                if (pageYOffset < 440 || pageYOffset < 800 && width < 768) {
                    menu[1].classList.remove("active");
                    menu[2].classList.remove("active");
                    menu[3].classList.remove("active");
                    menu[0].classList.add("active");
                } else if (pageYOffset > 444 && pageYOffset < 888 || pageYOffset > 800 && pageYOffset < 1400 && width <= 768
                    || pageYOffset > 800 && pageYOffset < 1800 && width <= 400) {
                    menu[0].classList.remove("active");
                    menu[2].classList.remove("active");
                    menu[3].classList.remove("active");
                    menu[1].classList.add("active");
                } else if (pageYOffset > 888 && pageYOffset < 1000 || pageYOffset > 888 && pageYOffset < 1600 && width <= 1200
                    || pageYOffset > 1400 && pageYOffset < 2100 && width <= 768 || pageYOffset > 1400 && pageYOffset < 2600 && width <= 480
                    || pageYOffset > 1800 && pageYOffset < 3000 && width <= 400) {
                    menu[1].classList.remove("active");
                    menu[3].classList.remove("active");
                    menu[2].classList.add("active");
                } else if (pageYOffset > 1100 || pageYOffset > 2600 && width <= 480 || pageYOffset > 3000 && width <= 400) {
                    menu[0].classList.remove("active");
                    menu[1].classList.remove("active");
                    menu[2].classList.remove("active");
                    menu[3].classList.add("active");
                }
            }
        });
    };
};
let aboutBtn = document.querySelector(".about__btn"),
    aboutGlobal = document.querySelector(".wrapp-about"),
    aboutMore = document.querySelector(".about__wrapp-more"),
    slider = document.querySelector(".slider");

aboutBtn.addEventListener("click", function () {
    aboutGlobal.classList.toggle("wrapp-about_hide");
    aboutMore.classList.toggle("about__wrapp-more_show");
    slider.classList.toggle("slider_active");
    this.classList.toggle("about__btn_active")
});
let contactsModal = document.querySelectorAll(".contacts__modal"),
    contactsLink = document.querySelectorAll(".contacts__link");

for (let i = 0; i < contactsLink.length; i++) {
    contactsLink[i].addEventListener("click", function () {
        if (this == contactsLink[0]) {
            contactsModal[0].classList.toggle("show");
            contactsModal[1].classList.remove("show");
        } else {
            contactsModal[1].classList.toggle("show");
            contactsModal[0].classList.remove("show");
        }

    })
}
