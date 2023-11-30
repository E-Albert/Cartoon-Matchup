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
    //filter cards
    //slice cards
    //double cards
    //randomize cards
    //return cards
    let filteredArray = cards.filter((card) => card.show === show);

    console.log(filteredArray)

    let shuffledCards = randomShuffle(filteredArray)
    console.log(shuffledCards)

    // if (mode === 'easy') {
    //     return shuffledCards.slice(0, 9)
    // }

   
//   if (show === "powerpuff") {
//        filteredArray = cards.filter((card) => card.show === "powerpuff");
//       console.log(filteredArray)
//     }

//       let shuffledArray = randomShuffle(filteredArray)
//       console.log(shuffledArray)
      
  for (i = 0; i < filteredArray.length; i++) {
      let cardIdentifier = filteredArray[i].img

        const card = document.createElement("img");
        card.setAttribute("src", `${cardIdentifier}`);
        card.setAttribute('class', 'card')
        console.log(card)
        cardContainer.appendChild(card);
    }
}
