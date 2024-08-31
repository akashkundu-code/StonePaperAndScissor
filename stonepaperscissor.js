// Function to generate computer's choice
let computer_score = 0;
let user_score = 0;
function getComputerChoice() {
  const choices = ["stone", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}
//funtion to play game
function determine_winner(user_choise, computer_choice) {
  if (computer_choice == user_choise) {
    return "tie";
  } else if (
    (computer_choice == "paper" && user_choise == "stone") ||
    (computer_choice == "stone" && user_choise == "scissor") ||
    (computer_choice == "scissor" && user_choise == "paper")
  ) {
    computer_score++;
    return "computer won";
  } else if (
    (user_choise == "paper" && computer_choice == "stone") ||
    (user_choise == "stone" && computer_choice == "scissor") ||
    (user_choise == "scissor" && computer_choice == "paper")
  ) {
    user_score++;
    return "you won";
  } else {
    return "invalid input please try again";
  }
}
function final_result() {
  if (user_score == computer_score) {
    return "it is a draw";
  } else if (user_score > computer_score) {
    return "hurray !!you won this entire game";
  } else {
    return "oops!! you lose this game";
  }
}
function play_game() {
  while (true) {
    const prompt = require("prompt-sync")();
    const user_choise = prompt(
      "Welcome to the game of [stone paper and scissor] please input [Stone, Paper ,and Scissor] to play and 'exit' to end the game "
    );
    if (user_choise == "exit") {
      console.log(
        `thanks for playing \nYour score = ${user_score}\nComputer Score = ${computer_score}`
      );
      break;
    }
    const computer_choice = getComputerChoice();
    const play = determine_winner(user_choise, computer_choice);
    console.log(
      `You chose: ${user_choise}\nComputer chose: ${computer_choice}\n${play}\ncomputer score = ${computer_score}\nuser score = ${user_score} `
    );
  }
}

play_game();

const finalresult = final_result();
console.log(finalresult);
