var canvas;
var music;
var box1,box2,box3,box4,block;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
box1=createSprite(80,600,150,40);
box1.shapeColor="orange";
box2=createSprite(290,600,150,40);
box2.shapeColor="green";
box3=createSprite(490,600,150,40);
box3.shapeColor="blue";
box4=createSprite(700,600,150,40);
box4.shapeColor="yellow";
block=createSprite(50,50,30,30);



music.play();
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

createEdgeSprites();

block.collide(Edges);
    if (keyDown(UP_ARROW)) {
        block.velocityX=0;
        block.velocityY=-4;
                
        }
if (keyDown(DOWN_ARROW)) {
            block.velocityX=0;
            block.velocityY=4;
                    
            }

if (keyDown(LEFT_ARROW)) {
                block.velocityX=-4;
                block.velocityY=0;
                        
                }

if (keyDown(RIGHT_ARROW)) {
                    block.velocityX=4;
                    block.velocityY=0;
                            
                    }

if(box1.isTouching(block)){
block.shapeColor=rgb(255,128,0);
block.velocityX=0;
music.play();

}

if(box2.isTouching(block)){
    block.shapeColor="green";
    block.velocityX=0;
    music.stop();
    
    }

    if(box3.isTouching(block)){
        block.shapeColor="blue";
        block.velocityX=0;
        music.play();
        
        }

        if(box4.isTouching(block)){
            block.shapeColor="yellow";
            block.velocityX=0;
            music.stop();

            }


drawSprites();




    //add condition to check if box touching surface and make it box
}



function keyPressed(){






}





















