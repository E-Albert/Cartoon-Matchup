

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

})

function populateGrid(show, mode) {
    if (show === 'powerpuff') {
        let card = document.createElement('div')
        
    }
}