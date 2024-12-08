document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category") || "Suara Konsumen";
    document.getElementById("dynamic-text").textContent = category;
  });