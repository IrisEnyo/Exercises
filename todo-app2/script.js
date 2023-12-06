const remove = document.getElementById("remove");
const addForm = document.getElementById("add-form");
const inputTodo = document.getElementById("input-todo");
const todoList = document.getElementById("todo-list");
const filterSection = document.getElementById("filter-section");

const todos = [
  {
    id: 0,
    description: "Learn CSS",
    isDone: false,
  },
  {
    id: 1,
    description: "Learn HTML",
    isDone: true,
  },
  {
    id: 1,
    description: "Learn JS",
    isDone: false,
  },
];

function saveTodoItems() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// render
function renderTodos() {
  todoList.innerHTML = "";

  for (const todo of todoList) {
    const li = document.createElement("li");

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "is-done");
    input.setAttribute("id", `checkbox-${todo.id}`);

    if (todo.isDone) {
      input.setAttribute("checked", "");
    }

    input.addEventListener("change", () => {
      todo.isDone = input.checked;
      saveTodoItems();
      renderTodos();
    });

    const label = document.createElement("label");
    label.setAttribute("for", `checkbox-${todo.id}`);
    label.textContent = todo.description;

    if (todo.isDone) {
      label.style.textDecoration = "line-through";
    }

    li.append(input, label);

    todoList.append(li);
  }
}

// Event Listener
addForm.addEventListener("submit", (event) => {
  event.preventDefault();

  saveTodoItems();
  renderTodos();
});

// // Save Todos / update local storage
// function updateLocalStorage() {
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// // Load Todos / state from local storage
// let todos = JSON.parse(localStorage.getItem("todos")) || [];

// // Add a default todo to the app state
// if (todos.length >= 0) {
//   todos.push({ id: 0, description: "Set your priority!", done: false });
// }

// // Event listener for filter buttons
// filterSection.addEventListener("click", function () {
//   let currentFilter = "open";
//   const filteredTodos = todos.filter((todo) => {
//     if (currentFilter === "done") {
//       return todo.done;
//     }

//     if (currentFilter === "open") {
//       return !todo.done;
//     }

//     return true;
//   });
//   {
//     renderTodos();
//   }
// });

// // Function to render todos
// function renderTodos() {
//   todoList.innerHTML = "";

//   for (const todo of todos) {
//     const li = document.createElement("li");

//     const input = document.createElement("input");
//     input.setAttribute("type", "checkbox");
//     input.setAttribute("name", "is-done");
//     input.setAttribute("id", `checkbox-${todo.id}`);

//     if (todo.done) {
//       input.setAttribute("checked", "");
//     }

//     input.addEventListener("change", () => {
//       todo.done = input.checked;

//       updateLocalStorage();
//       renderTodos();
//     });

//     const label = document.createElement("label");
//     label.setAttribute("for", `checkbox-${todo.id}`);
//     label.textContent = todo.description;

//     if (todo.done) {
//       label.style.textDecoration = "line-through";
//     }

//     li.append(label, input);

//     todoList.append(li);
//   }
// }

// // Initial render
// renderTodos();
