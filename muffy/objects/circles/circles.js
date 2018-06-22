// each instance generates a semi-transparent circle
// random colour and diameter
// can grow by its grow factor
	
function Blob(){
	
	this.soundReference = "sounds/303.wav";
	this.sound;
	this.maxLoops = 1;
	this.loopCounter = 0;
	
	this.line_width = 12;
	this.redC = random(20,255);
	this.greenC = random(20,255);
	this.blueC = random(20,255);
	this.transparency = random(20,255);
	this.diameter = random(width/3);
	this.my_x = random(width); this.my_y = random(height);
	this.grow_factor = 1;

	this.setSound = function(sound){
		this.sound = sound;
	}
	
	this.playMe = function(){
		if (typeof(this.sound) != 'undefined' && this.sound.isPlaying() == false){
			if (this.loopCounter < this.maxLoops){
			this.sound.play();
			this.loopCounter++;
			}
		}
	}
	
	this.display = function() {
		strokeWeight(this.line_width);
		stroke(this.redC, this.greenC, this.blueC, this.transparency);
		this.my_x = random(this.my_x -.5, this.my_x +.5);
		this.my_y = random(this.my_y -.5, this.my_y +.5);
		this.diameter += this.grow_factor;
		ellipse(this.my_x, this.my_y, this.diameter, this.diameter);
	}
}
