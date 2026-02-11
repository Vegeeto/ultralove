class WeddingCountdown extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="css/components/countdown.css">
            <section class="countdown">
                <div id="countdown-timer" class="countdown-wrapper">
                    <div class="time-block">
                        <span id="days">00</span>
                        <small>Dies</small>
                    </div>
                    <div class="time-block">
                        <span id="hours">00</span>
                        <small>Hores</small>
                    </div>
                    <div class="time-block">
                        <span id="minutes">00</span>
                        <small>Minuts</small>
                    </div>
                    <div class="time-block">
                        <span id="seconds">00</span>
                        <small>Segons</small>
                    </div>
                </div>
            </section>
        `;
        
        // The countdown.js script should be loaded after this element is in the DOM
        // or we can trigger the initialization here if it's already loaded.
        if (typeof initCountdown === 'function') {
            initCountdown();
        }
    }
}
customElements.define('wedding-countdown', WeddingCountdown);
