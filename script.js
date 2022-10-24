let i = 0;
let j = 0;
let k = 0;



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

function playround(player,computer) {

    if (k > 0 && i == 0 && j == 0){
        document.querySelector(".scorep").textContent="SCORE:0";  
        document.querySelector(".scorec").textContent="SCORE:0";     
    }
        
    if (player == "Paper" && computer == "Rock"){

        document.querySelector(".reverse1").textContent="✋";
        document.querySelector(".player").style.padding = "0 6px 8px 0";
        document.querySelector(".player").style.backgroundColor = "#5FA8D3";
        document.querySelector(".computer").textContent="💻";
        document.querySelector(".computer").style.padding = "0 0 8px 0";
        document.querySelector(".computer").style.backgroundColor = "#5FA8D3";
        i++;
        document.querySelector(".rock").disabled = true;
        document.querySelector(".paper").disabled = true;
        document.querySelector(".scissors").disabled = true;

        if(k < 1){
            document.querySelector(".battle").style.animationPlayState="running";
            document.querySelector(".player").style.animationPlayState="running";
            document.querySelector(".computer").style.animationPlayState="running";
            k++;
            
            setTimeout(() => {
                document.querySelector(".computer").textContent="✊";
                document.querySelector(".computer").style.padding = "0 0 8px 0";
                document.querySelector(".computer").style.backgroundColor = "#E94F37";
                document.querySelector(".player").style.backgroundColor = "#5FAD41";
                document.querySelector(".scorep").textContent="SCORE:"+ i.toString();
                if (i < 5){
                    document.querySelector(".description").textContent="Paper beats rock";
                }
                else {
                    document.querySelector(".description").textContent="Victory! Paper beats rock";
                    i=0;
                    j=0;
                }
                document.querySelector(".rock").disabled = false;
                document.querySelector(".paper").disabled = false;
                document.querySelector(".scissors").disabled = false;
            }, 1000)
        }

        else {
            document.querySelector(".battle").style.animationName="none";
            document.querySelector(".player").style.animationName="none";
            document.querySelector(".computer").style.animationName="none";

            requestAnimationFrame(() => {
                document.querySelector(".battle").style.animationName="" ; 
            });
            
            requestAnimationFrame(() => {
                document.querySelector(".player").style.animationName="" ; 
            });
            requestAnimationFrame(() => {
                document.querySelector(".computer").style.animationName="" ; 
            });

            setTimeout(() => {
                document.querySelector(".computer").textContent="✊";
                document.querySelector(".computer").style.padding = "0 0 8px 0";
                document.querySelector(".computer").style.backgroundColor = "#E94F37";
                document.querySelector(".player").style.backgroundColor = "#5FAD41";
                document.querySelector(".scorep").textContent="SCORE:"+ i.toString();
                if (i < 5){
                    document.querySelector(".description").textContent="Paper beats rock";
                }
                else {
                    document.querySelector(".description").textContent="Victory! Paper beats rock";
                    i=0;
                    j=0;
                }
                document.querySelector(".rock").disabled = false;
                document.querySelector(".paper").disabled = false;
                document.querySelector(".scissors").disabled = false;
            }, 1000)

        }
    }

    else if (player == "Paper" && computer == "Scissors"){

        document.querySelector(".reverse1").textContent="✋";
        document.querySelector(".player").style.padding = "0 6px 8px 0";
        document.querySelector(".player").style.backgroundColor = "#5FA8D3";
        document.querySelector(".computer").textContent="💻";
        document.querySelector(".computer").style.padding = "0 0 8px 0";
        document.querySelector(".computer").style.backgroundColor = "#5FA8D3";
        j++;
        document.querySelector(".rock").disabled = true;
        document.querySelector(".paper").disabled = true;
        document.querySelector(".scissors").disabled = true;

        if(k < 1){
            document.querySelector(".battle").style.animationPlayState="running";
            document.querySelector(".player").style.animationPlayState="running";
            document.querySelector(".computer").style.animationPlayState="running";
            k++;
            
            setTimeout(() => {
                document.querySelector(".computer").textContent="✌️";
                document.querySelector(".computer").style.padding = "0 0 8px 0";
                document.querySelector(".computer").style.backgroundColor = "#5FAD41";
                document.querySelector(".player").style.backgroundColor = "#E94F37";
                document.querySelector(".scorec").textContent="SCORE:"+ j.toString();
                if (j < 5){
                    document.querySelector(".description").textContent="Paper loses to scissors";
                }
                else {
                    document.querySelector(".description").textContent="Defeat! Paper loses to scissors";
                    i=0;
                    j=0;
                }
                document.querySelector(".rock").disabled = false;
                document.querySelector(".paper").disabled = false;
                document.querySelector(".scissors").disabled = false;
            }, 1000)
        }

        else {
            document.querySelector(".battle").style.animationName="none";
            document.querySelector(".player").style.animationName="none";
            document.querySelector(".computer").style.animationName="none";

            requestAnimationFrame(() => {
                document.querySelector(".battle").style.animationName="" ; 
            });
            
            requestAnimationFrame(() => {
                document.querySelector(".player").style.animationName="" ; 
            });
            requestAnimationFrame(() => {
                document.querySelector(".computer").style.animationName="" ; 
            });

            setTimeout(() => {
                document.querySelector(".computer").textContent="✌️";
                document.querySelector(".computer").style.padding = "0 0 8px 0";
                document.querySelector(".computer").style.backgroundColor = "#5FAD41";
                document.querySelector(".player").style.backgroundColor = "#E94F37";
                document.querySelector(".scorec").textContent="SCORE:"+ j.toString();
                if (j < 5){
                    document.querySelector(".description").textContent="Paper loses to scissors";
                }
                else {
                    document.querySelector(".description").textContent="Defeat! Paper loses to scissors";
                    i=0;
                    j=0;
                }
                document.querySelector(".rock").disabled = false;
                document.querySelector(".paper").disabled = false;
                document.querySelector(".scissors").disabled = false;
            }, 1000)

        }
    }

    else if (player == "Paper" && computer == "Paper"){

        document.querySelector(".reverse1").textContent="✋";
        document.querySelector(".player").style.padding = "0 6px 8px 0";
        document.querySelector(".player").style.backgroundColor = "#5FA8D3";
        document.querySelector(".computer").textContent="💻";
        document.querySelector(".computer").style.padding = "0 0 8px 0";
        document.querySelector(".computer").style.backgroundColor = "#5FA8D3";
        document.querySelector(".rock").disabled = true;
        document.querySelector(".paper").disabled = true;
        document.querySelector(".scissors").disabled = true;

        if(k < 1){
            document.querySelector(".battle").style.animationPlayState="running";
            document.querySelector(".player").style.animationPlayState="running";
            document.querySelector(".computer").style.animationPlayState="running";
            k++;
            setTimeout(() => {
                document.querySelector(".computer").textContent="✋";
                document.querySelector(".computer").style.padding = "0 0 8px 10px";
                document.querySelector(".description").textContent="It's a tie";
                document.querySelector(".rock").disabled = false;
                document.querySelector(".paper").disabled = false;
                document.querySelector(".scissors").disabled = false;
            }, 1000)
        }

        else {
            document.querySelector(".battle").style.animationName="none";
            document.querySelector(".player").style.animationName="none";
            document.querySelector(".computer").style.animationName="none";

            requestAnimationFrame(() => {
                document.querySelector(".battle").style.animationName="" ; 
            });
            
            requestAnimationFrame(() => {
                document.querySelector(".player").style.animationName="" ; 
            });
            requestAnimationFrame(() => {
                document.querySelector(".computer").style.animationName="" ; 
            });

            setTimeout(() => {
                document.querySelector(".computer").textContent="✋";
                document.querySelector(".computer").style.padding = "0 0 8px 10px";
                document.querySelector(".description").textContent="It's a tie";
                document.querySelector(".rock").disabled = false;
                document.querySelector(".paper").disabled = false;
                document.querySelector(".scissors").disabled = false;
            }, 1000)

        }
    }

    else if(player == "Rock" && computer == "Paper"){
        document.querySelector(".reverse1").textContent="✊";
        document.querySelector(".player").style.padding = "0 0 8px 0";
        document.querySelector(".player").style.backgroundColor = "#5FA8D3";
        document.querySelector(".computer").textContent="💻";
        document.querySelector(".computer").style.padding = "0 0 8px 0";
        document.querySelector(".computer").style.backgroundColor = "#5FA8D3";
        j++;
        document.querySelector(".rock").disabled = true;
        document.querySelector(".paper").disabled = true;
        document.querySelector(".scissors").disabled = true;

        if(k < 1){
            document.querySelector(".battle").style.animationPlayState="running";
            document.querySelector(".player").style.animationPlayState="running";
            document.querySelector(".computer").style.animationPlayState="running";
            k++;
            
            setTimeout(() => {
                document.querySelector(".computer").textContent="✋";
                document.querySelector(".computer").style.padding = "0 0 8px 10px";
                document.querySelector(".computer").style.backgroundColor = "#5FAD41";
                document.querySelector(".player").style.backgroundColor = "#E94F37";
                document.querySelector(".scorec").textContent="SCORE:"+ j.toString();
                if (j < 5){
                    document.querySelector(".description").textContent="Rock loses to paper";
                }
                else {
                    document.querySelector(".description").textContent="Defeat! Rock loses to paper";
                    i=0;
                    j=0;
                }
                document.querySelector(".rock").disabled = false;
                document.querySelector(".paper").disabled = false;
                document.querySelector(".scissors").disabled = false;
            }, 1000)
        }

        else {
            document.querySelector(".battle").style.animationName="none";
            document.querySelector(".player").style.animationName="none";
            document.querySelector(".computer").style.animationName="none";

            requestAnimationFrame(() => {
                document.querySelector(".battle").style.animationName="" ; 
            });
            
            requestAnimationFrame(() => {
                document.querySelector(".player").style.animationName="" ; 
            });
            requestAnimationFrame(() => {
                document.querySelector(".computer").style.animationName="" ; 
            });

            setTimeout(() => {
                document.querySelector(".computer").textContent="✋";
                document.querySelector(".computer").style.padding = "0 0 8px 10px";
                document.querySelector(".computer").style.backgroundColor = "#5FAD41";
                document.querySelector(".player").style.backgroundColor = "#E94F37";
                document.querySelector(".scorec").textContent="SCORE:"+ j.toString();
                if (j < 5){
                    document.querySelector(".description").textContent="Rock loses to paper";
                }
                else {
                    document.querySelector(".description").textContent="Defeat! Rock loses to paper";
                    i=0;
                    j=0;
                }
                document.querySelector(".rock").disabled = false;
                document.querySelector(".paper").disabled = false;
                document.querySelector(".scissors").disabled = false;
            }, 1000)

        }    
    }

    else if(player == "Rock" && computer == "Scissors"){
        document.querySelector(".reverse1").textContent="✊";
        document.querySelector(".player").style.padding = "0 0 8px 0";
        document.querySelector(".player").style.backgroundColor = "#5FA8D3";
        document.querySelector(".computer").textContent="💻";
        document.querySelector(".computer").style.padding = "0 0 8px 0";
        document.querySelector(".computer").style.backgroundColor = "#5FA8D3";
        i++;
        document.querySelector(".rock").disabled = true;
        document.querySelector(".paper").disabled = true;
        document.querySelector(".scissors").disabled = true;

        if(k < 1){
            document.querySelector(".battle").style.animationPlayState="running";
            document.querySelector(".player").style.animationPlayState="running";
            document.querySelector(".computer").style.animationPlayState="running";
            k++;
            
            setTimeout(() => {
                document.querySelector(".computer").textContent="✌️";
                document.querySelector(".computer").style.padding = "0 0 8px 0";
                document.querySelector(".computer").style.backgroundColor = "#E94F37";
                document.querySelector(".player").style.backgroundColor = "#5FAD41";
                document.querySelector(".scorep").textContent="SCORE:"+ i.toString();
                if (i < 5){
                    document.querySelector(".description").textContent="Rock beats scissors";
                }
                else {
                    document.querySelector(".description").textContent="Victory! Rock beats scissors";
                    i=0;
                    j=0;
                }
                document.querySelector(".rock").disabled = false;
                document.querySelector(".paper").disabled = false;
                document.querySelector(".scissors").disabled = false;
            }, 1000)
        }

        else {
            document.querySelector(".battle").style.animationName="none";
            document.querySelector(".player").style.animationName="none";
            document.querySelector(".computer").style.animationName="none";

            requestAnimationFrame(() => {
                document.querySelector(".battle").style.animationName="" ; 
            });
            
            requestAnimationFrame(() => {
                document.querySelector(".player").style.animationName="" ; 
            });
            requestAnimationFrame(() => {
                document.querySelector(".computer").style.animationName="" ; 
            });

            setTimeout(() => {
                document.querySelector(".computer").textContent="✌️";
                document.querySelector(".computer").style.padding = "0 0 8px 0";
                document.querySelector(".computer").style.backgroundColor = "#E94F37";
                document.querySelector(".player").style.backgroundColor = "#5FAD41";
                document.querySelector(".scorep").textContent="SCORE:"+ i.toString();
                if (i < 5){
                    document.querySelector(".description").textContent="Rock beats scissors";
                }
                else {
                    document.querySelector(".description").textContent="Victory! Rock beats scissors";
                    i=0;
                    j=0;
                }
                document.querySelector(".rock").disabled = false;
                document.querySelector(".paper").disabled = false;
                document.querySelector(".scissors").disabled = false;
            }, 1000)

        }    
    }

    else if(player == "Rock" && computer == "Rock"){
        document.querySelector(".reverse1").textContent="✊";
        document.querySelector(".player").style.padding = "0 0 8px 0";
        document.querySelector(".player").style.backgroundColor = "#5FA8D3";
        document.querySelector(".computer").textContent="💻";
        document.querySelector(".computer").style.padding = "0 0 8px 0";
        document.querySelector(".computer").style.backgroundColor = "#5FA8D3";
        document.querySelector(".rock").disabled = true;
        document.querySelector(".paper").disabled = true;
        document.querySelector(".scissors").disabled = true;

        if(k < 1){
            document.querySelector(".battle").style.animationPlayState="running";
            document.querySelector(".player").style.animationPlayState="running";
            document.querySelector(".computer").style.animationPlayState="running";
            k++;
            setTimeout(() => {
                document.querySelector(".computer").textContent="✊";
                document.querySelector(".computer").style.padding = "0 0 8px 0";
                document.querySelector(".description").textContent="It's a tie";
                document.querySelector(".rock").disabled = false;
                document.querySelector(".paper").disabled = false;
                document.querySelector(".scissors").disabled = false;
            }, 1000)
        }

        else {
            document.querySelector(".battle").style.animationName="none";
            document.querySelector(".player").style.animationName="none";
            document.querySelector(".computer").style.animationName="none";

            requestAnimationFrame(() => {
                document.querySelector(".battle").style.animationName="" ; 
            });
            
            requestAnimationFrame(() => {
                document.querySelector(".player").style.animationName="" ; 
            });
            requestAnimationFrame(() => {
                document.querySelector(".computer").style.animationName="" ; 
            });

            setTimeout(() => {
                document.querySelector(".computer").textContent="✊";
                document.querySelector(".computer").style.padding = "0 0 8px 0";
                document.querySelector(".description").textContent="It's a tie";
                document.querySelector(".rock").disabled = false;
                document.querySelector(".paper").disabled = false;
                document.querySelector(".scissors").disabled = false;
            }, 1000)
        }    
    }

    else if(player == "Scissors" && computer == "Paper"){
        document.querySelector(".reverse1").textContent="✌️";
        document.querySelector(".player").style.padding = "0 0 8px 0";
        document.querySelector(".player").style.backgroundColor = "#5FA8D3";
        document.querySelector(".computer").textContent="💻";
        document.querySelector(".computer").style.padding = "0 0 8px 0";
        document.querySelector(".computer").style.backgroundColor = "#5FA8D3";
        i++;
        document.querySelector(".rock").disabled = true;
        document.querySelector(".paper").disabled = true;
        document.querySelector(".scissors").disabled = true;

        if(k < 1){
            document.querySelector(".battle").style.animationPlayState="running";
            document.querySelector(".player").style.animationPlayState="running";
            document.querySelector(".computer").style.animationPlayState="running";
            k++;
            
            setTimeout(() => {
                document.querySelector(".computer").textContent="✋";
                document.querySelector(".computer").style.padding = "0 0 8px 10px";
                document.querySelector(".computer").style.backgroundColor = "#E94F37";
                document.querySelector(".player").style.backgroundColor = "#5FAD41";
                document.querySelector(".scorep").textContent="SCORE:"+ i.toString();
                if (i < 5){
                    document.querySelector(".description").textContent="Scissors beats paper";
                }
                else {
                    document.querySelector(".description").textContent="Victory! Scissors beats paper";
                    i=0;
                    j=0;
                }
                document.querySelector(".rock").disabled = false;
                document.querySelector(".paper").disabled = false;
                document.querySelector(".scissors").disabled = false;
            }, 1000)
        }

        else {
            document.querySelector(".battle").style.animationName="none";
            document.querySelector(".player").style.animationName="none";
            document.querySelector(".computer").style.animationName="none";

            requestAnimationFrame(() => {
                document.querySelector(".battle").style.animationName="" ; 
            });
            
            requestAnimationFrame(() => {
                document.querySelector(".player").style.animationName="" ; 
            });
            requestAnimationFrame(() => {
                document.querySelector(".computer").style.animationName="" ; 
            });

            setTimeout(() => {
                document.querySelector(".computer").textContent="✋";
                document.querySelector(".computer").style.padding = "0 0 8px 10px";
                document.querySelector(".computer").style.backgroundColor = "#E94F37";
                document.querySelector(".player").style.backgroundColor = "#5FAD41";
                document.querySelector(".scorep").textContent="SCORE:"+ i.toString();
                if (i < 5){
                    document.querySelector(".description").textContent="Scissors beats paper";
                }
                else {
                    document.querySelector(".description").textContent="Victory! Scissors beats paper";
                    i=0;
                    j=0;
                }
                document.querySelector(".rock").disabled = false;
                document.querySelector(".paper").disabled = false;
                document.querySelector(".scissors").disabled = false;
            }, 1000)

        }    
    }

    else if(player == "Scissors" && computer == "Rock"){
        document.querySelector(".reverse1").textContent="✌️";
        document.querySelector(".player").style.padding = "0 0 8px 0";
        document.querySelector(".player").style.backgroundColor = "#5FA8D3";
        document.querySelector(".computer").textContent="💻";
        document.querySelector(".computer").style.padding = "0 0 8px 0";
        document.querySelector(".computer").style.backgroundColor = "#5FA8D3";
        j++;
        document.querySelector(".rock").disabled = true;
        document.querySelector(".paper").disabled = true;
        document.querySelector(".scissors").disabled = true;

        if(k < 1){
            document.querySelector(".battle").style.animationPlayState="running";
            document.querySelector(".player").style.animationPlayState="running";
            document.querySelector(".computer").style.animationPlayState="running";
            k++;
           
            setTimeout(() => {
                document.querySelector(".computer").textContent="✊";
                document.querySelector(".computer").style.padding = "0 0 8px 0";
                document.querySelector(".computer").style.backgroundColor = "#5FAD41";
                document.querySelector(".player").style.backgroundColor = "#E94F37";
                document.querySelector(".scorec").textContent="SCORE:"+ j.toString();
                if (j < 5){
                    document.querySelector(".description").textContent="Scissors loses to rock";
                }
                else {
                    document.querySelector(".description").textContent="Defeat! Scissors loses to rock";
                    i=0;
                    j=0;
                }
                document.querySelector(".rock").disabled = false;
                document.querySelector(".paper").disabled = false;
                document.querySelector(".scissors").disabled = false;
            }, 1000)
        }

        else {
            document.querySelector(".battle").style.animationName="none";
            document.querySelector(".player").style.animationName="none";
            document.querySelector(".computer").style.animationName="none";

            requestAnimationFrame(() => {
                document.querySelector(".battle").style.animationName="" ; 
            });
            
            requestAnimationFrame(() => {
                document.querySelector(".player").style.animationName="" ; 
            });
            requestAnimationFrame(() => {
                document.querySelector(".computer").style.animationName="" ; 
            });

            setTimeout(() => {
                document.querySelector(".computer").textContent="✊";
                document.querySelector(".computer").style.padding = "0 0 8px 0";
                document.querySelector(".computer").style.backgroundColor = "#5FAD41";
                document.querySelector(".player").style.backgroundColor = "#E94F37";
                document.querySelector(".scorec").textContent="SCORE:"+ j.toString();
                if (j < 5){
                    document.querySelector(".description").textContent="Scissors loses to rock";
                }
                else {
                    document.querySelector(".description").textContent="Defeat! Scissors loses to rock";
                    i=0;
                    j=0;
                }
                document.querySelector(".rock").disabled = false;
                document.querySelector(".paper").disabled = false;
                document.querySelector(".scissors").disabled = false;
            }, 1000)

        }    
    }

    else if(player == "Scissors" && computer == "Scissors"){
        document.querySelector(".reverse1").textContent="✌️";
        document.querySelector(".player").style.padding = "0 0 8px 0";
        document.querySelector(".player").style.backgroundColor = "#5FA8D3";
        document.querySelector(".computer").textContent="💻";
        document.querySelector(".computer").style.padding = "0 0 8px 0";
        document.querySelector(".computer").style.backgroundColor = "#5FA8D3";
        document.querySelector(".rock").disabled = true;
        document.querySelector(".paper").disabled = true;
        document.querySelector(".scissors").disabled = true;

        if(k < 1){
            document.querySelector(".battle").style.animationPlayState="running";
            document.querySelector(".player").style.animationPlayState="running";
            document.querySelector(".computer").style.animationPlayState="running";
            k++;
            setTimeout(() => {
                document.querySelector(".computer").textContent="✌️";
                document.querySelector(".computer").style.padding = "0 0 8px 0";
                document.querySelector(".description").textContent="It's a tie";
                document.querySelector(".rock").disabled = false;
                document.querySelector(".paper").disabled = false;
                document.querySelector(".scissors").disabled = false;
            }, 1000)
        }

        else {
            document.querySelector(".battle").style.animationName="none";
            document.querySelector(".player").style.animationName="none";
            document.querySelector(".computer").style.animationName="none";

            requestAnimationFrame(() => {
                document.querySelector(".battle").style.animationName="" ; 
            });
            
            requestAnimationFrame(() => {
                document.querySelector(".player").style.animationName="" ; 
            });
            requestAnimationFrame(() => {
                document.querySelector(".computer").style.animationName="" ; 
            });

            setTimeout(() => {
                document.querySelector(".computer").textContent="✌️";
                document.querySelector(".computer").style.padding = "0 0 8px 0";
                document.querySelector(".description").textContent="It's a tie";
                document.querySelector(".rock").disabled = false;
                document.querySelector(".paper").disabled = false;
                document.querySelector(".scissors").disabled = false;
            }, 1000)

        }    
    }
}

