// each instance generates simple rectangle, scaled to full screen
	
function Red_Square(scalingRatio){
	
	this.soundArray = [
		"sounds/bell_ping_1.ogg",
		"sounds/bell_ping_2.ogg",
		"sounds/bell_ping_3.ogg",
		"sounds/bells.ogg"
		];
	this.sound;
	this.scalingRatio = scalingRatio;
	this.maxLoops = 1;
	this.loopCounter = 0;
	this.minTime = 1000;
	this.maxTime = 3000;
	
	this.tempRand = Math.round(random(0,this.soundArray.length -1));
	this.soundReference = this.soundArray[this.tempRand];
	
	this.my_x = 0;
	this.my_y = 0;
	
	this.img;
	this.hasImage = true;
	this.transparency = 0;
	this.trans_dir = 'up';
	this.midPoint = 1;
	this.alpha_skip = 1;
	this.original_alpha_skip = 1;
	
	this.imageReference = "images/colours/brick_red.png";
	
	this.setImage = function(img){
		this.img = img;
	}

	this.setSound = function(sound){
		this.sound = sound;
		this.minTime = this.sound.duration() * this.scalingRatio;
		this.maxTime = this.minTime * 2;
		this.midPoint = this.sound.duration()/2
		// long sounds fade in slowly, short sounds fade in and out really fast
		if (this.midPoint > 2.0){this.alpha_skip = 1;}
		else if (this.midPoint > 1.0){this.alpha_skip = 2.5;}
		else if (this.midPoint > 0.5){this.alpha_skip = 5;}
		else {this.alpha_skip = 10;}
		this.original_alpha_skip = this.alpha_skip;
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
	
	this.random_octave = function(){
		var r = round(random(0,4));
		this.alpha_skip = this.original_alpha_skip;
		if (r == 1){this.scalingRatio *= 2; this.alpha_skip /= 2;}else{
			if (r == 2){this.scalingRatio *= 4; this.alpha_skip /= 4;}else{
				if (r == 3){this.scalingRatio /= 2; this.alpha_skip *= 1.5;}else{
					if (r == 4){this.scalingRatio /= 4; this.alpha_skip *= 2.5;}else{
						if (r == 5){this.sound.reverseBuffer();}
					}
				}
			}
		}
	}

	this.display = function(){
		if (typeof(this.img) != 'undefined' && typeof(this.sound) != 'undefined' && this.trans_dir != 'stop'){
			tint(255,this.transparency);
			image(this.img, this.my_x, this.my_y, width, height);
			noTint();
			if (this.trans_dir == 'up'){
				if (this.transparency < 255){this.transparency+= this.alpha_skip;}
			}
			else{ // it is down
				if (this.transparency > 0){this.transparency-= this.alpha_skip;}
				}
			// goes up, then when it gets back to zero it stops
			//if(this.transparency == 255){this.trans_dir = 'down';}
			//if(this.transparency == 0){this.trans_dir = 'stop';}
			if(this.sound.currentTime() > this.midPoint){this.trans_dir = 'down';}
			if(this.sound.currentTime() > this.sound.duration()){this.trans_dir = 'stop';}
			}			
		}
	}