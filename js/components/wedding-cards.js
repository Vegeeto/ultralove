class WeddingCards extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="css/components/cards.css">
            <main class="content">
                <!-- Card 1 -->
                <div class="card">
                    <div class="card-icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Ubicació" width="60">
                    </div>
                    <h2 class="card-title">Turó del Sol</h2>
                    <div class="card-description">
                        <p>
                            Ctra. Sant Vicenç, Km 0'700, 08394<br>
                            Sant Vicenç de Montalt, Barcelona <br>
                            🕒 13:00h
                        </p>
                    </div>
                    <a href="https://maps.google.com" class="card-button primary">Obrir a Google Maps</a>
                </div>

                <!-- Card 2 -->
                <div class="card">
                    <div class="card-icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email" width="60">
                    </div>
                    <h2 class="card-title">Confirma la teva assistència!</h2>
                    <div class="card-description">
                        <p>Digue'ns si vindràs i si tens alguna intolerància per preparar-ho tot amb amor. 😊</p>
                    </div>
                    <a href="#" class="card-button outline">Omple el formulari ara</a>
                </div>
            </main>
        `;
    }
}
customElements.define('wedding-cards', WeddingCards);
