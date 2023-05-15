let button = document.querySelector('.mobile-menu');
let links = document.querySelector('#links ul');

links.style.top = "-218px";

button.addEventListener('click', function () {
    links.style.transition = 'top 0.3s ease-in-out';
    links.style.top === '-218px' ? links.style.top = '35px' : links.style.top = '-218px';
})