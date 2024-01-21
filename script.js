//DOM elements
let form = document.querySelector("#form");
let cardContainer = document.querySelector("#card-container");
let openingPage = document.querySelector("#opening-page");
let resetButton = document.querySelector("#reset")

// global variables
let show;
let mode;
let cardsDisplayed;
let backOfCard;
let cardsChosen = []
let cardsChosenId = []

//event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  show = document.querySelector("#show").value;
  mode = document.querySelector("#mode").value;

  form.classList.toggle("active");
  openingPage.classList.toggle("active")
  resetButton.style.display = 'block'
  populateGrid(show, mode);
});

resetButton.addEventListener("click", function () {
  form.classList.toggle("active");
  openingPage.classList.toggle("active");
  cardContainer.innerHTML = ''
  resetButton.style.display = "none";
})

//functions
function randomShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function populateGrid(show, mode) {
  switch (show) {
    case "powerpuff": backOfCard = "assets/cards/25.svg";
      break;
    case "ededdneddy": backOfCard = "assets/cards/50.svg";
      break;
    case "fosters": backOfCard = "assets/cards/75.svg";
      break;
    case "codename": backOfCard = "assets/cards/100.svg";
      break;
     default: backOfCard = "assets/cards/125.svg";
  }
  
  let slicedCards = []
  
  //filter cards
  let filteredArray = cards.filter((card) => card.show === show);
  
  //randomize cards
  let shuffledCards = randomShuffle(filteredArray)

  //slice cards
  if (mode === 'easy') {
    slicedCards.push(shuffledCards.slice(0, 8));
  } else if (mode === 'medium') {
    slicedCards.push(shuffledCards.slice(0, 15))
  } else {
    slicedCards.push(shuffledCards)
  }                                  
  
  //double cards
  let fullDeck = slicedCards.concat(slicedCards).flat()

  //randomize cards
  let finalDeck = randomShuffle(fullDeck)
  cardsDisplayed = finalDeck
  
  //creating, styling, and displaying cards on board
  for (i = 0; i < finalDeck.length; i++) {
    let cardIdentifier = finalDeck[i].img
    
    const card = document.createElement("img");
    card.setAttribute("src", `${backOfCard}`);
    card.setAttribute('class', 'card')
    card.setAttribute('card-Id', i)
    card.addEventListener('click', flippedCard)

    if (mode === 'easy') {
      card.style.height = "90px";
      card.style.flex = "1 0 22%";
    } else if (mode === 'medium') {
      card.style.height = "63px";
      card.style.flex = "1 0 17%";
    } else {
      card.style.height = "58px";
      card.style.flex = "1 0 14%";
    }
    cardContainer.appendChild(card);

  }
}

function flippedCard() {
  this.classList.toggle("flipped")
  const cardIdentity = this.getAttribute('card-Id')
  cardsChosen.push(cardsDisplayed[cardIdentity].name)
  cardsChosenId.push(cardIdentity)
  
  this.setAttribute('src', cardsDisplayed[cardIdentity].img)

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500)
  }
}

function checkMatch() {
  const theCards = document.querySelectorAll("img");
  let cardOne = cardsChosenId[0]
  let cardTwo = cardsChosenId[1]

  if (cardOne === cardTwo) {
    alert('you clicked the same card twice')
    theCards[cardOne].setAttribute("src", `${backOfCard}`);
    theCards[cardTwo].setAttribute("src", `${backOfCard}`);
    cardsChosen = [];
    cardsChosenId = [];
    return
  }
  if (
    cardsChosen[0] === cardsChosen[1]) {
      playCorrectSound()
    theCards[cardOne].removeEventListener("click", flippedCard);
    theCards[cardTwo].removeEventListener("click", flippedCard);
    cardsChosen = [];
    cardsChosenId = [];
  } else {
    playWrongSound()
    theCards[cardOne].setAttribute("src", `${backOfCard}`);
    theCards[cardTwo].setAttribute("src", `${backOfCard}`);
    theCards[cardOne].classList.toggle("flipped");
    theCards[cardTwo].classList.toggle("flipped");
    cardsChosen = [];
    cardsChosenId = [];
  }
}


  function playCorrectSound() {
    let correctSoundAudio = document.querySelector('#correctSound')
    correctSoundAudio.play()
  }

  function playWrongSound() {
    let wrongSoundAudio = document.querySelector('#wrongSound')
    wrongSoundAudio.play()
  }