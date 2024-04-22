const menu = document.querySelector('.nav__menu');
const menuList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__link');

menu.addEventListener('click', () => {
	menuList.classList.toggle('nav__list--show');
});

links.forEach((link) => {
	link.addEventListener('click', () => {
		menuList.classList.remove('nav__list--show');
	});
});