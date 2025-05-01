
const questions = [
    {
      "num": 1,
      "question_en": "Who wrote 'Madhushala'?",
      "question_hi": "'मधुशाला' के लेखक कौन हैं?",
      "options_en": ["Harivansh Rai Bachchan", "Tulsidas", "Premchand", "Nirala"],
      "options_hi": ["हरिवंश राय बच्चन", "तुलसीदास", "प्रेमचंद", "निराला"],
      "answer_en": "Harivansh Rai Bachchan",
      "answer_hi": "हरिवंश राय बच्चन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "Who wrote 'Godan'?",
      "question_hi": "'गोदान' के लेखक कौन हैं?",
      "options_en": ["Premchand", "Rabindranath Tagore", "Bharatendu Harishchandra", "Harivansh Rai Bachchan"],
      "options_hi": ["प्रेमचंद", "रवींद्रनाथ ठाकुर", "भारतेंदु हरिशचंद्र", "हरिवंश राय बच्चन"],
      "answer_en": "Premchand",
      "answer_hi": "प्रेमचंद",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "Who wrote 'Gitanjali'?",
      "question_hi": "'गीतांजलि' के लेखक कौन हैं?",
      "options_en": ["Rabindranath Tagore", "Harivansh Rai Bachchan", "Tulsidas", "Jayashankar Prasad"],
      "options_hi": ["रवींद्रनाथ ठाकुर", "हरिवंश राय बच्चन", "तुलसीदास", "जयशंकर प्रसाद"],
      "answer_en": "Rabindranath Tagore",
      "answer_hi": "रवींद्रनाथ ठाकुर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "Who wrote 'Nirmala'?",
      "question_hi": "'निर्मला' के लेखक कौन हैं?",
      "options_en": ["Premchand", "Tulsidas", "Jayashankar Prasad", "Harivansh Rai Bachchan"],
      "options_hi": ["प्रेमचंद", "तुलसीदास", "जयशंकर प्रसाद", "हरिवंश राय बच्चन"],
      "answer_en": "Premchand",
      "answer_hi": "प्रेमचंद",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "Who is the author of 'Madhushala'?",
      "question_hi": "'मधुशाला' के लेखक कौन हैं?",
      "options_en": ["Harivansh Rai Bachchan", "Nirala", "Tulsidas", "Premchand"],
      "options_hi": ["हरिवंश राय बच्चन", "निराला", "तुलसीदास", "प्रेमचंद"],
      "answer_en": "Harivansh Rai Bachchan",
      "answer_hi": "हरिवंश राय बच्चन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "Who wrote 'Bhootnath'?",
      "question_hi": "'भूतनाथ' के लेखक कौन हैं?",
      "options_en": ["Premchand", "Rabindranath Tagore", "Bharatendu Harishchandra", "Harivansh Rai Bachchan"],
      "options_hi": ["प्रेमचंद", "रवींद्रनाथ ठाकुर", "भारतेंदु हरिशचंद्र", "हरिवंश राय बच्चन"],
      "answer_en": "Premchand",
      "answer_hi": "प्रेमचंद",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "Who is the author of 'Rangbhoomi'?",
      "question_hi": "'रंगभूमि' के लेखक कौन हैं?",
      "options_en": ["Premchand", "Nirala", "Tulsidas", "Rabindranath Tagore"],
      "options_hi": ["प्रेमचंद", "निराला", "तुलसीदास", "रवींद्रनाथ ठाकुर"],
      "answer_en": "Premchand",
      "answer_hi": "प्रेमचंद",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "Who is the author of 'Tamas'?",
      "question_hi": "'तमस' के लेखक कौन हैं?",
      "options_en": ["Bhishma Sahni", "Premchand", "Harivansh Rai Bachchan", "Tulsidas"],
      "options_hi": ["भीष्म साहनी", "प्रेमचंद", "हरिवंश राय बच्चन", "तुलसीदास"],
      "answer_en": "Bhishma Sahni",
      "answer_hi": "भीष्म साहनी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "Who wrote 'Karmabhoomi'?",
      "question_hi": "'कर्मभूमि' के लेखक कौन हैं?",
      "options_en": ["Premchand", "Rabindranath Tagore", "Harivansh Rai Bachchan", "Jayashankar Prasad"],
      "options_hi": ["प्रेमचंद", "रवींद्रनाथ ठाकुर", "हरिवंश राय बच्चन", "जयशंकर प्रसाद"],
      "answer_en": "Premchand",
      "answer_hi": "प्रेमचंद",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "Who is the author of 'Raat Pashmine Ki'?",
      "question_hi": "'रात पशमिन की' के लेखक कौन हैं?",
      "options_en": ["Nirala", "Harivansh Rai Bachchan", "Rabindranath Tagore", "Ramdhari Singh Dinkar"],
      "options_hi": ["निराला", "हरिवंश राय बच्चन", "रवींद्रनाथ ठाकुर", "रामधारी सिंह दिनकर"],
      "answer_en": "Harivansh Rai Bachchan",
      "answer_hi": "हरिवंश राय बच्चन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "Who wrote 'Shivaji'?",
      "question_hi": "'शिवाजी' के लेखक कौन हैं?",
      "options_en": ["Vishnu Shastri Chiplunkar", "Nirala", "Bharatendu Harishchandra", "Ramdhari Singh Dinkar"],
      "options_hi": ["विश्णु शास्त्री चिपलूंकर", "निराला", "भारतेंदु हरिशचंद्र", "रामधारी सिंह दिनकर"],
      "answer_en": "Vishnu Shastri Chiplunkar",
      "answer_hi": "विश्णु शास्त्री चिपलूंकर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "Who wrote 'Jeevankala'?",
      "question_hi": "'जीवनकला' के लेखक कौन हैं?",
      "options_en": ["Nirala", "Premchand", "Jayashankar Prasad", "Harivansh Rai Bachchan"],
      "options_hi": ["निराला", "प्रेमचंद", "जयशंकर प्रसाद", "हरिवंश राय बच्चन"],
      "answer_en": "Nirala",
      "answer_hi": "निराला",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "Who wrote 'Madhurima'?",
      "question_hi": "'मधुरिमा' के लेखक कौन हैं?",
      "options_en": ["Tulsidas", "Premchand", "Harivansh Rai Bachchan", "Rabindranath Tagore"],
      "options_hi": ["तुलसीदास", "प्रेमचंद", "हरिवंश राय बच्चन", "रवींद्रनाथ ठाकुर"],
      "answer_en": "Tulsidas",
      "answer_hi": "तुलसीदास",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "Who wrote 'Chandni'?",
      "question_hi": "'चाँदनी' के लेखक कौन हैं?",
      "options_en": ["Jayashankar Prasad", "Premchand", "Harivansh Rai Bachchan", "Tulsidas"],
      "options_hi": ["जयशंकर प्रसाद", "प्रेमचंद", "हरिवंश राय बच्चन", "तुलसीदास"],
      "answer_en": "Jayashankar Prasad",
      "answer_hi": "जयशंकर प्रसाद",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "Who wrote 'Raktkalyan'?",
      "question_hi": "'रक्तकल्याण' के लेखक कौन हैं?",
      "options_en": ["Ramdhari Singh Dinkar", "Bharatendu Harishchandra", "Nirala", "Harivansh Rai Bachchan"],
      "options_hi": ["रामधारी सिंह दिनकर", "भारतेंदु हरिशचंद्र", "निराला", "हरिवंश राय बच्चन"],
      "answer_en": "Ramdhari Singh Dinkar",
      "answer_hi": "रामधारी सिंह दिनकर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "Who wrote 'Mera Watan'?",
      "question_hi": "'मेरा वतन' के लेखक कौन हैं?",
      "options_en": ["Nirala", "Harivansh Rai Bachchan", "Rabindranath Tagore", "Ramdhari Singh Dinkar"],
      "options_hi": ["निराला", "हरिवंश राय बच्चन", "रवींद्रनाथ ठाकुर", "रामधारी सिंह दिनकर"],
      "answer_en": "Ramdhari Singh Dinkar",
      "answer_hi": "रामधारी सिंह दिनकर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "Who wrote 'Lalit'?",
      "question_hi": "'ललित' के लेखक कौन हैं?",
      "options_en": ["Tulsidas", "Bharatendu Harishchandra", "Premchand", "Nirala"],
      "options_hi": ["तुलसीदास", "भारतेंदु हरिशचंद्र", "प्रेमचंद", "निराला"],
      "answer_en": "Bharatendu Harishchandra",
      "answer_hi": "भारतेंदु हरिशचंद्र",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "Who wrote 'Shabdawali'?",
      "question_hi": "'शब्दावली' के लेखक कौन हैं?",
      "options_en": ["Tulsidas", "Harivansh Rai Bachchan", "Premchand", "Rabindranath Tagore"],
      "options_hi": ["तुलसीदास", "हरिवंश राय बच्चन", "प्रेमचंद", "रवींद्रनाथ ठाकुर"],
      "answer_en": "Tulsidas",
      "answer_hi": "तुलसीदास",
      "attempted": false,
      "selected": ""
    },
    {
        "num": 19,
        "question_en": "Who wrote 'Naya Bharat'?",
        "question_hi": "'नया भारत' के लेखक कौन हैं?",
        "options_en": ["Bharatendu Harishchandra", "Premchand", "Ramdhari Singh Dinkar", "Nirala"],
        "options_hi": ["भारतेंदु हरिशचंद्र", "प्रेमचंद", "रामधारी सिंह दिनकर", "निराला"],
        "answer_en": "Bharatendu Harishchandra",
        "answer_hi": "भारतेंदु हरिशचंद्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Who wrote 'Premchand Ki Kahaniyan'?",
        "question_hi": "'प्रेमचंद की कहानियाँ' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Tulsidas", "Rabindranath Tagore", "Harivansh Rai Bachchan"],
        "options_hi": ["प्रेमचंद", "तुलसीदास", "रवींद्रनाथ ठाकुर", "हरिवंश राय बच्चन"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Who wrote 'Raag Darbari'?",
        "question_hi": "'राग दरबारी' के लेखक कौन हैं?",
        "options_en": ["Shiv Prasad Tripathi", "Shivpujan Sahay", "Phanishwar Nath Renu", "Shivani"],
        "options_hi": ["शिव प्रसाद त्रिपाठी", "शिवपूजन सहाय", "फणीश्वर नाथ रेणु", "शिवानी"],
        "answer_en": "Shiv Prasad Tripathi",
        "answer_hi": "शिव प्रसाद त्रिपाठी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "Who is the author of 'Udaan'?",
        "question_hi": "'उड़ान' के लेखक कौन हैं?",
        "options_en": ["Sujata", "Bharatendu Harishchandra", "Nirala", "Phanishwar Nath Renu"],
        "options_hi": ["सुजाता", "भारतेंदु हरिशचंद्र", "निराला", "फणीश्वर नाथ रेणु"],
        "answer_en": "Sujata",
        "answer_hi": "सुजाता",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Who wrote 'Shiksha ka Adhikar'?",
        "question_hi": "'शिक्षा का अधिकार' के लेखक कौन हैं?",
        "options_en": ["Bhagat Singh", "Bharatendu Harishchandra", "Ravindra Nath Thakur", "Shivpujan Sahay"],
        "options_hi": ["भगत सिंह", "भारतेंदु हरिशचंद्र", "रवींद्रनाथ ठाकुर", "शिवपूजन सहाय"],
        "answer_en": "Bhagat Singh",
        "answer_hi": "भगत सिंह",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Who wrote 'Yogavashishtha'?",
        "question_hi": "'योगवशिष्ठ' के लेखक कौन हैं?",
        "options_en": ["Valmiki", "Vyasa", "Tulsidas", "Shivaji"],
        "options_hi": ["वाल्मीकि", "व्यास", "तुलसीदास", "शिवाजी"],
        "answer_en": "Valmiki",
        "answer_hi": "वाल्मीकि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "Who wrote 'Vande Mataram'?",
        "question_hi": "'वन्दे मातरम्' के लेखक कौन हैं?",
        "options_en": ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Harivansh Rai Bachchan", "Bharatendu Harishchandra"],
        "options_hi": ["रवींद्रनाथ ठाकुर", "बंकिम चंद्र चट्टोपाध्याय", "हरिवंश राय बच्चन", "भारतेंदु हरिशचंद्र"],
        "answer_en": "Bankim Chandra Chattopadhyay",
        "answer_hi": "बंकिम चंद्र चट्टोपाध्याय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "Who wrote 'Jivan ki Rachna'?",
        "question_hi": "'जीवन की रचना' के लेखक कौन हैं?",
        "options_en": ["Gulzar", "Nirala", "Shivaji", "Bharatendu Harishchandra"],
        "options_hi": ["गुलजार", "निराला", "शिवाजी", "भारतेंदु हरिशचंद्र"],
        "answer_en": "Gulzar",
        "answer_hi": "गुलजार",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "Who wrote 'Shabdawaali'?",
        "question_hi": "'शब्दावली' के लेखक कौन हैं?",
        "options_en": ["Bhagat Singh", "Shivani", "Bharatendu Harishchandra", "Nirala"],
        "options_hi": ["भगत सिंह", "शिवानी", "भारतेंदु हरिशचंद्र", "निराला"],
        "answer_en": "Shivani",
        "answer_hi": "शिवानी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "Who wrote 'Samajik Samasyaen'?",
        "question_hi": "'सामाजिक समस्याएँ' के लेखक कौन हैं?",
        "options_en": ["Ramdhari Singh Dinkar", "Bharatendu Harishchandra", "Nirala", "Premchand"],
        "options_hi": ["रामधारी सिंह दिनकर", "भारतेंदु हरिशचंद्र", "निराला", "प्रेमचंद"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "Who wrote 'Bharatiya Gatha'?",
        "question_hi": "'भारतीय गाथा' के लेखक कौन हैं?",
        "options_en": ["Bhagat Singh", "Bharatendu Harishchandra", "Tulsidas", "Phanishwar Nath Renu"],
        "options_hi": ["भगत सिंह", "भारतेंदु हरिशचंद्र", "तुलसीदास", "फणीश्वर नाथ रेणु"],
        "answer_en": "Bharatendu Harishchandra",
        "answer_hi": "भारतेंदु हरिशचंद्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "Who wrote 'Mera Watan'?",
        "question_hi": "'मेरा वतन' के लेखक कौन हैं?",
        "options_en": ["Ramdhari Singh Dinkar", "Tulsidas", "Premchand", "Shivpujan Sahay"],
        "options_hi": ["रामधारी सिंह दिनकर", "तुलसीदास", "प्रेमचंद", "शिवपूजन सहाय"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Who wrote 'Rashmirathi'?",
        "question_hi": "'रश्मिरथी' के लेखक कौन हैं?",
        "options_en": ["Ramdhari Singh Dinkar", "Harivansh Rai Bachchan", "Nirala", "Premchand"],
        "options_hi": ["रामधारी सिंह दिनकर", "हरिवंश राय बच्चन", "निराला", "प्रेमचंद"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "Who wrote 'Madhushala'?",
        "question_hi": "'मधुशाला' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Shivpujan Sahay", "Nirala", "Bankim Chandra Chattopadhyay"],
        "options_hi": ["हरिवंश राय बच्चन", "शिवपूजन सहाय", "निराला", "बंकिम चंद्र चट्टोपाध्याय"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "Who is the author of 'Chandni Chowk'?",
        "question_hi": "'चाँदनी चौक' के लेखक कौन हैं?",
        "options_en": ["Vishnu Prabhakar", "Nirala", "Bharatendu Harishchandra", "Premchand"],
        "options_hi": ["विष्णु प्रभाकर", "निराला", "भारतेंदु हरिशचंद्र", "प्रेमचंद"],
        "answer_en": "Vishnu Prabhakar",
        "answer_hi": "विष्णु प्रभाकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "Who wrote 'Radhakrishnan'?",
        "question_hi": "'राधाकृष्णन' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Nirala", "Dr. Sarvepalli Radhakrishnan", "Premchand"],
        "options_hi": ["शिवपूजन सहाय", "निराला", "डॉ. सर्वपल्ली राधाकृष्णन", "प्रेमचंद"],
        "answer_en": "Dr. Sarvepalli Radhakrishnan",
        "answer_hi": "डॉ. सर्वपल्ली राधाकृष्णन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "Who is the author of 'Satyagrah ki Shakti'?",
        "question_hi": "'सत्याग्रह की शक्ति' के लेखक कौन हैं?",
        "options_en": ["Mahatma Gandhi", "Ramdhari Singh Dinkar", "Vishnu Prabhakar", "Pandit Nehru"],
        "options_hi": ["महात्मा गांधी", "रामधारी सिंह दिनकर", "विष्णु प्रभाकर", "पंडित नेहरू"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "Who wrote 'Kavi-Ke-Doosre-Avataar'?",
        "question_hi": "'कवि के दूसरे अवतार' के लेखक कौन हैं?",
        "options_en": ["Nirala", "Harivansh Rai Bachchan", "Ramdhari Singh Dinkar", "Shivpujan Sahay"],
        "options_hi": ["निराला", "हरिवंश राय बच्चन", "रामधारी सिंह दिनकर", "शिवपूजन सहाय"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "Who wrote 'Godan'?",
        "question_hi": "'गोदान' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Bharatendu Harishchandra", "Nirala", "Shivpujan Sahay"],
        "options_hi": ["प्रेमचंद", "भारतेंदु हरिशचंद्र", "निराला", "शिवपूजन सहाय"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "Who wrote 'Mahabharat'?",
        "question_hi": "'महाभारत' के लेखक कौन हैं?",
        "options_en": ["Vyasa", "Valmiki", "Tulsidas", "Bharatendu Harishchandra"],
        "options_hi": ["व्यास", "वाल्मीकि", "तुलसीदास", "भारतेंदु हरिशचंद्र"],
        "answer_en": "Vyasa",
        "answer_hi": "व्यास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Who wrote 'Gitanjali'?",
        "question_hi": "'गीतांजलि' के लेखक कौन हैं?",
        "options_en": ["Rabindranath Tagore", "Shivani", "Phanishwar Nath Renu", "Bharatendu Harishchandra"],
        "options_hi": ["रवींद्रनाथ ठाकुर", "शिवानी", "फणीश्वर नाथ रेणु", "भारतेंदु हरिशचंद्र"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रवींद्रनाथ ठाकुर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "Who wrote 'Chandrakanta'?",
        "question_hi": "'चंद्रकांता' के लेखक कौन हैं?",
        "options_en": ["Devaki Nandan Khatri", "Premchand", "Ramdhari Singh Dinkar", "Shivpujan Sahay"],
        "options_hi": ["देवकी नंदन खत्री", "प्रेमचंद", "रामधारी सिंह दिनकर", "शिवपूजन सहाय"],
        "answer_en": "Devaki Nandan Khatri",
        "answer_hi": "देवकी नंदन खत्री",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "Who is the author of 'Kashi Ki Vaibhav'?",
        "question_hi": "'काशी की वैभव' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Nirala", "Madhav Prasad", "Bharatendu Harishchandra"],
        "options_hi": ["शिवपूजन सहाय", "निराला", "मधव प्रसाद", "भारतेंदु हरिशचंद्र"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Who wrote 'Ritu Ki Reet'?",
        "question_hi": "'ऋतु की रीति' के लेखक कौन हैं?",
        "options_en": ["Nirala", "Shivpujan Sahay", "Harivansh Rai Bachchan", "Bharatendu Harishchandra"],
        "options_hi": ["निराला", "शिवपूजन सहाय", "हरिवंश राय बच्चन", "भारतेंदु हरिशचंद्र"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Who is the author of 'Tulsidas'?",
        "question_hi": "'तुलसीदास' के लेखक कौन हैं?",
        "options_en": ["Nirala", "Harivansh Rai Bachchan", "Shivpujan Sahay", "Ramdhari Singh Dinkar"],
        "options_hi": ["निराला", "हरिवंश राय बच्चन", "शिवपूजन सहाय", "रामधारी सिंह दिनकर"],
        "answer_en": "Nirala",
        "answer_hi": "निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "Who wrote 'Magadh Ki Prachin Kahaniyan'?",
        "question_hi": "'मगध की प्राचीन कहानियाँ' के लेखक कौन हैं?",
        "options_en": ["Vishnu Prabhakar", "Shivpujan Sahay", "Bharatendu Harishchandra", "Premchand"],
        "options_hi": ["विष्णु प्रभाकर", "शिवपूजन सहाय", "भारतेंदु हरिशचंद्र", "प्रेमचंद"],
        "answer_en": "Vishnu Prabhakar",
        "answer_hi": "विष्णु प्रभाकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Who is the author of 'Bhay ka Vichar'?",
        "question_hi": "'भय का विचार' के लेखक कौन हैं?",
        "options_en": ["Nirala", "Ramdhari Singh Dinkar", "Harivansh Rai Bachchan", "Madhav Prasad"],
        "options_hi": ["निराला", "रामधारी सिंह दिनकर", "हरिवंश राय बच्चन", "मधव प्रसाद"],
        "answer_en": "Nirala",
        "answer_hi": "निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "Who wrote 'Vaidehi'?",
        "question_hi": "'वैदेही' के लेखक कौन हैं?",
        "options_en": ["Bharatendu Harishchandra", "Shivpujan Sahay", "Nirala", "Harivansh Rai Bachchan"],
        "options_hi": ["भारतेंदु हरिशचंद्र", "शिवपूजन सहाय", "निराला", "हरिवंश राय बच्चन"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Who is the author of 'Ravi ke Kisse'?",
        "question_hi": "'रवि के किस्से' के लेखक कौन हैं?",
        "options_en": ["Nirala", "Shivpujan Sahay", "Premchand", "Harivansh Rai Bachchan"],
        "options_hi": ["निराला", "शिवपूजन सहाय", "प्रेमचंद", "हरिवंश राय बच्चन"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "Who wrote 'Katha Kalpana'?",
        "question_hi": "'कथा कल्पना' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Vishnu Prabhakar", "Nirala", "Shivpujan Sahay"],
        "options_hi": ["हरिवंश राय बच्चन", "विष्णु प्रभाकर", "निराला", "शिवपूजन सहाय"],
        "answer_en": "Vishnu Prabhakar",
        "answer_hi": "विष्णु प्रभाकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "Who wrote 'Satyagraha'?",
        "question_hi": "'सत्याग्रह' के लेखक कौन हैं?",
        "options_en": ["Mahatma Gandhi", "Nirala", "Harivansh Rai Bachchan", "Shivpujan Sahay"],
        "options_hi": ["महात्मा गांधी", "निराला", "हरिवंश राय बच्चन", "शिवपूजन सहाय"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "Who wrote 'Nirmala'?",
        "question_hi": "'निर्मला' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Nirala", "Bharatendu Harishchandra", "Ramdhari Singh Dinkar"],
        "options_hi": ["प्रेमचंद", "निराला", "भारतेंदु हरिशचंद्र", "रामधारी सिंह दिनकर"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 51,
        "question_en": "Who wrote 'Kavita ki Shakti'?",
        "question_hi": "'कविता की शक्ति' के लेखक कौन हैं?",
        "options_en": ["Nirala", "Shivpujan Sahay", "Ramdhari Singh Dinkar", "Harivansh Rai Bachchan"],
        "options_hi": ["निराला", "शिवपूजन सहाय", "रामधारी सिंह दिनकर", "हरिवंश राय बच्चन"],
        "answer_en": "Nirala",
        "answer_hi": "निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 52,
        "question_en": "Who wrote 'Chandni Chowk ki Kahaniyan'?",
        "question_hi": "'चाँदनी चौक की कहानियाँ' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Premchand", "Nirala", "Harivansh Rai Bachchan"],
        "options_hi": ["शिवपूजन सहाय", "प्रेमचंद", "निराला", "हरिवंश राय बच्चन"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 53,
        "question_en": "Who is the author of 'Ek Raat'?",
        "question_hi": "'एक रात' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Nirala", "Bharatendu Harishchandra", "Harivansh Rai Bachchan"],
        "options_hi": ["शिवपूजन सहाय", "निराला", "भारतेंदु हरिशचंद्र", "हरिवंश राय बच्चन"],
        "answer_en": "Nirala",
        "answer_hi": "निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 54,
        "question_en": "Who wrote 'Parakh'?",
        "question_hi": "'परख' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Nirala", "Shivpujan Sahay", "Harivansh Rai Bachchan"],
        "options_hi": ["प्रेमचंद", "निराला", "शिवपूजन सहाय", "हरिवंश राय बच्चन"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 55,
        "question_en": "Who wrote 'Sahitya ka Itihas'?",
        "question_hi": "'साहित्य का इतिहास' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Nirala", "Shivpujan Sahay", "Vishnu Prabhakar"],
        "options_hi": ["हरिवंश राय बच्चन", "निराला", "शिवपूजन सहाय", "विष्णु प्रभाकर"],
        "answer_en": "Vishnu Prabhakar",
        "answer_hi": "विष्णु प्रभाकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 56,
        "question_en": "Who wrote 'Sukh Ki Talash'?",
        "question_hi": "'सुख की तलाश' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Shivpujan Sahay", "Ramdhari Singh Dinkar", "Harivansh Rai Bachchan"],
        "options_hi": ["प्रेमचंद", "शिवपूजन सहाय", "रामधारी सिंह दिनकर", "हरिवंश राय बच्चन"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 57,
        "question_en": "Who wrote 'Dhoop Ki Roshni'?",
        "question_hi": "'धूप की रोशनी' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Shivpujan Sahay", "Nirala", "Premchand"],
        "options_hi": ["हरिवंश राय बच्चन", "शिवपूजन सहाय", "निराला", "प्रेमचंद"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 58,
        "question_en": "Who wrote 'Andheron ka Safar'?",
        "question_hi": "'अंधेरों का सफर' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Nirala", "Harivansh Rai Bachchan", "Bharatendu Harishchandra"],
        "options_hi": ["शिवपूजन सहाय", "निराला", "हरिवंश राय बच्चन", "भारतेंदु हरिशचंद्र"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 59,
        "question_en": "Who is the author of 'Sarojini Naidu'?",
        "question_hi": "'सरोजिनी नायडू' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Shivpujan Sahay", "Nirala", "Bharatendu Harishchandra"],
        "options_hi": ["हरिवंश राय बच्चन", "शिवपूजन सहाय", "निराला", "भारतेंदु हरिशचंद्र"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 60,
        "question_en": "Who wrote 'Chandni Chowk'?",
        "question_hi": "'चाँदनी चौक' के लेखक कौन हैं?",
        "options_en": ["Vishnu Prabhakar", "Nirala", "Ramdhari Singh Dinkar", "Shivpujan Sahay"],
        "options_hi": ["विष्णु प्रभाकर", "निराला", "रामधारी सिंह दिनकर", "शिवपूजन सहाय"],
        "answer_en": "Vishnu Prabhakar",
        "answer_hi": "विष्णु प्रभाकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 61,
        "question_en": "Who wrote 'Yatharth Gyaan'?",
        "question_hi": "'यथार्थ ज्ञान' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Premchand", "Nirala", "Harivansh Rai Bachchan"],
        "options_hi": ["शिवपूजन सहाय", "प्रेमचंद", "निराला", "हरिवंश राय बच्चन"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 62,
        "question_en": "Who wrote 'Katha Ke Liye'?",
        "question_hi": "'कथा के लिए' के लेखक कौन हैं?",
        "options_en": ["Vishnu Prabhakar", "Nirala", "Shivpujan Sahay", "Harivansh Rai Bachchan"],
        "options_hi": ["विष्णु प्रभाकर", "निराला", "शिवपूजन सहाय", "हरिवंश राय बच्चन"],
        "answer_en": "Nirala",
        "answer_hi": "निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 63,
        "question_en": "Who is the author of 'Satyagrah Ki Shakti'?",
        "question_hi": "'सत्याग्रह की शक्ति' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Premchand", "Mahatma Gandhi", "Harivansh Rai Bachchan"],
        "options_hi": ["शिवपूजन सहाय", "प्रेमचंद", "महात्मा गांधी", "हरिवंश राय बच्चन"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 64,
        "question_en": "Who wrote 'Chhavi Ke Ankhon'?",
        "question_hi": "'छवि के आँखों' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Shivpujan Sahay", "Premchand", "Nirala"],
        "options_hi": ["हरिवंश राय बच्चन", "शिवपूजन सहाय", "प्रेमचंद", "निराला"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 65,
        "question_en": "Who is the author of 'Manthan'?",
        "question_hi": "'मंथन' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Premchand", "Ramdhari Singh Dinkar", "Bharatendu Harishchandra"],
        "options_hi": ["शिवपूजन सहाय", "प्रेमचंद", "रामधारी सिंह दिनकर", "भारतेंदु हरिशचंद्र"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 66,
        "question_en": "Who wrote 'Chhaya'?",
        "question_hi": "'छाया' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Nirala", "Shivpujan Sahay", "Bharatendu Harishchandra"],
        "options_hi": ["हरिवंश राय बच्चन", "निराला", "शिवपूजन सहाय", "भारतेंदु हरिशचंद्र"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 67,
        "question_en": "Who wrote 'Samvedana'?",
        "question_hi": "'संवेदना' के लेखक कौन हैं?",
        "options_en": ["Nirala", "Shivpujan Sahay", "Ramdhari Singh Dinkar", "Premchand"],
        "options_hi": ["निराला", "शिवपूजन सहाय", "रामधारी सिंह दिनकर", "प्रेमचंद"],
        "answer_en": "Nirala",
        "answer_hi": "निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 68,
        "question_en": "Who wrote 'Chhavi'?",
        "question_hi": "'छवि' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Harivansh Rai Bachchan", "Premchand", "Ramdhari Singh Dinkar"],
        "options_hi": ["शिवपूजन सहाय", "हरिवंश राय बच्चन", "प्रेमचंद", "रामधारी सिंह दिनकर"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 69,
        "question_en": "Who wrote 'Yatharth Darshan'?",
        "question_hi": "'यथार्थ दर्शन' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Premchand", "Harivansh Rai Bachchan", "Mahatma Gandhi"],
        "options_hi": ["शिवपूजन सहाय", "प्रेमचंद", "हरिवंश राय बच्चन", "महात्मा गांधी"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 70,
        "question_en": "Who wrote 'Samaj Ka Vikas'?",
        "question_hi": "'समाज का विकास' के लेखक कौन हैं?",
        "options_en": ["Vishnu Prabhakar", "Harivansh Rai Bachchan", "Shivpujan Sahay", "Premchand"],
        "options_hi": ["विष्णु प्रभाकर", "हरिवंश राय बच्चन", "शिवपूजन सहाय", "प्रेमचंद"],
        "answer_en": "Vishnu Prabhakar",
        "answer_hi": "विष्णु प्रभाकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 71,
        "question_en": "Who wrote 'Nirmaan'?",
        "question_hi": "'निर्माण' के लेखक कौन हैं?",
        "options_en": ["Nirala", "Shivpujan Sahay", "Harivansh Rai Bachchan", "Premchand"],
        "options_hi": ["निराला", "शिवपूजन सहाय", "हरिवंश राय बच्चन", "प्रेमचंद"],
        "answer_en": "Nirala",
        "answer_hi": "निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 72,
        "question_en": "Who wrote 'Pratirodh'?",
        "question_hi": "'प्रतिरोध' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Nirala", "Harivansh Rai Bachchan", "Premchand"],
        "options_hi": ["शिवपूजन सहाय", "निराला", "हरिवंश राय बच्चन", "प्रेमचंद"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 73,
        "question_en": "Who wrote 'Asha Ki Disha'?",
        "question_hi": "'आशा की दिशा' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Premchand", "Harivansh Rai Bachchan", "Nirala"],
        "options_hi": ["शिवपूजन सहाय", "प्रेमचंद", "हरिवंश राय बच्चन", "निराला"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 74,
        "question_en": "Who wrote 'Sankalp'?",
        "question_hi": "'संकल्प' के लेखक कौन हैं?",
        "options_en": ["Nirala", "Shivpujan Sahay", "Premchand", "Harivansh Rai Bachchan"],
        "options_hi": ["निराला", "शिवपूजन सहाय", "प्रेमचंद", "हरिवंश राय बच्चन"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 75,
        "question_en": "Who wrote 'Vichar Manthan'?",
        "question_hi": "'विचार मंथन' के लेखक कौन हैं?",
        "options_en": ["Vishnu Prabhakar", "Nirala", "Shivpujan Sahay", "Harivansh Rai Bachchan"],
        "options_hi": ["विष्णु प्रभाकर", "निराला", "शिवपूजन सहाय", "हरिवंश राय बच्चन"],
        "answer_en": "Vishnu Prabhakar",
        "answer_hi": "विष्णु प्रभाकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 76,
        "question_en": "Who wrote 'Kavitayen'?",
        "question_hi": "'कविताएँ' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Shivpujan Sahay", "Premchand", "Nirala"],
        "options_hi": ["हरिवंश राय बच्चन", "शिवपूजन सहाय", "प्रेमचंद", "निराला"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 77,
        "question_en": "Who wrote 'Rashtriya Vichar'?",
        "question_hi": "'राष्ट्रीय विचार' के लेखक कौन हैं?",
        "options_en": ["Mahatma Gandhi", "Harivansh Rai Bachchan", "Shivpujan Sahay", "Vishnu Prabhakar"],
        "options_hi": ["महात्मा गांधी", "हरिवंश राय बच्चन", "शिवपूजन सहाय", "विष्णु प्रभाकर"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 78,
        "question_en": "Who wrote 'Parivartan'?",
        "question_hi": "'परिवर्तन' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Premchand", "Harivansh Rai Bachchan", "Nirala"],
        "options_hi": ["शिवपूजन सहाय", "प्रेमचंद", "हरिवंश राय बच्चन", "निराला"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 79,
        "question_en": "Who is the author of 'Yatharth Gyaan'?",
        "question_hi": "'यथार्थ ज्ञान' के लेखक कौन हैं?",
        "options_en": ["Nirala", "Shivpujan Sahay", "Premchand", "Harivansh Rai Bachchan"],
        "options_hi": ["निराला", "शिवपूजन सहाय", "प्रेमचंद", "हरिवंश राय बच्चन"],
        "answer_en": "Nirala",
        "answer_hi": "निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 80,
        "question_en": "Who wrote 'Sahitya Ke Swar'?",
        "question_hi": "'साहित्य के स्वर' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Shivpujan Sahay", "Harivansh Rai Bachchan", "Vishnu Prabhakar"],
        "options_hi": ["प्रेमचंद", "शिवपूजन सहाय", "हरिवंश राय बच्चन", "विष्णु प्रभाकर"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 81,
        "question_en": "Who wrote 'Chandni'?",
        "question_hi": "'चाँदनी' के लेखक कौन हैं?",
        "options_en": ["Nirala", "Harivansh Rai Bachchan", "Shivpujan Sahay", "Ramdhari Singh Dinkar"],
        "options_hi": ["निराला", "हरिवंश राय बच्चन", "शिवपूजन सहाय", "रामधारी सिंह दिनकर"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 82,
        "question_en": "Who wrote 'Vichar Darshan'?",
        "question_hi": "'विचार दर्शन' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Premchand", "Harivansh Rai Bachchan", "Nirala"],
        "options_hi": ["शिवपूजन सहाय", "प्रेमचंद", "हरिवंश राय बच्चन", "निराला"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 83,
        "question_en": "Who wrote 'Tara'?",
        "question_hi": "'तारा' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Shivpujan Sahay", "Harivansh Rai Bachchan", "Nirala"],
        "options_hi": ["प्रेमचंद", "शिवपूजन सहाय", "हरिवंश राय बच्चन", "निराला"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 84,
        "question_en": "Who wrote 'Samvedana'?",
        "question_hi": "'संवेदना' के लेखक कौन हैं?",
        "options_en": ["Nirala", "Harivansh Rai Bachchan", "Premchand", "Shivpujan Sahay"],
        "options_hi": ["निराला", "हरिवंश राय बच्चन", "प्रेमचंद", "शिवपूजन सहाय"],
        "answer_en": "Nirala",
        "answer_hi": "निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 85,
        "question_en": "Who wrote 'Geet Ganga'?",
        "question_hi": "'गीत गंगा' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Shivpujan Sahay", "Premchand", "Nirala"],
        "options_hi": ["हरिवंश राय बच्चन", "शिवपूजन सहाय", "प्रेमचंद", "निराला"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 86,
        "question_en": "Who wrote 'Madhushala'?",
        "question_hi": "'मधुशाला' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Shivpujan Sahay", "Premchand", "Ramdhari Singh Dinkar"],
        "options_hi": ["हरिवंश राय बच्चन", "शिवपूजन सहाय", "प्रेमचंद", "रामधारी सिंह दिनकर"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 87,
        "question_en": "Who wrote 'Vichar Manthan'?",
        "question_hi": "'विचार मंथन' के लेखक कौन हैं?",
        "options_en": ["Vishnu Prabhakar", "Shivpujan Sahay", "Harivansh Rai Bachchan", "Premchand"],
        "options_hi": ["विष्णु प्रभाकर", "शिवपूजन सहाय", "हरिवंश राय बच्चन", "प्रेमचंद"],
        "answer_en": "Vishnu Prabhakar",
        "answer_hi": "विष्णु प्रभाकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 88,
        "question_en": "Who wrote 'Samaaj Shastra'?",
        "question_hi": "'समाज शास्त्र' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Premchand", "Harivansh Rai Bachchan", "Nirala"],
        "options_hi": ["शिवपूजन सहाय", "प्रेमचंद", "हरिवंश राय बच्चन", "निराला"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 89,
        "question_en": "Who wrote 'Katha Kalpana'?",
        "question_hi": "'कथा कल्पना' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Shivpujan Sahay", "Nirala", "Harivansh Rai Bachchan"],
        "options_hi": ["प्रेमचंद", "शिवपूजन सहाय", "निराला", "हरिवंश राय बच्चन"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 90,
        "question_en": "Who wrote 'Yugantar'?",
        "question_hi": "'युगांतर' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Premchand", "Nirala", "Harivansh Rai Bachchan"],
        "options_hi": ["शिवपूजन सहाय", "प्रेमचंद", "निराला", "हरिवंश राय बच्चन"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 91,
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
        "num": 92,
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
        "num": 93,
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
        "num": 94,
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
        "num": 95,
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
        "num": 96,
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
        "num": 97,
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
        "num": 98,
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
        "num": 99,
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
        "num": 100,
        "question_en": "Who wrote 'Chandrayaan'?",
        "question_hi": "'चंद्रयान' के लेखक कौन हैं?",
        "options_en": ["Vishnu Prabhakar", "Shivpujan Sahay", "Premchand", "Harivansh Rai Bachchan"],
        "options_hi": ["विष्णु प्रभाकर", "शिवपूजन सहाय", "प्रेमचंद", "हरिवंश राय बच्चन"],
        "answer_en": "Vishnu Prabhakar",
        "answer_hi": "विष्णु प्रभाकर",
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