//business logic
// game constructor
function Game() {
  this.gameOver = true;
  this.currentPlayer = 0;
  this.players=[];
  this.dice = new Dice(6);
}
Game.prototype.endGame = function() {
  this.gameOver = true;
  this.currentPlayer = 0;
  this.players=[];
}
//Adding players
Game.prototype.addPlayer=function(player) {
  this.players.push(player);
}
//starting the game
Game.prototype.startGame=function() {
  this.gameOver = false;
  this.currentPlayer = 0;
}
// ending the game when value shown is 0
Game.prototype.endTurn = function() {
  this.players[this.currentPlayer].gameScore+=this.players[this.currentPlayer].turnScore;
  this.players[this.currentPlayer].turnScore = 0;
  if (this.currentPlayer<this.players.length-1) {
    this.currentPlayer++;
  } else {
    this.currentPlayer = 0;
  }
}
function Player(name) {
  this.name=name;
  this.gameScore=0;
  this.turnScore=0;
}

function Dice(sides) {
  this.sides = sides;
  this.value = 1;
  this.roll();
}

Dice.prototype.roll=function(){
    min = 1;
    max = this.sides;
    this.value = Math.floor(Math.random()*(max - min+1)) + min;
}
function player1(randomA){
  this.randomA= player1;
}

player1.prototype.resultA=function(){
  return this.randomA;
}
function player2(randomB){
  this.randomB= player2;
}

player1.prototype.resultB=function(){
  return this.randomB;
}

//user interface logic
var newGame = new Game();

function endTurn() {
  newGame.endTurn();
}

function endGame() {
  if(newGame.players[newGame.currentPlayer].gameScore + newGame.players[newGame.currentPlayer].turnScore >= 100) {
    alert("GAME OVER: "+ newGame.players[newGame.currentPlayer].name +" won with a score of " + newGame.players[newGame.currentPlayer].gameScore + newGame.players[newGame.currentPlayer].turnScore + "!!");
  } else {
    alert("end game!");
  }
  newGame.endGame();
  $(".players").empty();
  $("#currentScore").text("Current Player Name");
  $("#currentPlayer").text("Current Turn Score");
  $("#hold").prop("disabled", false);
  $("#roll").prop("disabled", false);
  $("#playGame").prop("disabled", false);
}

function showScores() {
  $("#listPlayerScores").empty();
  newGame.players.forEach(function(player){
    $("#listPlayerScores").append("<h3>"+player.name+": "+player.gameScore+"</h3>");
  });
}
function startTurn () {
  newGame.die.roll();
  if(newGame.die.value === 1) {
    newGame.players[newGame.currentPlayer].turnScore=0;
  } else {
    newGame.players[newGame.currentPlayer].turnScore+=newGame.die.value;
  }
  $("#currentScore").text(newGame.players[newGame.currentPlayer].turnScore);
  $("#currentPlayer").text(newGame.players[newGame.currentPlayer].name + ": " + newGame.players[newGame.currentPlayer].gameScore);
  showScores();
  if(newGame.players[newGame.currentPlayer].turnScore===0) {
    setTimeout(function() {
      alert("Sorry, " + newGame.players[newGame.currentPlayer].name + " you rolled a 1. You get NOTHING!!");
    },500);

    endTurn();
    startTurn();
  }

$(document).ready(function(){
  $("form#games").submit(function(event) {
    event.preventDefault();
    var generatedRoll=Math.floor(Math.random() * 6) + 1;
    console.log(generatedRoll);

});
});
