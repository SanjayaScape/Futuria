const mobnav = document.querySelector(".mobanav")
const close = document.querySelector(".close")
close.addEventListener("click", () => {
    mobnav.style.right = "-101%";
})
const ham = document.querySelector(".ham")
ham.addEventListener("click", () => {
    mobnav.style.right = "0";
})
const faqboxs = document.querySelectorAll(".faqbox")
faqboxs.forEach((faqbox) => {
    faqbox.addEventListener("click" , () => {
        if (faqbox.classList.contains("active")) {
            faqbox.classList.remove("active")
        } else {
            faqboxs.forEach((f) => {
                f.classList.remove("active")
            })
            faqbox.classList.add("active")
        }
    })
})
const scrollers = document.querySelectorAll(".scroll");
scrollers.forEach((scroller) => {
    scroller.addEventListener("wheel", (e) => {
    e.preventDefault()
    scroller.scrollLeft += e.deltaY
})
})