function defineSuit(card) {
    
    if(card[1]=='♣'){
      return 'clubs';
    } else if(card[1]=='♦'){
      return 'diamonds';
    } else if(card[1]=='♥'){
      return 'hearts';
    } else {
      return 'spades';
    }
  }