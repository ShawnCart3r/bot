const talk = document.querySelector('.talk');
const voice2text = document.querySelector('.voice2text');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();


recorder.onstart = () => {
    console.log("voice is activated, you can talk");
};

recorder.onresult = (event) => {
    const current = event.resultIndex;
    const transcripts = event.results[current][0].transcripts;
    voice2text.textContent = transcript
};



talk.addEventListener('click', () => {
    recorder.start();
});

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "This is my default response";
    if(message.includes('How are you')) {
        speech.text = "I am fine, thanks. How are you?";
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech)
}

SpeechRecognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    voice2text.textContent = transcript;
    botVoice(transcript);
};