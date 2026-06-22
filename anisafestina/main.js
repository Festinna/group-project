function bookMovie(movie){
    alert("You selected: " + movie);
}



const searchMovie = document.getElementById("searchMovie");

if (searchMovie) {

    searchMovie.addEventListener("input", function () {

        let value = this.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            let title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}



const bookingForm = document.getElementById("bookingForm");

if(bookingForm){

    bookingForm.addEventListener("submit",function(e){

        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

        if(name === "" || email === ""){
            alert("Please fill all fields");
            return;
        }

        document.getElementById("message").innerHTML =
        "✅ Reservation Successful, " + name;

        bookingForm.reset();

    });

}



const texts = [
    "Welcome to CineMax",
    "Best Movies In Town",
    "Book Tickets Online",
    "Enjoy Cinema Experience"
];

let currentText = 0;

setInterval(() => {

    let title = document.getElementById("welcomeText");

    if(title){

        currentText++;

        if(currentText >= texts.length){
            currentText = 0;
        }

        title.textContent = texts[currentText];
    }

},3000);



function darkMode(){
    document.body.classList.toggle("dark");
}



const movieCards = document.querySelectorAll(".card");

console.log("Total Movies: " + movieCards.length);



movieCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 25px red";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });

});




window.addEventListener("scroll", () => {

    let btn = document.getElementById("topBtn");

    if(btn){

        if(window.scrollY > 300){
            btn.style.display = "block";
        }else{
            btn.style.display = "none";
        }

    }

});

function scrollTopPage(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}



const date = new Date();
console.log(date.toLocaleDateString());



const movieList = [
    "John Wick 4",
    "Fast X",
    "Avatar 2",
    "Jumanji",
    "The Mask",
    "Home Alone",
    "IT",
    "The Nun"
];

function recommendMovie(){

    let random = Math.floor(
        Math.random() * movieList.length
    );

    alert("Recommended Movie: " + movieList[random]);

}



document.addEventListener("keydown",(e)=>{

    if(e.key === "r"){
        recommendMovie();
    }

});


window.addEventListener("load",()=>{

    console.log("Welcome To CineMax Cinema");

});


const contact = document.getElementById("contact");

if(contact){

    contact.addEventListener("mouseover",()=>{

        contact.style.opacity = "0.8";

    });

    contact.addEventListener("mouseout",()=>{

        contact.style.opacity = "1";

    });

}

document.addEventListener("DOMContentLoaded", function () {

    
    window.bookMovie = function (movieName) {
        alert("🎬 You selected: " + movieName);
    };

    
    const searchInput = document.getElementById("searchMovie");

    if (searchInput) {
        searchInput.addEventListener("input", function () {

            const value = this.value.toLowerCase();
            const cards = document.querySelectorAll(".card");

            cards.forEach(card => {

                const titleElement = card.querySelector("h3");

                if (!titleElement) return;

                const title = titleElement.innerText.toLowerCase();

                if (title.includes(value)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });
    }

});