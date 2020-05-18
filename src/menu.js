
const createMenuItem = (item, price) => {
  const menuListItem = document.createElement('li');
  menuListItem.className = 'list-group-item d-flex justify-content-between align-items-center custom-bg';
  const itemName = document.createElement('span');
  itemName.textContent = item;
  menuListItem.appendChild(itemName);
  const itemPrice = document.createElement('span');
  itemPrice.className = 'badge badge-secondary badge-pill';
  itemPrice.textContent = price;
  menuListItem.appendChild(itemPrice);
  return menuListItem;
};

const menuModule = (parentNode) => {
  const menuList = document.createElement('ul');
  menuList.className = 'list-group';

  menuList.appendChild(createMenuItem('Kicommando', '$5'));
  menuList.appendChild(createMenuItem('Fries', '$5'));
  menuList.appendChild(createMenuItem('Rolex', '$5'));
  parentNode.appendChild(menuList);
};


export { menuModule as default };