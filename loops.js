// TODO: Create an array called numbers with values 1 through 5
let numbers = [1,2,3,4,5]
// TODO: Write a for loop that prints each number in the array

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
   

// TODO: Write a while loop that counts down from 5 to 1

let i = numbers.length -1
while(i >=0){

    console.log(numbers[i]);
    i--;
}

// TODO: Create a loop that prints only even numbers from the numbers array
for (let i = 0; i < numbers.length; i++){
   if (i%2 ==0){
    console.log(i)
   }
}
// TODO: Create a loop that calculates the sum of all numbers in the array
let sum = 0 
numbers.forEach(number =>{
    sum+=number;
});
console.log(sum);