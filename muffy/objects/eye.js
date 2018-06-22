// each instance fades a full screen image to the screen
// it's tinted blue
// as it's very slow, this only really needs one slow sound
	
function Eye(scalingRatio){
	
	this.soundArray = [
		"voices/Rise_Up_And_Walk_1.mp3",
		"voices/Rise_Up_And_Walk_2.mp3"];
	this.tempRand = Math.round(random(0,1));
	this.soundReference = this.soundArray[this.tempRand];
	
	this.sound;
	this.hasImage = true;
	this.img;
	this.scalingRatio = scalingRatio;
	this.maxLoops = 1;
	this.loopCounter = 0;
	this.minTime = 10000;
	this.maxTime = 14000;

	this.setSound = function(sound){
		this.sound = sound;
	}
		
	this.transparency = 0;
	this.direction = 'forwards';
	this.diameter = random(width/3);
	this.my_x = 0; this.my_y = 0;
	this.imageReference = "images/eyes/eye1.jpg";
	
	this.setImage = function(img){
		this.img = img;
	}
	
	
	this.playMe = function(){
		//console.log('scaling = ' + this.scalingRatio);
		if (typeof(this.sound) != 'undefined' && this.sound.isPlaying() == false){
			if (this.loopCounter < this.maxLoops){
			
			
			//this.sound.rate(this.scalingRatio);
			//this.sound.jump(tapeHead, 0.5);
			this.sound.play();
			this.loopCounter++;
			}
		}
	}
	
	this.display = function() {
		if (typeof(this.img) != 'undefined'){
			if (this.direction == 'forwards'){
				this.transparency ++;
				if (this.transparency > 254){this.direction = 'backwards';}
				}
			else {this.transparency --;}
			tint(0, 153, 204, this.transparency);
			image(this.img, 0, 0, width, height);
		}
	}
}
