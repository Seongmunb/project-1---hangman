const wordEl = document.getElementById('words');
const reset = document.getElementById('resetbtn');
const popup = document.getElementById('popup-container');
const finalMsg = document.getElementById('final-msg');
const wordBox = document.getElementById('word');

const letterDiv = document.querySelector('.letter-div');
const hmparts = document.querySelectorAll('.hm-part'); 

const words = ["python", "java", "javascript", "rudy", "sql", "php" ];

let randomwords = words[Math.floor(Math.random() * words.length)];

const correctLetters =[];


function displayWord() {
  wordBox.innerHTML = `
  ${randomwords
      .split('')
  .map(
      letter => `
          <span class="letter">
              ${correctLetters.includes(letter) ? letter : ''}
          </span>
      `
  )
  .join('')}
  `;
  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord === randomwords) {
    finalMsg.innerText = 'You Win';
    popup.style.display = 'flex';
  }
}

displayWord();

// const init = function (state) {
//   wordDiv.innerHTML = '';
//   if (state === 'start') {
//     // putting all letters into html
//     for (const i of 'abcdefghijklmnopqrstuvwxyz') {
//       const html = `<button class="alpha">${i.toUpperCase()}</button>`;
//       letterDiv.insertAdjacentHTML('beforeend', html);
//     }

// window.addEventListener( "load", function( windowLoadE ) {
//   let p, letter, button, holder;
//   holder = document.getElementById( "buttonsHolder" );
//   for ( let i = 65; i <= 90; i++ ) {
//       if ( i == 65 || i == 75 || i == 84 ) {
//           p = document.createElement( "p" );
//       }
//       letter = String.fromCharCode( i );
//       button = document.createElement( "button" );
//       button.innerHTML = letter;
//       button.setAttribute( "data-letter", letter );
//       button.onclick = function( e ) { setLetter( this.getAttribute( "data-letter" ) ); };
//       p.appendChild( button );
//       if ( i == 74 || i == 83 || i == 90 ) {
//           holder.appendChild( p );
//       }
//   }
// } );

function setLetter( letter ) {
  let div = document.getElementById( "answer" );
  div.innerHTML = div.innerHTML + letter;
}



