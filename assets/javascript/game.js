$(document).ready(function()
{
    var target = Math.floor(Math.random()*102)+19;
    $(".targetScore").append(target);
    var redValue = Math.floor(Math.random()*12+1);
    var blueValue = Math.floor(Math.random()*12+1);
    var yellowValue = Math.floor(Math.random()*12+1);
    var greenValue = Math.floor(Math.random()*12+1);
    var total = 0;
    var wins = 0;
    var losses = 0;
    
    function resetGame()
    {
        target = Math.floor(Math.random()*102)+19;
        $(".targetScore").text(target);
        redValue = Math.floor(Math.random()*12+1);
        blueValue = Math.floor(Math.random()*12+1);
        yellowValue = Math.floor(Math.random()*12+1);
        greenValue = Math.floor(Math.random()*12+1);
        total = 0;
        $(".totalScore").text(total);
    } 

    function winGame()
    {
        $(".message").text("You won!");
        wins++;
        $(".wins").text(wins);
        resetGame();
    }

    function loseGame()
    {
        $(".message").text("You lost!");
        losses++;
        $(".losses").text(losses);
        resetGame();
    }

    $(".red").on("click", function(){
        total += redValue;
        $(".totalScore").text(total); 
        if (total === target){
            winGame();
        }
        else if(total > target)
        {
            loseGame();
        }   
    });
    $(".blue").on("click", function(){
        total += blueValue;
        $(".totalScore").text(total); 
        if (total === target){
            winGame();
        }
        else if(total > target)
        {
            loseGame();
        }   
    });
    $(".yellow").on("click", function(){
        total += yellowValue;
        $(".totalScore").text(total); 
        if (total === target){
            winGame();
        }
        else if(total > target)
        {
            loseGame();
        }   
    });
    $(".green").on("click", function(){
        total += greenValue;
        $(".totalScore").text(total); 
        if (total === target){
            winGame();
        }
        else if(total > target)
        {
            loseGame();
        }   
    });
});