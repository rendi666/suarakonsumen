// Handle file selection and preview
function handleFileSelect(event) {
    const files = event.target.files;
    const previewContainer = document.getElementById('preview');
    previewContainer.innerHTML = ''; // Clear previous previews

    // Iterate over files and display previews
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imagePreview = document.createElement('div');
        imagePreview.classList.add('relative', 'mb-4');
        imagePreview.innerHTML = `
          <img src="${e.target.result}" alt="${file.name}" class="w-64 h-64 object-cover rounded-md shadow-lg ratio-video" />
        `;
        previewContainer.appendChild(imagePreview);
      };
      reader.readAsDataURL(file);
    });
  }

  // Remove image preview
  function removePreview(event) {
    event.target.closest('div').remove();
  }