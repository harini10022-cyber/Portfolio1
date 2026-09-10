// Smooth scrolling
document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Scroll animation
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    observer.observe(section);
});


// Current year
document.querySelector("footer p").innerHTML =
    `© ${new Date().getFullYear()} Harini R. All Rights Reserved.`;