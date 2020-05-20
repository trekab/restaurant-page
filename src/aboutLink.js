const aboutLinkModule = (parentNode) => {
  const aboutDiv = document.createElement('div');
  const aboutP = document.createElement('p');
  aboutP.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis aliquet quam, viverra tempus magna tincidunt non. Aenean consequat nisi magna, nec blandit velit faucibus a. Praesent vel eros a dui accumsan posuere. Maecenas a fermentum leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a sodales lacus. Mauris tempor urna lectus, id placerat dolor finibus ut. Aliquam laoreet arcu sit amet eros tristique bibendum. Cras vel tellus maximus, ullamcorper erat id, euismod neque. Donec id lectus eleifend, ullamcorper erat id, pharetra leo.';
  aboutDiv.appendChild(aboutP);
  parentNode.appendChild(aboutDiv);
};


export { aboutLinkModule as default };