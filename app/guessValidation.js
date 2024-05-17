function guessValidation(voiceRecognizedElement) {
  const number = +voiceRecognizedElement;

  if (voiceRecognizedElement == "game over") {
    document.body.innerHTML = `
    <h2>GAME OVER</h2>
    <h3>O número secreto era: ${secretNumber}</h3>
    <button id="play-again" class="btn-play">Tentar novamente?</button
    `;
  } else {
    if (Number.isNaN(number)) {
      guessElement.innerHTML = "Valor invalido";
      guessTries--;
    } else if (number > higherValue || number < lowerValue) {
      guessTries--;
      guessElement.innerHTML = `Número invalido: fale um número entre ${lowerValue} e ${higherValue}`;
    } else {
      if (number === secretNumber) {
        document.body.innerHTML = `
      <h2>Parabéns, voce acertou!</h2>
      <h3>O número secreto era: ${secretNumber}</h3>
      <div class="message">Foi(ram) necessário(as) ${guessTries} tentativa(s)</div>
      <button id="play-again" class="btn-play">Jogar novamente?</button
      `;
      } else if (number > secretNumber) {
        guessElement.innerHTML = `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`;
      } else {
        guessElement.innerHTML = `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`;
      }
    }
  }
}
