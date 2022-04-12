document.body.addEventListener('keyup', (event) => {
  playSound(event.code.toLowerCase()) //pega o code da tecla que foi clicada
})

document.querySelector('.composer button').addEventListener('click', () => {
  let song = document.querySelector('#input').value;

  if (song != '') {
    let songArray = song.split('');
    playComposition(songArray)
  }
})

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`)
  let keyElement = document.querySelector(`div[data-key="${sound}"]`) 

  if (audioElement) {
    audioElement.currentTime = 0 //volta o som para o começo
    audioElement.play()
  }

  if(keyElement) {
    keyElement.classList.add('active')

    setTimeout(() => {
      keyElement.classList.remove('active')
    }, 300);
  };
}

function playComposition(songArray) {
  let wait = 0;

  for(let songItem of songArray) {
    setTimeout(() => {
      playSound(`key${songItem}`)
    }, wait);

    wait += 250
  }

}