const form = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const dateInput = document.getElementById('date-input');
const todoList = document.getElementById('todo-list');
const filterInput = document.getElementById('filter-input');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const task = todoInput.value.trim();
  const date = dateInput.value;

  if (!task || !date) {
    alert('Please fill out both fields.');
    return;
  }

  addTodo(task, date);
  form.reset();
});

function addTodo(task, date) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${task} - <small>${date}</small></span>
    <button onclick="deleteTodo(this)">Delete</button>
  `;
  todoList.appendChild(li);
}

function deleteTodo(btn) {
  const li = btn.parentElement;
  todoList.removeChild(li);
}

filterInput.addEventListener('keyup', function() {
  const filterText = filterInput.value.toLowerCase();
  const todos = todoList.getElementsByTagName('li');

  Array.from(todos).forEach(function(todo) {
    const text = todo.textContent.toLowerCase();
    todo.style.display = text.includes(filterText) ? '' : 'none';
  });
});
