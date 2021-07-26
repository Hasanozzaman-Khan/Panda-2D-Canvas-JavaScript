
let canvas = document.querySelector('#my-canvas');
let ctx = canvas.getContext('2d');

// Panda
// Create main cirlce
strokeArc(10, '#000', 500, 250, 200, 0, 2 * Math.PI);

// Create left eye
fillArc('#000', 400, 200, 50, 0 , 2 * Math.PI);
fillArc('#fff', 400, 200, 30, 0 , 2 * Math.PI);
fillArc('#000', 403, 200, 20, 0 , 2 * Math.PI);

// Create right eye
fillArc('#000', 600, 200, 50, 0 , 2 * Math.PI);
fillArc('#fff', 600, 200, 30, 0 , 2 * Math.PI);
fillArc('#000', 597, 200, 20, 0 , 2 * Math.PI);

// Create nose
fillArc('#000', 500, 250, 30, 0 , 2 * Math.PI);

// Create smile
strokeArc(10, '#000', 500, 250, 150, 0.2 * Math.PI, 0.8 * Math.PI);

// Create ear
fillArc('#000', 355, 105, 50, 0.7 * Math.PI, 1.8 * Math.PI);
fillArc('#000', 645, 105, 50, 1.2 * Math.PI, 0.3 * Math.PI);


function fillArc(color, x, y, r, startAngle, endAngle){
  ctx.beginPath();
  ctx.arc(x, y, r, startAngle, endAngle);
  ctx.fillStyle = color;
  ctx.fill();
}

function strokeArc(lineWidth, color, x, y, r, startAngle, endAngle){
  ctx.beginPath();
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color;
  ctx.arc(x, y, r, startAngle, endAngle);
  ctx.stroke();
}
