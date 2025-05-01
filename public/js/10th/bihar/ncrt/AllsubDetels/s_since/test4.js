
const questions =[
    {
        "num": 1,
        "question_en": "Who was the first President of India?",
        "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
        "options_en": ["Dr. Rajendra Prasad", "Dr. Sarvepalli Radhakrishnan", "Jawaharlal Nehru", "Gulzarilal Nanda"],
        "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. सर्वपल्ली राधाकृष्णन", "जवाहरलाल नेहरू", "गुलजारिलाल नंदा"],
        "answer_en": "Dr. Rajendra Prasad",
        "answer_hi": "डॉ. राजेंद्र प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Who was the first female Prime Minister of India?",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sonia Gandhi"],
        "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "प्रणब पटिल", "सोमिया गांधी"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Where is the headquarters of the United Nations located?",
        "question_hi": "संयुक्त राष्ट्र का मुख्यालय कहाँ स्थित है?",
        "options_en": ["New York", "Geneva", "Paris", "London"],
        "options_hi": ["न्यूयॉर्क", "जेनेवा", "पेरिस", "लंदन"],
        "answer_en": "New York",
        "answer_hi": "न्यूयॉर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which of the following is the capital of India?",
        "question_hi": "निम्नलिखित में से भारत की राजधानी कौन सी है?",
        "options_en": ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        "options_hi": ["मुंबई", "नई दिल्ली", "कोलकाता", "चेन्नई"],
        "answer_en": "New Delhi",
        "answer_hi": "नई दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Who is known as the 'Father of the Nation' in India?",
        "question_hi": "भारत में 'राष्ट्रपिता' के रूप में किसे जाना जाता है?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार वल्लभभाई पटेल", "सुभाष चंद्र बोस"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which is the largest continent by area?",
        "question_hi": "क्षेत्रफल के हिसाब से सबसे बड़ा महाद्वीप कौन सा है?",
        "options_en": ["Asia", "Africa", "North America", "Europe"],
        "options_hi": ["एशिया", "अफ्रीका", "उत्तर अमेरिका", "यूरोप"],
        "answer_en": "Asia",
        "answer_hi": "एशिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which is the smallest continent by area?",
        "question_hi": "क्षेत्रफल के हिसाब से सबसे छोटा महाद्वीप कौन सा है?",
        "options_en": ["Europe", "Australia", "Antarctica", "Africa"],
        "options_hi": ["यूरोप", "ऑस्ट्रेलिया", "अंटार्कटिका", "अफ्रीका"],
        "answer_en": "Australia",
        "answer_hi": "ऑस्ट्रेलिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the currency of Japan?",
        "question_hi": "जापान की मुद्रा क्या है?",
        "options_en": ["Yuan", "Won", "Yen", "Ringgit"],
        "options_hi": ["युआन", "वोन", "येन", "रिंगगित"],
        "answer_en": "Yen",
        "answer_hi": "येन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which country is known as the 'Land of the Rising Sun'?",
        "question_hi": "कौन सा देश 'उगते सूरज का देश' के रूप में जाना जाता है?",
        "options_en": ["China", "India", "Japan", "South Korea"],
        "options_hi": ["चीन", "भारत", "जापान", "दक्षिण कोरिया"],
        "answer_en": "Japan",
        "answer_hi": "जापान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which river is known as the 'Saraswati' of India?",
        "question_hi": "भारत की 'सरस्वती' के रूप में कौन सी नदी प्रसिद्ध है?",
        "options_en": ["Ganges", "Yamuna", "Sindhu", "Saraswati"],
        "options_hi": ["गंगा", "यमुना", "सिंधु", "सरस्वती"],
        "answer_en": "Saraswati",
        "answer_hi": "सरस्वती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Who was the first woman ruler of India?",
        "question_hi": "भारत की पहली महिला शासक कौन थीं?",
        "options_en": ["Rani Lakshmi Bai", "Queen Victoria", "Indira Gandhi", "Razia Sultana"],
        "options_hi": ["रानी लक्ष्मी बाई", "क्वीन विक्टोरिया", "इंदिरा गांधी", "रज़िया सुलतान"],
        "answer_en": "Razia Sultana",
        "answer_hi": "रज़िया सुलतान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The Great Wall of China was built to protect China from which nomadic group?",
        "question_hi": "चीन की महान दीवार को चीन को किस घुमंतू समूह से बचाने के लिए बनाया गया था?",
        "options_en": ["Mongols", "Huns", "Vikings", "Turks"],
        "options_hi": ["मंगोल", "हुन", "वाइकिंग", "तुर्क"],
        "answer_en": "Mongols",
        "answer_hi": "मंगोल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which country has the longest coastline in the world?",
        "question_hi": "दुनिया में सबसे लंबी तटीय रेखा किस देश की है?",
        "options_en": ["Canada", "Australia", "India", "United States"],
        "options_hi": ["कनाडा", "ऑस्ट्रेलिया", "भारत", "संयुक्त राज्य"],
        "answer_en": "Canada",
        "answer_hi": "कनाडा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Who was the first Emperor of the Maurya Dynasty?",
        "question_hi": "मौर्य वंश के पहले सम्राट कौन थे?",
        "options_en": ["Ashoka", "Chandragupta Maurya", "Bindusara", "Ajatashatru"],
        "options_hi": ["अशोक", "चंद्रगुप्त मौर्य", "बिंदुसार", "अजातशत्रु"],
        "answer_en": "Chandragupta Maurya",
        "answer_hi": "चंद्रगुप्त मौर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which of the following is the national flower of India?",
        "question_hi": "निम्नलिखित में से भारत का राष्ट्रीय फूल कौन सा है?",
        "options_en": ["Rose", "Lotus", "Tulip", "Jasmine"],
        "options_hi": ["गुलाब", "कमल", "ट्यूलिप", "चमेली"],
        "answer_en": "Lotus",
        "answer_hi": "कमल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which was the first war of Indian independence?",
        "question_hi": "भारत का पहला स्वतंत्रता संग्राम कौन सा था?",
        "options_en": ["1857 Revolt", "Salt March", "Quit India Movement", "Non-Cooperation Movement"],
        "options_hi": ["1857 विद्रोह", "नमक सत्याग्रह", "भारत छोड़ो आंदोलन", "असहमति आंदोलन"],
        "answer_en": "1857 Revolt",
        "answer_hi": "1857 विद्रोह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which movement was led by Mahatma Gandhi in 1919?",
        "question_hi": "महात्मा गांधी ने 1919 में कौन सा आंदोलन चलाया था?",
        "options_en": ["Non-Cooperation Movement", "Salt March", "Civil Disobedience Movement", "Quit India Movement"],
        "options_hi": ["असहमति आंदोलन", "नमक सत्याग्रह", "नागरिक अवज्ञा आंदोलन", "भारत छोड़ो आंदोलन"],
        "answer_en": "Non-Cooperation Movement",
        "answer_hi": "असहमति आंदोलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Who wrote the book 'Discovery of India'?",
        "question_hi": "'भारत की खोज' पुस्तक किसने लिखी थी?",
        "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Lal Bahadur Shastri"],
        "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री"],
        "answer_en": "Jawaharlal Nehru",
        "answer_hi": "जवाहरलाल नेहरू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the capital city of Japan?",
        "question_hi": "जापान की राजधानी कौन सी है?",
        "options_en": ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
        "options_hi": ["ओसाका", "क्योटो", "टोक्यो", "हिरोशिमा"],
        "answer_en": "Tokyo",
        "answer_hi": "टोक्यो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the currency of China?",
        "question_hi": "चीन की मुद्रा क्या है?",
        "options_en": ["Yuan", "Won", "Yen", "Ringgit"],
        "options_hi": ["युआन", "वोन", "येन", "रिंगगित"],
        "answer_en": "Yuan",
        "answer_hi": "युआन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which movement is associated with Mahatma Gandhi's Salt March?",
        "question_hi": "महात्मा गांधी के नमक सत्याग्रह से कौन सा आंदोलन जुड़ा हुआ है?",
        "options_en": ["Non-Cooperation Movement", "Quit India Movement", "Civil Disobedience Movement", "Salt March"],
        "options_hi": ["असहमति आंदोलन", "भारत छोड़ो आंदोलन", "नागरिक अवज्ञा आंदोलन", "नमक सत्याग्रह"],
        "answer_en": "Civil Disobedience Movement",
        "answer_hi": "नागरिक अवज्ञा आंदोलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which country is the largest producer of tea?",
        "question_hi": "दुनिया में चाय का सबसे बड़ा उत्पादक कौन सा देश है?",
        "options_en": ["China", "India", "Sri Lanka", "Kenya"],
        "options_hi": ["चीन", "भारत", "श्रीलंका", "केन्या"],
        "answer_en": "China",
        "answer_hi": "चीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the currency of the United Kingdom?",
        "question_hi": "संयुक्त राज्य का मुद्रा कौन सी है?",
        "options_en": ["Pound", "Euro", "Dollar", "Rupee"],
        "options_hi": ["पाउंड", "यूरो", "डॉलर", "रुपया"],
        "answer_en": "Pound",
        "answer_hi": "पाउंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which of the following is the longest river in the world?",
        "question_hi": "निम्नलिखित में से दुनिया की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Amazon", "Nile", "Yangtze", "Mississippi"],
        "options_hi": ["अमेज़न", "नाइल", "यांग्त्से", "मिसिसिपी"],
        "answer_en": "Nile",
        "answer_hi": "नाइल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Who was the first emperor of the Gupta Dynasty?",
        "question_hi": "गुप्त वंश के पहले सम्राट कौन थे?",
        "options_en": ["Chandragupta I", "Samudragupta", "Chandragupta II", "Harsha"],
        "options_hi": ["चंद्रगुप्त प्रथम", "समुद्रगुप्त", "चंद्रगुप्त द्वितीय", "हर्ष"],
        "answer_en": "Chandragupta I",
        "answer_hi": "चंद्रगुप्त प्रथम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Who is known as the 'Father of the Nation' in India?",
        "question_hi": "भारत में 'राष्ट्रपिता' के रूप में किसे जाना जाता है?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Sardar Patel"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "सरदार पटेल"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Who was the first Governor-General of independent India?",
        "question_hi": "स्वतंत्र भारत का पहला गवर्नर जनरल कौन था?",
        "options_en": ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Viceroy"],
        "options_hi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू", "वाइसरॉय"],
        "answer_en": "C. Rajagopalachari",
        "answer_hi": "सी. राजगोपालाचारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Who is known as the 'Iron Man of India'?",
        "question_hi": "भारत का 'लौह पुरुष' किसे कहा जाता है?",
        "options_en": ["Sardar Patel", "Mahatma Gandhi", "Jawaharlal Nehru", "Lal Bahadur Shastri"],
        "options_hi": ["सरदार पटेल", "महात्मा गांधी", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री"],
        "answer_en": "Sardar Patel",
        "answer_hi": "सरदार पटेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "In which year did India gain independence from British rule?",
        "question_hi": "भारत ने ब्रिटिश शासन से किस वर्ष स्वतंत्रता प्राप्त की?",
        "options_en": ["1947", "1950", "1942", "1930"],
        "options_hi": ["1947", "1950", "1942", "1930"],
        "answer_en": "1947",
        "answer_hi": "1947",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Who was the first President of India?",
        "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
        "options_en": ["Dr. Rajendra Prasad", "Dr. Sarvepalli Radhakrishnan", "Jawaharlal Nehru", "Zakir Husain"],
        "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. सर्वपल्ली राधाकृष्णन", "जवाहरलाल नेहरू", "जाकिर हुसैन"],
        "answer_en": "Dr. Rajendra Prasad",
        "answer_hi": "डॉ. राजेंद्र प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Who was the first woman Prime Minister of India?",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Indira Gandhi", "Rajkumari Amrit Kaur"],
        "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "इंदिरा गांधी", "राजकुमारी अमृत कौर"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Who was the founder of the Maurya Dynasty?",
        "question_hi": "मौर्य वंश के संस्थापक कौन थे?",
        "options_en": ["Chandragupta Maurya", "Bindusara", "Ashoka", "Samudragupta"],
        "options_hi": ["चंद्रगुप्त मौर्य", "बिंदुसार", "अशोक", "समुद्रगुप्त"],
        "answer_en": "Chandragupta Maurya",
        "answer_hi": "चंद्रगुप्त मौर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which one of the following is not a part of the Indian national flag?",
        "question_hi": "निम्नलिखित में से कौन सा भारतीय राष्ट्रीय ध्वज का हिस्सा नहीं है?",
        "options_en": ["Wheel", "Lion", "Star", "Stripes"],
        "options_hi": ["चक्र", "सिंह", "तारा", "धारी"],
        "answer_en": "Lion",
        "answer_hi": "सिंह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which is the national bird of India?",
        "question_hi": "भारत का राष्ट्रीय पक्षी कौन सा है?",
        "options_en": ["Peacock", "Eagle", "Sparrow", "Pigeon"],
        "options_hi": ["मोर", "गरुड़", "गौरैया", "कबूतर"],
        "answer_en": "Peacock",
        "answer_hi": "मोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Who gave the slogan 'Do or Die' during the Quit India Movement?",
        "question_hi": "भारत छोड़ो आंदोलन के दौरान 'करो या मरो' का नारा किसने दिया था?",
        "options_en": ["Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Lal Bahadur Shastri"],
        "options_hi": ["सुभाष चंद्र बोस", "महात्मा गांधी", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which Indian state is known as the 'Land of the Rising Sun'?",
        "question_hi": "कौन सा भारतीय राज्य 'उदय का सूर्य' के रूप में जाना जाता है?",
        "options_en": ["Arunachal Pradesh", "Assam", "Nagaland", "Sikkim"],
        "options_hi": ["अरुणाचल प्रदेश", "असम", "नागालैंड", "सिक्किम"],
        "answer_en": "Arunachal Pradesh",
        "answer_hi": "अरुणाचल प्रदेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which is the longest river in India?",
        "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Ganges", "Godavari", "Yamuna", "Indus"],
        "options_hi": ["गंगा", "गोदावरी", "यमुना", "सिंधु"],
        "answer_en": "Ganges",
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which of the following is the national tree of India?",
        "question_hi": "निम्नलिखित में से भारत का राष्ट्रीय वृक्ष कौन सा है?",
        "options_en": ["Peepal", "Neem", "Bamboo", "Banyan"],
        "options_hi": ["पीपल", "नीम", "बाँस", "बरगद"],
        "answer_en": "Banyan",
        "answer_hi": "बरगद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Who was the first woman to become the President of the United Nations General Assembly?",
        "question_hi": "संयुक्त राष्ट्र महासभा की अध्यक्ष बनने वाली पहली महिला कौन थीं?",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Vijaya Lakshmi Pandit", "Sushma Swaraj"],
        "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "विजया लक्ष्मी पंडित", "सुषमा स्वराज"],
        "answer_en": "Vijaya Lakshmi Pandit",
        "answer_hi": "विजया लक्ष्मी पंडित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Who is known as the 'Missile Man of India'?",
        "question_hi": "भारत के 'मिसाइल मैन' के रूप में किसे जाना जाता है?",
        "options_en": ["A.P.J. Abdul Kalam", "Vikram Sarabhai", "Homi J. Bhabha", "Satish Dhawan"],
        "options_hi": ["ए. पी. जे. अब्दुल कलाम", "विक्रम साराभाई", "होमी जे. भाभा", "सतीश धवन"],
        "answer_en": "A.P.J. Abdul Kalam",
        "answer_hi": "ए. पी. जे. अब्दुल कलाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Who was the last Governor-General of independent India?",
        "question_hi": "स्वतंत्र भारत के अंतिम गवर्नर जनरल कौन थे?",
        "options_en": ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Viceroy"],
        "options_hi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू", "वाइसरॉय"],
        "answer_en": "C. Rajagopalachari",
        "answer_hi": "सी. राजगोपालाचारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which of the following is a non-metal?",
        "question_hi": "निम्नलिखित में से कौन सा एक धातु नहीं है?",
        "options_en": ["Sulphur", "Copper", "Iron", "Zinc"],
        "options_hi": ["गंधक", "तांबा", "लोहा", "जस्ता"],
        "answer_en": "Sulphur",
        "answer_hi": "गंधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which Indian freedom fighter is known as the 'Nightingale of India'?",
        "question_hi": "किस भारतीय स्वतंत्रता सेनानी को 'भारत की कोकिला' के नाम से जाना जाता है?",
        "options_en": ["Sarojini Naidu", "Indira Gandhi", "Lal Bahadur Shastri", "Subhas Chandra Bose"],
        "options_hi": ["सरोजिनी नायडू", "इंदिरा गांधी", "लाल बहादुर शास्त्री", "सुभाष चंद्र बोस"],
        "answer_en": "Sarojini Naidu",
        "answer_hi": "सरोजिनी नायडू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which is the smallest state in India by area?",
        "question_hi": "भारत का सबसे छोटा राज्य किस आधार पर है?",
        "options_en": ["Goa", "Sikkim", "Nagaland", "Manipur"],
        "options_hi": ["गोवा", "सिक्किम", "नागालैंड", "मणिपुर"],
        "answer_en": "Goa",
        "answer_hi": "गोवा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "In which year did India become a republic?",
        "question_hi": "भारत गणराज्य कब बना?",
        "options_en": ["1950", "1947", "1952", "1942"],
        "options_hi": ["1950", "1947", "1952", "1942"],
        "answer_en": "1950",
        "answer_hi": "1950",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the national flower of India?",
        "question_hi": "भारत का राष्ट्रीय फूल कौन सा है?",
        "options_en": ["Lotus", "Rose", "Tulip", "Sunflower"],
        "options_hi": ["कमल", "गुलाब", "ट्यूलिप", "सूरजमुखी"],
        "answer_en": "Lotus",
        "answer_hi": "कमल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which is the national animal of India?",
        "question_hi": "भारत का राष्ट्रीय पशु कौन सा है?",
        "options_en": ["Lion", "Elephant", "Tiger", "Horse"],
        "options_hi": ["सिंह", "हाथी", "बाघ", "घोड़ा"],
        "answer_en": "Tiger",
        "answer_hi": "बाघ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which of the following is not a constitutional body in India?",
        "question_hi": "निम्नलिखित में से कौन सा भारतीय संविधानिक निकाय नहीं है?",
        "options_en": ["Election Commission", "National Human Rights Commission", "Planning Commission", "Supreme Court"],
        "options_hi": ["निर्वाचन आयोग", "राष्ट्रीय मानवाधिकार आयोग", "योजना आयोग", "सुप्रीम कोर्ट"],
        "answer_en": "Planning Commission",
        "answer_hi": "योजना आयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Who was the first woman to climb Mount Everest?",
        "question_hi": "पहली महिला कौन थी जिन्होंने माउंट एवरेस्ट की चोटी चढ़ी?",
        "options_en": ["Junko Tabei", "Smt. Arunima Sinha", "Bachendri Pal", "Kanchan Soni"],
        "options_hi": ["जुनको ताबे", "अरुणिमा सिन्हा", "बचेंद्री पाल", "कंचन सोनी"],
        "answer_en": "Bachendri Pal",
        "answer_hi": "बचेंद्री पाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Who was the first Emperor of the Maurya Empire?",
        "question_hi": "मौर्य साम्राज्य के पहले सम्राट कौन थे?",
        "options_en": ["Chandragupta Maurya", "Bindusara", "Ashoka", "Samudragupta"],
        "options_hi": ["चंद्रगुप्त मौर्य", "बिंदुसार", "अशोक", "समुद्रगुप्त"],
        "answer_en": "Chandragupta Maurya",
        "answer_hi": "चंद्रगुप्त मौर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Who is known as the 'Father of the Indian Renaissance'?",
        "question_hi": "भारत के 'पुनर्जागरण के पिता' के रूप में किसे जाना जाता है?",
        "options_en": ["Raja Ram Mohan Roy", "Swami Vivekananda", "Bal Gangadhar Tilak", "Lala Lajpat Rai"],
        "options_hi": ["राजा राम मोहन राय", "स्वामी विवेकानंद", "बाल गंगाधर तिलक", "लाला लाजपत राय"],
        "answer_en": "Raja Ram Mohan Roy",
        "answer_hi": "राजा राम मोहन राय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Who is the first woman to become the Chief Minister of an Indian state?",
        "question_hi": "भारत के किसी राज्य की पहली महिला मुख्यमंत्री कौन थीं?",
        "options_en": ["Sarojini Naidu", "Indira Gandhi", "Sushma Swaraj", "Sucheta Kriplani"],
        "options_hi": ["सरोजिनी नायडू", "इंदिरा गांधी", "सुषमा स्वराज", "सुचेता कृपलानी"],
        "answer_en": "Sucheta Kriplani",
        "answer_hi": "सुचेता कृपलानी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Who was the first Indian woman to win a Nobel Prize?",
        "question_hi": "पहली भारतीय महिला कौन थीं जिन्होंने नोबेल पुरस्कार जीता?",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Mother Teresa", "Vikram Sarabhai"],
        "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "मदर टेरेसा", "विक्रम साराभाई"],
        "answer_en": "Mother Teresa",
        "answer_hi": "मदर टेरेसा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which of the following is a renewable source of energy?",
        "question_hi": "निम्नलिखित में से कौन सा ऊर्जा का नवीकरणीय स्रोत है?",
        "options_en": ["Coal", "Oil", "Natural Gas", "Solar Energy"],
        "options_hi": ["कोयला", "तेल", "प्राकृतिक गैस", "सौर ऊर्जा"],
        "answer_en": "Solar Energy",
        "answer_hi": "सौर ऊर्जा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Who was the first President of India?",
        "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
        "options_en": ["Dr. Rajendra Prasad", "Dr. Sarvepalli Radhakrishnan", "Zakir Husain", "Dr. Abdul Kalam"],
        "options_hi": ["डॉ. राजेन्द्र प्रसाद", "डॉ. सर्वपल्ली राधाकृष्णन", "जाकिर हुसैन", "डॉ. ए. पी. जे. अब्दुल कलाम"],
        "answer_en": "Dr. Rajendra Prasad",
        "answer_hi": "डॉ. राजेन्द्र प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which country is known as the 'Land of the Rising Sun'?",
        "question_hi": "किस देश को 'उदय का सूर्य' के नाम से जाना जाता है?",
        "options_en": ["Japan", "China", "India", "South Korea"],
        "options_hi": ["जापान", "चीन", "भारत", "दक्षिण कोरिया"],
        "answer_en": "Japan",
        "answer_hi": "जापान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Who is the author of the book 'Discovery of India'?",
        "question_hi": "पुस्तक 'भारत की खोज' के लेखक कौन हैं?",
        "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Vallabhbhai Patel"],
        "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस", "सर्दार वल्लभभाई पटेल"],
        "answer_en": "Jawaharlal Nehru",
        "answer_hi": "जवाहरलाल नेहरू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which is the largest democracy in the world?",
        "question_hi": "दुनिया का सबसे बड़ा लोकतंत्र कौन सा है?",
        "options_en": ["India", "USA", "China", "Brazil"],
        "options_hi": ["भारत", "संयुक्त राज्य अमेरिका", "चीन", "ब्राज़ील"],
        "answer_en": "India",
        "answer_hi": "भारत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the capital city of India?",
        "question_hi": "भारत की राजधानी कौन सी है?",
        "options_en": ["Mumbai", "Kolkata", "Chennai", "New Delhi"],
        "options_hi": ["मुंबई", "कोलकाता", "चेन्नई", "नई दिल्ली"],
        "answer_en": "New Delhi",
        "answer_hi": "नई दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Who was the first woman to receive the Bharat Ratna?",
        "question_hi": "भारत रत्न प्राप्त करने वाली पहली महिला कौन थीं?",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Mother Teresa", "Sushma Swaraj"],
        "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "मदर टेरेसा", "सुषमा स्वराज"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Who is the author of the book 'The Discovery of India'?",
        "question_hi": "'भारत की खोज' पुस्तक के लेखक कौन हैं?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "B.R. Ambedkar"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "डॉ. भीमराव अंबेडकर"],
        "answer_en": "Jawaharlal Nehru",
        "answer_hi": "जवाहरलाल नेहरू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which of the following is a source of non-conventional energy?",
        "question_hi": "निम्नलिखित में से कौन सा गैर-पारंपरिक ऊर्जा का स्रोत है?",
        "options_en": ["Wind Energy", "Coal", "Petroleum", "Natural Gas"],
        "options_hi": ["पवन ऊर्जा", "कोयला", "पेट्रोलियम", "प्राकृतिक गैस"],
        "answer_en": "Wind Energy",
        "answer_hi": "पवन ऊर्जा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the full form of the acronym 'NATO'?",
        "question_hi": "'NATO' का पूरा रूप क्या है?",
        "options_en": ["National Association of Television Operators", "North Atlantic Treaty Organization", "National Automatic Transmission Operations", "None of these"],
        "options_hi": ["नेशनल एसोसिएशन ऑफ टेलीविज़न ऑपरेटर", "नॉर्थ अटलांटिक ट्रिटी संगठन", "नेशनल ऑटोमेटिक ट्रांसमिशन ऑपरेशन्स", "इनमें से कोई नहीं"],
        "answer_en": "North Atlantic Treaty Organization",
        "answer_hi": "नॉर्थ अटलांटिक ट्रिटी संगठन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "In which year did India gain independence?",
        "question_hi": "भारत ने किस वर्ष स्वतंत्रता प्राप्त की?",
        "options_en": ["1947", "1950", "1942", "1952"],
        "options_hi": ["1947", "1950", "1942", "1952"],
        "answer_en": "1947",
        "answer_hi": "1947",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which of the following is the national bird of India?",
        "question_hi": "निम्नलिखित में से कौन सा भारत का राष्ट्रीय पक्षी है?",
        "options_en": ["Peacock", "Eagle", "Sparrow", "Parrot"],
        "options_hi": ["मोर", "गरुड़", "गौरैया", "तोता"],
        "answer_en": "Peacock",
        "answer_hi": "मोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which is the longest river in India?",
        "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Ganga", "Yamuna", "Indus", "Brahmaputra"],
        "options_hi": ["गंगा", "यमुन", "सिंधु", "ब्रह्मपुत्र"],
        "answer_en": "Ganga",
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the capital city of Japan?",
        "question_hi": "जापान की राजधानी कौन सी है?",
        "options_en": ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
        "options_hi": ["क्योटो", "ओसाका", "टोक्यो", "हिरोशिमा"],
        "answer_en": "Tokyo",
        "answer_hi": "टोक्यो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Who was the first President of the United States of America?",
        "question_hi": "संयुक्त राज्य अमेरिका के पहले राष्ट्रपति कौन थे?",
        "options_en": ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
        "options_hi": ["जॉर्ज वाशिंगटन", "अब्राहम लिंकन", "थॉमस जेफरसन", "जॉन एडम्स"],
        "answer_en": "George Washington",
        "answer_hi": "जॉर्ज वाशिंगटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which country is known as the 'Land of White Elephants'?",
        "question_hi": "किस देश को 'सफेद हाथियों की भूमि' के नाम से जाना जाता है?",
        "options_en": ["India", "Thailand", "Sri Lanka", "Myanmar"],
        "options_hi": ["भारत", "थाईलैंड", "श्रीलंका", "म्यांमार"],
        "answer_en": "Thailand",
        "answer_hi": "थाईलैंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which is the smallest continent in the world?",
        "question_hi": "दुनिया का सबसे छोटा महाद्वीप कौन सा है?",
        "options_en": ["Australia", "Europe", "Africa", "Antarctica"],
        "options_hi": ["ऑस्ट्रेलिया", "यूरोप", "अफ्रीका", "अंटार्कटिका"],
        "answer_en": "Australia",
        "answer_hi": "ऑस्ट्रेलिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the full form of 'ISRO'?",
        "question_hi": "'ISRO' का पूरा रूप क्या है?",
        "options_en": ["Indian Space Research Organization", "Indian School of Research Operations", "International Space Research Organization", "Indian Security Research Organization"],
        "options_hi": ["भारतीय अंतरिक्ष अनुसंधान संगठन", "भारतीय अनुसंधान संचालन विद्यालय", "अंतर्राष्ट्रीय अंतरिक्ष अनुसंधान संगठन", "भारतीय सुरक्षा अनुसंधान संगठन"],
        "answer_en": "Indian Space Research Organization",
        "answer_hi": "भारतीय अंतरिक्ष अनुसंधान संगठन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which one of the following is the longest mountain range in the world?",
        "question_hi": "निम्नलिखित में से कौन सा सबसे लंबा पर्वत श्रृंखला है?",
        "options_en": ["Andes", "Himalayas", "Rocky Mountains", "Alps"],
        "options_hi": ["ऐंडीज", "हिमालय", "रॉकी माउंटेन्स", "आल्प्स"],
        "answer_en": "Andes",
        "answer_hi": "ऐंडीज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which is the tallest mountain in the world?",
        "question_hi": "दुनिया की सबसे ऊंची पर्वत चोटी कौन सी है?",
        "options_en": ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
        "options_hi": ["माउंट एवरेस्ट", "K2", "कंचनजंगा", "मकालू"],
        "answer_en": "Mount Everest",
        "answer_hi": "माउंट एवरेस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which is the largest ocean in the world?",
        "question_hi": "दुनिया का सबसे बड़ा महासागर कौन सा है?",
        "options_en": ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        "options_hi": ["अटलांटिक महासागर", "भारतीय महासागर", "दक्षिणी महासागर", "प्रशांत महासागर"],
        "answer_en": "Pacific Ocean",
        "answer_hi": "प्रशांत महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which of the following is a hot desert?",
        "question_hi": "निम्नलिखित में से कौन सा गर्म मरुस्थल है?",
        "options_en": ["Sahara Desert", "Karakum Desert", "Kalahari Desert", "Gobi Desert"],
        "options_hi": ["सहारा मरुस्थल", "काराकुम मरुस्थल", "कालाहारी मरुस्थल", "गोबी मरुस्थल"],
        "answer_en": "Sahara Desert",
        "answer_hi": "सहारा मरुस्थल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Who was the first woman in space?",
        "question_hi": "अंतरिक्ष में जाने वाली पहली महिला कौन थीं?",
        "options_en": ["Valentina Tereshkova", "Sally Ride", "Mae Jemison", "Yuri Gagarin"],
        "options_hi": ["वालेंटिना टेरेशकोवा", "सैली राइड", "मे जेमिसन", "यूरी गागारिन"],
        "answer_en": "Valentina Tereshkova",
        "answer_hi": "वालेंटिना टेरेशकोवा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which is the highest mountain in India?",
        "question_hi": "भारत की सबसे ऊंची पर्वत चोटी कौन सी है?",
        "options_en": ["Mount Everest", "Kanchenjunga", "Nanda Devi", "Makalu"],
        "options_hi": ["माउंट एवरेस्ट", "कंचनजंगा", "नंदा देवी", "मकालू"],
        "answer_en": "Kanchenjunga",
        "answer_hi": "कंचनजंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Who invented the light bulb?",
        "question_hi": "बत्ती का अविष्कार किसने किया था?",
        "options_en": ["Nikola Tesla", "Thomas Edison", "Albert Einstein", "James Watt"],
        "options_hi": ["निकोला टेस्ला", "थॉमस एडिसन", "अल्बर्ट आइंस्टीन", "जेम्स वॉट"],
        "answer_en": "Thomas Edison",
        "answer_hi": "थॉमस एडिसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Who invented the telephone?",
        "question_hi": "टेलीफोन का अविष्कार किसने किया?",
        "options_en": ["Nikola Tesla", "Graham Bell", "Thomas Edison", "Alexander Graham Bell"],
        "options_hi": ["निकोला टेस्ला", "ग्राम बेल", "थॉमस एडिसन", "अलेक्जेंडर ग्राम बेल"],
        "answer_en": "Alexander Graham Bell",
        "answer_hi": "अलेक्जेंडर ग्राम बेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Who is the father of modern physics?",
        "question_hi": "आधुनिक भौतिकी के पिता कौन हैं?",
        "options_en": ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
        "options_hi": ["आइज़क न्यूटन", "अल्बर्ट आइंस्टीन", "निल्स बोर", "गैलीलियो गैलीली"],
        "answer_en": "Albert Einstein",
        "answer_hi": "अल्बर्ट आइंस्टीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the capital of Australia?",
        "question_hi": "ऑस्ट्रेलिया की राजधानी क्या है?",
        "options_en": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        "options_hi": ["सिडनी", "मेलबर्न", "कैनबरा", "ब्रिसबेन"],
        "answer_en": "Canberra",
        "answer_hi": "कैनबरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which country is known as the 'Land of the Rising Sun'?",
        "question_hi": "किस देश को 'उगते सूरज की भूमि' के नाम से जाना जाता है?",
        "options_en": ["China", "Japan", "India", "Thailand"],
        "options_hi": ["चीन", "जापान", "भारत", "थाईलैंड"],
        "answer_en": "Japan",
        "answer_hi": "जापान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Who was the first woman Prime Minister of India?",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        "options_en": ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil", "Sarojini Naidu"],
        "options_hi": ["इंदिरा गांधी", "सोनिया गांधी", "प्रतीक्षा पाटिल", "सारोजिनी नायडू"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
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
        "num": 85,
        "question_en": "Who discovered the theory of relativity?",
        "question_hi": "सापेक्षता के सिद्धांत की खोज किसने की?",
        "options_en": ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
        "options_hi": ["आइज़क न्यूटन", "अल्बर्ट आइंस्टीन", "निकोला टेस्ला", "गैलीलियो गैलीली"],
        "answer_en": "Albert Einstein",
        "answer_hi": "अल्बर्ट आइंस्टीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which country is known as the 'Land of the Midnight Sun'?",
        "question_hi": "किस देश को 'मध्यरात्रि सूर्य की भूमि' के नाम से जाना जाता है?",
        "options_en": ["Norway", "Sweden", "Iceland", "Finland"],
        "options_hi": ["नॉर्वे", "स्वीडन", "आइसलैंड", "फिनलैंड"],
        "answer_en": "Norway",
        "answer_hi": "नॉर्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which is the largest island in the world?",
        "question_hi": "दुनिया का सबसे बड़ा द्वीप कौन सा है?",
        "options_en": ["Greenland", "Australia", "New Guinea", "Borneo"],
        "options_hi": ["ग्रीनलैंड", "ऑस्ट्रेलिया", "न्यू गिनी", "बोर्नियो"],
        "answer_en": "Greenland",
        "answer_hi": "ग्रीनलैंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which of the following is the largest country by land area?",
        "question_hi": "निम्नलिखित में से कौन सा देश भूमि क्षेत्रफल के हिसाब से सबसे बड़ा है?",
        "options_en": ["Canada", "USA", "China", "Russia"],
        "options_hi": ["कनाडा", "यूएसए", "चीन", "रूस"],
        "answer_en": "Russia",
        "answer_hi": "रूस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Who is the father of the Indian Constitution?",
        "question_hi": "भारत के संविधान के पिता कौन हैं?",
        "options_en": ["Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Sardar Patel", "Mahatma Gandhi"],
        "options_hi": ["जवाहरलाल नेहरू", "डॉ. भीमराव अंबेडकर", "सरदार पटेल", "महात्मा गांधी"],
        "answer_en": "Dr. B.R. Ambedkar",
        "answer_hi": "डॉ. भीमराव अंबेडकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the national currency of Japan?",
        "question_hi": "जापान की राष्ट्रीय मुद्रा क्या है?",
        "options_en": ["Yuan", "Yen", "Won", "Ringgit"],
        "options_hi": ["युआन", "येन", "वोन", "रिंगगिट"],
        "answer_en": "Yen",
        "answer_hi": "येन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which is the largest democracy in the world?",
        "question_hi": "दुनिया का सबसे बड़ा लोकतंत्र कौन सा है?",
        "options_en": ["India", "USA", "China", "Russia"],
        "options_hi": ["भारत", "यूएसए", "चीन", "रूस"],
        "answer_en": "India",
        "answer_hi": "भारत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Who invented the first practical telephone?",
        "question_hi": "पहला व्यावहारिक टेलीफोन किसने आविष्कृत किया था?",
        "options_en": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Michael Faraday"],
        "options_hi": ["थॉमस एडिसन", "अलेक्जेंडर ग्राम बेल", "निकोला टेस्ला", "माइकल फैराडे"],
        "answer_en": "Alexander Graham Bell",
        "answer_hi": "अलेक्जेंडर ग्राम बेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which is the world's smallest country by area?",
        "question_hi": "क्षेत्रफल के हिसाब से दुनिया का सबसे छोटा देश कौन सा है?",
        "options_en": ["Monaco", "Vatican City", "Nauru", "Tuvalu"],
        "options_hi": ["मोनाको", "वैटिकन सिटी", "नौरू", "टुवालू"],
        "answer_en": "Vatican City",
        "answer_hi": "वैटिकन सिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Who was the first emperor of China?",
        "question_hi": "चीन के पहले सम्राट कौन थे?",
        "options_en": ["Qin Shi Huang", "Kublai Khan", "Sun Tzu", "Genghis Khan"],
        "options_hi": ["क्विन शी हुआंग", "कुबलाई खान", "सन त्ज़ू", "चंगेज खान"],
        "answer_en": "Qin Shi Huang",
        "answer_hi": "क्विन शी हुआंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which city is known as the 'City of Light'?",
        "question_hi": "किस शहर को 'प्रकाश का शहर' कहा जाता है?",
        "options_en": ["Paris", "London", "New York", "Tokyo"],
        "options_hi": ["पेरिस", "लंदन", "न्यू यॉर्क", "टोक्यो"],
        "answer_en": "Paris",
        "answer_hi": "पेरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
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
        "num": 97,
        "question_en": "Who was the first person to walk on the moon?",
        "question_hi": "चाँद पर चलने वाले पहले व्यक्ति कौन थे?",
        "options_en": ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
        "options_hi": ["नील आर्मस्ट्रांग", "बज़ एल्ड्रिन", "यूरी गगारिन", "माइकल कॉलिन्स"],
        "answer_en": "Neil Armstrong",
        "answer_hi": "नील आर्मस्ट्रांग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which is the largest continent by area?",
        "question_hi": "क्षेत्रफल के हिसाब से कौन सा महाद्वीप सबसे बड़ा है?",
        "options_en": ["Asia", "Africa", "North America", "Europe"],
        "options_hi": ["एशिया", "अफ्रीका", "उत्तर अमेरिका", "यूरोप"],
        "answer_en": "Asia",
        "answer_hi": "एशिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which is the highest mountain in North America?",
        "question_hi": "उत्तर अमेरिका का सबसे ऊँचा पर्वत कौन सा है?",
        "options_en": ["Mount Everest", "Denali", "Mount McKinley", "Mount Whitney"],
        "options_hi": ["माउंट एवरेस्ट", "डिनाली", "माउंट मैकिन्ली", "माउंट व्हिटनी"],
        "answer_en": "Denali",
        "answer_hi": "डिनाली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the national flower of India?",
        "question_hi": "भारत का राष्ट्रीय फूल कौन सा है?",
        "options_en": ["Rose", "Lotus", "Sunflower", "Tulip"],
        "options_hi": ["गुलाब", "कमल", "सूरजमुखी", "तुलिप"],
        "answer_en": "Lotus",
        "answer_hi": "कमल",
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