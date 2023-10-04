var button_colors=["red","blue","green","yellow"]
var game_pattern=[];
var userClickedPattern=[];
var started=false;
var level=0;
function playSound(name){
    var audio=new Audio("./sounds/"+name+".mp3");
    audio.play(); 
}
function nextseq(){
    level++;
    userClickedPattern=[]
    $("h1").text("Level: "+level)
    var rn=Math.floor(Math.random()*4);
    var ran_color=button_colors[rn];
    game_pattern.push(ran_color);
    animatePress(ran_color);
    playSound(ran_color);
}  

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100)
}
function checkanswer(currentlevel){
    if (userClickedPattern[currentlevel]===game_pattern[currentlevel]) {
        
        if (game_pattern.length===userClickedPattern.length) {
           setTimeout(function(){ nextseq();},1000);
        }
    }
    else{
        level=0;
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){$("body").removeClass("game-over");},200);
        $("h1").text("!! Game Over !!\n Press Any Key to Restart");
        started=false;
        game_pattern=[];
    }

}
$(document).keypress(function(){
    if(!started){
        nextseq();
        started=true;
    }
    })

$(".btn").on("click",function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    checkanswer(userClickedPattern.length-1)
})


