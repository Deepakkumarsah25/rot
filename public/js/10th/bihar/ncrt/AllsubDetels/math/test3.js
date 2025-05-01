
const questions = [
    {
      "num": 1,
      "question_en": "What is the value of the discriminant of the quadratic equation 2x² + 3x - 5 = 0?",
      "question_hi": "2x² + 3x - 5 = 0 इस द्विघात समीकरण का विविक्तक (discriminant) कितना है?",
      "options_en": ["49", "19", "39", "29"],
      "options_hi": ["49", "19", "39", "29"],
      "answer_en": "49",
      "answer_hi": "49",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "What is the sum of the roots of the quadratic equation x² - 7x + 10 = 0?",
      "question_hi": "x² - 7x + 10 = 0 इस द्विघात समीकरण के मूलों का योग कितना है?",
      "options_en": ["7", "-7", "10", "-10"],
      "options_hi": ["7", "-7", "10", "-10"],
      "answer_en": "7",
      "answer_hi": "7",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "If sin A = 3/5, then what is the value of cos A?",
      "question_hi": "यदि sin A = 3/5 हो, तो cos A का मान क्या होगा?",
      "options_en": ["4/5", "5/3", "3/4", "4/3"],
      "options_hi": ["4/5", "5/3", "3/4", "4/3"],
      "answer_en": "4/5",
      "answer_hi": "4/5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "The HCF of 48 and 180 is:",
      "question_hi": "48 और 180 का महत्तम समापवर्त्य (HCF) क्या है?",
      "options_en": ["12", "24", "6", "36"],
      "options_hi": ["12", "24", "6", "36"],
      "answer_en": "12",
      "answer_hi": "12",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "The decimal expansion of 7/8 is:",
      "question_hi": "7/8 का दशमलव विस्तार क्या है?",
      "options_en": ["0.875", "0.8755", "0.78", "0.0875"],
      "options_hi": ["0.875", "0.8755", "0.78", "0.0875"],
      "answer_en": "0.875",
      "answer_hi": "0.875",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "If the distance between (x, 4) and (3, -2) is 10 units, then x = ?",
      "question_hi": "यदि (x, 4) और (3, -2) के बीच की दूरी 10 इकाई है, तो x = ?",
      "options_en": ["9", "-3", "6", "0"],
      "options_hi": ["9", "-3", "6", "0"],
      "answer_en": "9",
      "answer_hi": "9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "If a pair of linear equations is inconsistent, then the lines will be:",
      "question_hi": "यदि रैखिक समीकरणों का एक युग्म असंगत हो, तो रेखाएँ होंगी:",
      "options_en": ["Parallel", "Coincident", "Intersecting", "Perpendicular"],
      "options_hi": ["समानांतर", "सहभाजित", "प्रतिच्छेदी", "लंबवत"],
      "answer_en": "Parallel",
      "answer_hi": "समानांतर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "The coordinates of the origin are:",
      "question_hi": "मूल बिंदु के निर्देशांक होते हैं:",
      "options_en": ["(0, 0)", "(1, 1)", "(-1, -1)", "(0, 1)"],
      "options_hi": ["(0, 0)", "(1, 1)", "(-1, -1)", "(0, 1)"],
      "answer_en": "(0, 0)",
      "answer_hi": "(0, 0)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "The distance between the points (1, 2) and (4, 6) is:",
      "question_hi": "(1, 2) और (4, 6) बिंदुओं के बीच की दूरी है:",
      "options_en": ["5", "6", "7", "3"],
      "options_hi": ["5", "6", "7", "3"],
      "answer_en": "5",
      "answer_hi": "5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "If the ratio of the areas of two similar triangles is 9:16, then the ratio of their corresponding sides is:",
      "question_hi": "यदि दो समान त्रिकोणों के क्षेत्रफलों का अनुपात 9:16 है, तो उनके संगत भुजाओं का अनुपात क्या होगा?",
      "options_en": ["3:4", "4:3", "9:4", "16:9"],
      "options_hi": ["3:4", "4:3", "9:4", "16:9"],
      "answer_en": "3:4",
      "answer_hi": "3:4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "If a triangle has angles 60°, 60°, and 60°, what type of triangle is it?",
      "question_hi": "यदि किसी त्रिभुज के कोण 60°, 60°, और 60° हैं, तो वह किस प्रकार का त्रिभुज है?",
      "options_en": ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
      "options_hi": ["समभुज", "समद्विबाहु", "विषमभुज", "समकोण"],
      "answer_en": "Equilateral",
      "answer_hi": "समभुज",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "What is the value of cos 60°?",
      "question_hi": "cos 60° का मान क्या है?",
      "options_en": ["1/2", "√3/2", "0", "1"],
      "options_hi": ["1/2", "√3/2", "0", "1"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "If a² + b² = c², which triangle does it represent?",
      "question_hi": "यदि a² + b² = c² हो, तो यह किस त्रिभुज को दर्शाता है?",
      "options_en": ["Right-angled", "Scalene", "Equilateral", "Isosceles"],
      "options_hi": ["समकोण", "विषमभुज", "समभुज", "समद्विबाहु"],
      "answer_en": "Right-angled",
      "answer_hi": "समकोण",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "What is the value of tan 45°?",
      "question_hi": "tan 45° का मान क्या है?",
      "options_en": ["1", "0", "√3", "1/√3"],
      "options_hi": ["1", "0", "√3", "1/√3"],
      "answer_en": "1",
      "answer_hi": "1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "What is the formula of the area of a circle?",
      "question_hi": "वृत्त के क्षेत्रफल का सूत्र क्या है?",
      "options_en": ["πr²", "2πr", "πd", "2r"],
      "options_hi": ["πr²", "2πr", "πd", "2r"],
      "answer_en": "πr²",
      "answer_hi": "πr²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "If the radius of a circle is doubled, the area becomes:",
      "question_hi": "यदि वृत्त की त्रिज्या दोगुनी कर दी जाए, तो क्षेत्रफल क्या हो जाएगा?",
      "options_en": ["4 times", "2 times", "3 times", "Half"],
      "options_hi": ["4 गुना", "2 गुना", "3 गुना", "आधा"],
      "answer_en": "4 times",
      "answer_hi": "4 गुना",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "What is the volume of a cube with side length 5 cm?",
      "question_hi": "5 सेमी भुजा वाले घन का आयतन क्या होगा?",
      "options_en": ["125 cm³", "25 cm³", "100 cm³", "150 cm³"],
      "options_hi": ["125 सेमी³", "25 सेमी³", "100 सेमी³", "150 सेमी³"],
      "answer_en": "125 cm³",
      "answer_hi": "125 सेमी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "What is the surface area of a sphere with radius r?",
      "question_hi": "त्रिज्या r वाले गोले का पृष्ठ क्षेत्रफल क्या है?",
      "options_en": ["4πr²", "2πr²", "πr²", "3πr²"],
      "options_hi": ["4πr²", "2πr²", "πr²", "3πr²"],
      "answer_en": "4πr²",
      "answer_hi": "4πr²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_en": "If a cylinder has radius r and height h, what is its volume?",
      "question_hi": "त्रिज्या r और ऊँचाई h वाले सिलेंडर का आयतन क्या है?",
      "options_en": ["πr²h", "2πrh", "πrh²", "πr³"],
      "options_hi": ["πr²h", "2πrh", "πrh²", "πr³"],
      "answer_en": "πr²h",
      "answer_hi": "πr²h",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_en": "What is the total surface area of a cube of side a?",
      "question_hi": "भुजा a वाले घन का सम्पूर्ण पृष्ठ क्षेत्रफल क्या है?",
      "options_en": ["6a²", "4a²", "2a²", "a²"],
      "options_hi": ["6a²", "4a²", "2a²", "a²"],
      "answer_en": "6a²",
      "answer_hi": "6a²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 21,
      "question_en": "What is the probability of getting a head in a single toss of a coin?",
      "question_hi": "एक सिक्के को उछालने पर हेड आने की संभावना क्या है?",
      "options_en": ["1/2", "1/3", "1", "2"],
      "options_hi": ["1/2", "1/3", "1", "2"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 22,
      "question_en": "Which number is a prime number?",
      "question_hi": "निम्न में से कौन एक अभाज्य संख्या है?",
      "options_en": ["7", "8", "9", "10"],
      "options_hi": ["7", "8", "9", "10"],
      "answer_en": "7",
      "answer_hi": "7",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 23,
      "question_en": "What is the solution to the equation 2x - 5 = 9?",
      "question_hi": "समीकरण 2x - 5 = 9 का हल क्या है?",
      "options_en": ["7", "5", "6", "8"],
      "options_hi": ["7", "5", "6", "8"],
      "answer_en": "7",
      "answer_hi": "7",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 24,
      "question_en": "Which of the following is a linear equation?",
      "question_hi": "निम्न में से कौन एक रैखिक समीकरण है?",
      "options_en": ["2x + 3 = 5", "x² + 2x = 3", "x³ = 27", "x² - x = 0"],
      "options_hi": ["2x + 3 = 5", "x² + 2x = 3", "x³ = 27", "x² - x = 0"],
      "answer_en": "2x + 3 = 5",
      "answer_hi": "2x + 3 = 5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 25,
      "question_en": "How many sides does a regular hexagon have?",
      "question_hi": "एक सम षट्भुज में कितनी भुजाएँ होती हैं?",
      "options_en": ["6", "5", "8", "4"],
      "options_hi": ["6", "5", "8", "4"],
      "answer_en": "6",
      "answer_hi": "6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 26,
      "question_en": "The median of 5, 7, 3, 9, 1 is:",
      "question_hi": "5, 7, 3, 9, 1 का माध्यिका (Median) क्या है?",
      "options_en": ["5", "3", "7", "1"],
      "options_hi": ["5", "3", "7", "1"],
      "answer_en": "5",
      "answer_hi": "5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 27,
      "question_en": "What is the mode of 2, 3, 3, 4, 5?",
      "question_hi": "2, 3, 3, 4, 5 का बहुलक (Mode) क्या है?",
      "options_en": ["3", "2", "4", "5"],
      "options_hi": ["3", "2", "4", "5"],
      "answer_en": "3",
      "answer_hi": "3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 28,
      "question_en": "What is the mean of 5, 10, 15, 20?",
      "question_hi": "5, 10, 15, 20 का औसत (Mean) क्या है?",
      "options_en": ["12.5", "15", "10", "20"],
      "options_hi": ["12.5", "15", "10", "20"],
      "answer_en": "12.5",
      "answer_hi": "12.5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 29,
      "question_en": "Which of the following is a perfect square?",
      "question_hi": "निम्न में से कौन पूर्ण वर्ग है?",
      "options_en": ["49", "50", "30", "90"],
      "options_hi": ["49", "50", "30", "90"],
      "answer_en": "49",
      "answer_hi": "49",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 30,
      "question_en": "What is the cube of 3?",
      "question_hi": "3 का घन क्या है?",
      "options_en": ["27", "9", "81", "18"],
      "options_hi": ["27", "9", "81", "18"],
      "answer_en": "27",
      "answer_hi": "27",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 31,
      "question_en": "Which of these is a rational number?",
      "question_hi": "इनमें से कौन एक परिमेय संख्या है?",
      "options_en": ["3/4", "√2", "π", "√3"],
      "options_hi": ["3/4", "√2", "π", "√3"],
      "answer_en": "3/4",
      "answer_hi": "3/4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 32,
      "question_en": "The distance formula in coordinate geometry is:",
      "question_hi": "निर्देशांक ज्यामिति में दूरी सूत्र क्या है?",
      "options_en": ["√[(x₂−x₁)² + (y₂−y₁)²]", "(x₂−x₁) + (y₂−y₁)", "(x₁+x₂)(y₁+y₂)", "None"],
      "options_hi": ["√[(x₂−x₁)² + (y₂−y₁)²]", "(x₂−x₁) + (y₂−y₁)", "(x₁+x₂)(y₁+y₂)", "कोई नहीं"],
      "answer_en": "√[(x₂−x₁)² + (y₂−y₁)²]",
      "answer_hi": "√[(x₂−x₁)² + (y₂−y₁)²]",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 33,
      "question_en": "Which figure has the maximum number of lines of symmetry?",
      "question_hi": "किस आकृति में सर्वाधिक रेखीय सममितियाँ होती हैं?",
      "options_en": ["Circle", "Square", "Triangle", "Rectangle"],
      "options_hi": ["वृत्त", "वर्ग", "त्रिभुज", "आयत"],
      "answer_en": "Circle",
      "answer_hi": "वृत्त",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 34,
      "question_en": "What is the value of sin²θ + cos²θ?",
      "question_hi": "sin²θ + cos²θ का मान क्या है?",
      "options_en": ["1", "0", "2", "√2"],
      "options_hi": ["1", "0", "2", "√2"],
      "answer_en": "1",
      "answer_hi": "1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 35,
      "question_en": "Which of the following is a factor of x² - 9?",
      "question_hi": "x² - 9 का कौन एक गुणनखंड है?",
      "options_en": ["(x - 3)", "(x + 2)", "(x + 4)", "(x - 2)"],
      "options_hi": ["(x - 3)", "(x + 2)", "(x + 4)", "(x - 2)"],
      "answer_en": "(x - 3)",
      "answer_hi": "(x - 3)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 36,
      "question_en": "What is the value of 0 factorial (0!)?",
      "question_hi": "0 फैक्टोरियल (0!) का मान क्या है?",
      "options_en": ["1", "0", "undefined", "-1"],
      "options_hi": ["1", "0", "अपरिभाषित", "-1"],
      "answer_en": "1",
      "answer_hi": "1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 37,
      "question_en": "Which of the following is a binomial expression?",
      "question_hi": "निम्न में से कौन द्विपद रूप है?",
      "options_en": ["x + y", "x", "x² + y² + z", "x²"],
      "options_hi": ["x + y", "x", "x² + y² + z", "x²"],
      "answer_en": "x + y",
      "answer_hi": "x + y",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 38,
      "question_en": "The value of √81 is:",
      "question_hi": "√81 का मान क्या है?",
      "options_en": ["9", "8", "7", "6"],
      "options_hi": ["9", "8", "7", "6"],
      "answer_en": "9",
      "answer_hi": "9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 39,
      "question_en": "The cube root of 64 is:",
      "question_hi": "64 का घनमूल क्या है?",
      "options_en": ["4", "6", "8", "5"],
      "options_hi": ["4", "6", "8", "5"],
      "answer_en": "4",
      "answer_hi": "4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 40,
      "question_en": "What is the angle sum of a triangle?",
      "question_hi": "त्रिभुज के सभी कोणों का योग कितना होता है?",
      "options_en": ["180°", "90°", "360°", "270°"],
      "options_hi": ["180°", "90°", "360°", "270°"],
      "answer_en": "180°",
      "answer_hi": "180°",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 41,
      "question_en": "What is the value of √81?",
      "question_hi": "√81 का मान क्या है?",
      "options_en": ["9", "8", "7", "6"],
      "options_hi": ["9", "8", "7", "6"],
      "answer_en": "9",
      "answer_hi": "9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 42,
      "question_en": "What is the HCF of 18 and 24?",
      "question_hi": "18 और 24 का महत्तम समापवर्तक (HCF) क्या है?",
      "options_en": ["6", "3", "9", "12"],
      "options_hi": ["6", "3", "9", "12"],
      "answer_en": "6",
      "answer_hi": "6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 43,
      "question_en": "Which is the smallest composite number?",
      "question_hi": "सबसे छोटी यौगिक संख्या कौन सी है?",
      "options_en": ["4", "6", "2", "9"],
      "options_hi": ["4", "6", "2", "9"],
      "answer_en": "4",
      "answer_hi": "4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 44,
      "question_en": "The number of zeros in the square of 100 is:",
      "question_hi": "100 के वर्ग में कितने शून्य होते हैं?",
      "options_en": ["4", "2", "3", "5"],
      "options_hi": ["4", "2", "3", "5"],
      "answer_en": "4",
      "answer_hi": "4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 45,
      "question_en": "LCM of 5 and 7 is:",
      "question_hi": "5 और 7 का लघुत्तम समापवर्त्य (LCM) क्या है?",
      "options_en": ["35", "12", "5", "7"],
      "options_hi": ["35", "12", "5", "7"],
      "answer_en": "35",
      "answer_hi": "35",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 46,
      "question_en": "The cube root of 64 is:",
      "question_hi": "64 का घनमूल क्या है?",
      "options_en": ["4", "3", "5", "6"],
      "options_hi": ["4", "3", "5", "6"],
      "answer_en": "4",
      "answer_hi": "4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 47,
      "question_en": "How many rational numbers are there between 1 and 2?",
      "question_hi": "1 और 2 के बीच कितनी परिमेय संख्याएँ होती हैं?",
      "options_en": ["Infinite", "0", "1", "10"],
      "options_hi": ["अनंत", "0", "1", "10"],
      "answer_en": "Infinite",
      "answer_hi": "अनंत",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 48,
      "question_en": "What is the next term in the sequence: 2, 4, 8, 16, ...?",
      "question_hi": "क्रम 2, 4, 8, 16, ... का अगला पद क्या होगा?",
      "options_en": ["32", "24", "20", "30"],
      "options_hi": ["32", "24", "20", "30"],
      "answer_en": "32",
      "answer_hi": "32",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 49,
      "question_en": "Which of these angles is a right angle?",
      "question_hi": "इनमें से कौन सा कोण समकोण है?",
      "options_en": ["90°", "60°", "120°", "180°"],
      "options_hi": ["90°", "60°", "120°", "180°"],
      "answer_en": "90°",
      "answer_hi": "90°",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 50,
      "question_en": "What is the value of π (pi) approximately?",
      "question_hi": "π (पाई) का मान लगभग क्या होता है?",
      "options_en": ["3.14", "2.17", "4.13", "3.41"],
      "options_hi": ["3.14", "2.17", "4.13", "3.41"],
      "answer_en": "3.14",
      "answer_hi": "3.14",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 51,
      "question_en": "The square of a negative number is always:",
      "question_hi": "किसी ऋणात्मक संख्या का वर्ग हमेशा होता है:",
      "options_en": ["Positive", "Negative", "Zero", "None"],
      "options_hi": ["धनात्मक", "ऋणात्मक", "शून्य", "कोई नहीं"],
      "answer_en": "Positive",
      "answer_hi": "धनात्मक",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 52,
      "question_en": "How many vertices does a cube have?",
      "question_hi": "घन में कितने कोने होते हैं?",
      "options_en": ["8", "6", "12", "10"],
      "options_hi": ["8", "6", "12", "10"],
      "answer_en": "8",
      "answer_hi": "8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 53,
      "question_en": "What is the area of a square with side 6 cm?",
      "question_hi": "6 सेमी भुजा वाले वर्ग का क्षेत्रफल क्या होगा?",
      "options_en": ["36 cm²", "12 cm²", "18 cm²", "24 cm²"],
      "options_hi": ["36 सेमी²", "12 सेमी²", "18 सेमी²", "24 सेमी²"],
      "answer_en": "36 cm²",
      "answer_hi": "36 सेमी²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 54,
      "question_en": "The value of (a + b)² is:",
      "question_hi": "(a + b)² का मान है:",
      "options_en": ["a² + 2ab + b²", "a² - 2ab + b²", "a² + b²", "None"],
      "options_hi": ["a² + 2ab + b²", "a² - 2ab + b²", "a² + b²", "कोई नहीं"],
      "answer_en": "a² + 2ab + b²",
      "answer_hi": "a² + 2ab + b²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 55,
      "question_en": "Which shape has all sides and angles equal?",
      "question_hi": "कौन सी आकृति के सभी भुजाएँ और कोण बराबर होते हैं?",
      "options_en": ["Equilateral triangle", "Rectangle", "Scalene triangle", "Trapezium"],
      "options_hi": ["समभुज त्रिभुज", "आयत", "विषमभुज त्रिभुज", "समलंब चतुर्भुज"],
      "answer_en": "Equilateral triangle",
      "answer_hi": "समभुज त्रिभुज",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 56,
      "question_en": "Which of the following is an irrational number?",
      "question_hi": "निम्न में से कौन अपरिमेय संख्या है?",
      "options_en": ["√2", "1/2", "3", "0.25"],
      "options_hi": ["√2", "1/2", "3", "0.25"],
      "answer_en": "√2",
      "answer_hi": "√2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 57,
      "question_en": "Which of these is not a prime number?",
      "question_hi": "इनमें से कौन अभाज्य संख्या नहीं है?",
      "options_en": ["9", "7", "3", "11"],
      "options_hi": ["9", "7", "3", "11"],
      "answer_en": "9",
      "answer_hi": "9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 58,
      "question_en": "The number 0.333... is equal to:",
      "question_hi": "संख्या 0.333... किसके बराबर है?",
      "options_en": ["1/3", "3/10", "1/2", "3/4"],
      "options_hi": ["1/3", "3/10", "1/2", "3/4"],
      "answer_en": "1/3",
      "answer_hi": "1/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 59,
      "question_en": "What is the perimeter of a rectangle with length 8 cm and width 3 cm?",
      "question_hi": "लंबाई 8 सेमी और चौड़ाई 3 सेमी वाले आयत का परिमाप क्या है?",
      "options_en": ["22 cm", "24 cm", "18 cm", "26 cm"],
      "options_hi": ["22 सेमी", "24 सेमी", "18 सेमी", "26 सेमी"],
      "answer_en": "22 cm",
      "answer_hi": "22 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 60,
      "question_en": "Which of these can be the side of a right triangle?",
      "question_hi": "इनमें से कौन समकोण त्रिभुज की भुजाएँ हो सकती हैं?",
      "options_en": ["3, 4, 5", "2, 3, 4", "5, 5, 5", "6, 7, 8"],
      "options_hi": ["3, 4, 5", "2, 3, 4", "5, 5, 5", "6, 7, 8"],
      "answer_en": "3, 4, 5",
      "answer_hi": "3, 4, 5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 61,
      "question_en": "If x² = 81, what is the value of x?",
      "question_hi": "यदि x² = 81, तो x का मान क्या है?",
      "options_en": ["±9", "9", "-9", "0"],
      "options_hi": ["±9", "9", "-9", "0"],
      "answer_en": "±9",
      "answer_hi": "±9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 62,
      "question_en": "What is the formula for the area of a circle?",
      "question_hi": "वृत्त का क्षेत्रफल ज्ञात करने का सूत्र क्या है?",
      "options_en": ["πr²", "2πr", "πd", "r²"],
      "options_hi": ["πr²", "2πr", "πd", "r²"],
      "answer_en": "πr²",
      "answer_hi": "πr²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 63,
      "question_en": "What is the value of (a + b)²?",
      "question_hi": "(a + b)² का मान क्या है?",
      "options_en": ["a² + 2ab + b²", "a² - 2ab + b²", "a² + b²", "a² - b²"],
      "options_hi": ["a² + 2ab + b²", "a² - 2ab + b²", "a² + b²", "a² - b²"],
      "answer_en": "a² + 2ab + b²",
      "answer_hi": "a² + 2ab + b²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 64,
      "question_en": "What is the LCM of 12 and 18?",
      "question_hi": "12 और 18 का लघुत्तम समापवर्त्य (LCM) क्या है?",
      "options_en": ["36", "6", "12", "18"],
      "options_hi": ["36", "6", "12", "18"],
      "answer_en": "36",
      "answer_hi": "36",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 65,
      "question_en": "What is the square of 15?",
      "question_hi": "15 का वर्गफल क्या है?",
      "options_en": ["225", "150", "30", "115"],
      "options_hi": ["225", "150", "30", "115"],
      "answer_en": "225",
      "answer_hi": "225",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 66,
      "question_en": "Which of the following is a rational number?",
      "question_hi": "निम्नलिखित में से कौन एक परिमेय संख्या है?",
      "options_en": ["3/4", "√2", "π", "√3"],
      "options_hi": ["3/4", "√2", "π", "√3"],
      "answer_en": "3/4",
      "answer_hi": "3/4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 67,
      "question_en": "The product of two consecutive even numbers is 224. Find the numbers.",
      "question_hi": "दो क्रमागत सम संख्याओं का गुणनफल 224 है। संख्याएँ क्या हैं?",
      "options_en": ["14, 16", "12, 14", "10, 12", "16, 18"],
      "options_hi": ["14, 16", "12, 14", "10, 12", "16, 18"],
      "answer_en": "14, 16",
      "answer_hi": "14, 16",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 68,
      "question_en": "What is the value of x in the equation 3x + 5 = 20?",
      "question_hi": "समीकरण 3x + 5 = 20 में x का मान क्या है?",
      "options_en": ["5", "6", "7", "4"],
      "options_hi": ["5", "6", "7", "4"],
      "answer_en": "5",
      "answer_hi": "5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 69,
      "question_en": "What is the formula for volume of a cylinder?",
      "question_hi": "बेलन का आयतन ज्ञात करने का सूत्र क्या है?",
      "options_en": ["πr²h", "2πr", "πd", "πrh"],
      "options_hi": ["πr²h", "2πr", "πd", "πrh"],
      "answer_en": "πr²h",
      "answer_hi": "πr²h",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 70,
      "question_en": "What is the value of (a - b)²?",
      "question_hi": "(a - b)² का मान क्या है?",
      "options_en": ["a² - 2ab + b²", "a² + 2ab + b²", "a² + b²", "a² - b²"],
      "options_hi": ["a² - 2ab + b²", "a² + 2ab + b²", "a² + b²", "a² - b²"],
      "answer_en": "a² - 2ab + b²",
      "answer_hi": "a² - 2ab + b²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 71,
      "question_en": "Which of the following is a Pythagorean triplet?",
      "question_hi": "निम्नलिखित में से कौन एक पाइथागोरस त्रिक है?",
      "options_en": ["3, 4, 5", "5, 6, 7", "6, 8, 10", "9, 12, 15"],
      "options_hi": ["3, 4, 5", "5, 6, 7", "6, 8, 10", "9, 12, 15"],
      "answer_en": "3, 4, 5",
      "answer_hi": "3, 4, 5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 72,
      "question_en": "What is the square root of 49?",
      "question_hi": "49 का वर्गमूल क्या है?",
      "options_en": ["7", "14", "6", "8"],
      "options_hi": ["7", "14", "6", "8"],
      "answer_en": "7",
      "answer_hi": "7",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 73,
      "question_en": "What is the sum of interior angles of a triangle?",
      "question_hi": "त्रिभुज के अंत: कोणों का योगफल क्या होता है?",
      "options_en": ["180°", "90°", "360°", "270°"],
      "options_hi": ["180°", "90°", "360°", "270°"],
      "answer_en": "180°",
      "answer_hi": "180°",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 74,
      "question_en": "How many zeros are there in the square of 1000?",
      "question_hi": "1000 के वर्ग में कितने शून्य होते हैं?",
      "options_en": ["6", "3", "5", "4"],
      "options_hi": ["6", "3", "5", "4"],
      "answer_en": "6",
      "answer_hi": "6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 75,
      "question_en": "What is the cube root of 27?",
      "question_hi": "27 का घनमूल क्या है?",
      "options_en": ["3", "9", "6", "5"],
      "options_hi": ["3", "9", "6", "5"],
      "answer_en": "3",
      "answer_hi": "3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 76,
      "question_en": "Which number is both a square and a cube?",
      "question_hi": "कौन सी संख्या वर्ग और घन दोनों है?",
      "options_en": ["64", "36", "8", "16"],
      "options_hi": ["64", "36", "8", "16"],
      "answer_en": "64",
      "answer_hi": "64",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 77,
      "question_en": "What is the value of x if x/3 = 9?",
      "question_hi": "यदि x/3 = 9, तो x का मान क्या है?",
      "options_en": ["27", "3", "12", "6"],
      "options_hi": ["27", "3", "12", "6"],
      "answer_en": "27",
      "answer_hi": "27",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 78,
      "question_en": "What is the degree of the polynomial x² + 2x + 3?",
      "question_hi": "x² + 2x + 3 बहुपद की घात क्या है?",
      "options_en": ["2", "1", "3", "0"],
      "options_hi": ["2", "1", "3", "0"],
      "answer_en": "2",
      "answer_hi": "2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 79,
      "question_en": "Which shape has all sides equal and angles 90°?",
      "question_hi": "कौन-सा आकार जिसकी सभी भुजाएँ समान हों और कोण 90° हों?",
      "options_en": ["Square", "Rectangle", "Rhombus", "Parallelogram"],
      "options_hi": ["वर्ग", "आयत", "समचतुर्भुज", "समांतर चतुर्भुज"],
      "answer_en": "Square",
      "answer_hi": "वर्ग",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 80,
      "question_en": "If perimeter of a square is 36 cm, what is the length of its side?",
      "question_hi": "यदि वर्ग की परिमिति 36 सेमी है, तो उसकी भुजा की लंबाई क्या है?",
      "options_en": ["9 cm", "6 cm", "12 cm", "18 cm"],
      "options_hi": ["9 सेमी", "6 सेमी", "12 सेमी", "18 सेमी"],
      "answer_en": "9 cm",
      "answer_hi": "9 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 81,
      "question_en": "What is the value of (x + y)(x - y)?",
      "question_hi": "(x + y)(x - y) का मान क्या है?",
      "options_en": ["x² - y²", "x² + y²", "x² + 2xy + y²", "x² - 2xy + y²"],
      "options_hi": ["x² - y²", "x² + y²", "x² + 2xy + y²", "x² - 2xy + y²"],
      "answer_en": "x² - y²",
      "answer_hi": "x² - y²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 82,
      "question_en": "If a triangle has sides 5 cm, 12 cm, and 13 cm, is it a right triangle?",
      "question_hi": "यदि किसी त्रिभुज की भुजाएँ 5 सेमी, 12 सेमी और 13 सेमी हैं, तो क्या वह समकोण त्रिभुज है?",
      "options_en": ["Yes", "No", "Cannot say", "Only if angle is 90°"],
      "options_hi": ["हाँ", "नहीं", "कहा नहीं जा सकता", "केवल जब कोण 90° हो"],
      "answer_en": "Yes",
      "answer_hi": "हाँ",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 83,
      "question_en": "The value of √121 is?",
      "question_hi": "√121 का मान क्या है?",
      "options_en": ["11", "12", "10", "9"],
      "options_hi": ["11", "12", "10", "9"],
      "answer_en": "11",
      "answer_hi": "11",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 84,
      "question_en": "What is the sum of the first 10 natural numbers?",
      "question_hi": "प्रथम 10 प्राकृतिक संख्याओं का योगफल क्या है?",
      "options_en": ["55", "45", "50", "60"],
      "options_hi": ["55", "45", "50", "60"],
      "answer_en": "55",
      "answer_hi": "55",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 85,
      "question_en": "What is the HCF of 18 and 24?",
      "question_hi": "18 और 24 का महत्तम समापवर्तक (HCF) क्या है?",
      "options_en": ["6", "12", "3", "9"],
      "options_hi": ["6", "12", "3", "9"],
      "answer_en": "6",
      "answer_hi": "6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 86,
      "question_en": "How many faces does a cube have?",
      "question_hi": "घन की कितनी सतहें होती हैं?",
      "options_en": ["6", "4", "8", "12"],
      "options_hi": ["6", "4", "8", "12"],
      "answer_en": "6",
      "answer_hi": "6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 87,
      "question_en": "What is the value of 2³ × 2²?",
      "question_hi": "2³ × 2² का मान क्या है?",
      "options_en": ["32", "8", "4", "16"],
      "options_hi": ["32", "8", "4", "16"],
      "answer_en": "32",
      "answer_hi": "32",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 88,
      "question_en": "What is the perimeter of a rectangle with length 10 cm and breadth 5 cm?",
      "question_hi": "10 सेमी लंबाई और 5 सेमी चौड़ाई वाले आयत की परिमिति क्या है?",
      "options_en": ["30 cm", "25 cm", "50 cm", "15 cm"],
      "options_hi": ["30 सेमी", "25 सेमी", "50 सेमी", "15 सेमी"],
      "answer_en": "30 cm",
      "answer_hi": "30 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 89,
      "question_en": "If the radius of a circle is 7 cm, what is its diameter?",
      "question_hi": "यदि किसी वृत्त की त्रिज्या 7 सेमी है, तो उसका व्यास क्या है?",
      "options_en": ["14 cm", "21 cm", "10 cm", "28 cm"],
      "options_hi": ["14 सेमी", "21 सेमी", "10 सेमी", "28 सेमी"],
      "answer_en": "14 cm",
      "answer_hi": "14 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 90,
      "question_en": "What is the cube of 5?",
      "question_hi": "5 का घनफल क्या है?",
      "options_en": ["125", "25", "100", "15"],
      "options_hi": ["125", "25", "100", "15"],
      "answer_en": "125",
      "answer_hi": "125",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 91,
      "question_en": "If x + y = 10 and x - y = 2, what is the value of x?",
      "question_hi": "यदि x + y = 10 और x - y = 2, तो x का मान क्या है?",
      "options_en": ["6", "8", "5", "7"],
      "options_hi": ["6", "8", "5", "7"],
      "answer_en": "6",
      "answer_hi": "6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 92,
      "question_en": "What is the formula for simple interest?",
      "question_hi": "साधारण ब्याज का सूत्र क्या है?",
      "options_en": ["(P×R×T)/100", "(P+R+T)/100", "P×R×T", "(R×T)/P"],
      "options_hi": ["(P×R×T)/100", "(P+R+T)/100", "P×R×T", "(R×T)/P"],
      "answer_en": "(P×R×T)/100",
      "answer_hi": "(P×R×T)/100",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 93,
      "question_en": "What is the value of sin 90°?",
      "question_hi": "sin 90° का मान क्या है?",
      "options_en": ["1", "0", "√3", "1/2"],
      "options_hi": ["1", "0", "√3", "1/2"],
      "answer_en": "1",
      "answer_hi": "1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 94,
      "question_en": "Which of the following is an identity?",
      "question_hi": "निम्नलिखित में से कौन एक पहचान है?",
      "options_en": ["(a + b)² = a² + 2ab + b²", "(a - b) = a + b", "a² + b² = c²", "a + b = ab"],
      "options_hi": ["(a + b)² = a² + 2ab + b²", "(a - b) = a + b", "a² + b² = c²", "a + b = ab"],
      "answer_en": "(a + b)² = a² + 2ab + b²",
      "answer_hi": "(a + b)² = a² + 2ab + b²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 95,
      "question_en": "How many diagonals are there in a hexagon?",
      "question_hi": "षट्भुज में कितनी विकर्ण होती हैं?",
      "options_en": ["9", "12", "6", "15"],
      "options_hi": ["9", "12", "6", "15"],
      "answer_en": "9",
      "answer_hi": "9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 96,
      "question_en": "What is the product of roots of x² - 5x + 6 = 0?",
      "question_hi": "x² - 5x + 6 = 0 समीकरण की मूलों का गुणनफल क्या है?",
      "options_en": ["6", "5", "-5", "1"],
      "options_hi": ["6", "5", "-5", "1"],
      "answer_en": "6",
      "answer_hi": "6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 97,
      "question_en": "What is the derivative of x²?",
      "question_hi": "x² का अवकलज क्या है?",
      "options_en": ["2x", "x", "x²", "1"],
      "options_hi": ["2x", "x", "x²", "1"],
      "answer_en": "2x",
      "answer_hi": "2x",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 98,
      "question_en": "If A = πr², what does A represent?",
      "question_hi": "यदि A = πr², तो A किसे दर्शाता है?",
      "options_en": ["Area of a circle", "Perimeter", "Volume", "Radius"],
      "options_hi": ["वृत्त का क्षेत्रफल", "परिमिति", "आयतन", "त्रिज्या"],
      "answer_en": "Area of a circle",
      "answer_hi": "वृत्त का क्षेत्रफल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 99,
      "question_en": "What is the factorial of 4?",
      "question_hi": "4 का फैक्टरियल (गुणनफल) क्या है?",
      "options_en": ["24", "16", "12", "20"],
      "options_hi": ["24", "16", "12", "20"],
      "answer_en": "24",
      "answer_hi": "24",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 100,
      "question_en": "Which term of the AP: 3, 7, 11, ... is 31?",
      "question_hi": "AP: 3, 7, 11, ... में 31 कौन-सा पद है?",
      "options_en": ["8th", "9th", "10th", "7th"],
      "options_hi": ["8वाँ", "9वाँ", "10वाँ", "7वाँ"],
      "answer_en": "8th",
      "answer_hi": "8वाँ",
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