window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const guessElement = document.getElementById("guess");

recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  const voiceRecognizedElement = e.results[0][0].transcript;
  guessElement.innerHTML = `
  <div>Voce disse:</div>
    <span class="box">${voiceRecognizedElement}</span>
    `;
}
