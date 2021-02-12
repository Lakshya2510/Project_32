const Engine = Matter.Engine
const World= Matter.World
const Bodies = Matter.Bodies

var engine, world;
var polygon,ground,slingshot,platform1,platform2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18;
var box19,box20,box21,box22,box23,box24;
var score=0;
var backgroundColor;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    //Level one 
    box1 = new Box(430,399,50,50)
    box2 = new Box(485,399,50,50)
    box3 = new Box(535,399,50,50)
    box4 = new Box(585,399,50,50)
    box5 = new Box(635,399,50,50)
    box6 = new Box(685,399,50,50)
    box7 = new Box(735,399,50,50)

    //Level two
    box8 = new Box(485,319,50,50)
    box9 = new Box(535,319,50,50)
    box10 = new Box(585,319,50,50)
    box11 = new Box(635,319,50,50)
    box12 = new Box(685,319,50,50)

    //Level three
    box13 = new Box(535,269,50,50)
    box14 = new Box(585,269,50,50)
    box15 = new Box(635,269,50,50)

    //top platform1
    box16 = new Box(585,219,50,50)

    //Level one
    box17 = new Box(900,199,50,50)
    box18 = new Box(950,199,50,50)
    box19 = new Box(1000,199,50,50)
    box20 = new Box(1050,199,50,50)
    box21 = new Box(1100,199,50,50)
     
    //Level two
    box22 = new Box(950,119,50,50)
    box23 = new Box(1000,119,50,50)
    box24 = new Box(1050,119,50,50)
     
    //top playform2
    box25 = new Box(1000,69,50,50)

    ground = new Ground(600,height,1200,20);
    polygon = new Polygon(172,162,50,50)
    platform1 = new Ground(600,400,500,20)
    platform2 = new Ground(1000,200,300,20)
    slingShot = new SlingShot(polygon.body,{x: 250, y:300})
}

function draw(){

    getBackground();
    if(backgroundColor){
        background(backgroundColor);
    }
    else{
        background(255);
    }
    Engine.update(engine);   

    text("SCORE :"+score,900,50)
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    platform1.display();
    platform2.display();
    polygon.display();
    ground.display();
    slingShot.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY})

}

function mouseReleased(){

    slingShot.fly()
}

function keyPressed() {

    if (keyCode == 32) {
        Matter.Body.setPosition(polygon.body,{ x: 250, y: 300 })
        slingShot.attach(polygon.body);
        
    }

}

async function getBackground() {
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11, 13)

    if(hour<18 && hour>6){

       backgroundColor = 38
    }
    else{
        backgroundColor = 230
    }
}
