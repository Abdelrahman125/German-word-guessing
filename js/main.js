const keys = [
    'Der Abend', //1
    'Der Angestelle', //2
    'Der Anzug',   //3
    'Der Apfel',  //4
    'Der Arbeiter',  //5
    'Der Architekt',  //6 
    'Der Artikel',  //7
    'Der Arzt' , //8
    'Der Ausflug', //9
    'Der Ausweis', //10
    'Der Automat' , //11
    'Der Badeanzug' , //12
    'Der Banhof', //13
    'Der Balkon' , //14
    'Der Berg', //15
    'Der Beruf', //16
    'Der Buchstape', //17
    'Der cent' , //18
    'Der computer', //19
    'Der Dienstag', //20
    'Der Dom', //21
    'Der Donnerstag', //22
    'Der Einkauf', //23
    'Der Erdapfel', //24
    'Der Anrufbeanworter', //25
    'Der Apparat' , //26
    'Der Bliesstift' , //27
    'Der Chef' , //28
    'Der Absender', //29
    'Der Anruf', //30
    'Der Bauch', //31
    'Der Betreff', //32
    'Der Breif', //33
    'Der Elan', //34
    'Der Empfanger', //35
    'Der Frisor', //36
    'Der Hals', //37
    'Der Husten', //38
    'Der kanadier', //39
    'Der kontakt', //40
    'Der kopf', //41
    'Der korperteil', //42
    'Der Mensch', //43
    'Der Mund', //44
    'Der Termin', //45
    'Der zahn', //46
    'Der Unfall', //47
    'Der Schmerz', //48
    'Das Angebot', //49
    'Das Auge', //50
    'Das Befinden', //51
    'Das Bein', //52
    'Das Buro', //53
    'Das Datum', //54
    'Das Fieber', //55
    'Das gesichht', //56
    'Das haar', //57
    'Das krafttraining', //58
    'Das Lach-Yoga', //59
    'Das Lachen', //60
    'Das Medikament', //61
    'Das Monster', //62
    'Das Ohr', //63
    'Das Quellwasser', //64
    'Das Rieten', //65
    'Das Rieterhof', //66
    'Das Rezept', //67
    'Das Thermalbad', //68
    'Das Tier', //69
    'Das Wartzimmer', //70
    'Das Wellnes', //71
    'Das zimmer', //72
    'absagen', //73
    'schmecken', //74
    'Rauchen', //75
    'Spazieren gehen', //76
    'Die Nase', //77
    'Die Vereinbarung' , //78
    'Die Verletzung', //79
    'Die Zeitschrift', //80
    'Die schlafstorung', //81
    'Die Blume' , //82
    'Die Sehenswürdigkiet', //83
    'lust', //84
    'traumen', //85
    'past nicth' , //86
    'Der Ehemann', //87
    'Der Optiker', //88
    'Der Ober', //89
    'Der Laden', //90
    'Der Weg', //91
    'Der Verein', //92
    'Der Baum', //93
    'Der Notfall', //94
    'Das Feuer' , //95
    'Das Erdgeschoss' , //96
    'Das Silvester' , //97
    'Das Geschenk' , //98
    'Das Obergschoss', //99
    'Das Fundburo' , //100
    'Das Schloss', //101
    'Das Ostern', //102
    'Das Handy' , //103
    'Das Getränk' //104
];
const values = [
     'المساء', //1
     'موظف', //2
     'بدلة', //3 
     'تفاحة', //4
     'عامل', //5
     'مهندس معماري',  //6
     'أداة', //7
     'طبيب',  //8
     'رحلة', //9
     'بطاقة', //10
     'ماكينة', //11
     'مايوه', //12
     'محطة', //13
     'بلكونة', //14
     'جبل', //15
     'مهنة', //16
     'حرف', //17
     'سنت', //18
     'كومبيوتر', //19
     'الثلاثاء', //20
     'كنيسة', //21
     'الخميس', //22
     'التسوق', //23
     'بطاطس', //24
     'جهاز المجيب الالي' , //25
     'جهاز', //26
     'قلم رصاص' , //27
     'المدير' , //28
     'الراسل', //29
     'مكالمة هاتفية', //30
     'بطن', //31
     'الموضوع', //32
     'خطاب', //33
     'الحيوية', //34
     'المرسل اليه', //35
     'كوافير', //36
     'زور', //37
     'كحة', //38
     'كندي', //39
     'اتصال', //40
     'رأس', //41
     'عضو في الجسم', //42
     'انسان', //43
     'الفم', //44
     'موعد', //45
     'سن', //46
     'حادثة', //47
     'ألم', //48
     'عرض', //49
     'عين', //50
     'الصحة', //51
     'ساق', //52
     'مكتب', //53
     'تاريخ', //54
     'حمي', //55
     'وجه', //56
     'شعر', //57
     'تدريب القوة', //58
     'يوجا الضحك', //59
     'الضحك', //60
     'دواء', //61
     'وحش', //62
     'أذن', //63
     'ماء البئر', //64
     'فروسية', //65
     'ساحة ركوب خيل', //66
     'روشتة', //67
     'الحمام الحراري', //68
     'حيوان', //69
     'غرفة الانتظار', //70
     'منتجع', //71
     'غرفة', //72
     'يلغي او يرفض', //73
     'يعطي مذاق', //74
     'يدخن' , //75
     'يتنزه', //76
     'الانف', //77
     'اتفاق', //78
     'اصابة', //79
     'مجلة',//80
     'أرق', //81
     'زهرة', //82   
      'مزار سياحي', //83
    'رغبة / متعة' , //84
    'يحلم', //85
    'مش مناسب', //86
    'زوج', //87
    'بتاع النظارات', //88
    'جرسون', //89
    'محل' , //90
    'طريق',//91
    'اتحاد',//92
    'شجرة',//93
    'حالة طوارئ',//94
    'نار',//95
    'الدور الارضي' , //96
    'ليلة رأس السنة', //97
    'هدية',//98
    'الطابق العلوي', //99
    'مكتب المفقودات' , //100
    'قفل او قصر', //101
    'شم النسيم', //102
    'هاتف محمول', //103
    'مشروب', //104
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
