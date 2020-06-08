// const form = document.querySelector(".js-form");
// const selOption = form.querySelector(".country");
// const tt = document.querySelector(".test");

// function selectCountry() {
//   const selectedValue = selOption.options[selOption.selectedIndex].value;
//   localStorage.setItem("Country", selectedValue);
// }

const selectedOption = document.querySelector(".country");

function selectCountry(event) {
  const selectedValue =
    selectedOption.options[selectedOption.selectedIndex].value;
  localStorage.setItem("country", selectedValue);
}

function init() {
  selectedOption.addEventListener("change", selectCountry);
}

init();
