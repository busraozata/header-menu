const menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const listItem = document.querySelectorAll('.list-item');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

//list-item click 
function CloseMenu() {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}