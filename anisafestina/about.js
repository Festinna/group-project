const menu = document.getElementById("menu");

const nav = document.getElementById("navLinks");


menu.addEventListener("click",()=>{

nav.classList.toggle("show");

});



window.addEventListener("scroll",()=>{


let navbar=document.querySelector(".navbar");


if(window.scrollY>50){

navbar.style.boxShadow="0 5px 25px #ff1744";

}

else{

navbar.style.boxShadow="none";

}


});