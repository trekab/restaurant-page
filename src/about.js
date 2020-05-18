
const aboutModule = (parentNode) => {
  const titleDiv = document.createElement('div');
  titleDiv.className = 'row justify-content-center';
  const title = document.createElement('h1');
  title.className = 'text-light rounded border border-light p-2';
  title.innerHTML = "Ratatouille's";
  titleDiv.appendChild(title);
  parentNode.appendChild(titleDiv);

  const navigation = document.createElement('ul');
  navigation.className = 'nav justify-content-center';

  const aboutItem = document.createElement('li');
  aboutItem.className = 'nav-item';
  const aboutLink = document.createElement('a');
  aboutLink.className = 'nav-link text-light';
  aboutLink.textContent = 'About';
  aboutItem.appendChild(aboutLink);
  navigation.appendChild(aboutItem);

  const menuItem = document.createElement('li');
  menuItem.className = 'nav-item';
  const menuLink = document.createElement('a');
  menuLink.className = 'nav-link text-light';
  menuLink.textContent = 'Menu';
  menuItem.appendChild(menuLink);
  navigation.appendChild(menuItem);

  const contactItem = document.createElement('li');
  contactItem.className = 'nav-item';
  const contactLink = document.createElement('a');
  contactLink.className = 'nav-link text-light';
  contactLink.textContent = 'Contact';
  contactItem.appendChild(contactLink);
  navigation.appendChild(contactItem);

  parentNode.appendChild(navigation);

  const aboutContent = document.createElement('div');
  aboutContent.className = 'col-md-8 mx-auto card text-white mt-3 p-5 min-vh-75 border border-light';
  const aboutP = document.createElement('p');
  aboutP.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis aliquet quam, viverra tempus magna tincidunt non. Aenean consequat nisi magna, nec blandit velit faucibus a. Praesent vel eros a dui accumsan posuere. Maecenas a fermentum leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a sodales lacus. Mauris tempor urna lectus, id placerat dolor finibus ut. Aliquam laoreet arcu sit amet eros tristique bibendum. Cras vel tellus maximus, ullamcorper erat id, euismod neque. Donec id lectus eleifend, ullamcorper erat id, pharetra leo.';
  aboutContent.appendChild(aboutP);
  parentNode.appendChild(aboutContent);
};

export { aboutModule as default };