var canvasWidth = 1024;
var canvasHeight = 768;

function setup(){
	createCanvas(canvasWidth, canvasHeight);
	background(245);
	graphPaper();
	save('graphPaper.png'); //comment out!
}

function draw(){
	
}

function graphPaper(){
	textFont('Helvetica');
	
	stroke(255);
	for (i=0;i<canvasWidth; i+=10){
		line(i, 0, i, canvasHeight)}
	for (i=0;i<canvasHeight; i+=10){
		line(0, i, canvasWidth, i)}
		
	stroke(200);
	// draw dark horizontals and numbers
	for (i=0;i<canvasWidth; i+=100){
		stroke(90); 
		line(i, 0, i, canvasHeight)
		stroke(255); 
		text(i, i, 10);}
	for (i=0;i<canvasHeight; i+=100){
		stroke(90);
		line(0, i, canvasWidth, i)
		stroke(255); 
		text(i, 0, i)}
}



