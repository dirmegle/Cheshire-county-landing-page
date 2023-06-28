"use strict"

//Navbar

var burger = document.getElementById("burger")
var links = document.getElementsByClassName("links")[0]

burger.addEventListener("click", function() {
    links.classList.toggle("translate")
    burger.classList.toggle("close")
})

