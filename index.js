var SpeechRecognition = window.SpeechRecognition||window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

            
recognition.onstart = function() {
    console.log("We are listening. Try speaking into the microphone.");
};

recognition.onspeechend = function() {
    recognition.stop();
}
              

recognition.onresult = function(event) {
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML=text;
    speak(text);
};

function speak(text) {
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.onend = function() {
        recognition.start();
    }
    if(text.includes('time') && text.includes('now')){
        speech.text = "The time is " + new Date().getHours() + " " + new Date().getMinutes() + " right now";  
    }
    else if(text.includes('who are you') || text.includes('whom you are') || text.includes('who you are')){
        speech.text = "I'm your virtual butler, John.";
    }
    else if (text.includes("what's your name") || text.includes('your name')){
        speech.text = "My name is John";
    }
    else if(text.includes("hello") || text.includes('hi')) {
        speech.text = "Hello sir, How are you doing.";

    }
    else if (text.includes('sleep')||text.includes('nap')||text.includes('f*** off')){
        speech.text = "Bye Sir, have a good Day.";
        speech.onend = function(){
            recognition.stop();
        }
    }
    else if (text.includes('stackOverflow')|| text.includes('stack overflow')){
        speech.text = "Opening Stack Overflow";
        window.open('https://www.stackoverflow.com');
    }
    else if (text.includes('open search')||text.includes('go to google')||text.includes('open Google')||text.includes('go to Google')){
        speech.text = "Opening seARch.";
        window.open('https://squirrelcom.github.io/seARch');
    }
    else if(text.includes('your birthday')||text.includes('your Birthday')){
        speech.text = "The 22nd of january";    
    }
    
    else if (text.includes('who made you')||text.includes('who created you')||text.includes('who invented you')){
        speech.text = "I'am an improved version of the SIA assistant by Squirrel Enterprises ";
    }
    else if(text.includes ('how are you')){
        speech.text = "I'm always Great";
    }







    window.speechSynthesis.speak(speech);
}





              

