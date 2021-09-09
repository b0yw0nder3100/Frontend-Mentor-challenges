let img = document.getElementsByClassName("arrow");

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var p = this.nextElementSibling;

        if (p.style.display === "block") {
            p.style.display = "none";
            img[i].style.transform = "rotate(0deg)";
        } else {
            p.style.display = "block";
            img[i].style.transform = "rotate(180deg)";
        }
    });
}













