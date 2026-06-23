function book() {
    const time = document.getElementById("time").value;
    const seat = document.getElementById("seat").value;
    const tickets = document.getElementById("tickets").value;

    if (!time || !seat || !tickets) {
        alert("Please fill all fields!");
        return;
    }

    document.getElementById("result").innerText =
        " Booked " + tickets + " ticket(s) | Seat: " + seat + " | Time: " + time;
}