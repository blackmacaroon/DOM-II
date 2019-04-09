// nav anchors change color mouseover
const navi = document.querySelector('nav');
navi.addEventListener('mouseover', function(event){
      event.target.style.color = "blue";
      setTimeout(function(){
            event.target.style.color = "";
      }, 400);

}, false); 

//nav anchors change font color on doubleclick
navi.addEventListener('dblclick', function(event){
      event.target.style.color = "orange";
});


// const mainNav = document.querySelector('main-navigation');
// mainNav.addEventListener('keydown', event => {
//       if(event.isComposing || event.keyCode === 65){
//             return;
//       }
//       mainNav.style.backgroundColor = "green";
// })

// const testLog = document.querySelector('.event-log-contents');
const logoRefresh = document.querySelector('.logo-heading');
logoRefresh.addEventListener('click', () => {
      window.setTimeout(() => {
            window.location.reload(true);
      }, 200);
});
// window.addEventListener('load', (event) => {
//       testLog.textContent = testLog.textContent + "load\n";
// });
// document.addEventListener('readystatechange', (event) => {
//       testLog.textContent = testLog.textContent + "readystate: ${document.readyState}\n";
// });
// document.addEventListener('DOMContentLoaded', (event) => {
//       testLog.textContent = testLog.textContent + "DOMContentLoaded\n"
// });

//change img on hover with mouseovere/mouseout
const busImg = document.querySelector('img');
busImg.addEventListener('mouseover', () => {
      event.target.setAttribute('src', 'img/funbus.png');
      busImg.addEventListener('mouseout', () => {
            event.target.setAttribute('src', 'img/fun-bus.jpg');      
      });
});


//sign up buttons go to google img search

navi.addEventListener('dblclick', function(event){
      event.target.style.color = "orange";
});

