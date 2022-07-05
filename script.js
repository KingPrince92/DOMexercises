"use strict";

//price container
//buttons need to add price
//one function to add price under each button
// if/else if/else if for choices?
let sum = 0;

const priceTotal = document.querySelector(".total");

const cola = document.querySelector(".limeCola");
const peanuts = document.querySelector(".saltedPeanuts");
const choco = document.querySelector(".chocoBar");
const gummies = document.querySelector(".fruitGummi");

cola.addEventListener("click", () => {
  (sum += 2), (priceTotal.textContent = `Total: $ ${sum}.00`);
});
peanuts.addEventListener("click", () => {
  (sum += 3), (priceTotal.textContent = `Total: $ ${sum}.00`);
});
choco.addEventListener("click", () => {
  (sum += 4), (priceTotal.textContent = `Total: $ ${sum}.00`);
});
gummies.addEventListener("click", () => {
  (sum += 6), (priceTotal.textContent = `Total: $ ${sum}.00`);
});

//Make Money
const changeJar = document.querySelector(".change-jar");
const moneyform = document.querySelector(".moneyform");

moneyform.addEventListener("submit", (e) => {
  e.preventDefault();
  let coinAmount = document.querySelector("#amount").value;
  let coinChosen = document.querySelector("#type").value;
  for (let i = 0; i < coinAmount; i++) {
    const newCoin = document.createElement("li");
    newCoin.classList.add("coin", coinChosen);
    newCoin.textContent = coinChosen;
    changeJar.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
});

const lightbulb = document.querySelector(".bulb");
const onButton = document.querySelector(".button-on");
const offButton = document.querySelector(".button-off");
const toggler = document.querySelector(".toggle");
const endAll = document.querySelector(".lightsout");

const lightOn = () => {
  lightbulb.style.backgroundColor = "yellow";
};

const lightOff = () => {
  lightbulb.style.backgroundColor = "darkslategray";
};

const lightToggle = () => {
  if (lightbulb.style.backgroundColor === "darkslategray") {
    lightbulb.style.backgroundColor = "yellow";
  } else {
    lightbulb.style.backgroundColor = "darkslategray";
  }
};

const lightsOut = () => {
  lightbulb.remove();
  onButton.setAttribute("disabled", "");
  offButton.setAttribute("disabled", "");
  toggler.setAttribute("disabled", "");
  endAll.setAttribute("disabled", "");
};

onButton.addEventListener("click", lightOn);
offButton.addEventListener("click", lightOff);
toggler.addEventListener("click", lightToggle);
endAll.addEventListener("click", lightsOut);

const refreshButton = document.querySelector(".refresh");
const refreshPage = () => {
  location.reload();
};

refreshButton.addEventListener("click", refreshPage);
