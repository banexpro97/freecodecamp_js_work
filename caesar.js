let rot13 =(str)=> {
  let alph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; //array of all the letters in the alphabet
  let spec= [' ', '!', '?', '.', ',', ':', '""', "''"]; //array of punctuation signs and space
  let decode= ""; //empty string, will contain a decoded message
  for(let i=0;i<str.length; i++){ //in each cycle we will work with one character of str
      let k=0; //counter for punctuation signs(and space)
      for(let j=0; j<alph.length; j++) { //in each cycle will work with one alph element and spec element
        if(str[i]==alph[j]){ //checks if the i-th character from str is equal to the j-th character from alph array
          if(j>=13){ //if the letters index is bigger than or equal to 13 we will shift 13 places to the left
            decode+=alph[j-13]; //adds a decoded letter to the string decode
          }
          if(j<13) { //if the letters index is smaller than 13 we will shift 13 places to the right
            decode+=alph[j+13]; //adds a decoded letter to the string decode
          }
        }
        if(k<= spec.length-1){ //runs only if counter k is not bigger than the index of the last elementh in spec array
          if(str[i]==spec[k]) { //is i-th character of str a punctuation mark(or space)?
            decode+=spec[k]; //if it is then it is added, with no change, to the string decode(to preserve original spaces and punctuation)
        }
          k++; //counter (used as spec index) is increased by 1;
        }
      }
  }
  return decode; //returns a decoded message
}
