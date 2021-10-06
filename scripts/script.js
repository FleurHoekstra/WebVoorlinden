// var aanButton = document.querySelector ('#darkmodeOn');
// var uitButton = document.querySelector ('#darkmodeOff');
var darkmodeButton = document.querySelector ('#darkmodeOn')

function clickOn() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

darkmodeButton.addEventListener('click' , clickOn );

// var aanButton = document.querySelector ('#lichtAan');
// var uitButton = document.querySelector ('#lichtUit');
// var overlayElement = document.querySelector('#overlay')

// // aan/uitknop
// function aanKnop() {
//     console.log('schakel aan');
//    overlayElement.classList.remove('overlayaan');
// }

// function uitKnop() {
//     console.log('schakel uit');
//     overlayElement.classList.add('overlayaan');
// }

// aanButton.addEventListener('click' , aanKnop );
// uitButton.addEventListener('click' , uitKnop );



