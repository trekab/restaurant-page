
import aboutModule from './about';
import menuModule from './menu';

const content = document.getElementById("content");
content.className = "container mt-5 mb-5 pt-5 pb-5 rounded border border-light min-vh-100";

aboutModule(content);

const navItems = document.querySelectorAll('.nav-link');

const pageContent = document.querySelector('.card');

navItems[1].addEventListener('click', () => {
	pageContent.innerHTML = '';
	menuModule(pageContent);
});