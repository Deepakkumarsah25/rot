
const questions = [
    {
        "num": 1,
        "question_en": "What is the synonym of the word 'benevolent'?",
        "question_hi": "'benevolent' शब्द का पर्यायवाची क्या है?",
        "options_en": ["Kind", "Cruel", "Lazy", "Strict"],
        "options_hi": ["दयालु", "क्रूर", "आलसी", "कठोर"],
        "answer_en": "Kind",
        "answer_hi": "दयालु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which word is the antonym of 'transparent'?",
        "question_hi": "'transparent' शब्द का विलोम क्या है?",
        "options_en": ["Clear", "Opaque", "Bright", "Glass"],
        "options_hi": ["साफ", "अस्पष्ट", "चमकदार", "कांच"],
        "answer_en": "Opaque",
        "answer_hi": "अस्पष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Choose the correct passive voice: 'She sings a song.'",
        "question_hi": "'She sings a song.' का सही passive voice चुनें।",
        "options_en": [
            "A song is sung by her.",
            "A song was sung by her.",
            "A song is singing by her.",
            "A song has been sung by her."
        ],
        "options_hi": [
            "एक गीत उसके द्वारा गाया जाता है।",
            "एक गीत उसके द्वारा गाया गया।",
            "एक गीत उसके द्वारा गाया जा रहा है।",
            "एक गीत उसके द्वारा गाया गया है।"
        ],
        "answer_en": "A song is sung by her.",
        "answer_hi": "एक गीत उसके द्वारा गाया जाता है।",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Identify the correctly spelt word:",
        "question_hi": "सही वर्तनी वाले शब्द की पहचान करें:",
        "options_en": ["Recieve", "Receive", "Recive", "Receeve"],
        "options_hi": ["Recieve", "Receive", "Recive", "Receeve"],
        "answer_en": "Receive",
        "answer_hi": "Receive",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which word means the same as 'frequently'?",
        "question_hi": "'frequently' का समानार्थी शब्द क्या है?",
        "options_en": ["Rarely", "Always", "Often", "Hardly"],
        "options_hi": ["कभी-कभी", "हमेशा", "अक्सर", "मुश्किल से"],
        "answer_en": "Often",
        "answer_hi": "अक्सर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Choose the correct indirect speech: He said, 'I am tired.'",
        "question_hi": "सही अप्रत्यक्ष वाक्य चुनें: He said, 'I am tired.'",
        "options_en": [
            "He said that he is tired.",
            "He said that he was tired.",
            "He said that I was tired.",
            "He said he will be tired."
        ],
        "options_hi": [
            "उसने कहा कि वह थका हुआ है।",
            "उसने कहा कि वह थका हुआ था।",
            "उसने कहा कि मैं थका हुआ था।",
            "उसने कहा कि वह थका होगा।"
        ],
        "answer_en": "He said that he was tired.",
        "answer_hi": "उसने कहा कि वह थका हुआ था।",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the noun form of the word 'decide'?",
        "question_hi": "'decide' शब्द का संज्ञा रूप क्या है?",
        "options_en": ["Deciding", "Decision", "Decisive", "Decided"],
        "options_hi": ["Deciding", "Decision", "Decisive", "Decided"],
        "answer_en": "Decision",
        "answer_hi": "Decision",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Choose the correct article: He is ___ honest man.",
        "question_hi": "सही article चुनें: He is ___ honest man.",
        "options_en": ["a", "an", "the", "no article"],
        "options_hi": ["a", "an", "the", "कोई नहीं"],
        "answer_en": "an",
        "answer_hi": "an",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Fill in the blank: She ___ to school daily.",
        "question_hi": "रिक्त स्थान भरें: She ___ to school daily.",
        "options_en": ["go", "goes", "went", "gone"],
        "options_hi": ["जाती", "जाता", "गई", "गई है"],
        "answer_en": "goes",
        "answer_hi": "जाती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Identify the part of speech of the word 'quickly':",
        "question_hi": "'quickly' शब्द का part of speech पहचानें:",
        "options_en": ["Noun", "Verb", "Adverb", "Adjective"],
        "options_hi": ["संज्ञा", "क्रिया", "क्रिया विशेषण", "विशेषण"],
        "answer_en": "Adverb",
        "answer_hi": "क्रिया विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Choose the correct form of the verb: She ___ a book now.",
        "question_hi": "सही क्रिया रूप चुनें: She ___ a book now.",
        "options_en": ["read", "reads", "is reading", "reading"],
        "options_hi": ["पढ़ती", "पढ़ती है", "पढ़ रही है", "पढ़ना"],
        "answer_en": "is reading",
        "answer_hi": "पढ़ रही है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which sentence is in the future tense?",
        "question_hi": "कौन-सा वाक्य भविष्य काल में है?",
        "options_en": [
            "I will go to market.",
            "I am going to market.",
            "I went to market.",
            "I go to market."
        ],
        "options_hi": [
            "मैं बाजार जाऊँगा।",
            "मैं बाजार जा रहा हूँ।",
            "मैं बाजार गया।",
            "मैं बाजार जाता हूँ।"
        ],
        "answer_en": "I will go to market.",
        "answer_hi": "मैं बाजार जाऊँगा।",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Select the correctly punctuated sentence:",
        "question_hi": "सही विराम चिन्ह वाला वाक्य चुनें:",
        "options_en": [
            "Whats your name?",
            "What’s your name?",
            "What’s your name.",
            "Whats your name."
        ],
        "options_hi": [
            "Whats your name?",
            "What’s your name?",
            "What’s your name.",
            "Whats your name."
        ],
        "answer_en": "What’s your name?",
        "answer_hi": "What’s your name?",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Choose the correct preposition: He is fond ___ music.",
        "question_hi": "सही preposition चुनें: He is fond ___ music.",
        "options_en": ["of", "for", "on", "at"],
        "options_hi": ["का", "के लिए", "पर", "में"],
        "answer_en": "of",
        "answer_hi": "का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the feminine form of 'actor'?",
        "question_hi": "'actor' का स्त्रीलिंग रूप क्या है?",
        "options_en": ["Actress", "Actors", "Act", "Acted"],
        "options_hi": ["Actress", "Actors", "Act", "Acted"],
        "answer_en": "Actress",
        "answer_hi": "Actress",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Choose the correct conjunction: He is poor ___ honest.",
        "question_hi": "सही conjunction चुनें: He is poor ___ honest.",
        "options_en": ["but", "and", "or", "so"],
        "options_hi": ["लेकिन", "और", "या", "इसलिए"],
        "answer_en": "but",
        "answer_hi": "लेकिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Identify the tense: She had written a letter.",
        "question_hi": "काल पहचानें: She had written a letter.",
        "options_en": ["Past perfect", "Present perfect", "Future perfect", "Simple past"],
        "options_hi": ["भूत पूर्ण", "वर्तमान पूर्ण", "भविष्य पूर्ण", "सरल भूत"],
        "answer_en": "Past perfect",
        "answer_hi": "भूत पूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which is a compound word?",
        "question_hi": "कौन-सा शब्द संयुक्त शब्द है?",
        "options_en": ["Sunlight", "Light", "Sunny", "Shine"],
        "options_hi": ["Sunlight", "Light", "Sunny", "Shine"],
        "answer_en": "Sunlight",
        "answer_hi": "Sunlight",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Find the plural of 'child':",
        "question_hi": "'child' का बहुवचन क्या है?",
        "options_en": ["Childs", "Children", "Childes", "Childrens"],
        "options_hi": ["Childs", "Children", "Childes", "Childrens"],
        "answer_en": "Children",
        "answer_hi": "Children",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which of the following is an abstract noun?",
        "question_hi": "निम्नलिखित में से कौन-सा शब्द भाववाचक संज्ञा है?",
        "options_en": ["Love", "Dog", "Table", "Chair"],
        "options_hi": ["प्रेम", "कुत्ता", "मेज", "कुर्सी"],
        "answer_en": "Love",
        "answer_hi": "प्रेम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Who is the author of 'The Portrait of a Lady'?",
        "question_hi": "'The Portrait of a Lady' के लेखक कौन हैं?",
        "options_en": ["R.K. Narayan", "Khushwant Singh", "Lalita Tademy", "William Shakespeare"],
        "options_hi": ["र.क. नारायण", "खुशवंत सिंह", "ललिता तादेमी", "विलियम शेक्सपियर"],
        "answer_en": "Khushwant Singh",
        "answer_hi": "खुशवंत सिंह",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "What is the central theme of the poem 'The Ballad of Puran Bhagat'?",
        "question_hi": "'The Ballad of Puran Bhagat' कविता का केंद्रीय विषय क्या है?",
        "options_en": ["Love and Sacrifice", "Fate and Destiny", "Revenge and Justice", "Human Suffering"],
        "options_hi": ["प्रेम और बलिदान", "भाग्य और नियति", "बदला और न्याय", "मानव कष्ट"],
        "answer_en": "Fate and Destiny",
        "answer_hi": "भाग्य और नियति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Who is the author of the poem 'A Photograph'?",
        "question_hi": "'A Photograph' कविता की लेखक कौन हैं?",
        "options_en": ["Ravi Verma", "Kamala Das", "Sarojini Naidu", "M.K. Gandhi"],
        "options_hi": ["रवि वर्मा", "कमला दास", "सरोजिनी नायडू", "महात्मा गांधी"],
        "answer_en": "Kamala Das",
        "answer_hi": "कमला दास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Which poem is written by William Wordsworth?",
        "question_hi": "विलियम वर्ड्सवर्थ द्वारा कौन सी कविता लिखी गई है?",
        "options_en": ["The Ballad of Puran Bhagat", "The Solitary Reaper", "A Photograph", "The Road Not Taken"],
        "options_hi": ["The Ballad of Puran Bhagat", "The Solitary Reaper", "A Photograph", "The Road Not Taken"],
        "answer_en": "The Solitary Reaper",
        "answer_hi": "The Solitary Reaper",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "What is the main idea of the poem 'The Road Not Taken'?",
        "question_hi": "'The Road Not Taken' कविता का मुख्य विचार क्या है?",
        "options_en": ["Decision and Consequences", "Love and Loss", "The Beauty of Nature", "Hope and Despair"],
        "options_hi": ["निर्णय और परिणाम", "प्रेम और हानि", "प्रकृति की सुंदरता", "आशा और निराशा"],
        "answer_en": "Decision and Consequences",
        "answer_hi": "निर्णय और परिणाम",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "In the story 'The Hack Driver', what does the narrator want to do?",
        "question_hi": "'The Hack Driver' कहानी में कथाकार क्या करना चाहता है?",
        "options_en": ["Become a lawyer", "Become a judge", "Work as a clerk", "Work as a hack driver"],
        "options_hi": ["वकील बनना", "न्यायाधीश बनना", "क्लर्क के रूप में काम करना", "हैक ड्राइवर के रूप में काम करना"],
        "answer_en": "Work as a clerk",
        "answer_hi": "क्लर्क के रूप में काम करना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "In the story 'The Rattrap', who is the main character?",
        "question_hi": "'The Rattrap' कहानी का मुख्य पात्र कौन है?",
        "options_en": ["The peddler", "The rich merchant", "The old lady", "The soldier"],
        "options_hi": ["बेचने वाला", "अमीर व्यापारी", "बूढ़ी महिला", "सैनिक"],
        "answer_en": "The peddler",
        "answer_hi": "बेचने वाला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "Who is the author of the story 'The Letter'?",
        "question_hi": "'The Letter' कहानी के लेखक कौन हैं?",
        "options_en": ["M.K. Gandhi", "R. K. Narayan", "Dorothy Sayers", "Vikram Seth"],
        "options_hi": ["महात्मा गांधी", "र.क. नारायण", "डोरोथी सायर्स", "विक्रम सेठ"],
        "answer_en": "Dorothy Sayers",
        "answer_hi": "डोरोथी सायर्स",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "What is the setting of the story 'The Hack Driver'?",
        "question_hi": "'The Hack Driver' कहानी की पृष्ठभूमि क्या है?",
        "options_en": ["A city", "A village", "A school", "A jungle"],
        "options_hi": ["एक शहर", "एक गांव", "एक स्कूल", "एक जंगल"],
        "answer_en": "A village",
        "answer_hi": "एक गांव",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "What does the peddler in 'The Rattrap' offer as a way to escape poverty?",
        "question_hi": "'The Rattrap' में बेचने वाला गरीबी से बचने का तरीका क्या पेश करता है?",
        "options_en": ["Stealing", "Working hard", "Committing a crime", "Living on charity"],
        "options_hi": ["चोरी करना", "मेहनत करना", "अपराध करना", "दान पर जीना"],
        "answer_en": "Stealing",
        "answer_hi": "चोरी करना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Who is the author of the poem 'The Solitary Reaper'?",
        "question_hi": "'The Solitary Reaper' कविता के लेखक कौन हैं?",
        "options_en": ["William Wordsworth", "Robert Frost", "Emily Dickinson", "P.B. Shelley"],
        "options_hi": ["विलियम वर्ड्सवर्थ", "रॉबर्ट फ्रॉस्ट", "एमिली डिकिंसन", "पी.बी. शेली"],
        "answer_en": "William Wordsworth",
        "answer_hi": "विलियम वर्ड्सवर्थ",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "What is the central theme of the poem 'A Photograph'?",
        "question_hi": "'A Photograph' कविता का केंद्रीय विषय क्या है?",
        "options_en": ["Childhood and Innocence", "Beauty of Nature", "The Passage of Time", "Love and Memory"],
        "options_hi": ["बचपन और मासूमियत", "प्रकृति की सुंदरता", "समय का प्रवाह", "प्रेम और यादें"],
        "answer_en": "The Passage of Time",
        "answer_hi": "समय का प्रवाह",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "In 'The Portrait of a Lady', who is the narrator?",
        "question_hi": "'The Portrait of a Lady' में कथाकार कौन हैं?",
        "options_en": ["Khushwant Singh", "R.K. Narayan", "Amitav Ghosh", "The author himself"],
        "options_hi": ["खुशवंत सिंह", "र.क. नारायण", "अमिताव गोष", "लेखक स्वयं"],
        "answer_en": "Khushwant Singh",
        "answer_hi": "खुशवंत सिंह",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "What does the poet of 'The Solitary Reaper' admire?",
        "question_hi": "'The Solitary Reaper' के कवि को क्या पसंद आता है?",
        "options_en": ["The beauty of the reaper", "The solitude of the reaper", "The melody of the song", "The hills in the background"],
        "options_hi": ["रीपर की सुंदरता", "रीपर की एकाकीपन", "गीत की ध्वनि", "पृष्ठभूमि में पहाड़"],
        "answer_en": "The melody of the song",
        "answer_hi": "गीत की ध्वनि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "What is the significance of the 'hook' in the story 'The Rattrap'?",
        "question_hi": "'The Rattrap' कहानी में 'हुक' का क्या महत्व है?",
        "options_en": ["It represents the trap of life", "It symbolizes the struggle of the poor", "It is the climax of the story", "It is the object of the peddler's theft"],
        "options_hi": ["यह जीवन के जाल का प्रतीक है", "यह गरीबों के संघर्ष का प्रतीक है", "यह कहानी का चरमोत्कर्ष है", "यह बेचने वाले की चोरी की वस्तु है"],
        "answer_en": "It represents the trap of life",
        "answer_hi": "यह जीवन के जाल का प्रतीक है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "Who is the protagonist of 'The Letter'?",
        "question_hi": "'The Letter' की नायिका कौन हैं?",
        "options_en": ["The old woman", "The daughter", "The poet", "The doctor"],
        "options_hi": ["बूढ़ी महिला", "बेटी", "कवि", "चिकित्सक"],
        "answer_en": "The old woman",
        "answer_hi": "बूढ़ी महिला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "In 'The Hack Driver', what is the attitude of the narrator towards his job?",
        "question_hi": "'The Hack Driver' कहानी में कथाकार का अपनी नौकरी के प्रति दृष्टिकोण क्या है?",
        "options_en": ["He is indifferent", "He enjoys it", "He is frustrated", "He dislikes it"],
        "options_hi": ["वह उदासीन है", "वह इसे पसंद करता है", "वह निराश है", "वह इसे नापसंद करता है"],
        "answer_en": "He is indifferent",
        "answer_hi": "वह उदासीन है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "What was the first impression of the narrator in 'The Hack Driver' about the village?",
        "question_hi": "'The Hack Driver' कहानी में कथाकार का गांव के बारे में पहला विचार क्या था?",
        "options_en": ["It was a poor village", "It was a beautiful village", "It was a dull village", "It was a crowded village"],
        "options_hi": ["यह एक गरीब गांव था", "यह एक सुंदर गांव था", "यह एक उबाऊ गांव था", "यह एक भीड़-भाड़ वाला गांव था"],
        "answer_en": "It was a dull village",
        "answer_hi": "यह एक उबाऊ गांव था",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "What does the narrator in 'The Rattrap' learn in the end?",
        "question_hi": "'The Rattrap' कहानी में अंत में कथाकार क्या सीखता है?",
        "options_en": ["The importance of love", "The value of honesty", "The danger of greed", "The need for money"],
        "options_hi": ["प्रेम का महत्व", "ईमानदारी का मूल्य", "लालच का खतरा", "पैसे की आवश्यकता"],
        "answer_en": "The value of honesty",
        "answer_hi": "ईमानदारी का मूल्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "In 'The Letter', how does the poet convey the theme of separation?",
        "question_hi": "'The Letter' में कवि अलगाव के विषय को कैसे प्रस्तुत करते हैं?",
        "options_en": ["Through the old woman's memories", "Through the daughter's farewell", "Through the imagery of nature", "Through the conversation between the doctor and the old woman"],
        "options_hi": ["बूढ़ी महिला की यादों के माध्यम से", "बेटी के विदाई के माध्यम से", "प्रकृति की छवियों के माध्यम से", "चिकित्सक और बूढ़ी महिला के बीच बातचीत के माध्यम से"],
        "answer_en": "Through the old woman's memories",
        "answer_hi": "बूढ़ी महिला की यादों के माध्यम से",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "Who is the author of the poem 'The Road Not Taken'?",
        "question_hi": "'The Road Not Taken' कविता के लेखक कौन हैं?",
        "options_en": ["Robert Frost", "William Wordsworth", "P.B. Shelley", "John Keats"],
        "options_hi": ["रॉबर्ट फ्रॉस्ट", "विलियम वर्ड्सवर्थ", "पी.बी. शेली", "जॉन कीट्स"],
        "answer_en": "Robert Frost",
        "answer_hi": "रॉबर्ट फ्रॉस्ट",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "In 'A Photograph', the poet reflects on the past of:",
        "question_hi": "'A Photograph' में कवि किसके अतीत पर विचार करता है?",
        "options_en": ["Her mother", "Her grandmother", "Her childhood", "Her friend"],
        "options_hi": ["उसकी माँ", "उसकी दादी", "उसका बचपन", "उसकी दोस्त"],
        "answer_en": "Her mother",
        "answer_hi": "उसकी माँ",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "In the story 'The Portrait of a Lady', how is the old lady described?",
        "question_hi": "'The Portrait of a Lady' कहानी में बूढ़ी महिला का वर्णन कैसे किया गया है?",
        "options_en": ["A strict and selfish person", "A caring and gentle person", "A careless and old-fashioned person", "A kind and religious person"],
        "options_hi": ["एक कठोर और स्वार्थी व्यक्ति", "एक देखभाल करने वाली और कोमल व्यक्ति", "एक लापरवाह और पुरानी सोच वाली व्यक्ति", "एक दयालु और धार्मिक व्यक्ति"],
        "answer_en": "A kind and religious person",
        "answer_hi": "एक दयालु और धार्मिक व्यक्ति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "In 'The Hack Driver', what was the narrator's initial impression of the village?",
        "question_hi": "'The Hack Driver' कहानी में कथाकार का गांव के बारे में पहला विचार क्या था?",
        "options_en": ["It was a beautiful village", "It was a dull village", "It was a wealthy village", "It was a crowded village"],
        "options_hi": ["यह एक सुंदर गांव था", "यह एक उबाऊ गांव था", "यह एक समृद्ध गांव था", "यह एक भीड़-भाड़ वाला गांव था"],
        "answer_en": "It was a dull village",
        "answer_hi": "यह एक उबाऊ गांव था",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "In 'The Rattrap', the peddler is tempted by:",
        "question_hi": "'The Rattrap' कहानी में बेचने वाले को किससे प्रलोभित किया जाता है?",
        "options_en": ["A good deal of money", "The trap set by the merchant", "The kindness of the old lady", "The opportunity to steal a wallet"],
        "options_hi": ["अच्छी रकम", "व्यापारी द्वारा लगाया गया जाल", "बूढ़ी महिला की दयालुता", "पर्स चोरी करने का अवसर"],
        "answer_en": "The opportunity to steal a wallet",
        "answer_hi": "पर्स चोरी करने का अवसर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "What is the central idea of the poem 'A Photograph'?",
        "question_hi": "'A Photograph' कविता का केंद्रीय विचार क्या है?",
        "options_en": ["Childhood memories", "The passage of time", "Love and affection", "Beauty of nature"],
        "options_hi": ["बचपन की यादें", "समय का प्रवाह", "प्रेम और स्नेह", "प्रकृति की सुंदरता"],
        "answer_en": "The passage of time",
        "answer_hi": "समय का प्रवाह",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "In 'The Portrait of a Lady', what does the author miss most after the old lady's death?",
        "question_hi": "'The Portrait of a Lady' कहानी में बूढ़ी महिला की मृत्यु के बाद लेखक किसे सबसे ज्यादा याद करता है?",
        "options_en": ["Her voice", "Her presence", "Her stories", "Her religious practices"],
        "options_hi": ["उसकी आवाज", "उसकी उपस्थिति", "उसकी कहानियाँ", "उसकी धार्मिक प्रथाएँ"],
        "answer_en": "Her presence",
        "answer_hi": "उसकी उपस्थिति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "In 'The Rattrap', how does the story end?",
        "question_hi": "'The Rattrap' कहानी का अंत कैसे होता है?",
        "options_en": ["The peddler is arrested", "The peddler becomes rich", "The peddler returns the stolen money", "The peddler lives happily with the old lady"],
        "options_hi": ["बेचने वाले को गिरफ्तार कर लिया जाता है", "बेचने वाला अमीर बन जाता है", "बेचने वाला चुराया गया पैसा वापस कर देता है", "बेचने वाला बूढ़ी महिला के साथ खुशी से रहता है"],
        "answer_en": "The peddler returns the stolen money",
        "answer_hi": "बेचने वाला चुराया गया पैसा वापस कर देता है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "What is the tone of the poem 'The Solitary Reaper'?",
        "question_hi": "'The Solitary Reaper' कविता का स्वर क्या है?",
        "options_en": ["Melancholic", "Optimistic", "Sad", "Happy"],
        "options_hi": ["विषादपूर्ण", "आशावादी", "दुखी", "खुश"],
        "answer_en": "Melancholic",
        "answer_hi": "विषादपूर्ण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "What is the lesson in the story 'The Hack Driver'?",
        "question_hi": "'The Hack Driver' कहानी से क्या सीखने को मिलता है?",
        "options_en": ["Hard work pays off", "Don’t trust people easily", "Be honest and helpful", "Life is full of surprises"],
        "options_hi": ["कड़ी मेहनत रंग लाती है", "लोगों पर आसानी से भरोसा न करें", "ईमानदार और सहायक बनें", "जीवन आश्चर्य से भरा है"],
        "answer_en": "Be honest and helpful",
        "answer_hi": "ईमानदार और सहायक बनें",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 51,
        "question_en": "Who is the author of the poem 'A Photograph'?",
        "question_hi": "'A Photograph' कविता के लेखक कौन हैं?",
        "options_en": ["Shiv Kumar Batalvi", "Manoj Das", "Sunil Kumar", "Jabir Sani"],
        "options_hi": ["शिव कुमार बटालवी", "मनोह दास", "सुनील कुमार", "जबीर सानी"],
        "answer_en": "Manoj Das",
        "answer_hi": "मनोह दास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 52,
        "question_en": "What is the theme of the poem 'The Road Not Taken'?",
        "question_hi": "'The Road Not Taken' कविता का विषय क्या है?",
        "options_en": ["Choosing the right path", "The inevitability of fate", "Human perseverance", "Struggles in life"],
        "options_hi": ["सही रास्ता चुनना", "भाग्य का अपरिहार्य होना", "मानव संघर्ष", "जीवन में कठिनाइयाँ"],
        "answer_en": "Choosing the right path",
        "answer_hi": "सही रास्ता चुनना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 53,
        "question_en": "What is the title of the poem written by Robert Frost?",
        "question_hi": "रॉबर्ट फ्रॉस्ट द्वारा लिखी गई कविता का शीर्षक क्या है?",
        "options_en": ["The Road Not Taken", "The Solitary Reaper", "Daffodils", "The Clouds"],
        "options_hi": ["द रोड नॉट टेकेन", "द सोलिटरी रीपर", "डैफोडिल्स", "द क्लाउड्स"],
        "answer_en": "The Road Not Taken",
        "answer_hi": "द रोड नॉट टेकेन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 54,
        "question_en": "What is the central theme of the poem 'A Photograph'?",
        "question_hi": "'A Photograph' कविता का केंद्रीय विषय क्या है?",
        "options_en": ["Life and Death", "Loss and Memory", "Love and Hate", "Nature's Beauty"],
        "options_hi": ["जीवन और मृत्यु", "हानि और यादें", "प्रेम और नफरत", "प्रकृति की सुंदरता"],
        "answer_en": "Loss and Memory",
        "answer_hi": "हानि और यादें",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 55,
        "question_en": "Who is the main character in the story 'The Portrait of a Lady'?",
        "question_hi": "'The Portrait of a Lady' कहानी में मुख्य पात्र कौन हैं?",
        "options_en": ["The old lady", "The poet", "The author", "The girl"],
        "options_hi": ["बूढ़ी महिला", "कवि", "लेखक", "लड़की"],
        "answer_en": "The old lady",
        "answer_hi": "बूढ़ी महिला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 56,
        "question_en": "In the poem 'The Solitary Reaper', what is the reaper doing?",
        "question_hi": "'The Solitary Reaper' कविता में रीपर क्या कर रहा है?",
        "options_en": ["Singing", "Dancing", "Reaping the corn", "Reading"],
        "options_hi": ["गाना गा रहा है", "नाच रहा है", "मक्का काट रहा है", "पढ़ रहा है"],
        "answer_en": "Reaping the corn",
        "answer_hi": "मक्का काट रहा है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 57,
        "question_en": "In 'The Rattrap', who shows kindness to the peddler?",
        "question_hi": "'The Rattrap' कहानी में पेडलर के साथ कौन दयालुता दिखाता है?",
        "options_en": ["The merchant", "The old lady", "The peddler's friend", "The narrator"],
        "options_hi": ["व्यापारी", "बूढ़ी महिला", "बेचने वाले का दोस्त", "कथाकार"],
        "answer_en": "The old lady",
        "answer_hi": "बूढ़ी महिला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 58,
        "question_en": "What does the peddler steal in 'The Rattrap'?",
        "question_hi": "'The Rattrap' कहानी में बेचने वाला क्या चुराता है?",
        "options_en": ["A wallet", "A bag", "A necklace", "A purse"],
        "options_hi": ["पर्स", "बैग", "हार", "पर्स"],
        "answer_en": "A wallet",
        "answer_hi": "पर्स",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 59,
        "question_en": "What is the message of the story 'The Hack Driver'?",
        "question_hi": "'The Hack Driver' कहानी का संदेश क्या है?",
        "options_en": ["Don’t trust strangers", "Always be kind to others", "Hard work is important", "Life is unpredictable"],
        "options_hi": ["अजनबियों पर विश्वास न करें", "हमेशा दूसरों के प्रति दयालु रहें", "कड़ी मेहनत महत्वपूर्ण है", "जीवन अप्रत्याशित है"],
        "answer_en": "Don’t trust strangers",
        "answer_hi": "अजनबियों पर विश्वास न करें",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 60,
        "question_en": "In 'The Portrait of a Lady', what is the old lady's attitude towards life?",
        "question_hi": "'The Portrait of a Lady' कहानी में बूढ़ी महिला का जीवन के प्रति दृष्टिकोण क्या है?",
        "options_en": ["She is happy and content", "She is sad and lonely", "She is angry and frustrated", "She is indifferent"],
        "options_hi": ["वह खुश और संतुष्ट है", "वह उदास और अकेली है", "वह गुस्से में और हताश है", "वह उदासीन है"],
        "answer_en": "She is happy and content",
        "answer_hi": "वह खुश और संतुष्ट है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 61,
        "question_en": "Who is the author of 'The Hack Driver'?",
        "question_hi": "'The Hack Driver' कहानी के लेखक कौन हैं?",
        "options_en": ["Stephen Leacock", "Robert Frost", "Manoj Das", "Shiv Kumar Batalvi"],
        "options_hi": ["स्टीफन लीकोक", "रॉबर्ट फ्रॉस्ट", "मनोह दास", "शिव कुमार बटालवी"],
        "answer_en": "Stephen Leacock",
        "answer_hi": "स्टीफन लीकोक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 62,
        "question_en": "What does the peddler in 'The Rattrap' learn in the end?",
        "question_hi": "'The Rattrap' कहानी में पेडलर अंत में क्या सीखता है?",
        "options_en": ["The importance of money", "The value of kindness", "The need for hard work", "The art of deception"],
        "options_hi": ["पैसों का महत्व", "दयालुता का मूल्य", "कड़ी मेहनत की आवश्यकता", "धोखाधड़ी की कला"],
        "answer_en": "The value of kindness",
        "answer_hi": "दयालुता का मूल्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 63,
        "question_en": "Which of the following is NOT a theme of the poem 'A Photograph'?",
        "question_hi": "'A Photograph' कविता का निम्नलिखित में से कौन सा विषय नहीं है?",
        "options_en": ["Memory", "Loss", "Childhood", "Romance"],
        "options_hi": ["यादें", "हानि", "बचपन", "प्रेम"],
        "answer_en": "Romance",
        "answer_hi": "प्रेम",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 64,
        "question_en": "In the poem 'A Photograph', what is the speaker reflecting upon?",
        "question_hi": "'A Photograph' कविता में वक्ता किस पर विचार कर रहा है?",
        "options_en": ["Her childhood", "Her lost loved one", "Her lost dreams", "Her past mistakes"],
        "options_hi": ["अपना बचपन", "अपने खोए हुए प्रियजन", "अपने खोए हुए सपने", "अपनी अतीत की गलतियाँ"],
        "answer_en": "Her lost loved one",
        "answer_hi": "अपने खोए हुए प्रियजन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 65,
        "question_en": "In 'The Solitary Reaper', what is the poet struck by?",
        "question_hi": "'The Solitary Reaper' कविता में कवि किससे प्रभावित होता है?",
        "options_en": ["The beauty of the reaper's song", "The sound of the wind", "The sight of the reaper", "The silence of nature"],
        "options_hi": ["रीपर के गीत की सुंदरता", "हवाओं की आवाज", "रीपर का दृश्य", "प्रकृति की चुप्प"],
        "answer_en": "The beauty of the reaper's song",
        "answer_hi": "रीपर के गीत की सुंदरता",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 66,
        "question_en": "In 'The Portrait of a Lady', what did the old lady enjoy doing?",
        "question_hi": "'The Portrait of a Lady' कहानी में बूढ़ी महिला को क्या करना पसंद था?",
        "options_en": ["Reading", "Walking in the garden", "Going to church", "Singing"],
        "options_hi": ["पढ़ना", "बाग में घूमना", "चर्च जाना", "गाना गाना"],
        "answer_en": "Walking in the garden",
        "answer_hi": "बाग में घूमना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 67,
        "question_en": "What does the poet compare the solitary reaper's song to in 'The Solitary Reaper'?",
        "question_hi": "'The Solitary Reaper' कविता में कवि एकाकी रीपर के गीत की तुलना किससे करता है?",
        "options_en": ["The sound of the wind", "The sound of a nightingale", "The sound of the ocean", "The sound of a flute"],
        "options_hi": ["हवाओं की आवाज", "बुलबुल की आवाज", "सागर की आवाज", "बांसुरी की आवाज"],
        "answer_en": "The sound of a nightingale",
        "answer_hi": "बुलबुल की आवाज",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 68,
        "question_en": "What does the reaper in 'The Solitary Reaper' seem to be singing about?",
        "question_hi": "'The Solitary Reaper' कविता में रीपर किस बारे में गा रहा है?",
        "options_en": ["Love", "Death", "Life", "Unrequited love"],
        "options_hi": ["प्रेम", "मृत्यु", "जीवन", "नवजात प्रेम"],
        "answer_en": "Unrequited love",
        "answer_hi": "नवजात प्रेम",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 69,
        "question_en": "What is the setting of 'The Portrait of a Lady'?",
        "question_hi": "'The Portrait of a Lady' कहानी का परिवेश क्या है?",
        "options_en": ["A village in India", "A small town", "A city", "A country house in England"],
        "options_hi": ["भारत का एक गाँव", "एक छोटा शहर", "एक शहर", "इंग्लैंड के एक देश का घर"],
        "answer_en": "A country house in England",
        "answer_hi": "इंग्लैंड के एक देश का घर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 70,
        "question_en": "Who is the protagonist in 'The Rattrap'?",
        "question_hi": "'The Rattrap' कहानी में मुख्य पात्र कौन है?",
        "options_en": ["The merchant", "The peddler", "The old lady", "The narrator"],
        "options_hi": ["व्यापारी", "पेडलर", "बूढ़ी महिला", "कथाकार"],
        "answer_en": "The peddler",
        "answer_hi": "पेडलर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 71,
        "question_en": "Who is the author of the story 'The Diary of a Young Girl'?",
        "question_hi": "'The Diary of a Young Girl' कहानी के लेखक कौन हैं?",
        "options_en": ["Anne Frank", "George Orwell", "Mark Twain", "J.K. Rowling"],
        "options_hi": ["ऐनी फ्रैंक", "जॉर्ज ऑर्वेल", "मार्क ट्वेन", "जे.के. रॉवलिंग"],
        "answer_en": "Anne Frank",
        "answer_hi": "ऐनी फ्रैंक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 72,
        "question_en": "In 'The Diary of a Young Girl', where is Anne Frank hiding?",
        "question_hi": "'The Diary of a Young Girl' में ऐनी फ्रैंक कहाँ छिपी हुई हैं?",
        "options_en": ["In a school", "In a shop", "In a secret annex", "In a basement"],
        "options_hi": ["एक स्कूल में", "एक दुकान में", "एक गुप्त अनेक्स में", "एक तहखाने में"],
        "answer_en": "In a secret annex",
        "answer_hi": "एक गुप्त अनेक्स में",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 73,
        "question_en": "In the poem 'If I Were You', who is the speaker?",
        "question_hi": "'If I Were You' कविता में वक्ता कौन है?",
        "options_en": ["The narrator", "The king", "The visitor", "The mirror"],
        "options_hi": ["कथाकार", "राजा", "आगंतुक", "आईना"],
        "answer_en": "The narrator",
        "answer_hi": "कथाकार",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 74,
        "question_en": "Who is the author of 'The Tiger King'?",
        "question_hi": "'The Tiger King' कहानी के लेखक कौन हैं?",
        "options_en": ["Ruskin Bond", "Kalki Krishnamurthy", "Satyajit Ray", "Vikram Seth"],
        "options_hi": ["रस्किन बॉंड", "कल्कि कृष्णमूर्ति", "सत्यजीत राय", "विक्रम सेठ"],
        "answer_en": "Kalki Krishnamurthy",
        "answer_hi": "कल्कि कृष्णमूर्ति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 75,
        "question_en": "What is the main theme of the poem 'If I Were You'?",
        "question_hi": "'If I Were You' कविता का मुख्य विषय क्या है?",
        "options_en": ["Kindness", "Self-realization", "Courage", "Imagination"],
        "options_hi": ["दयालुता", "आत्म-ज्ञान", "साहस", "कल्पना"],
        "answer_en": "Self-realization",
        "answer_hi": "आत्म-ज्ञान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 76,
        "question_en": "What is the significance of the title 'The Tiger King'?",
        "question_hi": "'The Tiger King' शीर्षक का क्या महत्व है?",
        "options_en": ["It refers to the king's love for tigers", "It signifies the power of the king", "It refers to the kingdom's history", "It refers to the king's name"],
        "options_hi": ["यह राजा के बाघों के प्रति प्रेम को दर्शाता है", "यह राजा की शक्ति को व्यक्त करता है", "यह राज्य के इतिहास को संदर्भित करता है", "यह राजा के नाम को संदर्भित करता है"],
        "answer_en": "It refers to the king's love for tigers",
        "answer_hi": "यह राजा के बाघों के प्रति प्रेम को दर्शाता है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 77,
        "question_en": "What is the major turning point in the story 'The Tiger King'?",
        "question_hi": "'The Tiger King' कहानी में मुख्य मोड़ क्या है?",
        "options_en": ["The king's obsession with tigers", "The king's death", "The king's encounter with a real tiger", "The king's childhood"],
        "options_hi": ["राजा का बाघों के प्रति जुनून", "राजा की मृत्यु", "राजा की वास्तविक बाघ से मुलाकात", "राजा का बचपन"],
        "answer_en": "The king's obsession with tigers",
        "answer_hi": "राजा का बाघों के प्रति जुनून",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 78,
        "question_en": "In the story 'The Hack Driver', what is the profession of the narrator?",
        "question_hi": "'The Hack Driver' कहानी में कथाकार का पेशा क्या है?",
        "options_en": ["A lawyer", "A doctor", "A teacher", "A clerk"],
        "options_hi": ["एक वकील", "एक डॉक्टर", "एक शिक्षक", "एक क्लर्क"],
        "answer_en": "A clerk",
        "answer_hi": "एक क्लर्क",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 79,
        "question_en": "What is the climax of the story 'The Hack Driver'?",
        "question_hi": "'The Hack Driver' कहानी का क्लाइमेक्स क्या है?",
        "options_en": ["The lawyer meets the hack driver", "The hack driver reveals his true identity", "The lawyer returns to the village", "The hack driver drives the lawyer back"],
        "options_hi": ["वकील हेक ड्राइवर से मिलता है", "हेक ड्राइवर अपनी असली पहचान का खुलासा करता है", "वकील गाँव लौटता है", "हेक ड्राइवर वकील को वापस ड्राइव करता है"],
        "answer_en": "The hack driver reveals his true identity",
        "answer_hi": "हेक ड्राइवर अपनी असली पहचान का खुलासा करता है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 80,
        "question_en": "In the story 'The Rattrap', what does the peddler steal?",
        "question_hi": "'The Rattrap' कहानी में पेडलर क्या चुराता है?",
        "options_en": ["Money", "Jewels", "A rat trap", "A loaf of bread"],
        "options_hi": ["पैसा", "गहने", "एक चूहा फँसाने का यंत्र", "रोटी की एक रोटी"],
        "answer_en": "A rat trap",
        "answer_hi": "एक चूहा फँसाने का यंत्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 81,
        "question_en": "In 'The Rattrap', what is the moral of the story?",
        "question_hi": "'The Rattrap' कहानी का नैतिक शिक्षा क्या है?",
        "options_en": ["Honesty is the best policy", "One must work hard for success", "Never give up", "The power of kindness"],
        "options_hi": ["ईमानदारी सर्वोत्तम नीति है", "सफलता के लिए कड़ी मेहनत करनी चाहिए", "कभी हार मत मानो", "दयालुता की शक्ति"],
        "answer_en": "The power of kindness",
        "answer_hi": "दयालुता की शक्ति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 82,
        "question_en": "What is the theme of the story 'The Rattrap'?",
        "question_hi": "'The Rattrap' कहानी का विषय क्या है?",
        "options_en": ["Human nature", "Greed and selfishness", "Importance of friendship", "The value of education"],
        "options_hi": ["मानव स्वभाव", "लालच और स्वार्थ", "दोस्ती का महत्व", "शिक्षा का मूल्य"],
        "answer_en": "Human nature",
        "answer_hi": "मानव स्वभाव",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 83,
        "question_en": "In 'The Rattrap', who is the main character?",
        "question_hi": "'The Rattrap' कहानी का मुख्य पात्र कौन है?",
        "options_en": ["The peddler", "The soldier", "The king", "The merchant"],
        "options_hi": ["पेडलर", "सैनिक", "राजा", "व्यापारी"],
        "answer_en": "The peddler",
        "answer_hi": "पेडलर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 84,
        "question_en": "What happens when the peddler is caught in 'The Rattrap'?",
        "question_hi": "'The Rattrap' कहानी में जब पेडलर को पकड़ा जाता है, तो क्या होता है?",
        "options_en": ["He is thrown in jail", "He escapes", "He is given money", "He is forgiven"],
        "options_hi": ["उसे जेल में डाला जाता है", "वह भाग जाता है", "उसे पैसे दिए जाते हैं", "उसे माफ कर दिया जाता है"],
        "answer_en": "He is forgiven",
        "answer_hi": "उसे माफ कर दिया जाता है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 85,
        "question_en": "Who was the writer of the story 'The Enemy'?",
        "question_hi": "'The Enemy' कहानी के लेखक कौन हैं?",
        "options_en": ["Pearl S. Buck", "Ruskin Bond", "William Shakespeare", "Mark Twain"],
        "options_hi": ["पर्ल एस. बक", "रस्किन बॉंड", "विलियम शेक्सपियर", "मार्क ट्वेन"],
        "answer_en": "Pearl S. Buck",
        "answer_hi": "पर्ल एस. बक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 86,
        "question_en": "In 'The Enemy', who is the main character?",
        "question_hi": "'The Enemy' कहानी का मुख्य पात्र कौन है?",
        "options_en": ["Dr. Sadao", "Hana", "The Japanese soldier", "The narrator"],
        "options_hi": ["डॉ. सदाओ", "हाना", "जापानी सैनिक", "कथाकार"],
        "answer_en": "Dr. Sadao",
        "answer_hi": "डॉ. सदाओ",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 87,
        "question_en": "In 'The Enemy', why does Dr. Sadao decide to help the enemy soldier?",
        "question_hi": "'The Enemy' कहानी में डॉ. सदाओ दुश्मन सैनिक की मदद करने का निर्णय क्यों लेते हैं?",
        "options_en": ["Because of his medical oath", "Because he feels pity", "Because he wants to prove his bravery", "Because the soldier is his friend"],
        "options_hi": ["अपनी चिकित्सकीय शपथ के कारण", "क्योंकि उसे दया आती है", "क्योंकि वह अपनी वीरता साबित करना चाहता है", "क्योंकि सैनिक उसका दोस्त है"],
        "answer_en": "Because of his medical oath",
        "answer_hi": "अपनी चिकित्सकीय शपथ के कारण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 88,
        "question_en": "In 'The Enemy', what is the reaction of Dr. Sadao’s wife when she sees the wounded soldier?",
        "question_hi": "'The Enemy' कहानी में डॉ. सदाओ की पत्नी का क्या प्रतिक्रिया होती है जब वह घायल सैनिक को देखती हैं?",
        "options_en": ["She gets angry", "She screams for help", "She agrees to help him", "She fainted"],
        "options_hi": ["वह गुस्से में आ जाती है", "वह मदद के लिए चीखती है", "वह उसकी मदद करने के लिए तैयार हो जाती है", "वह बेहोश हो जाती है"],
        "answer_en": "She agrees to help him",
        "answer_hi": "वह उसकी मदद करने के लिए तैयार हो जाती है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 89,
        "question_en": "Who is the author of 'A Triumph of Surgery'?",
        "question_hi": "'A Triumph of Surgery' कहानी के लेखक कौन हैं?",
        "options_en": ["James Herriot", "Ruskin Bond", "Saki", "O. Henry"],
        "options_hi": ["जेम्स हैरियट", "रस्किन बॉंड", "साकी", "ओ. हेनरी"],
        "answer_en": "James Herriot",
        "answer_hi": "जेम्स हैरियट",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 90,
        "question_en": "What was the illness of the dog in the story 'A Triumph of Surgery'?",
        "question_hi": "'A Triumph of Surgery' कहानी में कुत्ते की बीमारी क्या थी?",
        "options_en": ["Typhoid", "Rabies", "Obesity", "Heart Disease"],
        "options_hi": ["टाइफाइड", "रेबीज", "मोटापा", "हृदय रोग"],
        "answer_en": "Obesity",
        "answer_hi": "मोटापा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 91,
        "question_en": "In 'A Triumph of Surgery', who is the doctor who treats the dog?",
        "question_hi": "'A Triumph of Surgery' कहानी में वह डॉक्टर कौन हैं जो कुत्ते का इलाज करते हैं?",
        "options_en": ["Dr. Herriot", "Dr. Sadao", "Dr. Jody", "Dr. Doolittle"],
        "options_hi": ["डॉ. हैरियट", "डॉ. सदाओ", "डॉ. जोडी", "डॉ. डूलिटिल"],
        "answer_en": "Dr. Herriot",
        "answer_hi": "डॉ. हैरियट",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 92,
        "question_en": "What is the central theme of the story 'A Triumph of Surgery'?",
        "question_hi": "'A Triumph of Surgery' कहानी का केंद्रीय विषय क्या है?",
        "options_en": ["Obesity", "Pets and animals", "The importance of surgery", "Medical ethics"],
        "options_hi": ["मोटापा", "पालतू जानवर और जानवर", "सर्जरी का महत्व", "चिकित्सीय नैतिकता"],
        "answer_en": "Obesity",
        "answer_hi": "मोटापा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 93,
        "question_en": "In 'The Sermon at Benares', who is the speaker of the sermon?",
        "question_hi": "'The Sermon at Benares' में उपदेशक कौन है?",
        "options_en": ["Buddha", "Krishna", "Jesus", "Confucius"],
        "options_hi": ["बुद्ध", "कृष्ण", "यीशु", "कन्फ्यूशियस"],
        "answer_en": "Buddha",
        "answer_hi": "बुद्ध",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 94,
        "question_en": "In 'The Sermon at Benares', what is the main message of the sermon?",
        "question_hi": "'The Sermon at Benares' में उपदेश का मुख्य संदेश क्या है?",
        "options_en": ["Peace and harmony", "Love and kindness", "Moral conduct", "The path to enlightenment"],
        "options_hi": ["शांति और सद्भावना", "प्रेम और दया", "नैतिक आचरण", "ज्ञान की ओर मार्ग"],
        "answer_en": "The path to enlightenment",
        "answer_hi": "ज्ञान की ओर मार्ग",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 95,
        "question_en": "Who is the author of the poem 'The Sermon at Benares'?",
        "question_hi": "'The Sermon at Benares' कविता के लेखक कौन हैं?",
        "options_en": ["Swami Vivekananda", "Rabindranath Tagore", "Sarojini Naidu", "Buddha"],
        "options_hi": ["स्वामी विवेकानंद", "रवींद्रनाथ ठाकुर", "सरोजिनी नायडू", "बुद्ध"],
        "answer_en": "Swami Vivekananda",
        "answer_hi": "स्वामी विवेकानंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 96,
        "question_en": "In 'The Sermon at Benares', which concept does Buddha emphasize?",
        "question_hi": "'The Sermon at Benares' में बुद्ध कौन सा विचार महत्व देते हैं?",
        "options_en": ["Four Noble Truths", "Eightfold Path", "Twelve Principles", "Ten Commandments"],
        "options_hi": ["चार आर्य सत्य", "आठfold मार्ग", "बारह सिद्धांत", "दस आदेश"],
        "answer_en": "Four Noble Truths",
        "answer_hi": "चार आर्य सत्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 97,
        "question_en": "What does Buddha teach about the root cause of suffering?",
        "question_hi": "बुद्ध पीड़ा के मूल कारण के बारे में क्या सिखाते हैं?",
        "options_en": ["Desire", "Ignorance", "Hatred", "Fear"],
        "options_hi": ["इच्छा", "अज्ञानता", "घृणा", "भय"],
        "answer_en": "Desire",
        "answer_hi": "इच्छा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 98,
        "question_en": "In 'The Sermon at Benares', Buddha advises his followers to practice which of the following?",
        "question_hi": "'The Sermon at Benares' में बुद्ध अपने अनुयायियों को इनमें से किसका अभ्यास करने की सलाह देते हैं?",
        "options_en": ["Good deeds", "Prayers", "Meditation", "Charity"],
        "options_hi": ["अच्छे काम", "प्रार्थना", "ध्यान", "दान"],
        "answer_en": "Meditation",
        "answer_hi": "ध्यान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 99,
        "question_en": "What is the significance of Benares in the story 'The Sermon at Benares'?",
        "question_hi": "'The Sermon at Benares' कहानी में वाराणसी का क्या महत्व है?",
        "options_en": ["It is the birthplace of Buddha", "It is a pilgrimage site", "It is a city of education", "It is the setting of Buddha's sermon"],
        "options_hi": ["यह बुद्ध का जन्म स्थान है", "यह एक तीर्थ स्थल है", "यह शिक्षा का शहर है", "यह बुद्ध के उपदेश का स्थान है"],
        "answer_en": "It is the setting of Buddha's sermon",
        "answer_hi": "यह बुद्ध के उपदेश का स्थान है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 100,
        "question_en": "What does Buddha teach about the end of suffering?",
        "question_hi": "बुद्ध पीड़ा के अंत के बारे में क्या सिखाते हैं?",
        "options_en": ["By renouncing desires", "By accumulating wealth", "By practicing self-pity", "By following rituals"],
        "options_hi": ["इच्छाओं का त्याग करके", "धन जमा करके", "स्वयं पर दया करके", "अनुष्ठानों का पालन करके"],
        "answer_en": "By renouncing desires",
        "answer_hi": "इच्छाओं का त्याग करके",
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