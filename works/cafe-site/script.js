const backToTop = document.querySelector(".back-to-top");
const footer = document.querySelector(".footer");

backToTop.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop < windowHeight) {
        backToTop.style.bottom = (windowHeight - footerTop + 30) + "px";
    } else {
        backToTop.style.bottom = "30px";
    }
});