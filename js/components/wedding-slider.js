class WeddingSlider extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="css/components/slider.css">
            <section class="slider-container">
                <div class="slider">
                    <div class="slide active">
                        <img src="img/optimized/Portada.webp" alt="UltraLove 2026" fetchpriority="high">
                    </div>
                    <div class="slide">
                        <img src="img/optimized/Contraportada.webp" alt="Etapes" fetchpriority="low">
                    </div>
                </div>
                <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
                <button class="next" onclick="moveSlide(1)">&#10095;</button>
            </section>
        `;
        // Re-initialize buttons state if the script is already loaded
        if (typeof updateButtons === 'function') {
            updateButtons();
        }
    }
}
customElements.define('wedding-slider', WeddingSlider);
