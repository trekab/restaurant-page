
const contactModule = (parentNode) => {
  const contactForm = document.createElement('form');
  contactForm.className = 'custom-bg p-4 rounded';

  const nameDiv = document.createElement('div');
  nameDiv.className = 'form-group';
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name:';
  nameLabel.for = 'name';
  const nameInput = document.createElement('input');
  nameInput.className = 'form-control';
  nameInput.type = 'text';
  nameInput.id = 'name';
  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(nameInput);
  contactForm.appendChild(nameDiv);

  const emailDiv = document.createElement('div');
  emailDiv.className = 'form-group';
  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email address:';
  emailLabel.for = 'email';
  const emailInput = document.createElement('input');
  emailInput.className = 'form-control';
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(emailInput);
  contactForm.appendChild(emailDiv);

  const phoneDiv = document.createElement('div');
  phoneDiv.className = 'form-group';
  const phoneLabel = document.createElement('label');
  phoneLabel.textContent = 'Phone:';
  phoneLabel.for = 'phone';
  const phoneInput = document.createElement('input');
  phoneInput.className = 'form-control';
  phoneInput.type = 'tel';
  phoneInput.id = 'phone';
  phoneDiv.appendChild(phoneLabel);
  phoneDiv.appendChild(phoneInput);
  contactForm.appendChild(phoneDiv);

  const messageDiv = document.createElement('div');
  messageDiv.className = 'form-group';
  const messageLabel = document.createElement('label');
  messageLabel.textContent = 'Message:';
  messageLabel.for = 'message';
  const messageInput = document.createElement('textarea');
  messageInput.className = 'form-control';
  messageInput.id = 'message';
  messageInput.rows = 3;
  messageDiv.appendChild(messageLabel);
  messageDiv.appendChild(messageInput);
  contactForm.appendChild(messageDiv);

  const submitButton = document.createElement('button');
  submitButton.className = 'btn text-light rounded border border-light custom-bg';
  submitButton.textContent = 'Send Form';
  submitButton.type = 'submit';
  contactForm.appendChild(submitButton);

  parentNode.appendChild(contactForm);
};


export { contactModule as default };