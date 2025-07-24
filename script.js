// alert(" Changes made successfully \n Press ENTER to continue");

// alert("Welcome To Tic Tac Toe");

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;  //playerX  playerO 

const winPattern =[                 //winnning pattern
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

function clicked(){
    
     console.log("box was clicked");

     if(turnO===true){
        this.innerText="O";
        turnO = false;
        // this.backgroundColor= WebGL2RenderingContext;

     }
     else{
        this.innerText="X";
        turnO = true;
     }

     this.disabled=true;

    checkWinner();
    
     
}

const showWinner=(winner)=>{
    msg.innerText= `${winner}  WON!!!`;
    msgContainer.classList.remove("hide");
    reset.classList.add("hide");

    for(let i of boxes){
        i.disabled=true;
    }
}

function checkWinner(){
   

    for(let i of winPattern){
    /*    console.log(
            boxes[i[0]].innerText,
            boxes[i[1]].innerText, 
            boxes[i[2]].innerText
        );
    */

        let pos1val = boxes[i[0]].innerText;     //pos= position and val = value
        let pos2val = boxes[i[1]].innerText;
        let pos3val = boxes[i[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner found",pos3val);
                showWinner(pos3val);
                
            }
        }
       

    }
}


function resetGame(){
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    });
    turnO=true;
    msgContainer.classList.add("hide");
    
    
}

function newGame(){
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    });
    turnO=true;
    msgContainer.classList.add("hide");
    reset.classList.remove("hide");

}




boxes.forEach((box)=> {
    box.addEventListener("click",clicked)
});

reset.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",newGame);
