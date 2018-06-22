var list_of_blocks = [];  // Declare array to hold Blocks objects

function preload() {}

function setup() {
	var canvas = createCanvas((window.innerWidth/2)-50, window.innerHeight/2);
	canvas.parent('sketch-holder');

	var numBlocks = 200;

	for (var i = 0; i < numBlocks; i++) {
	list_of_blocks.push(new Block());
	}
}

function draw() {
	background(255,122,66);
	noStroke();
	for (var i = 0; i < list_of_blocks.length; i++) {
		list_of_blocks[i].update();
		list_of_blocks[i].display();
	}
	//only undelete if you are sure!
	//save("frame-"+frameCount+".png");
}

function windowResized() {
	if (window.innerWidth > 500){
		resizeCanvas((window.innerWidth/2)-50, window.innerHeight/2);
	}
}

function Block(tempX, tempY) {
	//constructor
	this.xpos = random(-40, width-40);		
	this.ypos = random(-40, height-40);
	this.w = window.innerWidth/10;
	this.h = window.innerHeight/3;
	this.y_direction = 'none';
	this.blockColour = random(0,255);
	this.speed = random(0.2, 5.0);

	//update object every frame
	this.update = function() {
		
		this.w = window.innerWidth/10;
		this.h = window.innerHeight/3;
	
		this.xpos += this.speed;
		if (this.xpos > width){
			this.xpos = -50;
	}
	if (this.direction == 'up' && this.ypos >= 0){this.ypos--;}
	if (this.direction == 'down' && this.ypos <= height-this.h){this.ypos++;}

	if (mouseY < this.ypos){
		this.direction = 'down';
		} else {
		this.direction = 'up';
		} 
	}
	
	// show object every frame
	this.display = function() {
		fill(this.blockColour);
		rect(this.xpos, this.ypos, this.w, this.h);
	}
}

function keyPressed() {
	if (key == 'S') {
		saveCanvas('myCanvas', 'jpg');
	} 
}
