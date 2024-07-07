import './task-list.css';

const renderTaskList = (tasks) => {
  const taskList = document.createElement('div');
  taskList.classList.add('task-list');

  tasks.forEach(task => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const taskItemCheckbox = document.createElement('input'); 
    taskItemCheckbox.setAttribute('type', 'checkbox');
    taskItem.appendChild(taskItemCheckbox);

    const taskItemText = document.createElement('span');
    taskItemText.textContent = task;

    taskItem.appendChild(taskItemText);

    taskList.appendChild(taskItem);
  });

  return taskList;
};

export { renderTaskList };