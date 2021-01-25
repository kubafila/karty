export default class Storage{
  constructor(){
    this.cards = [];
  }

  getCards(){
    return this.cards;
  }

  addCard(card){
    this.cards.push(card);
  }

  shuffleCards(){
    this.cards = this.cards.sort(() => Math.random() - 0.5)
    this.sortCardInRow();
  }

  sortCardInRow(){
    const sortedCards = [];
    const ROWS = 4;
    const CARDSINROW = 13;
    
    for(let i =0; i <=ROWS - 1; i++){
        const index = i * CARDSINROW
        const row = this.cards.slice(index, index + CARDSINROW);
        row.sort((a,b) => {
          return a.shape - b.shape
        })
        sortedCards.push(row)
    }
    console.log(sortedCards)
    const flattenSortedCards = [].concat(...sortedCards)
    this.cards = flattenSortedCards
    console.log(this.cards)
  }

}
