
const questions =[
    {
      "num": 1,
      "question_en": "What is the meaning of 'वेद'?",
      "question_hi": "'वेद' का अर्थ क्या है?",
      "options_en": ["knowledge", "wisdom", "book", "ritual"],
      "options_hi": ["ज्ञान", "बुद्धिमत्ता", "पुस्तक", "विधि"],
      "answer_en": "knowledge",
      "answer_hi": "ज्ञान",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "What is the meaning of 'धर्म'?",
      "question_hi": "'धर्म' का अर्थ क्या है?",
      "options_en": ["duty", "path", "life", "knowledge"],
      "options_hi": ["धर्म", "मार्ग", "जीवन", "ज्ञान"],
      "answer_en": "duty",
      "answer_hi": "धर्म",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "What is the meaning of 'नदी'?",
      "question_hi": "'नदी' का अर्थ क्या है?",
      "options_en": ["river", "mountain", "forest", "desert"],
      "options_hi": ["नदी", "पर्वत", "वन", "रेगिस्तान"],
      "answer_en": "river",
      "answer_hi": "नदी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "What is the meaning of 'आनन्द'?",
      "question_hi": "'आनन्द' का अर्थ क्या है?",
      "options_en": ["happiness", "sorrow", "strength", "anger"],
      "options_hi": ["आनंद", "दुःख", "शक्ति", "क्रोध"],
      "answer_en": "happiness",
      "answer_hi": "आनन्द",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "What is the meaning of 'शान्ति'?",
      "question_hi": "'शान्ति' का अर्थ क्या है?",
      "options_en": ["peace", "anger", "strength", "courage"],
      "options_hi": ["शांति", "क्रोध", "शक्ति", "साहस"],
      "answer_en": "peace",
      "answer_hi": "शांति",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "What is the meaning of 'सपत्नि'?",
      "question_hi": "'सपत्नि' का अर्थ क्या है?",
      "options_en": ["rival wife", "sister", "friend", "stranger"],
      "options_hi": ["सहपत्नी", "बहन", "मित्र", "अजनबी"],
      "answer_en": "rival wife",
      "answer_hi": "सहपत्नी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "What is the meaning of 'कान्त'?",
      "question_hi": "'कान्त' का अर्थ क्या है?",
      "options_en": ["beloved", "friend", "king", "mother"],
      "options_hi": ["प्रिय", "मित्र", "राजा", "माँ"],
      "answer_en": "beloved",
      "answer_hi": "प्रिय",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "What is the meaning of 'नारी'?",
      "question_hi": "'नारी' का अर्थ क्या है?",
      "options_en": ["woman", "man", "child", "elder"],
      "options_hi": ["नारी", "पुरुष", "बच्चा", "बुजुर्ग"],
      "answer_en": "woman",
      "answer_hi": "नारी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "What is the meaning of 'मित्र'?",
      "question_hi": "'मित्र' का अर्थ क्या है?",
      "options_en": ["friend", "enemy", "stranger", "leader"],
      "options_hi": ["मित्र", "शत्रु", "अजनबी", "नेता"],
      "answer_en": "friend",
      "answer_hi": "मित्र",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
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
      "num": 11,
      "question_en": "What is the meaning of 'वीर'?",
      "question_hi": "'वीर' का अर्थ क्या है?",
      "options_en": ["brave", "wise", "strong", "rich"],
      "options_hi": ["वीर", "बुद्धिमान", "मजबूत", "धनी"],
      "answer_en": "brave",
      "answer_hi": "वीर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "What is the meaning of 'विद्या'?",
      "question_hi": "'विद्या' का अर्थ क्या है?",
      "options_en": ["knowledge", "wealth", "strength", "life"],
      "options_hi": ["विद्या", "धन", "शक्ति", "जीवन"],
      "answer_en": "knowledge",
      "answer_hi": "विद्या",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "What is the meaning of 'स्मरण'?",
      "question_hi": "'स्मरण' का अर्थ क्या है?",
      "options_en": ["memory", "forgetting", "thinking", "dreaming"],
      "options_hi": ["स्मरण", "भूलना", "सोच", "सपना"],
      "answer_en": "memory",
      "answer_hi": "स्मरण",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "What is the meaning of 'कर्म'?",
      "question_hi": "'कर्म' का अर्थ क्या है?",
      "options_en": ["action", "result", "thought", "speech"],
      "options_hi": ["कर्म", "फल", "विचार", "वचन"],
      "answer_en": "action",
      "answer_hi": "कर्म",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "What is the meaning of 'दीन'?",
      "question_hi": "'दीन' का अर्थ क्या है?",
      "options_en": ["poor", "rich", "brave", "wise"],
      "options_hi": ["गरीब", "अमीर", "वीर", "बुद्धिमान"],
      "answer_en": "poor",
      "answer_hi": "गरीब",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "What is the meaning of 'स्वदेश'?",
      "question_hi": "'स्वदेश' का अर्थ क्या है?",
      "options_en": ["own country", "foreign country", "city", "town"],
      "options_hi": ["स्वदेश", "विदेश", "नगर", "कस्बा"],
      "answer_en": "own country",
      "answer_hi": "स्वदेश",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "What is the meaning of 'राजा'?",
      "question_hi": "'राजा' का अर्थ क्या है?",
      "options_en": ["king", "queen", "prince", "warrior"],
      "options_hi": ["राजा", "रानी", "राजकुमार", "योद्धा"],
      "answer_en": "king",
      "answer_hi": "राजा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "What is the meaning of 'सुर'?",
      "question_hi": "'सुर' का अर्थ क्या है?",
      "options_en": ["god", "devil", "sage", "angel"],
      "options_hi": ["ईश्वर", "राक्षस", "ऋषि", "देवदूत"],
      "answer_en": "god",
      "answer_hi": "ईश्वर",
      "attempted": false,
      "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the meaning of 'शिव'?",
        "question_hi": "'शिव' का अर्थ क्या है?",
        "options_en": ["god", "devil", "king", "warrior"],
        "options_hi": ["ईश्वर", "राक्षस", "राजा", "योद्धा"],
        "answer_en": "god",
        "answer_hi": "ईश्वर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "What is the meaning of 'मित्र'?",
        "question_hi": "'मित्र' का अर्थ क्या है?",
        "options_en": ["friend", "enemy", "stranger", "leader"],
        "options_hi": ["मित्र", "शत्रु", "अजनबी", "नेता"],
        "answer_en": "friend",
        "answer_hi": "मित्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "What is the meaning of 'सुर'?",
        "question_hi": "'सुर' का अर्थ क्या है?",
        "options_en": ["god", "devil", "sage", "angel"],
        "options_hi": ["ईश्वर", "राक्षस", "ऋषि", "देवदूत"],
        "answer_en": "god",
        "answer_hi": "ईश्वर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "What is the meaning of 'राजा'?",
        "question_hi": "'राजा' का अर्थ क्या है?",
        "options_en": ["king", "queen", "prince", "warrior"],
        "options_hi": ["राजा", "रानी", "राजकुमार", "योद्धा"],
        "answer_en": "king",
        "answer_hi": "राजा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "What is the meaning of 'स्वदेश'?",
        "question_hi": "'स्वदेश' का अर्थ क्या है?",
        "options_en": ["own country", "foreign country", "city", "town"],
        "options_hi": ["स्वदेश", "विदेश", "नगर", "कस्बा"],
        "answer_en": "own country",
        "answer_hi": "स्वदेश",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "What is the meaning of 'दीन'?",
        "question_hi": "'दीन' का अर्थ क्या है?",
        "options_en": ["poor", "rich", "brave", "wise"],
        "options_hi": ["गरीब", "अमीर", "वीर", "बुद्धिमान"],
        "answer_en": "poor",
        "answer_hi": "गरीब",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "What is the meaning of 'कर्म'?",
        "question_hi": "'कर्म' का अर्थ क्या है?",
        "options_en": ["action", "result", "thought", "speech"],
        "options_hi": ["कर्म", "फल", "विचार", "वचन"],
        "answer_en": "action",
        "answer_hi": "कर्म",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "What is the meaning of 'स्मरण'?",
        "question_hi": "'स्मरण' का अर्थ क्या है?",
        "options_en": ["memory", "forgetting", "thinking", "dreaming"],
        "options_hi": ["स्मरण", "भूलना", "सोच", "सपना"],
        "answer_en": "memory",
        "answer_hi": "स्मरण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "What is the meaning of 'विद्या'?",
        "question_hi": "'विद्या' का अर्थ क्या है?",
        "options_en": ["knowledge", "wealth", "strength", "life"],
        "options_hi": ["विद्या", "धन", "शक्ति", "जीवन"],
        "answer_en": "knowledge",
        "answer_hi": "विद्या",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "What is the meaning of 'वीर'?",
        "question_hi": "'वीर' का अर्थ क्या है?",
        "options_en": ["brave", "wise", "strong", "rich"],
        "options_hi": ["वीर", "बुद्धिमान", "मजबूत", "धनी"],
        "answer_en": "brave",
        "answer_hi": "वीर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
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
        "num": 30,
        "question_en": "What is the meaning of 'मित्र'?",
        "question_hi": "'मित्र' का अर्थ क्या है?",
        "options_en": ["friend", "enemy", "stranger", "leader"],
        "options_hi": ["मित्र", "शत्रु", "अजनबी", "नेता"],
        "answer_en": "friend",
        "answer_hi": "मित्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "What is the meaning of 'सपत्नि'?",
        "question_hi": "'सपत्नि' का अर्थ क्या है?",
        "options_en": ["rival wife", "sister", "friend", "stranger"],
        "options_hi": ["सहपत्नी", "बहन", "मित्र", "अजनबी"],
        "answer_en": "rival wife",
        "answer_hi": "सहपत्नी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "What is the meaning of 'कान्त'?",
        "question_hi": "'कान्त' का अर्थ क्या है?",
        "options_en": ["beloved", "friend", "king", "mother"],
        "options_hi": ["प्रिय", "मित्र", "राजा", "माँ"],
        "answer_en": "beloved",
        "answer_hi": "प्रिय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "What is the meaning of 'नारी'?",
        "question_hi": "'नारी' का अर्थ क्या है?",
        "options_en": ["woman", "man", "child", "elder"],
        "options_hi": ["नारी", "पुरुष", "बच्चा", "बुजुर्ग"],
        "answer_en": "woman",
        "answer_hi": "नारी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "What is the meaning of 'कान्तार'?",
        "question_hi": "'कान्तार' का अर्थ क्या है?",
        "options_en": ["forest", "river", "hill", "garden"],
        "options_hi": ["वन", "नदी", "पहाड़ी", "बग़ीचा"],
        "answer_en": "forest",
        "answer_hi": "वन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "What is the meaning of 'शान्ति'?",
        "question_hi": "'शान्ति' का अर्थ क्या है?",
        "options_en": ["peace", "anger", "strength", "courage"],
        "options_hi": ["शांति", "क्रोध", "शक्ति", "साहस"],
        "answer_en": "peace",
        "answer_hi": "शांति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "What is the meaning of 'धर्म'?",
        "question_hi": "'धर्म' का अर्थ क्या है?",
        "options_en": ["duty", "path", "life", "knowledge"],
        "options_hi": ["धर्म", "मार्ग", "जीवन", "ज्ञान"],
        "answer_en": "duty",
        "answer_hi": "धर्म",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "What is the meaning of 'ऋषि'?",
        "question_hi": "'ऋषि' का अर्थ क्या है?",
        "options_en": ["sage", "king", "warrior", "priest"],
        "options_hi": ["ऋषि", "राजा", "योद्धा", "पुजारी"],
        "answer_en": "sage",
        "answer_hi": "ऋषि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "What is the meaning of 'वेद'?",
        "question_hi": "'वेद' का अर्थ क्या है?",
        "options_en": ["knowledge", "ritual", "scripture", "song"],
        "options_hi": ["ज्ञान", "अनुष्ठान", "शास्त्र", "गीत"],
        "answer_en": "scripture",
        "answer_hi": "शास्त्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "What is the meaning of 'ज्ञान'?",
        "question_hi": "'ज्ञान' का अर्थ क्या है?",
        "options_en": ["knowledge", "wealth", "power", "happiness"],
        "options_hi": ["ज्ञान", "धन", "शक्ति", "खुशी"],
        "answer_en": "knowledge",
        "answer_hi": "ज्ञान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "What is the meaning of 'साधना'?",
        "question_hi": "'साधना' का अर्थ क्या है?",
        "options_en": ["practice", "study", "meditation", "action"],
        "options_hi": ["साधना", "अध्यान", "ध्यान", "कर्म"],
        "answer_en": "practice",
        "answer_hi": "साधना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
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
        "num": 42,
        "question_en": "What is the meaning of 'शक्ति'?",
        "question_hi": "'शक्ति' का अर्थ क्या है?",
        "options_en": ["strength", "weakness", "energy", "bravery"],
        "options_hi": ["शक्ति", "दुरबलता", "ऊर्जा", "साहस"],
        "answer_en": "strength",
        "answer_hi": "शक्ति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "What is the meaning of 'विपत्ति'?",
        "question_hi": "'विपत्ति' का अर्थ क्या है?",
        "options_en": ["trouble", "peace", "wealth", "prosperity"],
        "options_hi": ["विपत्ति", "शांति", "धन", "समृद्धि"],
        "answer_en": "trouble",
        "answer_hi": "विपत्ति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "What is the meaning of 'पुण्य'?",
        "question_hi": "'पुण्य' का अर्थ क्या है?",
        "options_en": ["virtue", "sin", "wealth", "strength"],
        "options_hi": ["पुण्य", "पाप", "धन", "शक्ति"],
        "answer_en": "virtue",
        "answer_hi": "पुण्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "What is the meaning of 'विराट'?",
        "question_hi": "'विराट' का अर्थ क्या है?",
        "options_en": ["immense", "small", "powerful", "large"],
        "options_hi": ["विराट", "छोटा", "शक्तिशाली", "बड़ा"],
        "answer_en": "immense",
        "answer_hi": "विराट",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "What is the meaning of 'धैर्य'?",
        "question_hi": "'धैर्य' का अर्थ क्या है?",
        "options_en": ["patience", "courage", "anger", "love"],
        "options_hi": ["धैर्य", "साहस", "क्रोध", "प्रेम"],
        "answer_en": "patience",
        "answer_hi": "धैर्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "What is the meaning of 'सज्जन'?",
        "question_hi": "'सज्जन' का अर्थ क्या है?",
        "options_en": ["good person", "bad person", "child", "elder"],
        "options_hi": ["सज्जन", "दुष्ट", "बच्चा", "बुजुर्ग"],
        "answer_en": "good person",
        "answer_hi": "सज्जन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "What is the meaning of 'दया'?",
        "question_hi": "'दया' का अर्थ क्या है?",
        "options_en": ["compassion", "anger", "strength", "joy"],
        "options_hi": ["दया", "क्रोध", "शक्ति", "आनंद"],
        "answer_en": "compassion",
        "answer_hi": "दया",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "What is the meaning of 'राजनीति'?",
        "question_hi": "'राजनीति' का अर्थ क्या है?",
        "options_en": ["politics", "business", "education", "science"],
        "options_hi": ["राजनीति", "व्यवसाय", "शिक्षा", "विज्ञान"],
        "answer_en": "politics",
        "answer_hi": "राजनीति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "What is the meaning of 'सिद्धि'?",
        "question_hi": "'सिद्धि' का अर्थ क्या है?",
        "options_en": ["achievement", "failure", "success", "problem"],
        "options_hi": ["सिद्धि", "विफलता", "सफलता", "समस्या"],
        "answer_en": "achievement",
        "answer_hi": "सिद्धि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 51,
        "question_en": "What is the meaning of 'यात्रा'?",
        "question_hi": "'यात्रा' का अर्थ क्या है?",
        "options_en": ["journey", "home", "battle", "friend"],
        "options_hi": ["यात्रा", "घर", "युद्ध", "मित्र"],
        "answer_en": "journey",
        "answer_hi": "यात्रा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 52,
        "question_en": "What is the meaning of 'प्रकाश'?",
        "question_hi": "'प्रकाश' का अर्थ क्या है?",
        "options_en": ["light", "darkness", "sleep", "dream"],
        "options_hi": ["प्रकाश", "अंधकार", "नींद", "स्वप्न"],
        "answer_en": "light",
        "answer_hi": "प्रकाश",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 53,
        "question_en": "What is the meaning of 'धन'?",
        "question_hi": "'धन' का अर्थ क्या है?",
        "options_en": ["wealth", "poverty", "food", "strength"],
        "options_hi": ["धन", "दरिद्रता", "आहार", "शक्ति"],
        "answer_en": "wealth",
        "answer_hi": "धन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 54,
        "question_en": "What is the meaning of 'शांत'?",
        "question_hi": "'शांत' का अर्थ क्या है?",
        "options_en": ["calm", "angry", "sad", "happy"],
        "options_hi": ["शांत", "क्रोधित", "उदास", "खुश"],
        "answer_en": "calm",
        "answer_hi": "शांत",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 55,
        "question_en": "What is the meaning of 'उत्साह'?",
        "question_hi": "'उत्साह' का अर्थ क्या है?",
        "options_en": ["enthusiasm", "sleep", "sadness", "anger"],
        "options_hi": ["उत्साह", "नींद", "दुःख", "क्रोध"],
        "answer_en": "enthusiasm",
        "answer_hi": "उत्साह",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 56,
        "question_en": "What is the meaning of 'वृक्ष'?",
        "question_hi": "'वृक्ष' का अर्थ क्या है?",
        "options_en": ["tree", "flower", "leaf", "fruit"],
        "options_hi": ["वृक्ष", "फूल", "पत्ते", "फल"],
        "answer_en": "tree",
        "answer_hi": "वृक्ष",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 57,
        "question_en": "What is the meaning of 'शिष्य'?",
        "question_hi": "'शिष्य' का अर्थ क्या है?",
        "options_en": ["student", "teacher", "friend", "father"],
        "options_hi": ["शिष्य", "गुरु", "मित्र", "पिता"],
        "answer_en": "student",
        "answer_hi": "शिष्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 58,
        "question_en": "What is the meaning of 'गुरु'?",
        "question_hi": "'गुरु' का अर्थ क्या है?",
        "options_en": ["teacher", "student", "friend", "parent"],
        "options_hi": ["गुरु", "शिष्य", "मित्र", "माता-पिता"],
        "answer_en": "teacher",
        "answer_hi": "गुरु",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 59,
        "question_en": "What is the meaning of 'राजा'?",
        "question_hi": "'राजा' का अर्थ क्या है?",
        "options_en": ["king", "queen", "prince", "minister"],
        "options_hi": ["राजा", "रानी", "राजकुमार", "मंत्री"],
        "answer_en": "king",
        "answer_hi": "राजा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 60,
        "question_en": "What is the meaning of 'रात्रि'?",
        "question_hi": "'रात्रि' का अर्थ क्या है?",
        "options_en": ["night", "day", "morning", "evening"],
        "options_hi": ["रात्रि", "दिन", "सुबह", "शाम"],
        "answer_en": "night",
        "answer_hi": "रात्रि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 61,
        "question_en": "What is the meaning of 'आनंद'?",
        "question_hi": "'आनंद' का अर्थ क्या है?",
        "options_en": ["joy", "sorrow", "strength", "defeat"],
        "options_hi": ["आनंद", "दुःख", "शक्ति", "पराजय"],
        "answer_en": "joy",
        "answer_hi": "आनंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 62,
        "question_en": "What is the meaning of 'बल'?",
        "question_hi": "'बल' का अर्थ क्या है?",
        "options_en": ["strength", "weakness", "speed", "peace"],
        "options_hi": ["बल", "दुरबलता", "गति", "शांति"],
        "answer_en": "strength",
        "answer_hi": "बल",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 63,
        "question_en": "What is the meaning of 'सर्व'?",
        "question_hi": "'सर्व' का अर्थ क्या है?",
        "options_en": ["all", "none", "few", "many"],
        "options_hi": ["सर्व", "कोई नहीं", "कुछ", "कई"],
        "answer_en": "all",
        "answer_hi": "सर्व",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 64,
        "question_en": "What is the meaning of 'समाज'?",
        "question_hi": "'समाज' का अर्थ क्या है?",
        "options_en": ["society", "family", "government", "group"],
        "options_hi": ["समाज", "परिवार", "सरकार", "समूह"],
        "answer_en": "society",
        "answer_hi": "समाज",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 65,
        "question_en": "What is the meaning of 'शब्द'?",
        "question_hi": "'शब्द' का अर्थ क्या है?",
        "options_en": ["word", "sentence", "letter", "language"],
        "options_hi": ["शब्द", "वाक्य", "अक्षर", "भाषा"],
        "answer_en": "word",
        "answer_hi": "शब्द",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 66,
        "question_en": "What is the meaning of 'अश्व'?",
        "question_hi": "'अश्व' का अर्थ क्या है?",
        "options_en": ["horse", "camel", "elephant", "cow"],
        "options_hi": ["अश्व", "ऊंट", "हाथी", "गाय"],
        "answer_en": "horse",
        "answer_hi": "अश्व",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 67,
        "question_en": "What is the meaning of 'कृषि'?",
        "question_hi": "'कृषि' का अर्थ क्या है?",
        "options_en": ["farming", "trade", "education", "medicine"],
        "options_hi": ["कृषि", "व्यापार", "शिक्षा", "चिकित्सा"],
        "answer_en": "farming",
        "answer_hi": "कृषि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 68,
        "question_en": "What is the meaning of 'पक्षी'?",
        "question_hi": "'पक्षी' का अर्थ क्या है?",
        "options_en": ["bird", "animal", "tree", "flower"],
        "options_hi": ["पक्षी", "पशु", "वृक्ष", "फूल"],
        "answer_en": "bird",
        "answer_hi": "पक्षी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 69,
        "question_en": "What is the meaning of 'समुद्र'?",
        "question_hi": "'समुद्र' का अर्थ क्या है?",
        "options_en": ["ocean", "river", "lake", "mountain"],
        "options_hi": ["समुद्र", "नदी", "झील", "पहाड़"],
        "answer_en": "ocean",
        "answer_hi": "समुद्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 70,
        "question_en": "What is the meaning of 'स्वधर्म'?",
        "question_hi": "'स्वधर्म' का अर्थ क्या है?",
        "options_en": ["one's own duty", "friendship", "love", "truth"],
        "options_hi": ["स्वधर्म", "मित्रता", "प्रेम", "सत्य"],
        "answer_en": "one's own duty",
        "answer_hi": "स्वधर्म",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 71,
        "question_en": "What is the meaning of 'कर्म'?",
        "question_hi": "'कर्म' का अर्थ क्या है?",
        "options_en": ["action", "thought", "speech", "desire"],
        "options_hi": ["कर्म", "विचार", "बोल", "इच्छा"],
        "answer_en": "action",
        "answer_hi": "कर्म",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 72,
        "question_en": "What is the meaning of 'धर्म'?",
        "question_hi": "'धर्म' का अर्थ क्या है?",
        "options_en": ["duty", "religion", "knowledge", "strength"],
        "options_hi": ["धर्म", "धर्म", "ज्ञान", "शक्ति"],
        "answer_en": "duty",
        "answer_hi": "धर्म",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 73,
        "question_en": "What is the meaning of 'शक्ति'?",
        "question_hi": "'शक्ति' का अर्थ क्या है?",
        "options_en": ["strength", "weakness", "love", "joy"],
        "options_hi": ["शक्ति", "दुरबलता", "प्रेम", "आनंद"],
        "answer_en": "strength",
        "answer_hi": "शक्ति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 74,
        "question_en": "What is the meaning of 'सिद्धि'?",
        "question_hi": "'सिद्धि' का अर्थ क्या है?",
        "options_en": ["success", "failure", "joy", "peace"],
        "options_hi": ["सिद्धि", "विफलता", "आनंद", "शांति"],
        "answer_en": "success",
        "answer_hi": "सिद्धि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 75,
        "question_en": "What is the meaning of 'ज्ञान'?",
        "question_hi": "'ज्ञान' का अर्थ क्या है?",
        "options_en": ["knowledge", "wisdom", "understanding", "strength"],
        "options_hi": ["ज्ञान", "बुद्धिमत्ता", "समझ", "शक्ति"],
        "answer_en": "knowledge",
        "answer_hi": "ज्ञान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 76,
        "question_en": "What is the meaning of 'विवेक'?",
        "question_hi": "'विवेक' का अर्थ क्या है?",
        "options_en": ["discretion", "anger", "strength", "weakness"],
        "options_hi": ["विवेक", "क्रोध", "शक्ति", "दुरबलता"],
        "answer_en": "discretion",
        "answer_hi": "विवेक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 77,
        "question_en": "What is the meaning of 'साधन'?",
        "question_hi": "'साधन' का अर्थ क्या है?",
        "options_en": ["means", "action", "destination", "wish"],
        "options_hi": ["साधन", "कर्म", "गंतव्य", "इच्छा"],
        "answer_en": "means",
        "answer_hi": "साधन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 78,
        "question_en": "What is the meaning of 'व्रत'?",
        "question_hi": "'व्रत' का अर्थ क्या है?",
        "options_en": ["vow", "promise", "goal", "action"],
        "options_hi": ["व्रत", "प्रतिज्ञा", "लक्ष्य", "कर्म"],
        "answer_en": "vow",
        "answer_hi": "व्रत",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 79,
        "question_en": "What is the meaning of 'ध्यान'?",
        "question_hi": "'ध्यान' का अर्थ क्या है?",
        "options_en": ["meditation", "action", "thought", "strength"],
        "options_hi": ["ध्यान", "कर्म", "विचार", "शक्ति"],
        "answer_en": "meditation",
        "answer_hi": "ध्यान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 80,
        "question_en": "What is the meaning of 'नमः'?",
        "question_hi": "'नमः' का अर्थ क्या है?",
        "options_en": ["salutation", "goodbye", "anger", "strength"],
        "options_hi": ["नमः", "अलविदा", "क्रोध", "शक्ति"],
        "answer_en": "salutation",
        "answer_hi": "नमः",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 81,
        "question_en": "What is the meaning of 'शरण'?",
        "question_hi": "'शरण' का अर्थ क्या है?",
        "options_en": ["refuge", "strength", "peace", "wealth"],
        "options_hi": ["शरण", "शक्ति", "शांति", "धन"],
        "answer_en": "refuge",
        "answer_hi": "शरण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 82,
        "question_en": "What is the meaning of 'संपत्ति'?",
        "question_hi": "'संपत्ति' का अर्थ क्या है?",
        "options_en": ["property", "strength", "wealth", "peace"],
        "options_hi": ["संपत्ति", "शक्ति", "धन", "शांति"],
        "answer_en": "wealth",
        "answer_hi": "संपत्ति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 83,
        "question_en": "What is the meaning of 'अर्थ'?",
        "question_hi": "'अर्थ' का अर्थ क्या है?",
        "options_en": ["meaning", "wealth", "action", "peace"],
        "options_hi": ["अर्थ", "धन", "कर्म", "शांति"],
        "answer_en": "meaning",
        "answer_hi": "अर्थ",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 84,
        "question_en": "What is the meaning of 'शरीर'?",
        "question_hi": "'शरीर' का अर्थ क्या है?",
        "options_en": ["body", "soul", "strength", "thought"],
        "options_hi": ["शरीर", "आत्मा", "शक्ति", "विचार"],
        "answer_en": "body",
        "answer_hi": "शरीर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 85,
        "question_en": "What is the meaning of 'मित्र'?",
        "question_hi": "'मित्र' का अर्थ क्या है?",
        "options_en": ["friend", "enemy", "teacher", "king"],
        "options_hi": ["मित्र", "दुश्मन", "गुरु", "राजा"],
        "answer_en": "friend",
        "answer_hi": "मित्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 86,
        "question_en": "What is the meaning of 'संपूर्ण'?",
        "question_hi": "'संपूर्ण' का अर्थ क्या है?",
        "options_en": ["complete", "partial", "strong", "weak"],
        "options_hi": ["संपूर्ण", "आंशिक", "शक्तिशाली", "दुरबल"],
        "answer_en": "complete",
        "answer_hi": "संपूर्ण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 87,
        "question_en": "What is the meaning of 'पार्थ'?",
        "question_hi": "'पार्थ' का अर्थ क्या है?",
        "options_en": ["son of Kunti", "son of Dhritarashtra", "son of Bhima", "son of Krishna"],
        "options_hi": ["पार्थ", "धृतराष्ट्र का पुत्र", "भीम का पुत्र", "कृष्ण का पुत्र"],
        "answer_en": "son of Kunti",
        "answer_hi": "कुन्ती का पुत्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 88,
        "question_en": "What is the meaning of 'अर्जुन'?",
        "question_hi": "'अर्जुन' का अर्थ क्या है?",
        "options_en": ["one who is bright", "one who is wise", "one who is strong", "one who is swift"],
        "options_hi": ["अर्जुन", "जो उज्जवल है", "जो बुद्धिमान है", "जो शक्तिशाली है", "जो तेज़ है"],
        "answer_en": "one who is bright",
        "answer_hi": "जो उज्जवल है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 89,
        "question_en": "What is the meaning of 'शिव'?",
        "question_hi": "'शिव' का अर्थ क्या है?",
        "options_en": ["auspicious", "destructive", "creative", "preserving"],
        "options_hi": ["शिव", "शुभ", "विनाशक", "सृजनात्मक", "संरक्षक"],
        "answer_en": "auspicious",
        "answer_hi": "शुभ",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 90,
        "question_en": "What is the meaning of 'राम'?",
        "question_hi": "'राम' का अर्थ क्या है?",
        "options_en": ["pleasing", "king", "supreme being", "brave"],
        "options_hi": ["राम", "आकर्षक", "राजा", "परमात्मा", "वीर"],
        "answer_en": "pleasing",
        "answer_hi": "आकर्षक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 91,
        "question_en": "What is the meaning of 'विष्णु'?",
        "question_hi": "'विष्णु' का अर्थ क्या है?",
        "options_en": ["preserver", "destroyer", "creator", "protector"],
        "options_hi": ["विष्णु", "संरक्षक", "विनाशक", "सृजनकर्ता", "रक्षक"],
        "answer_en": "preserver",
        "answer_hi": "संरक्षक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 92,
        "question_en": "What is the meaning of 'शंकर'?",
        "question_hi": "'शंकर' का अर्थ क्या है?",
        "options_en": ["benefactor", "destroyer", "meditator", "goddess"],
        "options_hi": ["शंकर", "कल्याणकारी", "विनाशक", "ध्यान करने वाला", "देवी"],
        "answer_en": "benefactor",
        "answer_hi": "कल्याणकारी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 93,
        "question_en": "What is the meaning of 'कृष्ण'?",
        "question_hi": "'कृष्ण' का अर्थ क्या है?",
        "options_en": ["dark", "god", "warrior", "wise"],
        "options_hi": ["कृष्ण", "काला", "ईश्वर", "युद्धक", "बुद्धिमान"],
        "answer_en": "dark",
        "answer_hi": "काला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 94,
        "question_en": "What is the meaning of 'दुर्योधन'?",
        "question_hi": "'दुर्योधन' का अर्थ क्या है?",
        "options_en": ["son of Dhritarashtra", "son of Shakuni", "son of Kunti", "son of Pandu"],
        "options_hi": ["दुर्योधन", "धृतराष्ट्र का पुत्र", "शकुनि का पुत्र", "कुन्ती का पुत्र", "पांडु का पुत्र"],
        "answer_en": "son of Dhritarashtra",
        "answer_hi": "धृतराष्ट्र का पुत्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 95,
        "question_en": "What is the meaning of 'भीम'?",
        "question_hi": "'भीम' का अर्थ क्या है?",
        "options_en": ["strong", "wise", "brave", "foolish"],
        "options_hi": ["भीम", "शक्तिशाली", "बुद्धिमान", "वीर", "मूर्ख"],
        "answer_en": "strong",
        "answer_hi": "शक्तिशाली",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 96,
        "question_en": "What is the meaning of 'युधिष्ठिर'?",
        "question_hi": "'युधिष्ठिर' का अर्थ क्या है?",
        "options_en": ["one who is firm in war", "one who is intelligent", "one who is wise", "one who is brave"],
        "options_hi": ["युधिष्ठिर", "जो युद्ध में दृढ़ है", "जो बुद्धिमान है", "जो विवेकशील है", "जो वीर है"],
        "answer_en": "one who is firm in war",
        "answer_hi": "जो युद्ध में दृढ़ है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 97,
        "question_en": "What is the meaning of 'द्रौपदी'?",
        "question_hi": "'द्रौपदी' का अर्थ क्या है?",
        "options_en": ["wife of the Pandavas", "queen", "sister of Krishna", "warrior"],
        "options_hi": ["द्रौपदी", "पांडवों की पत्नी", "रानी", "कृष्ण की बहन", "युद्ध कारी"],
        "answer_en": "wife of the Pandavas",
        "answer_hi": "पांडवों की पत्नी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 98,
        "question_en": "What is the meaning of 'साक्षात्कार'?",
        "question_hi": "'साक्षात्कार' का अर्थ क्या है?",
        "options_en": ["direct experience", "opinion", "discourse", "teachings"],
        "options_hi": ["साक्षात्कार", "प्रत्यक्ष अनुभव", "राय", "उपदेश", "शिक्षा"],
        "answer_en": "direct experience",
        "answer_hi": "प्रत्यक्ष अनुभव",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 99,
        "question_en": "What is the meaning of 'ध्यान'?",
        "question_hi": "'ध्यान' का अर्थ क्या है?",
        "options_en": ["meditation", "action", "strength", "devotion"],
        "options_hi": ["ध्यान", "कर्म", "शक्ति", "भक्ति"],
        "answer_en": "meditation",
        "answer_hi": "ध्यान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 100,
        "question_en": "What is the meaning of 'शांति'?",
        "question_hi": "'शांति' का अर्थ क्या है?",
        "options_en": ["peace", "war", "strength", "battle"],
        "options_hi": ["शांति", "युद्ध", "शक्ति", "संघर्ष"],
        "answer_en": "peace",
        "answer_hi": "शांति",
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