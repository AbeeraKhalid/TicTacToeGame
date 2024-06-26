let boxes = document.querySelectorAll(".box");
let resetbtn= document.querySelector(".resbtn");

let msg= document.querySelector(".msg");

let msgContainer= document.querySelector(".msgcont");

let newGamebtn = document.querySelector(".newbtn");

        let Turn_O = true;
        let count = 0;
        const restartGame = () =>{
            Turn_O = true;
            count = 0;
            enableBoxes();
            msgContainer.classList.add('hide');
        };

        const win_Patterns = [
            [0,1,2],
            [0,3,6],
            [0,4,8],
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [3,4,5],
            [6,7,8]
          ];

          boxes.forEach((box) =>{
            box.addEventListener('click' , () => {
                if (Turn_O) { //player o turn
                   box.innerText = 'O';
                   Turn_O= false; 
                   box.style.color = 'green';
                } else{
                    box.innerText = 'X';
                   Turn_O = true; 
                  box.style.color = 'red';
                }
                box.disabled = true;
                count++;

                let isWinner = checkWinners();
                if (count === 9 && ! isWinner) {
                    gameDraw();
                }
            });
          });

           const gameDraw = ()=>{
            msg.innerText = 'Game was draw';
            msgContainer.classList.remove('hide');
            disableBoxes();
           }

          const disableBoxes = () =>{
            for(let box of boxes){
                box.disabled = true;
            }
          }
          const enableBoxes = () =>{
            for(let box of boxes){
                box.disabled = false;
                box.innerText = '';
            }
          }
           const showWinner = (winner)=>{
            msg.innerText = `Congratulations , Winner is ${winner}`
            msgContainer.classList.remove('hide') ;
            disableBoxes();
           }


         const checkWinners = () =>{
            for ( let pattern of win_Patterns){
               let positionVal1 = boxes[pattern[0]].innerText; 
               let positionVal2 = boxes[pattern[1]].innerText;
               let positionVal3 = boxes[pattern[2]].innerText; 
               
               if (positionVal1 !='' && positionVal2 !='' && positionVal3 != '') {
                if (positionVal1 === positionVal2 && positionVal2 ===positionVal3) {
                    showWinner(positionVal1);
                    return true;
                }
               }
            }
         }
         
         newGamebtn.addEventListener('click' ,restartGame);
         resetbtn.addEventListener('click' ,restartGame);