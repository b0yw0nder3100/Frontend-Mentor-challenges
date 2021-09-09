const submitBtn = document.querySelector("#submitbtn")
submitBtn.addEventListener("click", function validate() {
    submitBtn.style.marginTop = "30px"
    var f = document.querySelector("#firstname").value;
    if (f == null || f == "") {
        first.textContent = "First name cannot be empty"
        document.querySelector("#names").style.display = "block"
        document.querySelector("#firstname").style.borderColor = "hsl(0, 100%, 74%"
        document.querySelector("#firstname").placeholder = " "
        return false;
    } else {
        
    }
})

submitBtn.addEventListener("click", function validate() {
    var l = document.querySelector("#lastname").value;
    if (l == null || l == "") {
        last.textContent = "Last name cannot be empty"
        document.querySelector("#lastname").placeholder = " "
        document.querySelector("#lasts").style.display = "block"
        document.querySelector("#lastname").style.borderColor = "hsl(0, 100%, 74%"
        return false;
    }
})

submitBtn.addEventListener("click", function validate() {
    var e = document.querySelector("#email").value;
    if (e == null || e == "") {
        mail.textContent = "Looks like this is not an email"
        document.querySelector("#email").placeholder = "email@example/com"
        document.querySelector("#emails").style.display = "block"
        document.querySelector("#email").style.borderColor = "hsl(0, 100%, 74%"
        return false;
    }
})

submitBtn.addEventListener("click", function validate() {
    var p = document.querySelector("#password").value;
    if (p == null || p == "") {
        pass.textContent = "Password cannot be empty"
        document.querySelector("#passs").style.display = "block"
        document.querySelector("#password").placeholder = " "
        document.querySelector("#password").style.borderColor = "hsl(0, 100%, 74%"
        return false;
    } else {
        p.value = " "
    }
})





