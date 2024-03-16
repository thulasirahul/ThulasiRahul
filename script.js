const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#000000";
      } else {
        navbar.style.backgroundColor = "transparent";
}
}
const options={bottom: '20px',
right: '15px',
left: 'unset', 
time: '0.5s',
mixColor: '#fff',
backgroundColor: '#fff',
buttonColorDark: '#100f2c',
buttonColorLight: '#fff',
saveInCookies: true,
label: '🌞', 

autoMatchOsTheme: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();



