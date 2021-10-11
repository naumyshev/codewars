function defineSuit(card) {
  // good luck
  if(card[card.length-1] =='♣'){
    return 'clubs';
  } else if(card[card.length-1] =='♦'){
    return 'diamonds';
  } else if(card[card.length-1] =='♥'){
    return 'hearts';
  } else {
    return 'spades';
  }
}