const data = {
    "Action Movies": ["The Dark Knight","John Wick", "Mad Max","The Beekeeper"],
    "Adventure Movies": ["Lord of the rings 25", "Lord of the rings", "Pirrates of the Caribean","The revenant"],
    "Comedy Movies": ["The Hangover", "Superbad", "Were the Millers","Dumb and Dumber"],
    "Horror Movies":["The Conjuring","IT", "A Quiet Place","Anabelle"],
    "War Movies": ["Saving private ryan","1917", "Hacksaw Ridge","American Sniper"],
    "Drama Movies": ["The Shawshank Redemption","Tom Hanks is Forrest Gump", "Green Book","The Pianist"],
    "Crime/Thriller Movies":["Seven","Prisoners", "Gone Girl","Zodiac"],
    "Must Watch Movies": ["Gladiator", "The Prestige", "Parasite","Titanic"],
   
};

let selectedMovie = "";

function showCategory(category) {
    document.getElementById("categoryTitle").innerText = category;

    const moviesDiv = document.getElementById("movies");
    moviesDiv.innerHTML = "";

    data[category].forEach(movie => {
        const div = document.createElement("div");
        div.className = "movie";
        div.innerText = movie;

        div.onclick = () => {
            selectedMovie = movie;
            document.getElementById("bookingBox").classList.remove("hidden");
            document.getElementById("selectedMovie").innerText = "Filmi: " + movie;
        };

        moviesDiv.appendChild(div);
    });
}

function bookTicket() {
    const name = document.getElementById("name").value;
    const seats = document.getElementById("seats").value;

    if (!name || !seats) {
        alert("Plotëso të gjitha fushat!");
        return;
    }

    document.getElementById("result").innerText =
        `✔ ${name}, ke rezervuar ${seats} bileta për "${selectedMovie}"`;

    document.getElementById("name").value = "";
    document.getElementById("seats").value = "";
}