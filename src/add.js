import removeTask from './remove.js';

export class TaskObj {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  static taskArr = [];

  static taskSection = document.querySelector('#taskSection');

  static i = 0;

  static x = 0;
}

const editTask = (e) => {
  const clickedEdit = e.target;
  const parent = clickedEdit.parentNode;
  const content = parent.querySelector('.taskElement');
  const newContent = prompt('edit your task here...');
  content.innerHTML = newContent;
};

const addItem = () => {
  //  Variables

  const inputted = document.querySelector('input').value;
  const newdiv = document.createElement('div');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const edit = document.createElement('span');
  edit.innerHTML = '&#9998;';
  edit.classList.add('symbols', 'editSymbol');
  edit.id = TaskObj.x;
  TaskObj.x += 1;

  const del = document.createElement('span');
  del.innerHTML = '&#x1f5d1;';
  del.classList.add('symbols', 'delSymbol');
  del.id = TaskObj.i;
  TaskObj.i += 1;

  const move = document.createElement('span');
  move.innerHTML = '&#8942;';
  move.classList.add('symbols');

  const taskText = document.createElement('span');

  //  implementation

  if (inputted !== '') {
    const taskItem = new TaskObj(inputted, false, TaskObj.taskArr.length + 1);
    TaskObj.taskArr.splice(TaskObj.taskArr.length, 0, taskItem);
    taskText.innerHTML = TaskObj.taskArr[TaskObj.taskArr.length - 1].description;
    taskText.classList.add('taskElement');
    newdiv.appendChild(checkbox);
    newdiv.appendChild(taskText);
    newdiv.appendChild(move);
    newdiv.appendChild(del);
    newdiv.appendChild(edit);
    TaskObj.taskSection.appendChild(newdiv);
    document.querySelector('input').value = '';
    localStorage.setItem('Tasks', JSON.stringify(TaskObj.taskArr));

    //  implement edit btn

    const editBtn = document.querySelectorAll('.editSymbol');
    editBtn.forEach((e) => {
      e.addEventListener('click', editTask);
    });

    //  implement removeBtn

    const delBtn = document.querySelectorAll('.delSymbol');
    delBtn.forEach((e) => {
      e.addEventListener('click', removeTask);
    });
  }
};

export { addItem, editTask };
