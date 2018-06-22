// notes
/*
duchamp chimes / bell pings / patter_tone & perc_pluck / radio luxembourg need to be reverbed / smoothed
remove bend from end of chord
*/

// TEST
var ifTesting = false; // set to false for normal play

// AUDIO
var mic, fft, volume, largest;
var freq=0.0;
var previousFreq = 0.5;
var noiseFloor = 0.0;
// RANDOM
var ms; 
var randTime = 1;
var randTrigger = false;
var timeKeeper;
var miffy_mouth_timer;
var minTime = 1000; // note problem with this with various objects - last one created will create it!
var maxTime = 5000;
var previously_played_object = 0;

// VISUAL
var laptopDimensions = [1600,900];
var HDDimensions = [1920,1080];
var BGcolour = 0;
// OBJECTS
var object_playlist = [];
var maxObjectList = 5;
var making_new_now = false;


function preload(){
	miffy_img_x = loadImage('images/miffy/miffy_x.png');
	miffy_img_o = loadImage('images/miffy/miffy_o.png');
}

function setup() {
	createCanvas(displayWidth, displayHeight);
	noFill();
	// mic in
	mic = new p5.AudioIn();
	mic.start();
	
	// create fft array
	fft = new p5.FFT(0.8, 4096);
	fft.setInput(mic);
	
	miffy = new Miffy();
}

function draw() {
	if (previously_played_object != 7){background(BGcolour);}
	
	makeTrigger();
	checkTrigger();

	for (var i = 0; i < object_playlist.length; i++) {
		object_playlist[i].playMe();
		object_playlist[i].display();
	}
	thinEventList();
	miffy.display();
	
	
}
  
function makeTrigger(){
	if (randTrigger == false){
		randTrigger = true;
		randTime = random(minTime, maxTime);
		ms = millis();
		timeKeeper = ms += randTime;
	}
}

function checkTrigger(){
	freq = getFrequency();
	//console.log('sent freq = ' + freq);
	if (millis() > timeKeeper && randTrigger == true){
		randTrigger = false;
		playThing(freq);
		miffy_mouth_timer = millis() + 700;
		making_new_now = true;
	}
	
	if (millis() > miffy_mouth_timer){
		making_new_now = false;
	}
	
}

function playThing(freq){
	//var scalingRatio = pitchReflector(freq);
	var scalingRatio = LaptopPitchReflector(freq);

	if (scalingRatio == 'error'){scalingRatio = previousFreq;}
	previousFreq = scalingRatio;
	if (ifTesting == false){
		var objectToPlay = Math.round(random(1,26));
	} else {objectToPlay = ifTesting;}
	//console.log(objectToPlay);
	switch(objectToPlay) {
		case 0: case 1: case 2: case 3: case 4:
			object_playlist.unshift(new Eastern_Pluck(scalingRatio));
			previously_played_object = 1;
			break;
		case 5: case 6:
			object_playlist.unshift(new Duchamp(scalingRatio));
			previously_played_object = 5;
			break;
		case 7:
			if (objectToPlay != previously_played_object){
				object_playlist.unshift(new Rise_Up(scalingRatio));//was riseUp
				previously_played_object = 7;
			}else{
				object_playlist.unshift(new Eastern_Pluck(scalingRatio));
				previously_played_object = 1;
			}
			break;
		case 8: case 9: case 10:
			object_playlist.unshift(new Blop(scalingRatio));
			previously_played_object = 8;
			break;
		case 11: case 12: case 13:
			object_playlist.unshift(new Red_Square(scalingRatio));
			previously_played_object = 11;
			break;
		case 14:
			object_playlist.unshift(new Circle_Jesus(scalingRatio));
			previously_played_object = 14;
			break;
		case 15: case 16:
			object_playlist.unshift(new Creak(scalingRatio));
			previously_played_object = 15;
			break;
		case 17:
			object_playlist.unshift(new Green(scalingRatio));
			previously_played_object = 17;
			break;
		case 18: case 19:
			object_playlist.unshift(new Sky_Blue(scalingRatio));
			//var c = new Sky_Blue(scalingRatio);
			previously_played_object = 18;
			break;
		case 20:
			object_playlist.unshift(new Dark_Yellow(scalingRatio));
			previously_played_object = 20;
			break;
		case 21:
			object_playlist.unshift(new MC(scalingRatio));
			previously_played_object = 21;
			break;
		case 22: case 23: case 24:
			object_playlist.unshift(new Bright_Red(scalingRatio));
			previously_played_object = 22;
			break;
		case 25:
			object_playlist.unshift(new Scratch(scalingRatio));
			previously_played_object = 25;
			break;
		case 26:
			object_playlist.unshift(new Zap(scalingRatio));
			previously_played_object = 26;
			break;
		default:
	};
		
	
	//find out sound ref, load sound, send to object
	//minTime = c.minTime*2;
	//maxTime = c.maxTime*2;
	minTime = object_playlist[0].minTime*2
	maxTime = object_playlist[0].maxTime*2
	//var soundRef = c.soundReference;
	var soundRef = object_playlist[0].soundReference;
	var tempSound = loadSound(soundRef, function(){object_playlist[0].setSound(tempSound);});
	
	// check if it has an image file, and if so, set it (couldn't just use img as it doesn't appear to exist yet!)
	if(object_playlist[0].hasOwnProperty('hasImage')){
		if (object_playlist[0].img != 'undefined'){
			//console.log('the image is not undefined so load it up');
			var imageRef = object_playlist[0].imageReference;
			var tempImage = loadImage(imageRef, function(){object_playlist[0].setImage(tempImage);});
		}
	}else if(object_playlist[0].hasOwnProperty('hasRect')){ //intentionally blank
	}else{
		if(object_playlist[0].hasOwnProperty('hasFrames')){
			if (object_playlist[0].framesArray != 'undefined'){
				var arrayRef = object_playlist[0].framesArray;
				for(var f = 0; f < arrayRef.length; f++){
					eval("var tempImage" +f +" = loadImage(arrayRef[f], function(){object_playlist[0].setImage(tempImage" +f +");})");
					//explodes to var tempImage1 = loadImage(arrayRef[1], function(){object_playlist[0].setImage(tempImage1);});
				}
			}
		}
	}

	// add new thing to array... 
	//object_playlist.push(c);
}

