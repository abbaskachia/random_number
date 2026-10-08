const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("Label1");
const myLabel2 = document.getElementById("Label2");
const myLabel3 = document.getElementById("Label3");
const min = 1;
const max = 100;
let randomNum1;
let randomNum2;
let randomNum3;


myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
    myLabel1.textContent = randomNum1;
    randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
    myLabel2.textContent = randomNum2;
    randomNum3 = Math.floor(Math.random() * (max - min + 1)) + min;
    myLabel3.textContent = randomNum3;
}





let age = 65;

if(age >= 18){
    console.log("You are old enough to vote.");
} else{
    console.log("You are not old enough to vote.");
}  if(age >= 50){
    console.log("You are a senior citizen.");
}else if(age >= 65){
    console.log("You are eligible for retirement benefits.");
}

let myArray = [["Abbas, 18"], ["cat, 3"]];
myArray.push(["Abbas"]);
console.log(myArray);