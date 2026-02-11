class WeddingSlider extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="css/components/slider.css">
            <section class="slider-container">
                <div class="slider">
                    <div class="slide active">
                        <img src="img/Portada.png" alt="Portada">
                    </div>
                    <div class="slide">
                        <img src="img/Contraportada.png" alt="Contraportada">
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
