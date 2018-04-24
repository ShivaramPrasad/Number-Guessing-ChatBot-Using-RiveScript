
let speech = new p5.Speech();
let speechRec = new p5.SpeechRec('en-US');
speechRec.continuous =  true;
speechRec.interimResults =  false;

//bot machine
let bot = new RiveScript();

function setup(){

// 	noCanvas();
	//speech.speak('hello');
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

	// let button = select('#btn-id');

	// let output = select('#reply');

	function gotSpeech(){
		console.log("entered");
		if(speechRec.resultValue){
			let input = speechRec.resultString;
			document.getElementById('user_id').value= input;
			console.log(input);
			let reply = bot.reply("local-user",input);
			speech.speak(reply);
			document.getElementById('reply').innerText = reply;
		//	document.getElementById('user_id').value = "";
		}

	}




	// function chat(){
	// 	console.log("mousePressed");
	// 	let input = document.getElementById('user_id').value;
	// 	// let user_input = select('#user_id');
	// 	let reply = bot.reply("local-user",input);
	// 	speech.speak(reply);
	// 	document.getElementById('reply').innerText = reply;
	// 	document.getElementById('user_id').value = "";

// }
