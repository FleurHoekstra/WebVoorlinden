// var aanButton = document.querySelector ('#darkmodeOn');
// var uitButton = document.querySelector ('#darkmodeOff');
var darkmodeButton = document.querySelector ('#darkmodeOn')

function darkmodeOn() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}