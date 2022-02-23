const CheckFunct = (e) => {
  const old = JSON.parse(localStorage.getItem('Tasks'));
  const taskArr = [...old];
  const clickedCheck = e.target;
  if (clickedCheck.checked) {
    taskArr[clickedCheck.id].completed = true;
    clickedCheck.classList.add('completed');
    localStorage.setItem('Tasks', JSON.stringify(taskArr));
  } else {
    taskArr[clickedCheck.id].completed = false;
    clickedCheck.classList.remove('completed');
    localStorage.setItem('Tasks', JSON.stringify(taskArr));
  }
};

const rearrange = (item, pos) => {
  item.index = pos + 1;
};

const clearArrItem = (el) => {
  const old = JSON.parse(localStorage.getItem('Tasks'));
  const taskArr = [...old];
  if (el.completed === true) {
    taskArr.splice(el.index, 1);
  }
  return el;
};

const clear = () => {
  const old = JSON.parse(localStorage.getItem('Tasks'));
  const taskArr = [...old];
  const completed = document.querySelectorAll('input:checked');

  if (completed) {
    completed.forEach((element) => {
      element.parentNode.remove();
      taskArr.splice(element.index, 1);
    });
    taskArr.filter(clearArrItem);
    taskArr.forEach(rearrange);
    localStorage.setItem('Tasks', JSON.stringify(taskArr));
  }
};

export { CheckFunct, clear };
