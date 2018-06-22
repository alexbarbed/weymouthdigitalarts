// each instance generates a semi-transparent circle
// random colour and diameter
// can grow by its grow factor
	
function Blob(scalingRatio){
	
	this.soundArray = [
		"sounds/Eastern_Pluck_1.ogg",
		"sounds/Eastern_Pluck_2.ogg",
		"sounds/Eastern_Pluck_3.ogg",
		"sounds/Eastern_Pluck_4.ogg",
		"sounds/Eastern_Pluck_5.ogg",
		"sounds/Eastern_Pluck_6.ogg",
		"sounds/Eastern_Pluck_7.ogg",];
	this.tempRand = Math.floor(random(1,7));
	this.soundReference = this.soundArray[this.tempRand];
	
	this.sound;
	this.scalingRatio = scalingRatio;
	this.maxLoops = 1;
	this.loopCounter = 0;
	this.minTime = 3000;
	this.maxTime = 8000;
	this.reverb = new p5.Reverb();
	
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
		this.minTime = this.sound.duration() * this.scalingRatio;
		this.maxTime = this.minTime * 2;
	}
	
	this.playMe = function(){
		//console.log('scaling = ' + this.scalingRatio);
		if (typeof(this.sound) != 'undefined' && this.sound.isPlaying() == false){
			if (this.loopCounter < this.maxLoops){
			this.sound.rate(this.scalingRatio);
			//this.reverb.process(this.sound, 4, 4);
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
