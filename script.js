//var timer = 60;
//var score = 0;
//var hitrn = 0;

//function increaseScore() {
//score += 10;
//document.querySelector("#score-val").textContent = score;
//}
//function getNewHit() {
//hitrn = Math.floor(Math.random() * 10);
//document.querySelector("#hit-val").innerHTML = hitrn;
//}

//function makeBubble() {
//var cullter = "";

//for (var i = 1; i <= 243; i++) {
//let rn = Math.floor(Math.random() * 10);
//cullter += `<div class="bubble">${rn}</div>`;
//console.log(rn)
//}

//document.querySelector("#pbtm").innerHTML = cullter;
//}

//function runTimer() {
//var timerInt = setInterval(function () {
//if (timer > 0) {
//timer--;
//document.querySelector("#timer-val").textContent = timer;
//} else {
//clearInterval(timerInt);
//document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h2>`
//}
//}, 1000);
//}

//document.querySelector("#pbtm").addEventListener("click", function (dets) {
//var clickednum = Number(dets.target.textContent);
//console.log(Number(dets.target.textContent));
//if (clickednum === hitrn) {
//increaseScore();
//makeBubble();
//getNewHit();
//}
//});
//getNewHit();
//makeBubble();
//runTimer();

var timer = 60;
var hitrn = 0;
var score = 0;

function increaseScore() {
	score += 10;
	document.querySelector("#score-val").textContent = score;
}



function getNewHit() {
	hitrn = Math.floor(Math.random() * 10);
	document.querySelector("#hit-val").textContent = hitrn;
}

function makeBubble() {
	var cullter = 0;
	for (var i = 1; i <= 245; i++) {
		var rn = Math.floor(Math.random() * 10);

		cullter += `<div class="bubble">${rn}</div>`
	}
	document.querySelector("#pbtm").innerHTML = cullter;
}

function runTimer() {
	var timerInt = setInterval(function () {
		if (timer > 0) {
			timer--;
			document.querySelector("#timer-val").textContent = timer;
		} else {
			clearInterval(timerInt);

		}
	}, 1000);

}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
	var clickednum = Number(dets.target.textContent);
	if (clickednum === hitrn) {
		increaseScore();
		makeBubble();
		getNewHit();
	}
})


makeBubble();
runTimer();
getNewHit();