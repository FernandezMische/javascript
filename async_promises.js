// TODO: Create a Promise that simulates fetching user data 
// - The Promise should resolve after 1.5 seconds 
// - If userId is positive, resolve with user data object 
// - If userId is negative or zero, reject with an error 
// - User data should include: id, name, email, and registrationDate
let p = new Promise((resolve, reject) => {
    let data = {id:1,name:"Che", email:"chefernandez@gmail.com", registrationDate:"11/10/25"}
    if(data){

        setTimeout(()=>{
        resolve("success");
            
        },1500);
    }else{
        reject("failed")
    }
})
// // TODO: Create a function that 
// uses template literals for HTML generation 
function UserData  (user){
    return `<div class = "user-card"
    <p>name: ${user.name}</p>
    <p>email: ${user.email}</p>`
}
// TODO: Create a Promise that simulates fetching user posts 
// - Should resolve after 1 second 
// - Return an array of post objects 
// - Each post should have: id, title, content, and userId 
// - If userId doesn't exist, reject with error 

let posts= new Promise((resolve,reject)=>{
    let userPost= [{id:1,title:"a picture", content:"my first post", userId:"012360000"}]
    setTimeout(()=>{
        if(userPost[0].userId){
  
        resolve("successful");
        
    }else{
        reject("failed");
    }
    },1000);
    
});

posts.then((message)=>{
console.log("userId does exist " + message
)
}).catch((message)=>{
console.log("userId does not exist " + message)
})

// TODO: Create a function that chains multiple Promises together 
// - First fetch user data 
// - Then fetch their posts 
// - Combine the data into a single object 
// - Handle any errors that occur in the chain

function fetchUser(){

return new Promise((resolve,reject)=>{
const UserData = {
    id:1,name:"Che", 
    email:"chefernandez@gmail.com", 
    registrationDate:"11/10/25"};

    if(UserData){
    setTimeout(()=>resolve(UserData),1500);
    }else{
        reject("User data not found");
    }
});
}

function fetchPosts (){
return new Promise ((resolve,reject)=>{
const UserPosts ={
    id:1,title:"a picture", 
    content:"my first post",
    userId:"012360000"}

    if(UserPosts){
    setTimeout(()=>resolve(UserPosts),1500);
    }else{
        reject("User posts not found");
    }
    });
    
}
Promise.all([fetchUser(),fetchPosts()])
.then(([user,posts]) => {
    const combined = {user,posts};
    console.log(combined, ("combined successful"))
})

.catch((message)=>{
console.log("Error " + message)
})

// TODO: Convert the above Promise chain to use async/await 
// - Use try/catch for error handling 
// - Log each step of the process 
// - Return combined user and posts data 
async function fetchData() {
    try{
  
    console.log("Awaiting fetchUser()...");
    const user = await fetchUser();
    console.log("User fetched: ", user);

    console.log("Awaiting fetchPosts()...");
    const posts = await fetchPosts();
    console.log("Posts fetched: ", posts);
    
    }
    catch (error){
        console.log("Error " + error)
    }
}
fetchData();

// TODO: Create a function that fetches multiple users in parallel 
// - Take an array of userIds 
// - Fetch all users simultaneously using Promise.all 
// - Handle errors for individual user fetches 
// - Return array of successfully fetched users 

async function fetchMultipleUsers(userIds) {
    const userPromises = userIds.map(id => fetchUser(id).catch(error => ({ error })));
    const results = await Promise.all(userPromises);
    return results.filter(result => !result.error);
}

// TODO: Create a function that fetches users and their posts in parallel 
// - Fetch user data for multiple users 
// - Once user data is received, fetch all their posts in parallel 
// - Combine user and posts data 
// - Handle errors appropriately 

async function fetchUsersAndPosts(userIds) {
    try {
        const users = await fetchMultipleUsers(userIds);    
        const userPostsPromises = users.map(user => 
            fetchPosts(user.id)
                .then(posts => ({ user, posts }))   
                .catch(error => ({ user, error }))
        );
        const usersWithPosts = await Promise.all(userPostsPromises);
        return usersWithPosts;
    } catch (error) {
        console.log("Error fetching users and posts: ", error);
    }
}

// TODO: Test success cases 
// - Test single user fetch 
// - Test multiple user fetch 
// - Test error handling
// fetchData().then(result => {
//     console.log("All done:", result);
// }).catch(error => {
//     console.log("Error occurred:", error);
// });


fetchData().then(result => {    
    console.log("All done:", result);
}).catch(error => {
    console.log("Error occurred:", error);
});