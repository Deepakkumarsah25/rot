
const questions =[
    {
        "num": 1,
        "question_en": "What is the capital of India?",
        "question_hi": "भारत की राजधानी क्या है?",
        "options_en": ["Delhi", "Mumbai", "Kolkata", "Chennai"],
        "options_hi": ["दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
        "answer_en": "Delhi",
        "answer_hi": "दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which is the largest continent?",
        "question_hi": "सबसे बड़ा महाद्वीप कौन सा है?",
        "options_en": ["Asia", "Africa", "Europe", "North America"],
        "options_hi": ["एशिया", "अफ्रीका", "यूरोप", "उत्तर अमेरिका"],
        "answer_en": "Asia",
        "answer_hi": "एशिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Who was the first President of India?",
        "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
        "options_en": ["Dr. Rajendra Prasad", "Dr. Sarvepalli Radhakrishnan", "Dr. Zakir Husain", "V. V. Giri"],
        "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. सर्वपल्ली राधाकृष्णन", "डॉ. जाकिर हुसैन", "वी. वी. गिरी"],
        "answer_en": "Dr. Rajendra Prasad",
        "answer_hi": "डॉ. राजेंद्र प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which of the following is the largest ocean?",
        "question_hi": "निम्नलिखित में से कौन सा महासागर सबसे बड़ा है?",
        "options_en": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "options_hi": ["अटलांटिक महासागर", "भारतीय महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
        "answer_en": "Pacific Ocean",
        "answer_hi": "प्रशांत महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the national currency of the United States?",
        "question_hi": "संयुक्त राज्य अमेरिका की राष्ट्रीय मुद्रा क्या है?",
        "options_en": ["Dollar", "Euro", "Pound", "Yen"],
        "options_hi": ["डॉलर", "यूरो", "पाउंड", "येन"],
        "answer_en": "Dollar",
        "answer_hi": "डॉलर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Who is known as the Father of the Nation in India?",
        "question_hi": "भारत में 'राष्ट्रपिता' के रूप में किसे जाना जाता है?",
        "options_en": ["Jawaharlal Nehru", "Sardar Patel", "Mahatma Gandhi", "Bhagat Singh"],
        "options_hi": ["जवाहरलाल नेहरू", "सरदार पटेल", "महात्मा गांधी", "भगत सिंह"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which country is known as the 'Land of the Midnight Sun'?",
        "question_hi": "किस देश को 'मध्यरात्रि सूर्य की भूमि' के नाम से जाना जाता है?",
        "options_en": ["Norway", "Sweden", "Finland", "Denmark"],
        "options_hi": ["नॉर्वे", "स्वीडन", "फिनलैंड", "डेनमार्क"],
        "answer_en": "Norway",
        "answer_hi": "नॉर्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which of the following is the longest river in the world?",
        "question_hi": "निम्नलिखित में से कौन सी सबसे लंबी नदी है?",
        "options_en": ["Amazon", "Nile", "Yangtze", "Mississippi"],
        "options_hi": ["अमेजन", "नाइल", "यांगत्से", "मिसिसिपी"],
        "answer_en": "Nile",
        "answer_hi": "नाइल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Who invented the telephone?",
        "question_hi": "टेलीफोन का आविष्कार किसने किया?",
        "options_en": ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Michael Faraday"],
        "options_hi": ["अलेक्जेंडर ग्राम बेल", "थॉमस एडिसन", "निकोला टेस्ला", "माइकल फैराडे"],
        "answer_en": "Alexander Graham Bell",
        "answer_hi": "अलेक्जेंडर ग्राम बेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the smallest country in the world?",
        "question_hi": "दुनिया का सबसे छोटा देश कौन सा है?",
        "options_en": ["Monaco", "Vatican City", "Nauru", "Tuvalu"],
        "options_hi": ["मोनाको", "वैटिकन सिटी", "नौरू", "टुवालू"],
        "answer_en": "Vatican City",
        "answer_hi": "वैटिकन सिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which continent is known as the 'Dark Continent'?",
        "question_hi": "किस महाद्वीप को 'अंधेरे महाद्वीप' के नाम से जाना जाता है?",
        "options_en": ["Africa", "Asia", "Europe", "Australia"],
        "options_hi": ["अफ्रीका", "एशिया", "यूरोप", "ऑस्ट्रेलिया"],
        "answer_en": "Africa",
        "answer_hi": "अफ्रीका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which is the largest country in Africa?",
        "question_hi": "अफ्रीका का सबसे बड़ा देश कौन सा है?",
        "options_en": ["Nigeria", "Egypt", "Sudan", "Algeria"],
        "options_hi": ["नाइजीरिया", "मिस्र", "सूदान", "अल्जीरिया"],
        "answer_en": "Algeria",
        "answer_hi": "अल्जीरिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Who is the author of 'Harry Potter' series?",
        "question_hi": "'हैरी पॉटर' श्रृंखला के लेखक कौन हैं?",
        "options_en": ["J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin", "C.S. Lewis"],
        "options_hi": ["जे.के. रोलिंग", "जे.आर.आर. टोल्किन", "जॉर्ज आर.आर. मार्टिन", "सी.एस. लुइस"],
        "answer_en": "J.K. Rowling",
        "answer_hi": "जे.के. रोलिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which of the following is the longest river in India?",
        "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
        "options_hi": ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
        "answer_en": "Ganga",
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Who was the first man in space?",
        "question_hi": "स्पेस में जाने वाले पहले व्यक्ति कौन थे?",
        "options_en": ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"],
        "options_hi": ["नील आर्मस्ट्रांग", "यूरी गगारिन", "बज़ एल्ड्रिन", "जॉन ग्लेन"],
        "answer_en": "Yuri Gagarin",
        "answer_hi": "यूरी गगारिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which country is the largest producer of coffee?",
        "question_hi": "कौन सा देश कॉफी का सबसे बड़ा उत्पादक है?",
        "options_en": ["Brazil", "India", "Vietnam", "Colombia"],
        "options_hi": ["ब्राजील", "भारत", "वियतनाम", "कोलंबिया"],
        "answer_en": "Brazil",
        "answer_hi": "ब्राजील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which of the following is the largest city in the world by population?",
        "question_hi": "निम्नलिखित में से कौन सा शहर दुनिया में जनसंख्या के हिसाब से सबसे बड़ा है?",
        "options_en": ["Shanghai", "New York", "Tokyo", "Delhi"],
        "options_hi": ["शंघाई", "न्यू यॉर्क", "टोक्यो", "दिल्ली"],
        "answer_en": "Tokyo",
        "answer_hi": "टोक्यो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which is the smallest continent?",
        "question_hi": "सबसे छोटा महाद्वीप कौन सा है?",
        "options_en": ["Australia", "Europe", "Africa", "North America"],
        "options_hi": ["ऑस्ट्रेलिया", "यूरोप", "अफ्रीका", "उत्तर अमेरिका"],
        "answer_en": "Australia",
        "answer_hi": "ऑस्ट्रेलिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Who wrote the play 'Romeo and Juliet'?",
        "question_hi": "'रोमियो और जूलियट' नाटक के लेखक कौन हैं?",
        "options_en": ["William Shakespeare", "George Orwell", "Charles Dickens", "Leo Tolstoy"],
        "options_hi": ["विलियम शेक्सपियर", "जॉर्ज ऑरवेल", "चार्ल्स डिकेंस", "लियो टॉलस्टॉय"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the longest river in the United States?",
        "question_hi": "संयुक्त राज्य अमेरिका की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Missouri River", "Mississippi River", "Ohio River", "Colorado River"],
        "options_hi": ["मिसौरी नदी", "मिसिसिपी नदी", "ओहियो नदी", "कोलोराडो नदी"],
        "answer_en": "Missouri River",
        "answer_hi": "मिसौरी नदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the largest desert in the world?",
        "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options_en": ["Sahara", "Gobi", "Karakum", "Kalahari"],
        "options_hi": ["सहारा", "गोबी", "काराकुम", "कालाहारी"],
        "answer_en": "Sahara",
        "answer_hi": "सहारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which country is the largest producer of tea?",
        "question_hi": "कौन सा देश चाय का सबसे बड़ा उत्पादक है?",
        "options_en": ["China", "India", "Sri Lanka", "Kenya"],
        "options_hi": ["चीन", "भारत", "श्रीलंका", "केन्या"],
        "answer_en": "China",
        "answer_hi": "चीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which of the following is the largest country by land area?",
        "question_hi": "निम्नलिखित में से कौन सा देश भूमि क्षेत्रफल के हिसाब से सबसे बड़ा है?",
        "options_en": ["Russia", "Canada", "China", "United States"],
        "options_hi": ["रूस", "कनाडा", "चीन", "संयुक्त राज्य"],
        "answer_en": "Russia",
        "answer_hi": "रूस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Who was the first woman Prime Minister of India?",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        "options_en": ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil", "Rajkumari Amrit Kaur"],
        "options_hi": ["इंदिरा गांधी", "सोणिया गांधी", "प्रति्भा पाटिल", "राजकुमारी अमृत कौर"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which of the following is a famous landmark in Paris?",
        "question_hi": "निम्नलिखित में से कौन सा प्रसिद्ध स्थल पेरिस में स्थित है?",
        "options_en": ["Eiffel Tower", "Colosseum", "Great Wall of China", "Taj Mahal"],
        "options_hi": ["आइफेल टॉवर", "कोलोसियम", "चीन की महान दीवार", "ताज महल"],
        "answer_en": "Eiffel Tower",
        "answer_hi": "आइफेल टॉवर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which country is known as the 'Land of the Rising Sun'?",
        "question_hi": "किस देश को 'उगते सूर्य की भूमि' के नाम से जाना जाता है?",
        "options_en": ["Japan", "China", "India", "Korea"],
        "options_hi": ["जापान", "चीन", "भारत", "कोरिया"],
        "answer_en": "Japan",
        "answer_hi": "जापान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which of the following is a currency used in Japan?",
        "question_hi": "निम्नलिखित में से कौन सी मुद्रा जापान में प्रयुक्त होती है?",
        "options_en": ["Yen", "Won", "Dollar", "Rupee"],
        "options_hi": ["येन", "वोन", "डॉलर", "रुपया"],
        "answer_en": "Yen",
        "answer_hi": "येन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which planet is known as the 'Red Planet'?",
        "question_hi": "कौन सा ग्रह 'लाल ग्रह' के नाम से जाना जाता है?",
        "options_en": ["Mars", "Venus", "Jupiter", "Saturn"],
        "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the official language of Brazil?",
        "question_hi": "ब्राजील की आधिकारिक भाषा क्या है?",
        "options_en": ["Portuguese", "Spanish", "English", "French"],
        "options_hi": ["पुर्तगाली", "स्पैनिश", "अंग्रेजी", "फ्रांसीसी"],
        "answer_en": "Portuguese",
        "answer_hi": "पुर्तगाली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the currency of the United Kingdom?",
        "question_hi": "संयुक्त राज्य के मुद्रारूपी कौन सा है?",
        "options_en": ["Pound", "Euro", "Dollar", "Franc"],
        "options_hi": ["पाउंड", "यूरो", "डॉलर", "फ्रैंक"],
        "answer_en": "Pound",
        "answer_hi": "पाउंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which of the following is the largest river in Africa?",
        "question_hi": "निम्नलिखित में से कौन सी सबसे लंबी नदी है?",
        "options_en": ["Nile", "Amazon", "Ganges", "Yangtze"],
        "options_hi": ["नाइल", "अमेज़न", "गंगा", "यांगत्से"],
        "answer_en": "Nile",
        "answer_hi": "नाइल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Who is the first woman to win a Nobel Prize?",
        "question_hi": "नobel पुरस्कार जीतने वाली पहली महिला कौन थीं?",
        "options_en": ["Marie Curie", "Rosalind Franklin", "Jane Goodall", "Ada Lovelace"],
        "options_hi": ["मैरी क्यूरी", "रोसलिंड फ्रैंकलिन", "जेन गूडॉल", "आडा लवलेस"],
        "answer_en": "Marie Curie",
        "answer_hi": "मैरी क्यूरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which country has the longest coastline in the world?",
        "question_hi": "दुनिया में किस देश का सबसे लंबा समुद्र तट है?",
        "options_en": ["Canada", "Russia", "United States", "Australia"],
        "options_hi": ["कनाडा", "रूस", "संयुक्त राज्य", "ऑस्ट्रेलिया"],
        "answer_en": "Canada",
        "answer_hi": "कनाडा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Who invented the light bulb?",
        "question_hi": "बत्तरी का आविष्कार किसने किया?",
        "options_en": ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Benjamin Franklin"],
        "options_hi": ["थॉमस एडिसन", "निकोल टेस्ला", "अलेक्जेंडर ग्राम बेल", "बेंजामिन फ्रैंकलिन"],
        "answer_en": "Thomas Edison",
        "answer_hi": "थॉमस एडिसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which country is the largest producer of oil?",
        "question_hi": "कौन सा देश तेल का सबसे बड़ा उत्पादक है?",
        "options_en": ["Saudi Arabia", "United States", "Russia", "China"],
        "options_hi": ["सऊदी अरब", "संयुक्त राज्य", "रूस", "चीन"],
        "answer_en": "Saudi Arabia",
        "answer_hi": "सऊदी अरब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which is the longest river in the world?",
        "question_hi": "दुनिया की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Amazon", "Nile", "Yangtze", "Ganges"],
        "options_hi": ["अमेज़न", "नाइल", "यांगत्से", "गंगा"],
        "answer_en": "Nile",
        "answer_hi": "नाइल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which of the following is the capital of Japan?",
        "question_hi": "निम्नलिखित में से कौन जापान की राजधानी है?",
        "options_en": ["Tokyo", "Beijing", "Seoul", "Bangkok"],
        "options_hi": ["टोक्यो", "बीजिंग", "सियोल", "बैंकॉक"],
        "answer_en": "Tokyo",
        "answer_hi": "टोक्यो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which of the following is the highest mountain in the world?",
        "question_hi": "निम्नलिखित में से कौन सा पर्वत दुनिया का सबसे ऊंचा पर्वत है?",
        "options_en": ["Mount Everest", "K2", "Kanchenjunga", "Lhotse"],
        "options_hi": ["माउंट एवरेस्ट", "के2", "कंचनजंघा", "लोत्से"],
        "answer_en": "Mount Everest",
        "answer_hi": "माउंट एवरेस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which country is the largest producer of wheat?",
        "question_hi": "कौन सा देश गेहूं का सबसे बड़ा उत्पादक है?",
        "options_en": ["China", "India", "United States", "Russia"],
        "options_hi": ["चीन", "भारत", "संयुक्त राज्य", "रूस"],
        "answer_en": "China",
        "answer_hi": "चीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which of the following is a famous landmark in Egypt?",
        "question_hi": "निम्नलिखित में से कौन सा प्रसिद्ध स्थल मिस्र में स्थित है?",
        "options_en": ["Pyramids of Giza", "Eiffel Tower", "Colosseum", "Great Wall of China"],
        "options_hi": ["गिजा के पिरामिड", "आइफेल टॉवर", "कोलोसियम", "चीन की महान दीवार"],
        "answer_en": "Pyramids of Giza",
        "answer_hi": "गिजा के पिरामिड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Who is the father of the Indian Constitution?",
        "question_hi": "भारतीय संविधान के पिता कौन हैं?",
        "options_en": ["Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
        "options_hi": ["डॉ. बी.आर. अंबेडकर", "पंडित नेहरू", "महात्मा गांधी", "सरदार वल्लभभाई पटेल"],
        "answer_en": "Dr. B.R. Ambedkar",
        "answer_hi": "डॉ. बी.आर. अंबेडकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the primary source of the Indian Constitution?",
        "question_hi": "भारतीय संविधान का प्रमुख स्रोत क्या है?",
        "options_en": ["Government of India Act, 1935", "British Parliament", "French Constitution", "American Constitution"],
        "options_hi": ["भारत सरकार अधिनियम, 1935", "ब्रिटिश संसद", "फ्रांसीसी संविधान", "अमेरिकी संविधान"],
        "answer_en": "Government of India Act, 1935",
        "answer_hi": "भारत सरकार अधिनियम, 1935",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Who was the first President of India?",
        "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
        "options_en": ["Dr. Rajendra Prasad", "Dr. Sarvepalli Radhakrishnan", "Jawaharlal Nehru", "Giani Zail Singh"],
        "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. सर्वपल्ली राधाकृष्णन", "पंडित नेहरू", "गियानी ज़ैल सिंह"],
        "answer_en": "Dr. Rajendra Prasad",
        "answer_hi": "डॉ. राजेंद्र प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "In which year did India gain independence?",
        "question_hi": "भारत ने किस वर्ष स्वतंत्रता प्राप्त की?",
        "options_en": ["1947", "1950", "1942", "1930"],
        "options_hi": ["1947", "1950", "1942", "1930"],
        "answer_en": "1947",
        "answer_hi": "1947",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Who is known as the 'Iron Man of India'?",
        "question_hi": "भारत के 'लौह पुरुष' के रूप में कौन प्रसिद्ध हैं?",
        "options_en": ["Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi"],
        "options_hi": ["सरदार वल्लभभाई पटेल", "पंडित नेहरू", "सुभाष चंद्र बोस", "महात्मा गांधी"],
        "answer_en": "Sardar Vallabhbhai Patel",
        "answer_hi": "सरदार वल्लभभाई पटेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which article of the Indian Constitution deals with the right to equality?",
        "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद समानता के अधिकार से संबंधित है?",
        "options_en": ["Article 14", "Article 21", "Article 19", "Article 25"],
        "options_hi": ["अनुच्छेद 14", "अनुच्छेद 21", "अनुच्छेद 19", "अनुच्छेद 25"],
        "answer_en": "Article 14",
        "answer_hi": "अनुच्छेद 14",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which is the largest state in India by area?",
        "question_hi": "भारत का सबसे बड़ा राज्य कौन सा है?",
        "options_en": ["Rajasthan", "Uttar Pradesh", "Maharashtra", "Bihar"],
        "options_hi": ["राजस्थान", "उत्तर प्रदेश", "महाराष्ट्र", "बिहार"],
        "answer_en": "Rajasthan",
        "answer_hi": "राजस्थान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which country is known as the 'Land of the Midnight Sun'?",
        "question_hi": "किस देश को 'मध्यरात्रि सूर्य की भूमि' के नाम से जाना जाता है?",
        "options_en": ["Norway", "Sweden", "Finland", "Iceland"],
        "options_hi": ["नॉर्वे", "स्वीडन", "फिनलैंड", "आइसलैंड"],
        "answer_en": "Norway",
        "answer_hi": "नॉर्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which is the smallest continent by area?",
        "question_hi": "क्षेत्रफल के हिसाब से सबसे छोटा महाद्वीप कौन सा है?",
        "options_en": ["Australia", "Asia", "Africa", "Europe"],
        "options_hi": ["ऑस्ट्रेलिया", "एशिया", "अफ्रीका", "यूरोप"],
        "answer_en": "Australia",
        "answer_hi": "ऑस्ट्रेलिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which is the longest mountain range in the world?",
        "question_hi": "दुनिया की सबसे लंबी पर्वत श्रृंखला कौन सी है?",
        "options_en": ["Himalayas", "Andes", "Rockies", "Alps"],
        "options_hi": ["हिमालय", "आँदी", "रॉकी", "आल्प्स"],
        "answer_en": "Andes",
        "answer_hi": "आँदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the capital of Australia?",
        "question_hi": "ऑस्ट्रेलिया की राजधानी क्या है?",
        "options_en": ["Canberra", "Sydney", "Melbourne", "Perth"],
        "options_hi": ["कैनबरा", "सिडनी", "मेलबर्न", "पर्थ"],
        "answer_en": "Canberra",
        "answer_hi": "कैनबरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which country is known as the 'Land of the Long White Cloud'?",
        "question_hi": "किस देश को 'लंबे सफेद बादल की भूमि' के नाम से जाना जाता है?",
        "options_en": ["New Zealand", "Australia", "Fiji", "Samoa"],
        "options_hi": ["न्यूज़ीलैंड", "ऑस्ट्रेलिया", "फिजी", "समोआ"],
        "answer_en": "New Zealand",
        "answer_hi": "न्यूज़ीलैंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Who was the first woman to fly in space?",
        "question_hi": "अंतरिक्ष में उड़ान भरने वाली पहली महिला कौन थीं?",
        "options_en": ["Valentina Tereshkova", "Sally Ride", "Mae Jemison", "Eileen Collins"],
        "options_hi": ["वलेनटिना टेरेशकोवा", "सैली राइड", "मै जेमिसन", "आइलीन कॉलिंस"],
        "answer_en": "Valentina Tereshkova",
        "answer_hi": "वलेनटिना टेरेशकोवा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which of the following countries is not a member of the European Union?",
        "question_hi": "निम्नलिखित में से कौन सा देश यूरोपीय संघ का सदस्य नहीं है?",
        "options_en": ["Norway", "Germany", "France", "Italy"],
        "options_hi": ["नॉर्वे", "जर्मनी", "फ्रांस", "इटली"],
        "answer_en": "Norway",
        "answer_hi": "नॉर्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the capital of Canada?",
        "question_hi": "कनाडा की राजधानी क्या है?",
        "options_en": ["Ottawa", "Toronto", "Vancouver", "Montreal"],
        "options_hi": ["ओटावा", "टोरंटो", "वैंकूवर", "मॉन्ट्रियल"],
        "answer_en": "Ottawa",
        "answer_hi": "ओटावा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which of the following is the largest continent by population?",
        "question_hi": "निम्नलिखित में से कौन सा महाद्वीप जनसंख्या के हिसाब से सबसे बड़ा है?",
        "options_en": ["Asia", "Africa", "Europe", "North America"],
        "options_hi": ["एशिया", "अफ्रीका", "यूरोप", "उत्तर अमेरिका"],
        "answer_en": "Asia",
        "answer_hi": "एशिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which country is known as the 'Pearl of Africa'?",
        "question_hi": "किस देश को 'अफ्रीका की मोती' के नाम से जाना जाता है?",
        "options_en": ["Uganda", "Kenya", "Nigeria", "South Africa"],
        "options_hi": ["युगांडा", "केन्या", "नाइजीरिया", "दक्षिण अफ्रीका"],
        "answer_en": "Uganda",
        "answer_hi": "युगांडा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which of the following is the longest river in Asia?",
        "question_hi": "निम्नलिखित में से कौन सी नदी एशिया में सबसे लंबी है?",
        "options_en": ["Yangtze", "Mekong", "Ganges", "Indus"],
        "options_hi": ["यांगत्से", "मेकोंग", "गंगा", "सिंधु"],
        "answer_en": "Yangtze",
        "answer_hi": "यांगत्से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which country is the largest producer of gold?",
        "question_hi": "कौन सा देश सोने का सबसे बड़ा उत्पादक है?",
        "options_en": ["China", "India", "Russia", "South Africa"],
        "options_hi": ["चीन", "भारत", "रूस", "दक्षिण अफ्रीका"],
        "answer_en": "China",
        "answer_hi": "चीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which of the following is a famous landmark in the United States?",
        "question_hi": "निम्नलिखित में से कौन सा प्रसिद्ध स्थल संयुक्त राज्य में स्थित है?",
        "options_en": ["Statue of Liberty", "Colosseum", "Great Wall of China", "Taj Mahal"],
        "options_hi": ["स्वतंत्रता की मूर्ति", "कोलोसियम", "चीन की महान दीवार", "ताज महल"],
        "answer_en": "Statue of Liberty",
        "answer_hi": "स्वतंत्रता की मूर्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which of the following is the largest ocean in the world?",
        "question_hi": "निम्नलिखित में से कौन सा महासागर दुनिया का सबसे बड़ा है?",
        "options_en": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        "options_hi": ["प्रशांत महासागर", "अटलांटिक महासागर", "भारतीय महासागर", "आर्कटिक महासागर"],
        "answer_en": "Pacific Ocean",
        "answer_hi": "प्रशांत महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the national flower of India?",
        "question_hi": "भारत का राष्ट्रीय फूल क्या है?",
        "options_en": ["Lotus", "Rose", "Sunflower", "Jasmine"],
        "options_hi": ["कमल", "गुलाब", "सूरजमुखी", "चमेली"],
        "answer_en": "Lotus",
        "answer_hi": "कमल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "In which year did the French Revolution start?",
        "question_hi": "फ्रांसीसी क्रांति की शुरुआत किस वर्ष हुई थी?",
        "options_en": ["1789", "1799", "1800", "1776"],
        "options_hi": ["1789", "1799", "1800", "1776"],
        "answer_en": "1789",
        "answer_hi": "1789",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Who was the first woman Prime Minister of India?",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        "options_en": ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil", "Sarojini Naidu"],
        "options_hi": ["इंदिरा गांधी", "सोनिया गांधी", "प्रणब पाटिल", "सारोजिनी नायडू"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What was the main purpose of the 'Salt March' led by Mahatma Gandhi?",
        "question_hi": "महात्मा गांधी द्वारा 'नमक मार्च' का मुख्य उद्देश्य क्या था?",
        "options_en": ["To protest against British salt tax", "To promote non-violence", "To demand independence", "To fight for equal rights"],
        "options_hi": ["ब्रिटिश नमक कर के खिलाफ विरोध", "अहिंसा का प्रचार करना", "स्वतंत्रता की मांग करना", "समान अधिकारों के लिए संघर्ष करना"],
        "answer_en": "To protest against British salt tax",
        "answer_hi": "ब्रिटिश नमक कर के खिलाफ विरोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which country is the world's largest producer of tea?",
        "question_hi": "दुनिया में चाय का सबसे बड़ा उत्पादक देश कौन सा है?",
        "options_en": ["China", "India", "Sri Lanka", "Kenya"],
        "options_hi": ["चीन", "भारत", "श्रीलंका", "केन्या"],
        "answer_en": "China",
        "answer_hi": "चीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "In which year did World War II end?",
        "question_hi": "द्वितीय विश्व युद्ध का अंत किस वर्ष हुआ था?",
        "options_en": ["1945", "1939", "1941", "1950"],
        "options_hi": ["1945", "1939", "1941", "1950"],
        "answer_en": "1945",
        "answer_hi": "1945",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Who is known as the 'Father of the Nation' in India?",
        "question_hi": "भारत में 'राष्ट्रपिता' के रूप में किसे जाना जाता है?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Sardar Vallabhbhai Patel"],
        "options_hi": ["महात्मा गांधी", "पंडित नेहरू", "सुभाष चंद्र बोस", "सरदार वल्लभभाई पटेल"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which country is home to the Great Barrier Reef?",
        "question_hi": "ग्रेट बैरियर रीफ किस देश में स्थित है?",
        "options_en": ["Australia", "USA", "Mexico", "South Africa"],
        "options_hi": ["ऑस्ट्रेलिया", "अमेरिका", "मेक्सिको", "दक्षिण अफ्रीका"],
        "answer_en": "Australia",
        "answer_hi": "ऑस्ट्रेलिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which is the longest river in India?",
        "question_hi": "भारत में सबसे लंबी नदी कौन सी है?",
        "options_en": ["Ganga", "Yamuna", "Indus", "Brahmaputra"],
        "options_hi": ["गंगा", "यमुन", "सिंधु", "ब्रह्मपुत्र"],
        "answer_en": "Ganga",
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "In which year did the Indian Independence Act come into effect?",
        "question_hi": "भारतीय स्वतंत्रता अधिनियम कब प्रभावी हुआ था?",
        "options_en": ["1947", "1950", "1948", "1952"],
        "options_hi": ["1947", "1950", "1948", "1952"],
        "answer_en": "1947",
        "answer_hi": "1947",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which is the largest desert in the world?",
        "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options_en": ["Sahara", "Gobi", "Kalahari", "Arabian"],
        "options_hi": ["सहारा", "गोबी", "कालाहारी", "अरबियन"],
        "answer_en": "Sahara",
        "answer_hi": "सहारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which is the tallest mountain in the world?",
        "question_hi": "दुनिया का सबसे ऊंचा पर्वत कौन सा है?",
        "options_en": ["Mount Everest", "K2", "Kangchenjunga", "Mount Kilimanjaro"],
        "options_hi": ["माउंट एवरेस्ट", "के2", "कंचनजंगा", "माउंट किलिमांजारो"],
        "answer_en": "Mount Everest",
        "answer_hi": "माउंट एवरेस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Who was the first emperor of the Maurya Dynasty?",
        "question_hi": "मौर्य वंश के पहले सम्राट कौन थे?",
        "options_en": ["Chandragupta Maurya", "Ashoka", "Bindusara", "Samudragupta"],
        "options_hi": ["चंद्रगुप्त मौर्य", "अशोक", "बिंदुसार", "समुद्रगुप्त"],
        "answer_en": "Chandragupta Maurya",
        "answer_hi": "चंद्रगुप्त मौर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the capital of Japan?",
        "question_hi": "जापान की राजधानी क्या है?",
        "options_en": ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
        "options_hi": ["टोक्यो", "ओसाका", "क्योटो", "हिरोशिमा"],
        "answer_en": "Tokyo",
        "answer_hi": "टोक्यो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which city is known as the 'City of Lights'?",
        "question_hi": "कौन सा शहर 'प्रकाशों का शहर' के नाम से जाना जाता है?",
        "options_en": ["Paris", "London", "New York", "Rome"],
        "options_hi": ["पेरिस", "लंदन", "न्यूयॉर्क", "रोम"],
        "answer_en": "Paris",
        "answer_hi": "पेरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which country is known as the 'Land of the Rising Sun'?",
        "question_hi": "किस देश को 'उदयमान सूर्य की भूमि' के नाम से जाना जाता है?",
        "options_en": ["Japan", "China", "South Korea", "India"],
        "options_hi": ["जापान", "चीन", "दक्षिण कोरिया", "भारत"],
        "answer_en": "Japan",
        "answer_hi": "जापान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which river is known as the 'Sorrow of Bengal'?",
        "question_hi": "कौन सी नदी 'बंगाल का शोक' के रूप में जानी जाती है?",
        "options_en": ["Damodar River", "Ganges River", "Yamuna River", "Brahmaputra River"],
        "options_hi": ["दामोदर नदी", "गंगा नदी", "यमुन नदी", "ब्रह्मपुत्र नदी"],
        "answer_en": "Damodar River",
        "answer_hi": "दामोदर नदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Who was the first woman to receive the Nobel Prize?",
        "question_hi": "नobel पुरस्कार प्राप्त करने वाली पहली महिला कौन थीं?",
        "options_en": ["Marie Curie", "Mother Teresa", "Indira Gandhi", "Dorothy Hodgkin"],
        "options_hi": ["मैरी क्यूरी", "मदर टेरेसा", "इंदिरा गांधी", "डोरोथी होजकिन"],
        "answer_en": "Marie Curie",
        "answer_hi": "मैरी क्यूरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which of the following is the longest river in Europe?",
        "question_hi": "निम्नलिखित में से कौन सी नदी यूरोप में सबसे लंबी है?",
        "options_en": ["Volga", "Danube", "Rhine", "Seine"],
        "options_hi": ["वोल्गा", "डैन्यूब", "राइन", "सीन"],
        "answer_en": "Volga",
        "answer_hi": "वोल्गा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which of the following is the largest country in the world by area?",
        "question_hi": "निम्नलिखित में से कौन सा देश क्षेत्रफल के हिसाब से दुनिया का सबसे बड़ा है?",
        "options_en": ["Russia", "Canada", "USA", "China"],
        "options_hi": ["रूस", "कनाडा", "अमेरिका", "चीन"],
        "answer_en": "Russia",
        "answer_hi": "रूस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Who was the first man to walk on the moon?",
        "question_hi": "चाँद पर चलने वाले पहले व्यक्ति कौन थे?",
        "options_en": ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"],
        "options_hi": ["नील आर्मस्ट्रांग", "यूरी गगारिन", "बज़ एल्ड्रिन", "जॉन ग्लेन"],
        "answer_en": "Neil Armstrong",
        "answer_hi": "नील आर्मस्ट्रांग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which of the following is the smallest continent by area?",
        "question_hi": "निम्नलिखित में से कौन सा महाद्वीप क्षेत्रफल के हिसाब से सबसे छोटा है?",
        "options_en": ["Australia", "Europe", "Antarctica", "Asia"],
        "options_hi": ["ऑस्ट्रेलिया", "यूरोप", "अंटार्कटिका", "एशिया"],
        "answer_en": "Australia",
        "answer_hi": "ऑस्ट्रेलिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the capital of Canada?",
        "question_hi": "कनाडा की राजधानी क्या है?",
        "options_en": ["Ottawa", "Toronto", "Vancouver", "Montreal"],
        "options_hi": ["ओटावा", "टोरंटो", "वैंकूवर", "मॉन्ट्रियल"],
        "answer_en": "Ottawa",
        "answer_hi": "ओटावा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which country is known as the 'Land of the Midnight Sun'?",
        "question_hi": "किस देश को 'मध्य रात्रि के सूर्य की भूमि' के नाम से जाना जाता है?",
        "options_en": ["Norway", "Sweden", "Finland", "Denmark"],
        "options_hi": ["नॉर्वे", "स्वीडन", "फिनलैंड", "डेनमार्क"],
        "answer_en": "Norway",
        "answer_hi": "नॉर्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which of the following is the longest river in Africa?",
        "question_hi": "निम्नलिखित में से कौन सी नदी अफ्रीका की सबसे लंबी नदी है?",
        "options_en": ["Nile", "Congo", "Niger", "Zambezi"],
        "options_hi": ["नील", "कोंगो", "नाइजर", "जाम्बेजी"],
        "answer_en": "Nile",
        "answer_hi": "नील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Who was the first emperor of the Roman Empire?",
        "question_hi": "रोमन साम्राज्य के पहले सम्राट कौन थे?",
        "options_en": ["Augustus", "Julius Caesar", "Tiberius", "Caligula"],
        "options_hi": ["ऑगस्टस", "जूलियस सीज़र", "टाइबेरियस", "कालिगुला"],
        "answer_en": "Augustus",
        "answer_hi": "ऑगस्टस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which event marked the beginning of the American Revolution?",
        "question_hi": "अमेरिकी क्रांति की शुरुआत कौन से घटना से हुई थी?",
        "options_en": ["Battles of Lexington and Concord", "Boston Tea Party", "Declaration of Independence", "Battle of Bunker Hill"],
        "options_hi": ["लेक्सिंगटन और कोंकॉर्ड की लड़ाई", "बॉस्टन चाय पार्टी", "स्वतंत्रता की घोषणा", "बंकर हिल की लड़ाई"],
        "answer_en": "Battles of Lexington and Concord",
        "answer_hi": "लेक्सिंगटन और कोंकॉर्ड की लड़ाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What was the main cause of the Russian Revolution?",
        "question_hi": "रूस क्रांति का मुख्य कारण क्या था?",
        "options_en": ["Poor living conditions of the working class", "The expansion of the Russian Empire", "The desire to protect the monarchy", "The success of the Bolshevik Party"],
        "options_hi": ["कामकाजी वर्ग की गरीब जीवन स्थितियाँ", "रूसी साम्राज्य का विस्तार", "राजतंत्र की रक्षा की इच्छा", "बोल्शेविक पार्टी की सफलता"],
        "answer_en": "Poor living conditions of the working class",
        "answer_hi": "कामकाजी वर्ग की गरीब जीवन स्थितियाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Who wrote the famous book 'The Communist Manifesto'?",
        "question_hi": "'द कम्युनिस्ट मैनिफेस्टो' नामक प्रसिद्ध पुस्तक किसने लिखी थी?",
        "options_en": ["Karl Marx", "Vladimir Lenin", "Friedrich Engels", "Leon Trotsky"],
        "options_hi": ["कार्ल मार्क्स", "व्लादिमीर लेनिन", "फ्रेडरिक एंगेल्स", "लियोन ट्रॉट्स्की"],
        "answer_en": "Karl Marx",
        "answer_hi": "कार्ल मार्क्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which country is the largest producer of oil?",
        "question_hi": "कौन सा देश तेल का सबसे बड़ा उत्पादक है?",
        "options_en": ["USA", "Russia", "Saudi Arabia", "China"],
        "options_hi": ["अमेरिका", "रूस", "सऊदी अरब", "चीन"],
        "answer_en": "USA",
        "answer_hi": "अमेरिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which is the longest mountain range in the world?",
        "question_hi": "दुनिया की सबसे लंबी पर्वत श्रृंखला कौन सी है?",
        "options_en": ["Andes", "Himalayas", "Rockies", "Alps"],
        "options_hi": ["एंडी", "हिमालय", "रॉकी", "आल्प्स"],
        "answer_en": "Andes",
        "answer_hi": "एंडी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Who was the first President of the United States?",
        "question_hi": "संयुक्त राज्य अमेरिका के पहले राष्ट्रपति कौन थे?",
        "options_en": ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        "options_hi": ["जॉर्ज वाशिंगटन", "थॉमस जेफरसन", "अब्राहम लिंकन", "जॉन एडम्स"],
        "answer_en": "George Washington",
        "answer_hi": "जॉर्ज वाशिंगटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the largest country in Africa by area?",
        "question_hi": "क्षेत्रफल के हिसाब से अफ्रीका का सबसे बड़ा देश कौन सा है?",
        "options_en": ["Algeria", "Nigeria", "Sudan", "Democratic Republic of Congo"],
        "options_hi": ["अल्जीरिया", "नाइजीरिया", "सूडान", "कांगो गणराज्य"],
        "answer_en": "Algeria",
        "answer_hi": "अल्जीरिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which river is the longest in North America?",
        "question_hi": "उत्तर अमेरिका की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Mississippi", "Missouri", "Colorado", "Yukon"],
        "options_hi": ["मिसिसिपी", "मिसूरी", "कोलोराडो", "युकोन"],
        "answer_en": "Missouri",
        "answer_hi": "मिसूरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "In which year did India become a republic?",
        "question_hi": "भारत ने गणराज्य कब बना था?",
        "options_en": ["1950", "1947", "1949", "1952"],
        "options_hi": ["1950", "1947", "1949", "1952"],
        "answer_en": "1950",
        "answer_hi": "1950",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the currency of Japan?",
        "question_hi": "जापान की मुद्रा क्या है?",
        "options_en": ["Yen", "Won", "Ringgit", "Rupee"],
        "options_hi": ["येण", "वोन", "रिंगगिट", "रुपया"],
        "answer_en": "Yen",
        "answer_hi": "येण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Who discovered gravity?",
        "question_hi": "गुरुत्वाकर्षण की खोज किसने की थी?",
        "options_en": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikolai Tesla"],
        "options_hi": ["आइज़क न्यूटन", "अल्बर्ट आइंस्टीन", "गैलीलियो गैलीली", "निकोले टेस्ला"],
        "answer_en": "Isaac Newton",
        "answer_hi": "आइज़क न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which continent is also known as the 'Dark Continent'?",
        "question_hi": "कौन सा महाद्वीप 'डार्क कॉन्टिनेंट' के रूप में भी जाना जाता है?",
        "options_en": ["Africa", "Asia", "Australia", "North America"],
        "options_hi": ["अफ्रीका", "एशिया", "ऑस्ट्रेलिया", "उत्तर अमेरिका"],
        "answer_en": "Africa",
        "answer_hi": "अफ्रीका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Who was the last Mughal emperor of India?",
        "question_hi": "भारत के अंतिम मुग़ल सम्राट कौन थे?",
        "options_en": ["Bahadur Shah Zafar", "Akbar", "Aurangzeb", "Shah Alam II"],
        "options_hi": ["बहादुर शाह ज़फर", "अकबर", "औरंगज़ेब", "शाह आलम II"],
        "answer_en": "Bahadur Shah Zafar",
        "answer_hi": "बहादुर शाह ज़फर",
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