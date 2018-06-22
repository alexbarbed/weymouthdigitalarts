// each instance generates a series of small circles
// number determined by numberOfBlobs
// after generating a list of positions and colours, they are gradually drawn
	
function Amoeba(scalingRatio){
	
	this.soundArray = [
		"sounds/Throat_1.ogg",
		"sounds/Throat_2.ogg",
		"sounds/Throat_3.ogg"
		];
	this.sound;
	this.scalingRatio = scalingRatio;
	this.maxLoops = 1;
	this.loopCounter = 0;
	this.minTime = 1500;
	this.maxTime = 4000;
	
	this.tempRand = Math.round(random(0,2));
	this.soundReference = this.soundArray[this.tempRand];
	
	this.my_x = random(100, width-300);
	this.my_y = random(100, height/2);
	this.listOfBlobs = [];
	this.counter = 0;
	this.numberOfBlobs = random(10,80);
	this.global_y = 0;
	this.shadow_depth = 4;
	this.grow_speed = 0.5;
	
	for (var thing = 0; thing < this.numberOfBlobs; thing++){
		this.my_x += random(-5, 5);
		this.my_y += random(-5, 5);
		var my_fill_light = random(122,255);
		var my_fill_dark = random(0,122);
		temp = [this.my_x, this.my_y, my_fill_light, my_fill_dark];
		this.listOfBlobs.push(temp);
	}

	this.setSound = function(sound){
		this.sound = sound;
	}
	
	this.playMe = function(){
		//console.log('scaling = ' + this.scalingRatio);
		if (typeof(this.sound) != 'undefined' && this.sound.isPlaying() == false){
			if (this.loopCounter < this.maxLoops){
			this.sound.rate(this.scalingRatio);
			this.random_octave();
			//this.reverb.process(this.sound, 4, 4);
			this.sound.play();
			this.loopCounter++;
			}
		}
	}
	
	this.random_octave = function(){
		var r = round(random(0,4));
		//console.log(r);
		if (r == 1){this.scalingRatio *= 2;}else{
			if (r == 2){this.scalingRatio *= 4;}else{
				if (r == 3){this.scalingRatio /= 2;}else{
					if (r == 4){this.scalingRatio /= 4;}else{
						if (r == 5){this.sound.reverseBuffer();} //not used
					}
				}
			}
		}
	}

	this.display = function(){
		noStroke();
		if (this.counter < this.listOfBlobs.length){
			for(var item = 0; item < this.counter; item++){
				var x1 = this.listOfBlobs[item][0];
				var y1 = this.listOfBlobs[item][1];
				var fill_light = this.listOfBlobs[item][2];
				var fill_dark = this.listOfBlobs[item][3];
				fill(fill_dark);
				ellipse(x1,y1+this.global_y, 6, 6);
				fill(fill_light);
				ellipse(x1,y1+this.global_y-this.shadow_depth, 6, 6);
			}
		}
		else //keep it on the screen once it's drawn
		{
		for(var item = 0; item < this.listOfBlobs.length; item++){
			var x1 = this.listOfBlobs[item][0];
			var y1 = this.listOfBlobs[item][1];
			var fill_light = this.listOfBlobs[item][2];
			var fill_dark = this.listOfBlobs[item][3];
			fill(fill_dark);
			ellipse(x1,y1+this.global_y, 6, 6);
			fill(fill_light);
			ellipse(x1,y1+this.global_y-this.shadow_depth, 6, 6);
			}
		}
		this.counter += this.grow_speed;
		this.global_y += 1;
		noFill();
	}
	
	
}