let submitBtn = document.querySelector("#submit")
console.log(submitBtn)
let pEl = document.querySelector("#comment")
console.log(pEl)

submitBtn.addEventListener("click", function validate(){
    var emailEl = document.querySelector("#mail").value;
    if (emailEl == null || emailEl == "" ) {
        document.querySelector("#mail").value = " "
        pEl.textContent = "Please provide a valid email address"
        document.querySelector("#mail").placeholder = "example@email.com"
        document.querySelector("#mail").style.borderColor = "hsl(0, 100%, 74%)"
        return false;
    } else {
        document.querySelector("#mail").value = " "
    }
})

