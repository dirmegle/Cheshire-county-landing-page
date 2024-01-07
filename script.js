"use strict"

var burger = document.getElementById("burger")
var links = document.getElementsByClassName("links")[0]

var nameInput = document.getElementById("nameInput")
var lastNameInput = document.getElementById("lastNameInput")
var numberInput = document.getElementById("numberInput")
var submitInput = document.getElementById("submitInput")

var tabs = document.getElementsByClassName("content-section")
var buttons = document.getElementsByClassName("tab-button")

var nameContact = document.getElementById("nameContact")
var lastNameContact = document.getElementById("lastNameContact")
var numberContact = document.getElementById("numberContact")
var submitContact = document.getElementById("submitContact")
//Navbar

burger.addEventListener("click", function() {
    links.classList.toggle("translate")
    burger.classList.toggle("close")
})


submitInput.addEventListener("click", function(){
    if(nameInput.value && lastNameInput.value && numberInput.value) {

    nameInput.value = "";
    lastNameInput.value = "";
    numberInput.value = "";

        } else {
        alert("Not all information has been provided. Please check if all fields have been filled in.")
        }
    }
)

// Tabs

function changeTab(event, name) {
    if(event.currentTarget.classList.contains("selected")) return

    for(var tab of tabs){
        tab.classList.remove("block")
        tab.classList.remove("animate")
    }

    document.getElementById(name).classList.add("block")

    for(var button of buttons){
        button.classList.remove("selected")
    }

    event.currentTarget.classList.add("selected")

    setTimeout(function(){
        document.getElementById(name).classList.add("animate")
    }, 100)

}

submitContact.addEventListener("click", function(event){
    if(nameContact.value && lastNameContact.value && numberContact.value) {

    nameContact.value = "";
    lastNameContact.value = "";
    numberContact.value = "";

        } else {
        alert("Not all information has been provided. Please check if all fields have been filled in.")
        event.preventDefault();
        }
    }
)







