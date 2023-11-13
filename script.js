//DOM elements

let form = document.querySelector('#form');
let cardContainer = document.querySelector('#card-container');
let openingPage = document.querySelector('#opening-page')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    let show = document.querySelector('#show').value
    let mode = document.querySelector('#mode').value
    console.log('Show: ' + show)
    console.log('Mode: ' + mode)
    console.log('Form button is responding')

    
})
