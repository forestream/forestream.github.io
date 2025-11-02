const todos = [
  {
    id: 1,
    text: "Buy groceries",
    completed: false,
  },
  {
    id: 2,
    text: "Finish the project",
    completed: true,
  },
  {
    id: 3,
    text: "Call the doctor",
    completed: false,
  },
];

const allButton = document.getElementById("all-todos");
const completedButton = document.getElementById("completed-todos");
const todoList = document.getElementById("todo-list");

todos.forEach((todo) => {
  const li = document.createElement("li");
  li.textContent = todo.text;
  todoList.appendChild(li);
});

function clearTodos(todoList) {
  todoList.innerHTML = "";
}

function renderAllTodos(todos) {
  clearTodos(todoList);
  todoList.dataset.filter = "all";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    todoList.appendChild(li);
  });
}

function renderCompletedTodos(todos) {
  clearTodos(todoList);
  todoList.dataset.filter = "completed";
  todos
    .filter((todo) => todo.completed)
    .forEach((todo) => {
      const li = document.createElement("li");
      li.textContent = todo.text;
      todoList.appendChild(li);
    });
}

allButton.addEventListener("click", async () => {
  startViewTransition("all");
});
completedButton.addEventListener("click", async () => {
  startViewTransition("completed");
});

function startViewTransition(type) {
  if (type === "all") {
    const transition = document.startViewTransition(() => {
      renderAllTodos(todos);
    });

    return transition;
  } else if (type === "completed") {
    const transition = document.startViewTransition(() => {
      renderCompletedTodos(todos);
    });

    return transition;
  }
}