function getFrequency(){
	
	volume = mic.getLevel();
	
	if (volume > noiseFloor){
		// grab strongest frequency
		var spectrum = fft.analyze();
		largest = Math.max.apply(Math, spectrum);
		f = spectrum.indexOf(largest);
		
		//console.log("strongest freq = " + f);
		
		return f;
	}
}

function thinEventList(){
	//console.log(object_playlist[object_playlist.length-1]);
	if (object_playlist.length > maxObjectList){
		//object_playlist[object_playlist.length-1] = {}; // delete all properties from object
		Object.keys(object_playlist[object_playlist.length-1]).forEach(function(key) { delete object_playlist[object_playlist.length-1][key]; });
		object_playlist.pop();} // pop it off the end of the array
		//console.log(object_playlist.length);
}//still getting bigger...

function Miffy(){
  this.x = window.innerWidth - 300;
  this.y = window.innerHeight - 480;
  this.size = 0.2;
  this.eye_offset_x_left = 30;
  this.eye_offset_x_right = 215;
  this.eye_position = this.eye_offset_x_left;
  this.middle = this.eye_offset_x_left + (this.eye_offset_x_right - this.eye_offset_x_left)/2;
  this.eye_offset_y = 242;
  this.eye_colour = 122;
  this.eye_colour2 = 0;
  this.eye_width = 10;
  this.eye_height = 13;
  this.eye_speed = 0.4;
  
  this.display = function(){
    //scale(this.size);
	if (making_new_now == false)
	{
		image(miffy_img_x, this.x, this.y, 264,462);
		this.eye_colour2 = 0;
		this.eye_speed = 0.3;
	}
	else
	{
		image(miffy_img_o, this.x, this.y, 264, 462);
		this.eye_colour2 = 80;
		this.eye_speed = 0.3; // can be faster but looks glitchy
		//if (previously_played_object == 7){this.eye_colour = 0; this.eye_colour2 = 0;}// hide eye during text
	}
    
	this.eye_pattern();
	//this.jumper_readout(); // for debug only
	
  }
  
  this.jumper_readout = function(){
	fill(0,0,0);
	textSize(20);
	textAlign(CENTER);
	text(previousFreq, this.x + 125, this.y+250);
	noFill();
  }
  
  this.eye_pattern = function(){
	  noStroke();
	  // eye position
	  if(this.eye_position < this.eye_offset_x_right)
		{this.eye_position+=this.eye_speed;} 
	  else
	    {this.eye_position = this.eye_offset_x_left;}
	  // eye colour & width
	  if(this.eye_position < this.middle){
		  this.eye_colour = map(this.eye_position, this.eye_offset_x_left, this.middle, 60,235);
		  if (making_new_now == true){
			  this.eye_colour2 = map(this.eye_position, this.eye_offset_x_left, this.middle, 0,80);
		  }
		  this.eye_width = map(this.eye_position, this.eye_offset_x_left, this.middle, 4,30);
		  }
	  else{
		  this.eye_colour = map(this.eye_position, this.middle, this.eye_offset_x_right, 235,60);
		  if (making_new_now == true){
			  this.eye_colour2 = map(this.eye_position, this.middle, this.eye_offset_x_right, 80,0);
		  }
		  this.eye_width = map(this.eye_position, this.middle, this.eye_offset_x_right, 30,4);
		}
	  
	  fill(this.eye_colour, this.eye_colour2, 0);

	  rect(this.x + this.eye_position - this.eye_width/2, this.y + this.eye_offset_y, this.eye_width,this.eye_height);
	  noFill();
  }
}