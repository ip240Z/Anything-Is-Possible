let pinwheel = document.querySelector('#pinwheel');
let title = document.querySelector('.zomboTitle');
let background = document.querySelector('.background');
let audio = document.querySelector('#audio');
let evilAudio = document.querySelector('#evilAudio');
const button = document.querySelector("#button");

let toggle = true
let changeBanner = () => {
    if (toggle === true) {
        audio.pause()
        title.src = "zomboPics/inversezombocom.png"
        evilAudio.play()
    } else {
        evilAudio.pause();
        title.src = 'zomboPics/zombocom.png'
        audio.play()
    }
    toggle = !toggle;
}

button.addEventListener("click", () => {
    if (audio.paused) {
      audio.volume = 0.5;
      if (toggle === true) {audio.play();
        } else {evilAudio.play()}
    
    } else {
      if (toggle === true) {audio.pause();
    } else {
          evilAudio.pause();
        }
 
    }
    button.classList.add("fade");
  });

pinwheel.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Clicked yourself into evil...')
    changeBanner();
    pinwheel.classList.toggle('spin')
    pinwheel.classList.toggle('evil-spin')   
    
    background.classList.toggle('background')
    background.classList.toggle('evil-background')

})