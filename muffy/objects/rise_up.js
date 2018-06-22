// each instance fades a full screen image to the screen
// it's tinted blue
// as it's very slow, this only really needs one slow sound

function Rise_Up(scalingRatio){
	
	this.alive = true;
	this.soundArray = [
		"voices/revelations_1.ogg",
		"voices/revelations_2.ogg",
		"voices/revelations_3.ogg",
		"voices/revelations_4.ogg",
		"voices/revelations_5.ogg",
		"voices/revelations_6.ogg",
		"voices/revelations_7.ogg",
		"voices/revelations_8.ogg",
		"voices/revelations_9.ogg",
		"voices/revelations_10.ogg",
		"voices/revelations_11.ogg",
		"voices/revelations_12.ogg",
		"voices/revelations_13.ogg",
		"voices/revelations_14.ogg",
		"voices/revelations_15.ogg",
		"voices/revelations_16.ogg",
		"voices/revelations_17.ogg",
		"voices/revelations_18.ogg",
		"voices/revelations_19.ogg",
		"voices/revelations_20.ogg",
		"voices/revelations_21.ogg",
		]
	this.tempRand = Math.round(random(0,20));
	this.soundReference = this.soundArray[this.tempRand];
	
	this.sound;
	this.hasImage = true;
	this.img;
	this.scalingRatio = scalingRatio;
	this.maxLoops = 1;
	this.loopCounter = 0;
	this.minTime = 1000;
	this.maxTime = 2000;

	this.setSound = function(sound){
		this.sound = sound;
		this.minTime = this.sound.duration() * 0.8;
		this.maxTime = this.sound.duration() * 1.2;
	}
		
	this.transparency = 0;
	this.direction = 'forwards';
	this.diameter = random(width/3);
	this.my_x = 0; this.my_y = 0;
	this.imageReference = "images/eyes/eye1.png";
	
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
		if (this.alive == true && typeof(this.img) != 'undefined'){
			if (this.direction == 'forwards'){
				this.transparency ++;
				if (this.transparency > 254){this.direction = 'backwards';}
				}
			else {
				this.transparency --;
				if(this.transparency<=0){this.alive = false;}
				}
			fill(122);
			//a = new Make_Lines();
			if (typeof(this.sound) != 'undefined' && this.sound.isPlaying() == true){
				//a.display();
				this.showCrazyLines();
			}
			
			noFill();
			tint(0, 153, 204, this.transparency);
			image(this.img, 0, 0, width, height);
			noTint();
		}
	}
	this.showCrazyLines = function() {
		  var x1 = random(20, width-20);
		  var x2 = random(20, width-20);
		  var y1 = random(20, height-20);
		  var y2 = random(20, height-20);
		  
		  for (var x =0; x < 10; x++){
			  strokeWeight(2);
			  stroke(220);
			  line(x1, y1, x2, y2);
			  
			  x1 = random(20, width-20);
			  x2 = random(20, width-20);
			  y1 = random(20, height-20);
			  y2 = random(20, height-20);
		  }
		  
	}
}
/*
function Make_Lines(scalingRatio){
	this.x1 = 100;
	this.y1 = 100;
	this.x2 = 200;
	this.y2 = 200;
	
	this.display = function(){
	  for (var x =0; x < 20; x++){
      strokeWeight(2);
      stroke(220);
      line(this.x1, this.y1, this.x2, this.y2);
      //strokeWeight(1);
      //stroke(120);
      //line(this.x1, this.y1+3, this.x2, this.y2+3);
      
      this.x1 = random(20, width-20);
      this.x2 = random(20, width-20);
      this.y1 = random(20, height-20);
      this.y2 = random(20, height-20);
    }
  }
}*/