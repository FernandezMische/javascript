// TODO: Create a function called sum. The function will take in a parameter and
//  calculate all the numbers from 0-> the parameter. You must check if the parameter is
//  an integer first before any calculation is made. If the parameter is not a number,
//  return a message stating, “The value passed is not a number”. You are NOT allowed to
//  use methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). Make sure
//  to test your code effectively

function sum (ParamNumber){
    if(ParamNumber %1 !==0 ){
        console.log("The value passed is not a number");
    }
    if(typeof ParamNumber !== ""){
         console.log("The value passed is not a number");
    }
   let Total = 0
   for (let i =0; i<= ParamNumber; i++){
    Total += i;
   }
return Total;
}
console.log(sum(5));

// TODO: Create a function called ‘factorial’ that takes in a number as a parameter.
//  The function will print the factorial of the entered number, e.g. factorial(4)->
//  4*3*2*1 //output 24

function factorial(Num){
 let result = 1;
  for (let i = 2; i <= Num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(1))

// TODO: Create a function called funkyMath . If this function is called with 2
//  arguments the function will subtract the first from the second. If the function is called
//  with 3 arguments it will add all 3 numbers together. If the function is called with 4
//  arguments it will add together argument 1 and 2 , 3 and 4 separately. Then divide
//  them accordingly, eg funkyMath(8,2,3,5)-> 8+2 divided by 3+5-> 10/8 //output 1,25

function funkyMath (...Num){
  if(Num.length===2){
    return Num[0] - Num[1]
  }

  if(Num.length===3){
    return Num[0]+Num[1]+Num[2]
  }
  if(Num.length===4){
   let result1 = Num[0]+Num[1]
   let result2 = Num[2]+Num[3]
   return result1/result2
  }
}
console.log(funkyMath(5,3,4,2))

// TODO: Create a loop that will remove all the odd numbers from the array and add
//  them to a new array. Use the current array [1, 2 , 33, 45, 6,44].
//  Bonus: Make sure to arrange them from smallest to biggest.()

  let Arr=[1, 2 , 33, 45, 6,44]
  let evenArr = Arr.filter(item=>item%2===0)
 console.log(evenArr)
// TODO: Create an object called ‘me’ with properties of first name, last name, age,
//  favourite colour, dream car

let me = 
    {Name: "Mische",
    Lastname:"Fernandez",
    Age:26,
    FavouriteColour:"black",
    DreamCar:"Mercedes"
   }

console.log(me)

 // TODO: Create and add a new property and value of ‘favourite food’ to the object.

me.FavouriteFood="Chillie cheese fries"
console.log(me)

 // TODO: . Now delete the age property from the object
 delete me.Age;
 console.log(me)