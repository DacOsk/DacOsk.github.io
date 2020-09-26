const submitForm = document.querySelector('#form');
const username = document.querySelector('#username');
const saveBtn = document.querySelector('#save-score-btn');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.querySelector('#final-score');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;
saveBtn.disabled = true;

username.addEventListener('keyup', () => {
  saveBtn.disabled = !username.value;
});

submitForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

saveBtn.addEventListener('click', () => {
  const score = {
    score: mostRecentScore,
    name: username.value
  }
  
  highScores.push(score);
  highScores.sort( (a,b) => b.score - a.score);
  highScores.splice(MAX_HIGH_SCORES);
  
  saveBtn.disabled = true;
  username.disabled = true;
  
  localStorage.setItem('highScores', JSON.stringify(highScores));
  window.location.assign('index.html');
});
