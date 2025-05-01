
const questions = [
    {
      "num": 1,
      "question_en": "What is the chemical formula of sodium hydroxide?",
      "question_hi": "सोडियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
      "options_en": ["NaOH", "Na2O", "NaCl", "Na2CO3"],
      "options_hi": ["NaOH", "Na2O", "NaCl", "Na2CO3"],
      "answer_en": "NaOH",
      "answer_hi": "NaOH",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "Which of the following is a non-metal?",
      "question_hi": "निम्नलिखित में से कौन सा एक अधातु है?",
      "options_en": ["Iron", "Aluminum", "Oxygen", "Copper"],
      "options_hi": ["लोहा", "एल्यूमीनियम", "ऑक्सीजन", "कॉपर"],
      "answer_en": "Oxygen",
      "answer_hi": "ऑक्सीजन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "What is the unit of electric current?",
      "question_hi": "विद्युत धारा की इकाई क्या है?",
      "options_en": ["Volt", "Watt", "Ampere", "Ohm"],
      "options_hi": ["वोल्ट", "वाट", "ऐम्पियर", "ओहम"],
      "answer_en": "Ampere",
      "answer_hi": "ऐम्पियर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "Which of the following is an example of a physical change?",
      "question_hi": "निम्नलिखित में से कौन सा एक भौतिक परिवर्तन का उदाहरण है?",
      "options_en": ["Burning of paper", "Melting of ice", "Rusting of iron", "Formation of a precipitate"],
      "options_hi": ["कागज जलाना", "बर्फ का पिघलना", "लोहा का जंग लगना", "सूजन का निर्माण"],
      "answer_en": "Melting of ice",
      "answer_hi": "बर्फ का पिघलना",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "Which of the following is the pH of pure water?",
      "question_hi": "शुद्ध जल का pH मान क्या है?",
      "options_en": ["7", "8", "5", "10"],
      "options_hi": ["7", "8", "5", "10"],
      "answer_en": "7",
      "answer_hi": "7",
      "attempted": false,
      "selected": ""
    },
    
      {
        "num": 6,
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
        "num": 7,
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
        "num": 8,
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
        "num": 9,
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
        "num": 10,
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
        "num": 11,
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
        "num": 12,
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
        "num": 13,
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
        "num": 14,
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
        "num": 15,
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
        "num": 16,
        "question_en": "What is the main function of red blood cells?",
        "question_hi": "लाल रक्त कोशिकाओं का मुख्य कार्य क्या है?",
        "options_en": ["Transport oxygen", "Fight infections", "Produce hormones", "Regulate temperature"],
        "options_hi": ["ऑक्सीजन का परिवहन", "संक्रमण से लड़ना", "हार्मोन का उत्पादन", "तापमान का नियंत्रण"],
        "answer_en": "Transport oxygen",
        "answer_hi": "ऑक्सीजन का परिवहन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "Which of the following is a natural satellite of Earth?",
        "question_hi": "निम्नलिखित में से कौन पृथ्वी का प्राकृतिक उपग्रह है?",
        "options_en": ["Moon", "Mars", "Venus", "Jupiter"],
        "options_hi": ["चंद्रमा", "मंगल", "शुक्र", "बृहस्पति"],
        "answer_en": "Moon",
        "answer_hi": "चंद्रमा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Which part of the cell controls the activities of the cell?",
        "question_hi": "कोशिका का कौन सा भाग कोशिका की गतिविधियों को नियंत्रित करता है?",
        "options_en": ["Nucleus", "Cytoplasm", "Mitochondria", "Cell membrane"],
        "options_hi": ["न्यूक्लियस", "साइटोप्लाज्म", "माइटोकॉन्ड्रिया", "कोशिका झिल्ली"],
        "answer_en": "Nucleus",
        "answer_hi": "न्यूक्लियस",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "What is the process by which plants lose water through their leaves?",
        "question_hi": "पौधे अपने पत्तों के माध्यम से पानी खोने की प्रक्रिया क्या कहलाती है?",
        "options_en": ["Transpiration", "Photosynthesis", "Evaporation", "Respiration"],
        "options_hi": ["वाष्पोत्सर्जन", "संचलन", "वाष्पीकरण", "श्वसन"],
        "answer_en": "Transpiration",
        "answer_hi": "वाष्पोत्सर्जन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Which of the following gases is most commonly used in making balloons?",
        "question_hi": "निम्नलिखित में से कौन सा गैस गुब्बारे बनाने में सबसे अधिक उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Nitrogen", "Hydrogen", "Helium"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन", "हीलियम"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Which of the following is the hardest known material?",
        "question_hi": "निम्नलिखित में से कौन सा ज्ञात सबसे कठिन पदार्थ है?",
        "options_en": ["Gold", "Iron", "Diamond", "Platinum"],
        "options_hi": ["सोना", "लोहा", "हीरा", "प्लैटिनम"],
        "answer_en": "Diamond",
        "answer_hi": "हीरा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "What is the chemical formula of water?",
        "question_hi": "पानी का रासायनिक सूत्र क्या है?",
        "options_en": ["H2O", "CO2", "O2", "H2SO4"],
        "options_hi": ["H2O", "CO2", "O2", "H2SO4"],
        "answer_en": "H2O",
        "answer_hi": "H2O",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "What is the unit of electric power?",
        "question_hi": "बिजली की शक्ति की इकाई क्या है?",
        "options_en": ["Watt", "Volt", "Ampere", "Ohm"],
        "options_hi": ["वाट", "वोल्ट", "एम्पीयर", "ओहम"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Which of the following is a noble gas?",
        "question_hi": "निम्नलिखित में से कौन सा अभ्रव्य गैस है?",
        "options_en": ["Oxygen", "Nitrogen", "Helium", "Carbon dioxide"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "कार्बन डाइऑक्साइड"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "Which of the following elements is a halogen?",
        "question_hi": "निम्नलिखित में से कौन सा तत्व हैलोजन है?",
        "options_en": ["Sodium", "Chlorine", "Calcium", "Iron"],
        "options_hi": ["सोडियम", "क्लोरीन", "कैल्शियम", "लोहा"],
        "answer_en": "Chlorine",
        "answer_hi": "क्लोरीन",
        "attempted": false,
        "selected": ""
      }
    ,
    
      {
        "num": 26,
        "question_en": "What is the chemical formula of methane?",
        "question_hi": "मीथेन का रासायनिक सूत्र क्या है?",
        "options_en": ["CH4", "C2H6", "CO2", "H2O"],
        "options_hi": ["CH4", "C2H6", "CO2", "H2O"],
        "answer_en": "CH4",
        "answer_hi": "CH4",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "What is the atomic number of Oxygen?",
        "question_hi": "ऑक्सीजन का परमाणु संख्या क्या है?",
        "options_en": ["6", "8", "10", "12"],
        "options_hi": ["6", "8", "10", "12"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "Which of the following is used to measure the intensity of sound?",
        "question_hi": "ध्वनि की तीव्रता को मापने के लिए निम्नलिखित में से कौन सा यंत्र उपयोग किया जाता है?",
        "options_en": ["Barometer", "Thermometer", "Ammeter", "Decibel meter"],
        "options_hi": ["वायुदाबमापी", "तापमापी", "एम्पीयरमीटर", "डेसीबल मीटर"],
        "answer_en": "Decibel meter",
        "answer_hi": "डेसीबल मीटर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "What is the process of converting a liquid into a gas?",
        "question_hi": "एक तरल को गैस में बदलने की प्रक्रिया क्या कहलाती है?",
        "options_en": ["Condensation", "Evaporation", "Fusion", "Sublimation"],
        "options_hi": ["संपीड़न", "वाष्पीकरण", "पिघलन", "उपसरण"],
        "answer_en": "Evaporation",
        "answer_hi": "वाष्पीकरण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "Which of the following is a renewable source of energy?",
        "question_hi": "निम्नलिखित में से कौन सा ऊर्जा का एक नवीकरणीय स्रोत है?",
        "options_en": ["Coal", "Natural Gas", "Solar Energy", "Nuclear Energy"],
        "options_hi": ["कोयला", "प्राकृतिक गैस", "सौर ऊर्जा", "न्यूक्लियर ऊर्जा"],
        "answer_en": "Solar Energy",
        "answer_hi": "सौर ऊर्जा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Which of the following gases is produced during respiration?",
        "question_hi": "श्वसन के दौरान निम्नलिखित में से कौन सा गैस उत्पन्न होती है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हीलियम"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "What is the main component of natural gas?",
        "question_hi": "प्राकृतिक गैस का मुख्य घटक क्या है?",
        "options_en": ["Methane", "Propane", "Butane", "Ethane"],
        "options_hi": ["मीथेन", "प्रोपेन", "ब्यूटेन", "एथेन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "Which of the following is an example of a physical change?",
        "question_hi": "निम्नलिखित में से कौन सा भौतिक परिवर्तन का उदाहरण है?",
        "options_en": ["Burning of wood", "Melting of ice", "Rusting of iron", "Digestion of food"],
        "options_hi": ["लकड़ी का जलना", "बर्फ का पिघलना", "लोहा का जंग लगना", "भोजन का पाचन"],
        "answer_en": "Melting of ice",
        "answer_hi": "बर्फ का पिघलना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "What is the SI unit of temperature?",
        "question_hi": "तापमान की SI इकाई क्या है?",
        "options_en": ["Kelvin", "Celsius", "Fahrenheit", "Rankine"],
        "options_hi": ["केल्विन", "सेल्सियस", "फारेनहाइट", "रैंकाइन"],
        "answer_en": "Kelvin",
        "answer_hi": "केल्विन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "Which of the following is not a metal?",
        "question_hi": "निम्नलिखित में से कौन धातु नहीं है?",
        "options_en": ["Copper", "Silver", "Gold", "Sulfur"],
        "options_hi": ["तांबा", "चांदी", "सोना", "गंधक"],
        "answer_en": "Sulfur",
        "answer_hi": "गंधक",
        "attempted": false,
        "selected": ""
      },
      
        {
          "num": 36,
          "question_en": "Which of the following is a non-renewable source of energy?",
          "question_hi": "निम्नलिखित में से कौन सा ऊर्जा का गैर-नवीकरणीय स्रोत है?",
          "options_en": ["Wind Energy", "Solar Energy", "Coal", "Hydropower"],
          "options_hi": ["पवन ऊर्जा", "सौर ऊर्जा", "कोयला", "जलविद्युत"],
          "answer_en": "Coal",
          "answer_hi": "कोयला",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 37,
          "question_en": "Which of the following is the main source of energy for the human body?",
          "question_hi": "मानव शरीर के लिए ऊर्जा का मुख्य स्रोत कौन सा है?",
          "options_en": ["Protein", "Fats", "Carbohydrates", "Vitamins"],
          "options_hi": ["प्रोटीन", "वसा", "कार्बोहाइड्रेट", "विटामिन"],
          "answer_en": "Carbohydrates",
          "answer_hi": "कार्बोहाइड्रेट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 38,
          "question_en": "Which of the following is the process of making food in plants?",
          "question_hi": "पौधों में भोजन बनाने की प्रक्रिया क्या कहलाती है?",
          "options_en": ["Respiration", "Transpiration", "Photosynthesis", "Germination"],
          "options_hi": ["श्वसन", "वाष्पोत्सर्जन", "संचलन", "अंकुरण"],
          "answer_en": "Photosynthesis",
          "answer_hi": "संचलन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 39,
          "question_en": "Which of the following is the most abundant element in the Earth's crust?",
          "question_hi": "पृथ्वी की पपड़ी में सबसे प्रचुर तत्व कौन सा है?",
          "options_en": ["Oxygen", "Iron", "Aluminum", "Silicon"],
          "options_hi": ["ऑक्सीजन", "लोहा", "एल्यूमीनियम", "सिलिकॉन"],
          "answer_en": "Oxygen",
          "answer_hi": "ऑक्सीजन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 40,
          "question_en": "Which gas is most commonly used for breathing by humans?",
          "question_hi": "मनुष्यों द्वारा श्वास लेने के लिए सबसे सामान्य गैस कौन सी है?",
          "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
          "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
          "answer_en": "Oxygen",
          "answer_hi": "ऑक्सीजन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 41,
          "question_en": "What is the main constituent of natural gas?",
          "question_hi": "प्राकृतिक गैस का मुख्य घटक क्या है?",
          "options_en": ["Methane", "Ethane", "Propane", "Butane"],
          "options_hi": ["मीथेन", "एथेन", "प्रोपेन", "ब्यूटेन"],
          "answer_en": "Methane",
          "answer_hi": "मीथेन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 42,
          "question_en": "What is the process of converting a solid into a gas called?",
          "question_hi": "एक ठोस पदार्थ को गैस में बदलने की प्रक्रिया क्या कहलाती है?",
          "options_en": ["Melting", "Evaporation", "Sublimation", "Freezing"],
          "options_hi": ["पिघलना", "वाष्पीकरण", "उपसरण", "जमना"],
          "answer_en": "Sublimation",
          "answer_hi": "उपसरण",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 43,
          "question_en": "Which of the following is an example of a chemical change?",
          "question_hi": "निम्नलिखित में से कौन सा रासायनिक परिवर्तन का उदाहरण है?",
          "options_en": ["Boiling of water", "Burning of paper", "Melting of ice", "Cutting of wood"],
          "options_hi": ["पानी का उबालना", "कागज का जलना", "बर्फ का पिघलना", "लकड़ी को काटना"],
          "answer_en": "Burning of paper",
          "answer_hi": "कागज का जलना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 44,
          "question_en": "Which of the following is used in the preparation of ammonia?",
          "question_hi": "अमोनिया तैयार करने में निम्नलिखित में से कौन सा तत्व उपयोग किया जाता है?",
          "options_en": ["Nitrogen", "Oxygen", "Hydrogen", "Chlorine"],
          "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन", "क्लोरीन"],
          "answer_en": "Nitrogen",
          "answer_hi": "नाइट्रोजन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 45,
          "question_en": "Which of the following is not a property of metals?",
          "question_hi": "निम्नलिखित में से कौन सी धातु का गुण नहीं है?",
          "options_en": ["Malleable", "Ductile", "Brittle", "Good conductor of heat"],
          "options_hi": ["मलायनीय", "तंतुई", "भंगुर", "ताप का अच्छा चालक"],
          "answer_en": "Brittle",
          "answer_hi": "भंगुर",
          "attempted": false,
          "selected": ""
        },
        
          {
            "num": 46,
            "question_en": "Which of the following is a non-metal?",
            "question_hi": "निम्नलिखित में से कौन सा एक गैर-धातु है?",
            "options_en": ["Iron", "Copper", "Oxygen", "Aluminum"],
            "options_hi": ["लोहा", "तांबा", "ऑक्सीजन", "एल्यूमीनियम"],
            "answer_en": "Oxygen",
            "answer_hi": "ऑक्सीजन",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 47,
            "question_en": "What is the boiling point of water in Celsius?",
            "question_hi": "पानी का उबालने का बिंदु सेल्सियस में क्या है?",
            "options_en": ["100°C", "90°C", "110°C", "120°C"],
            "options_hi": ["100°C", "90°C", "110°C", "120°C"],
            "answer_en": "100°C",
            "answer_hi": "100°C",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 48,
            "question_en": "Which of the following is used to detect the presence of starch?",
            "question_hi": "स्टार्च की उपस्थिति का पता लगाने के लिए निम्नलिखित में से कौन सा यौगिक उपयोग किया जाता है?",
            "options_en": ["Iodine solution", "Copper sulfate", "Silver nitrate", "Hydrochloric acid"],
            "options_hi": ["आयोडीन घोल", "तांबा सल्फेट", "चांदी नाइट्रेट", "हाइड्रोक्लोरिक अम्ल"],
            "answer_en": "Iodine solution",
            "answer_hi": "आयोडीन घोल",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 49,
            "question_en": "What is the pH value of pure water?",
            "question_hi": "शुद्ध पानी का pH मान क्या होता है?",
            "options_en": ["7", "6", "8", "5"],
            "options_hi": ["7", "6", "8", "5"],
            "answer_en": "7",
            "answer_hi": "7",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 50,
            "question_en": "What is the process of changing a gas into a liquid called?",
            "question_hi": "गैस को तरल में बदलने की प्रक्रिया को क्या कहा जाता है?",
            "options_en": ["Condensation", "Evaporation", "Sublimation", "Melting"],
            "options_hi": ["संपीड़न", "वाष्पीकरण", "उपसरण", "पिघलना"],
            "answer_en": "Condensation",
            "answer_hi": "संपीड़न",
            "attempted": false,
            "selected": ""
          }
        ,
        
      
    
    
    
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