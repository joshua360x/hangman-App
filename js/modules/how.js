import {sound} from './../data/sound.js'
import Home from './home.js'

const How = (_ => {
  //cache the DOM 
  const $hangman = document.querySelector(".hangman")

  const init = _ => {
    render();
    listeners();
  }

const listeners = _ => {
  document.querySelector(".hangman__trigger").addEventListener("click", _ => {
    sound.click.play()
    Home.init()
  })
}
  const render = _ => {
    let markup = `
    <h1 class="hangman__title">Instructions</h1>
    <ul class="how"> 
    <li class="gameHow"></li> Press New Game and Guess Away</li>
    </ul>
    <button class="button hangman__trigger">Main Menu</button>
    `
    $hangman.innerHTML = markup
  }

  return {
    init
  }
})();

export default How;