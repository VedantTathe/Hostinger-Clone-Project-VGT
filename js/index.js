var modal = document.getElementById('id01');
        window.onclick = function(event) {
            if (event.target == modal) {
                // modal.style.display = "none";
                modal.style.display = "block";

              }

        }


// const modal = document.querySelector(".btn");


// if (modal.classList.contains("active")) {
//   menu.classList.remove("active");

// }

// function togglelogin() {
//   if (modal.classList.contains("active")) {
//     menu.classList.remove("active");
    
//   } else {
//     modal.classList.add("active");
//   }
// }

// modal.addEventListener("click", togglelogin);





const menu = document.querySelector(".navbar");
const menuItems = document.querySelectorAll(".menu");
const hamburger= document.querySelector(".mobile_menu_div");
const closeIcon= document.querySelector(".close_icon");
const menuIcon = document.querySelector(".menu_icon");

if (menu.classList.contains("active")) {
  menu.classList.remove("active");
  closeIcon.style.display = "none";
  menuIcon.style.display = "block";
}

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("active");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);















// const mobile_nav = document.querySelector(".mobile_menu_div");
// const nav_header  = document.querySelector(".navbar");

// const toggleNavbar = () => {
//   nav_header.classList.toggle("active");
// }




// mobile_nav.addEventListener('click',()=>toggleNavbar());

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();


var x = setInterval(function hello() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 
  document.getElementById("demo2").innerHTML = hours + "h";
  document.getElementById("demo3").innerHTML = minutes + "m";
  document.getElementById("demo4").innerHTML = seconds + "s";
  
  // If the count down is finished, write some text
  if (distance < 0) {
    hello();
  }
}, 1000);


