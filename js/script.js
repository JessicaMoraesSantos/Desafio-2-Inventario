
// Cria evento para Menu

var menuHamburguer = document.querySelector(".menu-hamburguer");

menuHamburguer.addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("show-menu");
})

