import { CheckFunct } from './interact.js';

let taskArr = [];

if (JSON.parse(localStorage.getItem('Tasks')) === null) {
  const testArr = {
    description: 'Buy me a coffee',
    completed: false,
    index: 1,
  };
  taskArr.push(testArr);
  localStorage.setItem('Tasks', JSON.stringify(taskArr));
}

export class TaskObj {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  static taskSection = document.querySelector('#taskSection');

  static i = 0; // delete ID

  static x = 0; // edit ID

  static z = 0; //  checkbox ID

  static old = JSON.parse(localStorage.getItem('Tasks'));
}

taskArr = [...TaskObj.old];

// remove and rearrange

export const rearrange = (item, pos) => {
  item.index = pos + 1;
};

const removeTask = (e) => {
  const clickedRemove = e.target;
  const parent = clickedRemove.parentNode;
  parent.remove();
  taskArr.splice(clickedRemove.id, 1);
  taskArr.forEach(rearrange);
  localStorage.setItem('Tasks', JSON.stringify(taskArr));
};

const editTask = (e) => {
  const clickedEdit = e.target;
  const parent = clickedEdit.parentNode;
  const content = parent.querySelector('.taskElement');
  const newContent = document.createElement('input');
  newContent.placeholder = 'Enter replacement here...';
  const newHead = document.querySelector('#head');
  newHead.appendChild(newContent);

  const OK = document.createElement('button');
  OK.innerHTML = 'OK';
  OK.id = 'ok';
  newHead.appendChild(OK);
  const OKbtn = document.querySelector('#ok');

  OKbtn.addEventListener('click', () => {
    content.innerText = newContent.value;
    taskArr[clickedEdit.id].description = newContent.value;
    localStorage.setItem('Tasks', JSON.stringify(taskArr));
    newContent.remove();
    OK.remove();
  });
};

const addItem = () => {
  //  Variables

  const inputted = document.querySelector('input').value;
  const newdiv = document.createElement('div');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checks');
  checkbox.id = TaskObj.z;
  TaskObj.z += 1;

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
    const taskItem = new TaskObj(inputted, false, taskArr.length + 1);
    taskArr.splice(taskArr.length, 0, taskItem);
    taskText.innerHTML = taskArr[taskArr.length - 1].description;
    taskText.classList.add('taskElement');
    newdiv.appendChild(checkbox);
    newdiv.appendChild(taskText);
    newdiv.appendChild(move);
    newdiv.appendChild(del);
    newdiv.appendChild(edit);
    TaskObj.taskSection.appendChild(newdiv);
    document.querySelector('input').value = '';
    localStorage.setItem('Tasks', JSON.stringify(taskArr));

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

    //  implement check function

    const checkBtn = document.querySelectorAll('.checks');
    checkBtn.forEach((btn) => {
      btn.addEventListener('change', CheckFunct);
    });
  }
};

export { addItem, editTask, removeTask };
