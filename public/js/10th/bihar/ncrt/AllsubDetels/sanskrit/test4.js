
const questions =[
    {
      "num": 1,
      "question_en": "What is the meaning of 'सूर्य'?",
      "question_hi": "'सूर्य' का अर्थ क्या है?",
      "options_en": ["sun", "moon", "star", "planet"],
      "options_hi": ["सूर्य", "चन्द्रमा", "तारा", "ग्रह"],
      "answer_en": "sun",
      "answer_hi": "सूर्य",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "What is the meaning of 'चन्द्रमा'?",
      "question_hi": "'चन्द्रमा' का अर्थ क्या है?",
      "options_en": ["moon", "sun", "earth", "star"],
      "options_hi": ["चन्द्रमा", "सूर्य", "पृथ्वी", "तारा"],
      "answer_en": "moon",
      "answer_hi": "चन्द्रमा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "What is the meaning of 'धर्म'?",
      "question_hi": "'धर्म' का अर्थ क्या है?",
      "options_en": ["religion", "duty", "virtue", "all of the above"],
      "options_hi": ["धर्म", "कर्तव्य", "सद्गुण", "उपरोक्त सभी"],
      "answer_en": "all of the above",
      "answer_hi": "उपरोक्त सभी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "What is the meaning of 'पृथ्वी'?",
      "question_hi": "'पृथ्वी' का अर्थ क्या है?",
      "options_en": ["earth", "sun", "moon", "star"],
      "options_hi": ["पृथ्वी", "सूर्य", "चन्द्रमा", "तारा"],
      "answer_en": "earth",
      "answer_hi": "पृथ्वी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "What is the meaning of 'युद्ध'?",
      "question_hi": "'युद्ध' का अर्थ क्या है?",
      "options_en": ["war", "peace", "battle", "fight"],
      "options_hi": ["युद्ध", "शांति", "संघर्ष", "लड़ाई"],
      "answer_en": "war",
      "answer_hi": "युद्ध",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "What is the meaning of 'गगन'?",
      "question_hi": "'गगन' का अर्थ क्या है?",
      "options_en": ["sky", "earth", "sea", "mountain"],
      "options_hi": ["गगन", "पृथ्वी", "समुद्र", "पहाड़"],
      "answer_en": "sky",
      "answer_hi": "आसमान",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "What is the meaning of 'नदी'?",
      "question_hi": "'नदी' का अर्थ क्या है?",
      "options_en": ["river", "sea", "ocean", "lake"],
      "options_hi": ["नदी", "समुद्र", "महासागर", "झील"],
      "answer_en": "river",
      "answer_hi": "नदी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "What is the meaning of 'शरीर'?",
      "question_hi": "'शरीर' का अर्थ क्या है?",
      "options_en": ["body", "mind", "soul", "heart"],
      "options_hi": ["शरीर", "मन", "आत्मा", "हृदय"],
      "answer_en": "body",
      "answer_hi": "शरीर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "What is the meaning of 'आत्मा'?",
      "question_hi": "'आत्मा' का अर्थ क्या है?",
      "options_en": ["soul", "body", "mind", "heart"],
      "options_hi": ["आत्मा", "शरीर", "मन", "हृदय"],
      "answer_en": "soul",
      "answer_hi": "आत्मा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "What is the meaning of 'ब्रह्मा'?",
      "question_hi": "'ब्रह्मा' का अर्थ क्या है?",
      "options_en": ["creator", "destroyer", "preserver", "none of these"],
      "options_hi": ["ब्रह्मा", "सृजनकर्ता", "विनाशक", "संरक्षक", "इनमें से कोई नहीं"],
      "answer_en": "creator",
      "answer_hi": "सृजनकर्ता",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "What is the meaning of 'विष्णु'?",
      "question_hi": "'विष्णु' का अर्थ क्या है?",
      "options_en": ["preserver", "destroyer", "creator", "none of these"],
      "options_hi": ["विष्णु", "संरक्षक", "विनाशक", "सृजनकर्ता", "इनमें से कोई नहीं"],
      "answer_en": "preserver",
      "answer_hi": "संरक्षक",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "What is the meaning of 'शिव'?",
      "question_hi": "'शिव' का अर्थ क्या है?",
      "options_en": ["destroyer", "preserver", "creator", "none of these"],
      "options_hi": ["शिव", "विनाशक", "संरक्षक", "सृजनकर्ता", "इनमें से कोई नहीं"],
      "answer_en": "destroyer",
      "answer_hi": "विनाशक",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "What is the meaning of 'गायत्री'?",
      "question_hi": "'गायत्री' का अर्थ क्या है?",
      "options_en": ["hymn", "chant", "mantra", "all of the above"],
      "options_hi": ["गायत्री", "गीत", "मंत्र", "उपरोक्त सभी"],
      "answer_en": "mantra",
      "answer_hi": "मंत्र",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "What is the meaning of 'वीर'?",
      "question_hi": "'वीर' का अर्थ क्या है?",
      "options_en": ["brave", "wise", "foolish", "strong"],
      "options_hi": ["वीर", "साहसी", "बुद्धिमान", "मूर्ख", "शक्तिशाली"],
      "answer_en": "brave",
      "answer_hi": "साहसी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "What is the meaning of 'ध्यान'?",
      "question_hi": "'ध्यान' का अर्थ क्या है?",
      "options_en": ["meditation", "worship", "knowledge", "teaching"],
      "options_hi": ["ध्यान", "पूजा", "ज्ञान", "शिक्षा"],
      "answer_en": "meditation",
      "answer_hi": "ध्यान",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "What is the meaning of 'शांति'?",
      "question_hi": "'शांति' का अर्थ क्या है?",
      "options_en": ["peace", "war", "battle", "struggle"],
      "options_hi": ["शांति", "युद्ध", "संघर्ष", "लड़ाई"],
      "answer_en": "peace",
      "answer_hi": "शांति",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "What is the meaning of 'सुर'?",
      "question_hi": "'सुर' का अर्थ क्या है?",
      "options_en": ["god", "music", "deity", "none of these"],
      "options_hi": ["सुर", "ईश्वर", "संगीत", "देवता", "इनमें से कोई नहीं"],
      "answer_en": "music",
      "answer_hi": "संगीत",
      "attempted": false,
      "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the meaning of 'नायक'?",
        "question_hi": "'नायक' का अर्थ क्या है?",
        "options_en": ["hero", "leader", "brave", "none of these"],
        "options_hi": ["नायक", "नेता", "साहसी", "इनमें से कोई नहीं"],
        "answer_en": "hero",
        "answer_hi": "नायक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "What is the meaning of 'रात्रि'?",
        "question_hi": "'रात्रि' का अर्थ क्या है?",
        "options_en": ["night", "day", "evening", "morning"],
        "options_hi": ["रात्रि", "दिन", "सांझ", "सुबह"],
        "answer_en": "night",
        "answer_hi": "रात्रि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "What is the meaning of 'प्रेम'?",
        "question_hi": "'प्रेम' का अर्थ क्या है?",
        "options_en": ["love", "hate", "anger", "joy"],
        "options_hi": ["प्रेम", "घृणा", "क्रोध", "आनंद"],
        "answer_en": "love",
        "answer_hi": "प्रेम",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "What is the meaning of 'तत'?",
        "question_hi": "'तत' का अर्थ क्या है?",
        "options_en": ["that", "this", "there", "here"],
        "options_hi": ["तत", "यह", "वहां", "यहां"],
        "answer_en": "that",
        "answer_hi": "वह",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "What is the meaning of 'स्वागत'?",
        "question_hi": "'स्वागत' का अर्थ क्या है?",
        "options_en": ["welcome", "goodbye", "congratulation", "none of these"],
        "options_hi": ["स्वागत", "अलविदा", "बधाई", "इनमें से कोई नहीं"],
        "answer_en": "welcome",
        "answer_hi": "स्वागत",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "What is the meaning of 'सहस्त्र'?",
        "question_hi": "'सहस्त्र' का अर्थ क्या है?",
        "options_en": ["thousand", "hundred", "million", "billion"],
        "options_hi": ["सहस्त्र", "सौ", "लाख", "अरब"],
        "answer_en": "thousand",
        "answer_hi": "सहस्त्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "What is the meaning of 'ध्यान'?",
        "question_hi": "'ध्यान' का अर्थ क्या है?",
        "options_en": ["meditation", "study", "worship", "all of the above"],
        "options_hi": ["ध्यान", "अध्यान", "पूजा", "उपरोक्त सभी"],
        "answer_en": "meditation",
        "answer_hi": "ध्यान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "What is the meaning of 'नमः'?",
        "question_hi": "'नमः' का अर्थ क्या है?",
        "options_en": ["salutation", "prayer", "offering", "none of these"],
        "options_hi": ["नमः", "प्रार्थना", "अर्पण", "इनमें से कोई नहीं"],
        "answer_en": "salutation",
        "answer_hi": "नमः",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "What is the meaning of 'वन्दन'?",
        "question_hi": "'वन्दन' का अर्थ क्या है?",
        "options_en": ["worship", "salutation", "respect", "love"],
        "options_hi": ["वन्दन", "पूजा", "सम्मान", "प्रेम"],
        "answer_en": "worship",
        "answer_hi": "पूजा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "What is the meaning of 'गायन'?",
        "question_hi": "'गायन' का अर्थ क्या है?",
        "options_en": ["singing", "dancing", "reading", "writing"],
        "options_hi": ["गायन", "नृत्य", "पढ़ाई", "लिखना"],
        "answer_en": "singing",
        "answer_hi": "गायन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "What is the meaning of 'आशीर्वाद'?",
        "question_hi": "'आशीर्वाद' का अर्थ क्या है?",
        "options_en": ["blessing", "curse", "happiness", "none of these"],
        "options_hi": ["आशीर्वाद", "शाप", "खुशी", "इनमें से कोई नहीं"],
        "answer_en": "blessing",
        "answer_hi": "आशीर्वाद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "What is the meaning of 'ऋतु'?",
        "question_hi": "'ऋतु' का अर्थ क्या है?",
        "options_en": ["season", "time", "month", "day"],
        "options_hi": ["ऋतु", "समय", "महीना", "दिन"],
        "answer_en": "season",
        "answer_hi": "ऋतु",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "What is the meaning of 'नय'?",
        "question_hi": "'नय' का अर्थ क्या है?",
        "options_en": ["path", "way", "lead", "method"],
        "options_hi": ["नय", "मार्ग", "रास्ता", "विधि"],
        "answer_en": "path",
        "answer_hi": "मार्ग",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "What is the meaning of 'साक्षात'?",
        "question_hi": "'साक्षात' का अर्थ क्या है?",
        "options_en": ["direct", "indirect", "meeting", "none of these"],
        "options_hi": ["साक्षात", "परोक्ष", "मुलाकात", "इनमें से कोई नहीं"],
        "answer_en": "direct",
        "answer_hi": "सीधा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "What is the meaning of 'प्रकाश'?",
        "question_hi": "'प्रकाश' का अर्थ क्या है?",
        "options_en": ["light", "darkness", "sound", "smell"],
        "options_hi": ["प्रकाश", "अंधकार", "ध्वनि", "गंध"],
        "answer_en": "light",
        "answer_hi": "प्रकाश",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "What is the meaning of 'उदाहरण'?",
        "question_hi": "'उदाहरण' का अर्थ क्या है?",
        "options_en": ["example", "sentence", "question", "none of these"],
        "options_hi": ["उदाहरण", "वाक्य", "प्रश्न", "इनमें से कोई नहीं"],
        "answer_en": "example",
        "answer_hi": "उदाहरण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "What is the meaning of 'शब्द'?",
        "question_hi": "'शब्द' का अर्थ क्या है?",
        "options_en": ["word", "sentence", "letter", "sound"],
        "options_hi": ["शब्द", "वाक्य", "अक्षर", "ध्वनि"],
        "answer_en": "word",
        "answer_hi": "शब्द",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "What is the meaning of 'धर्म'?",
        "question_hi": "'धर्म' का अर्थ क्या है?",
        "options_en": ["duty", "religion", "truth", "knowledge"],
        "options_hi": ["धर्म", "धर्म", "सत्य", "ज्ञान"],
        "answer_en": "religion",
        "answer_hi": "धर्म",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "What is the plural form of 'पुत्रः'?",
        "question_hi": "'पुत्रः' का बहुवचन रूप क्या है?",
        "options_en": ["Putraah", "Putre", "Putram", "Putraih"],
        "options_hi": ["पुत्राः", "पुत्रे", "पुत्रम्", "पुत्रैः"],
        "answer_en": "Putraah",
        "answer_hi": "पुत्राः",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "Which is the correct verb form for 'they go'?",
        "question_hi": "'वे जाते हैं' के लिए सही क्रिया रूप क्या है?",
        "options_en": ["Gachhanti", "Gachhati", "Gachhasi", "Gachhami"],
        "options_hi": ["गच्छन्ति", "गच्छति", "गच्छसि", "गच्छामि"],
        "answer_en": "Gachhanti",
        "answer_hi": "गच्छन्ति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "What is the meaning of 'शान्तिः'?",
        "question_hi": "'शान्तिः' का अर्थ क्या है?",
        "options_en": ["Peace", "Light", "Truth", "Power"],
        "options_hi": ["शांति", "प्रकाश", "सत्य", "शक्ति"],
        "answer_en": "Peace",
        "answer_hi": "शांति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Which of the following is feminine gender?",
        "question_hi": "निम्नलिखित में से कौन-सा शब्द स्त्रीलिंग है?",
        "options_en": ["Nadi", "Gajah", "Putrah", "Raja"],
        "options_hi": ["नदी", "गजः", "पुत्रः", "राजा"],
        "answer_en": "Nadi",
        "answer_hi": "नदी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "Choose the synonym of 'सत्य'.",
        "question_hi": "'सत्य' का पर्यायवाची शब्द चुनिए।",
        "options_en": ["Asatya", "Tathya", "Katha", "Swapna"],
        "options_hi": ["असत्य", "तथ्य", "कथा", "स्वप्न"],
        "answer_en": "Tathya",
        "answer_hi": "तथ्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "What is the meaning of 'गुरु'?",
        "question_hi": "'गुरु' का अर्थ क्या है?",
        "options_en": ["Teacher", "Friend", "Father", "Leader"],
        "options_hi": ["शिक्षक", "मित्र", "पिता", "नेता"],
        "answer_en": "Teacher",
        "answer_hi": "शिक्षक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "What is the accusative singular form of 'राम'?",
        "question_hi": "'राम' का कर्म कारक एकवचन रूप क्या है?",
        "options_en": ["Ramam", "Ramah", "Rame", "Ramau"],
        "options_hi": ["रामम्", "रामः", "रामे", "रामौ"],
        "answer_en": "Ramam",
        "answer_hi": "रामम्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "What is the meaning of 'प्रकाशः'?",
        "question_hi": "'प्रकाशः' का अर्थ क्या है?",
        "options_en": ["Light", "Darkness", "Sound", "Air"],
        "options_hi": ["प्रकाश", "अंधकार", "ध्वनि", "वायु"],
        "answer_en": "Light",
        "answer_hi": "प्रकाश",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "What is the correct sandhi of 'सूर्य + उदय'?",
        "question_hi": "'सूर्य + उदय' का सही सन्धि रूप क्या है?",
        "options_en": ["Suryoday", "Suryuday", "Suryaday", "Surauday"],
        "options_hi": ["सूर्योदय", "सूर्युदय", "सूर्यदय", "सुरऔदय"],
        "answer_en": "Suryoday",
        "answer_hi": "सूर्योदय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "What is the meaning of 'मित्रम्'?",
        "question_hi": "'मित्रम्' का अर्थ क्या है?",
        "options_en": ["Friend", "Enemy", "Teacher", "Child"],
        "options_hi": ["मित्र", "शत्रु", "गुरु", "बालक"],
        "answer_en": "Friend",
        "answer_hi": "मित्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "What is the feminine form of 'गुरु'?",
        "question_hi": "'गुरु' का स्त्रीलिंग रूप क्या है?",
        "options_en": ["Gurvi", "Gurvah", "Gurya", "Gurta"],
        "options_hi": ["गुर्वी", "गुर्वः", "गुर्या", "गुर्ता"],
        "answer_en": "Gurvi",
        "answer_hi": "गुर्वी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Which case is used for the subject in Sanskrit?",
        "question_hi": "संस्कृत में कर्ता के लिए कौन-सा विभक्ति प्रयोग होता है?",
        "options_en": ["Nominative", "Accusative", "Instrumental", "Dative"],
        "options_hi": ["प्रथमा", "द्वितीया", "तृतीया", "चतुर्थी"],
        "answer_en": "Nominative",
        "answer_hi": "प्रथमा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "What is the meaning of 'जलम्'?",
        "question_hi": "'जलम्' का अर्थ क्या है?",
        "options_en": ["Water", "Fire", "Air", "Earth"],
        "options_hi": ["जल", "अग्नि", "वायु", "पृथ्वी"],
        "answer_en": "Water",
        "answer_hi": "जल",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "Which one is a neuter gender word?",
        "question_hi": "निम्नलिखित में से कौन-सा शब्द नपुंसकलिंग है?",
        "options_en": ["Phalam", "Ramah", "Sita", "Gajah"],
        "options_hi": ["फलम्", "रामः", "सीता", "गजः"],
        "answer_en": "Phalam",
        "answer_hi": "फलम्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "Which is the correct plural form of 'फलम्'?",
        "question_hi": "'फलम्' का सही बहुवचन रूप क्या है?",
        "options_en": ["Phalani", "Phalam", "Phalah", "Phale"],
        "options_hi": ["फलानि", "फलम्", "फलः", "फले"],
        "answer_en": "Phalani",
        "answer_hi": "फलानि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 51,
        "question_en": "What is the meaning of 'विद्या'?",
        "question_hi": "'विद्या' का अर्थ क्या है?",
        "options_en": ["Knowledge", "Discipline", "Strength", "Courage"],
        "options_hi": ["ज्ञान", "अनुशासन", "शक्ति", "साहस"],
        "answer_en": "Knowledge",
        "answer_hi": "ज्ञान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 52,
        "question_en": "Choose the correct form of verb for 'I eat' in Sanskrit.",
        "question_hi": "'मैं खाता हूँ' के लिए संस्कृत में सही क्रिया रूप चुनिए।",
        "options_en": ["Khadaami", "Khadaasi", "Khadaati", "Khadanti"],
        "options_hi": ["खादामि", "खादासि", "खादति", "खादन्ति"],
        "answer_en": "Khadaami",
        "answer_hi": "खादामि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 53,
        "question_en": "What is the meaning of 'सूर्यः'?",
        "question_hi": "'सूर्यः' का अर्थ क्या है?",
        "options_en": ["Sun", "Moon", "Star", "Sky"],
        "options_hi": ["सूर्य", "चन्द्र", "तारा", "आकाश"],
        "answer_en": "Sun",
        "answer_hi": "सूर्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 54,
        "question_en": "Identify the correct form of 'राम' in instrumental case singular.",
        "question_hi": "'राम' का तृतीया विभक्ति एकवचन रूप क्या है?",
        "options_en": ["Ramena", "Ramah", "Ramam", "Ramaya"],
        "options_hi": ["रामेण", "रामः", "रामम्", "रामया"],
        "answer_en": "Ramena",
        "answer_hi": "रामेण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 55,
        "question_en": "Which is the correct dual form of 'पुत्रः'?",
        "question_hi": "'पुत्रः' का द्विवचन रूप क्या है?",
        "options_en": ["Putrau", "Putraah", "Putram", "Putren"],
        "options_hi": ["पुत्रौ", "पुत्राः", "पुत्रम्", "पुत्रेण"],
        "answer_en": "Putrau",
        "answer_hi": "पुत्रौ",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 56,
        "question_en": "Which is the meaning of 'शब्दः'?",
        "question_hi": "'शब्दः' का अर्थ क्या है?",
        "options_en": ["Sound", "Sense", "Song", "Word"],
        "options_hi": ["ध्वनि", "भाव", "गीत", "शब्द"],
        "answer_en": "Sound",
        "answer_hi": "ध्वनि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 57,
        "question_en": "Which one is the locative case singular of 'गृह'?",
        "question_hi": "'गृह' का सप्तमी एकवचन रूप क्या है?",
        "options_en": ["Gruhe", "Gruham", "Gruhena", "Gruhaya"],
        "options_hi": ["गृहे", "गृहम्", "गृहेण", "गृहाय"],
        "answer_en": "Gruhe",
        "answer_hi": "गृहे",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 58,
        "question_en": "What is the meaning of 'वनम्'?",
        "question_hi": "'वनम्' का अर्थ क्या है?",
        "options_en": ["Forest", "River", "Village", "Garden"],
        "options_hi": ["वन", "नदी", "गांव", "उद्यान"],
        "answer_en": "Forest",
        "answer_hi": "वन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 59,
        "question_en": "Which is the correct verb form for 'they read'?",
        "question_hi": "'वे पढ़ते हैं' के लिए सही क्रिया रूप क्या है?",
        "options_en": ["Pathanti", "Pathati", "Pathami", "Pathasi"],
        "options_hi": ["पठन्ति", "पठति", "पठामि", "पठसि"],
        "answer_en": "Pathanti",
        "answer_hi": "पठन्ति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 60,
        "question_en": "Which word means 'mother' in Sanskrit?",
        "question_hi": "संस्कृत में 'माँ' के लिए कौन-सा शब्द प्रयोग होता है?",
        "options_en": ["Mata", "Pita", "Bhrata", "Guru"],
        "options_hi": ["माता", "पिता", "भ्राता", "गुरु"],
        "answer_en": "Mata",
        "answer_hi": "माता",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 61,
        "question_en": "What is the meaning of 'शान्तिः'?",
        "question_hi": "'शान्तिः' का अर्थ क्या है?",
        "options_en": ["Peace", "Power", "Light", "Respect"],
        "options_hi": ["शांति", "शक्ति", "प्रकाश", "सम्मान"],
        "answer_en": "Peace",
        "answer_hi": "शांति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 62,
        "question_en": "What is the dual form of 'गुरु'?",
        "question_hi": "'गुरु' का द्विवचन रूप क्या है?",
        "options_en": ["Gurvau", "Gurah", "Guram", "Guren"],
        "options_hi": ["गुरू", "गुराः", "गुरम्", "गुरेण"],
        "answer_en": "Gurvau",
        "answer_hi": "गुरू",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 63,
        "question_en": "Choose the correct accusative plural of 'फलम्'.",
        "question_hi": "'फलम्' का द्वितीया बहुवचन रूप चुनिए।",
        "options_en": ["Phalani", "Phalah", "Phale", "Phalai"],
        "options_hi": ["फलानि", "फलः", "फले", "फलै"],
        "answer_en": "Phalani",
        "answer_hi": "फलानि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 64,
        "question_en": "What is the correct form for 'with Rama'?",
        "question_hi": "'राम के साथ' के लिए सही संस्कृत रूप क्या है?",
        "options_en": ["Ramena", "Ramaya", "Ramah", "Ramasya"],
        "options_hi": ["रामेण", "रामया", "रामः", "रामस्य"],
        "answer_en": "Ramena",
        "answer_hi": "रामेण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 65,
        "question_en": "What is the Sanskrit word for 'cow'?",
        "question_hi": "'गाय' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Go", "Gajah", "Ashvah", "Vruksha"],
        "options_hi": ["गौ", "गजः", "अश्वः", "वृक्षः"],
        "answer_en": "Go",
        "answer_hi": "गौ",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 66,
        "question_en": "Which verb form is used for 'He writes'?",
        "question_hi": "'वह लिखता है' के लिए कौन-सा क्रिया रूप है?",
        "options_en": ["Likhaati", "Likhati", "Likhaami", "Likhasi"],
        "options_hi": ["लिखाति", "लिखति", "लिखामि", "लिखसि"],
        "answer_en": "Likhati",
        "answer_hi": "लिखति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 67,
        "question_en": "What is the meaning of 'नदी'?",
        "question_hi": "'नदी' का अर्थ क्या है?",
        "options_en": ["River", "Mountain", "Ocean", "Stream"],
        "options_hi": ["नदी", "पर्वत", "समुद्र", "धारा"],
        "answer_en": "River",
        "answer_hi": "नदी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 68,
        "question_en": "Which one is the genitive singular of 'बालक'?",
        "question_hi": "'बालक' का षष्ठी एकवचन रूप क्या है?",
        "options_en": ["Bālakasya", "Bālakam", "Bālaken", "Bālakena"],
        "options_hi": ["बालकस्य", "बालकम्", "बालकें", "बालकेन"],
        "answer_en": "Bālakasya",
        "answer_hi": "बालकस्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 69,
        "question_en": "What is the Sanskrit word for 'book'?",
        "question_hi": "'पुस्तक' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Pustakam", "Patram", "Lekh", "Shabd"],
        "options_hi": ["पुस्तकम्", "पत्रम्", "लेखः", "शब्दः"],
        "answer_en": "Pustakam",
        "answer_hi": "पुस्तकम्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 70,
        "question_en": "Which is the correct form of verb for 'we go'?",
        "question_hi": "'हम जाते हैं' के लिए सही क्रिया रूप क्या है?",
        "options_en": ["Gacchāmah", "Gacchāsi", "Gacchati", "Gacchanti"],
        "options_hi": ["गच्छामः", "गच्छसि", "गच्छति", "गच्छन्ति"],
        "answer_en": "Gacchāmah",
        "answer_hi": "गच्छामः",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 71,
        "question_en": "What is the Sanskrit word for 'flower'?",
        "question_hi": "'फूल' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Pushpam", "Phalam", "Patram", "Vruksham"],
        "options_hi": ["पुष्पम्", "फलम्", "पत्रम्", "वृक्षम्"],
        "answer_en": "Pushpam",
        "answer_hi": "पुष्पम्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 72,
        "question_en": "Which word is masculine in gender?",
        "question_hi": "इनमें से कौन-सा शब्द पुल्लिंग है?",
        "options_en": ["Ramah", "Sitaa", "Phalam", "Jalam"],
        "options_hi": ["रामः", "सीता", "फलम्", "जलम्"],
        "answer_en": "Ramah",
        "answer_hi": "रामः",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 73,
        "question_en": "What is the meaning of 'गुरुः'?",
        "question_hi": "'गुरुः' का अर्थ क्या है?",
        "options_en": ["Teacher", "Friend", "King", "Student"],
        "options_hi": ["शिक्षक", "मित्र", "राजा", "विद्यार्थी"],
        "answer_en": "Teacher",
        "answer_hi": "शिक्षक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 74,
        "question_en": "What is the vocative form of 'सखा'?",
        "question_hi": "'सखा' का संबोधन रूप क्या है?",
        "options_en": ["Sakhe", "Sakhaya", "Sakham", "Sakhasya"],
        "options_hi": ["सखे", "सखाय", "सखम्", "सखस्य"],
        "answer_en": "Sakhe",
        "answer_hi": "सखे",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 75,
        "question_en": "Which is the correct plural form of 'बालिका'?",
        "question_hi": "'बालिका' का बहुवचन रूप क्या है?",
        "options_en": ["Bālikāḥ", "Bālikām", "Bālikau", "Bālikasya"],
        "options_hi": ["बालिकाः", "बालिकाम्", "बालिकौ", "बालिकस्य"],
        "answer_en": "Bālikāḥ",
        "answer_hi": "बालिकाः",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 76,
        "question_en": "Which of these is a feminine noun?",
        "question_hi": "निम्नलिखित में कौन-सा स्त्रीलिंग संज्ञा है?",
        "options_en": ["Sitaa", "Ramah", "Phalam", "Vanam"],
        "options_hi": ["सीता", "रामः", "फलम्", "वनम्"],
        "answer_en": "Sitaa",
        "answer_hi": "सीता",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 77,
        "question_en": "What is the correct form for 'to the boy'?",
        "question_hi": "'लड़के को' के लिए सही संस्कृत रूप क्या है?",
        "options_en": ["Bālakaaya", "Bālakam", "Bālakasya", "Bālaken"],
        "options_hi": ["बालकाय", "बालकम्", "बालकस्य", "बालकेन"],
        "answer_en": "Bālakaaya",
        "answer_hi": "बालकाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 78,
        "question_en": "What is the meaning of 'नेत्रम्'?",
        "question_hi": "'नेत्रम्' का अर्थ क्या है?",
        "options_en": ["Eye", "Nose", "Ear", "Hand"],
        "options_hi": ["नेत्र", "नाक", "कान", "हाथ"],
        "answer_en": "Eye",
        "answer_hi": "नेत्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 79,
        "question_en": "Which is the correct verb for 'you (singular) go'?",
        "question_hi": "'तुम जाते हो' के लिए सही क्रिया रूप क्या है?",
        "options_en": ["Gacchasi", "Gacchāmi", "Gacchati", "Gacchāmah"],
        "options_hi": ["गच्छसि", "गच्छामि", "गच्छति", "गच्छामः"],
        "answer_en": "Gacchasi",
        "answer_hi": "गच्छसि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 80,
        "question_en": "What is the Sanskrit word for 'mind'?",
        "question_hi": "'मन' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Manah", "Budhhi", "Chittam", "Atma"],
        "options_hi": ["मनः", "बुद्धि", "चित्तम्", "आत्मा"],
        "answer_en": "Manah",
        "answer_hi": "मनः",
        "attempted": false,
        "selected": ""
      }, {
        "num": 81,
        "question_en": "What is the meaning of 'विद्या'?",
        "question_hi": "'विद्या' का अर्थ क्या है?",
        "options_en": ["Knowledge", "Power", "Wealth", "Fame"],
        "options_hi": ["ज्ञान", "शक्ति", "धन", "यश"],
        "answer_en": "Knowledge",
        "answer_hi": "ज्ञान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 82,
        "question_en": "Which is the correct locative form of 'गृह'?",
        "question_hi": "'गृह' का सप्तमी एकवचन रूप क्या है?",
        "options_en": ["Gṛhe", "Gṛham", "Gṛhāt", "Gṛhasya"],
        "options_hi": ["गृहे", "गृहम्", "गृहात्", "गृहस्य"],
        "answer_en": "Gṛhe",
        "answer_hi": "गृहे",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 83,
        "question_en": "What is the Sanskrit word for 'friend' (masculine)?",
        "question_hi": "'मित्र' (पुल्लिंग) के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Sakhā", "Mitrī", "Bandhu", "Sakhi"],
        "options_hi": ["सखा", "मित्री", "बन्धु", "सखी"],
        "answer_en": "Sakhā",
        "answer_hi": "सखा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 84,
        "question_en": "Which one is in the instrumental case?",
        "question_hi": "इनमें से कौन-सा शब्द तृतीया विभक्ति में है?",
        "options_en": ["Rāmeṇa", "Rāmah", "Rāmam", "Rāmasya"],
        "options_hi": ["रामेण", "रामः", "रामम्", "रामस्य"],
        "answer_en": "Rāmeṇa",
        "answer_hi": "रामेण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 85,
        "question_en": "What is the correct verb form for 'They read'?",
        "question_hi": "'वे पढ़ते हैं' के लिए सही क्रिया रूप क्या है?",
        "options_en": ["Pathanti", "Pathasi", "Pathati", "Pathāmi"],
        "options_hi": ["पठन्ति", "पठसि", "पठति", "पठामि"],
        "answer_en": "Pathanti",
        "answer_hi": "पठन्ति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 86,
        "question_en": "What is the meaning of 'गजः'?",
        "question_hi": "'गजः' का अर्थ क्या है?",
        "options_en": ["Elephant", "Horse", "Lion", "Tiger"],
        "options_hi": ["हाथी", "घोड़ा", "सिंह", "बाघ"],
        "answer_en": "Elephant",
        "answer_hi": "हाथी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 87,
        "question_en": "Which is the feminine form of 'देवः'?",
        "question_hi": "'देवः' का स्त्रीलिंग रूप क्या है?",
        "options_en": ["Devī", "Devaḥ", "Devam", "Devāḥ"],
        "options_hi": ["देवी", "देवः", "देवम्", "देवाः"],
        "answer_en": "Devī",
        "answer_hi": "देवी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 88,
        "question_en": "What is the dative case form for 'बालक'?",
        "question_hi": "'बालक' का चतुर्थी एकवचन रूप क्या है?",
        "options_en": ["Bālakāya", "Bālakena", "Bālakam", "Bālakasya"],
        "options_hi": ["बालकाय", "बालकेन", "बालकम्", "बालकस्य"],
        "answer_en": "Bālakāya",
        "answer_hi": "बालकाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 89,
        "question_en": "What is the meaning of 'आकाशः'?",
        "question_hi": "'आकाशः' का अर्थ क्या है?",
        "options_en": ["Sky", "Air", "Cloud", "Sun"],
        "options_hi": ["आकाश", "वायु", "बादल", "सूर्य"],
        "answer_en": "Sky",
        "answer_hi": "आकाश",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 90,
        "question_en": "Which one is the plural form of 'फलम्'?",
        "question_hi": "'फलम्' का बहुवचन रूप क्या है?",
        "options_en": ["Phalāni", "Phalam", "Phalai", "Phalāḥ"],
        "options_hi": ["फलानि", "फलम्", "फलै", "फलाः"],
        "answer_en": "Phalāni",
        "answer_hi": "फलानि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 91,
        "question_en": "What is the meaning of 'सत्यं'?",
        "question_hi": "'सत्यं' का अर्थ क्या है?",
        "options_en": ["Truth", "Peace", "Fear", "Lie"],
        "options_hi": ["सत्य", "शांति", "भय", "झूठ"],
        "answer_en": "Truth",
        "answer_hi": "सत्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 92,
        "question_en": "Which is the correct verb form for 'I write'?",
        "question_hi": "'मैं लिखता हूँ' के लिए सही क्रिया रूप क्या है?",
        "options_en": ["Likhāmi", "Likhasi", "Likhati", "Likhanti"],
        "options_hi": ["लिखामि", "लिखसि", "लिखति", "लिखन्ति"],
        "answer_en": "Likhāmi",
        "answer_hi": "लिखामि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 93,
        "question_en": "What is the vocative singular of 'मित्रम्'?",
        "question_hi": "'मित्रम्' का संबोधन एकवचन रूप क्या है?",
        "options_en": ["Mitra", "Mitram", "Mitrasya", "Mitre"],
        "options_hi": ["मित्र", "मित्रम्", "मित्रस्य", "मित्रे"],
        "answer_en": "Mitra",
        "answer_hi": "मित्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 94,
        "question_en": "Which of the following is a neuter noun?",
        "question_hi": "निम्नलिखित में से कौन-सा शब्द नपुंसकलिंग है?",
        "options_en": ["Phalam", "Ramah", "Devī", "Sakhā"],
        "options_hi": ["फलम्", "रामः", "देवी", "सखा"],
        "answer_en": "Phalam",
        "answer_hi": "फलम्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 95,
        "question_en": "What is the correct past tense of 'गच्छति' (goes)?",
        "question_hi": "'गच्छति' (जाता है) का सही भूतकाल रूप क्या है?",
        "options_en": ["Agacchat", "Gacchati", "Gacchām", "Agacchasi"],
        "options_hi": ["अगच्छत्", "गच्छति", "गच्छाम्", "अगच्छसि"],
        "answer_en": "Agacchat",
        "answer_hi": "अगच्छत्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 96,
        "question_en": "What is the Sanskrit word for 'eye'?",
        "question_hi": "'आंख' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Nayanam", "Karnam", "Mukham", "Pādam"],
        "options_hi": ["नयनम्", "कर्णम्", "मुखम्", "पादम्"],
        "answer_en": "Nayanam",
        "answer_hi": "नयनम्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 97,
        "question_en": "What is the meaning of 'सिंहः'?",
        "question_hi": "'सिंहः' का अर्थ क्या है?",
        "options_en": ["Lion", "Tiger", "Elephant", "Monkey"],
        "options_hi": ["सिंह", "बाघ", "हाथी", "वानर"],
        "answer_en": "Lion",
        "answer_hi": "सिंह",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 98,
        "question_en": "Choose the feminine form of 'राजा'.",
        "question_hi": "'राजा' का स्त्रीलिंग रूप चुनिए।",
        "options_en": ["Rājñī", "Rāma", "Rājā", "Rājah"],
        "options_hi": ["राज्ञी", "राम", "राजा", "राजः"],
        "answer_en": "Rājñī",
        "answer_hi": "राज्ञी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 99,
        "question_en": "Which is the genitive case of 'जनकः'?",
        "question_hi": "'जनकः' का षष्ठी एकवचन रूप क्या है?",
        "options_en": ["Janakasya", "Janakam", "Janaken", "Janakāt"],
        "options_hi": ["जनकस्य", "जनकम्", "जनकेन", "जनकात्"],
        "answer_en": "Janakasya",
        "answer_hi": "जनकस्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 100,
        "question_en": "What is the Sanskrit for 'water'?",
        "question_hi": "'पानी' का संस्कृत में क्या शब्द है?",
        "options_en": ["Jalam", "Neeram", "Toyam", "Udakam"],
        "options_hi": ["जलम्", "नीरम्", "तोयम्", "उदकम्"],
        "answer_en": "Jalam",
        "answer_hi": "जलम्",
        "attempted": false,
        "selected": ""
      }

];

