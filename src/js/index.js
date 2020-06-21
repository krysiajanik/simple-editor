import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

let textArea = document.getElementById('textarea');



//Make the style Italic

const iconItalic = document.querySelector('.icons__italic--js');

iconItalic.addEventListener('click', () => {
  if (textArea.style.fontStyle == 'italic') {
    textArea.style.fontStyle = 'normal'
  } else
    textArea.style.fontStyle = 'italic'

});


//Bold the text

const iconBold = document.querySelector('.icons__bold--js');

iconBold.addEventListener('click', () => {
  if (textArea.style.fontWeight == 'bold') {
    textArea.style.fontWeight = 'normal'
  } else
    textArea.style.fontWeight = 'bold'
});



//Save the text from textarea

const buttonSave = document.querySelector('.button__save--js');

buttonSave.addEventListener('click', () => {
  localStorage.setItem('SavedText', textArea.value);
});


//Load the text from local storage

const buttonLoad = document.querySelector('.button__load--js');

buttonLoad.addEventListener('click', () => {
  let loadText = localStorage.getItem('SavedText');
  if (localStorage.getItem('SavedText') == null) {
    alert('Nothing to load!')
  } else
  textArea.value = loadText;
});
