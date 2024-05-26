import { question } from "readline-sync";
import chalk from "chalk";

class RoomsGame {
  constructor(secretWord) {
    this.secretWord = secretWord.toUpperCase();
    this.guesses = [];
    this.attemptsLeft = 10;
    this.maskedWord = this.maskSecretWord();
  }

  maskSecretWord() {
    return this.secretWord.replace(/[a-zA-Z]/g, "_");
  }

  guessLetter(letter) {
    if (this.guesses.includes(letter.toUpperCase())) {
      console.log(
        chalk.yellow("You've already guessed that letter. Try another one.")
      );
      return;
    }

    this.guesses.push(letter.toUpperCase());

    if (!this.secretWord.includes(letter.toUpperCase())) {
      this.attemptsLeft--;
    } else {
      this.revealLetter(letter.toUpperCase());
    }
  }

  revealLetter(letter) {
    let newMaskedWord = "";
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.secretWord[i] === letter) {
        newMaskedWord += letter;
      } else if (this.secretWord[i] === "_") {
        newMaskedWord += "_";
      } else {
        newMaskedWord += this.maskedWord[i];
      }
    }
    this.maskedWord = newMaskedWord;
  }

  getHint() {
    const hiddenIndices = [];
    for (let i = 0; i < this.maskedWord.length; i++) {
      if (this.maskedWord[i] === "_") {
        hiddenIndices.push(i);
      }
    }
    const randomIndex =
      hiddenIndices[Math.floor(Math.random() * hiddenIndices.length)];
    const hintLetter = this.secretWord[randomIndex];
    return hintLetter;
  }

  isGameWon() {
    return this.maskedWord === this.secretWord;
  }

  isGameOver() {
    return this.attemptsLeft === 0 || this.isGameWon();
  }
}

function generateRandomWords() {
  const words = [
    "Puzzle",
    "Enigma",
    "Maze",
    "Riddle",
    "Secret",
    "Challenge",
    "Adventure",
    "Quest",
    "Mystery",
    "Excitement",
    "Discovery",
    "Thriller",
    "Suspense",
    "Survival",
    "Success",
    "Victory",
    "Achievement",
    "Freedom",
    "Courage",
    "Bravery",
    "Hero",
    "Legend",
    "Fantasy",
    "Magic",
    "Dream",
    "Imagination",
    "Wonder",
    "Journey",
    "Odyssey",
    "Epic",
    "Treasure",
    "Wealth",
    "Riches",
    "Gold",
    "Silver",
    "Diamond",
    "Platinum",
    "Emerald",
    "Ruby",
    "Sapphire",
    "Pearl",
    "Crystal",
    "Adventure",
    "Exploration",
    "Expedition",
    "Discovery",
    "Invention",
    "Innovation",
    "Creativity",
    "Inspiration",
    "Challenge",
    "Obstacle",
    "Hurdle",
    "Barrier",
    "Trial",
    "Test",
    "Experiment",
    "Pioneer",
    "Frontier",
    "Horizon",
    "Boundary",
    "Limit",
    "Goal",
    "Objective",
    "Target",
    "Destination",
    "Quest",
    "Adventure",
    "Expedition",
    "Journey",
    "Odyssey",
    "Voyage",
    "Travel",
    "Roam",
    "Wander",
    "Explore",
    "Discover",
    "Find",
    "Search",
    "Seek",
    "Pursue",
    "Track",
    "Trace",
    "Follow",
    "Chase",
    "Hunt",
    "Quest",
    "Adventure",
    "Journey",
    "Expedition",
    "Voyage",
    "Travel",
    "Roam",
    "Wander",
    "Explore",
    "Discover",
    "Find",
    "Search",
    "Seek",
    "Pursue",
    "Track",
    "Trace",
    "Follow",
    "Chase",
    "Hunt",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
    "Adventure",
    "Quest",
    "Journey",
    "Expedition",
    "Discovery",
    "Exploration",
  ];
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

function playGame() {
  console.clear();

  console.log(
    chalk.bold(
      chalk.bgWhite(
        "You wake up in a dark room with no memory of how you got there."
      )
    )
  );
  console.log(
    chalk.bgWhite(chalk.bold("Suddenly, a voice echoes in the room:"))
  );
  console.log(
    chalk.red(
      chalk.bold(
        '"Welcome, traveler. You are trapped in a series of rooms. To escape,'
      )
    )
  );
  console.log(
    chalk.bold(
      chalk.red(
        "you must guess the secret word in each room. Fail, and you'll be trapped forever.\""
      )
    )
  );
  console.log(
    chalk.bgWhite(
      chalk.bold("You have 3 hints available for all rooms. Use them wisely.")
    )
  );

  let roomNumber = 1;
  let hintsRemaining = 3;

  while (roomNumber <= 12) {
    const secretWord = generateRandomWords();
    console.log(chalk.bold(chalk.green(`\n--- Room ${roomNumber} ---`)));
    const game = new RoomsGame(secretWord);

    console.log(
      chalk.yellow(`The word to guess has ${game.secretWord.length} letters.`)
    );
    console.log(chalk.yellow(`You have ${game.attemptsLeft} attempts left.`));
    console.log(chalk.yellow(`Word: ${game.maskedWord}`));

    while (!game.isGameOver()) {
      const input = question(
        chalk.bold(chalk.blue("Guess a letter (or type 'hint' for a hint): "))
      )
        .trim()
        .toUpperCase();

      if (input === "HINT") {
        if (hintsRemaining > 0) {
          const hintLetter = game.getHint();
          console.log(
            chalk.bold(
              chalk.yellow(`Hint: One of the letters is '${hintLetter}'`)
            )
          );
          hintsRemaining--;
          console.log(
            chalk.bold(chalk.yellow(`Hints remaining: ${hintsRemaining}`))
          );
        } else {
          console.log(chalk.bold(chalk.yellow("You have no hints remaining.")));
        }
      } else if (input.length === 1 && input.match(/[a-zA-Z]/)) {
        game.guessLetter(input);
        console.clear();
        console.log(chalk.bold(chalk.blue(`You guessed: ${input}`)));
        console.log(
          chalk.bold(chalk.yellow(`Attempts left: ${game.attemptsLeft}`))
        );
        console.log(chalk.bold(chalk.yellow(`Word: ${game.maskedWord}`)));
      } else {
        console.log(
          chalk.bold(
            chalk.red("Invalid input. Please enter a single letter or 'hint'.")
          )
        );
      }
    }

    if (game.isGameWon()) {
      console.log(
        chalk.bold(
          chalk.green(
            "Congratulations! You guessed the word and proceed to the next room!"
          )
        )
      );
      roomNumber++;
      hintsRemaining = 3;
    } else {
      console.log(
        chalk.bold(
          chalk.red(
            "Game over! You failed to guess the word and remain trapped."
          )
        )
      );
      break;
    }
  }

  if (roomNumber === 13) {
    console.log(
      chalk.bold(
        chalk.green(
          "\nCongratulations! You escaped from all rooms and are finally free!"
        )
      )
    );
  }
}

playGame();
