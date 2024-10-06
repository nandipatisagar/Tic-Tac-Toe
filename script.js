let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
 const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ];
 const resetgame=()=>{
    turnO=true;
    enablebox();
    msgcontainer.classList.add("hide");
 }

const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
    
}
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}



 const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
 }
  const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
            }
        }
    }
  }

 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was Clicked");
        if(turnO){
            box.innerHTML="O";
            turnO=false;
        }
        else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
 })
 
 newbtn.addEventListener("click",resetgame);
 resetBtn.addEventListener("click",resetgame);