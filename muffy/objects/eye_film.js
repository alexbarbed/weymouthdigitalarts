// each instance generates a semi-transparent circle
// random colour and diameter
// can grow by its grow factor
// needs longer & better sound
	
function Eye_Film(scalingRatio){
	
	this.soundArray = [
		"sounds/Piano_Rev_1.ogg",
		"sounds/Piano_Rev_2.ogg",
		"sounds/Piano_Rev_3.ogg",
		"sounds/Piano_Rev_4.ogg"];
	this.tempRand = Math.floor(round(0,0));
	this.soundReference = this.soundArray[this.tempRand];
	
	this.sound;
	this.hasFrames = true;
	this.framesArray = [
		"images/eyes/eye1.png",
		"images/eyes/eye2.png",
		"images/eyes/eye3.png",
		"images/eyes/eye4.png",
		"images/eyes/eye5.png",
		"images/eyes/eye6.png",
		"images/eyes/eye7.png"
		];
	this.numberOfFrames = this.framesArray.length;
	this.frame_counter = 1;
	this.movieSpeed = 0.1;
	this.img = [];
	this.scalingRatio = scalingRatio;
	this.maxLoops = 1;
	this.loopCounter = 0;
	this.minTime = 2000;
	this.maxTime = 5000;

	this.setSound = function(sound){
		this.sound = sound;
	}
		
	this.my_x = width-460; 
	this.my_y = height-480; 
	
	
	this.setImage = function(img){
			this.img.push(img);
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
	// endless loop version
	this.display = function() {
		if (typeof(this.img[6]) != 'undefined'){
			image(this.img[round(this.frame_counter)], this.my_x, this.my_y);
			this.frame_counter+=this.movieSpeed;
			if(this.frame_counter > 5){this.frame_counter = 0;}
		}
	}
	
	
	/* once only version
	this.display = function() {
		if (typeof(this.img[6]) != 'undefined'){
			if (this.frame_counter < this.numberOfFrames-1){
				image(this.img[round(this.frame_counter)], this.my_x, this.my_y);
				this.frame_counter += this.movieSpeed;
			}			
		}
			
	}*/
}
