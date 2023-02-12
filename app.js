
const startButton = document.querySelector("#startButton");
const rgbP = document.querySelector("#rgbP");
const boxArray = Array.from(document.querySelector("#boxContainer").querySelectorAll(".btn"));
const levelP = document.querySelector("#levelP");
let boxAndRNArray = [];
let theRightBox;
let clickedBox;
let whichQuestion;
let rN1,rN2,rN3;
let numberOfCorrectAnswer;
let lT;
const denemeButton = document.querySelector("#denemeButton");

openOrCloseBox(false);
addListeners();
whichQuestion = 0;
numberOfCorrectAnswer = 0;
lT = "";


function openOrCloseBox(b){

    if(b){
        for (const box of boxArray) {
            box.disabled = false;
        }
    }
    else{
        for (const box of boxArray) {
            box.disabled = true;
        }
    }
}

function addListeners(){
    startButton.addEventListener("click",startButtonClick);
    addBoxButtonsClick();
}

function addBoxButtonsClick(){
    for (const box in boxArray) {
        boxArray[box].addEventListener("click",function(){
            boxButtonsClick(box);
        })
    }
}

function boxButtonsClick(index){
    clickedBox = index;
    whichQuestion++;

    if(theRightBox == clickedBox){
        numberOfCorrectAnswer++;
        lT += "🟩";
        
    }
    else{
        lT += "🟥";
    }
    setLevelParagraf();

    if(whichQuestion == 9){
        openOrCloseBox(false);
        startButton.disabled = false;
    }
    else{
        productNumbers();
        setTheRgbP();
        setBoxColor();
    }
    
}


function setLevelParagraf(){

    if(whichQuestion != 9){
        levelP.textContent = lT + "🟦";
    }else{
        levelP.textContent = lT;
    }
    

    for(let i = 1 ; i < (9 - whichQuestion);i++){
        levelP.textContent += "🟨";
    }
}

function startButtonClick(){
    whichQuestion = 0;
    lT = ""
    levelP.textContent = lT;
    setLevelParagraf();
    productNumbers();
    setTheRgbP();
    setBoxColor();
    startButton.disabled = true;
    openOrCloseBox(true);
}

function productNumbers(){
    rN1 = Math.floor(Math.random() * 256);
    rN2 = Math.floor(Math.random() * 256);
    rN3 = Math.floor(Math.random() * 256);

    denemeButton.style.backgroundColor = `rgb(${rN1},${rN2},${rN3})`;
}

let setTheRgbP = ()=> rgbP.innerHTML = `RGB(${rN1},${rN2},${rN3})`;

function setBoxColor(){
    for (const box of boxArray) {
        let rN1,rN2,rN3;
        rN1 = Math.floor(Math.random() * 256);
        rN2 = Math.floor(Math.random() * 256);
        rN3 = Math.floor(Math.random() * 256);
        box.style.backgroundColor = `rgb(${rN1},${rN2},${rN3})`;
        boxAndRNArray.push([box,[rN1,rN2,rN3]]);
    }

    theRightBox = Math.floor(Math.random()*10);
    boxAndRNArray[theRightBox][1] = [rN1,rN2,rN3];
    boxAndRNArray[theRightBox][0].style.backgroundColor = `rgb(${rN1},${rN2},${rN3})`;
   
}




