function getSum(a, b)
{
   if(a == b) {
     return a;     
   } else {
     let summ = 0;
     if(a < b) {
       for(let i = a; i <= b; i++) {
        summ = summ + i;       
        }     
        return summ;
      } else {
        for(let i = b; i <= a; i++) {
          summ = summ + i;       
        }     
        return summ;
      }
  }     
};