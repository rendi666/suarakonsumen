document.addEventListener("DOMContentLoaded", () => {
    const stickyContent = document.getElementById("stickyContent");

    const adjustStickyPosition = () => {
        const viewportHeight = window.innerHeight;
        const sidebarHeight = stickyContent.offsetHeight;
        const offsetFromTop = (viewportHeight - sidebarHeight) - 286; // Set sticky top to 10% of the viewport height
        stickyContent.style.top = `${offsetFromTop}px`;
    };
    // Initialize on page load
    adjustStickyPosition();

    // Attach resize listener
    window.addEventListener("resize", adjustStickyPosition);
    window.addEventListener("orientationchange", adjustStickyPosition);

});