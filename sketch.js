const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var myWorld,myEngine;
var particles=[];
var plinkos=[];
var divisionHeight=300;
var divisions=[];
function setup() {
  createCanvas(480,800);
  myEngine=Engine.create();
  myWorld=myEngine.world;
  g = new Ground(width/2,height-10,width,20);
  for (var j = 15; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 15; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
  for(var k=0;k<=width;k+=80)
  {
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
}

function draw() {
  background(0); 
  Engine.update(myEngine); 
  strokeWeight(4);
  stroke("red");
  g.display();
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(100,300), 10,10));
    //score++;
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  
}