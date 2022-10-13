const words = [
  "python", "java", "javascript", "rudy", "sql", "php"];
  
  const wordEl = document.getElementById("word");
  const wrongLettersEl = document.getElementById("wrong-letters");
  const playAgainBtn = document.getElementById("play-button");
  const popup = document.getElementById("popup-container");
  const notification = document.getElementById("notification-container");
  const finalMessage = document.getElementById("final-message");
  const figureParts = document.querySelectorAll(".figure-part");
  const correctLetters = [];
  const wrongLetters = [];
  
  let randomWord = words[Math.floor(Math.random() * words.length)];
  

  
  function displayWord() {
    wordEl.innerHTML = `
      ${randomWord
        .split("")
        .map(
          (letter) => `
          <span class="letter">
          ${correctLetters.includes(letter) ? letter : ""}
          </span>
          `
        )
        .join("")}
      `;
  
    const innerWord = wordEl.innerText.replace(/\n/g, "");
  
    if (innerWord === randomWord) {
      finalMessage.innerText = "Good job";
      popup.style.display = "flex";
    }
  }
  
 
  function updateWrongLetterEl() {
   
    wrongLettersEl.innerHTML = `
      ${wrongLetters.length > 0 ? "Guessed:  \n " : ""}
      ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
      `;
  
    
    figureParts.forEach((part, index) => {
      const errors = wrongLetters.length;
  
      if (index < errors) {
        part.style.display = "block";
      } else {
        part.style.display = "none";
      }
    });
  
   
    lives.innerText = `- ${wrongLetters.length}`;
    
    if (wrongLetters.length === figureParts.length) {
      finalMessage.innerText = "Try again";
      popup.style.display = "flex";
    }
  }
  
  window.addEventListener("keydown", (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      const letter = e.key;
  
      if (randomWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          correctLetters.push(letter);
  
          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);
  
          updateWrongLetterEl();
        } 
      }
    }
  });
  
  
  playAgainBtn.addEventListener("click", () => {
    
    correctLetters.splice(0);
    wrongLetters.splice(0);
  
    randomWord = words[Math.floor(Math.random() * words.length)];
  
    displayWord();
  
    updateWrongLetterEl();
  
    popup.style.display = "none";
  });
  
  displayWord();

  function doAction() {
    alert("programming language");
  }