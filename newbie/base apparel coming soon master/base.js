let imgEl = document.querySelector("#img-el")
let pEl = document.querySelector("#p-el")

imgEl.addEventListener("click", function validate(){
    let emailEl = document.querySelector("#email-el")
    emailEl.value;
    
  if (emailEl.checkValidity()) {
    emailEl.value = ""
    pEl.textContent = "Thank you"
    document.querySelector("#error-el").style.display = "none";
  } else {
    pEl.textContent = "Please provide a valid email"
    document.querySelector("#error-el").style.display = "block";
  }
})


