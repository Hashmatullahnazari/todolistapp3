const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', event => {
  event.preventDefault();

  const newItem = document.createElement('li');
  newItem.innerHTML = `
    <span>${input.value}</span>
    <i class="fa fa-trash fa-lg"></i>
  `;
  list.appendChild(newItem);

  input.value = '';
});

list.addEventListener('click', event => {
  if (event.target.classList.contains('fa-trash')) {
    const listItem = event.target.parentElement;
    list.removeChild(listItem);
  }
});
