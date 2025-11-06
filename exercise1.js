// TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply 
// all 3 numbers together. 

// Note: The argument passed must NOT be the same number. 
function Multiply (a,b,c){
    return a*b*c;
}
console.log (Multiply(2,3,5));

// TODO: Create a function expression called ‘convertToSeconds’ that takes in a number of minutes as an argument and returns the amount in seconds. 
// ***Do not use a console.log() inside of the function***
function convertToSeconds(minutes){
 return minutes * 60;
}
console.log(convertToSeconds(2));
// TODO: Create a function called fahrenheitToCelsius that takes the temperature as an parameter and returns the equivalent temperature in Celsius. 
// ***Do not use a console.log() inside of the function***
function fahrenheitToCelsius (temperature){
    return (temperature-32) * 5/9;
}
console.log (fahrenheitToCelsius(50));
// TODO: Create a function that takes a string as a parameter and returns the reverse of the string. 
// ***Do not use a console.log() inside of the function ***
function reverseOfString(string){
return string.split("").reverse("").join("");
}
console.log(reverseOfString("Cat"));

// TODO: Create a function that takes in a string and returns the number of Vowels in the sentence. 
// E.g. countVowels(‘Javascript’) //output =3 ***Do not useaconsole.log() inside of the function***

function countVowels(sentence){
    const Vowels =sentence.match(/[aeiou]/gi) ;

    return Vowels ? Vowels.length: 0
}
console.log (countVowels("Mische"))
// TODO: Create a “isPrime” function that takes a number as a parameter and returns true if the number is prime, and false otherwise. 
// Make sure to test your codewith4numbers
 


function isPrime(Num){ 
  if (Num == 1){
    return false
  } 
  else if(Num == 2){
    return true
  }
  else {
    const Prime = Num/Num & Num/1 
    return Prime? true : false 
  }  

}
console.log(isPrime(17))
// IT WORKS BUT WHY!!🤣🤣🤣