
import aboutModule from './about';
import menuModule from './menu';
import aboutLinkModule from './aboutLink';
import contactModule from './contact';


const content = document.getElementById("content");
content.className = "container mt-5 mb-5 pt-5 pb-5 rounded border border-light min-vh-100";

aboutModule(content);

const navItems = document.querySelectorAll('.nav-link');

const pageContent = document.querySelector('.card');

navItems[0].addEventListener('click', () => {
	pageContent.innerHTML = '';
	navItems[0].className = 'nav-link text-light border-bottom';
	navItems[1].className = 'nav-link text-light';
	navItems[2].className = 'nav-link text-light';
	aboutLinkModule(pageContent);
});

navItems[1].addEventListener('click', () => {
	pageContent.innerHTML = '';
	navItems[0].className = 'nav-link text-light';
	navItems[1].className = 'nav-link text-light border-bottom';
	navItems[2].className = 'nav-link text-light';
	menuModule(pageContent);
});

navItems[2].addEventListener('click', () => {
	pageContent.innerHTML = '';
	navItems[0].className = 'nav-link text-light';
	navItems[1].className = 'nav-link text-light';
	navItems[2].className = 'nav-link text-light border-bottom';
	contactModule(pageContent);
});

