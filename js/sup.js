const keys = [
   
];
const values = [
     
];

let randomIndex, correctOption;

function generateQuestion() {
  randomIndex = Math.floor(Math.random() * keys.length);
  const key = keys[randomIndex];
  correctOption = values[randomIndex];

  document.getElementById('question').innerText = key;

  const options = [];
  while (options.length < 3) {
    const value = values[Math.floor(Math.random() * values.length)];
    if (!options.includes(value)) {
      options.push(value);
    }
  }
  options.splice(Math.floor(Math.random() * options.length), 0, correctOption);

  document.getElementById('options').innerHTML = options.map(option => `
    <div class="option">${option}</div>
  `).join('');

  document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
      if (option.innerText === correctOption) {
        document.getElementById('message').innerText = 'Correct!';
        document.getElementById('nextBtn').style.display = 'block';
        document.getElementById('tryAgainBtn').style.display = 'none';
      } else {
        document.getElementById('message').innerText = `No, the correct answer is ${correctOption}`;
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('tryAgainBtn').style.display = 'block';
      }
    });
  });

  document.getElementById('message').innerText = '';
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('tryAgainBtn').style.display = 'none';
}

document.getElementById('nextBtn').addEventListener('click', generateQuestion);
document.getElementById('tryAgainBtn').addEventListener('click', generateQuestion);

generateQuestion();
