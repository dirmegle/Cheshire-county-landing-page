"use strict"

//Navbar
var burgerMenu = document.getElementById("burger-menu")
var mobileNavbar = document.getElementById("mobile-navbar")

burgerMenu.addEventListener('click', function() {
    this.classList.toggle("open-menu");
    mobileNavbar.classList.toggle("open")
    // overlay.classList.toggle("overlay");
  });



// var tabs = document.getElementsByClassName("content")
// var buttons = document.getElementsByTagName("button")

// function changeTab(event, name){
//     if(event.currentTarget.classList.contains("selected")) return

//     // Nuimam visiems tabams block ir animate klases
//     for(var tab of tabs){
//         tab.classList.remove("block")
//         tab.classList.remove("animate")
//     }

//     //Prideda block klase
//     document.getElementById(name).classList.add("block")

//     //Mygtuku stilius
//     for(var button of buttons){
//         button.classList.remove("selected")
//     }

//     event.currentTarget.classList.add("selected")

//     // Animacija
//     setTimeout(function(){
//         document.getElementById(name).classList.add("animate")
//     }, 100)
// }