const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const finishedList = document.querySelector(".js-finishedList");

// const cPending =
let toDos = []; // 할 일 목록 리스트
let doneList = [];

function saveToDos() {
  localStorage.setItem("PENDING", JSON.stringify(toDos));
  localStorage.setItem("FINISHED", JSON.stringify(doneList));
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const ul = li.parentNode;

  ul.removeChild(li);

  if (ul.className === "js-toDoList") {
    const cleanToDos = toDos.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
  } else {
    const doneTodos = doneList.filter(function (done) {
      return done.id !== parseInt(li.id);
    });
    doneList = doneTodos;
  }

  saveToDos();
}

function backTodo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const finBtn = document.createElement("button");

  btn.remove();
  finBtn.innerText = "✅";
  finBtn.addEventListener("click", finTodo);
  li.appendChild(finBtn);
  toDoList.appendChild(li);

  const cleanToDos = doneList.filter(function (done) {
    return done.id === parseInt(li.id);
  });
  toDos.push(cleanToDos[0]);

  const newDone = doneList.filter(function (done) {
    return done.id !== parseInt(li.id);
  });
  doneList = newDone;

  saveToDos();
}

function finTodo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const backBtn = document.createElement("button");

  btn.remove();
  backBtn.innerText = "⏪";
  backBtn.addEventListener("click", backTodo);
  li.appendChild(backBtn);
  finishedList.appendChild(li);

  const newDone = toDos.filter(function (done) {
    return done.id === parseInt(li.id);
  });
  doneList.push(newDone[0]);

  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;

  saveToDos();
}

function paintToDo(text) {
  const li = document.createElement("li");
  const todoText = document.createElement("span");
  const delBtn = document.createElement("button");
  const finBtn = document.createElement("button");
  const days = new Date(); // 시간 값으로 id 값 지정
  const newId = days.getTime();

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
  saveToDos();
}

function paintToDo_2(text) {
  const li = document.createElement("li");
  const todoText = document.createElement("span");
  const delBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const days = new Date();
  const newId = days.getTime();

  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  backBtn.innerText = "⏪";
  backBtn.addEventListener("click", backTodo);
  todoText.innerText = text;

  li.appendChild(todoText);
  li.appendChild(delBtn);
  li.appendChild(backBtn);
  li.id = newId;
  finishedList.appendChild(li);

  const currentObj = {
    text: text, // 할 일
    id: newId, // id numbering
  };

  doneList.push(currentObj); // 현재 입력 받은 할 일을 리스트에 추가
  saveToDos();
}

function handleSubmit() {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedPending = localStorage.getItem("PENDING");
  const loadedFinished = localStorage.getItem("FINISHED");

  if (loadedPending !== null || loadedFinished != null) {
    const pList = JSON.parse(loadedPending);
    const fList = JSON.parse(loadedFinished);
    pList.forEach(function (toDo) {
      paintToDo(toDo.text);
    });

    fList.forEach(function (toDo) {
      paintToDo_2(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
