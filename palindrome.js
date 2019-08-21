const palindrome =(str)=> { //is string a palindrome?
  str = str.toLowerCase(); //turns all characters to lower case
  str = str.replace(/[\W_]/g, ''); //removes blank spaces and special characters
  let rvsstr =(str)=> { //reverses a string
    let sr = '';
    for(let i= str.length - 1; i>= 0; i--){
    sr += str[i]; //creates a reversed version of the string
    }
    return sr; //returns a reversed string
  }
  if (str === rvsstr(str)) { //is str equal to its reversed version?
    return true; //is a palindrome
  }
  return false; //isn't a palindrome
}
