"useStrict";

import "./style.css";
import * as Add from "./add.js";
// import * as interact from './interact.js';

const Enter = document.querySelector("#enter");

Enter.addEventListener("click", Add.addItem);

// if(interact.theCheckbox){
//     interact.CheckFunct();
// }


const display = () => {
  for (let p = 0; p < Add.TaskObj.old.length; p++) {
    //  Variables
    const taskSection = document.querySelector("#taskSection");
    const inputted = document.querySelector("input").value;
    const newdiv = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checks");

    const edit = document.createElement("span");
    edit.innerHTML = "&#9998;";
    edit.classList.add("symbols", "editSymbol");
    edit.id = Add.TaskObj.x;
    Add.TaskObj.x += 1;

    const del = document.createElement("span");
    del.innerHTML = "&#x1f5d1;";
    del.classList.add("symbols", "delSymbol");
    del.id = Add.TaskObj.i;
    Add.TaskObj.i += 1;

    const move = document.createElement("span");
    move.innerHTML = "&#8942;";
    move.classList.add("symbols");

    //  Implementation
    const taskText = document.createElement("span");
    const taskItem = new Add.TaskObj(
      inputted,
      false,
      Add.TaskObj.taskArr.length + 1
    );
    taskText.innerHTML = Add.TaskObj.old[p].description;
    Add.TaskObj.taskArr.push(Add.TaskObj.old[p]);
    taskText.classList.add("taskElement");
    newdiv.appendChild(checkbox);
    newdiv.appendChild(taskText);
    newdiv.appendChild(move);
    newdiv.appendChild(del);
    newdiv.appendChild(edit);
    taskSection.appendChild(newdiv);
    document.querySelector("input").value = "";

    //  implement edit btn

    const editBtn = document.querySelectorAll(".editSymbol");
    editBtn.forEach((e) => {
      e.addEventListener("click", Add.editTask);
    });

    //  implement removeBtn

    const delBtn = document.querySelectorAll(".delSymbol");
    delBtn.forEach((e) => {
      e.addEventListener("click", Add.removeTask);
    });
  }
};

display();
