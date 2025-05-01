
const questions =[
    {
      "num": 1,
      "question_en": "What is the meaning of 'शिक्षा'?",
      "question_hi": "'शिक्षा' का अर्थ क्या है?",
      "options_en": ["Education", "Discipline", "Rule", "Respect"],
      "options_hi": ["शिक्षा", "अनुशासन", "नियम", "आदर"],
      "answer_en": "Education",
      "answer_hi": "शिक्षा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "Which is the correct nominative singular of 'राम'?",
      "question_hi": "'राम' का प्रथमा एकवचन रूप क्या है?",
      "options_en": ["Rāmaḥ", "Rāmam", "Rāmasya", "Rāmena"],
      "options_hi": ["रामः", "रामम्", "रामस्य", "रामेण"],
      "answer_en": "Rāmaḥ",
      "answer_hi": "रामः",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "What is the Sanskrit word for 'book'?",
      "question_hi": "'पुस्तक' के लिए संस्कृत शब्द क्या है?",
      "options_en": ["Pustakam", "Pustika", "Pāṭham", "Lekhā"],
      "options_hi": ["पुस्तकम्", "पुस्तिका", "पाठम्", "लेखा"],
      "answer_en": "Pustakam",
      "answer_hi": "पुस्तकम्",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "What is the plural form of 'फलम्'?",
      "question_hi": "'फलम्' का बहुवचन रूप क्या है?",
      "options_en": ["Phalāni", "Phalai", "Phalasya", "Phalani"],
      "options_hi": ["फलानि", "फलै", "फलस्य", "फलानि"],
      "answer_en": "Phalāni",
      "answer_hi": "फलानि",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "Which one is in the accusative case?",
      "question_hi": "इनमें से कौन-सा शब्द द्वितीया विभक्ति में है?",
      "options_en": ["Rāmam", "Rāmaḥ", "Rāmeṇa", "Rāmasya"],
      "options_hi": ["रामम्", "रामः", "रामेण", "रामस्य"],
      "answer_en": "Rāmam",
      "answer_hi": "रामम्",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "Which is the verb for 'reads' in Sanskrit?",
      "question_hi": "'पढ़ता है' के लिए संस्कृत क्रिया क्या है?",
      "options_en": ["Pathati", "Likati", "Vadati", "Dhāvati"],
      "options_hi": ["पठति", "लिखति", "वदति", "धावति"],
      "answer_en": "Pathati",
      "answer_hi": "पठति",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "What is the vocative form of 'मित्रम्'?",
      "question_hi": "'मित्रम्' का संबोधन एकवचन रूप क्या है?",
      "options_en": ["Mitra", "Mitram", "Mitre", "Mitrasya"],
      "options_hi": ["मित्र", "मित्रम्", "मित्रे", "मित्रस्य"],
      "answer_en": "Mitra",
      "answer_hi": "मित्र",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "Choose the correct past tense of 'गच्छति'.",
      "question_hi": "'गच्छति' का सही भूतकाल रूप चुनिए।",
      "options_en": ["Agacchat", "Gacchati", "Gacchām", "Agacchasi"],
      "options_hi": ["अगच्छत्", "गच्छति", "गच्छाम्", "अगच्छसि"],
      "answer_en": "Agacchat",
      "answer_hi": "अगच्छत्",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "What is the Sanskrit word for 'mind'?",
      "question_hi": "'मन' के लिए संस्कृत शब्द क्या है?",
      "options_en": ["Manah", "Buddhi", "Chitta", "Hṛdaya"],
      "options_hi": ["मनः", "बुद्धि", "चित्त", "हृदय"],
      "answer_en": "Manah",
      "answer_hi": "मनः",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "What is the meaning of 'शान्तिः'?",
      "question_hi": "'शान्तिः' का अर्थ क्या है?",
      "options_en": ["Peace", "War", "Knowledge", "Devotion"],
      "options_hi": ["शांति", "युद्ध", "ज्ञान", "भक्ति"],
      "answer_en": "Peace",
      "answer_hi": "शांति",
      "attempted": false,
      "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the Sanskrit word for 'teacher'?",
        "question_hi": "'शिक्षक' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Guru", "Acharya", "Sikshak", "Vidya"],
        "options_hi": ["गुरु", "आचार्य", "शिक्षक", "विद्या"],
        "answer_en": "Guru",
        "answer_hi": "गुरु",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "Which of the following is in the genitive case?",
        "question_hi": "निम्नलिखित में से कौन-सा शब्द सप्तमी विभक्ति में है?",
        "options_en": ["Rāmasya", "Rāmam", "Rāmeṇa", "Rāmaḥ"],
        "options_hi": ["रामस्य", "रामम्", "रामेण", "रामः"],
        "answer_en": "Rāmasya",
        "answer_hi": "रामस्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "Which word means 'river' in Sanskrit?",
        "question_hi": "'नदी' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Nadī", "Tungabhadra", "Sarasvatī", "Sindhu"],
        "options_hi": ["नदी", "तुंगभद्रा", "सरस्वती", "सिंधु"],
        "answer_en": "Nadī",
        "answer_hi": "नदी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "Which of these is a Sanskrit word for 'life'?",
        "question_hi": "'जीवन' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Jīvana", "Bhava", "Prāṇa", "Vīrya"],
        "options_hi": ["जीवन", "भाव", "प्राण", "वीर्य"],
        "answer_en": "Jīvana",
        "answer_hi": "जीवन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "What is the meaning of 'धर्म'?",
        "question_hi": "'धर्म' का अर्थ क्या है?",
        "options_en": ["Duty", "Religion", "Truth", "Knowledge"],
        "options_hi": ["धर्म", "धर्म", "सत्य", "ज्ञान"],
        "answer_en": "Religion",
        "answer_hi": "धर्म",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "What is the past tense form of 'pati' in Sanskrit?",
        "question_hi": "'पति' का भूतकाल रूप क्या है?",
        "options_en": ["Patī", "Patin", "Patat", "Pattavān"],
        "options_hi": ["पती", "पतिन", "पतत", "पत्थवान्"],
        "answer_en": "Pattavān",
        "answer_hi": "पत्थवान्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "Which word means 'sun' in Sanskrit?",
        "question_hi": "'सूर्य' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Sūrya", "Chandra", "Vishnu", "Agni"],
        "options_hi": ["सूर्य", "चन्द्र", "विष्णु", "अग्नि"],
        "answer_en": "Sūrya",
        "answer_hi": "सूर्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Which is the nominative singular form of 'देव'?",
        "question_hi": "'देव' का प्रथमा एकवचन रूप क्या है?",
        "options_en": ["Devaḥ", "Devam", "Devasya", "Deveṇa"],
        "options_hi": ["देवः", "देवम्", "देवस्य", "देवेण"],
        "answer_en": "Devaḥ",
        "answer_hi": "देवः",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "What is the meaning of 'सत्य'?",
        "question_hi": "'सत्य' का अर्थ क्या है?",
        "options_en": ["Truth", "Virtue", "Knowledge", "Power"],
        "options_hi": ["सत्य", "धर्म", "ज्ञान", "शक्ति"],
        "answer_en": "Truth",
        "answer_hi": "सत्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "What is the future tense form of 'कृ' (to do)?",
        "question_hi": "'कृ' (करना) का भविष्यत् काल रूप क्या है?",
        "options_en": ["Kuryāt", "Karoti", "Kṛtavān", "Karantī"],
        "options_hi": ["कुर्यात्", "करोति", "कृतवान्", "करण्ती"],
        "answer_en": "Kuryāt",
        "answer_hi": "कुर्यात्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Which word is the Sanskrit equivalent of 'friend'?",
        "question_hi": "'मित्र' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Mitra", "Sakhi", "Bandhu", "Prema"],
        "options_hi": ["मित्र", "सखी", "बन्धु", "प्रेम"],
        "answer_en": "Mitra",
        "answer_hi": "मित्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "What is the plural form of 'पुस्तक'?",
        "question_hi": "'पुस्तक' का बहुवचन रूप क्या है?",
        "options_en": ["Pustakāni", "Pustakā", "Pustakās", "Pustakām"],
        "options_hi": ["पुस्तकानि", "पुस्तका", "पुस्तकास्", "पुस्तकाम्"],
        "answer_en": "Pustakāni",
        "answer_hi": "पुस्तकानि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "What is the correct future tense of 'गच्छ'?",
        "question_hi": "'गच्छ' का भविष्यत् काल रूप क्या है?",
        "options_en": ["Gacchāmi", "Gacchati", "Gacchām", "Gacchat"],
        "options_hi": ["गच्छामि", "गच्छति", "गच्छाम्", "गच्छत्"],
        "answer_en": "Gacchāmi",
        "answer_hi": "गच्छामि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "What is the meaning of 'पुस्तकम्'?",
        "question_hi": "'पुस्तकम्' का अर्थ क्या है?",
        "options_en": ["Book", "Pen", "Table", "Class"],
        "options_hi": ["पुस्तक", "कलम", "मेज़", "कक्षा"],
        "answer_en": "Book",
        "answer_hi": "पुस्तक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "Which of these is a correct example of the instrumental case?",
        "question_hi": "इनमें से कौन-सा शब्द 'करण' विभक्ति में है?",
        "options_en": ["Rāmeṇa", "Rāmam", "Rāmasya", "Rāmaḥ"],
        "options_hi": ["रामेण", "रामम्", "रामस्य", "रामः"],
        "answer_en": "Rāmeṇa",
        "answer_hi": "रामेण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "Which of the following is the correct accusative singular form of 'तपस्'?",
        "question_hi": "'तपस्' का द्वितीया एकवचन रूप क्या है?",
        "options_en": ["Tapam", "Tapas", "Tapasya", "Tapase"],
        "options_hi": ["तपम्", "तपस्", "तपस्या", "तपसे"],
        "answer_en": "Tapam",
        "answer_hi": "तपम्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "What is the meaning of 'पुंलिंग'?",
        "question_hi": "'पुंलिंग' का अर्थ क्या है?",
        "options_en": ["Masculine", "Feminine", "Neuter", "Common"],
        "options_hi": ["पुंलिंग", "स्त्रीलिंग", "नपुंसकलिंग", "सामान्य"],
        "answer_en": "Masculine",
        "answer_hi": "पुंलिंग",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "What is the correct form of the verb 'to be' in Sanskrit?",
        "question_hi": "संस्कृत में 'to be' क्रिया का सही रूप क्या है?",
        "options_en": ["Bhavati", "Asit", "Bavati", "Kartā"],
        "options_hi": ["भवति", "असित", "बवति", "कर्ता"],
        "answer_en": "Bhavati",
        "answer_hi": "भवति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "What is the meaning of 'ब्रह्म'?",
        "question_hi": "'ब्रह्म' का अर्थ क्या है?",
        "options_en": ["God", "Power", "Ultimate Reality", "Truth"],
        "options_hi": ["ईश्वर", "शक्ति", "अंतिम सत्य", "सत्य"],
        "answer_en": "Ultimate Reality",
        "answer_hi": "अंतिम सत्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "What is the correct nominative singular form of 'पुत्र'?",
        "question_hi": "'पुत्र' का प्रथमा एकवचन रूप क्या है?",
        "options_en": ["Putraḥ", "Putram", "Putrasya", "Putreṇa"],
        "options_hi": ["पुत्रः", "पुत्रम्", "पुत्रस्य", "पुत्रेण"],
        "answer_en": "Putraḥ",
        "answer_hi": "पुत्रः",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "What is the Sanskrit word for 'mother'?",
        "question_hi": "'माँ' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Mātṛ", "Pṛthvī", "Svasṛ", "Jātā"],
        "options_hi": ["मातृ", "पृथ्वी", "स्वसृ", "जाता"],
        "answer_en": "Mātṛ",
        "answer_hi": "मातृ",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "What is the meaning of 'सर्व'?",
        "question_hi": "'सर्व' का अर्थ क्या है?",
        "options_en": ["All", "One", "None", "Some"],
        "options_hi": ["सर्व", "एक", "कोई नहीं", "कुछ"],
        "answer_en": "All",
        "answer_hi": "सर्व",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "Which of these words means 'friend'?",
        "question_hi": "इनमें से कौन-सा शब्द 'मित्र' का अर्थ है?",
        "options_en": ["Mitra", "Sakhi", "Bandhu", "Prema"],
        "options_hi": ["मित्र", "सखी", "बन्धु", "प्रेम"],
        "answer_en": "Mitra",
        "answer_hi": "मित्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "Which word means 'knowledge'?",
        "question_hi": "'ज्ञान' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Jñāna", "Vidyā", "Sanskṛti", "Siddhi"],
        "options_hi": ["ज्ञान", "विद्या", "संस्कृति", "सिद्धि"],
        "answer_en": "Jñāna",
        "answer_hi": "ज्ञान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "What is the meaning of 'धर्म'?",
        "question_hi": "'धर्म' का अर्थ क्या है?",
        "options_en": ["Duty", "Religion", "Truth", "Knowledge"],
        "options_hi": ["धर्म", "धर्म", "सत्य", "ज्ञान"],
        "answer_en": "Religion",
        "answer_hi": "धर्म",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "Which of these is the correct form of the verb 'to be' in Sanskrit?",
        "question_hi": "संस्कृत में 'to be' क्रिया का सही रूप क्या है?",
        "options_en": ["Bhavati", "Asit", "Bavati", "Kartā"],
        "options_hi": ["भवति", "असित", "बवति", "कर्ता"],
        "answer_en": "Bhavati",
        "answer_hi": "भवति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "What is the Sanskrit equivalent of 'book'?",
        "question_hi": "'पुस्तक' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Pustaka", "Grantha", "Patra", "Lipi"],
        "options_hi": ["पुस्तक", "ग्रंथ", "पत्र", "लिपि"],
        "answer_en": "Pustaka",
        "answer_hi": "पुस्तक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "Which word means 'earth' in Sanskrit?",
        "question_hi": "'पृथ्वी' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Prithvī", "Vasundharā", "Bhūmi", "Agni"],
        "options_hi": ["पृथ्वी", "वसुंधरा", "भूमि", "अग्नि"],
        "answer_en": "Prithvī",
        "answer_hi": "पृथ्वी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Which of these is the correct accusative plural form of 'देव'?",
        "question_hi": "'देव' का द्वितीया बहुवचन रूप क्या है?",
        "options_en": ["Devān", "Devas", "Devānī", "Deve"],
        "options_hi": ["देवान्", "देवास्", "देवानी", "देवे"],
        "answer_en": "Devān",
        "answer_hi": "देवान्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "Which word means 'life' in Sanskrit?",
        "question_hi": "'जीवन' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Jīvana", "Prāṇa", "Bhava", "Sattva"],
        "options_hi": ["जीवन", "प्राण", "भाव", "सत्व"],
        "answer_en": "Jīvana",
        "answer_hi": "जीवन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "Which of these is the correct form of the verb 'to know' in Sanskrit?",
        "question_hi": "'जानना' क्रिया का संस्कृत रूप क्या है?",
        "options_en": ["Jānāti", "Jānāmi", "Jñāna", "Jānita"],
        "options_hi": ["जानाति", "जानामि", "ज्ञान", "जानित"],
        "answer_en": "Jānāti",
        "answer_hi": "जानाति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Which of these is a Sanskrit word for 'peace'?",
        "question_hi": "'शांति' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Śānti", "Pāyodhi", "Sānti", "Dhyāna"],
        "options_hi": ["शांति", "पायोधि", "सांति", "ध्यान"],
        "answer_en": "Śānti",
        "answer_hi": "शांति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "What is the meaning of 'आत्मा'?",
        "question_hi": "'आत्मा' का अर्थ क्या है?",
        "options_en": ["Soul", "Body", "Mind", "Spirit"],
        "options_hi": ["आत्मा", "शरीर", "मन", "आत्मा"],
        "answer_en": "Soul",
        "answer_hi": "आत्मा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "Which of these is the correct genitive singular form of 'राज'?",
        "question_hi": "'राज' का सप्तमी एकवचन रूप क्या है?",
        "options_en": ["Rājasya", "Rājām", "Rājas", "Rājasyaḥ"],
        "options_hi": ["राजस्य", "राजम्", "राजस्", "राजस्यः"],
        "answer_en": "Rājasya",
        "answer_hi": "राजस्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "What is the nominative plural form of 'सिंह'?",
        "question_hi": "'सिंह' का प्रथमा बहुवचन रूप क्या है?",
        "options_en": ["Siṁhāḥ", "Siṁhān", "Siṁham", "Siṁhī"],
        "options_hi": ["सिंहाः", "सिंहान्", "सिंहम्", "सिंही"],
        "answer_en": "Siṁhāḥ",
        "answer_hi": "सिंहाः",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "Which of these is the correct future tense of 'गच्छ'?",
        "question_hi": "'गच्छ' का भविष्यत् काल रूप क्या है?",
        "options_en": ["Gacchāmi", "Gacchati", "Gacchām", "Gacchat"],
        "options_hi": ["गच्छामि", "गच्छति", "गच्छाम्", "गच्छत्"],
        "answer_en": "Gacchāmi",
        "answer_hi": "गच्छामि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Which of these words means 'cow'?",
        "question_hi": "'गाय' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Go", "Gāvī", "Vṛṣa", "Śvāna"],
        "options_hi": ["गौ", "गावी", "वृष", "श्वान"],
        "answer_en": "Go",
        "answer_hi": "गौ",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "What is the meaning of 'सत्य'?",
        "question_hi": "'सत्य' का अर्थ क्या है?",
        "options_en": ["Truth", "Virtue", "Knowledge", "Power"],
        "options_hi": ["सत्य", "धर्म", "ज्ञान", "शक्ति"],
        "answer_en": "Truth",
        "answer_hi": "सत्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "What is the meaning of 'पुत्र'?",
        "question_hi": "'पुत्र' का अर्थ क्या है?",
        "options_en": ["Son", "Friend", "King", "Father"],
        "options_hi": ["पुत्र", "मित्र", "राजा", "पिता"],
        "answer_en": "Son",
        "answer_hi": "पुत्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "What is the nominative singular form of 'पुस्तक'?",
        "question_hi": "'पुस्तक' का प्रथमा एकवचन रूप क्या है?",
        "options_en": ["Pustaka", "Pustakam", "Pustakasya", "Pustake"],
        "options_hi": ["पुस्तक", "पुस्तकम्", "पुस्तकस्य", "पुस्तके"],
        "answer_en": "Pustaka",
        "answer_hi": "पुस्तक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 51,
        "question_en": "Which of these is the correct verb form of 'to speak' in Sanskrit?",
        "question_hi": "'बोलना' क्रिया का संस्कृत रूप क्या है?",
        "options_en": ["Vācayati", "Vāceti", "Vācayām", "Vācate"],
        "options_hi": ["वाचयति", "वाचेति", "वाचयाम्", "वाचते"],
        "answer_en": "Vācayati",
        "answer_hi": "वाचयति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 52,
        "question_en": "What is the meaning of 'आदित्य'?",
        "question_hi": "'आदित्य' का अर्थ क्या है?",
        "options_en": ["Sun", "Star", "Moon", "Cloud"],
        "options_hi": ["सूर्य", "तारा", "चन्द्र", "बादल"],
        "answer_en": "Sun",
        "answer_hi": "सूर्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 53,
        "question_en": "Which of these is the correct past tense of 'गच्छ'?",
        "question_hi": "'गच्छ' का भूतकाल रूप क्या है?",
        "options_en": ["Gacchati", "Gacchām", "Gacchat", "Gacchāmi"],
        "options_hi": ["गच्छति", "गच्छाम्", "गच्छत्", "गच्छामि"],
        "answer_en": "Gacchat",
        "answer_hi": "गच्छत्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 54,
        "question_en": "Which word means 'knowledge' in Sanskrit?",
        "question_hi": "'ज्ञान' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Jñāna", "Vidyā", "Sanskṛti", "Siddhi"],
        "options_hi": ["ज्ञान", "विद्या", "संस्कृति", "सिद्धि"],
        "answer_en": "Jñāna",
        "answer_hi": "ज्ञान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 55,
        "question_en": "What is the meaning of 'नदी'?",
        "question_hi": "'नदी' का अर्थ क्या है?",
        "options_en": ["River", "Mountain", "Lake", "Ocean"],
        "options_hi": ["नदी", "पहाड़", "झील", "समुद्र"],
        "answer_en": "River",
        "answer_hi": "नदी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 56,
        "question_en": "Which of these words means 'speech'?",
        "question_hi": "'वाक' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Vāk", "Bodha", "Dhvani", "Svara"],
        "options_hi": ["वाक", "बोधन", "ध्वनि", "स्वर"],
        "answer_en": "Vāk",
        "answer_hi": "वाक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 57,
        "question_en": "What is the meaning of 'शक्ति'?",
        "question_hi": "'शक्ति' का अर्थ क्या है?",
        "options_en": ["Power", "Energy", "Wisdom", "Love"],
        "options_hi": ["शक्ति", "ऊर्जा", "ज्ञान", "प्रेम"],
        "answer_en": "Power",
        "answer_hi": "शक्ति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 58,
        "question_en": "What is the nominative singular form of 'वृक्ष'?",
        "question_hi": "'वृक्ष' का प्रथमा एकवचन रूप क्या है?",
        "options_en": ["Vṛkṣa", "Vṛkṣam", "Vṛkṣasya", "Vṛkṣe"],
        "options_hi": ["वृक्ष", "वृक्षम्", "वृक्षस्य", "वृक्षे"],
        "answer_en": "Vṛkṣa",
        "answer_hi": "वृक्ष",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 59,
        "question_en": "Which word means 'truth' in Sanskrit?",
        "question_hi": "'सत्य' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Satya", "Sākṣāt", "Vākya", "Dharma"],
        "options_hi": ["सत्य", "साक्षात", "वाक्य", "धर्म"],
        "answer_en": "Satya",
        "answer_hi": "सत्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 60,
        "question_en": "What is the meaning of 'शान्ति'?",
        "question_hi": "'शान्ति' का अर्थ क्या है?",
        "options_en": ["Peace", "Knowledge", "Power", "Strength"],
        "options_hi": ["शांति", "ज्ञान", "शक्ति", "ताकत"],
        "answer_en": "Peace",
        "answer_hi": "शांति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 61,
        "question_en": "What is the Sanskrit word for 'friend'?",
        "question_hi": "'मित्र' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Mitra", "Sakhi", "Bandhu", "Priya"],
        "options_hi": ["मित्र", "सखी", "बन्धु", "प्रिय"],
        "answer_en": "Mitra",
        "answer_hi": "मित्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 62,
        "question_en": "What is the nominative plural form of 'देव'?",
        "question_hi": "'देव' का प्रथमा बहुवचन रूप क्या है?",
        "options_en": ["Devāḥ", "Devān", "Devās", "Devasya"],
        "options_hi": ["देवाः", "देवान्", "देवाश्", "देवस्य"],
        "answer_en": "Devāḥ",
        "answer_hi": "देवाः",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 63,
        "question_en": "Which of these is the correct form of the verb 'to do' in Sanskrit?",
        "question_hi": "'करना' क्रिया का संस्कृत रूप क्या है?",
        "options_en": ["Karoti", "Karomi", "Karot", "Kartā"],
        "options_hi": ["करोति", "करोमि", "करोत", "कर्ता"],
        "answer_en": "Karoti",
        "answer_hi": "करोति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 64,
        "question_en": "What is the meaning of 'पत्नी'?",
        "question_hi": "'पत्नी' का अर्थ क्या है?",
        "options_en": ["Wife", "Mother", "Sister", "Daughter"],
        "options_hi": ["पत्नी", "माँ", "बहन", "बेटी"],
        "answer_en": "Wife",
        "answer_hi": "पत्नी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 65,
        "question_en": "Which word means 'moon' in Sanskrit?",
        "question_hi": "'चन्द्र' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Candra", "Sūrya", "Rāhu", "Buddha"],
        "options_hi": ["चन्द्र", "सूर्य", "राहु", "बुध"],
        "answer_en": "Candra",
        "answer_hi": "चन्द्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 66,
        "question_en": "What is the meaning of 'राजा'?",
        "question_hi": "'राजा' का अर्थ क्या है?",
        "options_en": ["King", "Minister", "Citizen", "Priest"],
        "options_hi": ["राजा", "मंत्री", "नागरिक", "पुजारी"],
        "answer_en": "King",
        "answer_hi": "राजा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 67,
        "question_en": "Which of these is the correct accusative singular form of 'बालक'?",
        "question_hi": "'बालक' का द्वितीया एकवचन रूप क्या है?",
        "options_en": ["Bālaka", "Bālam", "Bālakasya", "Bāle"],
        "options_hi": ["बालक", "बालम्", "बालकस्य", "बाले"],
        "answer_en": "Bālam",
        "answer_hi": "बालम्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 68,
        "question_en": "Which word means 'light' in Sanskrit?",
        "question_hi": "'प्रकाश' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Prakāśa", "Tejas", "Vidyut", "Dīpa"],
        "options_hi": ["प्रकाश", "तेजस", "विद्युत", "दीप"],
        "answer_en": "Prakāśa",
        "answer_hi": "प्रकाश",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 69,
        "question_en": "What is the meaning of 'पिता'?",
        "question_hi": "'पिता' का अर्थ क्या है?",
        "options_en": ["Father", "Brother", "Son", "Friend"],
        "options_hi": ["पिता", "भाई", "पुत्र", "मित्र"],
        "answer_en": "Father",
        "answer_hi": "पिता",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 70,
        "question_en": "What is the Sanskrit word for 'sky'?",
        "question_hi": "'आकाश' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Ākāśa", "Vāyu", "Dyaus", "Bhūmi"],
        "options_hi": ["आकाश", "वायु", "द्यौस", "भूमि"],
        "answer_en": "Ākāśa",
        "answer_hi": "आकाश",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 71,
        "question_en": "Which of these is the correct accusative plural form of 'बालक'?",
        "question_hi": "'बालक' का द्वितीया बहुवचन रूप क्या है?",
        "options_en": ["Bālakān", "Bālakasya", "Bālakāḥ", "Bālam"],
        "options_hi": ["बालकान्", "बालकस्य", "बालकाः", "बालम्"],
        "answer_en": "Bālakān",
        "answer_hi": "बालकान्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 72,
        "question_en": "What is the meaning of 'आत्मा'?",
        "question_hi": "'आत्मा' का अर्थ क्या है?",
        "options_en": ["Soul", "Mind", "Body", "Heart"],
        "options_hi": ["आत्मा", "मन", "शरीर", "हृदय"],
        "answer_en": "Soul",
        "answer_hi": "आत्मा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 73,
        "question_en": "Which word means 'sun' in Sanskrit?",
        "question_hi": "'सूर्य' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Sūrya", "Chandra", "Agni", "Vayu"],
        "options_hi": ["सूर्य", "चन्द्र", "अग्नि", "वायु"],
        "answer_en": "Sūrya",
        "answer_hi": "सूर्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 74,
        "question_en": "What is the meaning of 'नम:'?",
        "question_hi": "'नम:' का अर्थ क्या है?",
        "options_en": ["Salutation", "Blessing", "Greeting", "Farewell"],
        "options_hi": ["नमस्कार", "आशीर्वाद", "अभिवादन", "अलविदा"],
        "answer_en": "Salutation",
        "answer_hi": "नमस्कार",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 75,
        "question_en": "What is the Sanskrit word for 'earth'?",
        "question_hi": "'पृथ्वी' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Pṛthvī", "Bhūmi", "Kṣiti", "Vāyu"],
        "options_hi": ["पृथ्वी", "भूमि", "क्षिति", "वायु"],
        "answer_en": "Pṛthvī",
        "answer_hi": "पृथ्वी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 76,
        "question_en": "What is the nominative singular form of 'गंगā'?",
        "question_hi": "'गंगā' का प्रथमा एकवचन रूप क्या है?",
        "options_en": ["Gaṅgā", "Gaṅgām", "Gaṅgāyāḥ", "Gaṅgāmī"],
        "options_hi": ["गंगा", "गंगाम्", "गंगायाः", "गंगामि"],
        "answer_en": "Gaṅgā",
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 77,
        "question_en": "What is the meaning of 'धन'?",
        "question_hi": "'धन' का अर्थ क्या है?",
        "options_en": ["Wealth", "Knowledge", "Health", "Power"],
        "options_hi": ["धन", "ज्ञान", "स्वास्थ्य", "शक्ति"],
        "answer_en": "Wealth",
        "answer_hi": "धन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 78,
        "question_en": "What is the correct form of 'to give' in Sanskrit?",
        "question_hi": "'देना' क्रिया का संस्कृत रूप क्या है?",
        "options_en": ["Dāya", "Dātu", "Datta", "Dāyām"],
        "options_hi": ["दाय", "दातु", "दत्त", "दायाम्"],
        "answer_en": "Dātu",
        "answer_hi": "दातु",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 79,
        "question_en": "Which of these means 'truth' in Sanskrit?",
        "question_hi": "'सत्य' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Satya", "Sākṣāt", "Siddhi", "Vākya"],
        "options_hi": ["सत्य", "साक्षात", "सिद्धि", "वाक्य"],
        "answer_en": "Satya",
        "answer_hi": "सत्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 80,
        "question_en": "What is the meaning of 'शक्ति'?",
        "question_hi": "'शक्ति' का अर्थ क्या है?",
        "options_en": ["Power", "Knowledge", "Strength", "Wisdom"],
        "options_hi": ["शक्ति", "ज्ञान", "ताकत", "बुद्धि"],
        "answer_en": "Power",
        "answer_hi": "शक्ति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 81,
        "question_en": "What is the nominative singular form of 'राजा'?",
        "question_hi": "'राजा' का प्रथमा एकवचन रूप क्या है?",
        "options_en": ["Rājā", "Rājān", "Rājās", "Rājāḥ"],
        "options_hi": ["राजा", "राजान्", "राजाश्", "राजाः"],
        "answer_en": "Rājā",
        "answer_hi": "राजा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 82,
        "question_en": "Which word means 'friend' in Sanskrit?",
        "question_hi": "'मित्र' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Mitra", "Sakhi", "Bandhu", "Priya"],
        "options_hi": ["मित्र", "सखी", "बन्धु", "प्रिय"],
        "answer_en": "Mitra",
        "answer_hi": "मित्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 83,
        "question_en": "What is the meaning of 'ज्ञान'?",
        "question_hi": "'ज्ञान' का अर्थ क्या है?",
        "options_en": ["Knowledge", "Wisdom", "Love", "Power"],
        "options_hi": ["ज्ञान", "बुद्धि", "प्रेम", "शक्ति"],
        "answer_en": "Knowledge",
        "answer_hi": "ज्ञान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 84,
        "question_en": "What is the Sanskrit word for 'sky'?",
        "question_hi": "'आकाश' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Ākāśa", "Vāyu", "Dyaus", "Bhūmi"],
        "options_hi": ["आकाश", "वायु", "द्यौस", "भूमि"],
        "answer_en": "Ākāśa",
        "answer_hi": "आकाश",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 85,
        "question_en": "Which of these is the correct form of the verb 'to come' in Sanskrit?",
        "question_hi": "'आना' क्रिया का संस्कृत रूप क्या है?",
        "options_en": ["Āgacchati", "Āgacchāmi", "Āgacchati", "Āgacchat"],
        "options_hi": ["आगच्छति", "आगच्छामि", "आगच्छति", "आगच्छत्"],
        "answer_en": "Āgacchati",
        "answer_hi": "आगच्छति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 86,
        "question_en": "Which of these is the correct form of the verb 'to speak' in Sanskrit?",
        "question_hi": "'बोलना' क्रिया का संस्कृत रूप क्या है?",
        "options_en": ["Brahma", "Brāhmī", "Brahman", "Brahmi"],
        "options_hi": ["ब्रह्मा", "ब्राह्मी", "ब्रह्मन्", "ब्राह्मी"],
        "answer_en": "Brahma",
        "answer_hi": "ब्रह्मा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 87,
        "question_en": "What is the nominative singular form of 'सूर्य'?",
        "question_hi": "'सूर्य' का प्रथमा एकवचन रूप क्या है?",
        "options_en": ["Sūrya", "Sūryam", "Sūryasya", "Sūryaḥ"],
        "options_hi": ["सूर्य", "सूर्यम्", "सूर्यस्य", "सूर्यः"],
        "answer_en": "Sūrya",
        "answer_hi": "सूर्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 88,
        "question_en": "What is the meaning of 'विद्या'?",
        "question_hi": "'विद्या' का अर्थ क्या है?",
        "options_en": ["Knowledge", "Power", "Wisdom", "Strength"],
        "options_hi": ["ज्ञान", "शक्ति", "बुद्धि", "ताकत"],
        "answer_en": "Knowledge",
        "answer_hi": "ज्ञान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 89,
        "question_en": "What is the meaning of 'सिद्धि'?",
        "question_hi": "'सिद्धि' का अर्थ क्या है?",
        "options_en": ["Success", "Failure", "Defeat", "Victory"],
        "options_hi": ["सिद्धि", "विफलता", "पराजय", "विजय"],
        "answer_en": "Success",
        "answer_hi": "सिद्धि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 90,
        "question_en": "What is the Sanskrit word for 'god'?",
        "question_hi": "'ईश्वर' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Iśvara", "Deva", "Brahman", "Purusha"],
        "options_hi": ["ईश्वर", "देव", "ब्रह्मन्", "पुरुष"],
        "answer_en": "Iśvara",
        "answer_hi": "ईश्वर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 91,
        "question_en": "What is the meaning of 'प्रकृति'?",
        "question_hi": "'प्रकृति' का अर्थ क्या है?",
        "options_en": ["Nature", "Power", "Love", "Life"],
        "options_hi": ["प्रकृति", "शक्ति", "प्रेम", "जीवन"],
        "answer_en": "Nature",
        "answer_hi": "प्रकृति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 92,
        "question_en": "What is the Sanskrit word for 'time'?",
        "question_hi": "'काल' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Kāla", "Vīra", "Rāhu", "Aśva"],
        "options_hi": ["काल", "वीर", "राहु", "अश्व"],
        "answer_en": "Kāla",
        "answer_hi": "काल",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 93,
        "question_en": "What is the meaning of 'मृत्यु'?",
        "question_hi": "'मृत्यु' का अर्थ क्या है?",
        "options_en": ["Death", "Life", "Love", "Peace"],
        "options_hi": ["मृत्यु", "जीवन", "प्रेम", "शांति"],
        "answer_en": "Death",
        "answer_hi": "मृत्यु",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 94,
        "question_en": "Which of these is the nominative singular form of 'राजन'?",
        "question_hi": "'राजन' का प्रथमा एकवचन रूप क्या है?",
        "options_en": ["Rājān", "Rājā", "Rājye", "Rājās"],
        "options_hi": ["राजान्", "राजा", "राज्ये", "राजाश्"],
        "answer_en": "Rājā",
        "answer_hi": "राजा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 95,
        "question_en": "What is the meaning of 'वह'?",
        "question_hi": "'वह' का अर्थ क्या है?",
        "options_en": ["He", "She", "It", "They"],
        "options_hi": ["वह", "वह", "यह", "वे"],
        "answer_en": "He",
        "answer_hi": "वह",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 96,
        "question_en": "What is the correct form of 'to write' in Sanskrit?",
        "question_hi": "'लिखना' क्रिया का संस्कृत रूप क्या है?",
        "options_en": ["Likhati", "Likhami", "Likhanti", "Likhate"],
        "options_hi": ["लिखति", "लिखामि", "लिखन्ति", "लिखते"],
        "answer_en": "Likhati",
        "answer_hi": "लिखति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 97,
        "question_en": "What is the meaning of 'वयम्'?",
        "question_hi": "'वयम्' का अर्थ क्या है?",
        "options_en": ["We", "You", "They", "I"],
        "options_hi": ["वयं", "तुम", "वे", "मैं"],
        "answer_en": "We",
        "answer_hi": "वयं",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 98,
        "question_en": "Which of these words means 'to go'?",
        "question_hi": "'जाना' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Gacchati", "Agacchati", "Chalati", "Kurute"],
        "options_hi": ["गच्छति", "आगच्छति", "चलति", "कुरुते"],
        "answer_en": "Gacchati",
        "answer_hi": "गच्छति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 99,
        "question_en": "What is the meaning of 'समाज'?",
        "question_hi": "'समाज' का अर्थ क्या है?",
        "options_en": ["Society", "Group", "Religion", "Family"],
        "options_hi": ["समाज", "समूह", "धर्म", "परिवार"],
        "answer_en": "Society",
        "answer_hi": "समाज",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 100,
        "question_en": "What is the nominative singular form of 'पुस्तक'?",
        "question_hi": "'पुस्तक' का प्रथमा एकवचन रूप क्या है?",
        "options_en": ["Pustaka", "Pustakam", "Pustakasya", "Pustakāḥ"],
        "options_hi": ["पुस्तक", "पुस्तकम्", "पुस्तकस्य", "पुस्तकाः"],
        "answer_en": "Pustaka",
        "answer_hi": "पुस्तक",
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