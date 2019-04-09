// Your code goes here
const navi = document.querySelector('nav');
navi.addEventListener('mouseover', function(event){
      event.target.style.color = "blue";
      setTimeout(function(){
            event.target.style.color = "";
      }, 400);

}, false); 

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
