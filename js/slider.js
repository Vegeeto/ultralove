let currentSlide = 0;
let isAnimating = false;

function updateButtons() {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const slides = document.querySelectorAll('.slide');
    
    if (prevBtn) prevBtn.disabled = (currentSlide === 0);
    if (nextBtn) nextBtn.disabled = (currentSlide === slides.length - 1);
}

function moveSlide(direction) {
    if (isAnimating) return;
    
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    if (totalSlides <= 1) return;

    // Boundary check to avoid infinite loop
    const nextSlide = currentSlide + direction;
    if (nextSlide < 0 || nextSlide >= totalSlides) return;

    isAnimating = true;
    const oldSlideIndex = currentSlide;
    currentSlide = nextSlide;

    updateButtons();

    const oldSlide = slides[oldSlideIndex];
    const newSlide = slides[currentSlide];

    // Page turn effect logic
    if (direction > 0) {
        // Moving forward
        oldSlide.classList.add('turning');
        newSlide.classList.add('active');
        
        setTimeout(() => {
            oldSlide.classList.remove('active', 'turning');
            isAnimating = false;
        }, 800);
    } else {
        // Moving backward
        newSlide.classList.add('turning');
        newSlide.classList.add('active');
        
        // Force reflow
        newSlide.offsetHeight;
        
        newSlide.classList.remove('turning');
        
        setTimeout(() => {
            oldSlide.classList.remove('active');
            isAnimating = false;
        }, 800);
    }
}

// Initial button state
document.addEventListener('DOMContentLoaded', updateButtons);

