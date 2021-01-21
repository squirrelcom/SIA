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
        speech.text = "I'm a personalised Voice Assistant, SIA.";
    }
    else if (text.includes("what's your name") || text.includes('your name')){
        speech.text = "My name is SIA";
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
    else if (text.includes('open google')||text.includes('go to google')||text.includes('open Google')||text.includes('go to Google')){
        speech.text = "Opening Google.";
        window.open('https://www.google.com');
    }
    else if (text.includes('open whatsapp')||text.includes('go to whatsapp')||text.includes('open WhatsApp')||text.includes('go to whatsApp')){
        speech.text = "Opening Whatsapp.";
        window.open('https://web.whatsapp.com/');
    }
    else if(text.includes('my birthday')||text.includes('my Birthday')){
        speech.text = "Do you think you're that famous. How the heck I know you birthday.";    
    }
    
    else if (text.includes('who made you')||text.includes('who created you')||text.includes('who invented you')){
        speech.text = "I was made by my master Uday Kiran";
    }
    else if (text.includes('God')){
        speech.text = "I think, Uday Kiran, he's the one who made me, he might be the God.";
    }
    else if (text.includes('when you were made')||text.includes('when you were initialized')){
        speech.text = "Oh!, that was a beautiful day in my life.I was initialized on 16th of January 2021, on Saturday 6 46 P.M";
    }
    else if(text.includes ('how are you')){
        speech.text = "I'm always fine, untill you care me";
    }







    window.speechSynthesis.speak(speech);
}





              

