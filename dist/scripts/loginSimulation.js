
document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.getElementById('login-container');
  const toggleButton = document.getElementById('login-toggle');
  const clearButton = document.getElementById('clear-storage');


  // Simulate login state
  let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // Function to update the header UI
  function updateHeader() {
    headerContainer.innerHTML = isLoggedIn
      ? `<button type="button" class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-sk-900 rounded-lg hover:bg-sk-800 focus:ring-4 focus:outline-none focus:ring-sk-300 dark:bg-sk-600 dark:hover:bg-sk-700 dark:focus:ring-sk-800">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-white mr-1" viewBox="0 0 16 17">
                <path d="M10.5079 12.6126C10.5079 12.6409 10.4972 12.6681 10.4782 12.6882C10.4591 12.7082 10.4333 12.7195 10.4064 12.7195H3.3169C3.28998 12.7195 3.26417 12.7082 3.24514 12.6882C3.22611 12.6681 3.21541 12.6409 3.21541 12.6126V5.14327C3.21541 5.11491 3.22611 5.08772 3.24514 5.06766C3.26417 5.04761 3.28998 5.03635 3.3169 5.03635H7.6778L8.89322 3.75583H3.3169C2.96774 3.75616 2.63296 3.90245 2.38607 4.16257C2.13917 4.4227 2.00032 4.7754 2 5.14327V12.6126C2.00032 12.9804 2.13917 13.3331 2.38607 13.5933C2.63296 13.8534 2.96774 13.9997 3.3169 14H10.4064C10.7556 13.9997 11.0903 13.8534 11.3372 13.5933C11.5841 13.3331 11.723 12.9804 11.7233 12.6126V8.01804L10.5079 9.29856V12.6126Z"/>
                <path d="M13.4638 2.56238C13.1219 2.20229 12.6583 2 12.1748 2C11.6914 2 11.2278 2.20229 10.8859 2.56238L6.15854 7.54233C6.07381 7.63175 6.01608 7.74559 5.99263 7.8695L5.56298 10.1335C5.54496 10.2265 5.5468 10.3226 5.56838 10.4148C5.58995 10.507 5.63072 10.593 5.68773 10.6665C5.74473 10.74 5.81655 10.7993 5.89798 10.84C5.97941 10.8807 6.06841 10.9018 6.15854 10.9018C6.19932 10.9016 6.24 10.8976 6.28008 10.8896L8.42832 10.4369C8.54601 10.4121 8.65406 10.351 8.73886 10.2615L13.4656 5.28157C13.6352 5.10303 13.7697 4.89101 13.8614 4.65764C13.9531 4.42428 14.0002 4.17415 14 3.92157C13.9998 3.669 13.9524 3.41894 13.8604 3.18571C13.7684 2.95249 13.6336 2.74067 13.4638 2.56238ZM12.6045 3.46771C12.661 3.52717 12.7058 3.59778 12.7364 3.67551C12.767 3.75324 12.7827 3.83655 12.7827 3.92069C12.7827 4.00483 12.767 4.08815 12.7364 4.16587C12.7058 4.2436 12.661 4.31421 12.6045 4.37368L12.2788 4.71622L11.4195 3.81089L11.7452 3.46771C11.8591 3.34768 12.0137 3.28025 12.1748 3.28025C12.336 3.28025 12.4905 3.34768 12.6045 3.46771ZM8.00779 9.21661L6.93336 9.44326L7.14849 8.31064L10.5602 4.71622L11.4195 5.62155L8.00779 9.21661Z"/>
              </svg>
              Kirim Suara
          </button>
          <button data-dropdown-toggle="dropdownInformation" type="button" class="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"}>
              <span class="font-medium text-xs text-gray-600 dark:text-gray-300">AJ</span>
          </button>
          `
      : `<button data-modal-target="login-popup" data-modal-toggle="login-popup" type="button" class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-sk-900 rounded-lg hover:bg-sk-800 focus:ring-4 focus:outline-none focus:ring-sk-300 dark:bg-sk-600 dark:hover:bg-sk-700 dark:focus:ring-sk-800">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-white mr-1" viewBox="0 0 16 17">
                <path d="M10.5079 12.6126C10.5079 12.6409 10.4972 12.6681 10.4782 12.6882C10.4591 12.7082 10.4333 12.7195 10.4064 12.7195H3.3169C3.28998 12.7195 3.26417 12.7082 3.24514 12.6882C3.22611 12.6681 3.21541 12.6409 3.21541 12.6126V5.14327C3.21541 5.11491 3.22611 5.08772 3.24514 5.06766C3.26417 5.04761 3.28998 5.03635 3.3169 5.03635H7.6778L8.89322 3.75583H3.3169C2.96774 3.75616 2.63296 3.90245 2.38607 4.16257C2.13917 4.4227 2.00032 4.7754 2 5.14327V12.6126C2.00032 12.9804 2.13917 13.3331 2.38607 13.5933C2.63296 13.8534 2.96774 13.9997 3.3169 14H10.4064C10.7556 13.9997 11.0903 13.8534 11.3372 13.5933C11.5841 13.3331 11.723 12.9804 11.7233 12.6126V8.01804L10.5079 9.29856V12.6126Z"/>
                <path d="M13.4638 2.56238C13.1219 2.20229 12.6583 2 12.1748 2C11.6914 2 11.2278 2.20229 10.8859 2.56238L6.15854 7.54233C6.07381 7.63175 6.01608 7.74559 5.99263 7.8695L5.56298 10.1335C5.54496 10.2265 5.5468 10.3226 5.56838 10.4148C5.58995 10.507 5.63072 10.593 5.68773 10.6665C5.74473 10.74 5.81655 10.7993 5.89798 10.84C5.97941 10.8807 6.06841 10.9018 6.15854 10.9018C6.19932 10.9016 6.24 10.8976 6.28008 10.8896L8.42832 10.4369C8.54601 10.4121 8.65406 10.351 8.73886 10.2615L13.4656 5.28157C13.6352 5.10303 13.7697 4.89101 13.8614 4.65764C13.9531 4.42428 14.0002 4.17415 14 3.92157C13.9998 3.669 13.9524 3.41894 13.8604 3.18571C13.7684 2.95249 13.6336 2.74067 13.4638 2.56238ZM12.6045 3.46771C12.661 3.52717 12.7058 3.59778 12.7364 3.67551C12.767 3.75324 12.7827 3.83655 12.7827 3.92069C12.7827 4.00483 12.767 4.08815 12.7364 4.16587C12.7058 4.2436 12.661 4.31421 12.6045 4.37368L12.2788 4.71622L11.4195 3.81089L11.7452 3.46771C11.8591 3.34768 12.0137 3.28025 12.1748 3.28025C12.336 3.28025 12.4905 3.34768 12.6045 3.46771ZM8.00779 9.21661L6.93336 9.44326L7.14849 8.31064L10.5602 4.71622L11.4195 5.62155L8.00779 9.21661Z"/>
            </svg>
            Kirim Suara
        </button>
        <a href="#" class="text-sm text-sk-900 dark:text-sk-500" data-modal-target="login-popup" data-modal-toggle="login-popup">Login</a>`;
  }

  // Update the header initially
  updateHeader();

  // Handle login toggle
  toggleButton.addEventListener('submit', () => {
    isLoggedIn = !isLoggedIn; // Toggle login state
    localStorage.setItem('isLoggedIn', isLoggedIn); // Save state
    updateHeader(); // Update UI
  });

  // Handle logout (clear localStorage)
  clearButton.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn'); // Clear login state
    isLoggedIn = false; // Update local variable
    updateHeader(); // Update UI
    location.reload();
  });
});