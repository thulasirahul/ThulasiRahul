const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#000000";
      } else {
        navbar.style.backgroundColor = "transparent";
}
}
function funt() {
    alert("Hello! my number-7010510975");
  }



  const showPopup = document.querySelector('.show-popup');
const popupContainer = document.querySelector('.popup-container');
const closeBtn = document.querySelector('.close-btn');
showPopup.onclick = () => {
    popupContainer.classList.add('active');
}