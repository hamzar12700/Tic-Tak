let boxes = document.querySelectorAll(".box");
let restart_Btn = document.getElementById("#reset-btn");
let newGame_Btn = document.getElementById("#new-btn");
let msgContainer = document.getElementsByClassName(".msg-container");
let msg = document.querySelectorAll(".msg");

let button = document.querySelector("button");

let turn0 = true;

let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
];

const resetGame = () =>{
turn0 = true
for (let hide of msgContainer){
    hide.classList.add("hide");
}
enable_btn();
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    //        console.log("box was clicked");
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    gameWinner();
  });
});

const disable_btn = () =>{
    for (let box of boxes){
        box.disabled= true;
    }
};
const enable_btn = () =>{
    for (let box of boxes){
        box.disabled= false;
        box.innerText = "";
    }
};
const showWinner = (winner) => {
  win_msg.innerText = `Congratulation ${winner} you have won the game`;
  for (let hide of msgContainer){
hide.classList.remove("hide");
  }
  //msgContainer.
  //msgContainer.classList.remove("hide");
  disable_btn();
};

const gameWinner = () => {
  for (let pattern of winPattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    //console.log(pos1val);

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("Winner is :" + pos1val);
        showWinner(pos1val);
      }
      //        console.log(pos1val +"win succesfully");
    }
  }
};

newGame_Btn.addEventListener("click", resetGame);
restart_Btn.addEventListener("click", resetGame);


//button.addEventListener("click", resetGame )