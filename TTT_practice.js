let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector(".reset")
let msgBox = document.querySelector(".msg")
let msg = document.querySelector(".msg-text")
let newBtn = document.querySelector(".new")

let turn = true //PlayerX,PlayerO

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("Box was clicked");
        if(turn){
            box.innerText="X";
            turn = false;
        }else{
            box.innerText="O";
            turn = true;
        }
        box.disabled=true;
        checkWinner()
    });
})

const checkWinner = () =>{
    for(pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3 && pos3===pos1){
                console.log("Winner", pos1);
                msgDisplay(pos1);
            }
        }
    }
}

const msgDisplay = (winner) =>{
    msg.innerText = `Congratulations!! The winner is ${winner}`;
    msgBox.classList.remove("hide");
    disable();
}

const disable = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}

const enable = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetgame = () =>{
    turn = true;
    msgBox.classList.add("hide");
    enable();
}

resetBtn.addEventListener("click", resetgame);
newBtn.addEventListener("click", resetgame)