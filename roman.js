let convertToRoman =(num)=> {
    let romn =['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']; //roman numerals(implemented as strings)
    let br =[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; //decimal equivalents to the roman numerals, in the same order
    let romver = ""; //empty string, will contain a romanized version of num
    for(let i=0; i!=13; i++) { //cycles 13 times, increasing i from 0 to 12
        while(br[i] <= num) { //cycles while num is not smaller than the i-th elementh of br array
            romver+= romn[i]; //adds adequate roman numeral from romn array to the romver
            num-= br[i]; //decreases num by the decimal equivalent of the roman numeral added to the romver in the previous step
        }
    }
 return romver; //returns a romanized version of the original number
}
