// each instance generates a semi-transparent circle
// random colour and diameter
// can grow by its grow factor
	
function Duchamp(scalingRatio){
	this.alive = true;
	this.soundArray = [
		"sounds/Duchamp_Chimes_1.ogg",
		"sounds/Duchamp_Chimes_2.ogg",
		"sounds/Duchamp_Chimes_3.ogg",
		"sounds/Duchamp_Chimes_3a.ogg",
		"sounds/Duchamp_Chimes_3b.ogg",
		"sounds/Duchamp_Chimes_3c.ogg",
		"sounds/Duchamp_Chimes_3d.ogg",
		"sounds/Duchamp_Chimes_3e.ogg",
		"sounds/Duchamp_Chimes_4.ogg",
		"sounds/Duchamp_Chimes_4a.ogg",
		"sounds/Duchamp_Chimes_4b.ogg",
		"sounds/Duchamp_Chimes_4c.ogg",
		"sounds/Duchamp_Chimes_4d.ogg",
		"sounds/Duchamp_Chimes_5.ogg"];
	this.tempRand = Math.round(random(0,this.soundArray.length-1));
	this.soundReference = this.soundArray[this.tempRand];
	this.sound;
	this.scalingRatio = scalingRatio;
	this.maxLoops = 1;
	this.loopCounter = 0;
	this.minTime = 6000;
	this.maxTime = 10000;
	
	this.line_width = 12;
	this.redC = random(20,255);
	this.greenC = random(20,255);
	this.blueC = random(20,255);
	this.transparency = random(20,255);
	this.diameter = random(width/3);
	this.my_x = random(width/3); this.my_y = random(height);
	this.grow_factor = 1;

	this.setSound = function(sound){
		this.sound = sound;
		this.minTime = this.sound.duration();
		this.maxTime = this.minTime * this.scalingRatio;
	}
	
	this.playMe = function(){
		//console.log('scaling = ' + this.scalingRatio);
		if (typeof(this.sound) != 'undefined' && this.sound.isPlaying() == false){
			if (this.loopCounter < this.maxLoops){
			this.random_octave();
			this.sound.rate(this.scalingRatio);
			this.sound.play();
			this.loopCounter++;
			}
		}
	}
	
	this.display = function() {
		if (this.alive == true){
			strokeWeight(this.line_width);
			stroke(this.redC, this.greenC, this.blueC, this.transparency);
			this.my_x = random(this.my_x -.5, this.my_x +.5);
			this.my_y = random(this.my_y -.5, this.my_y +.5);
			this.diameter += this.grow_factor;
			ellipse(this.my_x, this.my_y, this.diameter, this.diameter);
			if (this.diameter > width){this.alive = false;}
		}
	}
	
	this.random_octave = function(){
		var r = round(random(0,4));
		if (r == 1){this.scalingRatio *= 2;}else{
			if (r == 2){this.scalingRatio *= 4;}else{
				if (r == 3){this.scalingRatio /= 2;}else{
					if (r == 4){this.scalingRatio /= 4;}
				}
			}
		}
	}
}
