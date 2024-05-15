let boxes = document.querySelectorAll(".box");
let reserBtn = document.querySelectorAll("#restart-btn");

let turn0 = true;

let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turn0){
            box.innerText="O";
            turn0 = false;
        } else{
            box.innerText="X";
            turn0 = true ;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (patterns of winPattern){
        let pas1val = boxes[patterns[0]].innerText;
        let pas2val = boxes[patterns[1]].innerText;
        let pas3val = boxes[patterns[2]].innerText;
    if (pas1val != "" && pas2val != "" && pas3val != ""){
        if(pas1val == pas2val && pas2val == pas3val){
            console.log(`winner is = ${pas1val}`);
        }
    }
    patterns.disabled = true;
    }
};