// TODO: Create a global variable called globalCount 
let globalCount = "original"
// TODO: Create a function that demonstrates local scope 
function demonstrate (){
    let LocalScope = "original local"
    return LocalScope
}
// TODO: Create a function that tries to modify both variables
function modify(){
    globalCount ="new global"
   let LocalScope = "new local"
    console.log("message "+ LocalScope)
    console.log("message "+ globalCount)
}
modify()
// TODO: Create a Student constructor function 
function student (name,age){
    this.name = name
    this.age = age
}

// TODO: Create several student instances 
let student1 = new student ("Alice",20)
let student2 = new student ("Bob",22)
let student3 = new student ("Charlie",23)
console.log(student1)
console.log(student2)
console.log(student3)
// TODO: Create an object literal with nested properties
let studentProfile = {
    name: "David",
    age: 21,
    address: {
        street: "123 sesame st",
        city: "Cape Town",
        country: "South Africa"
    }
}
