
const questions = [

    {
        "num": 1,
        "question_en": "What is the chemical symbol for water?",
        "question_hi": "पानी का रासायनिक प्रतीक क्या है?",
        "options_en": ["H2O", "CO2", "O2", "CH4"],
        "options_hi": ["H2O", "CO2", "O2", "CH4"],
        "answer_en": "H2O",
        "answer_hi": "H2O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which gas is necessary for respiration in humans?",
        "question_hi": "मानवों में श्वसन के लिए कौन सी गैस आवश्यक है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the largest planet in our solar system?",
        "question_hi": "हमारे सौरमंडल में सबसे बड़ा ग्रह कौन सा है?",
        "options_en": ["Earth", "Mars", "Jupiter", "Saturn"],
        "options_hi": ["पृथ्वी", "मंगल", "बृहस्पति", "शनि"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which of the following is not a metal?",
        "question_hi": "निम्नलिखित में से कौन धातु नहीं है?",
        "options_en": ["Iron", "Copper", "Oxygen", "Gold"],
        "options_hi": ["लोहा", "तांबा", "ऑक्सीजन", "सोना"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which of the following is the main source of energy for the human body?",
        "question_hi": "मानव शरीर के लिए ऊर्जा का मुख्य स्रोत कौन सा है?",
        "options_en": ["Carbohydrates", "Proteins", "Fats", "Vitamins"],
        "options_hi": ["कार्बोहाइड्रेट", "प्रोटीन", "वसा", "विटामिन"],
        "answer_en": "Carbohydrates",
        "answer_hi": "कार्बोहाइड्रेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which of the following is a non-metal?",
        "question_hi": "निम्नलिखित में से कौन एक गैर-धातु है?",
        "options_en": ["Sulfur", "Iron", "Copper", "Zinc"],
        "options_hi": ["सल्फर", "लोहा", "तांबा", "जिंक"],
        "answer_en": "Sulfur",
        "answer_hi": "सल्फर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the process by which plants make their food?",
        "question_hi": "वह प्रक्रिया क्या कहलाती है, जिसके द्वारा पौधे अपना खाद्य बनाते हैं?",
        "options_en": ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
        "options_hi": ["प्रकाश संश्लेषण", "श्वसन", "वाष्पोत्सर्जन", "किण्वन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the main component of air?",
        "question_hi": "वायु का मुख्य घटक क्या है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the chemical formula for carbon dioxide?",
        "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CO2", "C2O", "C2O2", "CO"],
        "options_hi": ["CO2", "C2O", "C2O2", "CO"],
        "answer_en": "CO2",
        "answer_hi": "CO2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which of the following is a fossil fuel?",
        "question_hi": "निम्नलिखित में से कौन एक जीवाश्म ईंधन है?",
        "options_en": ["Natural gas", "Solar energy", "Wind energy", "Geothermal energy"],
        "options_hi": ["प्राकृतिक गैस", "सौर ऊर्जा", "पवन ऊर्जा", "भूतापीय ऊर्जा"],
        "answer_en": "Natural gas",
        "answer_hi": "प्राकृतिक गैस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the boiling point of water?",
        "question_hi": "पानी का उबालने का तापमान क्या है?",
        "options_en": ["0°C", "50°C", "100°C", "150°C"],
        "options_hi": ["0°C", "50°C", "100°C", "150°C"],
        "answer_en": "100°C",
        "answer_hi": "100°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which of the following is a noble gas?",
        "question_hi": "निम्नलिखित में से कौन सा एक उदात्त गैस है?",
        "options_en": ["Oxygen", "Nitrogen", "Argon", "Carbon dioxide"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "कार्बन डाइऑक्साइड"],
        "answer_en": "Argon",
        "answer_hi": "आर्गन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the main purpose of the digestive system?",
        "question_hi": "पाचन तंत्र का मुख्य उद्देश्य क्या है?",
        "options_en": ["Break down food", "Transport oxygen", "Produce hormones", "Regulate body temperature"],
        "options_hi": ["खाद्य को तोड़ना", "ऑक्सीजन का परिवहन", "हार्मोन का उत्पादन", "शरीर का तापमान नियंत्रित करना"],
        "answer_en": "Break down food",
        "answer_hi": "खाद्य को तोड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the SI unit for measuring mass?",
        "question_hi": "द्रव्यमान को मापने के लिए SI इकाई क्या है?",
        "options_en": ["Gram", "Kilogram", "Pound", "Ounce"],
        "options_hi": ["ग्राम", "किलोग्राम", "पाउंड", "औंस"],
        "answer_en": "Kilogram",
        "answer_hi": "किलोग्राम",
        "attempted": false,
        "selected": ""
    }
    ,
    {
        "num": 15,
        "question_en": "Which of the following is a good conductor of electricity?",
        "question_hi": "निम्नलिखित में से कौन विद्युत का अच्छा संवाहक है?",
        "options_en": ["Wood", "Plastic", "Copper", "Glass"],
        "options_hi": ["लकड़ी", "प्लास्टिक", "तांबा", "कांच"],
        "answer_en": "Copper",
        "answer_hi": "तांबा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which of the following is an example of a chemical change?",
        "question_hi": "निम्नलिखित में से कौन रासायनिक परिवर्तन का उदाहरण है?",
        "options_en": ["Melting ice", "Boiling water", "Burning paper", "Dissolving salt in water"],
        "options_hi": ["बर्फ का पिघलना", "पानी का उबालना", "कागज का जलना", "पानी में नमक घोलना"],
        "answer_en": "Burning paper",
        "answer_hi": "कागज का जलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which of the following elements is found in the largest quantity in Earth's atmosphere?",
        "question_hi": "निम्नलिखित में से कौन सा तत्व पृथ्वी के वायुमंडल में सबसे बड़ी मात्रा में पाया जाता है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the freezing point of water?",
        "question_hi": "पानी का जमाव बिंदु क्या है?",
        "options_en": ["0°C", "32°F", "100°C", "50°C"],
        "options_hi": ["0°C", "32°F", "100°C", "50°C"],
        "answer_en": "0°C",
        "answer_hi": "0°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which part of the cell contains the genetic material?",
        "question_hi": "कोशिका का कौन सा हिस्सा आनुवंशिक सामग्री को संजोए रखता है?",
        "options_en": ["Nucleus", "Mitochondria", "Cytoplasm", "Ribosome"],
        "options_hi": ["न्यूक्लियस", "माइटोकॉन्ड्रिया", "साइटोप्लाज्म", "राइबोसोम"],
        "answer_en": "Nucleus",
        "answer_hi": "न्यूक्लियस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which of the following is the smallest unit of matter?",
        "question_hi": "निम्नलिखित में से कौन सा पदार्थ का सबसे छोटा इकाई है?",
        "options_en": ["Atom", "Molecule", "Electron", "Proton"],
        "options_hi": ["एटम", "अणु", "इलेक्ट्रॉन", "प्रोटॉन"],
        "answer_en": "Atom",
        "answer_hi": "एटम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the SI unit of electric current?",
        "question_hi": "विद्युत धारा की SI इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "ऐम्पियर", "ओहम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "ऐम्पियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the process of converting liquid water into gas called?",
        "question_hi": "तरल पानी को गैस में बदलने की प्रक्रिया को क्या कहा जाता है?",
        "options_en": ["Condensation", "Evaporation", "Fusion", "Sublimation"],
        "options_hi": ["संक्षेपण", "वाष्पन", "पिघलन", "सुब्लिमेशन"],
        "answer_en": "Evaporation",
        "answer_hi": "वाष्पन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which of the following is a physical change?",
        "question_hi": "निम्नलिखित में से कौन एक भौतिक परिवर्तन है?",
        "options_en": ["Burning wood", "Melting wax", "Rusting iron", "Baking a cake"],
        "options_hi": ["लकड़ी का जलना", "मोम का पिघलना", "लोहा का जंग लगना", "केक पकाना"],
        "answer_en": "Melting wax",
        "answer_hi": "मोम का पिघलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which of the following is not a greenhouse gas?",
        "question_hi": "निम्नलिखित में से कौन सी ग्रीनहाउस गैस नहीं है?",
        "options_en": ["Carbon dioxide", "Methane", "Oxygen", "Nitrous oxide"],
        "options_hi": ["कार्बन डाइऑक्साइड", "मीथेन", "ऑक्सीजन", "नाइट्रस ऑक्साइड"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which of the following is a renewable energy source?",
        "question_hi": "निम्नलिखित में से कौन सा नवीकरणीय ऊर्जा स्रोत है?",
        "options_en": ["Coal", "Natural gas", "Solar energy", "Petroleum"],
        "options_hi": ["कोयला", "प्राकृतिक गैस", "सौर ऊर्जा", "पेट्रोलियम"],
        "answer_en": "Solar energy",
        "answer_hi": "सौर ऊर्जा",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 26,
        "question_en": "Which of the following is an example of a physical change?",
        "question_hi": "निम्नलिखित में से कौन भौतिक परिवर्तन का उदाहरण है?",
        "options_en": ["Burning wood", "Freezing water", "Rusting iron", "Cooking food"],
        "options_hi": ["लकड़ी का जलना", "पानी का जमना", "लोहा का जंग लगना", "खाना पकाना"],
        "answer_en": "Freezing water",
        "answer_hi": "पानी का जमना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the main function of the circulatory system?",
        "question_hi": "संचरण तंत्र का मुख्य कार्य क्या है?",
        "options_en": ["Transport oxygen and nutrients", "Digest food", "Control body temperature", "Produce hormones"],
        "options_hi": ["ऑक्सीजन और पोषक तत्वों का परिवहन", "खाद्य का पाचन", "शरीर का तापमान नियंत्रित करना", "हार्मोन का उत्पादन"],
        "answer_en": "Transport oxygen and nutrients",
        "answer_hi": "ऑक्सीजन और पोषक तत्वों का परिवहन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the chemical formula for methane?",
        "question_hi": "मीथेन का रासायनिक सूत्र क्या है?",
        "options_en": ["CH4", "C2H6", "C3H8", "CH3OH"],
        "options_hi": ["CH4", "C2H6", "C3H8", "CH3OH"],
        "answer_en": "CH4",
        "answer_hi": "CH4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which of the following is a property of acids?",
        "question_hi": "निम्नलिखित में से कौन सा अम्लों का गुण है?",
        "options_en": ["Bitter taste", "Slippery texture", "Sour taste", "None of the above"],
        "options_hi": ["कड़वा स्वाद", "फिसलन महसूस होना", "खट्टा स्वाद", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Sour taste",
        "answer_hi": "खट्टा स्वाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which of the following is an example of a mixture?",
        "question_hi": "निम्नलिखित में से कौन मिश्रण का उदाहरण है?",
        "options_en": ["Salt", "Air", "Water", "Oxygen"],
        "options_hi": ["नमक", "वायु", "पानी", "ऑक्सीजन"],
        "answer_en": "Air",
        "answer_hi": "वायु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the main function of the respiratory system?",
        "question_hi": "श्वसन तंत्र का मुख्य कार्य क्या है?",
        "options_en": ["Transport oxygen", "Break down food", "Circulate blood", "Control body temperature"],
        "options_hi": ["ऑक्सीजन का परिवहन", "खाद्य का पाचन", "रक्त का परिसंचरण", "शरीर का तापमान नियंत्रित करना"],
        "answer_en": "Transport oxygen",
        "answer_hi": "ऑक्सीजन का परिवहन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which of the following is used as a fuel in a nuclear reactor?",
        "question_hi": "न्यूक्लियर रिएक्टर में ईंधन के रूप में निम्नलिखित में से क्या उपयोग किया जाता है?",
        "options_en": ["Coal", "Uranium", "Natural gas", "Petroleum"],
        "options_hi": ["कोयला", "यूरानियम", "प्राकृतिक गैस", "पेट्रोलियम"],
        "answer_en": "Uranium",
        "answer_hi": "यूरानियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which of the following is a non-renewable resource?",
        "question_hi": "निम्नलिखित में से कौन सा एक गैर-नवीकरणीय संसाधन है?",
        "options_en": ["Solar energy", "Wind energy", "Coal", "Hydropower"],
        "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "जल शक्ति"],
        "answer_en": "Coal",
        "answer_hi": "कोयला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which of the following is a characteristic of all metals?",
        "question_hi": "निम्नलिखित में से कौन सी सभी धातुओं की विशेषता है?",
        "options_en": ["Brittle", "Non-conductive", "Malleable", "Dull"],
        "options_hi": ["नाज़ुक", "असंवाहक", "लोचदार", "मैला"],
        "answer_en": "Malleable",
        "answer_hi": "लोचदार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the primary component of air?",
        "question_hi": "वायु का मुख्य घटक क्या है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which of the following is an example of an element?",
        "question_hi": "निम्नलिखित में से कौन तत्व का उदाहरण है?",
        "options_en": ["Water", "Salt", "Oxygen", "Sugar"],
        "options_hi": ["पानी", "नमक", "ऑक्सीजन", "चीनी"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    }
    ,


    {
        "num": 37,
        "question_en": "What is the process by which plants make their food?",
        "question_hi": "पौधे अपने भोजन का निर्माण किस प्रक्रिया द्वारा करते हैं?",
        "options_en": ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
        "options_hi": ["श्वसन", "संचलन", "पाचन", "वाष्पोत्सर्जन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "संचलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which of the following is not a part of the human digestive system?",
        "question_hi": "निम्नलिखित में से कौन मानव पाचन तंत्र का हिस्सा नहीं है?",
        "options_en": ["Stomach", "Liver", "Lungs", "Pancreas"],
        "options_hi": ["पेट", "जिगर", "फेफड़े", "अग्न्याशय"],
        "answer_en": "Lungs",
        "answer_hi": "फेफड़े",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which of the following is a property of metals?",
        "question_hi": "निम्नलिखित में से कौन धातुओं का गुण है?",
        "options_en": ["They are brittle", "They are non-malleable", "They are good conductors of heat", "They are transparent"],
        "options_hi": ["यह नाज़ुक होते हैं", "यह लोचदार नहीं होते", "यह ताप के अच्छे संवाहक होते हैं", "यह पारदर्शी होते हैं"],
        "answer_en": "They are good conductors of heat",
        "answer_hi": "यह ताप के अच्छे संवाहक होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which of the following is the most abundant gas in the Earth's atmosphere?",
        "question_hi": "पृथ्वी के वायुमंडल में निम्नलिखित में से कौन सा गैस सबसे प्रचुर मात्रा में है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the boiling point of water at sea level?",
        "question_hi": "समुद्र तल पर पानी का उबालने का बिंदु क्या है?",
        "options_en": ["90°C", "95°C", "100°C", "105°C"],
        "options_hi": ["90°C", "95°C", "100°C", "105°C"],
        "answer_en": "100°C",
        "answer_hi": "100°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the SI unit of force?",
        "question_hi": "बल की SI इकाई क्या है?",
        "options_en": ["Newton", "Joule", "Watt", "Pascal"],
        "options_hi": ["न्यूटन", "जूल", "वाट", "पास्कल"],
        "answer_en": "Newton",
        "answer_hi": "न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which of the following is a non-metal?",
        "question_hi": "निम्नलिखित में से कौन सा गैर-धातु है?",
        "options_en": ["Iron", "Copper", "Sulfur", "Zinc"],
        "options_hi": ["लोहा", "तांबा", "गंधक", "जस्ता"],
        "answer_en": "Sulfur",
        "answer_hi": "गंधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the process by which green plants absorb sunlight and convert it into food?",
        "question_hi": "कौन सा प्रक्रिया है जिसके द्वारा हरे पौधे सूर्य के प्रकाश को अवशोषित करते हैं और उसे भोजन में परिवर्तित करते हैं?",
        "options_en": ["Respiration", "Photosynthesis", "Fermentation", "Transpiration"],
        "options_hi": ["श्वसन", "संचलन", "किण्वन", "वाष्पोत्सर्जन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "संचलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which of the following is used to produce electricity in a thermal power plant?",
        "question_hi": "थर्मल पावर प्लांट में विद्युत उत्पादन के लिए निम्नलिखित में से क्या उपयोग किया जाता है?",
        "options_en": ["Water", "Coal", "Wind", "Sunlight"],
        "options_hi": ["पानी", "कोयला", "पवन", "सूर्य की रोशनी"],
        "answer_en": "Coal",
        "answer_hi": "कोयला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which of the following is the largest organ in the human body?",
        "question_hi": "मानव शरीर में निम्नलिखित में से सबसे बड़ा अंग कौन सा है?",
        "options_en": ["Heart", "Brain", "Liver", "Skin"],
        "options_hi": ["दिल", "मस्तिष्क", "यकृत", "त्वचा"],
        "answer_en": "Skin",
        "answer_hi": "त्वचा",
        "attempted": false,
        "selected": ""
    }
    ,
    {
        "num": 47,
        "question_en": "What is the process by which water changes from liquid to gas?",
        "question_hi": "पानी के द्रव से गैस में बदलने की प्रक्रिया क्या कहलाती है?",
        "options_en": ["Condensation", "Evaporation", "Freezing", "Melting"],
        "options_hi": ["सघनन", "वाष्पीकरण", "जमना", "पिघलना"],
        "answer_en": "Evaporation",
        "answer_hi": "वाष्पीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which of the following is a renewable source of energy?",
        "question_hi": "निम्नलिखित में से कौन सा ऊर्जा का नवीकरणीय स्रोत है?",
        "options_en": ["Coal", "Wind", "Natural gas", "Petroleum"],
        "options_hi": ["कोयला", "पवन", "प्राकृतिक गैस", "पेट्रोलियम"],
        "answer_en": "Wind",
        "answer_hi": "पवन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which part of the plant is responsible for absorbing water and nutrients from the soil?",
        "question_hi": "पौधे का कौन सा भाग मिट्टी से पानी और पोषक तत्वों को अवशोषित करने के लिए जिम्मेदार है?",
        "options_en": ["Stem", "Roots", "Leaves", "Flowers"],
        "options_hi": ["तना", "मूल", "पत्तियाँ", "फूल"],
        "answer_en": "Roots",
        "answer_hi": "मूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the chemical symbol for gold?",
        "question_hi": "सोने का रासायनिक प्रतीक क्या है?",
        "options_en": ["Au", "Ag", "Fe", "Pb"],
        "options_hi": ["Au", "Ag", "Fe", "Pb"],
        "answer_en": "Au",
        "answer_hi": "Au",
        "attempted": false,
        "selected": ""
    },


]
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