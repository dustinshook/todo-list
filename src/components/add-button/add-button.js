import './add-button.css';

const renderAddButton = () => {
  const addButton = document.createElement('div');
    addButton.classList.add('card-button');

  const addButtonIcon = document.createElement('i');
    addButtonIcon.classList.add('fas', 'fa-plus');

  addButton.appendChild(addButtonIcon);

  const addButtonInput = document.createElement('input');
    addButtonInput.setAttribute('type', 'text');
    addButtonInput.setAttribute('placeholder', 'Add a task');

  addButton.appendChild(addButtonInput);

  return addButton;

};

export { renderAddButton };