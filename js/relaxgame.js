/*! RelaxGame | Sergiy Melchakov 2018 | WEB design NOVI School */


var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext("2d");
		var ballRadius = 20;
		var posX = 20;
		var speedX = 5;
		var posY = 20;
		var speedY = 7;
		var padHeight = 4;
		var padWidth = 80;
		var padX = (canvas.width - padWidth) / 2;

		var rightPressed = false;
		var leftPressed = false;

		document.addEventListener("keydown", keyDownHandler, false);
		document.addEventListener("keyup", keyUpHandler, false);

		function keyDownHandler(e){
				if (e.keyCode ==39) {
					rightPressed = true;
				}
				if (e.keyCode ==37) {
					leftPressed = true;
				}
		}

		if (rightPressed) {
			padX += 7;
		} else {
			padX -= 7;
		}

		function keyUpHandler(e){
				if (e.keyCode ==39) {
					rightPressed = false;
				}
				if (e.keyCode ==37) {
					leftPressed = false;
				}
		}


		function drawPad() {
			ctx.beginPath();
			ctx.rect(padX, canvas.height - padHeight, padWidth, padWidth);
			ctx.fillStyle = "#0095dd";
			ctx.fill();
			ctx.closePath();
		}

		function drawBall() {
			if (posY + speedY > canvas.height - 10) {
				speedY = -7;
			} else if (posX +speedX > canvas.width - 10) {
				speedX = -5;
			} else if (posY + speedY < 10) {
				speedY = 7;
			} else if (posX +speedX < 10) {
				speedX = 5;
			}

			if (rightPressed && padX < canvas.width - padWidth) {
				padX += 7;
			} else if (leftPressed && padX> 0) {
				padX -=7;
			}
			
			ctx.beginPath();
			ctx.arc(posX, posY, ballRadius, 0, Math.PI*2, false);
			ctx.fillStyle = "red";
			ctx.fill();
			ctx.closePath();
			drawPad();
		}

		function draw(){
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			drawBall();
			posX += speedX;
			posY += speedY;	
		}


setInterval(draw, 800/30)