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
// ending the gae when value shown is 0
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
$(document).ready(function(){
  $("form#games").submit(function(event) {
    event.preventDefault();
    var generatedRoll=Math.floor(Math.random() * 6) + 1;
    console.log(generatedRoll);

});
});
