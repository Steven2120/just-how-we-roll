/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
 ********************/

const getRandomNumber = function (max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);

  return result;
};

const sortByNumber = function (arr) {
  const byNumber = function (item1, item2) {
    return item1 - item2;
  };

  return arr.slice().sort(byNumber);
};

/*******************
 * YOUR CODE BELOW *
 *******************/

// images depending of roll dice number
const singleImage = function (roll) {
  return `./images/d6/${roll}.png`;
};

const numbersImage = function (roll) {
  return `./images/numbers/${roll}.png`;
};

//Queries for buttons
const single = document.querySelector("#d6-roll");
const double1 = document.querySelector("#double-d6-roll-1");
const double2 = document.querySelector("#double-d6-roll-2");
const blueSingle = document.querySelector("#d12-roll");
const blackSingle = document.querySelector("#d20-roll");
const resetButton = document.querySelector("#reset-button");

//Queries for mean, median, mode for each section
const singleMean = document.querySelector("#d6-rolls-mean");
const singleMedian = document.querySelector("#d6-rolls-median");

const doublesMean = document.querySelector("#double-d6-rolls-mean");
const doublesMedian = document.querySelector("#double-d6-rolls-median");

const blueSingleMean = document.querySelector("#d12-rolls-mean");
const blueSingleMedian = document.querySelector("#d12-rolls-median");

const blackSingleMean = document.querySelector("#d20-rolls-mean");
const blackSingleMedian = document.querySelector("#d20-rolls-median");

/****************************
 * CLICK HANDLING FUNCTIONS *
 ****************************/
const rollSingle = function () {
  const roll = getRandomNumber(6);
  sixes.push(roll);
  const median = getMedian(sixes);
  const mean = getMean(sixes);

  single.src = singleImage(roll);
  singleMean.innerText = mean;
  singleMedian.innerText = median;
};

const doubleRoll = function () {
  const roll1 = getRandomNumber(6);
  const roll2 = getRandomNumber(6);
  doubleSixes.push(roll1 + roll2);
  const median = getMedian(doubleSixes);
  const mean = getMean(doubleSixes);

  double1.src = singleImage(roll1);
  double2.src = singleImage(roll2);
  doublesMean.innerText = mean;
  doublesMedian.innerText = median;
};

const blueRoll = function () {
  const roll4 = getRandomNumber(12);
  twelves.push(roll4);
  const median = getMedian(twelves);
  const mean = getMean(twelves);

  blueSingle.src = numbersImage(roll4);
  blueSingleMean.innerText = mean;
  blueSingleMedian.innerText = median;
};

const blackRoll = function () {
  const roll5 = getRandomNumber(20);
  twenties.push(roll5);
  const median = getMedian(twenties);
  const mean = getMean(twenties);

  blackSingle.src = numbersImage(roll5);
  blackSingleMean.innerText = mean;
  blackSingleMedian.innerText = median;
};
/******************
 * RESET FUNCTION *
 ******************/
const reset = function () {
  sixes.splice(0);
  doubleSixes.splice(0);
  twelves.splice(0);
  twenties.splice(0);

  single.src = "./images/start/d6.png";
  double1.src = "./images/start/d6.png";
  double2.src = "./images/start/d6.png";
  blueSingle.src = "./images/start/d12.jpeg";
  blackSingle.src = "./images/start/d20.jpg";

  singleMean.innerText = "NA";
  singleMedian.innerText = "NA";
  doublesMean.innerText = "NA";
  doublesMedian.innerText = "NA";
  blueSingleMean.innerText = "NA";
  blueSingleMedian.innerText = "NA";
  blackSingleMean.innerText = "NA";
  blackSingleMedian.innerText = "NA";
};

/*******************
 * EVENT LISTENERS *
 *******************/
single.addEventListener("click", rollSingle);
double1.addEventListener("click", doubleRoll);
double2.addEventListener("click", doubleRoll);
blueSingle.addEventListener("click", blueRoll);
blackSingle.addEventListener("click", blackRoll);
resetButton.addEventListener("click", reset);
/****************
 * MATH SECTION *
 ****************/
const getMean = function (rolls) {
  let total = 0;
  for (const roll of rolls) {
    total += roll;
  }
  return (total / rolls.length).toFixed(2);
};

const getMedian = function (rolls) {
  const sorted = sortByNumber(rolls);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return getMean([sorted[mid], sorted[mid - 1]]);
  } else {
    return sorted[mid].toFixed(2);
  }
};
