const todoForm = document.getElementById("todo-form");
//const todoInput = todoForm.querySelector("input");
const todoInputTxt = document.getElementById("todo-txt");
//const todoInputDueDate = todoForm.querySelector("#todo-duedate");
const todoInputDueDate = document.getElementById("todo-duedate");
const todoList = document.getElementById("todo-list");
const completedList = document.getElementById("completed-list");
const todoBtn = document.getElementById("todo-button");

const TODOS_KEY = "todos";
const COMPLETE_KEY = "completed";

let todos = [];
let completed = [];

function completeToDo(event) {
  const div = event.target.parentElement;
  const li = div.parentElement;

  const tmp = todos.filter((todo) => todo.id === parseInt(li.id));
  completed.push(tmp[0]);
  paintCompleted(tmp[0]);
  saveCompleted();


  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  li.remove();
  saveTodo();

}

function saveCompleted() {
  localStorage.setItem(COMPLETE_KEY, JSON.stringify(completed));
}

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteToDo(event) {
  const div = event.target.parentElement;
  const li = div.parentElement;
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  li.remove();
  saveTodo();
}

function paintDDay(due) {
  const today = new Date();
  const duedate = new Date(due);
  const dist = duedate - today;
  const dday = parseInt(Math.floor(dist / (1000 * 60 * 60 * 24)));
  if(dday === 0){
    return "D-DAY";
  }else {
    return `D-${dday}`
  }
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const divout = document.createElement("div");
  divout.className = "todo_list";

  const todo_status = document.createElement("div");
  todo_status.className = "todo_status";
  const d = paintDDay(newTodo.due);
  todo_status.innerText = d;
  if(d==="D-DAY"){
    todo_status.classList.add("dday");
  }

  const todo_txt = document.createElement("div");
  todo_txt.className = "todo_txt";
  todo_txt.innerText = newTodo.text;

  const button1 = document.createElement("button");
  button1.innerHTML = "<i></i>";
  button1.className = "fas fa-trash-alt fa-lg";
  button1.addEventListener("click", deleteToDo);

  const button2 = document.createElement("button");
  button2.innerHTML = "<i></i>";
  button2.className = "fas fa-check-square fa-lg";
  button2.addEventListener("click", completeToDo);
  
  li.appendChild(divout);
  divout.appendChild(todo_status);
  divout.appendChild(todo_txt);
  divout.appendChild(button1);
  divout.appendChild(button2);
  todoList.appendChild(li);
}

function paintCompleted(newCompleted) {
  const li = document.createElement("li");
  li.id =newCompleted.id;

  const divout = document.createElement("div");
  divout.className = "completed_list";

  const completed_status = document.createElement("div");
  completed_status.className = "completed_status";
  completed_status.innerText = 'COMPLETED';

  const completed_txt = document.createElement("div");
  completed_txt.className = "completed_txt";
  completed_txt.innerText =newCompleted.text;

  li.appendChild(divout);
  divout.appendChild(completed_status);
  divout.appendChild(completed_txt);
  completedList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInputTxt.value;
  const newTodoDue = todoInputDueDate.value;
  todoInputTxt.value = "";
  const newTodoObj = {
    text : newTodo,
    id: Date.now(),
    due: newTodoDue,
  };
  todos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveTodo();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintToDo);
}

const savedCompleted = localStorage.getItem(COMPLETE_KEY);
if(savedCompleted !== null) {
  const parsedCompleted = JSON.parse(savedCompleted);
  completed = parsedCompleted;
  parsedCompleted.forEach(paintCompleted);
}
