//  console.log("Hello");

let music= new Audio("Assets/music.mp3");
let turn= new Audio("Assets/ting.mp3");
let gameOver= new Audio("Assets/gameover.mp3");

let turnMark= "X";
let isGameOver= false;
let reset= document.getElementById("reset");

//function to change turn
const changeTurn=()=>{
     turnMark==="X"?turnMark="0":turnMark="X";
}

//function to check for a win
const checkWin=()=>{
    let boxText= document.getElementsByClassName("boxText");
    let wins= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    //All winning entries
    wins.forEach(e=>{
        if((boxText[e[0]].innerText=== boxText[e[1]].innerText) && (boxText[e[2]].innerText=== boxText[e[1]].innerText) && (boxText[e[0]].innerText!=="")){
            document.querySelector(".info").innerText= boxText[e[0]].innerText+" won";
            isGameOver= true;
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width= "181px";
            gameOver.play();
        }
    })
}

//Game Logic

let boxes= document.getElementsByClassName("box");

Array.from(boxes).forEach(element=>{
    let boxText= element.querySelector(".boxText");
    element.addEventListener("click",(e)=>{
        if(boxText.innerText === ""){
            boxText.innerText= turnMark;
            changeTurn();
            turn.play();
            checkWin();
            checkFilled();
            if(!isGameOver){
            document.getElementsByClassName("info")[0].innerText= "Turn for "+turnMark;
        }
        else{
            resetGame();
        }
    }
    })
})

const checkFilled= ()=>{
    let boxText= document.querySelectorAll(".boxText");
    isGameOver=true;
    Array.from(boxText).forEach(element=>{
        if(element.innerText===""){
            isGameOver= false;
        }
    });
    
    
}


//Add onclick on reset button
reset.addEventListener("click",()=>{
    let boxText= document.querySelectorAll(".boxText");
    Array.from(boxText).forEach(element=>{
        element.innerText="";
    });
    isGameOver= false;
    turnMark="X";
    document.getElementsByClassName("info")[0].innerText= "Turn for "+turnMark;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width= "0px";

})

const resetGame= ()=>{
    let boxText= document.querySelectorAll(".boxText");
    Array.from(boxText).forEach(element=>{
        element.innerText="";
    });
    isGameOver= false;
    turnMark="X";
    document.getElementsByClassName("info")[0].innerText= "Turn for "+turnMark;
    gameOver.play();
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width= "0px";
     
}