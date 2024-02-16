let nextbutton = document.getElementById("next");
let question = document.querySelector(".question");
let options = document.querySelectorAll(".options");
let currentquestionindex = 0;

// Questions
const questions0fthequiz = [
  "What was that first Pokémon that Ash caught?",
  "Slugma is what type of Pokemon?", "Which Pokémon can use its black ink to draw pictures or issue warnings?", "Squirtle can eventually become which Pokémon?",
  "Which Pokémon seems to always have a headache?",
  " Which Pokémon's English name sounds like a creature from the Indian Ocean?",
  "Which Pokémon can be used to beat Lorelei?",
  "Rock tunnel and power plant are closest to which of the following?",
  "What is Professor Oak's Japanese name?",
  "Who stole Misty's bike?",
  "Which of the following are Pok�mon games?"
];
question.innerHTML = questions0fthequiz[currentquestionindex];

// Options for the current question
const abcdOptions = [
  ["Fire", "Water", "Grass", "Dragon"], // Options for the first question
  ["Rock", "Fire", "Water", "Electric"], // Options for the second question
  ["Horsea", "Starmie", "Bellsprout", "Blastoise"],
  ["Electabuzz", "Blastoise", "Magmar", "Bulbasaur"],
  ["Psyduck", "Kangaskhan", "Zapdos", "Golduck"],
  ["Gengar", "Rhydon", "Dewgong", "Poliwrath"],
  ["Ice or water", "Psychic or ghost", "Grass or electric"],
  ["Celadon City", "Cerulean City", "Cinnabar Island"],
  ["Okita", "Okido", "Arigato"],
  ["Ash", "Gary", "Jessie"],
  ["Gold and silver", "Orange and pewter", "White and purple"]
];

function updatingoptions() {
  options.forEach((numbering, index) => {
    numbering.innerHTML = abcdOptions[currentquestionindex][index];
    console.log("im updating the options")
  });
};

nextbutton.addEventListener('click', () => {
  console.log("working");
  currentquestionindex++;
  if (currentquestionindex < questions0fthequiz.length()) {
    question.innerHTML=questions0fthequiz[currentquestionindex];
    updatingoptions();
  }
  else{
    console.log("nothing");
  }

});

updatingoptions();
