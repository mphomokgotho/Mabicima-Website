/* =========================
   MABICIMA WEBSITE JAVASCRIPT
========================= */


/* =========================
   HERO SLIDESHOW DOTS
========================= */

const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function changeDot() {

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    if (dots[currentSlide]) {
        dots[currentSlide].classList.add("active");
    }

    currentSlide++;

    if (currentSlide >= dots.length) {
        currentSlide = 0;
    }
}


/*
    The CSS slideshow changes every 6 seconds.
    Keep the dots synchronized with it.
*/

setInterval(changeDot, 6000);


/* =========================
   SCROLL REVEAL
========================= */

const revealSections =
    document.querySelectorAll(".reveal-section");

const revealCards =
    document.querySelectorAll(".reveal-card");


const revealObserver = new IntersectionObserver(

    function(entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealSections.forEach(section => {

    revealObserver.observe(section);

});


revealCards.forEach(card => {

    revealObserver.observe(card);

});


/* =========================
   NAVIGATION SHADOW
========================= */

const header = document.getElementById("header");


window.addEventListener("scroll", function() {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================
   SMOOTH NAVIGATION
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================
   CURRENT YEAR
========================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================
   PAGE LOAD EFFECT
========================= */

window.addEventListener("load", function() {

    document.body.classList.add("loaded");

});
