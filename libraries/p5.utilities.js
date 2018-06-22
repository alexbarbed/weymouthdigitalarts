/*
	*** FileHelper ***
	takes a URL string pointing to a text file
	returns a string containing the text from the file.
	
	call it like this: 
	
		text_content_1 = FileHelper.getText ( "assets/vermeer_text_1.txt" );
		
	*/

function FileHelper()
		{}
		{
				FileHelper.getText = function(pathOfFileToReadFrom)
				{
						var request = new XMLHttpRequest();
						request.open("GET", pathOfFileToReadFrom, false);
						request.send(null);
						var returnValue = request.responseText;

						return returnValue;
				}
		}
/* 
	*** Click_text ***
	
	Click_text creates a clickable text object. 
	Works with Touch. Tested on mobile Chrome, Safari and Coast. 
	It converts the text alignment to LEFT, TOP.
	Send it x, y, a string to display and (optionally) a URL. 
	Optionally, you can also send it the width and height of the bounding box, so the mouseover works properly.
	To temporarily see a bounding box visually (to help get measurements right) set show_rect to true. 
	All P5 attributes such as size, font, colour can be set without fear of impacting other values in your program, as the values are enclosed inside push and pop. 
	If you don't want the text to trigger a URL, don't include a URL in the arguments.
	If you want the text to trigger another function in your code, set the func property to the name of the function.
	IMPORTANT: To keep the object visible, you need to call the .active function in the draw loop. 
	NOTE 1: if all your text links are going to use the same fonts, colours, etc. it makes sense to define these globally as variables, rather than manually writing them all out as parameters.
	NOTE 2: if you wish, you can always use the P5 DOM extension and work with more traditional HTML. This is an attempt to avoid HTML altogether and code purely within the P5 paradigm. 
	
	Example usage:
	
	*** in global area ***
	
		var myLink;
	
	*** in setup ***
	
		myFont = loadFont("assets/ADAM.CG PRO.otf");

		myLink = new Click_text(0,0,"Click Me","http://www.example.com");
		myLink.width = 250;
		myLink.height = 35;
		myLink.text_size=45; 
		myLink.text_font=myFont; 
		myLink.text_colour=color(202, 175, 133); 
		myLink.rollover_colour=color(222, 195, 153);
		myLink.show_rect = false;
		//myLink.func=change_backgroundcolour
		
	*** in draw ***
	
		myLink.active();
	
*/

var touch_status = "touch_not_happened";

function touchEnded(){
	touch_status = "touch_happened";
}

function touchStarted(){
	touch_status = "touch_started";
}

function Click_text (x=windowWidth/2,	y=windowHeight/2, text_content='change me',	url, width=100,	height=40, text_size=12, text_font='Helvetica',	text_colour=color(0),	rollover_colour=color(122),	func) {
		this.x = x;
		this.y = y;
		this.text_content = text_content;
		this.url = url;
		this.width = width;
		this.height = height;
		this.text_size = text_size;
		this.text_font = text_font;
		this.text_colour = text_colour;
		this.rollover_colour = rollover_colour;
		this.func = func;
		this.mouse_inside = false;
		this.show_rect = false;
		
	this.active = function(){
		push();
		this.counter++;
		textAlign(LEFT, TOP);
		if (this.show_rect == true){
			this.show_rectangle();
			}
		if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height){
			fill(this.rollover_colour);
			this.mouse_inside = true;
		} else if (touchIsDown && touchX > this.x && touchX < this.x + this.width && touchY > this.y && touchY < this.y + this.height){
			fill(this.rollover_colour);
			this.mouse_inside = true;
		} else {
			fill(this.text_colour);
			this.mouse_inside = false;
			}
		if (mouseIsPressed){
			if (this.mouse_inside == true){
					if (typeof this.url === "string"){
						this.open_link(this.url);
					} else if (typeof this.func === "function") {
						this.func();}
			} 
		} else if (touch_status === "touch_happened"){
				touch_status = "touch_reset"; // avoid mobile browser bug with this
				if (this.mouse_inside == true){
						if (typeof this.url === "string"){
							this.open_link(this.url);
						} else if (typeof this.func === "function") {
							this.func();}
				} 
		} else if (touchIsDown){
				if (this.mouse_inside == true){
						if (typeof this.func === "function") {
							this.func();}
				}
		}
		
		textSize(this.text_size);
		textFont(this.text_font);
		text(this.text_content, this.x, this.y);
		pop();
	};
	
	this.open_link = function(){
			window.open(this.url,"_self");
	};
	
	this.show_rectangle = function(){
		push();
		fill(122);
		rect(this.x, this.y, this.width, this.height);
		pop();
	};
}

/*
	*** Click_image ***
	
	Click_image creates a clickable image object.
	Works with Touch. Tested on mobile Chrome, Safari and Coast. 
	Send it x, y, two images and (optionally) a URL. If you don't want two images, send the same image reference twice.
	If you don't want the text to trigger a URL, don't include a URL in the arguments.
	If you want the text to trigger another function in your code, set the func property to the name of the function.
	IMPORTANT: To keep the object visible, you need to call the .active function in the draw loop. 
	NOTE: As images are not preloaded, be aware that they might not download in time for this to work seamlessly when the page loads. You can always preload the images manually first, which would solve the problem if you encounter it :)

	Example showing how to trigger a function in your code with by clicking on a rollover image:
	
	*** in global area ***
		
		var myImageButton;
		
		function change_backgroundcolour (){
			background(255,0,0);
	}
		
	*** in setup ***
		
		myImageButton = new Click_image(100, 300, 'assets/pic1.png', 'assets/pic2.png');
		myImageButton.func=change_backgroundcolour
		
	*** in draw ***
		
		myImageButton.active();
	
*/

function Click_image (x, y, default_image, rollover_image, url, func) {
	this.x = x;
	this.y = y;
	this.default_image = loadImage(default_image);
	this.rollover_image = loadImage(rollover_image);
	this.url = url;
	this.func = func;	
	this.mouse_inside = false;
	
	this.active = function(){
		push();
		if (mouseX > this.x && mouseX < this.x + this.default_image.width
		 && mouseY > this.y && mouseY < this.y + this.default_image.height){
				image(this.rollover_image,this.x,this.y);
				this.mouse_inside = true;
			} else 
		if (touchX > this.x && touchX < this.x + this.default_image.width
		 && touchY > this.y && touchY < this.y + this.default_image.height){
				image(this.rollover_image,this.x,this.y);
				this.mouse_inside = true;
			} else {
				image(this.default_image,this.x,this.y);
				this.mouse_inside = false;
			}
		 if (mouseIsPressed){
			if (this.mouse_inside == true){
				if (typeof this.url === "string"){
					this.open_link(this.url);
				} else if (typeof this.func === "function") {
					this.func();}
			} 
		} 
			
		else if (touchIsDown){
			if (this.mouse_inside == true){
				if (typeof this.func === "function") {
					this.func();}
			else if (typeof this.url === "string" && touch_status === "touch_started"){
				touch_status = "touch_reset"; // avoid mobile browser bug with this
				this.open_link(this.url);
				}
			} 
		} 
		pop();
	};
	
	this.open_link = function(){
		window.open(this.url,"_self");
	};
}