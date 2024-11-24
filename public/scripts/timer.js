let time = 300; // Initial time in seconds
let timerInterval;

const formatTime = (seconds) => {
//   const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${mins
    .toString()
    .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const countdown = () => {
  const timerElement = document.getElementById('timer');
  if (!timerElement) return;

  if (time > 0) {
    time--;
    timerElement.innerHTML = `Kode Expired dalam <span class="font-bold text-sk-900">${formatTime(time)}</span>`;
  } else {
    clearInterval(timerInterval);
    timerElement.innerHTML = `Kode Expired <a href="#" id="refresh" class="font-bold text-sk-900">Kirim Ulang</a>`;
    // Add click event to refresh link
    document.getElementById('refresh').addEventListener('click', resetTimer);
  }
};

const startCountdown = () => {
  clearInterval(timerInterval); // Clear any existing interval
  timerInterval = setInterval(countdown, 1000); // Start a new countdown
};

const resetTimer = () => {
  time = 300; // Reset time to initial value
  startCountdown(); // Restart countdown
};

// Start countdown on page load
startCountdown();
