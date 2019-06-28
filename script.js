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
var statsBtn=document.querySelector(".stat-btn")
var resultDOM=document.querySelector("#result")
var paperDOM=document.querySelector("#paper")
var rockDOM=document.querySelector("#rock")
var scissorsDOM=document.querySelector("#scissors")
var datajunkieDIV=document.querySelector(".data-junkie-div")
var closeBtn=document.querySelector(".close-span")
var gun=new Audio("./assets/gun.wav")

datajunkieDIV.style.opacity=0;

var resultPanel=document.querySelector(".result-panel")

//game variables

var choices=['rock', 'paper', 'scissors']

var wins=0;
var losses=0;
var playerChoice="";


//computers picks

var rock=0
var paper=0
var scissors=0



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
     
        resultDOM.innerHTML=`Player threw ${playerChoice}
        while the computer threw ${compChoice}.Player loses`

        paper++
        paperDOM.innerHTML=paper
      
    }

    if(playerChoice === "paper" && compChoice === "paper"){
        resultDOM.innerHTML="Tie?? Non-sense! Pick again!"
        console.log("tie, play again")

        paper++
        paperDOM.innerHTML=paper
    }

    if(playerChoice === "scissors" && compChoice === "paper"){
        wins++;
        winsDOM.innerHTML=wins;
        resultDOM.innerHTML=`Player threw ${playerChoice}
        while the computer threw ${compChoice}.Player wins`
        console.log("player wins")

        paper++
        paperDOM.innerHTML=paper
    }

    if(playerChoice === "rock" && compChoice === "scissors"){
        wins++;
        winsDOM.innerHTML=wins;
        resultDOM.innerHTML=`Player threw ${playerChoice}
        while the computer threw ${compChoice}. Player wins`
        console.log("player wins")

        scissors++
        scissorsDOM.innerHTML=scissors
    }

    if(playerChoice === "scissors" && compChoice === "scissors"){
        resultDOM.innerHTML="Tie?? Non-sense! Pick again!"
        console.log("tie, play again!")

        scissors++
        scissorsDOM.innerHTML=scissors
    }

    if(playerChoice === "paper" && compChoice === "scissors"){
        losses++;
        lossesDOM.innerHTML=losses;
        resultDOM.innerHTML=`Player threw ${playerChoice}
        while the computer threw ${compChoice}. Player loses!`
        console.log("Player loses!")

        scissors++
        scissorsDOM.innerHTML=scissors
    }

    if(playerChoice === "rock" && compChoice === "rock"){
        resultDOM.innerHTML="Tie?? Non-sense! Pick again!"
        console.log("tie play again")

        rock++
        rockDOM.innerHTML=rock
    }

    if(playerChoice === "scissors" && compChoice === "rock"){
        losses++;
        lossesDOM.innerHTML=losses;
        resultDOM.innerHTML=`Player threw ${playerChoice}
        while the computer threw ${compChoice}.Player losses!`
        console.log("Player loses!")
        rock++
        rockDOM.innerHTML=rock
    }

    if(playerChoice === "paper" && compChoice === "rock"){
        wins++;
        winsDOM.innerHTML=wins;
        resultDOM.innerHTML=`Player threw ${playerChoice}
        while the computer threw ${compChoice}. Player wins!`
        console.log("player wins")
        rock++
        rockDOM.innerHTML=rock
    }



}

closeBtn.onclick=function(){
    datajunkieDIV.style.opacity=0;
}


playAgainBtn.addEventListener("click",()=>{
    resultPanel.classList.toggle("see-result-panel")
   

})

statsBtn.addEventListener("click",()=>{
    datajunkieDIV.style.opacity=1;
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


