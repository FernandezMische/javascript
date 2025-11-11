// TODO: Create a multiline string using template literals 
let Games = `call of duty, fortnite, grand theft auto, valorant, forza`
// TODO: Create a function that uses template literals for HTML generation 
function GamerProfile(user){
    return `<div class="user-card">
    <h3>Username:${user.name}</h3>
    <h3>Email:${user.email}</h3>
    <h3>GamerTag:${user.tag}</h3>
    </div>`;
}
// TODO: Convert regular functions to arrow functions 
const Gamerprofile=(user)=> `<div class="user-card">
    <h3>Username:${user.name}</h3>
    <h3>Email:${user.email}</h3>
    <h3>GamerTag:${user.tag}</h3>
    </div>`;

    console.log(Gamerprofile({name:"che"}))

// TODO: Use arrow functions with array methods 
let Arr=["Call of duty","fortnite","forza"]
  Arr= Arr.filter(item=>item !== "fortnite");
  console.log(Arr)