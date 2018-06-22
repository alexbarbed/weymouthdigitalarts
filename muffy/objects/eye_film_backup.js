// each instance generates a semi-transparent circle
// random colour and diameter
// can grow by its grow factor
	
function Eye_Film(scalingRatio){
	
	this.soundArray = [
		"sounds/Piano_Rev_1.ogg",
		"sounds/Piano_Rev_2.ogg",
		"sounds/Piano_Rev_3.ogg",
		"sounds/Piano_Rev_4.ogg"];
	this.tempRand = Math.floor(round(0,0));
	this.soundReference = this.soundArray[this.tempRand];
	
	this.sound;
	this.hasGif = true;
	this.img;
	this.scalingRatio = scalingRatio;
	this.maxLoops = 1;
	this.loopCounter = 0;
	this.minTime = 50;
	this.maxTime = 1000;

	this.setSound = function(sound){
		this.sound = sound;
	}
		
	this.my_x = random(width-200); this.my_y = random(height-200);
	this.imageReference = "images/eyes/eye.gif";
	this.gif_started = false;
	this.numberOfFrames = 7;
	this.frame_counter = 1;
	
	this.setImage = function(img){
		this.img = img;
	}
	
	this.playMe = function(){
		//console.log('scaling = ' + this.scalingRatio);
		if (typeof(this.sound) != 'undefined' && this.sound.isPlaying() == false){
			if (this.loopCounter < this.maxLoops){
			this.sound.rate(this.scalingRatio);
			this.sound.play();
			this.loopCounter++;
			}
		}
	}
	
	this.display = function() {
		if (typeof(this.img) != 'undefined'){
			tint(random(255), 255, 255);
			image(this.img, this.my_x);
			//console.log(this.img.playing());
		}
			
	}
}
