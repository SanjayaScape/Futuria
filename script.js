const faqs = document.querySelectorAll(".faqbox");

faqs.forEach((faq) => {
    faq.addEventListener("click" , () => {
        if (!faq.classList.contains("active")) {
            faqs.forEach((f) => {
            f.classList.remove("active")
        })
        faq.classList.add("active")
        } else {
            faq.classList.remove("active")
        }
    })
})
const mobnav = document.querySelector(".mobnav") 
const ham = document.querySelector(".ham") 
ham.addEventListener("click", () => {
    mobnav.style.right = "0"
})
const close = document.querySelector(".butmobnav")
close.addEventListener("click", () => {
    mobnav.style.right = "-100%"
})