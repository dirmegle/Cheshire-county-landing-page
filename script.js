"use strict"

var burger = document.getElementById("burger")
var links = document.getElementsByClassName("links")[0]
var nameInput = document.getElementById("nameInput")
var lastNameInput = document.getElementById("lastNameInput")
var numberInput = document.getElementById("numberInput")
var submitInput = document.getElementById("submitInput")

//Navbar

burger.addEventListener("click", function() {
    links.classList.toggle("translate")
    burger.classList.toggle("close")
})

//Hero section form

submitInput.addEventListener("click", function(){
    if(nameInput.value && lastNameInput.value && numberInput.value) {

    //Ištrina laukelius paspaudus mygtuką, jei neužpildyti - išmeta žinutę
    nameInput.value = "";
    lastNameInput.value = "";
    numberInput.value = "";

        } else {
        alert("Not all information has been provided. Please check if all fields have been filled in.")
        }
    }
)






