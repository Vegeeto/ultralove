function initCountdown() {
    const weddingDate = new Date('October 12, 2026 13:00:00').getTime();
    
    function update() {
        const timerContainer = document.getElementById('countdown-timer');
        if (!timerContainer) return;

        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            timerContainer.innerHTML = "Ja és el dia!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.innerText = days.toString().padStart(2, '0');
        if (hoursEl) hoursEl.innerText = hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.innerText = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.innerText = seconds.toString().padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
}

// Support both direct load and component initialization
document.addEventListener('DOMContentLoaded', initCountdown);
