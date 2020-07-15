
const portraitElement = document.getElementById("portrait")

window.addEventListener("scroll", (event)=> {
    if(window.pageYOffset + window.innerHeight - portraitElement.offsetHeight > 500){
        portraitElement.classList.remove("shifted")
    }

})

