function isPalindrome(text) {
  let palindrome = '';



  for (let i = text.length - 1; i >= 0; i--) {
    const currentLetter = text[i];
    console.log('MINHA LETRA ATUAL', currentLetter);

    palindrome += currentLetter;
  }

  console.log('LOOP FINALIZADO, RESULTADOS OBTIDOS', { text, palindrome });

  if (palindrome.toLowerCase() === text.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome(''));


const num =[1,52,59,16,13,9];


 const numbers =[1,52,59,16,13,9];

function arrayMaxMin(arr){

  const minNum = numbers[0];
const maxNum = numbers[2];

for(let i = 1; i < numbers.length; i++){
  if(maxNum > numbers.length){
    maxNum = numbers

    maxNum = "";
  }
}if(numbers[i] > minNum){
  minNum = numbers[i]

  minNum = "";
}
}
console.log(`Maior número igual: ${maxNum}`)
console.log(`Menor número igual: ${minNum}`)
 
const numbers2 = [2,30,33,11,51,56];
const minNum = numbers[0];
const maxNum = numbers[5];
function arrayMaxMin2(arr){

  for(let i = 1; i <numbers.length; i++){
   if(maxNum > numbers.length){
     maxNum = numbers


   }
  }if(numbers[i] > minNum){
    minNum = numbers[i]
  }
}
 console.log(`Maior número igual: ${maxNum}`)
 console.log(`Menor número igual: ${minNum}`)


/*
 const numbers3 = [35,9,10,58,55,44];
const minNum = numbers[1];
const maxNum = numbers[3];
function arrayMaxMin2(arr){

  for(let i = 1; i <numbers.length; i++){
   if(maxNum > numbers.length){
     maxNum = numbers


   }
  }if(numbers[i] > minNum){
    minNum = numbers[i]
  }
}
console.log(`Menor número igual: ${minNum}`)
console.log(`Maior número igual: ${maxNum}`)


*/


/*
const numbers = [52,58,47,31,37,5];
const minNum = numbers[5];
const maxNum = numbers[1];
function arrayMaxMin2(arr){

  for(let i = 1; i <numbers.length; i++){
   if(maxNum > numbers.length){
     maxNum = numbers


   }
  }if(numbers[i] > minNum){
    minNum = numbers[i]
  }
}
console.log(`Menor número igual: ${minNum}`)
console.log(`Maior número igual: ${maxNum}`)


*/



/*
const numbers = [16,11,13,35,49,50];
const minNum = numbers[1];
const maxNum = numbers[5];
function arrayMaxMin2(arr){

  for(let i = 1; i <numbers.length; i++){
   if(maxNum > numbers.length){
     maxNum = numbers


   }
  }if(numbers[i] > minNum){
    minNum = numbers[i]
  }
}
console.log(`Menor número igual: ${minNum}`)
console.log(`Maior número igual: ${maxNum}`)



*/

/*
const minNum = numbers[0];
const maxNum = numbers[5];
function arrayMaxMin2(arr){

  for(let i = 1; i <numbers.length; i++){
   if(maxNum > numbers.length){
     maxNum = numbers


   }
  }if(numbers[i] > minNum){
    minNum = numbers[i]
  }
}
console.log(`Menor número igual: ${maxNum}`)
console.log(`Maior número igual: ${minNum}`)





*/