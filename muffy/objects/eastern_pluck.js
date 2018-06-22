// each instance generates a semi-transparent circle
// random colour and diameter
// can grow by its grow factor
	
function Eastern_Pluck(scalingRatio){
	
	this.soundArray = [
		"sounds/Eastern_Pluck_1.ogg",
		"sounds/Eastern_Pluck_2.ogg",
		"sounds/Eastern_Pluck_3.ogg",
		"sounds/Eastern_Pluck_4.ogg",
		"sounds/Eastern_Pluck_5.ogg",
		"sounds/Eastern_Pluck_6.ogg",
		"sounds/Eastern_Pluck_7.ogg"];
	this.tempRand = Math.round(random(0,6));
	this.soundReference = this.soundArray[this.tempRand];
	
	this.sound;
	this.scalingRatio = scalingRatio;
	this.maxLoops = 1;
	this.loopCounter = 0;
	this.minTime = 1500;
	this.maxTime = 4000;
	
	this.line_width = 12;
	this.redC = random(20,200);
	this.greenC = this.redC += random(50);
	this.blueC = this.redC += random(50);
	this.transparency = random(20,200);
	this.diameter = random(width/3);
	this.my_x = random(this.diameter/2, (width-this.diameter/2)-200); 
	this.my_y = random(this.diameter/2, (height-this.diameter/2)-200);
	this.grow_factor = -1;
	this.alive = true;
	this.shadow_distance = this.my_y *1.1;

	this.setSound = function(sound){
		this.sound = sound;
		this.minTime = this.sound.duration() * this.scalingRatio;
		this.maxTime = this.minTime * 2;
	}
	
	this.playMe = function(){
		//console.log('scaling = ' + this.scalingRatio);
		if (typeof(this.sound) != 'undefined' && this.sound.isPlaying() == false){
			if (this.loopCounter < this.maxLoops){
			this.random_octave();
			this.sound.rate(this.scalingRatio);
			
			//this.reverb.process(this.sound, 4, 4);
			this.sound.play();
			this.loopCounter++;
			}
		}
	}
	
	this.display = function() {
		if (this.alive == true){
			
			this.my_x = random(this.my_x -.5, this.my_x +.5);
			this.my_y = random(this.my_y -.5, this.my_y +.5);
			this.diameter += this.grow_factor;
			strokeWeight(this.line_width);
			//shadow
			stroke(100, 100, 100, this.transparency);
			if (this.shadow_distance > this.my_y){this.shadow_distance--};
			ellipse(this.my_x, height - 140, this.diameter, this.diameter/2);
			// main
			stroke(this.redC, this.greenC, this.blueC, this.transparency);
			ellipse(this.my_x, this.my_y, this.diameter, this.diameter);
			
			if (this.diameter <=1){this.alive = false;}
		}
		
	}
	
	this.random_octave = function(){
		var r = round(random(0,4));
		//console.log(r);
		if (r == 1){this.scalingRatio *= 2;}else{
			if (r == 2){this.scalingRatio *= 4;}else{
				if (r == 3){this.scalingRatio /= 2;}else{
					if (r == 4){this.scalingRatio /= 4;}
				}
			}
		}
	}
}
