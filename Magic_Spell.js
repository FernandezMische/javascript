


function generateButton() {
   
    let ingredientsList = [...document.querySelectorAll("ul li")].map(li=>li.innerHTML);
    let randomSpell=ingredientsList[Math.floor(Math.random() * ingredientsList.length)];
    let Spell=document.querySelector("p");
    Spell.innerHTML=randomSpell;
    
    let colours = ["blue", "green", "purple", "pink"];
    let randomColour = colours[Math.floor(Math.random() * colours.length)];
    document.querySelector("#spellArea").style.background=randomColour;

}


const defaultBG = document.querySelector("#spellArea").style.background;
const defaultPText = document.querySelector("p").innerHTML;
const resetCount = document.getElementById("Countdown").style.display="block"
document.getElementById("resetButton").addEventListener("click", resetEverything);

function resetEverything (){
    document.querySelector("#spellArea").style.background=defaultBG;
    document.querySelector("p").innerHTML = defaultPText;
    document.getElementById("spellArea").style.display="none";
    
}

const CountDown = 3;
const countdownDisplay = document.getElementById("Countdown");
let countdownTimerId = null;

function startCountdown() {
    if (countdownTimerId) return; 
    
    let remaining = CountDown;
    
    document.getElementById("Countdown").style.display="block";
    countdownDisplay.textContent = remaining;
    
    countdownTimerId = setInterval(() => {
        remaining--;
        if (remaining >= 0) {
            countdownDisplay.textContent = remaining;
        }
        if (remaining < 0) {
            clearInterval(countdownTimerId);
            countdownTimerId = null;
            countdownDisplay.textContent = "Spell Time!";
            document.getElementById("spellArea").style.display = "block";
            document.getElementById("Countdown").style.display = "none";
            generateButton();
           
        }
    }, 1000);
}


const genBtn = document.querySelector('button[onClick="generateButton();"]');

if (genBtn) {
    genBtn.addEventListener('click', startCountdown);
    
  
}


