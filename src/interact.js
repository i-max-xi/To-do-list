import { TaskObj, rearrange } from './add.js';

const CheckFunct = (e) => {
  const clickedCheck = e.target;
  if (clickedCheck.checked) {
    TaskObj.taskArr[clickedCheck.id].completed = true;
    clickedCheck.classList.add('completed');
    localStorage.setItem('Tasks', JSON.stringify(TaskObj.taskArr));
  } else {
    TaskObj.taskArr[clickedCheck.id].completed = false;
    clickedCheck.classList.remove('completed');
    localStorage.setItem('Tasks', JSON.stringify(TaskObj.taskArr));
  }
};

const clearArrItem = (el) => {
  if (el.completed == true) {
    TaskObj.taskArr.splice(el.index, 1);
    return el;
  }
};

const clear = () => {
  const completed = document.querySelectorAll('input:checked');

  completed.forEach((element) => {
    element.parentNode.remove();
    TaskObj.taskArr.splice(element.index, 1);
  });
  TaskObj.taskArr.filter(clearArrItem);
  TaskObj.taskArr.forEach(rearrange);
  localStorage.setItem('Tasks', JSON.stringify(TaskObj.taskArr));
};

export { CheckFunct, clear };
