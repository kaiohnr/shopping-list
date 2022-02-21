const addInputElement = document.getElementById('input-item');

const needBtnElement = document.getElementById('need-btn');
const haveBtnElement = document.getElementById('have-btn');

const needContainer = document.getElementById('need-container');
const haveContainer = document.getElementById('have-container');
const itemsContainer = document.getElementById('items-container');
const mainContainer = document.getElementById('need-container');

needBtnElement.addEventListener('click', createNewElement);
haveBtnElement.addEventListener('click', createNewElement);

needContainer.addEventListener('click', removeItemNeed);
haveContainer.addEventListener('click', removeItemHave);

function createNewElement(event) {
  const buttonTarget = event.target.dataset.buttonid; // identify which button was clicked by its data
  const itemName = addInputElement.value;
  const specialChars = /[\/:*?"<>|]/;

  if (itemName.trim() == '') {
    alert('Please, write an item before adding it to your list.');
    addInputElement.value = '';
    return;
  } else if (itemName.match(specialChars)) {
    addInputElement.value = '';
    alert(
      `The item name can't contain any of the following characters: ${specialChars}`
    );
    return;
  }

  const createNewItem = document.createElement('p');

  if (buttonTarget == 'need') {
    createNewItem.innerHTML = `${itemName} 
    <input type="checkbox" class="checkbox" value="1"/> 
    <span id="remove-item" class="remove-item">x</span> <hr>`;
    needContainer.append(createNewItem);
  } else {
    createNewItem.innerHTML = `${itemName} 
    <input type="checkbox" checked="true" class="checkbox"/> 
    <span id="remove-item" class="remove-item">x</span> <hr>`;
    haveContainer.append(createNewItem);
  }

  addInputElement.value = '';
  itemsContainer.style.display = 'block';
}

function removeItemNeed(event) {
  if (event.target.classList.contains('remove-item')) {
    event.target.parentElement.remove();
  } else if (event.target.classList.contains('checkbox')) {
    haveContainer.append(event.target.parentElement);
  }
}

function removeItemHave(event) {
  if (event.target.classList.contains('remove-item')) {
    event.target.parentElement.remove();
  } else if (event.target.classList.contains('checkbox')) {
    needContainer.append(event.target.parentElement);
  }
}
