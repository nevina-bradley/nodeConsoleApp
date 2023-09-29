const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let attempts = 0;
let attempts2 = 0;

function askQuestion() {
  const favoritePokemon = 'eevee';

  console.log("Can you guess my favorite Pokemon in less than 15 guesses?");
  rl.question("Guess my favorite Pokemon: ", (answer) => {
    attempts++;
  
    if (answer.toLowerCase() === favoritePokemon) {
      console.log("Nice, you're correct!");
      console.log("Try to guess my favorite eeveelution too!");
      function secondQuestion() {
        const favoriteEeveelution = 'umbreon';
        rl.question("Guess my favorite eeveelution: ", (answer2) => {
          attempts2++;

          if (answer2.toLowerCase() === favoriteEeveelution) {
            console.log("Nice, you're correct!");
            rl.close();
          } else {
            if (attempts2 < 9) {
              console.log("Nope, that isn't my favorite eeveelution, try again!");
              console.log(9 - attempts2 + " remaining");
              secondQuestion();
            } else {
              console.log("Sorry, you're out of attempts. My favorite eeveelution is umbreon!");
              rl.close();
            }
          }
        });
      }
      secondQuestion();
    } else {
      if (attempts < 15) {
        console.log("Nope, that isn't my favorite Pokemon, try again!");
        console.log(15 - attempts + " remaining");
        askQuestion();
      } else {
        console.log("Sorry, you're out of attempts. My favorite Pokemon is eevee!");
        rl.close();
      }
    }
  });
}

console.log("Welcome to the Favorite Pokemon Guessing Game!");
askQuestion();

module.exports = {
  askQuestion,
};