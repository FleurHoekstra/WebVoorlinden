var darkmodeButton = document.querySelector ('#darkmodeOn')

function clickOn() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

darkmodeButton.addEventListener('click' , clickOn );



