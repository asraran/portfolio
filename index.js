
const portraitElement = document.getElementById("portrait")

window.addEventListener("scroll", (event)=> {
    if(window.pageYOffset + window.innerHeight - portraitElement.offsetHeight > 500){
        portraitElement.classList.remove("shifted")
    }
})

// document.getElementById("modaltrigger").addEventListener("click", (event)=> {
//     document.getElementById("modal").classList.remove("d-none")
// })

// document.getElementById("modalexit").addEventListener("click", (event)=> {
//     document.getElementById("modal").classList.add("d-none")
// })

// document.getElementById("modaltrigger2").addEventListener("click", (event)=> {
//     document.getElementById("modal2").classList.remove("d-none")
// })

// document.getElementById("modalexit2").addEventListener("click", (event)=> {
//     document.getElementById("modal2").classList.add("d-none")
// })

// document.getElementById("modaltrigger3").addEventListener("click", (event)=> {
//     document.getElementById("modal3").classList.remove("d-none")
// })

// document.getElementById("modalexit3").addEventListener("click", (event)=> {
//     document.getElementById("modal3").classList.add("d-none")
// })


document.querySelectorAll(".custommodaltrigger").forEach((button) => {
  button.addEventListener("click", (e) => {
    document.body.classList.add("overflow-hidden")
    document
      .getElementById(e.currentTarget.dataset.target)
      .classList.remove("d-none");
  });
});
document.querySelectorAll(".custommodalexit").forEach((button) => {
  button.addEventListener("click", (e) => {
    document.body.classList.remove("overflow-hidden")
    document.querySelectorAll(".custommodal").forEach((modal) => {
      modal.classList.add("d-none");
    });
  });
});


