import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let generateRandomSuit = () => {
    let suit = [
      {
        label: "♥",
        color: "red",
      },
      {
        label: "♣",
        color: "black",
      },
      {
        label: "♠",
        color: "black",
      },
      {
        label: "♦",
        color: "red",
      },
    ];
    let indexSuit = Math.floor(Math.random() * suit.length);

    return suit[indexSuit];
  };

  let generateRandomNumber = () => {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    let indexNumbers = Math.floor(Math.random() * numbers.length);

    return numbers[indexNumbers];
  };

  const chosenSuits = generateRandomSuit();

  const suits = document.querySelectorAll(".suit");
  console.log(suits);
  for (const element of suits) {
    element.textContent = chosenSuits.label;
    element.style.color = chosenSuits.color;
  }
  document.querySelector(".number").innerHTML = generateRandomNumber();
};
