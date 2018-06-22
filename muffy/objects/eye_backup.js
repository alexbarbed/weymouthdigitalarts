// each instance generates a semi-transparent circle
// random colour and diameter
// can grow by its grow factor
	
function Eye(scalingRatio){
	
	this.soundArray = [
		"sounds/Piano_Rev_1.ogg",
		"sounds/Piano_Rev_2.ogg",
		"sounds/Piano_Rev_3.ogg",
		"sounds/Piano_Rev_4.ogg"];
	this.tempRand = Math.floor(random(1,5));
	this.soundReference = this.soundArray[this.tempRand];
	
	this.sound;
	this.hasImage = true;
	this.img;
	this.scalingRatio = scalingRatio;
	this.maxLoops = 1;
	this.loopCounter = 0;
	this.minTime = 1000;
	this.maxTime = 4000;

	this.setSound = function(sound){
		this.sound = sound;
	}
		
	this.transparency = random(20,255);
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
			this.sound.rate(this.scalingRatio);
			this.sound.play();
			this.loopCounter++;
			}
		}
	}
	
	this.display = function() {
		if (typeof(this.img) != 'undefined'){
			image(this.img, 0, 0, width, height);
		}
	}
}
