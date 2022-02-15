var paddle1 = document.getElementById('paddle1');
var paddle2 = document.getElementById('paddle2');
var ball = document.getElementById('ball');

var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');
var s1 = 0;
var s2 = 0;
var maxScore = 0;

var paddleWidth = 150;
var positionOfPaddle1 = 230;
var positionOfPaddle2 = 230;

var topPositionOfBall = 250;
var leftPositionOfBall = 620;
var topSpeedOfBall = 100;
var leftSpeedOfBall = 0;

// function onStart(){
// 	var x = localStorage.getItem(maxScore);
// 	if(x>0){
// 		window.alert("max score is " + localStorage.getItem(maxScore));
// 	}
// 	else{
// 		localStorage.setItem(maxScore,0);
// 		window.alert("This is your first Time");
// 	}
// }

function startBall() {
	topPositionOfBall = 250;
	leftPositionOfBall = 620;
	if (Math.random() < 0.5) {
		var side = 1;
	} else {
		var side = -1;
	}
	topSpeedOfBall = Math.random() * 6 + 5;
	leftSpeedOfBall = side * (Math.random() * 6 + 5);
};

// window.addEventListener('load',function(){
// 	onStart();
// 	startBall();
// });

document.addEventListener('keypress',function(e){
	positionOfPaddle1 = parseInt(paddle1.getBoundingClientRect().left);
	positionOfPaddle2 = parseInt(paddle2.getBoundingClientRect().left);

  if(e.key=='a'){
			if(positionOfPaddle1>=0)
			{
				paddle1.style.left = (positionOfPaddle1-30) + "px";
				paddle2.style.left = (positionOfPaddle2-30) + "px";

			}
  }
  if(e.key =='d'){
		var x = window.innerWidth - positionOfPaddle1 - paddleWidth;
		if(x>0){
			paddle1.style.left = (positionOfPaddle1+30) + "px";
			paddle2.style.left = (positionOfPaddle2+30) + "px";
		}
  }

});

window.setInterval(function(){
topPositionOfBall += topSpeedOfBall;
leftPositionOfBall += leftSpeedOfBall;

if(topPositionOfBall<=0 || window.innerHeight-topPositionOfBall-25<=0){
	topSpeedOfBall = -topSpeedOfBall;
}
if(leftPositionOfBall<=0 || window.innerWidth-leftPositionOfBall-25<=10)
leftSpeedOfBall = -leftSpeedOfBall;

if(topPositionOfBall<=30){
	positionOfPaddle1 = parseInt(paddle1.getBoundingClientRect().left);
	if(leftPositionOfBall>=positionOfPaddle1 && leftPositionOfBall<=positionOfPaddle1+paddleWidth){
		topSpeedOfBall = -topSpeedOfBall;
	}
	else{
		startBall();
		s2++;
		if(s2>maxScore){
			maxScore = s2;
		}
		window.alert("player 2 wins with a score of : " + s2 + " , Max score is : "+ maxScore);

	}
}

if(window.innerHeight-25-topPositionOfBall<=30){
	positionOfPaddle2 = parseInt(paddle1.getBoundingClientRect().left);
	if(leftPositionOfBall>=positionOfPaddle2 && leftPositionOfBall<=positionOfPaddle2+paddleWidth){
		topSpeedOfBall = -topSpeedOfBall;
	}
	else{
		startBall();
		s1++;
		if(s1>maxScore){
			maxScore = s1;
		}
		window.alert("player 1 wins with a score of : " + s1 + " , Max score is : "+ maxScore);

	}
}

score1.innerText = s1;
score2.innerText = s2;
ball.style.top = topPositionOfBall + "px";
ball.style.left = leftPositionOfBall + "px";


},40);
