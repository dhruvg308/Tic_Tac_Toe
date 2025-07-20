// alert(" Changes made successfully \n Press ENTER to continue");

// alert("Welcome To Tic Tac Toe");

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

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
                alert("winner found");
                
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
}



boxes.forEach((box)=> {
    box.addEventListener("click",clicked)
});

reset.addEventListener("click",resetGame);

