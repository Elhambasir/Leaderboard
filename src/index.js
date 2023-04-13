import './style.css';
import Ranks from '../modules/refresh.js';

const rankRefreshButton = document.querySelector('.refresh');
const userFormInput = document.querySelector('.formInput');

rankRefreshButton.addEventListener('click', Ranks.displayRanks);

userFormInput.addEventListener('submit', (e) => {
  e.preventDefault();
  const gameUser = document.getElementById('name').value;
  const gameUserScore = document.getElementById('score').value;

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/knTJZuTqnS5CkT6fKiMm/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: gameUser,
      score: gameUserScore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw new Error(`HTTP error! status: ${error}`);
    });

  userFormInput.reset();
});
window.onload = Ranks.displayRanks;