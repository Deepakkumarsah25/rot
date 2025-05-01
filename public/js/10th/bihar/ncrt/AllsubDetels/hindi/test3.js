
const questions = [
    {
      "num": 1,
      "question_en": "Who wrote the poem 'Jeevan ki Nayi Soch'?",
      "question_hi": "'जीवन की नई सोच' कविता के लेखक कौन हैं?",
      "options_en": ["Bachchan", "Mahadevi Verma", "Ramdhari Singh Dinkar", "Nirala"],
      "options_hi": ["बच्चन", "महादेवी वर्मा", "रामधारी सिंह दिनकर", "निराला"],
      "answer_en": "Ramdhari Singh Dinkar",
      "answer_hi": "रामधारी सिंह दिनकर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "Who is considered as the 'Madhushala' poet in Hindi literature?",
      "question_hi": "हिंदी साहित्य में 'मधुशाला' के कवि के रूप में किसे जाना जाता है?",
      "options_en": ["Bachchan", "Nirala", "Mahadevi Verma", "Sumitranandan Pant"],
      "options_hi": ["बच्चन", "निराला", "महादेवी वर्मा", "सुमित्रानंदन पंत"],
      "answer_en": "Bachchan",
      "answer_hi": "बच्चन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "Who wrote 'Ramcharitmanas'?",
      "question_hi": "'रामचरितमानस' किसने लिखा?",
      "options_en": ["Tulsidas", "Bachchan", "Ramdhari Singh Dinkar", "Nirala"],
      "options_hi": ["तुलसीदास", "बच्चन", "रामधारी सिंह दिनकर", "निराला"],
      "answer_en": "Tulsidas",
      "answer_hi": "तुलसीदास",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "What is the main theme of 'Rashmirathi'?",
      "question_hi": "'रश्मिरथी' का मुख्य विषय क्या है?",
      "options_en": ["Life and struggles", "Victory and defeat", "Heroism", "Philosophy of life"],
      "options_hi": ["जीवन और संघर्ष", "विजय और पराजय", "वीरता", "जीवन का दर्शन"],
      "answer_en": "Heroism",
      "answer_hi": "वीरता",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "Who wrote 'Panchlight'?",
      "question_hi": "'पंचलाइट' कविता के लेखक कौन हैं?",
      "options_en": ["Sumitranandan Pant", "Bachchan", "Mahadevi Verma", "Ramdhari Singh Dinkar"],
      "options_hi": ["सुमित्रानंदन पंत", "बच्चन", "महादेवी वर्मा", "रामधारी सिंह दिनकर"],
      "answer_en": "Sumitranandan Pant",
      "answer_hi": "सुमित्रानंदन पंत",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "Which poet wrote 'Manushyata'?",
      "question_hi": "'मानवता' कविता के लेखक कौन हैं?",
      "options_en": ["Bachchan", "Mahadevi Verma", "Ramdhari Singh Dinkar", "Nirala"],
      "options_hi": ["बच्चन", "महादेवी वर्मा", "रामधारी सिंह दिनकर", "निराला"],
      "answer_en": "Mahadevi Verma",
      "answer_hi": "महादेवी वर्मा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "Who is the author of 'Yahi Sach Hai'?",
      "question_hi": "'यही सच है' के लेखक कौन हैं?",
      "options_en": ["Nirala", "Ramdhari Singh Dinkar", "Bachchan", "Mahadevi Verma"],
      "options_hi": ["निराला", "रामधारी सिंह दिनकर", "बच्चन", "महादेवी वर्मा"],
      "answer_en": "Bachchan",
      "answer_hi": "बच्चन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "Which poet is known for the poem 'Vikram Aur Betaal'?",
      "question_hi": "'विक्रम और बेताल' कविता के लिए किसे जाना जाता है?",
      "options_en": ["Ramdhari Singh Dinkar", "Nirala", "Bachchan", "Tulsidas"],
      "options_hi": ["रामधारी सिंह दिनकर", "निराला", "बच्चन", "तुलसीदास"],
      "answer_en": "Bachchan",
      "answer_hi": "बच्चन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "Which poet is associated with 'Rashmirathi'?",
      "question_hi": "'रश्मिरथी' से किस कवि का संबंध है?",
      "options_en": ["Ramdhari Singh Dinkar", "Bachchan", "Tulsidas", "Sumitranandan Pant"],
      "options_hi": ["रामधारी सिंह दिनकर", "बच्चन", "तुलसीदास", "सुमित्रानंदन पंत"],
      "answer_en": "Ramdhari Singh Dinkar",
      "answer_hi": "रामधारी सिंह दिनकर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "Who is the poet of 'Kavyanjali'?",
      "question_hi": "'काव्यांजलि' के कवि कौन हैं?",
      "options_en": ["Nirala", "Mahadevi Verma", "Bachchan", "Sumitranandan Pant"],
      "options_hi": ["निराला", "महादेवी वर्मा", "बच्चन", "सुमित्रानंदन पंत"],
      "answer_en": "Mahadevi Verma",
      "answer_hi": "महादेवी वर्मा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "What is the theme of the poem 'Madhushala'?",
      "question_hi": "'मधुशाला' कविता का विषय क्या है?",
      "options_en": ["Alcoholism", "Philosophy", "Life and death", "Struggles of life"],
      "options_hi": ["मद्यपान", "दर्शन", "जीवन और मृत्यु", "जीवन के संघर्ष"],
      "answer_en": "Alcoholism",
      "answer_hi": "मद्यपान",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "Which of the following poets wrote about the philosophy of life?",
      "question_hi": "निम्नलिखित में से कौन कवि जीवन के दर्शन के बारे में लिखा है?",
      "options_en": ["Nirala", "Mahadevi Verma", "Bachchan", "Ramdhari Singh Dinkar"],
      "options_hi": ["निराला", "महादेवी वर्मा", "बच्चन", "रामधारी सिंह दिनकर"],
      "answer_en": "Nirala",
      "answer_hi": "निराला",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "Who wrote 'Shabnam'?",
      "question_hi": "'शबनम' कविता के लेखक कौन हैं?",
      "options_en": ["Mahadevi Verma", "Bachchan", "Sumitranandan Pant", "Ramdhari Singh Dinkar"],
      "options_hi": ["महादेवी वर्मा", "बच्चन", "सुमित्रानंदन पंत", "रामधारी सिंह दिनकर"],
      "answer_en": "Mahadevi Verma",
      "answer_hi": "महादेवी वर्मा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "Who is the author of 'Yadgar-e-Tehrir'?",
      "question_hi": "'यादगार-ए-तहरीर' के लेखक कौन हैं?",
      "options_en": ["Ramdhari Singh Dinkar", "Bachchan", "Nirala", "Sumitranandan Pant"],
      "options_hi": ["रामधारी सिंह दिनकर", "बच्चन", "निराला", "सुमित्रानंदन पंत"],
      "answer_en": "Nirala",
      "answer_hi": "निराला",
      "attempted": false,
      "selected": ""
    },
    {
        "num": 15,
        "question_en": "Who wrote 'Aapki Yaad Aati Hai'?",
        "question_hi": "'आपकी याद आती है' कविता के लेखक कौन हैं?",
        "options_en": ["Bachchan", "Ramdhari Singh Dinkar", "Mahadevi Verma", "Nirala"],
        "options_hi": ["बच्चन", "रामधारी सिंह दिनकर", "महादेवी वर्मा", "निराला"],
        "answer_en": "Bachchan",
        "answer_hi": "बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "Which poet is known for his poems on nature?",
        "question_hi": "प्रकृति पर अपनी कविताओं के लिए किसे जाना जाता है?",
        "options_en": ["Nirala", "Ramdhari Singh Dinkar", "Bachchan", "Sumitranandan Pant"],
        "options_hi": ["निराला", "रामधारी सिंह दिनकर", "बच्चन", "सुमित्रानंदन पंत"],
        "answer_en": "Sumitranandan Pant",
        "answer_hi": "सुमित्रानंदन पंत",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "Which of the following works is written by Mahadevi Verma?",
        "question_hi": "निम्नलिखित में से कौन सा कार्य महादेवी वर्मा द्वारा लिखा गया है?",
        "options_en": ["Yadgar-e-Tehrir", "Panchlight", "Shabnam", "Rashmirathi"],
        "options_hi": ["यादगार-ए-तहरीर", "पंचलाइट", "शबनम", "रश्मिरथी"],
        "answer_en": "Shabnam",
        "answer_hi": "शबनम",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Who is the author of 'Do Chattane'?",
        "question_hi": "'दो छतने' के लेखक कौन हैं?",
        "options_en": ["Bachchan", "Ramdhari Singh Dinkar", "Nirala", "Mahadevi Verma"],
        "options_hi": ["बच्चन", "रामधारी सिंह दिनकर", "निराला", "महादेवी वर्मा"],
        "answer_en": "Bachchan",
        "answer_hi": "बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "Which poet wrote 'Aarti'?",
        "question_hi": "'आरती' कविता के लेखक कौन हैं?",
        "options_en": ["Bachchan", "Nirala", "Mahadevi Verma", "Ramdhari Singh Dinkar"],
        "options_hi": ["बच्चन", "निराला", "महादेवी वर्मा", "रामधारी सिंह दिनकर"],
        "answer_en": "Nirala",
        "answer_hi": "निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "What is the subject of 'Chandni Raat'?",
        "question_hi": "'चाँदनी रात' का विषय क्या है?",
        "options_en": ["Night and nature", "Love", "Philosophy of life", "Human struggles"],
        "options_hi": ["रात और प्रकृति", "प्रेम", "जीवन का दर्शन", "मानव संघर्ष"],
        "answer_en": "Night and nature",
        "answer_hi": "रात और प्रकृति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Who is the author of 'Rashmirathi'?",
        "question_hi": "'रश्मिरथी' के लेखक कौन हैं?",
        "options_en": ["Ramdhari Singh Dinkar", "Bachchan", "Nirala", "Tulsidas"],
        "options_hi": ["रामधारी सिंह दिनकर", "बच्चन", "निराला", "तुलसीदास"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "What is the central theme of 'Madhushala'?",
        "question_hi": "'मधुशाला' का केंद्रीय विषय क्या है?",
        "options_en": ["Alcoholism", "Life and nature", "Philosophy", "Love and sacrifice"],
        "options_hi": ["मद्यपान", "जीवन और प्रकृति", "दर्शन", "प्रेम और बलिदान"],
        "answer_en": "Alcoholism",
        "answer_hi": "मद्यपान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Who wrote 'Draupadi'?",
        "question_hi": "'द्रौपदी' कविता के लेखक कौन हैं?",
        "options_en": ["Nirala", "Bachchan", "Ramdhari Singh Dinkar", "Mahadevi Verma"],
        "options_hi": ["निराला", "बच्चन", "रामधारी सिंह दिनकर", "महादेवी वर्मा"],
        "answer_en": "Mahadevi Verma",
        "answer_hi": "महादेवी वर्मा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Which poet's works are associated with 'Veer Gatha'?",
        "question_hi": "किस कवि के काव्य 'वीर गाथा' से संबंधित हैं?",
        "options_en": ["Ramdhari Singh Dinkar", "Bachchan", "Tulsidas", "Sumitranandan Pant"],
        "options_hi": ["रामधारी सिंह दिनकर", "बच्चन", "तुलसीदास", "सुमित्रानंदन पंत"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "What is the theme of 'Aarti' by Nirala?",
        "question_hi": "निराला की 'आरती' कविता का विषय क्या है?",
        "options_en": ["Life struggles", "Philosophy", "Nature", "Worship and devotion"],
        "options_hi": ["जीवन के संघर्ष", "दर्शन", "प्रकृति", "पूजा और भक्ति"],
        "answer_en": "Worship and devotion",
        "answer_hi": "पूजा और भक्ति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "Who wrote 'Gitanjali'?",
        "question_hi": "'गीतांजलि' के लेखक कौन हैं?",
        "options_en": ["Rabindranath Tagore", "Bachchan", "Nirala", "Ramdhari Singh Dinkar"],
        "options_hi": ["रवींद्रनाथ ठाकुर", "बच्चन", "निराला", "रामधारी सिंह दिनकर"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रवींद्रनाथ ठाकुर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "Which poet wrote 'Koshish Karne Walon Ki Kabhi Har Nahi Hoti'?",
        "question_hi": "'कोशिश करने वालों की कभी हार नहीं होती' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Ramdhari Singh Dinkar", "Mahadevi Verma", "Nirala"],
        "options_hi": ["हरिवंश राय बच्चन", "रामधारी सिंह दिनकर", "महादेवी वर्मा", "निराला"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "Who is known for the poem 'Madhushala'?",
        "question_hi": "'मधुशाला' कविता के लिए कौन प्रसिद्ध हैं?",
        "options_en": ["Bachchan", "Ramdhari Singh Dinkar", "Sumitranandan Pant", "Tulsidas"],
        "options_hi": ["बच्चन", "रामधारी सिंह दिनकर", "सुमित्रानंदन पंत", "तुलसीदास"],
        "answer_en": "Bachchan",
        "answer_hi": "बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "Which poet's works are associated with 'Nayi Soch'?",
        "question_hi": "किस कवि के काव्य 'नई सोच' से संबंधित हैं?",
        "options_en": ["Bachchan", "Ramdhari Singh Dinkar", "Nirala", "Mahadevi Verma"],
        "options_hi": ["बच्चन", "रामधारी सिंह दिनकर", "निराला", "महादेवी वर्मा"],
        "answer_en": "Nirala",
        "answer_hi": "निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "Who is known as the poet of the common man in Hindi literature?",
        "question_hi": "हिंदी साहित्य में आम आदमी के कवि के रूप में किसे जाना जाता है?",
        "options_en": ["Nirala", "Ramdhari Singh Dinkar", "Bachchan", "Phanishwar Nath Renu"],
        "options_hi": ["निराला", "रामधारी सिंह दिनकर", "बच्चन", "फणीश्वर नाथ रेणु"],
        "answer_en": "Phanishwar Nath Renu",
        "answer_hi": "फणीश्वर नाथ रेणु",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Who wrote 'Yatharth'?",
        "question_hi": "'यथार्थ' के लेखक कौन हैं?",
        "options_en": ["Nirala", "Bachchan", "Tulsidas", "Ramdhari Singh Dinkar"],
        "options_hi": ["निराला", "बच्चन", "तुलसीदास", "रामधारी सिंह दिनकर"],
        "answer_en": "Nirala",
        "answer_hi": "निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "Who wrote 'Chidambara'?",
        "question_hi": "'चिदंबर' के लेखक कौन हैं?",
        "options_en": ["Nirala", "Bachchan", "Ramdhari Singh Dinkar", "Sumitranandan Pant"],
        "options_hi": ["निराला", "बच्चन", "रामधारी सिंह दिनकर", "सुमित्रानंदन पंत"],
        "answer_en": "Nirala",
        "answer_hi": "निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "Who wrote 'Hadiya'?",
        "question_hi": "'हादिया' के लेखक कौन हैं?",
        "options_en": ["Sumitranandan Pant", "Nirala", "Mahadevi Verma", "Bachchan"],
        "options_hi": ["सुमित्रानंदन पंत", "निराला", "महादेवी वर्मा", "बच्चन"],
        "answer_en": "Sumitranandan Pant",
        "answer_hi": "सुमित्रानंदन पंत",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "Who wrote the poem 'Chandni'?",
        "question_hi": "'चाँदनी' कविता के लेखक कौन हैं?",
        "options_en": ["Mahadevi Verma", "Bachchan", "Nirala", "Ramdhari Singh Dinkar"],
        "options_hi": ["महादेवी वर्मा", "बच्चन", "निराला", "रामधारी सिंह दिनकर"],
        "answer_en": "Mahadevi Verma",
        "answer_hi": "महादेवी वर्मा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "What is the theme of 'Triveni'?",
        "question_hi": "'त्रिवेणी' का विषय क्या है?",
        "options_en": ["Philosophy", "Human emotions", "Love and separation", "Nationalism"],
        "options_hi": ["दर्शन", "मानव भावनाएँ", "प्रेम और विरह", "राष्ट्रवाद"],
        "answer_en": "Human emotions",
        "answer_hi": "मानव भावनाएँ",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "Who wrote 'Aarti' in the context of Hindi literature?",
        "question_hi": "हिंदी साहित्य में 'आरती' कविता के लेखक कौन हैं?",
        "options_en": ["Ramdhari Singh Dinkar", "Bachchan", "Nirala", "Tulsidas"],
        "options_hi": ["रामधारी सिंह दिनकर", "बच्चन", "निराला", "तुलसीदास"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "Who is known for the poem 'Bapu Ki Prarthana'?",
        "question_hi": "'बापू की प्रार्थना' कविता के लिए कौन प्रसिद्ध हैं?",
        "options_en": ["Ramdhari Singh Dinkar", "Nirala", "Mahadevi Verma", "Bachchan"],
        "options_hi": ["रामधारी सिंह दिनकर", "निराला", "महादेवी वर्मा", "बच्चन"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "What is the main theme of 'Madhushala'?",
        "question_hi": "'मधुशाला' का मुख्य विषय क्या है?",
        "options_en": ["Philosophy", "Nature", "Wine and Life", "Love"],
        "options_hi": ["दर्शन", "प्रकृति", "मद्य और जीवन", "प्रेम"],
        "answer_en": "Wine and Life",
        "answer_hi": "मद्य और जीवन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Who wrote 'Suman Suman'?",
        "question_hi": "'सुमन सुमन' के लेखक कौन हैं?",
        "options_en": ["Bachchan", "Nirala", "Sumitranandan Pant", "Mahadevi Verma"],
        "options_hi": ["बच्चन", "निराला", "सुमित्रानंदन पंत", "महादेवी वर्मा"],
        "answer_en": "Sumitranandan Pant",
        "answer_hi": "सुमित्रानंदन पंत",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "Who wrote 'Sankalpa'?",
        "question_hi": "'संकल्प' के लेखक कौन हैं?",
        "options_en": ["Nirala", "Ramdhari Singh Dinkar", "Bachchan", "Mahadevi Verma"],
        "options_hi": ["निराला", "रामधारी सिंह दिनकर", "बच्चन", "महादेवी वर्मा"],
        "answer_en": "Nirala",
        "answer_hi": "निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "Who is the author of the poem 'Jeevan'?",
        "question_hi": "'जीवन' कविता के लेखक कौन हैं?",
        "options_en": ["Nirala", "Bachchan", "Sumitranandan Pant", "Ramdhari Singh Dinkar"],
        "options_hi": ["निराला", "बच्चन", "सुमित्रानंदन पंत", "रामधारी सिंह दिनकर"],
        "answer_en": "Sumitranandan Pant",
        "answer_hi": "सुमित्रानंदन पंत",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Who wrote 'Madhuri'?",
        "question_hi": "'मधुरी' के लेखक कौन हैं?",
        "options_en": ["Bachchan", "Ramdhari Singh Dinkar", "Mahadevi Verma", "Nirala"],
        "options_hi": ["बच्चन", "रामधारी सिंह दिनकर", "महादेवी वर्मा", "निराला"],
        "answer_en": "Bachchan",
        "answer_hi": "बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Who wrote 'Chhaya'?",
        "question_hi": "'छाया' के लेखक कौन हैं?",
        "options_en": ["Mahadevi Verma", "Nirala", "Bachchan", "Ramdhari Singh Dinkar"],
        "options_hi": ["महादेवी वर्मा", "निराला", "बच्चन", "रामधारी सिंह दिनकर"],
        "answer_en": "Mahadevi Verma",
        "answer_hi": "महादेवी वर्मा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "Who wrote 'Jeevan Ka Ek Hi Rasta Hai'?",
        "question_hi": "'जीवन का एक ही रास्ता है' के लेखक कौन हैं?",
        "options_en": ["Ramdhari Singh Dinkar", "Mahadevi Verma", "Bachchan", "Nirala"],
        "options_hi": ["रामधारी सिंह दिनकर", "महादेवी वर्मा", "बच्चन", "निराला"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Who is the author of 'Bapu Ki Prarthana'?",
        "question_hi": "'बापू की प्रार्थना' के लेखक कौन हैं?",
        "options_en": ["Ramdhari Singh Dinkar", "Bachchan", "Mahadevi Verma", "Nirala"],
        "options_hi": ["रामधारी सिंह दिनकर", "बच्चन", "महादेवी वर्मा", "निराला"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "Who is the author of 'Swayamvar'?",
        "question_hi": "'स्वयंवर' के लेखक कौन हैं?",
        "options_en": ["Ramdhari Singh Dinkar", "Bachchan", "Sumitranandan Pant", "Mahadevi Verma"],
        "options_hi": ["रामधारी सिंह दिनकर", "बच्चन", "सुमित्रानंदन पंत", "महादेवी वर्मा"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Who is known as the poet of Indian revolution?",
        "question_hi": "भारतीय क्रांति के कवि के रूप में किसे जाना जाता है?",
        "options_en": ["Subramania Bharati", "Ramdhari Singh Dinkar", "Bachchan", "Nirala"],
        "options_hi": ["सुब्रमणिया भारती", "रामधारी सिंह दिनकर", "बच्चन", "निराला"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "Who wrote 'Satyagraha'?",
        "question_hi": "'सत्याग्रह' के लेखक कौन हैं?",
        "options_en": ["Bachchan", "Ramdhari Singh Dinkar", "Nirala", "Sumitranandan Pant"],
        "options_hi": ["बच्चन", "रामधारी सिंह दिनकर", "निराला", "सुमित्रानंदन पंत"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "Who wrote 'Draupadi'?",
        "question_hi": "'द्रौपदी' के लेखक कौन हैं?",
        "options_en": ["Bachchan", "Nirala", "Mahadevi Verma", "Ramdhari Singh Dinkar"],
        "options_hi": ["बच्चन", "निराला", "महादेवी वर्मा", "रामधारी सिंह दिनकर"],
        "answer_en": "Mahadevi Verma",
        "answer_hi": "महादेवी वर्मा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "Who wrote 'Geetanjali'?",
        "question_hi": "'गीतांजलि' के लेखक कौन हैं?",
        "options_en": ["Rabindranath Tagore", "Nirala", "Bachchan", "Ramdhari Singh Dinkar"],
        "options_hi": ["रवींद्रनाथ ठाकुर", "निराला", "बच्चन", "रामधारी सिंह दिनकर"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रवींद्रनाथ ठाकुर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 51,
        "question_en": "Who wrote 'Prithvi Ki Raat'?",
        "question_hi": "'पृथ्वी की रात' के लेखक कौन हैं?",
        "options_en": ["Sumitranandan Pant", "Bachchan", "Nirala", "Mahadevi Verma"],
        "options_hi": ["सुमित्रानंदन पंत", "बच्चन", "निराला", "महादेवी वर्मा"],
        "answer_en": "Sumitranandan Pant",
        "answer_hi": "सुमित्रानंदन पंत",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 52,
        "question_en": "Who wrote 'Krishna Ki Prarthana'?",
        "question_hi": "'कृष्णा की प्रार्थना' के लेखक कौन हैं?",
        "options_en": ["Ramdhari Singh Dinkar", "Mahadevi Verma", "Nirala", "Bachchan"],
        "options_hi": ["रामधारी सिंह दिनकर", "महादेवी वर्मा", "निराला", "बच्चन"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 53,
        "question_en": "Who wrote 'Yugant'?",
        "question_hi": "'युगांत' के लेखक कौन हैं?",
        "options_en": ["Nirala", "Ramdhari Singh Dinkar", "Mahadevi Verma", "Bachchan"],
        "options_hi": ["निराला", "रामधारी सिंह दिनकर", "महादेवी वर्मा", "बच्चन"],
        "answer_en": "Nirala",
        "answer_hi": "निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 54,
        "question_en": "Who is the author of 'Anand Math'?",
        "question_hi": "'आनंदमठ' के लेखक कौन हैं?",
        "options_en": ["Bankim Chandra Chattopadhyay", "Rabindranath Tagore", "Premchand", "Nirala"],
        "options_hi": ["बंकिम चंद्र चट्टोपाध्याय", "रवींद्रनाथ ठाकुर", "प्रेमचंद", "निराला"],
        "answer_en": "Bankim Chandra Chattopadhyay",
        "answer_hi": "बंकिम चंद्र चट्टोपाध्याय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 55,
        "question_en": "Who wrote 'Chhand'?",
        "question_hi": "'छंद' के लेखक कौन हैं?",
        "options_en": ["Nirala", "Ramdhari Singh Dinkar", "Bachchan", "Sumitranandan Pant"],
        "options_hi": ["निराला", "रामधारी सिंह दिनकर", "बच्चन", "सुमित्रानंदन पंत"],
        "answer_en": "Nirala",
        "answer_hi": "निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 56,
        "question_en": "Who wrote 'Anubhuti'?",
        "question_hi": "'अनुभूति' के लेखक कौन हैं?",
        "options_en": ["Mahadevi Verma", "Ramdhari Singh Dinkar", "Bachchan", "Nirala"],
        "options_hi": ["महादेवी वर्मा", "रामधारी सिंह दिनकर", "बच्चन", "निराला"],
        "answer_en": "Mahadevi Verma",
        "answer_hi": "महादेवी वर्मा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 57,
        "question_en": "Who wrote 'Chhote Logon Ki Dunia'?",
        "question_hi": "'छोटे लोगों की दुनिया' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Shivpujan Sahay", "Phanishwar Nath Renu", "Ramdhari Singh Dinkar"],
        "options_hi": ["प्रेमचंद", "शिवपूजन सहाय", "फणीश्वर नाथ रेणु", "रामधारी सिंह दिनकर"],
        "answer_en": "Phanishwar Nath Renu",
        "answer_hi": "फणीश्वर नाथ रेणु",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 58,
        "question_en": "Who wrote 'Satire'?",
        "question_hi": "'सैटायर' के लेखक कौन हैं?",
        "options_en": ["Nirala", "Ramdhari Singh Dinkar", "Bachchan", "Mahadevi Verma"],
        "options_hi": ["निराला", "रामधारी सिंह दिनकर", "बच्चन", "महादेवी वर्मा"],
        "answer_en": "Nirala",
        "answer_hi": "निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 59,
        "question_en": "Who is the author of 'Gitanjali'?",
        "question_hi": "'गीतांजलि' के लेखक कौन हैं?",
        "options_en": ["Rabindranath Tagore", "Sumitranandan Pant", "Bachchan", "Mahadevi Verma"],
        "options_hi": ["रवींद्रनाथ ठाकुर", "सुमित्रानंदन पंत", "बच्चन", "महादेवी वर्मा"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रवींद्रनाथ ठाकुर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 60,
        "question_en": "Who wrote 'Gobar'?",
        "question_hi": "'गोबर' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Bachchan", "Nirala", "Ramdhari Singh Dinkar"],
        "options_hi": ["प्रेमचंद", "बच्चन", "निराला", "रामधारी सिंह दिनकर"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 61,
        "question_en": "Who wrote 'Rangdari'?",
        "question_hi": "'रंगदारी' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Bachchan", "Shivpujan Sahay", "Ramdhari Singh Dinkar"],
        "options_hi": ["प्रेमचंद", "बच्चन", "शिवपूजन सहाय", "रामधारी सिंह दिनकर"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 62,
        "question_en": "Who is the author of 'Madhushala'?",
        "question_hi": "'मधुशाला' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Ramdhari Singh Dinkar", "Sumitranandan Pant", "Bachchan"],
        "options_hi": ["हरिवंश राय बच्चन", "रामधारी सिंह दिनकर", "सुमित्रानंदन पंत", "बच्चन"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 63,
        "question_en": "Who wrote 'Satyarth Prakash'?",
        "question_hi": "'सत्यार्थ प्रकाश' के लेखक कौन हैं?",
        "options_en": ["Swami Dayanand Saraswati", "Mahatma Gandhi", "Pandit Jawaharlal Nehru", "Swami Vivekananda"],
        "options_hi": ["स्वामी दयानंद सरस्वती", "महात्मा गांधी", "पंडित जवाहरलाल नेहरू", "स्वामी विवेकानंद"],
        "answer_en": "Swami Dayanand Saraswati",
        "answer_hi": "स्वामी दयानंद सरस्वती",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 64,
        "question_en": "Who is the author of 'Bharatiya Sahitya ka Itihas'?",
        "question_hi": "'भारतीय साहित्य का इतिहास' के लेखक कौन हैं?",
        "options_en": ["K.K. Aziz", "S. S. Suryan", "P. C. Ray", "N. C. Choudhury"],
        "options_hi": ["के.के. अजीज", "एस.एस. सूर्यन", "पी.सी. राय", "एन.सी. चौधरी"],
        "answer_en": "K.K. Aziz",
        "answer_hi": "के.के. अजीज",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 65,
        "question_en": "Who wrote 'Patrakarita ke Prarambh'?",
        "question_hi": "'पत्रकारिता के प्रारंभ' के लेखक कौन हैं?",
        "options_en": ["Mahadevi Verma", "Ramdhari Singh Dinkar", "Prachand Sinha", "Shivpujan Sahay"],
        "options_hi": ["महादेवी वर्मा", "रामधारी सिंह दिनकर", "प्रचंड सिन्हा", "शिवपूजन सहाय"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 66,
        "question_en": "Who wrote 'Gandhi Ji ki Aati'?",
        "question_hi": "'गांधी जी की आति' के लेखक कौन हैं?",
        "options_en": ["Mahatma Gandhi", "Nehru", "Ravindra Nath Tagore", "Lal Bahadur Shastri"],
        "options_hi": ["महात्मा गांधी", "नेहरू", "रवींद्रनाथ ठाकुर", "लाल बहादुर शास्त्री"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 67,
        "question_en": "Who wrote 'Akshay Baat'?",
        "question_hi": "'अक्षय बात' के लेखक कौन हैं?",
        "options_en": ["Nirala", "Sumitranandan Pant", "Shivpujan Sahay", "Premchand"],
        "options_hi": ["निराला", "सुमित्रानंदन पंत", "शिवपूजन सहाय", "प्रेमचंद"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 68,
        "question_en": "Who wrote 'Kavita ki Pahchaan'?",
        "question_hi": "'कविता की पहचान' के लेखक कौन हैं?",
        "options_en": ["Mahadevi Verma", "Sumitranandan Pant", "Ramdhari Singh Dinkar", "Bachchan"],
        "options_hi": ["महादेवी वर्मा", "सुमित्रानंदन पंत", "रामधारी सिंह दिनकर", "बच्चन"],
        "answer_en": "Sumitranandan Pant",
        "answer_hi": "सुमित्रानंदन पंत",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 69,
        "question_en": "Who is the author of 'Urdu Hindi Sangam'?",
        "question_hi": "'उर्दू हिंदी संगम' के लेखक कौन हैं?",
        "options_en": ["Mirza Ghalib", "Faiz Ahmed Faiz", "Maqbool Fida Husain", "Shivpujan Sahay"],
        "options_hi": ["मिर्ज़ा ग़ालिब", "फ़ैज़ अहमद फ़ैज़", "मक़बूल फ़िदा हुसैन", "शिवपूजन सहाय"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 70,
        "question_en": "Who wrote 'Puranas and Vedic Literature'?",
        "question_hi": "'पुराण और वैदिक साहित्य' के लेखक कौन हैं?",
        "options_en": ["S. K. Ram", "Y. B. Hegde", "N. C. Sharma", "S. R. Sharma"],
        "options_hi": ["एस. के. राम", "वाई. बी. हेगडे", "एन. सी. शर्मा", "एस. आर. शर्मा"],
        "answer_en": "S. K. Ram",
        "answer_hi": "एस. के. राम",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 71,
        "question_en": "Who is the author of 'Naari Ki Naitikta'?",
        "question_hi": "'नारी की नैतिकता' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Pandit Jawaharlal Nehru", "Bachchan", "Brahma Swaroop"],
        "options_hi": ["शिवपूजन सहाय", "पंडित जवाहरलाल नेहरू", "बच्चन", "ब्राह्म स्वारूप"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 72,
        "question_en": "Who wrote 'Gitanjali'?",
        "question_hi": "'गीतांजलि' के लेखक कौन हैं?",
        "options_en": ["Rabindranath Tagore", "Sumitranandan Pant", "Bachchan", "Harivansh Rai Bachchan"],
        "options_hi": ["रवींद्रनाथ ठाकुर", "सुमित्रानंदन पंत", "बच्चन", "हरिवंश राय बच्चन"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रवींद्रनाथ ठाकुर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 73,
        "question_en": "Who wrote 'Shahabad Ki Raat'?",
        "question_hi": "'शाहाबाद की रात' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Phanishwar Nath Renu", "Ramdhari Singh Dinkar", "Premchand"],
        "options_hi": ["शिवपूजन सहाय", "फणीश्वर नाथ रेणु", "रामधारी सिंह दिनकर", "प्रेमचंद"],
        "answer_en": "Phanishwar Nath Renu",
        "answer_hi": "फणीश्वर नाथ रेणु",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 74,
        "question_en": "Who wrote 'Doosra Daur'?",
        "question_hi": "'दूसरा दौर' के लेखक कौन हैं?",
        "options_en": ["Ramdhari Singh Dinkar", "Phanishwar Nath Renu", "Bachchan", "Premchand"],
        "options_hi": ["रामधारी सिंह दिनकर", "फणीश्वर नाथ रेणु", "बच्चन", "प्रेमचंद"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 75,
        "question_en": "Who wrote 'Baal Krishan ki Kahaniyan'?",
        "question_hi": "'बाल कृष्ण की कहानियाँ' के लेखक कौन हैं?",
        "options_en": ["R.K. Narayan", "Bachchan", "Shivpujan Sahay", "Tulsidas"],
        "options_hi": ["आर. के. नारायण", "बच्चन", "शिवपूजन सहाय", "तुलसीदास"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 76,
        "question_en": "Who wrote 'Nadi Ke Dweep'?",
        "question_hi": "'नदी के द्वीप' के लेखक कौन हैं?",
        "options_en": ["Jayashankar Prasad", "Nirala", "Mahadevi Verma", "Ramdhari Singh Dinkar"],
        "options_hi": ["जयशंकर प्रसाद", "निराला", "महादेवी वर्मा", "रामधारी सिंह दिनकर"],
        "answer_en": "Mahadevi Verma",
        "answer_hi": "महादेवी वर्मा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 77,
        "question_en": "Who is known as the 'Father of Hindi Fiction'?",
        "question_hi": "किसे 'हिंदी कथा साहित्य के पिता' के रूप में जाना जाता है?",
        "options_en": ["Premchand", "Bharatendu Harishchandra", "Mohan Rakesh", "Harivansh Rai Bachchan"],
        "options_hi": ["प्रेमचंद", "भारतेंदु हरिशचंद्र", "मोहन राकेश", "हरिवंश राय बच्चन"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 78,
        "question_en": "Which of the following is not written by Rabindranath Tagore?",
        "question_hi": "निम्नलिखित में से कौन रवींद्रनाथ ठाकुर द्वारा नहीं लिखा गया है?",
        "options_en": ["Gitanjali", "Chokher Bali", "Gora", "Kabuliwala"],
        "options_hi": ["गीतांजलि", "चोखेर बाली", "गोरा", "काबुलीवाला"],
        "answer_en": "Chokher Bali",
        "answer_hi": "चोखेर बाली",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 79,
        "question_en": "Who wrote the famous poem 'Madhushala'?",
        "question_hi": "'मधुशाला' नामक प्रसिद्ध कविता के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Sumitranandan Pant", "Suryakant Tripathi Nirala", "Ramdhari Singh Dinkar"],
        "options_hi": ["हरिवंश राय बच्चन", "सुमित्रानंदन पंत", "सूर्यकांत त्रिपाठी निराला", "रामधारी सिंह दिनकर"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 80,
        "question_en": "Who wrote 'Bhagavad Gita'?",
        "question_hi": "'भगवद गीता' के लेखक कौन हैं?",
        "options_en": ["Vyasa", "Valmiki", "Tulsidas", "Kalidas"],
        "options_hi": ["व्यास", "वाल्मीकि", "तुलसीदास", "कालिदास"],
        "answer_en": "Vyasa",
        "answer_hi": "व्यास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 81,
        "question_en": "Who wrote 'Kishore Ke Ghar Mein'?",
        "question_hi": "'किशोर के घर में' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Shivpujan Sahay", "Nirala", "Pradeep Chhabra"],
        "options_hi": ["हरिवंश राय बच्चन", "शिवपूजन सहाय", "निराला", "प्रदीप छाबड़ा"],
        "answer_en": "Pradeep Chhabra",
        "answer_hi": "प्रदीप छाबड़ा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 82,
        "question_en": "Who is the author of 'Rashmirathi'?",
        "question_hi": "'रश्मिरथी' के लेखक कौन हैं?",
        "options_en": ["Ramdhari Singh Dinkar", "Shivpujan Sahay", "Surya Kant Tripathi Nirala", "Harivansh Rai Bachchan"],
        "options_hi": ["रामधारी सिंह दिनकर", "शिवपूजन सहाय", "सूर्यकांत त्रिपाठी निराला", "हरिवंश राय बच्चन"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 83,
        "question_en": "Who wrote 'Chandni'?",
        "question_hi": "'चाँदनी' के लेखक कौन हैं?",
        "options_en": ["Jayashankar Prasad", "Sumitranandan Pant", "Nirala", "Mahadevi Verma"],
        "options_hi": ["जयशंकर प्रसाद", "सुमित्रानंदन पंत", "निराला", "महादेवी वर्मा"],
        "answer_en": "Jayashankar Prasad",
        "answer_hi": "जयशंकर प्रसाद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 84,
        "question_en": "Who wrote the famous poem 'Madhushala'?",
        "question_hi": "'मधुशाला' नामक प्रसिद्ध कविता के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Sumitranandan Pant", "Nirala", "Ramdhari Singh Dinkar"],
        "options_hi": ["हरिवंश राय बच्चन", "सुमित्रानंदन पंत", "निराला", "रामधारी सिंह दिनकर"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 85,
        "question_en": "Who wrote 'Panchatantra'?",
        "question_hi": "'पंचतंत्र' के लेखक कौन हैं?",
        "options_en": ["Vishnu Sharma", "Valmiki", "Kalidas", "Bharavi"],
        "options_hi": ["विश्णु शर्मा", "वाल्मीकि", "कालिदास", "भरवी"],
        "answer_en": "Vishnu Sharma",
        "answer_hi": "विश्णु शर्मा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 86,
        "question_en": "Who wrote 'Shakuntala'?",
        "question_hi": "'शकुंतला' के लेखक कौन हैं?",
        "options_en": ["Kalidas", "Tulsidas", "Jayashankar Prasad", "Bharatendu Harishchandra"],
        "options_hi": ["कालिदास", "तुलसीदास", "जयशंकर प्रसाद", "भारतेंदु हरिशचंद्र"],
        "answer_en": "Kalidas",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 87,
        "question_en": "Who wrote 'Madhushala'?",
        "question_hi": "'मधुशाला' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Tulsidas", "Sumitranandan Pant", "Nirala"],
        "options_hi": ["हरिवंश राय बच्चन", "तुलसीदास", "सुमित्रानंदन पंत", "निराला"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 88,
        "question_en": "Who is the author of 'Gitanjali'?",
        "question_hi": "'गीतांजलि' के लेखक कौन हैं?",
        "options_en": ["Rabindranath Tagore", "Vishnu Sharma", "Shivpujan Sahay", "Madhav Rao"],
        "options_hi": ["रवींद्रनाथ ठाकुर", "विश्णु शर्मा", "शिवपूजन सहाय", "माधव राव"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रवींद्रनाथ ठाकुर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 89,
        "question_en": "Who wrote 'Godan'?",
        "question_hi": "'गोदान' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Nirala", "Rabindranath Tagore", "Shivpujan Sahay"],
        "options_hi": ["प्रेमचंद", "निराला", "रवींद्रनाथ ठाकुर", "शिवपूजन सहाय"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 90,
        "question_en": "Who wrote 'Chhote Aur Bade'?",
        "question_hi": "'छोटे और बड़े' के लेखक कौन हैं?",
        "options_en": ["Phanishwar Nath Renu", "Shivpujan Sahay", "Nirala", "Ramdhari Singh Dinkar"],
        "options_hi": ["फणीश्वर नाथ रेणु", "शिवपूजन सहाय", "निराला", "रामधारी सिंह दिनकर"],
        "answer_en": "Phanishwar Nath Renu",
        "answer_hi": "फणीश्वर नाथ रेणु",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 91,
        "question_en": "Who wrote 'Madhushala'?",
        "question_hi": "'मधुशाला' के लेखक कौन हैं?",
        "options_en": ["Harivansh Rai Bachchan", "Nirala", "Ramdhari Singh Dinkar", "Sumitranandan Pant"],
        "options_hi": ["हरिवंश राय बच्चन", "निराला", "रामधारी सिंह दिनकर", "सुमित्रानंदन पंत"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 92,
        "question_en": "Who is the author of 'Ramcharitmanas'?",
        "question_hi": "'रामचरितमानस' के लेखक कौन हैं?",
        "options_en": ["Tulsidas", "Kalidas", "Valmiki", "Shivpujan Sahay"],
        "options_hi": ["तुलसीदास", "कालिदास", "वाल्मीकि", "शिवपूजन सहाय"],
        "answer_en": "Tulsidas",
        "answer_hi": "तुलसीदास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 93,
        "question_en": "Who wrote 'Chandni'?",
        "question_hi": "'चाँदनी' के लेखक कौन हैं?",
        "options_en": ["Jayashankar Prasad", "Tulsidas", "Nirala", "Harivansh Rai Bachchan"],
        "options_hi": ["जयशंकर प्रसाद", "तुलसीदास", "निराला", "हरिवंश राय बच्चन"],
        "answer_en": "Jayashankar Prasad",
        "answer_hi": "जयशंकर प्रसाद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 94,
        "question_en": "Who is known as the 'Father of Hindi Literature'?",
        "question_hi": "किसे 'हिंदी साहित्य के पिता' के रूप में जाना जाता है?",
        "options_en": ["Bharatendu Harishchandra", "Tulsidas", "Premchand", "Harivansh Rai Bachchan"],
        "options_hi": ["भारतेंदु हरिशचंद्र", "तुलसीदास", "प्रेमचंद", "हरिवंश राय बच्चन"],
        "answer_en": "Bharatendu Harishchandra",
        "answer_hi": "भारतेंदु हरिशचंद्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 95,
        "question_en": "Who wrote 'Premchand Ki Kahaniyan'?",
        "question_hi": "'प्रेमचंद की कहानियाँ' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Tulsidas", "Harivansh Rai Bachchan", "Jayashankar Prasad"],
        "options_hi": ["प्रेमचंद", "तुलसीदास", "हरिवंश राय बच्चन", "जयशंकर प्रसाद"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 96,
        "question_en": "Who wrote 'Gitanjali'?",
        "question_hi": "'गीतांजलि' के लेखक कौन हैं?",
        "options_en": ["Rabindranath Tagore", "Premchand", "Madhav Rao", "Shivpujan Sahay"],
        "options_hi": ["रवींद्रनाथ ठाकुर", "प्रेमचंद", "माधव राव", "शिवपूजन सहाय"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रवींद्रनाथ ठाकुर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 97,
        "question_en": "Who wrote 'Jeevankala'?",
        "question_hi": "'जीवनकला' के लेखक कौन हैं?",
        "options_en": ["Suryakant Tripathi Nirala", "Tulsidas", "Rabindranath Tagore", "Shivpujan Sahay"],
        "options_hi": ["सूर्यकांत त्रिपाठी निराला", "तुलसीदास", "रवींद्रनाथ ठाकुर", "शिवपूजन सहाय"],
        "answer_en": "Suryakant Tripathi Nirala",
        "answer_hi": "सूर्यकांत त्रिपाठी निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 98,
        "question_en": "Who wrote 'Vishnu Puran'?",
        "question_hi": "'विष्णु पुराण' के लेखक कौन हैं?",
        "options_en": ["Vyasa", "Tulsidas", "Valmiki", "Bharatendu Harishchandra"],
        "options_hi": ["व्यास", "तुलसीदास", "वाल्मीकि", "भारतेंदु हरिशचंद्र"],
        "answer_en": "Vyasa",
        "answer_hi": "व्यास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 99,
        "question_en": "Who is the author of 'Bhagavad Gita'?",
        "question_hi": "'भगवद गीता' के लेखक कौन हैं?",
        "options_en": ["Vyasa", "Tulsidas", "Valmiki", "Shivpujan Sahay"],
        "options_hi": ["व्यास", "तुलसीदास", "वाल्मीकि", "शिवपूजन सहाय"],
        "answer_en": "Vyasa",
        "answer_hi": "व्यास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 100,
        "question_en": "Who wrote 'Satyarth Prakash'?",
        "question_hi": "'सत्यार्थ प्रकाश' के लेखक कौन हैं?",
        "options_en": ["Swami Dayanand Saraswati", "Ramdhari Singh Dinkar", "Nirala", "Vishnu Sharma"],
        "options_hi": ["स्वामी दयानंद सरस्वती", "रामधारी सिंह दिनकर", "निराला", "विश्णु शर्मा"],
        "answer_en": "Swami Dayanand Saraswati",
        "answer_hi": "स्वामी दयानंद सरस्वती",
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