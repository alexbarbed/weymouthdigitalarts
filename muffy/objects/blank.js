// each instance generates a series of small circles
// number determined by numberOfBlobs
// after generating a list of positions and colours, they are gradually drawn
	
function Blank(scalingRatio){
	
	this.soundArray = [
		"sounds/bleeps_1.ogg",
		"sounds/bleeps_2.ogg",
		"sounds/bleeps_3.ogg"
		];
	this.sound;
	this.scalingRatio = scalingRatio;
	this.maxLoops = 1;
	this.loopCounter = 0;
	this.minTime = 1500;
	this.maxTime = 4000;
	
	this.tempRand = Math.round(random(0,this.soundArray.length -1));
	this.soundReference = this.soundArray[this.tempRand];
	
	this.angle = 0.0;
	this.x_offset = width/2;
	this.y_offset = height/2;
	this.scalar = height/3;
	this.speed = 0.02;
	
	this.my_x = random(100, width-100);
	this.my_y = random(100, height/2);
	
	this.img;
	this.hasImage = true;
	
	this.imageReference = "images/crucifix/crucifix_1.gif";
	
	this.setImage = function(img){
		this.img = img;
	}

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
		if (typeof(this.img) != 'undefined'){
			
			this.my_x = this.x_offset + cos(this.angle) * this.scalar;
			this.my_y = this.y_offset + sin(this.angle) * this.scalar;
			image(this.img, this.my_x, this.my_y, 60, 75);
			image(this.img, this.my_x, this.my_y-200, 60, 75);
			image(this.img, this.my_x, this.my_y-400, 60, 75);
			
			this.angle += this.speed;
		}
	}
	
	
}