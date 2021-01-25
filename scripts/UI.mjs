export default class UIClass{
  constructor(table){
    this.table = table
  }

  createCardElement(card){
    const cardDiv = document.createElement('div')
    const cardFront = document.createElement('div')
    const cardBack = document.createElement('div')
    
    cardDiv.classList.add("card");
    cardFront.classList.add("card__face", "card__face--front");
    cardBack.classList.add("card__face", "card__face--back");
    
    cardDiv.appendChild(cardFront);
    cardDiv.appendChild(cardBack);
    
    cardBack.dataset.number = card.number;
    cardBack.dataset.shape = card.shape
    return cardDiv
  }

  showCards(cards){
    this.table.innerHTML="";


    const cardsElements = cards.map(card => this.createCardElement(card));

    cardsElements.forEach(cardElement =>this.table.appendChild(cardElement));

    setTimeout(()=>{
      const allCards = document.querySelectorAll('.card');
        let animationDelay = 0;
        
        allCards.forEach(card =>{
          animationDelay += 100;
          setTimeout(()=>{ card.classList.add('card--show')}, animationDelay)
      })
    }, 10)
  }

}
