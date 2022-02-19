import { addItem, TaskObj } from './add';

export const rearrange = (item, pos) => {
  item.index = pos + 1;
};

const removeTask = (e) => {
  let clickedRemove = e.target;
  let parent = clickedRemove.parentNode;
  parent.remove();
  TaskObj.taskArr.splice(clickedRemove.id, 1);
  TaskObj.taskArr.forEach(rearrange);
  localStorage.setItem('Tasks', JSON.stringify(TaskObj.taskArr));
};

export default removeTask;
