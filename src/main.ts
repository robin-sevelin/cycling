import '../src/style/style.scss';

console.log('hej');

const hamburger: HTMLElement = document.querySelector(
  '.hamburger'
) as HTMLElement;
const navMenu: HTMLElement = document.querySelector('.nav-menu') as HTMLElement;

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
