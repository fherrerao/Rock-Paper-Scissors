
const array=["Rock", "Paper", "Scissors"];
function computerPlay(){    
    const number = Math.floor(Math.random()*3);
    return array[number];    
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock" && computerSelection=="rock"){        
        return "Draw!";
    }

    if(playerSelection == "rock" && computerSelection=="paper"){
        return "You Lose! Paper beats Rock";
    }

    if(playerSelection == "rock" && computerSelection=="scissors"){
        return "You Win! Rock beats Scissors";
    }

    if(playerSelection == "paper" && computerSelection=="rock"){
        return "You Win! Paper beats Rock";
    }

    if(playerSelection == "paper" && computerSelection=="paper"){
        return "Draw!"
    }

    if(playerSelection == "paper" && computerSelection=="scissors"){
        return "You Lose! Scissors beats Paper!"
    }

    if(playerSelection == "scissors" && computerSelection=="rock"){
        return "You Lose! Rock beats Scissors!"
    }

    if(playerSelection == "scissors" && computerSelection=="paper"){
        return "You Win! Scissors beats Paper!"
    }

    if(playerSelection == "scissors" && computerSelection=="scissors"){
        return "Draw!"
    }

}

function game(){
    let victorias =0, derrotas=0, empates=0;
    for(i=1; i<=5; i++){
        const playerSelection = prompt();
        const computerSelection = computerPlay();
        const resultado = playRound(playerSelection.toLowerCase(),computerSelection.toLowerCase())
        
        if(resultado.includes("Win")){
            victorias++;
        }
        if(resultado.includes("Lose")){
            derrotas++;
        }
        if(resultado.includes("Draw")){
            empates++;
        }
        console.log(resultado);
        console.log("Wins: "+victorias+" Loses: "+derrotas+" Draws: "+empates);
        
    }
    
    
    
    
    



    
}

game();




