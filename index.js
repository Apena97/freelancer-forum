/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// === State ===
/** @returns {Freelancer} a freelancer with random name, occupation, and rate */
function makeFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;

  return { name, occupation, rate };
}

const freelancers = [];
for (let i = 0; i < NUM_FREELANCERS; i++) {
  freelancers.push(makeFreelancer());
}

function FreelancerCard(freelancer) {
  const { name, occupation, rate } = freelancer;

  const $card = document.createElement("div");
  $card.className = "freelancer-card";
  $card.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Occupation:</strong> ${occupation}</p>
    <p><strong>Rate:</strong> $${rate}/hour</p>
  `;
  return $card;
}
function FreelancerCards(freelancers) {
  const $cards = document.createElement("div");
  $cards.className = "freelancer-cards";

  freelancers.forEach((freelancer) => {
    $cards.appendChild(FreelancerCard(freelancer));
  });

  return $cards;
}

function render() {
  const $app = document.getElementById("app");
  $app.innerHTML = `
    <h1>Freelancers</h1>
    <div id="freelancer-cards"></div>
  `;
  $app
    .querySelector("#freelancer-cards")
    .replaceWith(FreelancerCards(freelancers));
}
render();
