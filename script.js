//DOM elements
let form = document.querySelector("#form");
let cardContainer = document.querySelector("#card-container");
let openingPage = document.querySelector("#opening-page");

// global variables
let show;
let mode;
let cardsDisplayed;

//event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  show = document.querySelector("#show").value;
  mode = document.querySelector("#mode").value;

  console.log("Show: " + show);
  console.log("Mode: " + mode);
  console.log("Form button is responding");

  form.classList.toggle("active");
  openingPage.classList.toggle("active")
  populateGrid(show, mode);
});

//functions
function randomShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function populateGrid(show, mode) {

  let backOfCard;
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
  
  console.log(filteredArray)
  
  //randomize cards
  let shuffledCards = randomShuffle(filteredArray)
  console.log(shuffledCards)
  
  //slice cards
  if (mode === 'easy') {
    slicedCards.push(shuffledCards.slice(0, 8))
  } else if (mode === 'medium') {
    slicedCards.push(shuffledCards.slice(0,15))
  } else {
    slicedCards.push(shuffledCards)
  }                                  
  
  console.log(slicedCards)
  
  //double cards
  let fullDeck = slicedCards.concat(slicedCards).flat()
  console.log(fullDeck)

  //randomize cards
  let finalDeck = randomShuffle(fullDeck)
  cardsDisplayed = finalDeck
  console.log(cardsDisplayed)
  console.log(finalDeck)

  
  for (i = 0; i < finalDeck.length; i++) {
    let cardIdentifier = finalDeck[i].img
    
    const card = document.createElement("img");
    card.setAttribute("src", `${backOfCard}`);
    card.setAttribute('class', 'card')
    card.setAttribute('card-Id', i)
    card.addEventListener('click', flippedCard)
    // console.log(card)
    cardContainer.appendChild(card);

  }
  // cardIdentifier;
}

function flippedCard() {
  const cardIdentity = this.getAttribute('card-Id')
  console.log(cardIdentity)
  
  this.setAttribute('src', cardsDisplayed[cardIdentity].img)
}
