/* =========================
   MABICIMA WEBSITE JAVASCRIPT
========================= */


/* =========================
   SLIDESHOW
========================= */

const dots = document.querySelectorAll(".dot");

let currentSlide = 0;


/*
   The CSS changes the image every 6 seconds.
   This JavaScript keeps the dots synchronized.
*/

function updateDots() {

    dots.forEach((dot, index) => {

        if (index === currentSlide) {

            dot.classList.add("active");

        } else {

            dot.classList.remove("active");

        }

    });

}


/* Automatically move to the next image */

setInterval(() => {

    currentSlide++;

    if (currentSlide >= 4) {

        currentSlide = 0;

    }

    updateDots();

}, 6000);


/* Allow visitors to click the dots */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;

        updateDots();

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".reveal-section, .reveal-card"
);

const observer = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach((element) => {

    observer.observe(element);

});


/* =========================
   HEADER SHADOW ON SCROLL
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================
   SMOOTH NAVIGATION
========================= */

const navigationLinks = document.querySelectorAll(
    'nav a[href^="#"]'
);

navigationLinks.forEach((link) => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================
   CURRENT YEAR
========================= */

const currentYear =
    document.getElementById("current-year");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================
   PAGE LOAD
========================= */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});
