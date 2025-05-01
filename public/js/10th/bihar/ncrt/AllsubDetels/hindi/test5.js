
const questions = [
    {
      "num": 1,
      "question_en": "Who is the author of 'Madhurima'?",
      "question_hi": "'मधुरिमा' के लेखक कौन हैं?",
      "options_en": ["Shivpujan Sahay", "Harivansh Rai Bachchan", "Premchand", "Nirala"],
      "options_hi": ["शिवपूजन सहाय", "हरिवंश राय बच्चन", "प्रेमचंद", "निराला"],
      "answer_en": "Shivpujan Sahay",
      "answer_hi": "शिवपूजन सहाय",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "Who wrote 'Bhartiya Sanskriti'?",
      "question_hi": "'भारतीय संस्कृति' के लेखक कौन हैं?",
      "options_en": ["Harivansh Rai Bachchan", "Shivpujan Sahay", "Premchand", "Vishnu Prabhakar"],
      "options_hi": ["हरिवंश राय बच्चन", "शिवपूजन सहाय", "प्रेमचंद", "विष्णु प्रभाकर"],
      "answer_en": "Vishnu Prabhakar",
      "answer_hi": "विष्णु प्रभाकर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "Who wrote 'Dharma Granth'?",
      "question_hi": "'धर्म ग्रंथ' के लेखक कौन हैं?",
      "options_en": ["Premchand", "Harivansh Rai Bachchan", "Shivpujan Sahay", "Nirala"],
      "options_hi": ["प्रेमचंद", "हरिवंश राय बच्चन", "शिवपूजन सहाय", "निराला"],
      "answer_en": "Premchand",
      "answer_hi": "प्रेमचंद",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "Who wrote 'Ramayana' in Hindi?",
      "question_hi": "रामायण हिंदी में किसने लिखा?",
      "options_en": ["Tulsidas", "Harivansh Rai Bachchan", "Shivpujan Sahay", "Premchand"],
      "options_hi": ["तुलसीदास", "हरिवंश राय बच्चन", "शिवपूजन सहाय", "प्रेमचंद"],
      "answer_en": "Tulsidas",
      "answer_hi": "तुलसीदास",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "Who is the author of 'Hindi Sahitya Ki Lokpriya Kahaniyan'?",
      "question_hi": "'हिंदी साहित्य की लोकप्रिय कहानियाँ' के लेखक कौन हैं?",
      "options_en": ["Premchand", "Nirala", "Shivpujan Sahay", "Harivansh Rai Bachchan"],
      "options_hi": ["प्रेमचंद", "निराला", "शिवपूजन सहाय", "हरिवंश राय बच्चन"],
      "answer_en": "Premchand",
      "answer_hi": "प्रेमचंद",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "Who wrote 'Panchatantra'?",
      "question_hi": "'पंचतंत्र' के लेखक कौन हैं?",
      "options_en": ["Vishnu Sharma", "Shivpujan Sahay", "Premchand", "Harivansh Rai Bachchan"],
      "options_hi": ["विष्णु शर्मा", "शिवपूजन सहाय", "प्रेमचंद", "हरिवंश राय बच्चन"],
      "answer_en": "Vishnu Sharma",
      "answer_hi": "विष्णु शर्मा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "Who wrote 'Kavita Ki Khoj'?",
      "question_hi": "'कविता की खोज' के लेखक कौन हैं?",
      "options_en": ["Harivansh Rai Bachchan", "Shivpujan Sahay", "Premchand", "Nirala"],
      "options_hi": ["हरिवंश राय बच्चन", "शिवपूजन सहाय", "प्रेमचंद", "निराला"],
      "answer_en": "Harivansh Rai Bachchan",
      "answer_hi": "हरिवंश राय बच्चन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "Who wrote 'Chhaya'?",
      "question_hi": "'छाया' के लेखक कौन हैं?",
      "options_en": ["Shivpujan Sahay", "Harivansh Rai Bachchan", "Premchand", "Nirala"],
      "options_hi": ["शिवपूजन सहाय", "हरिवंश राय बच्चन", "प्रेमचंद", "निराला"],
      "answer_en": "Shivpujan Sahay",
      "answer_hi": "शिवपूजन सहाय",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "Who is the author of 'Meri Kahaniyan'?",
      "question_hi": "'मेरी कहानियाँ' के लेखक कौन हैं?",
      "options_en": ["Shivpujan Sahay", "Premchand", "Harivansh Rai Bachchan", "Nirala"],
      "options_hi": ["शिवपूजन सहाय", "प्रेमचंद", "हरिवंश राय बच्चन", "निराला"],
      "answer_en": "Premchand",
      "answer_hi": "प्रेमचंद",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "Who wrote 'Chandrayaan'?",
      "question_hi": "'चंद्रयान' के लेखक कौन हैं?",
      "options_en": ["Vishnu Prabhakar", "Shivpujan Sahay", "Premchand", "Harivansh Rai Bachchan"],
      "options_hi": ["विष्णु प्रभाकर", "शिवपूजन सहाय", "प्रेमचंद", "हरिवंश राय बच्चन"],
      "answer_en": "Vishnu Prabhakar",
      "answer_hi": "विष्णु प्रभाकर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "Who wrote 'Madhurima'?",
      "question_hi": "'मधुरिमा' के लेखक कौन हैं?",
      "options_en": ["Shivpujan Sahay", "Harivansh Rai Bachchan", "Premchand", "Nirala"],
      "options_hi": ["शिवपूजन सहाय", "हरिवंश राय बच्चन", "प्रेमचंद", "निराला"],
      "answer_en": "Shivpujan Sahay",
      "answer_hi": "शिवपूजन सहाय",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "Who wrote 'Bhartiya Sanskriti'?",
      "question_hi": "'भारतीय संस्कृति' के लेखक कौन हैं?",
      "options_en": ["Harivansh Rai Bachchan", "Shivpujan Sahay", "Premchand", "Vishnu Prabhakar"],
      "options_hi": ["हरिवंश राय बच्चन", "शिवपूजन सहाय", "प्रेमचंद", "विष्णु प्रभाकर"],
      "answer_en": "Vishnu Prabhakar",
      "answer_hi": "विष्णु प्रभाकर",
      "attempted": false,
      "selected": ""
    },
    {
        "num": 13,
        "question_en": "Who wrote 'Panchatantra'?",
        "question_hi": "'पंचतंत्र' के लेखक कौन हैं?",
        "options_en": ["Vishnu Sharma", "Shivpujan Sahay", "Premchand", "Harivansh Rai Bachchan"],
        "options_hi": ["विष्णु शर्मा", "शिवपूजन सहाय", "प्रेमचंद", "हरिवंश राय बच्चन"],
        "answer_en": "Vishnu Sharma",
        "answer_hi": "विष्णु शर्मा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "Who wrote 'Chhaya'?",
        "question_hi": "'छाया' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Harivansh Rai Bachchan", "Premchand", "Nirala"],
        "options_hi": ["शिवपूजन सहाय", "हरिवंश राय बच्चन", "प्रेमचंद", "निराला"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Who is the author of 'Meri Kahaniyan'?",
        "question_hi": "'मेरी कहानियाँ' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Premchand", "Harivansh Rai Bachchan", "Nirala"],
        "options_hi": ["शिवपूजन सहाय", "प्रेमचंद", "हरिवंश राय बच्चन", "निराला"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "Who wrote 'Chandrayaan'?",
        "question_hi": "'चंद्रयान' के लेखक कौन हैं?",
        "options_en": ["Vishnu Prabhakar", "Shivpujan Sahay", "Premchand", "Harivansh Rai Bachchan"],
        "options_hi": ["विष्णु प्रभाकर", "शिवपूजन सहाय", "प्रेमचंद", "हरिवंश राय बच्चन"],
        "answer_en": "Vishnu Prabhakar",
        "answer_hi": "विष्णु प्रभाकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "Who wrote 'Aag Ka Dariya'?",
        "question_hi": "'आग का दरिया' के लेखक कौन हैं?",
        "options_en": ["Qurratulain Hyder", "Harivansh Rai Bachchan", "Premchand", "Shivpujan Sahay"],
        "options_hi": ["कुर्रतुलैन हैदर", "हरिवंश राय बच्चन", "प्रेमचंद", "शिवपूजन सहाय"],
        "answer_en": "Qurratulain Hyder",
        "answer_hi": "कुर्रतुलैन हैदर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Who is the author of 'Gunahon Ka Devta'?",
        "question_hi": "'गुनाहों का देवता' के लेखक कौन हैं?",
        "options_en": ["Dharmveer Bharti", "Shivpujan Sahay", "Harivansh Rai Bachchan", "Premchand"],
        "options_hi": ["धर्मवीर भारती", "शिवपूजन सहाय", "हरिवंश राय बच्चन", "प्रेमचंद"],
        "answer_en": "Dharmveer Bharti",
        "answer_hi": "धर्मवीर भारती",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "Who wrote 'Jhootha Sach'?",
        "question_hi": "'झूठा सच' के लेखक कौन हैं?",
        "options_en": ["Raghuvir Sahay", "Harivansh Rai Bachchan", "Premchand", "Shivpujan Sahay"],
        "options_hi": ["रघुवीर सहाय", "हरिवंश राय बच्चन", "प्रेमचंद", "शिवपूजन सहाय"],
        "answer_en": "Raghuvir Sahay",
        "answer_hi": "रघुवीर सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Who wrote 'Nirmala'?",
        "question_hi": "'निर्मला' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Shivpujan Sahay", "Harivansh Rai Bachchan", "Nirala"],
        "options_hi": ["प्रेमचंद", "शिवपूजन सहाय", "हरिवंश राय बच्चन", "निराला"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Who wrote 'Kanyadan'?",
        "question_hi": "'कन्यादान' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Premchand", "Harivansh Rai Bachchan", "Raghuvir Sahay"],
        "options_hi": ["शिवपूजन सहाय", "प्रेमचंद", "हरिवंश राय बच्चन", "रघुवीर सहाय"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "Who wrote 'Naya Ghar'?",
        "question_hi": "'नया घर' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Harivansh Rai Bachchan", "Premchand", "Nirala"],
        "options_hi": ["शिवपूजन सहाय", "हरिवंश राय बच्चन", "प्रेमचंद", "निराला"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Who wrote 'Besar'?",
        "question_hi": "'बेसर' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Shivpujan Sahay", "Premchand", "Nirala"],
        "options_hi": ["हरिवंश राय बच्चन", "शिवपूजन सहाय", "प्रेमचंद", "निराला"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Who wrote 'Yogiraj'?",
        "question_hi": "'योगीराज' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Shivpujan Sahay", "Premchand", "Nirala"],
        "options_hi": ["हरिवंश राय बच्चन", "शिवपूजन सहाय", "प्रेमचंद", "निराला"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "Who wrote 'Prachin Bharat Ki Jivan Shaili'?",
        "question_hi": "'प्राचीन भारत की जीवन शैली' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Harivansh Rai Bachchan", "Vishnu Prabhakar", "Shivpujan Sahay"],
        "options_hi": ["प्रेमचंद", "हरिवंश राय बच्चन", "विष्णु प्रभाकर", "शिवपूजन सहाय"],
        "answer_en": "Vishnu Prabhakar",
        "answer_hi": "विष्णु प्रभाकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "Who wrote 'Bachpan Ki Yaadein'?",
        "question_hi": "'बचपन की यादें' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Harivansh Rai Bachchan", "Nirala", "Premchand"],
        "options_hi": ["शिवपूजन सहाय", "हरिवंश राय बच्चन", "निराला", "प्रेमचंद"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "Who wrote 'Ghar Wapsi'?",
        "question_hi": "'घर वापसी' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Premchand", "Harivansh Rai Bachchan", "Nirala"],
        "options_hi": ["शिवपूजन सहाय", "प्रेमचंद", "हरिवंश राय बच्चन", "निराला"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "Who wrote 'Bhootnath'?",
        "question_hi": "'भूतनाथ' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Harivansh Rai Bachchan", "Shivpujan Sahay", "Nirala"],
        "options_hi": ["प्रेमचंद", "हरिवंश राय बच्चन", "शिवपूजन सहाय", "निराला"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "Who wrote 'Jungle Ki Kahani'?",
        "question_hi": "'जंगल की कहानी' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Shivpujan Sahay", "Premchand", "Nirala"],
        "options_hi": ["हरिवंश राय बच्चन", "शिवपूजन सहाय", "प्रेमचंद", "निराला"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "Who wrote 'Manas Ki Jaat'?",
        "question_hi": "'मानस की जात' के लेखक कौन हैं?",
        "options_en": ["Vishnu Prabhakar", "Shivpujan Sahay", "Premchand", "Harivansh Rai Bachchan"],
        "options_hi": ["विष्णु प्रभाकर", "शिवपूजन सहाय", "प्रेमचंद", "हरिवंश राय बच्चन"],
        "answer_en": "Vishnu Prabhakar",
        "answer_hi": "विष्णु प्रभाकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Who wrote 'Madhushala'?",
        "question_hi": "'मधुशाला' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Shivpujan Sahay", "Nirala", "Premchand"],
        "options_hi": ["हरिवंश राय बच्चन", "शिवपूजन सहाय", "निराला", "प्रेमचंद"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "Who wrote 'Shakuntala'?",
        "question_hi": "'शाकुंतला' के लेखक कौन हैं?",
        "options_en": ["Kalidas", "Shivpujan Sahay", "Nirala", "Premchand"],
        "options_hi": ["कालिदास", "शिवपूजन सहाय", "निराला", "प्रेमचंद"],
        "answer_en": "Kalidas",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "Who wrote 'Rashmirathi'?",
        "question_hi": "'रश्मिरथी' के लेखक कौन हैं?",
        "options_en": ["Ramdhari Singh Dinkar", "Harivansh Rai Bachchan", "Premchand", "Shivpujan Sahay"],
        "options_hi": ["रामधारी सिंह दिनकर", "हरिवंश राय बच्चन", "प्रेमचंद", "शिवपूजन सहाय"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "Who wrote 'Geetanjali'?",
        "question_hi": "'गीतांजलि' के लेखक कौन हैं?",
        "options_en": ["Rabindranath Tagore", "Harivansh Rai Bachchan", "Shivpujan Sahay", "Premchand"],
        "options_hi": ["रवींद्रनाथ ठाकुर", "हरिवंश राय बच्चन", "शिवपूजन सहाय", "प्रेमचंद"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रवींद्रनाथ ठाकुर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "Who wrote 'Ramayan'?",
        "question_hi": "'रामायण' के लेखक कौन हैं?",
        "options_en": ["Valmiki", "Shivpujan Sahay", "Nirala", "Premchand"],
        "options_hi": ["वाल्मीकि", "शिवपूजन सहाय", "निराला", "प्रेमचंद"],
        "answer_en": "Valmiki",
        "answer_hi": "वाल्मीकि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "Who wrote 'Mahabharat'?",
        "question_hi": "'महाभारत' के लेखक कौन हैं?",
        "options_en": ["Ved Vyasa", "Harivansh Rai Bachchan", "Shivpujan Sahay", "Premchand"],
        "options_hi": ["वेद व्यास", "हरिवंश राय बच्चन", "शिवपूजन सहाय", "प्रेमचंद"],
        "answer_en": "Ved Vyasa",
        "answer_hi": "वेद व्यास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "Who wrote 'Tulsidas'?",
        "question_hi": "'तुलसीदास' के लेखक कौन हैं?",
        "options_en": ["Tulsidas", "Shivpujan Sahay", "Nirala", "Premchand"],
        "options_hi": ["तुलसीदास", "शिवपूजन सहाय", "निराला", "प्रेमचंद"],
        "answer_en": "Tulsidas",
        "answer_hi": "तुलसीदास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "Who wrote 'Gitanjali'?",
        "question_hi": "'गीतांजलि' के लेखक कौन हैं?",
        "options_en": ["Rabindranath Tagore", "Harivansh Rai Bachchan", "Premchand", "Nirala"],
        "options_hi": ["रवींद्रनाथ ठाकुर", "हरिवंश राय बच्चन", "प्रेमचंद", "निराला"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रवींद्रनाथ ठाकुर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Who wrote 'Vikram and Betal'?",
        "question_hi": "'विक्रम और बेताल' के लेखक कौन हैं?",
        "options_en": ["Somdev", "Premchand", "Harivansh Rai Bachchan", "Shivpujan Sahay"],
        "options_hi": ["सोमदेव", "प्रेमचंद", "हरिवंश राय बच्चन", "शिवपूजन सहाय"],
        "answer_en": "Somdev",
        "answer_hi": "सोमदेव",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "Who wrote 'Raghuvansham'?",
        "question_hi": "'रघुवंशम' के लेखक कौन हैं?",
        "options_en": ["Kalidas", "Shivpujan Sahay", "Premchand", "Harivansh Rai Bachchan"],
        "options_hi": ["कालिदास", "शिवपूजन सहाय", "प्रेमचंद", "हरिवंश राय बच्चन"],
        "answer_en": "Kalidas",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "Who wrote 'Brahmavivarta Purana'?",
        "question_hi": "'ब्रह्मविवर्त पुराण' के लेखक कौन हैं?",
        "options_en": ["Ved Vyasa", "Narayana", "Brahma", "Vishnu"],
        "options_hi": ["वेद व्यास", "नारायण", "ब्रह्मा", "विष्णु"],
        "answer_en": "Ved Vyasa",
        "answer_hi": "वेद व्यास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Who wrote 'Satyarth Prakash'?",
        "question_hi": "'सत्यार्थ प्रकाश' के लेखक कौन हैं?",
        "options_en": ["Swami Dayanand Saraswati", "Mahatma Gandhi", "Pt. Nehru", "Shivaji Maharaj"],
        "options_hi": ["स्वामी दयानंद सरस्वती", "महात्मा गांधी", "पं नेहरू", "शिवाजी महाराज"],
        "answer_en": "Swami Dayanand Saraswati",
        "answer_hi": "स्वामी दयानंद सरस्वती",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Who wrote 'Bhagavad Gita'?",
        "question_hi": "'भगवद गीता' के लेखक कौन हैं?",
        "options_en": ["Ved Vyasa", "Maharishi Valmiki", "Lord Krishna", "Shivpujan Sahay"],
        "options_hi": ["वेद व्यास", "महर्षि वाल्मीकि", "भगवान श्री कृष्ण", "शिवपूजन सहाय"],
        "answer_en": "Ved Vyasa",
        "answer_hi": "वेद व्यास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "Who wrote 'Yogavasishtha'?",
        "question_hi": "'योगवसिष्ठ' के लेखक कौन हैं?",
        "options_en": ["Valmiki", "Vishnu Sharma", "Vasistha", "Vyasa"],
        "options_hi": ["वाल्मीकि", "विष्णु शर्मा", "वसिष्ठ", "व्यास"],
        "answer_en": "Vasistha",
        "answer_hi": "वसिष्ठ",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Who wrote 'Kamasutra'?",
        "question_hi": "'कामसूत्र' के लेखक कौन हैं?",
        "options_en": ["Vatsyayana", "Kalidas", "Nirala", "Brahmagupta"],
        "options_hi": ["वात्स्यायन", "कालिदास", "निराला", "ब्रह्मगुप्त"],
        "answer_en": "Vatsyayana",
        "answer_hi": "वात्स्यायन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "Who wrote 'Ritumati'?",
        "question_hi": "'ऋतुमति' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Nirala", "Ramdhari Singh Dinkar", "Phanishwar Nath Renu"],
        "options_hi": ["हरिवंश राय बच्चन", "निराला", "रामधारी सिंह दिनकर", "फणीश्वर नाथ रेणु"],
        "answer_en": "Nirala",
        "answer_hi": "निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Who wrote 'Madhushala'?",
        "question_hi": "'मधुशाला' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Shivpujan Sahay", "Nirala", "Ramdhari Singh Dinkar"],
        "options_hi": ["हरिवंश राय बच्चन", "शिवपूजन सहाय", "निराला", "रामधारी सिंह दिनकर"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "Who wrote 'Anandmath'?",
        "question_hi": "'आनंदमठ' के लेखक कौन हैं?",
        "options_en": ["Bankim Chandra Chattopadhyay", "Madhusudan Dutt", "Rabindranath Tagore", "Kazi Nazrul Islam"],
        "options_hi": ["बंकिम चंद्र चट्टोपाध्याय", "मधुसूदन दत्त", "रवींद्रनाथ ठाकुर", "काजी नजरुल इस्लाम"],
        "answer_en": "Bankim Chandra Chattopadhyay",
        "answer_hi": "बंकिम चंद्र चट्टोपाध्याय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "Who wrote 'Gitanjali'?",
        "question_hi": "'गीतांजलि' के लेखक कौन हैं?",
        "options_en": ["Rabindranath Tagore", "Harivansh Rai Bachchan", "Nirala", "Premchand"],
        "options_hi": ["रवींद्रनाथ ठाकुर", "हरिवंश राय बच्चन", "निराला", "प्रेमचंद"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रवींद्रनाथ ठाकुर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "Who wrote 'Kalidas'?",
        "question_hi": "'कालिदास' के लेखक कौन हैं?",
        "options_en": ["Kalidas", "Premchand", "Ramdhari Singh Dinkar", "Shivpujan Sahay"],
        "options_hi": ["कालिदास", "प्रेमचंद", "रामधारी सिंह दिनकर", "शिवपूजन सहाय"],
        "answer_en": "Kalidas",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 51,
        "question_en": "Who wrote 'Gitanjali'?",
        "question_hi": "'गीतांजलि' के लेखक कौन हैं?",
        "options_en": ["Rabindranath Tagore", "Harivansh Rai Bachchan", "Premchand", "Vishnu Sharma"],
        "options_hi": ["रवींद्रनाथ ठाकुर", "हरिवंश राय बच्चन", "प्रेमचंद", "विष्णु शर्मा"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रवींद्रनाथ ठाकुर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 52,
        "question_en": "Who wrote 'Raghupati Raghav Raja Ram'?",
        "question_hi": "'रघुपति राघव राजा राम' के लेखक कौन हैं?",
        "options_en": ["Ramdhari Singh Dinkar", "Harivansh Rai Bachchan", "Mahatma Gandhi", "Pandit Nehru"],
        "options_hi": ["रामधारी सिंह दिनकर", "हरिवंश राय बच्चन", "महात्मा गांधी", "पंडित नेहरू"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 53,
        "question_en": "Who wrote 'Hindi Jivan Darshan'?",
        "question_hi": "'हिंदी जीवन दर्शन' के लेखक कौन हैं?",
        "options_en": ["Ramdhari Singh Dinkar", "Harivansh Rai Bachchan", "Shivpujan Sahay", "Premchand"],
        "options_hi": ["रामधारी सिंह दिनकर", "हरिवंश राय बच्चन", "शिवपूजन सहाय", "प्रेमचंद"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 54,
        "question_en": "Who wrote 'Vasantika'?",
        "question_hi": "'वसंतिका' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Nirala", "Ramdhari Singh Dinkar", "Phanishwar Nath Renu"],
        "options_hi": ["हरिवंश राय बच्चन", "निराला", "रामधारी सिंह दिनकर", "फणीश्वर नाथ रेणु"],
        "answer_en": "Nirala",
        "answer_hi": "निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 55,
        "question_en": "Who wrote 'Chandrakanta'?",
        "question_hi": "'चंद्रकांता' के लेखक कौन हैं?",
        "options_en": ["Devaki Nandan Khatri", "Premchand", "Nirala", "Harivansh Rai Bachchan"],
        "options_hi": ["देवकी नंदन खत्री", "प्रेमचंद", "निराला", "हरिवंश राय बच्चन"],
        "answer_en": "Devaki Nandan Khatri",
        "answer_hi": "देवकी नंदन खत्री",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 56,
        "question_en": "Who wrote 'Satyagrah'?",
        "question_hi": "'सत्याग्रह' के लेखक कौन हैं?",
        "options_en": ["Mahatma Gandhi", "Shivaji Maharaj", "Brahmabhooshan", "Jawaharlal Nehru"],
        "options_hi": ["महात्मा गांधी", "शिवाजी महाराज", "ब्रह्मभूमि", "जवाहरलाल नेहरू"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 57,
        "question_en": "Who wrote 'Harishchandra'?",
        "question_hi": "'हरिश्चंद्र' के लेखक कौन हैं?",
        "options_en": ["Raja Shivchandra", "Kalidas", "Premchand", "Harivansh Rai Bachchan"],
        "options_hi": ["राजा शिवचंद्र", "कालिदास", "प्रेमचंद", "हरिवंश राय बच्चन"],
        "answer_en": "Raja Shivchandra",
        "answer_hi": "राजा शिवचंद्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 58,
        "question_en": "Who wrote 'Tulsidas'?",
        "question_hi": "'तुलसीदास' के लेखक कौन हैं?",
        "options_en": ["Tulsidas", "Premchand", "Harivansh Rai Bachchan", "Kalidas"],
        "options_hi": ["तुलसीदास", "प्रेमचंद", "हरिवंश राय बच्चन", "कालिदास"],
        "answer_en": "Tulsidas",
        "answer_hi": "तुलसीदास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 59,
        "question_en": "Who wrote 'Mahabharata'?",
        "question_hi": "'महाभारत' के लेखक कौन हैं?",
        "options_en": ["Ved Vyasa", "Maharishi Valmiki", "Shivpujan Sahay", "Rabindranath Tagore"],
        "options_hi": ["वेद व्यास", "महर्षि वाल्मीकि", "शिवपूजन सहाय", "रवींद्रनाथ ठाकुर"],
        "answer_en": "Ved Vyasa",
        "answer_hi": "वेद व्यास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 60,
        "question_en": "Who wrote 'Vikramaditya's story'?",
        "question_hi": "'विक्रमादित्य की कहानी' के लेखक कौन हैं?",
        "options_en": ["Somdev", "Kalidas", "Shivpujan Sahay", "Raja Shivchandra"],
        "options_hi": ["सोमदेव", "कालिदास", "शिवपूजन सहाय", "राजा शिवचंद्र"],
        "answer_en": "Somdev",
        "answer_hi": "सोमदेव",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 61,
        "question_en": "Who wrote 'Akbarnama'?",
        "question_hi": "'अकबरनामा' के लेखक कौन हैं?",
        "options_en": ["Abul Fazl", "Shah Jahan", "Raja Man Singh", "Birbal"],
        "options_hi": ["अबुल फजल", "शाहजहां", "राजा मान सिंह", "बीरबल"],
        "answer_en": "Abul Fazl",
        "answer_hi": "अबुल फजल",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 62,
        "question_en": "Who wrote 'Taj Mahal'?",
        "question_hi": "'ताज महल' के लेखक कौन हैं?",
        "options_en": ["Ravindra Kiran", "Shivaji Maharaj", "Abdul Kalam", "Prithviraj Chauhan"],
        "options_hi": ["रविंद्र किरन", "शिवाजी महाराज", "अब्दुल कलाम", "पृथ्वीराज चौहान"],
        "answer_en": "Ravindra Kiran",
        "answer_hi": "रविंद्र किरन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 63,
        "question_en": "Who wrote 'Geetanjali' in Hindi?",
        "question_hi": "'गीतांजलि' हिंदी में किसने लिखी है?",
        "options_en": ["Rabindranath Tagore", "Harivansh Rai Bachchan", "Nirala", "Shivaji Maharaj"],
        "options_hi": ["रवींद्रनाथ ठाकुर", "हरिवंश राय बच्चन", "निराला", "शिवाजी महाराज"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रवींद्रनाथ ठाकुर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 64,
        "question_en": "Who wrote 'Baal Kavi'?",
        "question_hi": "'बाल कवी' के लेखक कौन हैं?",
        "options_en": ["Dinkar", "Nirala", "Suryakant Tripathi Nirala", "Makhanlal Chaturvedi"],
        "options_hi": ["दिनकर", "निराला", "सूर्यकांत त्रिपाठी निराला", "माखनलाल चतुर्वेदी"],
        "answer_en": "Suryakant Tripathi Nirala",
        "answer_hi": "सूर्यकांत त्रिपाठी निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 65,
        "question_en": "Who wrote 'Premchand'?",
        "question_hi": "'प्रेमचंद' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Munsi Premchand", "Harivansh Rai Bachchan", "Bhartendu Harishchandra"],
        "options_hi": ["शिवपूजन सहाय", "मुंशी प्रेमचंद", "हरिवंश राय बच्चन", "भारतेंदु हरिश्चंद्र"],
        "answer_en": "Munsi Premchand",
        "answer_hi": "मुंशी प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 66,
        "question_en": "Who wrote 'Rajtarangini'?",
        "question_hi": "'राजतरंगिणी' के लेखक कौन हैं?",
        "options_en": ["Kalhan", "Kashmiri Pandit", "Ashvagosa", "Panini"],
        "options_hi": ["कल्हण", "कश्मीरी पंडित", "आश्वगोष", "पाणिनी"],
        "answer_en": "Kalhan",
        "answer_hi": "कल्हण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 67,
        "question_en": "Who wrote 'Vishnu Puran'?",
        "question_hi": "'विष्णु पुराण' के लेखक कौन हैं?",
        "options_en": ["Ved Vyasa", "Lord Vishnu", "Vishnu Sharma", "Vasistha"],
        "options_hi": ["वेद व्यास", "भगवान विष्णु", "विष्णु शर्मा", "वसिष्ठ"],
        "answer_en": "Ved Vyasa",
        "answer_hi": "वेद व्यास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 68,
        "question_en": "Who wrote 'Yogavasishtha'?",
        "question_hi": "'योगवसिष्ठ' के लेखक कौन हैं?",
        "options_en": ["Vishnu Sharma", "Brahma", "Vyasa", "Vasistha"],
        "options_hi": ["विष्णु शर्मा", "ब्रह्मा", "व्यास", "वसिष्ठ"],
        "answer_en": "Vasistha",
        "answer_hi": "वसिष्ठ",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 69,
        "question_en": "Who wrote 'Madhushala'?",
        "question_hi": "'मधुशाला' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Madhusudan Dutt", "Ravindra Kiran", "Premchand"],
        "options_hi": ["हरिवंश राय बच्चन", "मधुसूदन दत्त", "रविंद्र किरन", "प्रेमचंद"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 70,
        "question_en": "Who wrote 'Patriotic Poems'?",
        "question_hi": "'देशभक्ति कविताएँ' के लेखक कौन हैं?",
        "options_en": ["Ramdhari Singh Dinkar", "Harivansh Rai Bachchan", "Nirala", "Bankim Chandra Chattopadhyay"],
        "options_hi": ["रामधारी सिंह दिनकर", "हरिवंश राय बच्चन", "निराला", "बंकिम चंद्र चट्टोपाध्याय"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 71,
        "question_en": "Who wrote 'Sarfaroshi Ki Tamanna'?",
        "question_hi": "'सरफरोशी की तमन्ना' के लेखक कौन हैं?",
        "options_en": ["Ramprasad Bismil", "Bhagat Singh", "Subhas Chandra Bose", "Mahatma Gandhi"],
        "options_hi": ["रामप्रसाद बिस्मिल", "भगत सिंह", "सुभाष चंद्र बोस", "महात्मा गांधी"],
        "answer_en": "Ramprasad Bismil",
        "answer_hi": "रामप्रसाद बिस्मिल",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 72,
        "question_en": "Who wrote 'Bharat Ki Khoj'?",
        "question_hi": "'भारत की खोज' के लेखक कौन हैं?",
        "options_en": ["Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi", "Vishnu Sharma"],
        "options_hi": ["जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "महात्मा गांधी", "विष्णु शर्मा"],
        "answer_en": "Jawaharlal Nehru",
        "answer_hi": "जवाहरलाल नेहरू",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 73,
        "question_en": "Who wrote 'Kavi Kausalya'?",
        "question_hi": "'कवि कौसल्य' के लेखक कौन हैं?",
        "options_en": ["Kalidas", "Bhavbhuti", "Bhaskar", "Banabhatta"],
        "options_hi": ["कालिदास", "भावभूति", "भास्कर", "बाणभट्ट"],
        "answer_en": "Kalidas",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 74,
        "question_en": "Who wrote 'Panchatantra'?",
        "question_hi": "'पंचतंत्र' के लेखक कौन हैं?",
        "options_en": ["Vishnu Sharma", "Kalidas", "Bhavbhuti", "Shivaji Maharaj"],
        "options_hi": ["विष्णु शर्मा", "कालिदास", "भावभूति", "शिवाजी महाराज"],
        "answer_en": "Vishnu Sharma",
        "answer_hi": "विष्णु शर्मा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 75,
        "question_en": "Who wrote 'Rudra Vachan'?",
        "question_hi": "'रुद्र वचन' के लेखक कौन हैं?",
        "options_en": ["Vishnu Sharma", "Bhavbhuti", "Kalidas", "Tulsidas"],
        "options_hi": ["विष्णु शर्मा", "भावभूति", "कालिदास", "तुलसीदास"],
        "answer_en": "Tulsidas",
        "answer_hi": "तुलसीदास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 76,
        "question_en": "Who wrote 'Shiva Puran'?",
        "question_hi": "'शिव पुराण' के लेखक कौन हैं?",
        "options_en": ["Ved Vyasa", "Vishnu Sharma", "Brahma", "Shiva"],
        "options_hi": ["वेद व्यास", "विष्णु शर्मा", "ब्रह्मा", "शिव"],
        "answer_en": "Ved Vyasa",
        "answer_hi": "वेद व्यास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 77,
        "question_en": "Who wrote 'Ramcharitmanas'?",
        "question_hi": "'रामचरितमानस' के लेखक कौन हैं?",
        "options_en": ["Tulsidas", "Valmiki", "Kalidas", "Harivansh Rai Bachchan"],
        "options_hi": ["तुलसीदास", "वाल्मीकि", "कालिदास", "हरिवंश राय बच्चन"],
        "answer_en": "Tulsidas",
        "answer_hi": "तुलसीदास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 78,
        "question_en": "Who wrote 'Vishnu Sahasranama'?",
        "question_hi": "'विष्णु सहस्त्रनाम' के लेखक कौन हैं?",
        "options_en": ["Ved Vyasa", "Tulsidas", "Valmiki", "Sage Vasistha"],
        "options_hi": ["वेद व्यास", "तुलसीदास", "वाल्मीकि", "साधू वशिष्ठ"],
        "answer_en": "Ved Vyasa",
        "answer_hi": "वेद व्यास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 79,
        "question_en": "Who wrote 'Kalidas's Meghadutam'?",
        "question_hi": "'कालिदास का मेघदूत' किसने लिखा?",
        "options_en": ["Kalidas", "Harivansh Rai Bachchan", "Tulsidas", "Valmiki"],
        "options_hi": ["कालिदास", "हरिवंश राय बच्चन", "तुलसीदास", "वाल्मीकि"],
        "answer_en": "Kalidas",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 80,
        "question_en": "Who wrote 'Chandogya Upanishad'?",
        "question_hi": "'छांदोग्य उपनिषद' के लेखक कौन हैं?",
        "options_en": ["Vedic Rishis", "Ved Vyasa", "Valmiki", "Brahma"],
        "options_hi": ["वैदिक ऋषि", "वेद व्यास", "वाल्मीकि", "ब्रह्मा"],
        "answer_en": "Vedic Rishis",
        "answer_hi": "वैदिक ऋषि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 81,
        "question_en": "Who wrote 'Chitralekha'?",
        "question_hi": "'चित्रलेखा' के लेखक कौन हैं?",
        "options_en": ["Bhagwati Charan Verma", "Brahmanand", "Tulsidas", "Harivansh Rai Bachchan"],
        "options_hi": ["भगवती चरण वर्मा", "ब्राह्मणंद", "तुलसीदास", "हरिवंश राय बच्चन"],
        "answer_en": "Bhagwati Charan Verma",
        "answer_hi": "भगवती चरण वर्मा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 82,
        "question_en": "Who wrote 'Gitanjali' in Hindi?",
        "question_hi": "'गीतांजलि' हिंदी में किसने लिखी है?",
        "options_en": ["Rabindranath Tagore", "Harivansh Rai Bachchan", "Nirala", "Makhanlal Chaturvedi"],
        "options_hi": ["रवींद्रनाथ ठाकुर", "हरिवंश राय बच्चन", "निराला", "माखनलाल चतुर्वेदी"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रवींद्रनाथ ठाकुर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 83,
        "question_en": "Who wrote 'Bharat Ki Katha'?",
        "question_hi": "'भारत की कथा' के लेखक कौन हैं?",
        "options_en": ["Bankim Chandra Chattopadhyay", "Mahatma Gandhi", "Suryakant Tripathi Nirala", "Rabindranath Tagore"],
        "options_hi": ["बंकिम चंद्र चट्टोपाध्याय", "महात्मा गांधी", "सूर्यकांत त्रिपाठी निराला", "रवींद्रनाथ ठाकुर"],
        "answer_en": "Bankim Chandra Chattopadhyay",
        "answer_hi": "बंकिम चंद्र चट्टोपाध्याय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 84,
        "question_en": "Who wrote 'Chandni Chowk'?",
        "question_hi": "'चांदनी चौक' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Munsi Premchand", "Shivpujan Sahay", "Ravindra Kiran"],
        "options_hi": ["प्रेमचंद", "मुंशी प्रेमचंद", "शिवपूजन सहाय", "रविंद्र किरन"],
        "answer_en": "Munsi Premchand",
        "answer_hi": "मुंशी प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 85,
        "question_en": "Who wrote 'Shakespeare's Works in Hindi'?",
        "question_hi": "'शेक्सपियर के कार्य हिंदी में' किसने लिखे?",
        "options_en": ["Mohan Rakesh", "Harivansh Rai Bachchan", "Ravindra Kiran", "Agyeya"],
        "options_hi": ["मोहन राकेश", "हरिवंश राय बच्चन", "रविंद्र किरन", "अज्ञेय"],
        "answer_en": "Mohan Rakesh",
        "answer_hi": "मोहन राकेश",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 86,
        "question_en": "Who wrote 'Naya Gyan'?",
        "question_hi": "'नया ज्ञान' के लेखक कौन हैं?",
        "options_en": ["Muni Bhagwan", "Buddhism", "Gautam Buddha", "Madhusudhan Dutt"],
        "options_hi": ["मुनी भगवान", "बुद्धवाद", "गौतम बुद्ध", "मधुसूदन दत्त"],
        "answer_en": "Muni Bhagwan",
        "answer_hi": "मुनी भगवान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 87,
        "question_en": "Who wrote 'Rajtarangini'?",
        "question_hi": "'राजतरंगिणी' के लेखक कौन हैं?",
        "options_en": ["Kalhan", "Kashmiri Pandit", "Ashvagosa", "Panini"],
        "options_hi": ["कल्हण", "कश्मीरी पंडित", "आश्वगोष", "पाणिनी"],
        "answer_en": "Kalhan",
        "answer_hi": "कल्हण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 88,
        "question_en": "Who wrote 'Satyarth Prakash'?",
        "question_hi": "'सत्यार्थ प्रकाश' के लेखक कौन हैं?",
        "options_en": ["Swami Dayanand Saraswati", "Mahatma Gandhi", "Acharya Vinoba Bhave", "Pandit Jawaharlal Nehru"],
        "options_hi": ["स्वामी दयानंद सरस्वती", "महात्मा गांधी", "आचार्य विनोबा भावे", "पंडित जवाहरलाल नेहरू"],
        "answer_en": "Swami Dayanand Saraswati",
        "answer_hi": "स्वामी दयानंद सरस्वती",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 89,
        "question_en": "Who wrote 'Jeevan Vichar'?",
        "question_hi": "'जीवन विचार' के लेखक कौन हैं?",
        "options_en": ["Lal Bahadur Shastri", "Satyam Shivam Sundaram", "Ram Krishna Paramhans", "Swami Vivekananda"],
        "options_hi": ["लाल बहादुर शास्त्री", "सत्यम शिवम सुंदरम", "राम कृष्ण परमहंस", "स्वामी विवेकानंद"],
        "answer_en": "Swami Vivekananda",
        "answer_hi": "स्वामी विवेकानंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 90,
        "question_en": "Who wrote 'Kalyug Kavi'?",
        "question_hi": "'कलयुग कवि' के लेखक कौन हैं?",
        "options_en": ["Suryakant Tripathi Nirala", "Ramdhari Singh Dinkar", "Harivansh Rai Bachchan", "Bankim Chandra Chattopadhyay"],
        "options_hi": ["सूर्यकांत त्रिपाठी निराला", "रामधारी सिंह दिनकर", "हरिवंश राय बच्चन", "बंकिम चंद्र चट्टोपाध्याय"],
        "answer_en": "Suryakant Tripathi Nirala",
        "answer_hi": "सूर्यकांत त्रिपाठी निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 91,
        "question_en": "Who wrote 'Bharatendu Harishchandra'?",
        "question_hi": "'भारतेंदु हरिश्चंद्र' के लेखक कौन हैं?",
        "options_en": ["Bharatendu Harishchandra", "Rabindranath Tagore", "Mahatma Gandhi", "Swami Vivekananda"],
        "options_hi": ["भारतेंदु हरिश्चंद्र", "रवींद्रनाथ ठाकुर", "महात्मा गांधी", "स्वामी विवेकानंद"],
        "answer_en": "Bharatendu Harishchandra",
        "answer_hi": "भारतेंदु हरिश्चंद्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 92,
        "question_en": "Who is the author of 'My Experiments with Truth'?",
        "question_hi": "'मेरे अनुभव सत्य के साथ' के लेखक कौन हैं?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सर्दार पटेल", "सुभाष चंद्र बोस"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 93,
        "question_en": "Who wrote 'Katha Sarit Sagar'?",
        "question_hi": "'कथासरितसागर' के लेखक कौन हैं?",
        "options_en": ["Somadeva", "Kalidasa", "Bhartrihari", "Tulsidas"],
        "options_hi": ["सोमदेव", "कालिदास", "भर्तृहरी", "तुलसीदास"],
        "answer_en": "Somadeva",
        "answer_hi": "सोमदेव",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 94,
        "question_en": "Who is the author of 'Chandni'?",
        "question_hi": "'चांदनी' के लेखक कौन हैं?",
        "options_en": ["R. K. Narayan", "Premchand", "Tulsidas", "Subhas Chandra Bose"],
        "options_hi": ["आर. के. नारायण", "प्रेमचंद", "तुलसीदास", "सुभाष चंद्र बोस"],
        "answer_en": "R. K. Narayan",
        "answer_hi": "आर. के. नारायण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 95,
        "question_en": "Who wrote 'Aarti Ki Padh'?",
        "question_hi": "'आरती की पद' के लेखक कौन हैं?",
        "options_en": ["Surdas", "Sant Tukaram", "Ramdhari Singh Dinkar", "Madhusudhan Dutt"],
        "options_hi": ["सूरदास", "संत तुकाराम", "रामधारी सिंह दिनकर", "मधुसूदन दत्त"],
        "answer_en": "Surdas",
        "answer_hi": "सूरदास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 96,
        "question_en": "Who wrote 'The Trial'?",
        "question_hi": "'द ट्रायल' के लेखक कौन हैं?",
        "options_en": ["Franz Kafka", "Leo Tolstoy", "William Shakespeare", "J.K. Rowling"],
        "options_hi": ["फ्रांज काफ्का", "लियो टॉलस्टॉय", "विलियम शेक्सपियर", "जे.के. रॉव्लिंग"],
        "answer_en": "Franz Kafka",
        "answer_hi": "फ्रांज काफ्का",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 97,
        "question_en": "Who wrote 'Godan'?",
        "question_hi": "'गोदान' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Harivansh Rai Bachchan", "Mahatma Gandhi", "Ravindra Kiran"],
        "options_hi": ["प्रेमचंद", "हरिवंश राय बच्चन", "महात्मा गांधी", "रविंद्र किरन"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 98,
        "question_en": "Who wrote 'Gora'?",
        "question_hi": "'गोरा' के लेखक कौन हैं?",
        "options_en": ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Madhusudhan Dutt", "Aurobindo Ghosh"],
        "options_hi": ["रवींद्रनाथ ठाकुर", "बंकिम चंद्र चट्टोपाध्याय", "मधुसूदन दत्त", "औरबिंदो घोष"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रवींद्रनाथ ठाकुर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 99,
        "question_en": "Who wrote 'Twilight in Delhi'?",
        "question_hi": "'ट्वाइलाइट इन दिल्ली' के लेखक कौन हैं?",
        "options_en": ["Ahmed Ali", "Manto", "Ismat Chughtai", "Shivani"],
        "options_hi": ["अहमद अली", "मंटो", "इश्मत चुगताई", "शिवानी"],
        "answer_en": "Ahmed Ali",
        "answer_hi": "अहमद अली",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 100,
        "question_en": "Who wrote 'Train to Pakistan'?",
        "question_hi": "'ट्रेन टू पाकिस्तान' के लेखक कौन हैं?",
        "options_en": ["Khushwant Singh", "R.K. Narayan", "Vikram Seth", "Salman Rushdie"],
        "options_hi": ["खुशवंत सिंह", "आर. के. नारायण", "विक्रम सेठ", "सलमान रुश्दी"],
        "answer_en": "Khushwant Singh",
        "answer_hi": "खुशवंत सिंह",
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