var tom, jerry,bg,tomImg1,jerryImg1,tomImg2,jerryImg2,tomImg3,jerryImg3,canvas;

function preload(){
 
//load the images here
bg = loadImage("images/garden.png");
tomImg1= loadImage("images/cat1.png");
tomImg2= loadImage("images/cat2.png","images/cat3.png");
tomImg3= loadImage("images/cat4.png");
jerryImg1= loadImage("images/mouse1.png");
jerryImg2= loadImage("images/mouse2.png","images/mouse3.png");
jerryImg3= loadImage("images/mouse4.png");
}

function setup(){
    canvas = createCanvas(1000,800);
    //create tom and jerry sprites here
 tom = createSprite(870,600);
 tom.addAnimation("tomSleeping",tomImg1);
 tom.scale = 0.2;

 jerry = createSprite(200,600);
 jerry.addAnimation("jerryStanding",jerryImg1);
 jerry.scale = 0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2) {
     tom.velocityX=0;
     tom.addAnimation("tomLastImage", tomImg3);
     tom.x =300;
     tom.scale=0.2;
     tom.changeAnimation("tomLastImage");
     jerry.addAnimation("jerryLastImage", jerryImg3); 
     jerry.scale=0.15;
     jerry.changeAnimation("jerryLastImage");
     }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
tom.velocityX = -5;
tom.addAnimation("tomRunning",tomImg2);
tom. changeAniamtion("tomRunning");

jerry.addAnimation("jerryTeasing",jerryImg2);
jerry.frameDelay = 25;
jerry.changeAnimation("jerryTeasing");

}

}
