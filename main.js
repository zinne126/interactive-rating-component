const feedback = document.getElementById("feedback-box");
const btn =document.querySelectorAll(".btn-rating");
const submitBtn = document.getElementById("submit");
const thankYou = document.getElementById("thank-you-box");
const selectedRating = document.getElementById("selected-rating");

submitBtn.addEventListener("click", ()=>{
    thankYou.classList.remove("hidden")
    feedback.style.display ="none"
} )

btn.forEach((btn) =>{
    btn.addEventListener("click", () =>{
        selectedRating.innerHTML = btn.innerHTML
    })
})