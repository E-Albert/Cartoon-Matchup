

//DOM elements
let form = document.querySelector('#form');
let cardContainer = document.querySelector('#card-container');
let openingPage = document.querySelector('#opening-page')

// global variables
let show;
let mode; 

//event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault()

    show = document.querySelector('#show').value
    mode = document.querySelector('#mode').value

    console.log('Show: ' + show)
    console.log('Mode: ' + mode)
    console.log('Form button is responding')

    form.classList.toggle('active')
    populateGrid(show, mode)
})

function populateGrid(show, mode) {
    if (show === 'powerpuff') {

        for (i = 0; i < cards.length; i++) {

            const card = document.createElement("img");
            card.setAttribute("src", `assets/cards/${i+1}.svg`);
            card.setAttribute('class', 'card')
            console.log(card)
            cardContainer.appendChild(card);
        }
        
    }
}