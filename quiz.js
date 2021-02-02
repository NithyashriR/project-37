class Quiz {
    constructor(){

    }

getState(){
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data){
        gameState = data.val();
    })
}

updateState(state){
database.ref('/').update({
     gameState: state
    });
}

play(){
  //quiz.hide();
  backgroundColor = "dark blue";
  var resultTitle = createElement("h1");
  resultTitle.html("RESULTS");
  resultTitle.position(100,10);
  Person.getPersoninfo();
  if(allPeople !== undefined){
    var displayPos = 130;
    var correctAnswer = 2;
    for(var ppl in allPeople){
      if (correctAnswer === allPeople[ppl].answer)
        fill("green")
      else
        fill("red");
      textSize(15);
      text(allPeople[ppl].name + ": " + allPlayers[ppl].answer, 120,displayPos);
    }
  }
}

async start(){
    if(gameState === 0){
      person = new Person();
      var personCountRef = await database.ref('contestantCount').once("value");
      if(personCountRef.exists()){
        contestantCount = personCountRef.val();
        person.getCount();
      }
      quiz = new Question()
      quiz.display();
    }
  }




}//end of js file