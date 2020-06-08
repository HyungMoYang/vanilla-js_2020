// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const colorsLength = colors.length;
let colorNumber = 0;

const target = document.querySelector("h2");
const superEventHandler = {
  mOver: function (event) {
    target.innerText = " The mouse is here!";
    superEventHandler.colorChange();
  },

  mOut: function (event) {
    target.innerText = "The mouse is gone!";
    superEventHandler.colorChange();
  },

  windowResize: function (event) {
    target.innerText = "You just resized";
    superEventHandler.colorChange();
  },

  mClick: function (event) {
    if (event.button === 2) {
      target.innerText = "That was a right click!";
    }
    superEventHandler.colorChange();
  },

  colorChange: function () {
    colorNumber = Math.floor(Math.random() * colorsLength) + 1;
    target.style.color = colors[colorNumber];
  },
};

function settingEvent() {
  target.addEventListener("mOver", superEventHandler.mOver);
  target.addEventListener("mOut", superEventHandler.mOut);
  window.addEventListener("resize", superEventHandler.windowResize);
  document.addEventListener("mClick", superEventHandler.mClick);
}

function init() {
  target.style.color = colors[colorNumber];
  settingEvent();
}

init();
