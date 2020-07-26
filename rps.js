function rpsGame(yourChoice)
{
    
    console.log(yourChoice);
    var ourchoice,botChoice;
    ourchoice=yourChoice.id;

    botChoice=numbertoChoice(randomNum());
    console.log('you chose',ourchoice);

    console.log('the bot chose',botChoice);


    results=decideWinner(ourchoice, botChoice);
    console.log(results);

    message= finalMessage(results);
    console.log(message);
     
    rpsFrontEnd(yourChoice.id,botChoice,message)
}
function randomNum(){
    return Math.floor(Math.random() * 3);
}

function numbertoChoice(number){
    return ['rock','paper','scissors'][number];
}
function decideWinner(yourChoice,compChoice)
{
    var rpsdatabase={
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},

        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},

        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    var ourscore=rpsdatabase[yourChoice][compChoice];
    var botscore=rpsdatabase[compChoice][yourChoice];

    return[ourscore, botscore]; 
}

    function finalMessage([ourscore,botscore]){
        if(ourscore===0)
        {
            return{'message': 'you lost', 'color':'red'};
        }
        else if(ourscore===0.5)
        {
            return{'message': 'match tied', 'color':'yellow'};
        }
        else
        {
            return{'message': 'you won', 'color': 'green'};
        }
        
    }

function rpsFrontEnd(humanimage,botimage,finalMessage){
    var imagesDatabase={
        'rock':document.getElementById('rock').src, 
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }


    //removing all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
   

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanimage]+ "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(177,100,133,1);'>";
    messageDiv.innerHTML= "<h4 style='color: " +finalMessage['color'] +"; font-size: 50px; paddig:30px;'>"+finalMessage['message']+"</h4>"
    botDiv.innerHTML= "<img src='" + imagesDatabase[botimage]+ "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(177,10,33,1);'>";
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
 
   

}