const toggleBtn = document.querySelector('.toggle-btn');
const menubox = document.querySelector('.menubox');

function activateMenu(){
    toggleBtn.classList.toggle('active');
    menubox.classList.toggle('active');
}
toggleBtn.addEventListener('click', activateMenu);
