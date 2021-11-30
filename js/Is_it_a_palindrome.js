function isPalindrome(x) {
    // your code here
    let x1 = x.split("").reverse().join("");
    
    if(x.toLowerCase() == x1.toLowerCase()){
      return true;
    } else {
      return false;
    }
  }