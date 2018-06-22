var list_of_blocks = [];  // Declare array to hold Blocks objects
var mapper; // used to scale transparency depending on screensize

function preload() {}

function setup() {
	var canvas = createCanvas((window.innerWidth), window.innerHeight/4);
	canvas.parent('sketch-holder');

	var numBlocks = 200;
    ellipseMode(CORNER);

	for (var i = 0; i < numBlocks; i++) {
	list_of_blocks.push(new Block());
	}
}

function windowResized() {
	resizeCanvas((window.innerWidth +17), window.innerHeight/4);
}


function draw() {
	background(255);
	noStroke();
	for (var i = 0; i < list_of_blocks.length; i++) {
		list_of_blocks[i].update();
		list_of_blocks[i].display();
	}
}

function mouseMoved() {
  if (mouseY > height/2){
      list_of_blocks.push(new Block());
      list_of_blocks.shift(); //prevents array getting out of hand
  }
}

function touchMoved() {
  list_of_blocks.push(new Block());
  list_of_blocks.shift(); //prevents array getting out of hand
}


function Block(tempX, tempY) {
    //constructor
    this.xpos = random(-40, window.innerWidth-40);		
    this.ypos = random(120, window.innerHeight/2);
    this.w = width/40 - random(10,30);
    this.h = height/40 - random(10,30);
    this.blockColour = random(0,255);
    this.speed = random(0.1, 5.0);
    this.transparent_value = 25;
    this.extra_height = random(0,window.innerHeight/16);

    //update object every frame
    this.update = function() {        
        this.xpos += this.speed;
        if (this.xpos > width){
            this.xpos = -50;
        }
        this.ypos -= this.speed/2;
        mapper = this.ypos;
        map(mapper, 0, window.innerHeight, 0, 175);
        this.transparent_value = 200 - mapper;
    }

    // show object every frame
    this.display = function() {
        fill(this.blockColour, this.transparent_value);
        rect(this.xpos, this.ypos, this.w, this.h);
  }
}