let currentQuestion = 0;
let language = "en"; // Default English
let timeLeft = 10800; // 5-minute timer
let timerInterval;

function loadQuestion(index) {
const questionText = language === "en" ? questions[index].question_en : questions[index].question_hi;
const optionsArray = language === "en" ? questions[index].options_en : questions[index].options_hi;

document.getElementById("question").textContent = `${questions[index].num}. ${questionText}`;
document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

const optionsElement = document.getElementById("options");
optionsElement.innerHTML = "";

optionsArray.forEach(option => {
optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
});

updateNavigation();
}

function markAttempted(index, selectedAnswer) {
questions[index].attempted = true;
questions[index].selected = selectedAnswer;
updateNavigation();
}

function nextQuestion() {
if (currentQuestion < questions.length - 1) {
currentQuestion++;
loadQuestion(currentQuestion);
}
}

function prevQuestion() {
if (currentQuestion > 0) {
currentQuestion--;
loadQuestion(currentQuestion);
}
}

function changeLanguage() {
language = document.getElementById("languageSelect").value;
loadQuestion(currentQuestion);
}

function submitQuiz() {
let confirmation = confirm("Are you sure you want to submit the test?");
if (!confirmation) return;

clearInterval(timerInterval);

let attempted = 0, notAttempted = 0, score = 0;
const results = [];

questions.forEach(q => {
if (q.attempted) {
    attempted++;
    if (q.selected === q.answer_en || q.selected === q.answer_hi) {
        score++;
    }
} else {
    notAttempted++;
}
results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer_en });
});

