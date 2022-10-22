let i = 0;
let j = 0;



    function getcomputerchoice() {
        let random = Math.floor(Math.random() * 3); 
        if (random == 0) {
            return "Rock";
        }
        else if (random == 1) {
            return "Paper";
        }
        else {
            return "Scissors";
        }
    }

    function playround(a,b) {
        
        switch(a){
            case "Rock":
            document.querySelector(".reverse1").textContent = "✊";
            document.querySelector(".playerknight").style.backgroundColor = "#5FA8D3";
            document.querySelector(".reverse1").style.padding = "0 0 12px 0";
            break;

            case "Paper":
            document.querySelector(".reverse1").textContent = "✋";
            document.querySelector(".playerknight").style.backgroundColor = "#5FA8D3";
            document.querySelector(".reverse1").style.padding = "0 0 8px 10px";
            break; 
            
            case "Scissors":
            document.querySelector(".reverse1").textContent = "✌️";
            document.querySelector(".playerknight").style.backgroundColor = "#5FA8D3";
            document.querySelector(".reverse1").style.padding = "0 0 8px 0";
            break; 
        }

        switch(b){
            case "Rock":
            document.querySelector(".computerknight").textContent = "✊";
            document.querySelector(".computerknight").style.backgroundColor = "#5FA8D3";
            document.querySelector(".computerknight").style.padding = "0 0 12px 0";
            break;

            case "Paper":
            document.querySelector(".computerknight").textContent = "✋";
            document.querySelector(".computerknight").style.backgroundColor = "#5FA8D3";
            document.querySelector(".computerknight").style.padding = "0 0 8px 12px";
            break; 
            
            case "Scissors":
            document.querySelector(".computerknight").textContent = "✌️";
            document.querySelector(".computerknight").style.backgroundColor = "#5FA8D3";
            document.querySelector(".computerknight").style.padding = "0 0 8px 0";
            break; 
        }
        
        if (a == b){
            document.querySelector(".description").textContent = "It's a tie";
        }
        else if (a == "Rock" && b == "Scissors" || a == "Paper" && b == "Rock"|| a == "Scissors" && b == "Paper" ){
            i++;
            document.querySelector(".scorep").textContent = "SCORE:" + i.toString();
            if (i == 5){
                document.querySelector(".description").textContent = "Victory!";
                i = 0;
                j = 0;
                document.querySelector(".scorec").textContent = "SCORE:0"
                document.querySelector(".scorep").textContent = "SCORE:0"
            }
            else {
                document.querySelector(".description").textContent = a + " beats " + b + " you win";
            }
        }
        else {
            j++;
            document.querySelector(".scorec").textContent = "SCORE:" + j.toString();
            if (j == 5){
                document.querySelector(".description").textContent = "Defeat!";
                i = 0;
                j = 0;
                document.querySelector(".scorec").textContent = "SCORE:0"
                document.querySelector(".scorep").textContent = "SCORE:0"
            }
            else {
                document.querySelector(".description").textContent = b + " beats " + a + " you lose"; 
            }
        }
    }

if (i == 5){
    console.log("Victory");
}
if (j == 5){
    console.log("Defeat");
}
