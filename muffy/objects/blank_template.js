// each instance generates a series of small circles
// number determined by numberOfBlobs
// after generating a list of positions and colours, they are gradually drawn
	
function Blank(scalingRatio){
	
	this.soundArray = [
		"sounds/Pong_1.ogg",
		"sounds/Pong_2.ogg",
		"sounds/Pong_3.ogg",
		"sounds/Pong_4.ogg"
		];
	this.sound;
	this.scalingRatio = scalingRatio;
	this.maxLoops = 1;
	this.loopCounter = 0;
	this.minTime = 1500;
	this.maxTime = 4000;
	
	this.tempRand = Math.round(random(0,this.soundArray.length -1));
	this.soundReference = this.soundArray[this.tempRand];
	
	this.my_x = random(100, width-100);
	this.my_y = random(100, height/2);

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
		fill(66);
		textSize(64);
		text('something', this.my_x, this.my_y);
		noFill();
	}
	
	
}