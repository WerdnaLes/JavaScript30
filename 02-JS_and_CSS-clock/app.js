const hoursHand = document.querySelector(".hour-hand");
const minutesHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

setInterval(setDate, 1000);

function setDate() {
  const now = new Date();
  rotateSeconds(now);
  rotateMinutes(now);
  rotateHours(now);
}

function rotateHours(date) {
  const hours = date.getHours()
  const hoursDegrees = (hours / 12) * 360 + 90;
//   hoursHand.style.background='red'
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

function rotateMinutes(date) {
  const minutes = date.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minutesHand.style.background='pink'
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
}

function rotateSeconds(date) {
  const seconds = date.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.background='red'
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(secondsDegrees);
}

