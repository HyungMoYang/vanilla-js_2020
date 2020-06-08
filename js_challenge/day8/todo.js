const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const finishedList = document.querySelector(".js-finishedList");

const TODOS_LS = "toDos";
let toDos = []; // 할 일 목록 리스트
let doneList = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;

  toDoList.removeChild(li);

  //   const cleanToDos = toDos.filter(function (toDo) {
  //     return toDo.id !== parseInt(li.id);
  //   });
  //   toDos = cleanToDos;
}

function finTodo(event) {
  const btn = event.target;
  const li = btn.parentNode;

  const backBtn = document.createElement("button");
  backBtn.innerText = "⏪";
  btn.remove();
  li.appendChild(backBtn);
  finishedList.appendChild(li);
}

function paintToDo(text) {
  const li = document.createElement("li");
  const todoText = document.createElement("span");
  const delBtn = document.createElement("button");
  const finBtn = document.createElement("button");
  const newId = toDos.length + 1;

  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  finBtn.innerText = "✅";
  finBtn.addEventListener("click", finTodo);
  todoText.innerText = text;

  li.appendChild(todoText);
  li.appendChild(delBtn);
  li.appendChild(finBtn);
  li.id = newId;
  toDoList.appendChild(li);

  const currentObj = {
    text: text, // 할 일
    id: newId, // id numbering
  };
  toDos.push(currentObj); // 현재 입력 받은 할 일을 리스트에 추가
}

function handleSubmit() {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function init() {
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
