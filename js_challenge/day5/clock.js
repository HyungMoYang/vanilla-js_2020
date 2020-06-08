const clockContainer = document.querySelector("body"),
  clockTitle = clockContainer.querySelector("h3");

function getTime() {
  const dDay = new Date("2020-12-24 24:00:00").getTime();
  const nowDay = new Date();
  const distance = dDay - nowDay;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  clockTitle.innerText = `${days}d ${hours < 10 ? `0${hours}` : hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

// init this pages
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
