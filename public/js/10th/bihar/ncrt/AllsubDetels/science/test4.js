
const questions = [
    
        {
          "num": 1,
          "question_en": "What is the main component of natural gas?",
          "question_hi": "प्राकृतिक गैस का मुख्य घटक क्या है?",
          "options_en": ["Methane", "Ethane", "Propane", "Butane"],
          "options_hi": ["मीथेन", "एथेन", "प्रोपेन", "ब्युटेन"],
          "answer_en": "Methane",
          "answer_hi": "मीथेन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
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
          "num": 3,
          "question_en": "Which element is present in all acids?",
          "question_hi": "कौन सा तत्व सभी अम्लों में उपस्थित होता है?",
          "options_en": ["Oxygen", "Hydrogen", "Nitrogen", "Carbon"],
          "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन", "कार्बन"],
          "answer_en": "Hydrogen",
          "answer_hi": "हाइड्रोजन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "What is the process of water turning into vapor called?",
          "question_hi": "पानी का वाष्प में बदलने की प्रक्रिया को क्या कहते हैं?",
          "options_en": ["Evaporation", "Condensation", "Melting", "Freezing"],
          "options_hi": ["वाष्पन", "संघनन", "पिघलना", "ठंडा होना"],
          "answer_en": "Evaporation",
          "answer_hi": "वाष्पन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which gas is responsible for global warming due to the greenhouse effect?",
          "question_hi": "ग्रीनहाउस प्रभाव के कारण वैश्विक ऊष्मीकरण के लिए कौन-सी गैस जिम्मेदार है?",
          "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
          "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
          "answer_en": "Carbon dioxide",
          "answer_hi": "कार्बन डाइऑक्साइड",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which of the following is a renewable source of energy?",
          "question_hi": "निम्नलिखित में से कौन सा एक नवीकरणीय ऊर्जा स्रोत है?",
          "options_en": ["Coal", "Oil", "Solar", "Natural Gas"],
          "options_hi": ["कोयला", "तेल", "सौर", "प्राकृतिक गैस"],
          "answer_en": "Solar",
          "answer_hi": "सौर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which is the largest organ in the human body?",
          "question_hi": "मानव शरीर में सबसे बड़ा अंग कौन सा है?",
          "options_en": ["Heart", "Liver", "Skin", "Brain"],
          "options_hi": ["हृदय", "यकृत", "त्वचा", "मस्तिष्क"],
          "answer_en": "Skin",
          "answer_hi": "त्वचा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "What is the main function of the heart?",
          "question_hi": "हृदय का मुख्य कार्य क्या है?",
          "options_en": ["Pumping blood", "Digestion", "Respiration", "Excretion"],
          "options_hi": ["रक्त पंप करना", "पाचन", "श्वसन", "विसर्जन"],
          "answer_en": "Pumping blood",
          "answer_hi": "रक्त पंप करना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "What is the basic unit of life?",
          "question_hi": "जीवन की मूल इकाई क्या है?",
          "options_en": ["Cell", "Tissue", "Organ", "System"],
          "options_hi": ["कोशिका", "ऊतक", "अंग", "प्रणाली"],
          "answer_en": "Cell",
          "answer_hi": "कोशिका",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which part of the plant is responsible for photosynthesis?",
          "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण के लिए जिम्मेदार है?",
          "options_en": ["Roots", "Stem", "Leaves", "Flowers"],
          "options_hi": ["मूल", "तना", "पत्तियाँ", "फूल"],
          "answer_en": "Leaves",
          "answer_hi": "पत्तियाँ",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "What is the primary source of energy for all living organisms?",
          "question_hi": "सभी जीवित जीवों के लिए ऊर्जा का मुख्य स्रोत क्या है?",
          "options_en": ["Sun", "Water", "Earth", "Wind"],
          "options_hi": ["सूर्य", "पानी", "पृथ्वी", "हवा"],
          "answer_en": "Sun",
          "answer_hi": "सूर्य",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "What is the chemical formula for methane?",
          "question_hi": "मीथेन का रासायनिक सूत्र क्या है?",
          "options_en": ["CH4", "C2H6", "C3H8", "C4H10"],
          "options_hi": ["CH4", "C2H6", "C3H8", "C4H10"],
          "answer_en": "CH4",
          "answer_hi": "CH4",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "What is the function of the stomata in plants?",
          "question_hi": "पौधों में स्टोमाटा का कार्य क्या है?",
          "options_en": ["Absorption of water", "Exchange of gases", "Photosynthesis", "Transport of nutrients"],
          "options_hi": ["पानी का अवशोषण", "गैसों का आदान-प्रदान", "प्रकाश संश्लेषण", "पोषक तत्वों का परिवहन"],
          "answer_en": "Exchange of gases",
          "answer_hi": "गैसों का आदान-प्रदान",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which gas is most abundant in the Earth's atmosphere?",
          "question_hi": "पृथ्वी के वायुमंडल में सबसे अधिक प्रचुर गैस कौन सी है?",
          "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
          "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "आर्गन"],
          "answer_en": "Nitrogen",
          "answer_hi": "नाइट्रोजन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Which of the following is not a type of rock?",
          "question_hi": "निम्नलिखित में से कौन सा चट्टान का प्रकार नहीं है?",
          "options_en": ["Igneous", "Sedimentary", "Metamorphic", "Magnetic"],
          "options_hi": ["आग्नेय", "संचयनशील", "परिवर्तित", "चुम्बकीय"],
          "answer_en": "Magnetic",
          "answer_hi": "चुम्बकीय",
          "attempted": false,
          "selected": ""
        },
        
            {
              "num": 16,
              "question_en": "Which part of the plant is responsible for water absorption?",
              "question_hi": "पौधे का कौन सा भाग पानी के अवशोषण के लिए जिम्मेदार है?",
              "options_en": ["Roots", "Leaves", "Stem", "Flowers"],
              "options_hi": ["मूल", "पत्तियाँ", "तना", "फूल"],
              "answer_en": "Roots",
              "answer_hi": "मूल",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 17,
              "question_en": "What is the process of converting liquid into solid called?",
              "question_hi": "तरल को ठोस में बदलने की प्रक्रिया को क्या कहते हैं?",
              "options_en": ["Freezing", "Boiling", "Melting", "Condensation"],
              "options_hi": ["ठंडा होना", "उबालना", "पिघलना", "संघनन"],
              "answer_en": "Freezing",
              "answer_hi": "ठंडा होना",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 18,
              "question_en": "What is the formula for calculating speed?",
              "question_hi": "गति की गणना के लिए सूत्र क्या है?",
              "options_en": ["Distance/Time", "Time/Distance", "Speed × Time", "Speed × Distance"],
              "options_hi": ["दूरी/समय", "समय/दूरी", "गति × समय", "गति × दूरी"],
              "answer_en": "Distance/Time",
              "answer_hi": "दूरी/समय",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 19,
              "question_en": "What is the most abundant metal in the Earth's crust?",
              "question_hi": "पृथ्वी की क्रस्ट में सबसे अधिक प्रचुर धातु कौन सी है?",
              "options_en": ["Iron", "Aluminum", "Copper", "Zinc"],
              "options_hi": ["लोहा", "एल्युमिनियम", "तांबा", "जिंक"],
              "answer_en": "Aluminum",
              "answer_hi": "एल्युमिनियम",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 20,
              "question_en": "Which of the following is a non-metal?",
              "question_hi": "निम्नलिखित में से कौन एक गैर-धातु है?",
              "options_en": ["Iron", "Copper", "Oxygen", "Zinc"],
              "options_hi": ["लोहा", "तांबा", "ऑक्सीजन", "जिंक"],
              "answer_en": "Oxygen",
              "answer_hi": "ऑक्सीजन",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 21,
              "question_en": "Which part of the human brain controls balance?",
              "question_hi": "मानव मस्तिष्क का कौन सा हिस्सा संतुलन नियंत्रित करता है?",
              "options_en": ["Cerebellum", "Cerebrum", "Medulla", "Spinal Cord"],
              "options_hi": ["केंद्रीय मस्तिष्क", "मस्तिष्कगुच्छ", "मेडुला", "रीढ़ की हड्डी"],
              "answer_en": "Cerebellum",
              "answer_hi": "केंद्रीय मस्तिष्क",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 22,
              "question_en": "Which process in plants converts light energy into chemical energy?",
              "question_hi": "पौधों में कौन सी प्रक्रिया प्रकाश ऊर्जा को रासायनिक ऊर्जा में परिवर्तित करती है?",
              "options_en": ["Respiration", "Transpiration", "Photosynthesis", "Digestion"],
              "options_hi": ["श्वसन", "वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "पाचन"],
              "answer_en": "Photosynthesis",
              "answer_hi": "प्रकाश संश्लेषण",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 23,
              "question_en": "What is the primary function of the xylem in plants?",
              "question_hi": "पौधों में जाइलम का प्राथमिक कार्य क्या है?",
              "options_en": ["Transport of water", "Transport of food", "Storage of food", "Photosynthesis"],
              "options_hi": ["पानी का परिवहन", "खाद्य का परिवहन", "खाद्य का संचयन", "प्रकाश संश्लेषण"],
              "answer_en": "Transport of water",
              "answer_hi": "पानी का परिवहन",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 24,
              "question_en": "Which of the following is a greenhouse gas?",
              "question_hi": "निम्नलिखित में से कौन एक ग्रीनहाउस गैस है?",
              "options_en": ["Oxygen", "Nitrogen", "Methane", "Argon"],
              "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "मीथेन", "आर्गन"],
              "answer_en": "Methane",
              "answer_hi": "मीथेन",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 25,
              "question_en": "Which gas is most commonly used in making fertilizers?",
              "question_hi": "उर्वरक बनाने में सबसे अधिक कौन सी गैस उपयोग की जाती है?",
              "options_en": ["Nitrogen", "Oxygen", "Carbon dioxide", "Sulfur dioxide"],
              "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "सल्फर डाइऑक्साइड"],
              "answer_en": "Nitrogen",
              "answer_hi": "नाइट्रोजन",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 26,
              "question_en": "Which of the following is the hardest natural substance?",
              "question_hi": "निम्नलिखित में से सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
              "options_en": ["Diamond", "Gold", "Iron", "Platinum"],
              "options_hi": ["हीरा", "सोना", "लोहा", "प्लैटिनम"],
              "answer_en": "Diamond",
              "answer_hi": "हीरा",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 27,
              "question_en": "Which of the following is the main component of air?",
              "question_hi": "वायुमंडल का मुख्य घटक कौन सा है?",
              "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
              "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "आर्गन"],
              "answer_en": "Nitrogen",
              "answer_hi": "नाइट्रोजन",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 28,
              "question_en": "Which of the following is not a part of the digestive system?",
              "question_hi": "निम्नलिखित में से कौन पाचन तंत्र का हिस्सा नहीं है?",
              "options_en": ["Stomach", "Liver", "Pancreas", "Kidney"],
              "options_hi": ["पेट", "यकृत", "अग्नाशय", "गुर्दा"],
              "answer_en": "Kidney",
              "answer_hi": "गुर्दा",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 29,
              "question_en": "Which is the longest bone in the human body?",
              "question_hi": "मानव शरीर की सबसे लंबी हड्डी कौन सी है?",
              "options_en": ["Femur", "Humerus", "Tibia", "Radius"],
              "options_hi": ["उपजंघ", "ह्यूमरस", "पिछाड़ी", "दूरी"],
              "answer_en": "Femur",
              "answer_hi": "उपजंघ",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 30,
              "question_en": "What is the chemical formula for calcium carbonate?",
              "question_hi": "कैल्शियम कार्बोनेट का रासायनिक सूत्र क्या है?",
              "options_en": ["CaCO3", "CaO", "CaCl2", "CaSO4"],
              "options_hi": ["CaCO3", "CaO", "CaCl2", "CaSO4"],
              "answer_en": "CaCO3",
              "answer_hi": "CaCO3",
              "attempted": false,
              "selected": ""
            },
          
            
                {
                  "num": 31,
                  "question_en": "Which of the following is the most abundant element in the Earth's crust?",
                  "question_hi": "पृथ्वी की क्रस्ट में सबसे अधिक प्रचुर तत्व कौन सा है?",
                  "options_en": ["Oxygen", "Silicon", "Iron", "Aluminum"],
                  "options_hi": ["ऑक्सीजन", "सिलिकॉन", "लोहा", "एल्युमिनियम"],
                  "answer_en": "Oxygen",
                  "answer_hi": "ऑक्सीजन",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 32,
                  "question_en": "Which of the following is an example of a non-renewable resource?",
                  "question_hi": "निम्नलिखित में से कौन सा एक गैर-नवीकरणीय संसाधन का उदाहरण है?",
                  "options_en": ["Solar energy", "Wind energy", "Coal", "Biomass"],
                  "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "जैव ऊर्जा"],
                  "answer_en": "Coal",
                  "answer_hi": "कोयला",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 33,
                  "question_en": "What is the primary function of the phloem in plants?",
                  "question_hi": "पौधों में फ्लोएम का प्राथमिक कार्य क्या है?",
                  "options_en": ["Transport of water", "Transport of food", "Storage of water", "Storage of food"],
                  "options_hi": ["पानी का परिवहन", "खाद्य का परिवहन", "पानी का संचयन", "खाद्य का संचयन"],
                  "answer_en": "Transport of food",
                  "answer_hi": "खाद्य का परिवहन",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 34,
                  "question_en": "Which element is most abundant in the human body?",
                  "question_hi": "मानव शरीर में सबसे प्रचुर तत्व कौन सा है?",
                  "options_en": ["Oxygen", "Carbon", "Hydrogen", "Nitrogen"],
                  "options_hi": ["ऑक्सीजन", "कार्बन", "हाइड्रोजन", "नाइट्रोजन"],
                  "answer_en": "Oxygen",
                  "answer_hi": "ऑक्सीजन",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 35,
                  "question_en": "What is the unit of electrical resistance?",
                  "question_hi": "वैद्युत प्रतिरोध की इकाई क्या है?",
                  "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
                  "options_hi": ["वोल्ट", "ऐम्पीयर", "ओहम", "वॉट"],
                  "answer_en": "Ohm",
                  "answer_hi": "ओहम",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 36,
                  "question_en": "What is the main component of natural gas?",
                  "question_hi": "प्राकृतिक गैस का मुख्य घटक क्या है?",
                  "options_en": ["Methane", "Ethane", "Propane", "Butane"],
                  "options_hi": ["मीथेन", "एथेन", "प्रोपेन", "ब्यूटेन"],
                  "answer_en": "Methane",
                  "answer_hi": "मीथेन",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 37,
                  "question_en": "Which planet is known as the 'Red Planet'?",
                  "question_hi": "कौन सा ग्रह 'लाल ग्रह' के रूप में जाना जाता है?",
                  "options_en": ["Mars", "Venus", "Jupiter", "Saturn"],
                  "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
                  "answer_en": "Mars",
                  "answer_hi": "मंगल",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 38,
                  "question_en": "Which of the following is an example of a simple machine?",
                  "question_hi": "निम्नलिखित में से कौन सा एक सरल यांत्रिक उपकरण का उदाहरण है?",
                  "options_en": ["Pulley", "Battery", "Transistor", "Light bulb"],
                  "options_hi": ["पुली", "बैटरी", "ट्रांजिस्टर", "लाइट बल्ब"],
                  "answer_en": "Pulley",
                  "answer_hi": "पुली",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 39,
                  "question_en": "What is the name of the process by which plants lose water through their leaves?",
                  "question_hi": "वह प्रक्रिया क्या कहलाती है, जिसमें पौधे अपने पत्तों से पानी खोते हैं?",
                  "options_en": ["Transpiration", "Photosynthesis", "Respiration", "Condensation"],
                  "options_hi": ["वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "श्वसन", "संघनन"],
                  "answer_en": "Transpiration",
                  "answer_hi": "वाष्पोत्सर्जन",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 40,
                  "question_en": "Which of the following is not a part of the water cycle?",
                  "question_hi": "निम्नलिखित में से कौन जल चक्र का हिस्सा नहीं है?",
                  "options_en": ["Evaporation", "Precipitation", "Condensation", "Sedimentation"],
                  "options_hi": ["वाष्पीकरण", "वृष्टि", "संघनन", "संचयन"],
                  "answer_en": "Sedimentation",
                  "answer_hi": "संचयन",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 41,
                  "question_en": "What is the primary source of energy for the Earth?",
                  "question_hi": "पृथ्वी के लिए ऊर्जा का प्राथमिक स्रोत क्या है?",
                  "options_en": ["Moon", "Sun", "Wind", "Water"],
                  "options_hi": ["चंद्रमा", "सूर्य", "हवा", "पानी"],
                  "answer_en": "Sun",
                  "answer_hi": "सूर्य",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 42,
                  "question_en": "Which of the following is an example of a chemical change?",
                  "question_hi": "निम्नलिखित में से कौन रासायनिक परिवर्तन का उदाहरण है?",
                  "options_en": ["Boiling water", "Melting ice", "Rusting of iron", "Freezing water"],
                  "options_hi": ["पानी उबालना", "बर्फ पिघलना", "लोहे का जंग लगना", "पानी जमना"],
                  "answer_en": "Rusting of iron",
                  "answer_hi": "लोहे का जंग लगना",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 43,
                  "question_en": "What is the chemical formula for water?",
                  "question_hi": "पानी का रासायनिक सूत्र क्या है?",
                  "options_en": ["H2O", "CO2", "O2", "CH4"],
                  "options_hi": ["H2O", "CO2", "O2", "CH4"],
                  "answer_en": "H2O",
                  "answer_hi": "H2O",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 44,
                  "question_en": "Which force keeps the planets in orbit around the sun?",
                  "question_hi": "कौन सी शक्ति ग्रहों को सूर्य के चारों ओर कक्षा में बनाए रखती है?",
                  "options_en": ["Magnetic force", "Gravitational force", "Electrostatic force", "Frictional force"],
                  "options_hi": ["चुम्बकीय बल", "गुरुत्वाकर्षण बल", "इलेक्ट्रोस्टैटिक बल", "घर्षण बल"],
                  "answer_en": "Gravitational force",
                  "answer_hi": "गुरुत्वाकर्षण बल",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 45,
                  "question_en": "What is the main function of the human respiratory system?",
                  "question_hi": "मानव श्वसन तंत्र का मुख्य कार्य क्या है?",
                  "options_en": ["To transport oxygen", "To digest food", "To regulate body temperature", "To exchange gases"],
                  "options_hi": ["ऑक्सीजन का परिवहन करना", "खाद्य का पाचन करना", "शरीर का तापमान नियंत्रित करना", "गैसों का आदान-प्रदान करना"],
                  "answer_en": "To exchange gases",
                  "answer_hi": "गैसों का आदान-प्रदान करना",
                  "attempted": false,
                  "selected": ""
                },
                
                    {
                      "num": 46,
                      "question_en": "Which of the following is a renewable source of energy?",
                      "question_hi": "निम्नलिखित में से कौन सा एक नवीकरणीय ऊर्जा स्रोत है?",
                      "options_en": ["Coal", "Natural gas", "Solar energy", "Petroleum"],
                      "options_hi": ["कोयला", "प्राकृतिक गैस", "सौर ऊर्जा", "पेट्रोलियम"],
                      "answer_en": "Solar energy",
                      "answer_hi": "सौर ऊर्जा",
                      "attempted": false,
                      "selected": ""
                    },
                    {
                      "num": 47,
                      "question_en": "What is the process by which plants make their own food?",
                      "question_hi": "वह प्रक्रिया क्या कहलाती है, जिसके द्वारा पौधे अपनी खुद की खाद्य बनाते हैं?",
                      "options_en": ["Respiration", "Transpiration", "Photosynthesis", "Fermentation"],
                      "options_hi": ["श्वसन", "वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "किण्वन"],
                      "answer_en": "Photosynthesis",
                      "answer_hi": "प्रकाश संश्लेषण",
                      "attempted": false,
                      "selected": ""
                    },
                    {
                      "num": 48,
                      "question_en": "Which of the following is not a property of acids?",
                      "question_hi": "निम्नलिखित में से कौन सी अम्लों की विशेषता नहीं है?",
                      "options_en": ["Sour taste", "Turns blue litmus paper red", "Reacts with metals to produce hydrogen gas", "Turns red litmus paper blue"],
                      "options_hi": ["खट्टा स्वाद", "नीले लिटमस कागज को लाल बनाना", "धातुओं के साथ प्रतिक्रिया करके हाइड्रोजन गैस उत्पन्न करना", "लाल लिटमस कागज को नीला बनाना"],
                      "answer_en": "Turns red litmus paper blue",
                      "answer_hi": "लाल लिटमस कागज को नीला बनाना",
                      "attempted": false,
                      "selected": ""
                    },
                    {
                      "num": 49,
                      "question_en": "What is the chemical name of common salt?",
                      "question_hi": "साधारण नमक का रासायनिक नाम क्या है?",
                      "options_en": ["Sodium bicarbonate", "Sodium chloride", "Calcium carbonate", "Potassium chloride"],
                      "options_hi": ["सोडियम बाइकार्बोनेट", "सोडियम क्लोराइड", "कैल्शियम कार्बोनेट", "पोटेशियम क्लोराइड"],
                      "answer_en": "Sodium chloride",
                      "answer_hi": "सोडियम क्लोराइड",
                      "attempted": false,
                      "selected": ""
                    },
                    {
                      "num": 50,
                      "question_en": "Which of the following is responsible for causing diseases in humans?",
                      "question_hi": "निम्नलिखित में से कौन मानवों में रोगों का कारण बनता है?",
                      "options_en": ["Bacteria", "Water", "Air", "Oxygen"],
                      "options_hi": ["बैक्टीरिया", "पानी", "हवा", "ऑक्सीजन"],
                      "answer_en": "Bacteria",
                      "answer_hi": "बैक्टीरिया",
                      "attempted": false,
                      "selected": ""
                    },
                    {
                      "num": 51,
                      "question_en": "What is the unit of force?",
                      "question_hi": "बल की इकाई क्या है?",
                      "options_en": ["Newton", "Joule", "Watt", "Pascal"],
                      "options_hi": ["न्यूटन", "जूल", "वॉट", "पास्कल"],
                      "answer_en": "Newton",
                      "answer_hi": "न्यूटन",
                      "attempted": false,
                      "selected": ""
                    },
                    {
                      "num": 52,
                      "question_en": "Which gas is most commonly used in the production of fertilizers?",
                      "question_hi": "उर्वरकों के उत्पादन में सबसे सामान्य गैस कौन सी है?",
                      "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
                      "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
                      "answer_en": "Nitrogen",
                      "answer_hi": "नाइट्रोजन",
                      "attempted": false,
                      "selected": ""
                    },
                    {
                      "num": 53,
                      "question_en": "What is the boiling point of water?",
                      "question_hi": "पानी का उबालने का तापमान क्या है?",
                      "options_en": ["100°C", "0°C", "50°C", "150°C"],
                      "options_hi": ["100°C", "0°C", "50°C", "150°C"],
                      "answer_en": "100°C",
                      "answer_hi": "100°C",
                      "attempted": false,
                      "selected": ""
                    },
                    {
                      "num": 54,
                      "question_en": "Which part of the human brain controls breathing?",
                      "question_hi": "मानव मस्तिष्क का कौन सा हिस्सा श्वास को नियंत्रित करता है?",
                      "options_en": ["Cerebellum", "Medulla Oblongata", "Cerebrum", "Thalamus"],
                      "options_hi": ["सेरेबेलम", "मेडुला ऑब्लोंगाटा", "सेरेब्रम", "थैलेमस"],
                      "answer_en": "Medulla Oblongata",
                      "answer_hi": "मेडुला ऑब्लोंगाटा",
                      "attempted": false,
                      "selected": ""
                    },
                    {
                      "num": 55,
                      "question_en": "Which of the following is not a greenhouse gas?",
                      "question_hi": "निम्नलिखित में से कौन सा एक ग्रीनहाउस गैस नहीं है?",
                      "options_en": ["Methane", "Oxygen", "Carbon dioxide", "Nitrous oxide"],
                      "options_hi": ["मीथेन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रस ऑक्साइड"],
                      "answer_en": "Oxygen",
                      "answer_hi": "ऑक्सीजन",
                      "attempted": false,
                      "selected": ""
                    },
                    {
                      "num": 56,
                      "question_en": "Which of the following processes is used to separate components of a mixture based on their boiling points?",
                      "question_hi": "निम्नलिखित में से कौन सा प्रक्रिया मिश्रण के घटकों को उनके उबालने के बिंदु के आधार पर अलग करने के लिए उपयोग की जाती है?",
                      "options_en": ["Filtration", "Distillation", "Evaporation", "Crystallization"],
                      "options_hi": ["निस्पंदन", "वाष्पीकरण", "वाष्पन", "स्फटिकीकरण"],
                      "answer_en": "Distillation",
                      "answer_hi": "वाष्पीकरण",
                      "attempted": false,
                      "selected": ""
                    }
                  
                  
              
              
      
      
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