const toDoInput = document.querySelector(".input");
const addToDoButton = document.querySelector(".button");
const showToDos = document.querySelector(".todos-container");

let todo;
let localData = JSON.parse(localStorage.getItem("todo"));
let todoList = localData || [];

function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

addToDoButton.addEventListener("click", (event) => {
  event.preventDefault();
  todo = toDoInput.value;
  if (todo.length > 0) {
    todoList.push({ id: uuid(), todo, isCompleted: false });
  }
  localStorage.setItem("todo", JSON.stringify(todoList));
  renderTodoList(todoList);
  toDoInput.value = "";
});

showToDos.addEventListener("click", (e) => {
  let key = e.target.dataset.key;
  let deleteButton = e.target.dataset.todokey;
  todoList = todoList.map((todo) =>
    todo.id === key ? { ...todo, isCompleted: !todo.isCompleted } : todo
  );
  todoList = todoList.filter((todo) => todo.id !== deleteButton);
  localStorage.setItem("todo", JSON.stringify(todoList));
  renderTodoList(todoList);
});

function renderTodoList(todoList) {
  showToDos.innerHTML = todoList.map(
    ({ id, todo, isCompleted }) =>
      `<div><input id="id-${id}" type = 'checkbox' data-key="${id}"
        ${isCompleted ? "checked" : ""}>
        <label for="item-${id}" 
        class = 'todo todo-text t-pointer  
        ${isCompleted ? "checked-todo" : ""}' 
      data-key="${id}">${todo}</label> <button class = "del-btn absolute right-0  button cursor" data-todokey= ${id}>Delete</button> </div>`
  );
  console.log(todoList);
}

renderTodoList(todoList);
