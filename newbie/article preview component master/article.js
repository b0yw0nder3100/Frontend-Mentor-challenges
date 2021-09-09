const shareEl = document.querySelector("#share-el")
const sharedEl = document.querySelector("#shared-el")

shareEl.addEventListener("click", function(){
    if (sharedEl.style.display === "none") {
        sharedEl.style.display = "inline-flex"
    } else {
        sharedEl.style.display = "none"
    }
})
