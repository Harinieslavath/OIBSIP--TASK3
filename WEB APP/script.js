let taskList = [];

function addTask() {
  const input = document.getElementById('task-input');
  const taskText = input.value;
  input.value = '';

  if (taskText.trim() !== '') {
    const task = { text: taskText, color: '#ffffff' };
    taskList.push(task);
    renderTasks();
  }
}

function deleteTask(index) {
  taskList.splice(index, 1);
  renderTasks();
}

function changeColor(index) {
  const color = prompt('Enter a color code (e.g., #ff0000):');
  if (color !== null) {
    taskList[index].color = color;
    renderTasks();
  }
}

function renderTasks() {
  const taskListElement = document.getElementById('task-list');
  taskListElement.innerHTML = '';

  for (let i = 0; i < taskList.length; i++) {
    const task = taskList[i];

    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.style.backgroundColor = task.color;

    const taskText = document.createElement('span');
    taskText.innerText = task.text;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(i));

    const colorButton = document.createElement('button');
    colorButton.classList.add('color-button');
    colorButton.innerText = 'Change Color';
    colorButton.addEventListener('click', () => changeColor(i));

    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(colorButton);

    taskListElement.appendChild(taskItem);
  }
}
