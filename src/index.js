import _, { add } from "lodash";
import "./style.css";

class TaskObj {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

//Cde Action
let task1 = new TaskObj("Wash the dishes", true, 0);
let task2 = new TaskObj("Complete to do list", true, 1);
const taskArr = [];
taskArr.push(task1, task2);

const display = (item, index) => {
  //Variables
  let taskIndex = taskArr[index].index;
  const taskSection = document.querySelector("#taskSection");
  const div = document.createElement('div');
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const span = document.createElement("span");
  span.innerHTML = `&#8942;`;
  span.classList.add("symbols");
  const taskText = document.createElement("span");

  //Display Actions

  taskText.innerHTML = taskArr[taskIndex].description;
  div.appendChild(checkbox);
  div.appendChild(taskText);
  div.appendChild(span);
  taskSection.appendChild(div);
};

taskArr.forEach(display);