document.addEventListener("DOMContentLoaded", () => {
    // Countdown-elementen
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    // Controleer of de countdown-elementen bestaan
    if (daysElement && hoursElement && minutesElement && secondsElement) {
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

        // Start de countdown
        const interval = setInterval(updateCountdown, 1000);
        updateCountdown();
    } else {
        console.error("Countdown-elementen niet gevonden in de HTML.");
    }

    // Slideshow-elementen
    const slides = document.querySelectorAll('.slideshow .slide');
    let currentIndex = 0;

    function showNextSlide() {
        // Verberg de huidige slide
        slides[currentIndex].classList.remove('active');

        // Bereken de volgende slide
        currentIndex = (currentIndex + 1) % slides.length;

        // Toon de volgende slide
        slides[currentIndex].classList.add('active');
    }

    // Start de slideshow
    if (slides.length > 0) {
        slides[currentIndex].classList.add('active'); // Toon de eerste slide
        setInterval(showNextSlide, 7000); // Wissel elke 5 seconden
    } else {
        console.error("Geen slides gevonden in de slideshow.");
    }

    // Toggle switch voor kleuren
    const toggleSwitch = document.getElementById('color-toggle');
    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', function () {
            document.body.classList.toggle('reverse-colors', toggleSwitch.checked);
        });
    } else {
        console.error("Toggle switch niet gevonden in de HTML.");
    }

    // Parking-elementen
    document.querySelectorAll('.parking').forEach(parking => {
        parking.addEventListener('click', () => {
            parking.classList.toggle('show-tooltip');
        });
    });
});

window.addEventListener("load", () => {
    const loadingOverlay = document.getElementById("loading-overlay");

    if (loadingOverlay) {
        setTimeout(() => {
            loadingOverlay.style.opacity = "0"; // Start de fade-out van de overlay
            loadingOverlay.addEventListener("transitionend", () => {
                loadingOverlay.style.display = "none"; // Verberg de overlay volledig na de transitie
            });
        }, 4000); // Wacht tot de animatie van het logo is voltooid
    }
});
