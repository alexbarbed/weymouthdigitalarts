var canvasWidth = 700;
var canvasHeight = 690;
var o1;

function setup(){
	createCanvas(canvasWidth, canvasHeight);
	
	//graphPaper();
}

function o1(){
	this.x = 79;
	this.y = 100;
	this.show = function(){
		fill(223,141,6);
		quad(this.x,this.y, this.x+20, this.y-7, this.x+240, this.y+513, this.x+220, this.y+522)
		};
	this.jiggle = function(){
		this.x += random(-1,1);
		};
	//this.mouseDown = function(){
		//this.x = mouse.x;
		//this.x = mouse.y;
		//};
	}

var ob1 = new o1;

function draw(){
	background(242, 225, 173);
	
	noStroke();

	// pale orange wedge
	//fill(223, 141, 6);
	//quad(79,100, 97, 93, 256, 468, 237, 479)
	
	
	ob1.show();
	ob1.jiggle();

	// pale orange wedge (lower half)
	//fill(225, 131, 9);
	//quad(280,575,298, 565, )

	// darker orange wedge 2
	fill(199, 114, 5);
	quad(122,312,134, 307, 200, 471, 188, 476)

	// lower blue box
	fill(123, 146, 138);
	quad(131,538,317, 436, 364, 528, 181, 629)

	// grey wedge 
	fill(128, 96, 71);
	quad(79,361,117, 342, 170, 465, 130, 485)

	// brick red wedge 
	fill(162, 43, 3);
	quad(36,443,91, 414, 121, 479, 69, 508)

	// lower blue-grey wedge
	fill(124, 135, 118);
	quad(308,668,342, 652, 350, 670, 316, 684)

	// big beige circle
	fill(236, 182, 112);
	ellipseMode(CORNER);
	ellipse(210, 49, 427, 422);
	
	// orange wedge
	fill(210, 70, 8);
	quad(215,282,615, 49, 625, 65, 237, 327)

	// black rect 1
	fill(19, 20, 14);
	quad(234,197,269, 181, 353, 366, 320, 382)

	// black rect 2
	fill(13, 14, 8);
	quad(240,80, 262,68, 427,414, 400, 426)

	// big brown rect
	fill(128, 74, 4);
	quad(230,0, 446,0, 680,500, 506,583)

	// long thin black line
	fill(21, 33, 0);
	quad(14,507, 472,192, 473,194, 19,515)

	// big red wedge
	fill(187, 38, 6);
	quad(648,62, 676,92, 473,316, 458,304)

	// big black tadpole text
	fill(11, 12, 4);
	
	beginShape();
	curveTightness(-0.1);
	curveVertex(551, 0);
	curveVertex(551, 0);
	curveVertex(520, 55);
	curveVertex(511, 75);
	curveVertex(500, 100);
	curveVertex(485, 130);
	curveVertex(470, 150);
	curveVertex(450, 170);
	curveVertex(425, 185);
	curveVertex(385, 197);
	curveVertex(340, 180);//
	curveVertex(348, 140);
	curveVertex(385, 106);
	curveVertex(478, 62);
	curveVertex(500, 53);
	curveVertex(520, 40);
	curveVertex(551, 0);
	endShape();

	// upper grey vertical line
	fill(200, 193, 141);
	quad(166,0,171, 0, 171, 106, 165, 106)

	// upper grey horizontal line upper
	fill(158, 165, 121);
	quad(124,57,214, 47, 214, 61, 124, 72)

	// upper grey horizontal line upper 2
	fill(180, 179, 123);
	quad(195,76,195, 85, 164, 86, 164, 76)
	
	// tiny grey square
	fill(227, 211, 151);
	quad(179,166,188, 165, 189, 176, 181, 176)

	// upper black wedge
	fill(88, 72, 56);
	quad(152,68,184, 65, 185, 77, 154, 81)

	
	/*
	rect(0, 0, 100, 100);

	//thicker strokes
	strokeWeight(10);
	rect(100, 0, 100, 100); 
	
	//new greyscale fill colour
	fill(180);
	rect(200, 0, 100, 100); 
	
	//new RGB fill colour
	fill(128, 180, 30);
	rect(300, 0, 100, 100); 
	
	//new stroke colour
	stroke(180, 128, 30);
	rect(400, 0, 100, 100);
	
	//new rectangle with alpha value
	stroke(255, 0, 0, 60);
	fill(0,0,255, 127);
	rect(50, 75, 400, 100);
	
	//new rectangle with greyscale alpha value
	stroke(127, 60);
	fill(0, 127);
	rect(125, 50, 300, 100);
	
	// adding an ellipse (centred anchor for x,y)
	ellipse(200, 250, 200, 200);
	
	
	
	// creating a shape
	fill(255,100,255,127);
	
	beginShape();
	vertex(225, 280);
	vertex(500, 50);
	vertex(600, 400);
	endShape();
	
	// creating a curved shape
	fill(122,100,255,127);
	
	beginShape();
	curveVertex(200, 400);
	curveVertex(300, 500);
	curveVertex(600, 100);
	curveVertex(800, 400);
	curveVertex(450, 600);
	endShape();
	
	*/
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

