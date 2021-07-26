

let canvas = document.querySelector('#my-canvas');
let ctx = canvas.getContext('2d');


// Create line
// ctx.moveTo(200,50);
// ctx.lineTo(600,300);
// // ctx.closePath();
// ctx.lineTo(700,200);
// ctx.stroke();

// Style
// ctx.strokeStyle = '#f0f';
// ctx.lineWidth = 10;
// ctx.fillStyle = '#ff0';

// Rectangle
// ctx.strokeRect(100,100, 400, 200);
// ctx.strokeStyle = '#00f';
// ctx.strokeRect(400,200, 400, 200);
// ctx.fillRect(400,200, 100, 100);
// ctx.clearRect(425, 225, 50, 50);

Circle
ctx.fillStyle = '#ff0';
// ctx.strokeStyle = '#f0f';
ctx.arc(500, 200, 200, 0, 1 * Math.PI);
// ctx.stroke();
ctx.fill();