localStorage.setItem("attempted", attempted);
localStorage.setItem("notAttempted", notAttempted);
localStorage.setItem("score", score);
localStorage.setItem("results", JSON.stringify(results));

let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
if (viewResult) {
window.location.href = "/Deshbord/category/test/submit-test.html";
}
}

function startTimer() {
const timerElement = document.getElementById("timer");
timeLeft = 180 * 60; // Convert 180 minutes to seconds (180 × 60)

timerInterval = setInterval(() => {
if (timeLeft <= 0) {
    clearInterval(timerInterval);
    alert("Time's up! Submitting the quiz automatically.");
    submitQuiz();
} else {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    
    // Format as HH:MM:SS with leading zeros
    timerElement.textContent = `Time Left: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timeLeft--;
}
}, 1000);
}
function updateNavigation() {
const navElement = document.getElementById("circleContainer");
navElement.innerHTML = "";

questions.forEach((q, index) => {
let color = "gray"; // Default not visited
if (q.attempted) {
    color = "green"; // Answered
}
if (q.selected === "") {
    color = "gray"; // Not answered
}
if (index === currentQuestion) {
    color = "blue"; // Current question
}
navElement.innerHTML += `<div class='circle' style='background-color: ${color};' onclick='loadQuestion(${index})'>${index + 1}</div>`;
});
}

window.onload = function () {
loadQuestion(currentQuestion);
startTimer();
};