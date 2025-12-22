const mainContent = document.querySelector("#mainsection");

const outputNum = mainContent.querySelector("#numop");
const inputval = mainContent.querySelector("#numip");

const checkBtn = mainContent.querySelector("#btnchk");

const startGame = mainContent.querySelector("#btnnewgm");

const hintline = mainContent.querySelector("#hint");

const attemptline = mainContent.querySelector("#attempt");

const gameOver = mainContent.querySelector("#gameover");

const scoreline = mainContent.querySelector("#showscore");

const tipline = mainContent.querySelector("#tip");

const num = Math.floor(Math.random() * 100) + 1;
console.log(num);

inputval.addEventListener("focus", function () {
  inputval.placeholder = "";
});

inputval.addEventListener("blur", function () {
  inputval.placeholder = "Enter a Number";
});

atmpt = 10;
var s1 = 30;

checkBtn.addEventListener("click", function () {
  var enteredValue = Number(inputval.value);
  if (enteredValue === num) {
    if (atmpt === 10) {
      outputNum.innerHTML = `${num}`;
      mainContent.style.backgroundColor = "#03C04A";
      hintline.style.display = "none";
      tipline.style.display = "none";
      document.querySelector("#arrow1").style.position = "absolute";
      document.querySelector("#arrow1").style.visibility = "hidden";
      document.querySelector("#happy").style.position = "relative";
      document.querySelector("#happy").style.visibility = "visible";
      scoreline.innerHTML = `<img src="score2.png" alt="icon">Your Final Score: ${s1}`;
      gameOver.style.display = "block";
      gameOver.innerHTML = `Well Done,in 1st attempt!!`;
      attemptline.style.visibility = "visible";
      startGame.style.visibility = "visible";
      startGame.style.transition = "visibility 200ms linear 850ms";
    } else {
      outputNum.innerHTML = `${num}`;
      mainContent.style.backgroundColor = "#03C04A";
      hintline.style.display = "none";
      tipline.style.display = "none";
      document.querySelector("#arrow1").style.position = "absolute";
      document.querySelector("#arrow1").style.visibility = "hidden";
      document.querySelector("#happy").style.position = "relative";
      document.querySelector("#happy").style.visibility = "visible";
      scoreline.innerHTML = `<img src="score2.png" alt="icon">Your Final Score: ${s1}`;
      gameOver.style.display = "block";
      gameOver.innerHTML = `Correct!!`;
      attemptline.style.display = "none";
      startGame.style.visibility = "visible";
      startGame.style.transition = "visibility 200ms linear 850ms";
    }
  } else if (enteredValue !== num && atmpt !== 1) {
    atmpt--;
    s1 -= 2;
    hintline.style.display = "block";
    attemptline.innerHTML = `No of attempts remaining: ${atmpt}`;
    scoreline.innerHTML = `Your Current Score: ${s1}`;
    if (enteredValue > 100) {
      hintline.innerHTML = "Number is not more than 100";
    } else if (enteredValue <= 0) {
      hintline.innerHTML = "Number is not 0 or negetive";
    } else if (
      enteredValue > num &&
      enteredValue <= num + 15 &&
      enteredValue <= 100 &&
      enteredValue > 0
    ) {
      hintline.innerHTML = "Entered value is a bit high!!";
    } else if (
      enteredValue < num &&
      enteredValue >= num - 15 &&
      enteredValue <= 100 &&
      enteredValue > 0
    ) {
      hintline.innerHTML = "Entered value is a bit low!!";
    } else if (
      enteredValue > num + 15 &&
      enteredValue <= num + 30 &&
      enteredValue <= 100 &&
      enteredValue > 0
    ) {
      hintline.innerHTML = "Entered value is high!!";
    } else if (
      enteredValue < num - 15 &&
      enteredValue >= num - 30 &&
      enteredValue <= 100 &&
      enteredValue > 0
    ) {
      hintline.innerHTML = "Entered value is low!";
    } else if (
      enteredValue > num + 30 &&
      enteredValue <= 100 &&
      enteredValue > 0
    ) {
      hintline.innerHTML = "Entered value is too high!!!";
    } else if (
      enteredValue < num - 30 &&
      enteredValue <= 100 &&
      enteredValue > 0
    ) {
      hintline.innerHTML = "Entered value is too low!!";
    }
  } else if (enteredValue !== num && atmpt === 1) {
    s1 = 0;
    attemptline.style.display = "none";
    hintline.style.display = "none";
    tipline.style.display = "none";
    gameOver.style.display = "block";
    gameOver.innerHTML = `Game Over! Try Again`;
    scoreline.innerHTML = `<img src="sadface.png" alt="icon">Your Final Score: ${s1}`;
    startGame.style.visibility = "visible";
    startGame.style.transition = "visibility 200ms linear 800ms";
  }
});

startGame.addEventListener("click", function () {
  location.reload();
});
