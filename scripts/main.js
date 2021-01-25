
import Card from './card.mjs'
import Storage from './storage.mjs'
import UIClass from './UI.mjs'

let counter = 1;
const tableElement = document.querySelector(".table")





document.addEventListener('DOMContentLoaded', ()=>{
  const UI = new UIClass(tableElement);
  const storage = new Storage();

  const instructionHeading = document.querySelector('h1');


  const resetTable = () =>{
    storage.shuffleCards();
    UI.showCards(storage.getCards())
  }
 
  const generateCards = () => {

    
    let counter = 0;
    for(let i = 1; i <= 4; i++){
      for(let j = 1; j <=13; j++){
        counter++;
        const card = new Card(counter, i); 
        storage.addCard(card);
      }
    }
  }


  generateCards();
  UI.showCards(storage.getCards());
  storage.sortCardInRow();
  document.addEventListener('keyup', (e) =>{ if(e.key ==' ') {resetTable()} })
  instructionHeading.addEventListener('click', resetTable)


})