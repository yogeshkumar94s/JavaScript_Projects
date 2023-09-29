function updateTime() {
  const now = new Date();

  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  timeElement.textContent = now.toLocaleTimeString();
  dateElement.textContent = now.toLocaleDateString();
}

updateTime();

setInterval(updateTime, 1000);
