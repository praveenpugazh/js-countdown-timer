const dateInputField = document.getElementById("dateInput");
dateInputField.value = "";
const selectTimeDiv = document.querySelector(".select-time");
const timerShow = document.querySelector(".coming-soon");

dateInputField.addEventListener("change", () => {
  timerShow.classList.remove("inactive");
  selectTimeDiv.classList.add("inactive");
  countDown();
  setInterval(countDown, 1000);
});

const countDown = () => {
  const countDowndate = dateInputField.valueAsNumber;
  const today = new Date().getTime();
  const gap = countDowndate - today;

  //how does time work?
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //how to calculate

  const textDay = Math.floor(gap / day);
  console.log(textDay);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  //populating the divs
  if (textDay >= 10) {
    document.querySelector(".day").innerText = textDay;
  } else {
    document.querySelector(".day").innerText = `0${textDay}`;
  }

  if (textHour >= 10) {
    document.querySelector(".hour").innerText = textHour;
  } else {
    document.querySelector(".hour").innerText = `0${textHour}`;
  }

  if (textMinute >= 10) {
    document.querySelector(".minute").innerText = textMinute;
  } else {
    document.querySelector(".minute").innerText = `0${textMinute}`;
  }
  if (textSecond >= 10) {
    document.querySelector(".second").innerText = textSecond;
  } else {
    document.querySelector(".second").innerText = `0${textSecond}`;
  }

  //disappearing elements

  if (textDay == 0) {
    document.querySelector(".container-days").style.display = "none";
  }
  if (textDay == 0 && textHour == 0) {
    document.querySelector(".container-hours").style.display = "none";
  }
  if (textDay == 0 && textHour == 0 && textMinute == 0) {
    document.querySelector(".container-minutes").style.display = "none";
  }

  if (gap <= 000) {
    launchProduct();
  }
};

const launchProduct = () => {
  document.querySelector(".countdown").style.display = "none";
  document.querySelector(".title").innerText = "Hurray !!! We are now open";
};
