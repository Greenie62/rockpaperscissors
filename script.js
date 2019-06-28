var playercontainer=document.querySelector('.player-container')

playercontainer.style.opacity=.2;
playercontainer.style.transition="2s"
playercontainer.style.pointerEvents='none'

setTimeout(()=>{
    playercontainer.style.opacity=1;
    playercontainer.style.pointerEvents='all'
},3000)
//DOM elements
var winsDOM=document.querySelector("#wins")
var lossesDOM=document.querySelector("#losses")
var btns=document.querySelectorAll('.btn')
var playerchoiceDOM=document.querySelector("#playerchoice")
var computerchoiceDOM=document.querySelector("#computerchoice")
var winnerDOM=document.querySelector("#winner")
var playAgainBtn=document.querySelector(".play-btn")
var tieoutputDOM=document.querySelector("#tie-output")
var gun=new Audio("./assets/gun.wav")

var resultPanel=document.querySelector(".result-panel")

//game variables

var choices=['rock', 'paper', 'scissors']

var wins=0;
var losses=0;
var playerChoice="";



btns.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        playSound()
        btn.classList.toggle("animate-paper")
        playerChoice=e.target.classList[0].split('-');
        playerChoice=playerChoice[0]
        if(playerChoice === "paper"){
            btn.classList.toggle("animate-shake")
        }
        else{
            btn.classList.toggle("animate-side")
        }
        

        var compChoice=choices[choices.length * Math.random() | 0]
        playerchoiceDOM.innerHTML=playerChoice
        computerchoiceDOM.innerHTML=compChoice
       
        console.log("Comp choic: " + compChoice + " Player choice: " + playerChoice)
        
        resultPanel.classList.toggle("see-result-panel")
        checkChoices(playerChoice,compChoice)
        setTimeout(()=>{
           
            playerChoice=""
            compChoice=""
        },2000)
        
    })
})

function checkChoices(playerChoice,compChoice){

    if(playerChoice === "rock" && compChoice === "paper"){
        losses++
        lossesDOM.innerHTML=losses;
        winnerDOM.innerHTML="Computer "
        console.log("player losses")
    }

    if(playerChoice === "paper" && compChoice === "paper"){
        tieoutputDOM.innerHTML="Tie?? Non-sense! Pick again!"
        console.log("tie, play again")
    }

    if(playerChoice === "scissors" && compChoice === "paper"){
        wins++;
        winsDOM.innerHTML=wins;
        winnerDOM.innerHTML="Player "
        console.log("player wins")
    }

    if(playerChoice === "rock" && compChoice === "scissors"){
        wins++;
        winsDOM.innerHTML=wins;
        winnerDOM.innerHTML="Player "
        console.log("player wins")
    }

    if(playerChoice === "scissors" && compChoice === "scissors"){
        tieoutputDOM.innerHTML="Tie?? Non-sense! Pick again!"
        console.log("tie, play again!")
    }

    if(playerChoice === "paper" && compChoice === "scissors"){
        losses++;
        lossesDOM.innerHTML=losses;
        winnerDOM.innerHTML="Computer "
        console.log("Player loses!")
    }

    if(playerChoice === "rock" && compChoice === "rock"){
        tieoutputDOM.innerHTML="Tie?? Non-sense! Pick again!"
        console.log("tie play again")
    }

    if(playerChoice === "scissors" && compChoice === "rock"){
        losses++;
        lossesDOM.innerHTML=losses;
        winnerDOM.innerHTML="Computer "
        console.log("Player loses!")
    }

    if(playerChoice === "paper" && compChoice === "rock"){
        wins++;
        winsDOM.innerHTML=wins;
        winnerDOM.innerHTML="Player "
        console.log("player wins")
    }



}


playAgainBtn.addEventListener("click",()=>{
    resultPanel.classList.toggle("see-result-panel")
   

})



function playSound(){
    gun.play()

gun.ontimeupdate=function(){
    console.log(gun.currentTime)
    if(gun.currentTime > 2){
        gun.pause()
        gun.currentTime=0;
    }
}
   }


