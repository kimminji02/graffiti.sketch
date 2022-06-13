let bg;
let imHone;


function preload(){
  bg = loadImage('walls1.jpg');
  imHone = loadImage("smile.PNG");
  imHone2 = loadImage("heart.PNG");
}
  

function setup() {
  createCanvas(windowWidth,windowHeight); 

  distance = 10;
  spring = 0.5;
  friction = 0.5;
  size = 30;
  diff = size/8;
  x = y = ax = ay = a = r = f = 0;
  background(bg);
  
  
   textSize(20);
   fill(0,0,100); 
   text ("Enter = start/retry",60,100);
  fill(255,0,0); 
  text ("a = Red color line",60,180);
  fill(255,255,0); 
  text ("s = Yellow color line",60,220);
  fill(255,255,255); 
  text ("d = White color line",60,260);
  fill(0,255,255); 
  text ("f = Blue color line",60,300);
  fill(203,67,246); 
  text ("h = Random Circle",60,340);
  fill(0,100,200); 
  text ("j = Random Bubble",60,380);
  fill(100,150,0); 
  text ("k = smile image",60,420);
  fill(100,50,0); 
  text ("l = heart image",60,460);
  fill(0,0,100); 
  text ("o = Save image",60,540);
}


function keyPressed() {
   if (keyCode === ENTER) {
	clear();
  background(bg);
   }
          if (key === 'o') {
    save(`${(new Date()).toISOString()}.png`)
          
    }
  }


let mode = 1;

function mousePressed(){
	mode ++
	if(mode>3){
	mode=1
	}
}

function draw() {
  oldR = r;
  if(mouseIsPressed) {
    mX = mouseX;
    mY = mouseY;
    if(!f) {
      f = 1;
      x = mX;
      y = mY;
    }
    

    
    
  if (keyPressed) {
  if (key == 'a') {
    ax += ( mX - x ) * spring;
    ay += ( mY - y ) * spring;
    ax *= friction;
    ay *= friction;
    a += sqrt( ax*ax + ay*ay ) - a;
    a *= 0.6;
    r = size - a;
    
    
    
    for( i = 0; i < distance; ++i ) {
      oldX = x;
      oldY = y;
      x += ax / distance;
      y += ay / distance;
      oldR += ( r - oldR ) / distance;
      if(oldR < 1) oldR = 1;
      strokeWeight( oldR+diff );
      line( x, y, oldX, oldY );
      strokeWeight(10);
	  stroke(0,255);
      strokeWeight( oldR );
      line( x-diff, y-diff, oldX-diff, oldY-diff );
	  strokeWeight(10);
	  stroke(255,0,0);
    }
  } 
    
    
      if (key == 's') {
    ax += ( mX - x ) * spring;
    ay += ( mY - y ) * spring;
    ax *= friction;
    ay *= friction;
    a += sqrt( ax*ax + ay*ay ) - a;
    a *= 0.6;
    r = size - a;
    
    
    
    for( i = 0; i < distance; ++i ) {
      oldX = x;
      oldY = y;
      x += ax / distance;
      y += ay / distance;
      oldR += ( r - oldR ) / distance;
      if(oldR < 1) oldR = 1;
      strokeWeight( oldR+diff );
      line( x, y, oldX, oldY );
      strokeWeight(10);
	  stroke(0,255);
      strokeWeight( oldR );
      line( x-diff, y-diff, oldX-diff, oldY-diff );
	  strokeWeight(10);
	  stroke(255,255,0);
    }
  } 
      
      
           if (key == 'd') {
    ax += ( mX - x ) * spring;
    ay += ( mY - y ) * spring;
    ax *= friction;
    ay *= friction;
    a += sqrt( ax*ax + ay*ay ) - a;
    a *= 0.6;
    r = size - a;
    
    
    
    for( i = 0; i < distance; ++i ) {
      oldX = x;
      oldY = y;
      x += ax / distance;
      y += ay / distance;
      oldR += ( r - oldR ) / distance;
      if(oldR < 1) oldR = 1;
      strokeWeight( oldR+diff );
      line( x, y, oldX, oldY );
      strokeWeight(10);
	  stroke(0,255);
      strokeWeight( oldR );
      line( x-diff, y-diff, oldX-diff, oldY-diff );
	  strokeWeight(10);
	  stroke(255,255,255);
    }
  } 
      
    
 if (key == 'f') {
    ax += ( mX - x ) * spring;
    ay += ( mY - y ) * spring;
    ax *= friction;
    ay *= friction;
    a += sqrt( ax*ax + ay*ay ) - a;
    a *= 0.6;
    r = size - a;
    
    
    
    for( i = 0; i < distance; ++i ) {
      oldX = x;
      oldY = y;
      x += ax / distance;
      y += ay / distance;
      oldR += ( r - oldR ) / distance;
      if(oldR < 1) oldR = 1;
      strokeWeight( oldR+diff );
      line( x, y, oldX, oldY );
      strokeWeight(10);
	  stroke(0,255);
      strokeWeight( oldR );
      line( x-diff, y-diff, oldX-diff, oldY-diff );
	  strokeWeight(10);
	  stroke(0,255,255);
    }
  } 
     
    
        if (key == 'h') {
	var r = random(10,40)
    let count = int(random(1,5))
 	noFill()
    strokeWeight(1);
	for(i=0; i<count; i++) {
    if(mode==1){
		stroke(random(255),random(200,255), random(100,200))
		}
		else if(mode==2){
		stroke(random(200,255),random(255), random(100,200))
		}
		else{
		stroke(random(200),random(200), random(100,200))
		}
	ellipse(mouseX +random(-10,10),mouseY-random(-10,10),r)
      
      }
    } 

    
    if (key == 'j') {
    let count = int(random(100,350))
	let r = random(2,20)
	var delta = sqrt(dist(pmouseX, pmouseY, mouseX, mouseY))*5
	noStroke()
	for(i=0; i<count; i++) {
    if(mode==1){
		fill(random(255),random(200,255), random(100,200))
		}
		else if(mode==2){
		fill(random(200,255),random(255), random(100,200))
		}
		else{
		fill(random(200),random(200), random(100,200))
		}
	
  ellipse(mouseX+random(-delta,delta), mouseY+random(-delta,delta), r)
		r*=0.9
	}   
      } 
      
    
    if (key == 'k') {
	
	stroke(50,100,200);
	strokeWeight(5);
	
	image(imHone,mouseX,mouseY,200,200);  
    }
    
 
    if (key == 'l') {
	
	stroke(50,100,200);
	strokeWeight(5);
	
	image(imHone2,mouseX,mouseY,200,200);
      
    }
    
    

    
    } 
  }
}