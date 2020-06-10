const textArea = document.querySelector(".text_area");
const rangeVal = document.querySelector(".rangeValue");
const userInput = document.querySelector(".userInput");
const rst1 = document.querySelector(".result");
const rst2 = document.querySelector(".result2");

function getRandom(num) {
  const randomNum = Math.floor(Math.random() * num);
  return randomNum;
}

function onButton() {
  const rangeValue = parseInt(rangeVal.value) + 1; // range 수
  const rNum = getRandom(rangeValue); // 0 <= rWNum <= range
  const inputNum = parseInt(userInput.value);

  if (isNaN(inputNum)) {
    rst1.innerText = "input Your number plz";
    rst2.innerText = "";
    return;
  }

  rst1.innerText = `You Choose: ${inputNum}, the machine Choose: ${rNum}`;

  if (inputNum > rNum) {
    rst2.innerText = "You Win!";
  } else if (inputNum === rNum) {
    rst2.innerText = "Draw";
  } else {
    rst2.innerText = "You lost!";
  }
}

function changeVal(val) {
  textArea.innerText = `Generate a number between 0 and ${val}`;
}

function init() {
  
}

init()