var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var  boyrunning;
function preload(){
  //loadImage (carregarImagem) da pista)]
  pathImg=loadImage("path.png");
    //loadImage (carregarImagem) do menino
    boyImg=loadImage("boy.png");
    //loadAnimation (carregarAnimação) de corrida para o pista
    path = loadImage("path.png");
  //loadAnimation (carregarAnimação) de corrida para o menino
  boyrunning = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
path = createSprite(200,200,20,20) 
//adicione uma imagem para a pista
path.addImage(pathImg);
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

//crie um sprite de menino
boy = createSprite(200,350,50,50)
//adicione uma animação de corrida para ele
boy.addAnimation("running",boyrunning);
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
 leftBoundary.visible=false;
//crie um limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
