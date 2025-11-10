// TODO: Create a function that validates user input 
function validateUserInput (input){
    if (typeof input !== 'string'){
        throw new TypeError("Input must be a string")
    }

}
// TODO: Create a function that demonstrates multiple error types 
function errorTypes (){
    try{
        let num = 5;
        num.toUpperCase(); 
    }
    catch (error){
        console.log("Type Error: " + error.message)
    }
     try{
        eval ("catDog")
     }
    catch (error){
        console.log("Syntax Error: " + error.message)
    }
}
// TODO: Create a collection of helper functions for string manipulation 
function stringHelpers (){
    function toUpperCase (str){
        return str.toUpperCase();
    }
}
// TODO: Create helper functions for array operations
function SplitArrayHelper (Arr){
   return Arr.split(",").reverse().join("");

}  

function sumArrayHelper (Arr){
    return Arr.reduce((a,b) => a + b, 0);
}