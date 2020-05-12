const body = document.querySelector("body");

const IMG_NUMBER = 5; // image 개수

function paintImage(imgNumber) {
  const image = new Image(); // create new Object
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage"); // 추가한 이미지에 css를 적용시키기 위해서 tag에 class를 삽입
  body.prepend(image);
}

// Random number 발생 함수
function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
