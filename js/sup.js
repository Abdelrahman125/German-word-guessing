const keys = [
 'krimi ',  //1
'joggingganzug',  //2
'Apfelkuchen' , //3
'badeazug', //4
'skianzug' , //5
'freizeit-Terror' , //6
'Hund' , //7
'wert', //8
'Freizeit stress',//9
'Großeinkauf', //10
'Stress', //11 
'Ski', //12
'mittagessen', //13 
'abendessen', //14
'kino', //15
'fitness-studio', //16
'Generalkonsulat ', //17
'schiff ', //18
'stadtzentrum', //18
'gewitter',//19
'internet', //20
'ding', //21
'geld', //22
'Uhr,en' , //104
'Woche,n' , //105
'Hausaufgabe,n' , //106
'Glaskuppel,n' , //107
'Stadtrundfahrt,..en' , //108
'Erwachsene,n' , //109
'Tour, en' , //110
'Arztpraxis, (praxen' , //111
'Geschäftszeit,en' , //112
'Nachricht,en' , //113
'Öffnungszeit,en' , //114
'Vorliebe,n' , //115
'Jugendherberge,n' , //116
'Karte,n' , //117
'Reise,n' , //118
'Tasche,n' , //119
'Anzeige,n' , //120
];
const values = [
 'فيلم بلوسي'  , //1
'بدله رياضيه ' , //2
'كيكه تفاح' ,//3
'بدله سباحه ' ,//4
'بدله التزحلق' ,//5
'رعب ترفيهي ',//6 
'كلب' ,//7
'القيمه',//8
'ضغط وقت الفراغ',//9
'تسوق بكميات كبيره' ,//10
'ضغط' ,//11 
'زلاجه التزحلق' ,//12
'الغذاء' ,
'عشاء' ,
'سينما' ,
'صاله لياقه بدنيه' ,
'القنصليه العامه' ,
'سفينه',
'مركز مدينه' ,
'عاصفه رعديه' ,
'شبكه انترنت' ,
'شئ ما',
'نقود ',
 'ساعة' , //104
'اسبوع' , //105
'واجب' , //106
'القبة الزجاجية' , //107
'جولة حول المدينة' , //108
'بالغة' , //109
'جولة' , //110
'عيادة الطبيب' , //111
'وقت العمل' , //112
'رسالة - خبر' , //113
'أوقات العمل' , //114
'الميل - الميول' , //115
'بيت الشباب' , //116
'تذكرة' , //117
'رحلة' , //118
'شنطة' , //119
'إعلان في جريدة' , //120
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
