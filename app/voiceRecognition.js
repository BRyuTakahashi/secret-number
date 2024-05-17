window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const guessElement = document.getElementById("guess");
let guessTries = 0;

recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  const voiceRecognizedElement = e.results[0][0].transcript;

  guessTries++;
  guessElement.innerHTML = `
  <div>Voce disse:</div>
  <span class="box">${voiceRecognizedElement}</span>
  `;
  guessValidation(voiceRecognizedElement);
}

recognition.addEventListener("end", () => recognition.start());

document.body.addEventListener("click", (e) => {
  if (e.target.id == "play-again") {
    window.location.reload();
    guessTries = 0;
  }
});
