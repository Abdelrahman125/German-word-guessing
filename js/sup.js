const keys = [
   'krimi ' //1
'joggingganzug' //2
'Apfelkuchen'  //3
'badeazug' //4
'skianzug' //5
'freizeit-Terror' //6
'Hund' //7
'wert' //8
'Freizeit stress'//9
'Großeinkauf' //10
'Stress' //11 
'Ski' //12
'mittagessen'//13 
'abendessen' //14
'kino'//15
'fitness-studio'//16
'Generalkonsulat ', //17
'schiff ', //18
'stadtzentrum', //18
'gewitter',//19
'internet', //20
'ding', //21
'geld', //22
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
