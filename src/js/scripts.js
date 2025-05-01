document.addEventListener("DOMContentLoaded", () => {
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    const weddingDate = new Date("July 12, 2025 15:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        if (timeLeft <= 0) {
            daysElement.textContent = "0";
            hoursElement.textContent = "0";
            minutesElement.textContent = "0";
            secondsElement.textContent = "0";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
});

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Voorkom standaard formulierverzending

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simpele loginlogica
    if (username === "trouwgast" && password === "test123") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("content-container").style.display = "block";
    } else if (username === "trouwgast" && password === "123test") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("content-container").style.display = "block";
    } else {
        const error = document.getElementById("login-error");
        error.style.display = "block"; // Toon foutmelding
    }
});