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
        
    if (player == "Paper" && computer == "Rock"){

        document.querySelector(".player").textContent="✋";
        document.querySelector(".player").style.padding = "0 0 8px 7px";
        document.querySelector(".player").style.backgroundColor = "#5FA8D3";
        document.querySelector(".computer").textContent="💻";
        document.querySelector(".computer").style.padding = "0 0 8px 0";
        document.querySelector(".computer").style.backgroundColor = "#5FA8D3";

        if(k < 1){
            document.querySelector(".battle").style.animationPlayState="running";
            document.querySelector(".player").style.animationPlayState="running";
            document.querySelector(".computer").style.animationPlayState="running";
            k++;
            i++;
            setTimeout(() => {
                document.querySelector(".computer").textContent="✊";
                document.querySelector(".computer").style.padding = "0 0 8px 0";
                document.querySelector(".computer").style.backgroundColor = "#E94F37";
                document.querySelector(".player").style.backgroundColor = "#5FAD41";

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
            }, 1000)

        }
    }

    else if (player == "Paper" && computer == "Scissors"){

        document.querySelector(".player").textContent="✋";
        document.querySelector(".player").style.padding = "0 0 8px 7px";
        document.querySelector(".player").style.backgroundColor = "#5FA8D3";
        document.querySelector(".computer").textContent="💻";
        document.querySelector(".computer").style.padding = "0 0 8px 0";
        document.querySelector(".computer").style.backgroundColor = "#5FA8D3";

        if(k < 1){
            document.querySelector(".battle").style.animationPlayState="running";
            document.querySelector(".player").style.animationPlayState="running";
            document.querySelector(".computer").style.animationPlayState="running";
            k++;
            j++;
            setTimeout(() => {
                document.querySelector(".computer").textContent="✌️";
                document.querySelector(".computer").style.padding = "0 0 8px 0";
                document.querySelector(".computer").style.backgroundColor = "#5FAD41";
                document.querySelector(".player").style.backgroundColor = "#E94F37";
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
            }, 1000)

        }
    }

    else if (player == "Paper" && computer == "Paper"){

        document.querySelector(".player").textContent="✋";
        document.querySelector(".player").style.padding = "0 0 8px 7px";
        document.querySelector(".player").style.backgroundColor = "#5FA8D3";
        document.querySelector(".computer").textContent="💻";
        document.querySelector(".computer").style.padding = "0 0 8px 0";
        document.querySelector(".computer").style.backgroundColor = "#5FA8D3";

        if(k < 1){
            document.querySelector(".battle").style.animationPlayState="running";
            document.querySelector(".player").style.animationPlayState="running";
            document.querySelector(".computer").style.animationPlayState="running";
            k++;
            setTimeout(() => {
                document.querySelector(".computer").textContent="✋";
                document.querySelector(".computer").style.padding = "0 0 8px 10px";
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
            }, 1000)

        }
    }

    else if(player == "Rock" && computer == "Paper"){
        document.querySelector(".player").textContent="✊";
        document.querySelector(".player").style.padding = "0 0 8px 0";
        document.querySelector(".player").style.backgroundColor = "#5FA8D3";
        document.querySelector(".computer").textContent="💻";
        document.querySelector(".computer").style.padding = "0 0 8px 0";
        document.querySelector(".computer").style.backgroundColor = "#5FA8D3";

        if(k < 1){
            document.querySelector(".battle").style.animationPlayState="running";
            document.querySelector(".player").style.animationPlayState="running";
            document.querySelector(".computer").style.animationPlayState="running";
            k++;
            j++;
            setTimeout(() => {
                document.querySelector(".computer").textContent="✋";
                document.querySelector(".computer").style.padding = "0 0 8px 10px";
                document.querySelector(".computer").style.backgroundColor = "#5FAD41";
                document.querySelector(".player").style.backgroundColor = "#E94F37";
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
            }, 1000)

        }    
    }

    else if(player == "Rock" && computer == "Scissors"){
        document.querySelector(".player").textContent="✊";
        document.querySelector(".player").style.padding = "0 0 8px 0";
        document.querySelector(".player").style.backgroundColor = "#5FA8D3";
        document.querySelector(".computer").textContent="💻";
        document.querySelector(".computer").style.padding = "0 0 8px 0";
        document.querySelector(".computer").style.backgroundColor = "#5FA8D3";

        if(k < 1){
            document.querySelector(".battle").style.animationPlayState="running";
            document.querySelector(".player").style.animationPlayState="running";
            document.querySelector(".computer").style.animationPlayState="running";
            k++;
            i++;
            setTimeout(() => {
                document.querySelector(".computer").textContent="✌️";
                document.querySelector(".computer").style.padding = "0 0 8px 0";
                document.querySelector(".computer").style.backgroundColor = "#E94F37";
                document.querySelector(".player").style.backgroundColor = "#5FAD41";
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
            }, 1000)

        }    
    }

    else if(player == "Rock" && computer == "Rock"){
        document.querySelector(".player").textContent="✊";
        document.querySelector(".player").style.padding = "0 0 8px 0";
        document.querySelector(".player").style.backgroundColor = "#5FA8D3";
        document.querySelector(".computer").textContent="💻";
        document.querySelector(".computer").style.padding = "0 0 8px 0";
        document.querySelector(".computer").style.backgroundColor = "#5FA8D3";

        if(k < 1){
            document.querySelector(".battle").style.animationPlayState="running";
            document.querySelector(".player").style.animationPlayState="running";
            document.querySelector(".computer").style.animationPlayState="running";
            k++;
            setTimeout(() => {
                document.querySelector(".computer").textContent="✊";
                document.querySelector(".computer").style.padding = "0 0 8px 0";
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
            }, 1000)

        }    
    }

    else if(player == "Scissors" && computer == "Paper"){
        document.querySelector(".player").textContent="✌️";
        document.querySelector(".player").style.padding = "0 0 8px 0";
        document.querySelector(".player").style.backgroundColor = "#5FA8D3";
        document.querySelector(".computer").textContent="💻";
        document.querySelector(".computer").style.padding = "0 0 8px 0";
        document.querySelector(".computer").style.backgroundColor = "#5FA8D3";

        if(k < 1){
            document.querySelector(".battle").style.animationPlayState="running";
            document.querySelector(".player").style.animationPlayState="running";
            document.querySelector(".computer").style.animationPlayState="running";
            k++;
            i++;
            setTimeout(() => {
                document.querySelector(".computer").textContent="✋";
                document.querySelector(".computer").style.padding = "0 0 8px 10px";
                document.querySelector(".computer").style.backgroundColor = "#E94F37";
                document.querySelector(".player").style.backgroundColor = "#5FAD41";
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
            }, 1000)

        }    
    }

    else if(player == "Scissors" && computer == "Rock"){
        document.querySelector(".player").textContent="✌️";
        document.querySelector(".player").style.padding = "0 0 8px 0";
        document.querySelector(".player").style.backgroundColor = "#5FA8D3";
        document.querySelector(".computer").textContent="💻";
        document.querySelector(".computer").style.padding = "0 0 8px 0";
        document.querySelector(".computer").style.backgroundColor = "#5FA8D3";

        if(k < 1){
            document.querySelector(".battle").style.animationPlayState="running";
            document.querySelector(".player").style.animationPlayState="running";
            document.querySelector(".computer").style.animationPlayState="running";
            k++;
            j++;
            setTimeout(() => {
                document.querySelector(".computer").textContent="✊";
                document.querySelector(".computer").style.padding = "0 0 8px 0";
                document.querySelector(".computer").style.backgroundColor = "#5FAD41";
                document.querySelector(".player").style.backgroundColor = "#E94F37";
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
            }, 1000)

        }    
    }

    else if(player == "Scissors" && computer == "Scissors"){
        document.querySelector(".player").textContent="✌️";
        document.querySelector(".player").style.padding = "0 0 8px 0";
        document.querySelector(".player").style.backgroundColor = "#5FA8D3";
        document.querySelector(".computer").textContent="💻";
        document.querySelector(".computer").style.padding = "0 0 8px 0";
        document.querySelector(".computer").style.backgroundColor = "#5FA8D3";

        if(k < 1){
            document.querySelector(".battle").style.animationPlayState="running";
            document.querySelector(".player").style.animationPlayState="running";
            document.querySelector(".computer").style.animationPlayState="running";
            k++;
            setTimeout(() => {
                document.querySelector(".computer").textContent="✌️";
                document.querySelector(".computer").style.padding = "0 0 8px 0";
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
            }, 1000)

        }    
    }
}

