function numberToRoman(number){
     const romanNumerals = [
          {value: 1000, numeral: 'M' },
          {value: 900, numeral: 'CM' },
          {value: 500, numeral: 'D' },
          {value: 400, numeral: 'CD' },
          {value: 100, numeral: 'C' },
          {value: 90, numeral: 'XC' },
          {value: 50, numeral: 'L' },
          {value: 40, numeral: 'XL' },
          {value: 10, numeral: 'X' },
          {value: 9, numeral: 'IX' },
          {value: 5, numeral: 'V' },
          {value: 4, numeral: 'IV' },
          {value: 1, numeral: 'I' },
     ];
     let result = "";
     for(const {value,numeral} of romanNumerals){
          while(number >= value){
               result += numeral;
               number -= value;
          }
     }
     return result;
}
function romanToNumber(roman){
     const romanToNumbers = {
          M: 1000,
          CM: 900,
          D: 500,
          CD: 400,
          C: 100,
          XC: 90,
          L: 50,
          XL: 40,
          X: 10,
          IX: 9,
          V: 5,
          IV: 4,
          I: 1,
     };
     let index = 0;
     let number = 0;
     while(index < roman.length){
          const twoCharacter = roman[index] + (roman[index + 1] || "");
          if(romanToNumbers[twoCharacter]){
               number += romanToNumbers[twoCharacter];
               index += 2;
          }else{
               number += romanToNumbers[roman[index]];
          }
     }
     return number;
}
function convertInput(){
     const input = document.getElementById('input').value.trim().toUpperCase();
     const validRoman = /^[MDCLXVI]+$/;
     const result = document.getElementById('result');
     if(!input){
          result.textContent = 'Please Enter a Value';
          return;
     }
     if(!isNaN(input)){
          const number = parseInt(input,10);
          if(number < 1 || number > 3999){
               result.textContent = 'Please Enter a Number Between 1 and 3999.';
          }else{
               const roman = numberToRoman(number);
               result.textContent = `Number ${number} in Roman Numerals is: ${roman}`;
          }
     }else if(validRoman.test(input)){
          try {
               const number = romanToNumber(input);
               result.textContent = `Roman Numeral ${input} Equals: ${number}`;
          }catch {
               result.textContent = 'Invalid Roman Numeral.';
          }
     }else {
          result.textContent = 'Please Enter a Valid Number or Roman Numeral.';
     }
}
document.querySelector('button').addEventListener('click',convertInput);