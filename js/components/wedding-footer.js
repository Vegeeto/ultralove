class WeddingFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="css/components/footer.css">
            <footer class="footer">
                <p>Copyright © 2026 Esther & Oriol 💘</p>
            </footer>
        `;
    }
}
customElements.define('wedding-footer', WeddingFooter);
