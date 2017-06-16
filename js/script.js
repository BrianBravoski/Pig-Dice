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


$(document).ready(function(){
  $("form#games").submit(function(event) {
    event.preventDefault();
    var generatedRoll=Math.floor(Math.random() * 6) + 1;
    console.log(generatedRoll);

});
});
