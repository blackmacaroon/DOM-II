
/////////////////////////////////////////////////      imports? confused where this goes. I ran npm install gsap, I have the most recent version.
//import TweenMax from "gsap/TweenMax";
/////////////////////////////////////////////////      variables

const navi = document.querySelector('nav');
const navLink = document.querySelectorAll('.nav-link');
const busImg = document.querySelector('.intro img');
const logoRefresh = document.querySelector('.logo-heading');
const headerP = document.querySelector('p');
const headerP2 = document.querySelector('.intro p');
const contentImg = document.querySelectorAll('.content-section img');
const imageContent = document.querySelectorAll('.content-destination img');
const destin = document.querySelectorAll('.destination');
const foot = document.querySelector('footer');
const butt = document.querySelectorAll('.btn');

////////////////////////////////////////////////       events

// on load, alert a thing!
// window.addEventListener('load', function () {
//       alert('whatchu want?');
// });

// on click, change any text color in the window
window.addEventListener('click', function (event) {
      event.target.style.color = `rgb(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
});

//nav anchors change font color on doubleclick
navi.addEventListener('dblclick', function (event) {
      event.target.style.color = 'orange';
});

//nav prevent default
navi.addEventListener('click', function (event) {
      event.preventDefault();
});

//change img on hover with mouseovere/mouseout
busImg.addEventListener('mouseover', () => {
      event.target.setAttribute('src', 'img/funbus.png');
      busImg.addEventListener('mouseout', () => {
            event.target.setAttribute('src', 'img/fun-bus.jpg');
      });
});

//click bus pic vanish bus pic
busImg.addEventListener('click', function (event) {
      event.target.style.display = 'none';
      setTimeout(() => {
            event.target.style.display = '';
      }, 900);
}, false);

//clicking logo refreshes page
logoRefresh.addEventListener('click', () => {
      window.setTimeout(() => {
            window.location.reload(true);
      }, 200);
});

//click footer vanish footer
foot.addEventListener('click', function (event) {
      event.target.style.display = 'none';
      setTimeout(() => {
            event.target.style.display = '';
      }, 900);
}, false);

// key down header p rainbow
document.addEventListener('keydown', function (event) {
      if (event.code == 'KeyR') {
            headerP.style.color = 'red';
      }
});
document.addEventListener('keydown', function (event) {
      if (event.code == 'KeyO') {
            headerP.style.color = 'orange';
      }
});
document.addEventListener('keydown', function (event) {
      if (event.code == 'KeyG') {
            headerP.style.color = 'green';
      }
});
document.addEventListener('keydown', function (event) {
      if (event.code == 'KeyP') {
            headerP.style.color = 'purple';
      }
});
document.addEventListener('keydown', function (event) {
      if (event.code == 'KeyY') {
            headerP.style.color = 'yellow';
      }
});
document.addEventListener('keydown', function (event) {
      if (event.code == 'KeyB') {
            headerP.style.color = 'blue';
      }
});

// key up header p unrainbow
document.addEventListener('keyup', function (event) {
      if (event.code == 'KeyR' || event.code == 'KeyO' || event.code == 'KeyG' || event.code == 'KeyP' || event.code == 'KeyB' || event.code == 'KeyY') {
            headerP.style.color = "";
      }
});

// wheel, allegedly
headerP2.addEventListener('wheel', wheel);
function wheel() {
      this.style.fontSize = '35px';
}

// change nav links to random color and prevent default
navLink.forEach(function (element) {
      element.addEventListener('mouseover', function (event) {
            event.target.style.color = `rgb(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
      });
      element.addEventListener('click', function (event) {
            event.preventDefault();
            TweenMax.to('.nav', 2.5, {x:19, ease: Elastic.easeOut});
      });
      
});

contentImg.forEach(function (element) {
      element.addEventListener('mouseover', function (event) {
            event.target.style.border = `2px solid rgb(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
      });
      // element.addEventListener('click', function (event) {
      //       TweenMax.to('.img-content', 2.5, {y:-30, ease: Elastic.easeOut});
      // } )
});

// focus blur fat random color border
imageContent.forEach(function (element) {
      element.tabIndex = 1;
      element.addEventListener('focus', function (event) {
            event.target.style.border = `12px solid rgb(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
      });
      element.addEventListener('blur', function (event) {
            event.target.style.border = '';
      });
});



// anything but an arrow
// document.addEventListener('keypress', (event) => {
//       if(event.keyCode !== 37 || event.keyCode !== 38 || event.keyCode !== 39 || event.keyCode !== 40){
//         alert('teeheeheeee');
//       }
//     })