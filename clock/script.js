function logTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  //analog clock
  const clockHours = document.querySelector(".clock-hours");
  clockHours.style.setProperty("--hours", hours * 30 + "deg");

  const clockMinutes = document.querySelector(".clock-minutes");
  clockMinutes.style.setProperty("--minutes", minutes * 6 + "deg");

  const clockSeconds = document.querySelector(".clock-seconds");
  clockSeconds.style.setProperty("--seconds", seconds * 6 + "deg");

  //digital clock
  document.querySelector(".digital-hours").innerText =
    formatNumberString(hours);
  document.querySelector(".digital-minutes").innerText =
    formatNumberString(minutes);
  document.querySelector(".digital-seconds").innerText =
    formatNumberString(seconds);
  document
    .querySelector(".dots")
    .forEach((e) => e.classList.toggle("dots-hidden"));
}

function formatNumberString(n) {
  let s = "0" + n.toString();
  return s.slice(-2);
}

logTime();
setInterval(logTime, 1000);
