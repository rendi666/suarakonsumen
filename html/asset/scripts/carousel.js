document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("[data-carousel-container]");
    const prevButton = document.querySelector("[data-carousel-prev]");
    const nextButton = document.querySelector("[data-carousel-next]");

    let currentIndex = 0;
    const totalItems = container.children.length;
    const itemsPerSlide = 3; // Number of visible items
    const totalSlides = Math.ceil(totalItems / itemsPerSlide);

    const updateCarousel = () => {
        const offset = (currentIndex / totalSlides) * 100; // Percentage offset
        container.style.transform = `translateX(-${offset}%)`;
    };

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });
});