
let speech = new p5.Speech();

let speechRec = new p5.SpeechRec('en-US');
speechRec.continuous =  true;
speechRec.interimResults =  false;

//bot machine
let bot = new RiveScript();

function setup(){

  speechRec.onResult = gotSpeech;
  speechRec.start();

  bot.loadFile("brain.rive", botLoading, botError);

  function botLoading(){
    console.log("chatBot Ready!");
    bot.sortReplies();
    
  }

  function botError(){
    console.log("chatBot Error!!");
  }

}


function gotSpeech(){
  let input = speechRec.resultString;
  document.getElementById('user_id').value = input;
  console.log(input);
  let reply = bot.reply("local-user",input);
  speech.speak(reply);
  document.getElementById('reply').innerText = reply;
   
  document.getElementById('user_id').value = "";

}






  // }
