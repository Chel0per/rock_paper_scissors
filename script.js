let i = 0;
let j = 0;
// const playerrounds = document.querySelector("p");
// const computerrounds = document.querySelector("c");

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
