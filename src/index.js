'useStrict';

import './style.css';
import * as Add from './add.js';
import * as interact from './interact.js';

const Enter = document.querySelector('#enter');

Enter.addEventListener('click', (Add.addItem));

if(interact.theCheckbox){
    interact.CheckFunct();
}

const display = () => {
    // const inputted = document.querySelector('input').value;
    // const newdiv = document.createElement('div');
  
    // const checkbox = document.createElement('input');
    // checkbox.type = 'checkbox';
    // checkbox.classList.add('checks');
  
    // const edit = document.createElement('span');
    // edit.innerHTML = '&#9998;';
    // edit.classList.add('symbols', 'editSymbol');
    // edit.id = Add.TaskObj.x;
    // Add.TaskObj.x += 1;
  
    // const del = document.createElement('span');
    // del.innerHTML = '&#x1f5d1;';
    // del.classList.add('symbols', 'delSymbol');
    // del.id = Add.TaskObj.i;
    // Add.TaskObj.i += 1;
  
    // const move = document.createElement('span');
    // move.innerHTML = '&#8942;';
    // move.classList.add('symbols');
  
    // const taskText = document.createElement('span');


    // taskText.innerHTML = localStorage.Tasks[Add.TaskObj.taskArr.length - 1].description;
    // taskText.classList.add('taskElement');
    // newdiv.appendChild(checkbox);
    // newdiv.appendChild(taskText);
    // newdiv.appendChild(move);
    // newdiv.appendChild(del);
    // newdiv.appendChild(edit);
    // Add.TaskObj.taskSection.appendChild(newdiv);
    for (let p = 0; p<localStorage.Tasks.length; p++){
        console.log(localStorage.Tasks[p].description);
    }
    
}

console.log(localStorage.Tasks);
// display();