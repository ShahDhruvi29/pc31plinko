var Engine = Matter.Engine;
  World = Matter.World;
  Events = Matter.Event;
  Bodies = Matter.Bodies;
    var particles = [];
    var plinkos = [];
    var divisions =[];
    var divisionHeight=300;
function setup() {
  createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
  ground = new Ground(width/2,height,width,20);
  for (var d = 0;d<=width;d=d+80){
    divisions.push(new Division(d, height-divisionHeight/2, 10, divisionHeight));
  }
    for (var j = 60; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 35; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }
     for (var j = 60; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }
     for (var j = 35; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }
}
function draw() {
    background(167,62,185);  
    Engine.update(engine);
  ground.display();
  for (var i = 0; i < plinkos.length; i++) { 
    plinkos[i].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }
 for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for (var d = 0; d < divisions.length; d++) {
    divisions[d].display();
  }
}