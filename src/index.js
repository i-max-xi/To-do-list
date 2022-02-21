'useStrict';

import './style.css';
import * as Add from './add.js';
import * as interact from './interact.js';

const Enter = document.querySelector('#enter');

Enter.addEventListener('click', Add.addItem);

const display = () => {
  for (let p = 0; p < Add.TaskObj.old.length; p += 1) {
    //  Variables
    const taskSection = document.querySelector('#taskSection');
    const newdiv = document.createElement('div');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checks');
    checkbox.id = Add.TaskObj.z;
    Add.TaskObj.z += 1;

    const edit = document.createElement('span');
    edit.innerHTML = '&#9998;';
    edit.classList.add('symbols', 'editSymbol');
    edit.id = Add.TaskObj.x;
    Add.TaskObj.x += 1;

    const del = document.createElement('span');
    del.innerHTML = '&#x1f5d1;';
    del.classList.add('symbols', 'delSymbol');
    del.id = Add.TaskObj.i;
    Add.TaskObj.i += 1;

    const move = document.createElement('span');
    move.innerHTML = '&#8942;';
    move.classList.add('symbols');

    //  Implementation
    const taskText = document.createElement('span');

    taskText.innerHTML = Add.TaskObj.old[p].description;
    Add.TaskObj.taskArr.push(Add.TaskObj.old[p]);
    taskText.classList.add('taskElement');
    newdiv.appendChild(checkbox);
    newdiv.appendChild(taskText);
    newdiv.appendChild(move);
    newdiv.appendChild(del);
    newdiv.appendChild(edit);
    taskSection.appendChild(newdiv);
    document.querySelector('input').value = '';

    //  implement edit btn

    const editBtn = document.querySelectorAll('.editSymbol');
    editBtn.forEach((e) => {
      e.addEventListener('click', Add.editTask);
    });

    //  implement removeBtn

    const delBtn = document.querySelectorAll('.delSymbol');
    delBtn.forEach((e) => {
      e.addEventListener('click', Add.removeTask);
    });


      //implement check function

    const checkBtn = document.querySelectorAll('.checks');
    checkBtn.forEach((e) => {
      e.addEventListener('change', interact.CheckFunct);
    });

    // check those with true
    if(Add.TaskObj.old[p].completed == true){
      checkbox.setAttribute('checked','true');
    }
  }
  console.log(Add.TaskObj.taskArr);
};

display();

const clearBtn = document.querySelector('#clear');


clearBtn.addEventListener('click', interact.clear);