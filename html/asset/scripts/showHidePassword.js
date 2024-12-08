document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const togglePasswordButton = document.getElementById('toggle-password');
    const toggleConfirmPasswordButton = document.getElementById('toggle-confirm-password');

    const toggleVisibility = (input, button) => {
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      button.textContent = isPassword ? 'Hide' : 'Show';
    };

    togglePasswordButton.addEventListener('click', () => {
      toggleVisibility(passwordInput, togglePasswordButton);
    });

    toggleConfirmPasswordButton.addEventListener('click', () => {
      toggleVisibility(confirmPasswordInput, toggleConfirmPasswordButton);
    });
});