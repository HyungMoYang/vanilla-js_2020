const rst_tag = document.querySelector(".rst");
const num_btn_tags = document.querySelectorAll(".num_btn");
const operation_btn_tags = document.querySelectorAll(".operation_btn");
const equal_btn_tag = document.querySelector(".equal_btn");
const reset_btn_tag = document.querySelector(".reset_btn");

let RESULT = "";
let NUM_A = "";
let NUM_B = "";
let operator = "null";

function num_change() {
  rst_tag.innerText = RESULT;
}

function get_num(event) {
  if (operator === "null") {
    NUM_A = NUM_A + event.target.value;
    RESULT = NUM_A;
    num_change();
  } else {
    NUM_B = NUM_B + event.target.value;
    RESULT = NUM_B;
    num_change();
  }
}

function four_operation(event) {
  if (operator === "null") {
    operator = event.target.value;
  } else {
    operator = event.target.value;
    calc();
  }
}

function calc_equal() {
  calc();
  operator = "null";
}

function calc() {
  if (operator === "+") {
    RESULT = parseInt(NUM_A) + parseInt(NUM_B);
    NUM_A = RESULT;
    NUM_B = "";
    num_change();
  } else if (operator === "-") {
    RESULT = parseInt(NUM_A) - parseInt(NUM_B);
    NUM_A = RESULT;
    NUM_B = "";
    num_change();
  } else if (operator === "*") {
    RESULT = parseInt(NUM_A) * parseInt(NUM_B);
    NUM_A = RESULT;
    NUM_B = "";
    num_change();
  } else if (operator === "/") {
    RESULT = parseInt(NUM_A) / parseInt(NUM_B);
    NUM_A = RESULT;
    NUM_B = "";
    num_change();
  }
}
function reset_calculator(event) {
  RESULT = "0";
  NUM_A = "";
  NUM_B = "";
  operator = "null";
  num_change();
}

function init() {
  num_btn_tags.forEach(function (num_btn_tag) {
    num_btn_tag.addEventListener("click", get_num);
  });

  operation_btn_tags.forEach(function (operation_btn_tag) {
    operation_btn_tag.addEventListener("click", four_operation);
  });

  equal_btn_tag.addEventListener("click", calc_equal);

  reset_btn_tag.addEventListener("click", reset_calculator);
}

init();
