let boxes =document.querySelectorAll(".box");
    let resetbtn =document.querySelector("#reset");
    let newgamebtn=document.querySelector("#newbtn");
    let msgcontainer=document.querySelector(".msg-container");
    let msg=document.querySelector(".msg");
    let turn0 =true //playero Or playerx turn decide
    const winpossibility= [
      [0,1,2],
      [0,3,6],
      [0,4,8],
      [1,4,7],
      [2,5,8],
      [3,4,5],
      [6,7,8],
    
    ]
    boxes.forEach((box) =>{
      box.addEventListener("click",() =>{
        if(turn0 ===true){
          box.innerText ="O";
          turn0 =false;
        }
        else{
          box.innerText ="X";
           turn0 =true;
        }
        box.disabled= true;   //on double click no respond by on 
        checkwinner();
      });
    });
      const resetbox=()=>{
         turn0=true;
         enablebtn();
          msgcontainer.classList.add("hide");
      }
    const disablebtn= () =>{
      for(let box of boxes){
        box.disabled=true;   // button are disabled
      }
    }
     const enablebtn= () =>{
      for(let box of boxes){
        box.disabled=false;   // button are enablebtn
        box.innerText="";
      }
    }
    const showwinner=(winner)=>{
      msg.innerText=`🎉 Congratulation! ${winner} is Winner 🎉`;
      msgcontainer.classList.remove("hide");
      disablebtn();
    }
   const checkwinner=() =>{
      for(let pattern of winpossibility){
         let pos1val= boxes[pattern[0]].innerText;
         let pos2val= boxes[pattern[1]].innerText;
         let pos3val= boxes[pattern[2]].innerText;

       if(pos1val !="" && pos2val !="" && pos3val !=""){
        if(pos1val === pos2val && pos2val === pos3val){
          console.log("winner");
          showwinner(pos1val);
          return;
        }
        // Check for tie if no winner was found
         let allFilled = true;
         for (let box of boxes) {
           if (box.innerText === "") {
             allFilled = false;
             break;
           }
         }
         if (allFilled) {
           msg.innerText = "NO Winner, 😐 Match is Tie!";
           msgcontainer.classList.remove("hide");
           disablebtn();
         }

                }  
             }
           }
  newgamebtn.addEventListener("click",resetbox);
  resetbtn.addEventListener("click",resetbox);