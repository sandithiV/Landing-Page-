function updateCountdown() {
  const launchDate = new Date("August 12, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const countdownElement = document.getElementById("countdown");
  if (countdownElement) {
    const countdownItems = countdownElement.getElementsByClassName("countdown-item");
    if (countdownItems.length === 4) {
      countdownItems[0].getElementsByTagName("span")[0].textContent = days;
      countdownItems[1].getElementsByTagName("span")[0].textContent = hours;
      countdownItems[2].getElementsByTagName("span")[0].textContent = minutes;
      countdownItems[3].getElementsByTagName("span")[0].textContent = seconds;
    }
  }

  if (distance < 0) {
    clearInterval(x);
    if (countdownElement) {
      countdownElement.innerHTML = "EXPIRED";
    }
  }
}

const x = setInterval(updateCountdown, 1000);

// Call updateCountdown immediately to avoid initial delay
updateCountdown();