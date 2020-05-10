// querySelector
const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"; // localStorage의 현재 상태를 위한
const toDos = []; // To-do List를 저장하는 Array

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);

  // parameter로 받은 할 일(text)로 object를 하나 만들어서 array에 추가한다.
  const toDoObj = {
    text: text, // 할 일
    id: newId, // id numbering
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit() {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

/*
// forEach() test
function something(toDo) {
  console.log(toDo.text);
}
*/

// localStorage에 저장되어 있는 To-do List를 불러온다.
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos); // localStorage에 저장된 string data를 불러온 것이므로 object로 변환
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
