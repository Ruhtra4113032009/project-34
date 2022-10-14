
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState = "construindo";
var ground;
var tijolo;
var con;
var rope;

function preload(){

}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  ground = createSprite();
  tijolo = new Tijolo();
  rope = new Rope(6,{x:,y:});
  con = new Link(rope,tijolo);
}


function draw() 
{
  background("campinho.jpg");
  Engine.update(engine);
  
}

