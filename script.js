// =============================
// PHM HCC WEBSITE JAVASCRIPT
// =============================

// Mobile Navigation
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Sticky Navbar Shadow
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

// Reveal Sections on Scroll
const sections = document.querySelectorAll("section");

const revealSection = () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

// Back to Top Button
const topButton = document.createElement("button");
topButton.innerHTML = "↑";
topButton.id = "topBtn";
document.body.appendChild(topButton);

topButton.style.display = "none";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// Footer Current Year
const footer = document.querySelector("footer p:last-child");

if(footer){
    footer.innerHTML = "&copy; " + new Date().getFullYear() + " PHM HCC. All Rights Reserved.";
}