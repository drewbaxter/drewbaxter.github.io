// Simple animation for scrolling effects (optional)
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.clientHeight;
            if (sectionTop <= window.innerHeight && sectionTop + sectionHeight >= 0) {
                section.style.animation = "fadeIn 1s ease-out";
            }
        });
    });
});
