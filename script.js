/*Add your JavaScript here*/
var cookieScore = 0;
var appleScore = 0
  
var questionCount = 0;

var result = document.getElementById("result");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click",cookie);
q1a2.addEventListener("click",apple);
                     
q2a1.addEventListener("click",cookie);
q2a2.addEventListener("click",apple);

q3a1.addEventListener("click",cookie);
q3a2.addEventListener("click",apple);

restart.addEventListener("click",new1);

function cookie(){
  cookieScore++;
  questionCount++;

  console.log("questionCount = "+ questionCount+ "cookieScore = "+cookieScore);
  if (questionCount == 3){
    console.log("The quiz is done!");
    updateResult();
  }
}

function apple(){
  appleScore++;
  questionCount++;

  console.log("questionCount = "+questionCount+ "appleScore = "+appleScore);
  if (questionCount == 3){
    console.log("The quiz is done!");
    updateResult();
  }
}

function updateResult() {
  if(cookieScore >= 2){
    result.innerHTML = "You’re a Peanut Butter Brownie 🥜🍫 – rich, comforting, and unforgettable!";
    console.log("You’re a Peanut Butter Brownie 🥜🍫 – rich, comforting, and unforgettable!");
  }
  else if (appleScore >= 2){
    result.innerHTML = "You’re a Mango Smoothie 🥭 – bright, refreshing, and full of zest!";
    console.log("You’re a Mango Smoothie 🥭 – bright, refreshing, and full of zest!");
  }
}

function new1(){
  if (questionCount==3){
    result.innerHTML = "Your result is..."
    cookieScore = 0;
    appleScore = 0;
    questionCount=0;
    console. log("The cookieScore = "+cookieScore+" The appleScore =  "+appleScore+" The question count = "+questionCount);
  }
}