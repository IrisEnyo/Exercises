const filterSection = document.getElementById("filter-section");
const remove = document.getElementById("remove");
const inputTodo = document.getElementById("input-todo");
const addForm = document.getElementById("add-form");
const todoList = document.getElementById("todo-list");

// The State
const state = {
  currentFilter: "all",
  todos: [],
};

// Default Todo
if (state.task === 0) {
  const defaultTodo = {
    id: 1,
    description: "Set your priorities!",
    done: false,
  };
  state.task.push(defaultTodo);
  saveTodosToLocalStorage();
}

// Save/update Todos to local storage
function saveTodosToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(state.todos));
}

// Get/load Todos from local storage
function getTodosFromLocalStorage() {
  if (localStorage.getItem("todos")) {
    state.todos = JSON.parse(localStorage.getItem("tasks"));
  }
}

// Create Todo Item Template
function generateTodoItemTemplate(todo) {
  const li = document.createElement("li");
  li.classList.add("todo-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const label = document.createElement("label");
  label.innerText = todo.description;

  li.append(label, checkbox);

  return li;
}

// Render Todos
function render() {
  todoList.innerHTML = "";

  for (const todo of state.todos) {
    const newTodoItem = generateTodoItemTemplate(todo);
    todoList.appendChild(newTodoItem);
  }
}

// Function to initialize
function initialize() {
  getTodosFromLocalStorage();
  render();
}

// Add Todos to the List
function addTodo() {
  const newTodoText = inputTodo.value.trim().toLowerCase();

  // Duplicate check
  if (todos.some((todo) => todo.description.toLowerCase() === newTodoText)) {
    alert("Task is already registered!");
    return;
  } else {
    state.todos.push(newTodoText);
  }

  initialize();

  inputTodo.value = "";
}

addForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTodo();
});

// Event listener for filter buttons
filterSection.addEventListener("click", function (event) {
  if (event.target.type === "radio") {
    render();
  }
});

// Event listener for checkbox changes
todoList.addEventListener("change", function (e) {
  const checkbox = e.target;
  const li = checkbox.parentElement;
  const todoId = parseInt(li.dataset.id);

  // Update the state when the checkbox is changed
  todos = todos.map((todo) =>
    todo.id === todoId ? { ...todo, done: checkbox.checked } : todo
  );

  // Update local storage and render todos
  initialize();
});

// Remove done todos
remove.addEventListener("click", function () {
  todos = todos.filter((todo) => !todo.done);

  // Update local storage and render todos
  initialize();
});

// Filter Todos
function filterTodos() {
  const selectedFilter = document.querySelector(
    'input[name="filter"]:checked'
  ).value;

  for (const todo of todos) {
    if (
      (selectedFilter === "done" && todo.done) ||
      (selectedFilter === "open" && !todo.done) ||
      selectedFilter === "all"
    ) {
      render();
    }
  }
}

initialize();

// // Load state from local storage

// let todos = JSON.parse(localStorage.getItem("todos")) || [];

// // Add a default todo to the app state and save in local Storage
// if (todos.length === 0) {
//   todos.push({
//     id: 0,
//     description: "Set your priorities!",
//     done: false,
//   });
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// // Function to save/update local storage
// function updateLocalStorage() {
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// // Function to render todos
// function renderTodos() {
//   const selectedFilter = document.querySelector(
//     'input[name="filter"]:checked'
//   ).value;

//   todoList.innerHTML = "";

//   for (const todo of todos) {
//     if (
//       (selectedFilter === "done" && todo.done) ||
//       (selectedFilter === "open" && !todo.done) ||
//       selectedFilter === "all"
//     ) {
//       const newTodoLi = document.createElement("li");
//       newTodoLi.dataset.id = todo.id;
//       newTodoLi.innerText = todo.description;

//       const checkBox = document.createElement("input");
//       checkBox.setAttribute("type", "checkbox");
//       checkBox.checked = todo.done;
//       newTodoLi.appendChild(checkBox);

//       if (todo.done) {
//         newTodoLi.style.textDecoration = "line-through";
//       }

//       todoList.appendChild(newTodoLi);
//     }
//   }
// }

// // Add Todos to the List
// function addTodo() {
//   const newTodoText = inputTodo.value.trim().toLowerCase();

//   // Duplicate check
//   if (todos.some((todo) => todo.description.toLowerCase() === newTodoText)) {
//     alert("Duplicate todo!");
//     return;
//   }

//   // Generate unique ID
//   const newTodoId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

//   const newTodo = { id: newTodoId, description: newTodoText, done: false };
//   todos.push(newTodo);

//   // Update local storage and render todos
//   updateLocalStorage();
//   renderTodos();

//   inputTodo.value = "";
// }

// // Eventlistener for add Todos
// addForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   addTodo();
// });

// // Event listener for filter buttons
// filterSection.addEventListener("click", function (event) {
//   if (event.target.type === "radio") {
//     renderTodos();
//   }
// });
