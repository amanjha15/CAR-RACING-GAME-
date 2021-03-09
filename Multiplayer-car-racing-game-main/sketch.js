var canvas, backgroundImage,carSound
var playing = false;
var carRacingVideo;

var gameState = 1;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var trackImg,car1Img,car2Img,car3Img,car4Img,carRacingVideo;
function preload(){
  trackImg = loadImage("images/track.jpg")
  car1Img = loadImage("images/car1.png")
  car2Img = loadImage("images/car2.png")
  car3Img = loadImage("images/car3.png")
  car4Img = loadImage("images/car4.png")
  carSound = loadSound("music/AutoRace SP02_30.wav")
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}


function draw(){
 
 //if(gameState===1){
  /// mousePressed();
 //   carRacingVideo.autoplay();
   // 
//carRacingVideo.display();
 //   carRacingVideo.loop();
// }
    if(playerCount === 4){
    game.update(2);
  }
  
  if(gameState === 2){
    clear();
    game.play();
    
  }
  if(gameState ===3){
    game.end()
    // need to check output
  }
  
}
//function mousePressed() {
//  console.log("mousePressed")
 // carRacingVideo.loop(); // set the video to loop and start playing
  
//}