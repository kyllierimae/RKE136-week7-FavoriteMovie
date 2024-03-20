const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document. querySelector('.button')
const movieTitleToDisplay = document. querySelector('.favoriteMovieTitle');
const movieReleaseYearToDisplay = document.querySelector('.movieReleaseYear');

const releaseYear = document.querySelector('.userInputYear');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let releaseYearInStorage = localStorage.getItem('year');



if(titleInStorage && imageUrlInStorage && releaseYearInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    movieReleaseYearToDisplay.textContent = releaseYearInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(177, 177, 238, 0.521), rgba(141, 91, 91, 0.432)), 
    url('${imageUrlInStorage}')`
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let releaseYearInput = releaseYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year', releaseYearInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    movieReleaseYearToDisplay.textContent = releaseYearInput;
    container.style.backgroundImage = `linear-gradient(rgba(177, 177, 238, 0.521), rgba(141, 91, 91, 0.432)),
    url('${posterUrlInput }')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    releaseYear.value = '';
});



