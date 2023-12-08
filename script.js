//DOM elements
let form = document.querySelector("#form");
let cardContainer = document.querySelector("#card-container");
let openingPage = document.querySelector("#opening-page");

// global variables
let show;
let mode;

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
  
  let slicedCards = []
  
  //filter cards
  let filteredArray = cards.filter((card) => card.show === show);
  
  console.log(filteredArray)
  
  //randomize cards
  let shuffledCards = randomShuffle(filteredArray)
  console.log(shuffledCards)
  
  //slice cards
  if (mode === 'easy') {
    slicedCards.push(shuffledCards.slice(0, 9))
  } else if (mode === 'medium') {
    slicedCards.push(shuffledCards.slice(0,14))
  } else {
    slicedCards.push(shuffledCards)
  }                                  
  
  console.log(slicedCards)
  
  //double cards
  let fullDeck = slicedCards.concat(slicedCards).flat()
  console.log(fullDeck)

  //randomize cards
  let finalDeck = randomShuffle(fullDeck)
  console.log(finalDeck)
  
  for (i = 0; i < finalDeck.length; i++) {
      let cardIdentifier = finalDeck[i].img

        const card = document.createElement("img");
        card.setAttribute("src", `${cardIdentifier}`);
        card.setAttribute('class', 'card')
        console.log(card)
        cardContainer.appendChild(card);
    }
}
