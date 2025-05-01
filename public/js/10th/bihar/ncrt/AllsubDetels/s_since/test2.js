
const questions =[
    {
        "num": 1,
        "question_en": "Which of the following is a primary source of history?",
        "question_hi": "निम्नलिखित में से कौन सा इतिहास का प्राथमिक स्रोत है?",
        "options_en": ["Newspaper", "Monuments", "Books", "Articles"],
        "options_hi": ["अखबार", "स्मारक", "पुस्तकें", "लेख"],
        "answer_en": "Monuments",
        "answer_hi": "स्मारक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Who was the first President of India?",
        "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
        "options_en": ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Lal Bahadur Shastri", "Dr. S. Radhakrishnan"],
        "options_hi": ["जवाहरलाल नेहरू", "डॉ. राजेंद्र प्रसाद", "लाल बहादुर शास्त्री", "डॉ. सर्वपल्ली राधाकृष्णन"],
        "answer_en": "Dr. Rajendra Prasad",
        "answer_hi": "डॉ. राजेंद्र प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The term 'Cold War' refers to the tension between which two blocs?",
        "question_hi": "'कोल्ड वॉर' शब्द किस दो गुटों के बीच तनाव को संदर्भित करता है?",
        "options_en": ["USA and USSR", "India and Pakistan", "China and USA", "Germany and USA"],
        "options_hi": ["अमेरिका और सोवियत संघ", "भारत और पाकिस्तान", "चीन और अमेरिका", "जर्मनी और अमेरिका"],
        "answer_en": "USA and USSR",
        "answer_hi": "अमेरिका और सोवियत संघ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Who was the founder of the Maurya Empire?",
        "question_hi": "मौर्य साम्राज्य के संस्थापक कौन थे?",
        "options_en": ["Chandragupta Maurya", "Ashoka", "Bindusara", "Samudragupta"],
        "options_hi": ["चंद्रगुप्त मौर्य", "अशोक", "बिन्दुसार", "समुद्रगुप्त"],
        "answer_en": "Chandragupta Maurya",
        "answer_hi": "चंद्रगुप्त मौर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What was the main cause of the French Revolution?",
        "question_hi": "फ्रांसीसी क्रांति का मुख्य कारण क्या था?",
        "options_en": ["Economic disparity", "Religious differences", "Colonial expansion", "Economic depression"],
        "options_hi": ["आर्थिक भेदभाव", "धार्मिक भेद", "उपनिवेश विस्तार", "आर्थिक मंदी"],
        "answer_en": "Economic disparity",
        "answer_hi": "आर्थिक भेदभाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which is the largest state in India by area?",
        "question_hi": "भारत का सबसे बड़ा राज्य क्षेत्रफल के हिसाब से कौन सा है?",
        "options_en": ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Madhya Pradesh"],
        "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान", "मध्य प्रदेश"],
        "answer_en": "Rajasthan",
        "answer_hi": "राजस्थान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Who is known as the 'Father of the Nation' in India?",
        "question_hi": "भारत में 'राष्ट्रपिता' के रूप में कौन जाने जाते हैं?",
        "options_en": ["Subhas Chandra Bose", "Jawaharlal Nehru", "Mahatma Gandhi", "Bhagat Singh"],
        "options_hi": ["सुभाष चंद्र बोस", "जवाहरलाल नेहरू", "महात्मा गांधी", "भगत सिंह"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which river is known as the 'Sorrow of Bengal'?",
        "question_hi": "कौन सी नदी को 'बंगाल का शोक' के रूप में जाना जाता है?",
        "options_en": ["Ganga", "Yamuna", "Brahmaputra", "Damodar"],
        "options_hi": ["गंगा", "यमुन", "ब्रह्मपुत्र", "दामोदर"],
        "answer_en": "Damodar",
        "answer_hi": "दामोदर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Who wrote the book 'Discovery of India'?",
        "question_hi": "'भारत का इतिहास' पुस्तक किसने लिखी थी?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "B.R. Ambedkar"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "बी.आर. अंबेडकर"],
        "answer_en": "Jawaharlal Nehru",
        "answer_hi": "जवाहरलाल नेहरू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the capital of India?",
        "question_hi": "भारत की राजधानी क्या है?",
        "options_en": ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
        "options_hi": ["मुंबई", "कोलकाता", "नई दिल्ली", "चेन्नई"],
        "answer_en": "New Delhi",
        "answer_hi": "नई दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Who was the last governor-general of independent India?",
        "question_hi": "स्वतंत्र भारत के अंतिम गवर्नर-जनरल कौन थे?",
        "options_en": ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "V. V. Giri"],
        "options_hi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू", "वी. वी. गिरी"],
        "answer_en": "C. Rajagopalachari",
        "answer_hi": "सी. राजगोपालाचारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which of the following is a feature of the Cold War?",
        "question_hi": "निम्नलिखित में से कौन सा कोल्ड वॉर का एक लक्षण है?",
        "options_en": ["Arms race", "Democracy", "Economic cooperation", "Global warming"],
        "options_hi": ["हथियारों की दौड़", "लोकतंत्र", "आर्थिक सहयोग", "वैश्विक तापन"],
        "answer_en": "Arms race",
        "answer_hi": "हथियारों की दौड़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
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
        "num": 14,
        "question_en": "Who was the first woman Prime Minister of India?",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Sonia Gandhi", "Vijay Lakshmi Pandit"],
        "options_hi": ["इंदिरा गांधी", "सारोजिनी नायडू", "सोनिया गांधी", "विजय लक्ष्मी पंडित"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Who founded the All India Muslim League?",
        "question_hi": "ऑल इंडिया मुस्लिम लीग की स्थापना किसने की थी?",
        "options_en": ["Allama Iqbal", "Muhammad Ali Jinnah", "Syed Ahmad Khan", "Liaquat Ali Khan"],
        "options_hi": ["अल्लामा इकबाल", "मुहम्मद अली जिन्ना", "सैयद अहमद खान", "लियाकत अली खान"],
        "answer_en": "Muhammad Ali Jinnah",
        "answer_hi": "मुहम्मद अली जिन्ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which country was known as the 'Land of the Rising Sun'?",
        "question_hi": "कौन सा देश 'उगते सूरज की भूमि' के नाम से जाना जाता था?",
        "options_en": ["China", "Japan", "Korea", "India"],
        "options_hi": ["चीन", "जापान", "कोरिया", "भारत"],
        "answer_en": "Japan",
        "answer_hi": "जापान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which event started the First World War?",
        "question_hi": "कौन सा घटना पहले विश्व युद्ध की शुरुआत बनी?",
        "options_en": ["Assassination of Archduke Franz Ferdinand", "Invasion of Poland", "Bombing of Pearl Harbor", "Treaty of Versailles"],
        "options_hi": ["आर्चड्युक फ्रांज फर्डिनेंड की हत्या", "पोलैंड पर आक्रमण", "पर्ल हार्बर पर बमबारी", "वर्साय की संधि"],
        "answer_en": "Assassination of Archduke Franz Ferdinand",
        "answer_hi": "आर्चड्युक फ्रांज फर्डिनेंड की हत्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What was the capital of the Gupta Empire?",
        "question_hi": "गुप्त साम्राज्य की राजधानी क्या थी?",
        "options_en": ["Pataliputra", "Mathura", "Kashi", "Kanyakubja"],
        "options_hi": ["पाटलिपुत्र", "मथुरा", "काशी", "कन्यकुब्ज"],
        "answer_en": "Pataliputra",
        "answer_hi": "पाटलिपुत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Who is considered the father of modern sociology?",
        "question_hi": "आधुनिक समाजशास्त्र के पिता के रूप में किसे जाना जाता है?",
        "options_en": ["Max Weber", "Emile Durkheim", "Karl Marx", "August Comte"],
        "options_hi": ["मैक्स वेबर", "एमिल द्यूरकहाइम", "कार्ल मार्क्स", "ऑगस्ट कोम्टे"],
        "answer_en": "August Comte",
        "answer_hi": "ऑगस्ट कोम्टे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which one of the following was the first battle of Panipat?",
        "question_hi": "निम्नलिखित में से पहला पानीपत युद्ध कौन सा था?",
        "options_en": ["1526", "1556", "1761", "1803"],
        "options_hi": ["1526", "1556", "1761", "1803"],
        "answer_en": "1526",
        "answer_hi": "1526",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Who was the first emperor of the Mughal Empire?",
        "question_hi": "मुगल साम्राज्य के पहले सम्राट कौन थे?",
        "options_en": ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"],
        "options_hi": ["अकबर", "बाबर", "शाहजहाँ", "औरंगजेब"],
        "answer_en": "Babur",
        "answer_hi": "बाबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the total area of India?",
        "question_hi": "भारत का कुल क्षेत्रफल कितना है?",
        "options_en": ["3.28 million square kilometers", "3.88 million square kilometers", "2.38 million square kilometers", "1.88 million square kilometers"],
        "options_hi": ["3.28 मिलियन वर्ग किलोमीटर", "3.88 मिलियन वर्ग किलोमीटर", "2.38 मिलियन वर्ग किलोमीटर", "1.88 मिलियन वर्ग किलोमीटर"],
        "answer_en": "3.28 million square kilometers",
        "answer_hi": "3.28 मिलियन वर्ग किलोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which of the following is the largest river in India?",
        "question_hi": "निम्नलिखित में से कौन सी नदी भारत की सबसे बड़ी है?",
        "options_en": ["Ganga", "Brahmaputra", "Yamuna", "Godavari"],
        "options_hi": ["गंगा", "ब्रह्मपुत्र", "यमुन", "गोदावरी"],
        "answer_en": "Ganga",
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which battle marked the end of the Mughal Empire?",
        "question_hi": "कौन सी लड़ाई ने मुग़ल साम्राज्य के अंत को चिह्नित किया?",
        "options_en": ["Battle of Panipat", "Battle of Plassey", "Battle of Buxar", "Battle of Haldighati"],
        "options_hi": ["पानीपत की लड़ाई", "प्लासी की लड़ाई", "बक्सर की लड़ाई", "हल्दीघाटी की लड़ाई"],
        "answer_en": "Battle of Panipat",
        "answer_hi": "पानीपत की लड़ाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which of the following is not a feature of Indian democracy?",
        "question_hi": "निम्नलिखित में से कौन सा भारतीय लोकतंत्र की विशेषता नहीं है?",
        "options_en": ["Universal adult franchise", "Multi-party system", "One-party rule", "Free and fair elections"],
        "options_hi": ["सार्वभौमिक मतदाता फ्रैंचाइज़", "बहुपार्टी प्रणाली", "एक पार्टी शासन", "मुफ्त और निष्पक्ष चुनाव"],
        "answer_en": "One-party rule",
        "answer_hi": "एक पार्टी शासन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Who was the first woman to become the Prime Minister of India?",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन बनीं?",
        "options_en": ["Sarojini Naidu", "Indira Gandhi", "Sonia Gandhi", "Vijay Lakshmi Pandit"],
        "options_hi": ["सारोजिनी नायडू", "इंदिरा गांधी", "सोनिया गांधी", "विजय लक्ष्मी पंडित"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What was the main reason for the revolt of 1857?",
        "question_hi": "1857 के विद्रोह का मुख्य कारण क्या था?",
        "options_en": ["Political causes", "Religious causes", "Economic causes", "All of the above"],
        "options_hi": ["राजनीतिक कारण", "धार्मिक कारण", "आर्थिक कारण", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which of the following is the largest democracy in the world?",
        "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे बड़ा लोकतंत्र है?",
        "options_en": ["USA", "China", "India", "Russia"],
        "options_hi": ["यूएसए", "चीन", "भारत", "रूस"],
        "answer_en": "India",
        "answer_hi": "भारत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Who was the leader of the Indian National Congress during the Quit India Movement?",
        "question_hi": "भारत छोड़ो आंदोलन के दौरान भारतीय राष्ट्रीय कांग्रेस के नेता कौन थे?",
        "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Lal Bahadur Shastri"],
        "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What was the main objective of the Non-Cooperation Movement?",
        "question_hi": "असहमति आंदोलन का मुख्य उद्देश्य क्या था?",
        "options_en": ["To attain complete independence", "To get Swaraj", "To resist British rule", "To boycott British goods"],
        "options_hi": ["पूर्ण स्वतंत्रता प्राप्त करना", "स्वराज प्राप्त करना", "ब्रिटिश शासन का विरोध करना", "ब्रिटिश वस्त्रों का बहिष्कार करना"],
        "answer_en": "To resist British rule",
        "answer_hi": "ब्रिटिश शासन का विरोध करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Who was the founder of the Indian National Congress?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस के संस्थापक कौन थे?",
        "options_en": ["Lal Lalaj", "A.O. Hume", "Subhas Chandra Bose", "Jawaharlal Nehru"],
        "options_hi": ["लाल ललज", "ए.ओ. ह्यूम", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू"],
        "answer_en": "A.O. Hume",
        "answer_hi": "ए.ओ. ह्यूम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which of the following is the national flower of India?",
        "question_hi": "निम्नलिखित में से कौन सा भारत का राष्ट्रीय फूल है?",
        "options_en": ["Rose", "Lotus", "Tulip", "Marigold"],
        "options_hi": ["गुलाब", "कमल", "ट्यूलिप", "गेंदे का फूल"],
        "answer_en": "Lotus",
        "answer_hi": "कमल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Who is the author of the book 'The Discovery of India'?",
        "question_hi": "'भारत की खोज' पुस्तक के लेखक कौन हैं?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "R. K. Narayan", "Sardar Patel"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "र. के. नारायण", "सरदार पटेल"],
        "answer_en": "Jawaharlal Nehru",
        "answer_hi": "जवाहरलाल नेहरू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Who was the first woman to win a Nobel Prize?",
        "question_hi": "नॉबेल पुरस्कार जीतने वाली पहली महिला कौन थीं?",
        "options_en": ["Marie Curie", "Mother Teresa", "Indira Gandhi", "Sarojini Naidu"],
        "options_hi": ["मैरी क्यूरी", "मदर टेरेसा", "इंदिरा गांधी", "सारोजिनी नायडू"],
        "answer_en": "Marie Curie",
        "answer_hi": "मैरी क्यूरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "In which year did the Indian National Congress become a political party?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस राजनीतिक पार्टी कब बनी थी?",
        "options_en": ["1885", "1900", "1947", "1950"],
        "options_hi": ["1885", "1900", "1947", "1950"],
        "answer_en": "1885",
        "answer_hi": "1885",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the longest river in India?",
        "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Yamuna", "Ganga", "Godavari", "Indus"],
        "options_hi": ["यमुन", "गंगा", "गोदावरी", "सिंधु"],
        "answer_en": "Ganga",
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The Indian National Congress was founded in which year?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस की स्थापना किस वर्ष हुई थी?",
        "options_en": ["1885", "1895", "1905", "1915"],
        "options_hi": ["1885", "1895", "1905", "1915"],
        "answer_en": "1885",
        "answer_hi": "1885",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Who was the leader of the revolt of 1857?",
        "question_hi": "1857 के विद्रोह के नेता कौन थे?",
        "options_en": ["Rani Lakshmi Bai", "Bahadur Shah Zafar", "Mangal Pandey", "All of the above"],
        "options_hi": ["रानी लक्ष्मी बाई", "बहादुर शाह जफर", "मंगल पांडे", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which country was the main rival of India in the 1962 war?",
        "question_hi": "1962 के युद्ध में भारत का मुख्य प्रतिद्वंद्वी कौन सा देश था?",
        "options_en": ["Pakistan", "China", "Sri Lanka", "Nepal"],
        "options_hi": ["पाकिस्तान", "चीन", "श्रीलंका", "नेपाल"],
        "answer_en": "China",
        "answer_hi": "चीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Who is called the 'Iron Man of India'?",
        "question_hi": "किसे 'भारत के लौह पुरुष' के रूप में जाना जाता है?",
        "options_en": ["Mahatma Gandhi", "Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Subhas Chandra Bose"],
        "options_hi": ["महात्मा गांधी", "सरदार वल्लभभाई पटेल", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस"],
        "answer_en": "Sardar Vallabhbhai Patel",
        "answer_hi": "सरदार वल्लभभाई पटेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the capital of India?",
        "question_hi": "भारत की राजधानी क्या है?",
        "options_en": ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        "options_hi": ["मुंबई", "नई दिल्ली", "कोलकाता", "चेन्नई"],
        "answer_en": "New Delhi",
        "answer_hi": "नई दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which Indian state is known as the 'Land of the Rising Sun'?",
        "question_hi": "किस भारतीय राज्य को 'उदयमान सूरज की भूमि' के रूप में जाना जाता है?",
        "options_en": ["Arunachal Pradesh", "Assam", "Sikkim", "Nagaland"],
        "options_hi": ["अरुणाचल प्रदेश", "असम", "सिक्किम", "नगालैंड"],
        "answer_en": "Arunachal Pradesh",
        "answer_hi": "अरुणाचल प्रदेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which of the following is a famous Buddhist site in India?",
        "question_hi": "निम्नलिखित में से कौन सा भारत में प्रसिद्ध बौद्ध स्थल है?",
        "options_en": ["Sanchi", "Taj Mahal", "Qutub Minar", "Red Fort"],
        "options_hi": ["सांची", "ताज महल", "कुतुब मीनार", "लाल किला"],
        "answer_en": "Sanchi",
        "answer_hi": "सांची",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The Civil Disobedience Movement was launched in which year?",
        "question_hi": "नागरिक अवज्ञा आंदोलन किस वर्ष में शुरू किया गया था?",
        "options_en": ["1920", "1930", "1942", "1915"],
        "options_hi": ["1920", "1930", "1942", "1915"],
        "answer_en": "1930",
        "answer_hi": "1930",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which country shares the longest border with India?",
        "question_hi": "कौन सा देश भारत के साथ सबसे लंबी सीमा साझा करता है?",
        "options_en": ["Pakistan", "China", "Nepal", "Bangladesh"],
        "options_hi": ["पाकिस्तान", "चीन", "नेपाल", "बांगलादेश"],
        "answer_en": "Bangladesh",
        "answer_hi": "बांगलादेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which of the following is the first female ruler of India?",
        "question_hi": "निम्नलिखित में से कौन भारत की पहली महिला शासक थी?",
        "options_en": ["Indira Gandhi", "Rani Durgavati", "Rani Lakshmi Bai", "Queen of Jhansi"],
        "options_hi": ["इंदिरा गांधी", "रानी दुर्गावती", "रानी लक्ष्मी बाई", "झाँसी की रानी"],
        "answer_en": "Rani Durgavati",
        "answer_hi": "रानी दुर्गावती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Who is the author of the Indian Constitution?",
        "question_hi": "भारतीय संविधान के लेखक कौन हैं?",
        "options_en": ["Mahatma Gandhi", "Dr. B. R. Ambedkar", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel"],
        "options_hi": ["महात्मा गांधी", "डॉ. बी. आर. अंबेडकर", "जवाहरलाल नेहरू", "सरदार वल्लभभाई पटेल"],
        "answer_en": "Dr. B. R. Ambedkar",
        "answer_hi": "डॉ. बी. आर. अंबेडकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "In which year did India gain independence?",
        "question_hi": "भारत को स्वतंत्रता कब मिली थी?",
        "options_en": ["1942", "1947", "1950", "1962"],
        "options_hi": ["1942", "1947", "1950", "1962"],
        "answer_en": "1947",
        "answer_hi": "1947",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which of the following is the currency of India?",
        "question_hi": "निम्नलिखित में से कौन सी भारत की मुद्रा है?",
        "options_en": ["Rupee", "Dollar", "Pound", "Euro"],
        "options_hi": ["रुपया", "डॉलर", "पाउंड", "यूरो"],
        "answer_en": "Rupee",
        "answer_hi": "रुपया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which river is known as the 'Sorrow of Bihar'?",
        "question_hi": "किस नदी को 'बिहार का शोक' कहा जाता है?",
        "options_en": ["Ganga", "Yamuna", "Brahmaputra", "Kosi"],
        "options_hi": ["गंगा", "यमुन", "ब्रह्मपुत्र", "कोसी"],
        "answer_en": "Kosi",
        "answer_hi": "कोसी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which of the following is a famous historical site in India?",
        "question_hi": "निम्नलिखित में से कौन सा भारत में प्रसिद्ध ऐतिहासिक स्थल है?",
        "options_en": ["Qutub Minar", "Taj Mahal", "Red Fort", "All of the above"],
        "options_hi": ["कुतुब मीनार", "ताज महल", "लाल किला", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Who was the first President of independent India?",
        "question_hi": "स्वतंत्र भारत के पहले राष्ट्रपति कौन थे?",
        "options_en": ["Dr. Rajendra Prasad", "Dr. Sarvepalli Radhakrishnan", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel"],
        "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. सर्वपल्ली राधाकृष्णन", "जवाहरलाल नेहरू", "सरदार वल्लभभाई पटेल"],
        "answer_en": "Dr. Rajendra Prasad",
        "answer_hi": "डॉ. राजेंद्र प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "The Indian Army was established in which year?",
        "question_hi": "भारतीय सेना की स्थापना किस वर्ष हुई थी?",
        "options_en": ["1947", "1950", "1942", "1857"],
        "options_hi": ["1947", "1950", "1942", "1857"],
        "answer_en": "1947",
        "answer_hi": "1947",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Who was the first Governor-General of independent India?",
        "question_hi": "स्वतंत्र भारत के पहले गवर्नर जनरल कौन थे?",
        "options_en": ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Dr. Rajendra Prasad"],
        "options_hi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू", "डॉ. राजेंद्र प्रसाद"],
        "answer_en": "Lord Mountbatten",
        "answer_hi": "लॉर्ड माउंटबेटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "In which year did the Battle of Plassey take place?",
        "question_hi": "प्लासी की लड़ाई किस वर्ष हुई थी?",
        "options_en": ["1757", "1799", "1857", "1905"],
        "options_hi": ["1757", "1799", "1857", "1905"],
        "answer_en": "1757",
        "answer_hi": "1757",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which of the following is not a major crop of India?",
        "question_hi": "निम्नलिखित में से कौन सा भारत की प्रमुख फसल नहीं है?",
        "options_en": ["Rice", "Wheat", "Maize", "Olive"],
        "options_hi": ["चावल", "गेंहू", "मक्का", "जैतून"],
        "answer_en": "Olive",
        "answer_hi": "जैतून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which of the following is the largest desert in India?",
        "question_hi": "निम्नलिखित में से कौन सा भारत का सबसे बड़ा मरुस्थल है?",
        "options_en": ["Rann of Kutch", "Thar Desert", "Ladakh Desert", "Cholistan Desert"],
        "options_hi": ["कच्छ का रण", "थार मरुस्थल", "लद्दाख मरुस्थल", "चोलिस्तान मरुस्थल"],
        "answer_en": "Thar Desert",
        "answer_hi": "थार मरुस्थल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Who was the first woman ruler of India?",
        "question_hi": "भारत की पहली महिला शासक कौन थीं?",
        "options_en": ["Indira Gandhi", "Rani Durgavati", "Rani Lakshmi Bai", "Queen of Jhansi"],
        "options_hi": ["इंदिरा गांधी", "रानी दुर्गावती", "रानी लक्ष्मी बाई", "झाँसी की रानी"],
        "answer_en": "Rani Durgavati",
        "answer_hi": "रानी दुर्गावती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The Jallianwala Bagh massacre took place in which year?",
        "question_hi": "जलियांवाला बाग नरसंहार किस वर्ष हुआ था?",
        "options_en": ["1915", "1919", "1925", "1930"],
        "options_hi": ["1915", "1919", "1925", "1930"],
        "answer_en": "1919",
        "answer_hi": "1919",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Who was the first woman Prime Minister of India?",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        "options_en": ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil", "Sarojini Naidu"],
        "options_hi": ["इंदिरा गांधी", "सोनिया गांधी", "प्रतीक्षा पटिल", "सरोजिनी नायडू"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which city is known as the 'Silicon Valley of India'?",
        "question_hi": "किस शहर को 'भारत की सिलिकॉन वैली' कहा जाता है?",
        "options_en": ["Bangalore", "Mumbai", "Hyderabad", "Chennai"],
        "options_hi": ["बैंगलोर", "मुंबई", "हैदराबाद", "चेन्नई"],
        "answer_en": "Bangalore",
        "answer_hi": "बैंगलोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "The first battle of Panipat was fought in which year?",
        "question_hi": "पहली पानीपत की लड़ाई किस वर्ष लड़ी गई थी?",
        "options_en": ["1526", "1556", "1576", "1600"],
        "options_hi": ["1526", "1556", "1576", "1600"],
        "answer_en": "1526",
        "answer_hi": "1526",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which Indian city is known as the 'City of Joy'?",
        "question_hi": "किस भारतीय शहर को 'आनंद का शहर' कहा जाता है?",
        "options_en": ["Kolkata", "Mumbai", "Delhi", "Chennai"],
        "options_hi": ["कोलकाता", "मुंबई", "दिल्ली", "चेन्नई"],
        "answer_en": "Kolkata",
        "answer_hi": "कोलकाता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which Indian state is famous for its tea gardens?",
        "question_hi": "कौन सा भारतीय राज्य अपनी चाय के बगानों के लिए प्रसिद्ध है?",
        "options_en": ["Assam", "West Bengal", "Kerala", "Gujarat"],
        "options_hi": ["असम", "पश्चिम बंगाल", "केरल", "गुजरात"],
        "answer_en": "Assam",
        "answer_hi": "असम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Who was the founder of the Maurya Empire?",
        "question_hi": "मौर्य साम्राज्य के संस्थापक कौन थे?",
        "options_en": ["Ashoka", "Chandragupta Maurya", "Bindusara", "Maurya Gupta"],
        "options_hi": ["अशोक", "चंद्रगुप्त मौर्य", "बिंदुसार", "मौर्य गुप्त"],
        "answer_en": "Chandragupta Maurya",
        "answer_hi": "चंद्रगुप्त मौर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Who was the last Governor-General of independent India?",
        "question_hi": "स्वतंत्र भारत के अंतिम गवर्नर जनरल कौन थे?",
        "options_en": ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "V. V. Giri"],
        "options_hi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू", "वी. वी. गिरी"],
        "answer_en": "C. Rajagopalachari",
        "answer_hi": "सी. राजगोपालाचारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The Quit India Movement was launched in which year?",
        "question_hi": "भारत छोड़ो आंदोलन किस वर्ष शुरू किया गया था?",
        "options_en": ["1942", "1947", "1930", "1929"],
        "options_hi": ["1942", "1947", "1930", "1929"],
        "answer_en": "1942",
        "answer_hi": "1942",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Who was the first woman to win a Nobel Prize?",
        "question_hi": "नॉबेल पुरस्कार जीतने वाली पहली महिला कौन थीं?",
        "options_en": ["Marie Curie", "Mother Teresa", "Indira Gandhi", "Sonia Gandhi"],
        "options_hi": ["मैरी क्यूरी", "मदर टेरेसा", "इंदिरा गांधी", "सोनिया गांधी"],
        "answer_en": "Marie Curie",
        "answer_hi": "मैरी क्यूरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "The headquarters of the United Nations is located in which city?",
        "question_hi": "संयुक्त राष्ट्र का मुख्यालय किस शहर में स्थित है?",
        "options_en": ["New York", "Paris", "Geneva", "London"],
        "options_hi": ["न्यू यॉर्क", "पेरिस", "जेनेवा", "लंदन"],
        "answer_en": "New York",
        "answer_hi": "न्यू यॉर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which of the following is the largest state in India by area?",
        "question_hi": "निम्नलिखित में से कौन सा भारतीय राज्य क्षेत्रफल के हिसाब से सबसे बड़ा है?",
        "options_en": ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Maharashtra"],
        "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "महाराष्ट्र"],
        "answer_en": "Rajasthan",
        "answer_hi": "राजस्थान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which river is known as the 'Ganga of the South'?",
        "question_hi": "किस नदी को 'दक्षिण का गंगा' कहा जाता है?",
        "options_en": ["Godavari", "Kaveri", "Krishna", "Narmada"],
        "options_hi": ["गोदावरी", "कावेरी", "कृष्णा", "नर्मदा"],
        "answer_en": "Kaveri",
        "answer_hi": "कावेरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which of the following is the smallest state in India by area?",
        "question_hi": "निम्नलिखित में से कौन सा भारतीय राज्य क्षेत्रफल के हिसाब से सबसे छोटा है?",
        "options_en": ["Goa", "Sikkim", "Tripura", "Kerala"],
        "options_hi": ["गोवा", "सिक्किम", "त्रिपुरा", "केरल"],
        "answer_en": "Goa",
        "answer_hi": "गोवा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Who is known as the 'Father of the Nation' in India?",
        "question_hi": "भारत में 'राष्ट्रपिता' के रूप में किसे जाना जाता है?",
        "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel", "B. R. Ambedkar"],
        "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "सरदार वल्लभभाई पटेल", "बी. आर. अंबेडकर"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The Battle of Plassey was fought in which year?",
        "question_hi": "प्लासी की लड़ाई किस वर्ष लड़ी गई थी?",
        "options_en": ["1757", "1761", "1780", "1800"],
        "options_hi": ["1757", "1761", "1780", "1800"],
        "answer_en": "1757",
        "answer_hi": "1757",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The first President of India was:",
        "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
        "options_en": ["Dr. Rajendra Prasad", "Dr. Sarvepalli Radhakrishnan", "Dr. Zakir Husain", "V. V. Giri"],
        "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. सर्वपल्ली राधाकृष्णन", "डॉ. जाकिर हुसैन", "वी. वी. गिरी"],
        "answer_en": "Dr. Rajendra Prasad",
        "answer_hi": "डॉ. राजेंद्र प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "The Indian National Congress was founded in which year?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस की स्थापना किस वर्ष हुई थी?",
        "options_en": ["1885", "1900", "1920", "1947"],
        "options_hi": ["1885", "1900", "1920", "1947"],
        "answer_en": "1885",
        "answer_hi": "1885",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Who among the following is known as the 'Iron Man of India'?",
        "question_hi": "निम्नलिखित में से किसे 'भारत का लौह पुरुष' कहा जाता है?",
        "options_en": ["Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Vallabhbhai Patel", "Jawaharlal Nehru"],
        "options_hi": ["महात्मा गांधी", "सुभाष चंद्र बोस", "सरदार वल्लभभाई पटेल", "जवाहरलाल नेहरू"],
        "answer_en": "Sardar Vallabhbhai Patel",
        "answer_hi": "सरदार वल्लभभाई पटेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The longest river in India is:",
        "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
        "options_hi": ["गंगा", "यमुना", "गोदावरी", "ब्रह्मपुत्र"],
        "answer_en": "Ganga",
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which freedom struggle leader is known as 'Netaji'?",
        "question_hi": "किस स्वतंत्रता संग्राम नेता को 'नेताजी' के नाम से जाना जाता है?",
        "options_en": ["Mahatma Gandhi", "Subhas Chandra Bose", "Jawaharlal Nehru", "Bhagat Singh"],
        "options_hi": ["महात्मा गांधी", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू", "भगत सिंह"],
        "answer_en": "Subhas Chandra Bose",
        "answer_hi": "सुभाष चंद्र बोस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Who wrote the national song 'Vande Mataram'?",
        "question_hi": "राष्ट्रीय गीत 'वन्दे मातरम्' की रचना किसने की थी?",
        "options_en": ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Mahatma Gandhi", "Subhas Chandra Bose"],
        "options_hi": ["रवींद्रनाथ ठाकुर", "बंकिम चंद्र चट्टोपाध्याय", "महात्मा गांधी", "सुभाष चंद्र बोस"],
        "answer_en": "Bankim Chandra Chattopadhyay",
        "answer_hi": "बंकिम चंद्र चट्टोपाध्याय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The Indian Constitution came into force on which date?",
        "question_hi": "भारतीय संविधान किस तिथि से लागू हुआ था?",
        "options_en": ["26th January 1950", "15th August 1947", "26th November 1949", "1st January 1950"],
        "options_hi": ["26 जनवरी 1950", "15 अगस्त 1947", "26 नवंबर 1949", "1 जनवरी 1950"],
        "answer_en": "26th January 1950",
        "answer_hi": "26 जनवरी 1950",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The first woman Governor of an Indian state was:",
        "question_hi": "भारत के एक राज्य की पहली महिला राज्यपाल कौन थीं?",
        "options_en": ["Sarojini Naidu", "Pratibha Patil", "Indira Gandhi", "Vijaya Lakshmi Pandit"],
        "options_hi": ["सरोजिनी नायडू", "प्रतीक्षा पटिल", "इंदिरा गांधी", "विजया लक्ष्मी पंडित"],
        "answer_en": "Sarojini Naidu",
        "answer_hi": "सरोजिनी नायडू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which one of the following is a characteristic feature of the Harappan Civilization?",
        "question_hi": "निम्नलिखित में से कौन-सा हड़प्पा सभ्यता की एक विशेषता है?",
        "options_en": ["Use of Iron", "Systematic town planning", "Use of coins", "Extensive literature"],
        "options_hi": ["लोहा का उपयोग", "व्यवस्थित नगर योजना", "सिक्कों का उपयोग", "विस्तृत साहित्य"],
        "answer_en": "Systematic town planning",
        "answer_hi": "व्यवस्थित नगर योजना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Who is known as the 'Father of the Indian Nation'?",
        "question_hi": "भारत के 'राष्ट्रपिता' के रूप में किसे जाना जाता है?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "B. R. Ambedkar"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "बी. आर. अंबेडकर"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The first railway line in India was laid between which two cities?",
        "question_hi": "भारत में पहली रेल लाइन किस दो शहरों के बीच बिछाई गई थी?",
        "options_en": ["Delhi and Kolkata", "Mumbai and Thane", "Chennai and Bangalore", "Kolkata and Chennai"],
        "options_hi": ["दिल्ली और कोलकाता", "मुंबई और ठाणे", "चेन्नई और बेंगलुरू", "कोलकाता और चेन्नई"],
        "answer_en": "Mumbai and Thane",
        "answer_hi": "मुंबई और ठाणे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Who was the first person to receive the Bharat Ratna award?",
        "question_hi": "भारत रत्न पुरस्कार प्राप्त करने वाला पहला व्यक्ति कौन था?",
        "options_en": ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "C. Rajagopalachari", "Bhupen Hazarika"],
        "options_hi": ["डॉ. राजेंद्र प्रसाद", "जवाहरलाल नेहरू", "सी. राजगोपालाचारी", "भूपेन हजारिका"],
        "answer_en": "Dr. Rajendra Prasad",
        "answer_hi": "डॉ. राजेंद्र प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The leader of the first revolt of 1857 in India was:",
        "question_hi": "भारत में 1857 के पहले विद्रोह के नेता कौन थे?",
        "options_en": ["Rani Lakshmibai", "Mangal Pandey", "Bahadur Shah Zafar", "Nana Saheb"],
        "options_hi": ["रानी लक्ष्मीबाई", "मंगल पांडे", "बहादुर शाह जफर", "नाना साहब"],
        "answer_en": "Mangal Pandey",
        "answer_hi": "मंगल पांडे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The Salt March of Mahatma Gandhi was started in which year?",
        "question_hi": "महात्मा गांधी का नमक सत्याग्रह किस वर्ष शुरू हुआ था?",
        "options_en": ["1930", "1929", "1940", "1925"],
        "options_hi": ["1930", "1929", "1940", "1925"],
        "answer_en": "1930",
        "answer_hi": "1930",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which of the following is the largest democracy in the world?",
        "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे बड़ा लोकतंत्र है?",
        "options_en": ["India", "USA", "China", "Brazil"],
        "options_hi": ["भारत", "अमेरिका", "चीन", "ब्राजील"],
        "answer_en": "India",
        "answer_hi": "भारत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Who among the following was the first Emperor of the Maurya Dynasty?",
        "question_hi": "निम्नलिखित में से कौन मौर्य वंश का पहला सम्राट था?",
        "options_en": ["Ashoka", "Bindusara", "Chandragupta Maurya", "Maurya Gupta"],
        "options_hi": ["अशोक", "बिंदुसार", "चंद्रगुप्त मौर्य", "मौर्य गुप्त"],
        "answer_en": "Chandragupta Maurya",
        "answer_hi": "चंद्रगुप्त मौर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The Battle of Haldighati was fought between which two rulers?",
        "question_hi": "हल्दीघाटी की लड़ाई किस दो शासकों के बीच लड़ी गई थी?",
        "options_en": ["Akbar and Rana Pratap", "Shivaji and Aurangzeb", "Sher Shah Suri and Humayun", "Raja Man Singh and Mirza Hakim"],
        "options_hi": ["अकबर और राणा प्रताप", "शिवाजी और औरंगजेब", "शेर शाह सूरी और हुमायूं", "राजा मानसिंह और मिर्जा हाकिम"],
        "answer_en": "Akbar and Rana Pratap",
        "answer_hi": "अकबर और राणा प्रताप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Who was the first female Prime Minister of India?",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        "options_en": ["Indira Gandhi", "Sonia Gandhi", "Sarojini Naidu", "Pratibha Patil"],
        "options_hi": ["इंदिरा गांधी", "सोनिया गांधी", "सरोजिनी नायडू", "प्रतीक्षा पटिल"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The Indian Independence Act was passed in which year?",
        "question_hi": "भारतीय स्वतंत्रता अधिनियम किस वर्ष पारित हुआ था?",
        "options_en": ["1947", "1950", "1942", "1945"],
        "options_hi": ["1947", "1950", "1942", "1945"],
        "answer_en": "1947",
        "answer_hi": "1947",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Who is considered the founder of the Maurya Empire?",
        "question_hi": "किसे मौर्य साम्राज्य का संस्थापक माना जाता है?",
        "options_en": ["Ashoka", "Chandragupta Maurya", "Bindusara", "Maurya Gupta"],
        "options_hi": ["अशोक", "चंद्रगुप्त मौर्य", "बिंदुसार", "मौर्य गुप्त"],
        "answer_en": "Chandragupta Maurya",
        "answer_hi": "चंद्रगुप्त मौर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "In which year did India gain independence?",
        "question_hi": "भारत ने स्वतंत्रता कब प्राप्त की थी?",
        "options_en": ["1947", "1950", "1952", "1942"],
        "options_hi": ["1947", "1950", "1952", "1942"],
        "answer_en": "1947",
        "answer_hi": "1947",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Who was the founder of the Gupta Empire?",
        "question_hi": "गुप्त साम्राज्य के संस्थापक कौन थे?",
        "options_en": ["Chandragupta I", "Samudragupta", "Ashoka", "Chandragupta Maurya"],
        "options_hi": ["चंद्रगुप्त I", "समुद्रगुप्त", "अशोक", "चंद्रगुप्त मौर्य"],
        "answer_en": "Chandragupta I",
        "answer_hi": "चंद्रगुप्त I",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Who wrote the book 'Discovery of India'?",
        "question_hi": "'भारत का खोज' पुस्तक की रचना किसने की थी?",
        "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Rabindranath Tagore", "Sardar Vallabhbhai Patel"],
        "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "रवींद्रनाथ ठाकुर", "सरदार वल्लभभाई पटेल"],
        "answer_en": "Jawaharlal Nehru",
        "answer_hi": "जवाहरलाल नेहरू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The Quit India Movement was launched in which year?",
        "question_hi": "क्विट इंडिया आंदोलन किस वर्ष शुरू हुआ था?",
        "options_en": ["1942", "1947", "1930", "1919"],
        "options_hi": ["1942", "1947", "1930", "1919"],
        "answer_en": "1942",
        "answer_hi": "1942",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Who was the last Governor-General of independent India?",
        "question_hi": "स्वतंत्र भारत के अंतिम गवर्नर-जनरल कौन थे?",
        "options_en": ["C. Rajagopalachari", "Lord Mountbatten", "Jawaharlal Nehru", "V. V. Giri"],
        "options_hi": ["सी. राजगोपालाचारी", "लॉर्ड माउंटबेटन", "जवाहरलाल नेहरू", "वी. वी. गिरी"],
        "answer_en": "C. Rajagopalachari",
        "answer_hi": "सी. राजगोपालाचारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The Dandi March was part of which movement?",
        "question_hi": "दांडी मार्च किस आंदोलन का हिस्सा था?",
        "options_en": ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Champaran Movement"],
        "options_hi": ["असहयोग आंदोलन", "नागरिक अवज्ञा आंदोलन", "क्विट इंडिया आंदोलन", "चंपारण आंदोलन"],
        "answer_en": "Civil Disobedience Movement",
        "answer_hi": "नागरिक अवज्ञा आंदोलन",
        "attempted": false,
        "selected": ""
    },



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