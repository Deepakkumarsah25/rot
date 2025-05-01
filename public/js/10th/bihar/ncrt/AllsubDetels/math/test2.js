
const questions = [
    {
        "num": 1,
        "question_en": "What is the value of x² + 2xy + y²?",
        "question_hi": "x² + 2xy + y² का मान क्या है?",
        "options_en": ["(x + y)²", "(x - y)²", "x² + y²", "x² - y²"],
        "options_hi": ["(x + y)²", "(x - y)²", "x² + y²", "x² - y²"],
        "answer_en": "(x + y)²",
        "answer_hi": "(x + y)²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "What is the cube of 5?",
        "question_hi": "5 का घन क्या है?",
        "options_en": ["25", "125", "15", "100"],
        "options_hi": ["25", "125", "15", "100"],
        "answer_en": "125",
        "answer_hi": "125",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "What is the value of (a - b)²?",
        "question_hi": "(a - b)² का मान क्या है?",
        "options_en": ["a² - 2ab + b²", "a² + 2ab + b²", "a² - b²", "a² + b²"],
        "options_hi": ["a² - 2ab + b²", "a² + 2ab + b²", "a² - b²", "a² + b²"],
        "answer_en": "a² - 2ab + b²",
        "answer_hi": "a² - 2ab + b²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Which of the following is a prime number?",
        "question_hi": "निम्न में से कौन एक अभाज्य संख्या है?",
        "options_en": ["21", "29", "39", "49"],
        "options_hi": ["21", "29", "39", "49"],
        "answer_en": "29",
        "answer_hi": "29",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "What is the HCF of 18 and 24?",
        "question_hi": "18 और 24 का महत्तम समापवर्तक (HCF) क्या है?",
        "options_en": ["6", "4", "3", "12"],
        "options_hi": ["6", "4", "3", "12"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "The value of √144 is:",
        "question_hi": "√144 का मान क्या है?",
        "options_en": ["12", "14", "10", "16"],
        "options_hi": ["12", "14", "10", "16"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "What is the value of sin 90°?",
        "question_hi": "sin 90° का मान क्या है?",
        "options_en": ["1", "0", "0.5", "√2/2"],
        "options_hi": ["1", "0", "0.5", "√2/2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "What is the area of a circle with radius 7 cm?",
        "question_hi": "7 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या होगा?",
        "options_en": ["154 cm²", "49 cm²", "44 cm²", "77 cm²"],
        "options_hi": ["154 सेमी²", "49 सेमी²", "44 सेमी²", "77 सेमी²"],
        "answer_en": "154 cm²",
        "answer_hi": "154 सेमी²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "What is the formula for volume of a cube?",
        "question_hi": "घन का आयतन ज्ञात करने का सूत्र क्या है?",
        "options_en": ["a³", "6a²", "a²", "4a²"],
        "options_hi": ["a³", "6a²", "a²", "4a²"],
        "answer_en": "a³",
        "answer_hi": "a³",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "What is the value of 2³?",
        "question_hi": "2³ का मान क्या है?",
        "options_en": ["8", "6", "4", "9"],
        "options_hi": ["8", "6", "4", "9"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "What is the value of cos 0°?",
        "question_hi": "cos 0° का मान क्या है?",
        "options_en": ["1", "0", "0.5", "√3/2"],
        "options_hi": ["1", "0", "0.5", "√3/2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "If a = 5 and b = 2, find the value of a² + b².",
        "question_hi": "यदि a = 5 और b = 2 हो, तो a² + b² का मान ज्ञात कीजिए।",
        "options_en": ["29", "25", "30", "27"],
        "options_hi": ["29", "25", "30", "27"],
        "answer_en": "29",
        "answer_hi": "29",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "What is the LCM of 12 and 18?",
        "question_hi": "12 और 18 का लघुत्तम समापवर्त्य (LCM) क्या है?",
        "options_en": ["36", "12", "24", "18"],
        "options_hi": ["36", "12", "24", "18"],
        "answer_en": "36",
        "answer_hi": "36",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "What is the value of tan 45°?",
        "question_hi": "tan 45° का मान क्या है?",
        "options_en": ["1", "√3", "0", "1/√3"],
        "options_hi": ["1", "√3", "0", "1/√3"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "What is the perimeter of a square with side 6 cm?",
        "question_hi": "6 सेमी भुजा वाले वर्ग की परिमिति क्या होगी?",
        "options_en": ["24 cm", "36 cm", "12 cm", "18 cm"],
        "options_hi": ["24 सेमी", "36 सेमी", "12 सेमी", "18 सेमी"],
        "answer_en": "24 cm",
        "answer_hi": "24 सेमी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "Which term of the AP 3, 7, 11, ... is 31?",
        "question_hi": "AP 3, 7, 11, ... में कौन-सा पद 31 है?",
        "options_en": ["8th", "9th", "7th", "6th"],
        "options_hi": ["8वां", "9वां", "7वां", "6ठा"],
        "answer_en": "8th",
        "answer_hi": "8वां",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "What is the formula for the surface area of a sphere?",
        "question_hi": "गोलक का पृष्ठीय क्षेत्रफल ज्ञात करने का सूत्र क्या है?",
        "options_en": ["4πr²", "2πr", "πr²", "πd"],
        "options_hi": ["4πr²", "2πr", "πr²", "πd"],
        "answer_en": "4πr²",
        "answer_hi": "4πr²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "What is the value of (x + 3)(x - 3)?",
        "question_hi": "(x + 3)(x - 3) का मान क्या है?",
        "options_en": ["x² - 9", "x² + 9", "x² + 6x", "x² - 6x"],
        "options_hi": ["x² - 9", "x² + 9", "x² + 6x", "x² - 6x"],
        "answer_en": "x² - 9",
        "answer_hi": "x² - 9",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "What is the formula for the area of a triangle?",
        "question_hi": "त्रिभुज के क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["½ × base × height", "base × height", "side × side", "πr²"],
        "options_hi": ["½ × आधार × ऊँचाई", "आधार × ऊँचाई", "भुजा × भुजा", "πr²"],
        "answer_en": "½ × base × height",
        "answer_hi": "½ × आधार × ऊँचाई",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "What is the distance formula between two points?",
        "question_hi": "दो बिंदुओं के बीच की दूरी का सूत्र क्या है?",
        "options_en": ["√((x₂ - x₁)² + (y₂ - y₁)²)", "(x₂ - x₁) + (y₂ - y₁)", "x₁y₁ + x₂y₂", "(x₁ + x₂)/2"],
        "options_hi": ["√((x₂ - x₁)² + (y₂ - y₁)²)", "(x₂ - x₁) + (y₂ - y₁)", "x₁y₁ + x₂y₂", "(x₁ + x₂)/2"],
        "answer_en": "√((x₂ - x₁)² + (y₂ - y₁)²)",
        "answer_hi": "√((x₂ - x₁)² + (y₂ - y₁)²)",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "If the diameter of a circle is 14 cm, what is its radius?",
        "question_hi": "यदि किसी वृत्त का व्यास 14 सेमी है, तो उसकी त्रिज्या क्या होगी?",
        "options_en": ["7 cm", "14 cm", "28 cm", "10 cm"],
        "options_hi": ["7 सेमी", "14 सेमी", "28 सेमी", "10 सेमी"],
        "answer_en": "7 cm",
        "answer_hi": "7 सेमी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "What is the value of 9²?",
        "question_hi": "9² का मान क्या है?",
        "options_en": ["81", "72", "90", "100"],
        "options_hi": ["81", "72", "90", "100"],
        "answer_en": "81",
        "answer_hi": "81",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "What is the formula to find simple interest?",
        "question_hi": "साधारण ब्याज ज्ञात करने का सूत्र क्या है?",
        "options_en": ["(P × R × T)/100", "P + R + T", "P × R × T", "(P + R + T)/100"],
        "options_hi": ["(P × R × T)/100", "P + R + T", "P × R × T", "(P + R + T)/100"],
        "answer_en": "(P × R × T)/100",
        "answer_hi": "(P × R × T)/100",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "What is the median of 5, 8, 12?",
        "question_hi": "5, 8, 12 का माध्यिका (मीडियन) क्या है?",
        "options_en": ["8", "5", "12", "10"],
        "options_hi": ["8", "5", "12", "10"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "Which is the probability of getting head in a coin toss?",
        "question_hi": "सिक्का उछालने पर हेड आने की प्रायिकता क्या है?",
        "options_en": ["1/2", "1", "1/3", "0"],
        "options_hi": ["1/2", "1", "1/3", "0"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "What is the sum of angles in a triangle?",
        "question_hi": "त्रिभुज के तीनों कोणों का योगफल क्या होता है?",
        "options_en": ["180°", "360°", "90°", "270°"],
        "options_hi": ["180°", "360°", "90°", "270°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "What is the formula for Pythagoras Theorem?",
        "question_hi": "पाइथागोरस प्रमेय का सूत्र क्या है?",
        "options_en": ["a² + b² = c²", "a² - b² = c²", "a² + b² = 2c", "a² + c² = b²"],
        "options_hi": ["a² + b² = c²", "a² - b² = c²", "a² + b² = 2c", "a² + c² = b²"],
        "answer_en": "a² + b² = c²",
        "answer_hi": "a² + b² = c²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "What is the value of 0 factorial (0!)?",
        "question_hi": "0 फैक्टोरियल (0!) का मान क्या है?",
        "options_en": ["1", "0", "undefined", "infinity"],
        "options_hi": ["1", "0", "अपरिभाषित", "अनंत"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "What is the formula for the area of a rectangle?",
        "question_hi": "आयत के क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["length × breadth", "length + breadth", "2 × (l + b)", "l² + b²"],
        "options_hi": ["लंबाई × चौड़ाई", "लंबाई + चौड़ाई", "2 × (l + b)", "l² + b²"],
        "answer_en": "length × breadth",
        "answer_hi": "लंबाई × चौड़ाई",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "What is the square root of 625?",
        "question_hi": "625 का वर्गमूल क्या है?",
        "options_en": ["25", "20", "30", "15"],
        "options_hi": ["25", "20", "30", "15"],
        "answer_en": "25",
        "answer_hi": "25",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "If the roots of the quadratic equation ax² + bx + c = 0 are equal, then what is the value of discriminant?",
        "question_hi": "यदि द्विघात समीकरण ax² + bx + c = 0 के मूल समान हों, तो विविक्तक का मान क्या होगा?",
        "options_en": ["b² - 4ac = 0", "b² - 4ac > 0", "b² - 4ac < 0", "b² + 4ac = 0"],
        "options_hi": ["b² - 4ac = 0", "b² - 4ac > 0", "b² - 4ac < 0", "b² + 4ac = 0"],
        "answer_en": "b² - 4ac = 0",
        "answer_hi": "b² - 4ac = 0",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "What is the sum of first n natural numbers?",
        "question_hi": "प्रथम n प्राकृतिक संख्याओं का योगफल क्या है?",
        "options_en": ["n(n+1)/2", "n(n−1)/2", "n²", "n(n+2)/2"],
        "options_hi": ["n(n+1)/2", "n(n−1)/2", "n²", "n(n+2)/2"],
        "answer_en": "n(n+1)/2",
        "answer_hi": "n(n+1)/2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "The coordinates of the origin are:",
        "question_hi": "मूल के निर्देशांक क्या होते हैं?",
        "options_en": ["(0,0)", "(1,1)", "(1,0)", "(0,1)"],
        "options_hi": ["(0,0)", "(1,1)", "(1,0)", "(0,1)"],
        "answer_en": "(0,0)",
        "answer_hi": "(0,0)",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "In which quadrant does the point (−3, 4) lie?",
        "question_hi": "बिंदु (−3, 4) किस चतुर्थांश में स्थित है?",
        "options_en": ["Second", "First", "Third", "Fourth"],
        "options_hi": ["द्वितीय", "प्रथम", "तृतीय", "चतुर्थ"],
        "answer_en": "Second",
        "answer_hi": "द्वितीय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "What is the distance between points (x1, y1) and (x2, y2)?",
        "question_hi": "(x1, y1) और (x2, y2) के बीच की दूरी क्या होती है?",
        "options_en": ["√[(x2−x1)² + (y2−y1)²]", "(x2−x1) + (y2−y1)", "[(x2+x1)² + (y2+y1)²]", "None of these"],
        "options_hi": ["√[(x2−x1)² + (y2−y1)²]", "(x2−x1) + (y2−y1)", "[(x2+x1)² + (y2+y1)²]", "इनमें से कोई नहीं"],
        "answer_en": "√[(x2−x1)² + (y2−y1)²]",
        "answer_hi": "√[(x2−x1)² + (y2−y1)²]",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "What is the formula for the area of a triangle with base b and height h?",
        "question_hi": "आधार b और ऊंचाई h वाले त्रिभुज का क्षेत्रफल सूत्र क्या है?",
        "options_en": ["(1/2) × b × h", "b × h", "b + h", "(b × h)²"],
        "options_hi": ["(1/2) × b × h", "b × h", "b + h", "(b × h)²"],
        "answer_en": "(1/2) × b × h",
        "answer_hi": "(1/2) × b × h",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "What is the surface area of a cube with side a?",
        "question_hi": "भुजा a वाले घन का सम्पूर्ण पृष्ठीय क्षेत्रफल क्या है?",
        "options_en": ["6a²", "4a²", "a³", "2a²"],
        "options_hi": ["6a²", "4a²", "a³", "2a²"],
        "answer_en": "6a²",
        "answer_hi": "6a²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "Which of the following is an identity?",
        "question_hi": "निम्नलिखित में से कौन एक सर्वसमिक है?",
        "options_en": ["(a + b)² = a² + 2ab + b²", "(a + b)² = a² − 2ab + b²", "a² − b² = (a + b)²", "(a − b)² = a² + b²"],
        "options_hi": ["(a + b)² = a² + 2ab + b²", "(a + b)² = a² − 2ab + b²", "a² − b² = (a + b)²", "(a − b)² = a² + b²"],
        "answer_en": "(a + b)² = a² + 2ab + b²",
        "answer_hi": "(a + b)² = a² + 2ab + b²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "What is the shape of the graph of a quadratic equation?",
        "question_hi": "द्विघात समीकरण का आलेख कैसा होता है?",
        "options_en": ["Parabola", "Straight line", "Circle", "Ellipse"],
        "options_hi": ["परवलय", "सीधी रेखा", "वृत्त", "दीर्घवृत्त"],
        "answer_en": "Parabola",
        "answer_hi": "परवलय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "Which theorem is used to find the distance between two points in a plane?",
        "question_hi": "समतल में दो बिंदुओं के बीच की दूरी ज्ञात करने के लिए कौन-सा प्रमेय उपयोग किया जाता है?",
        "options_en": ["Pythagoras Theorem", "Midpoint Theorem", "Thales Theorem", "Area Theorem"],
        "options_hi": ["पाइथागोरस प्रमेय", "मध्यबिंदु प्रमेय", "थेल्स प्रमेय", "क्षेत्रफल प्रमेय"],
        "answer_en": "Pythagoras Theorem",
        "answer_hi": "पाइथागोरस प्रमेय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "What is the formula to find the area of a triangle with base 'b' and height 'h'?",
        "question_hi": "आधार 'b' और ऊँचाई 'h' वाले त्रिभुज का क्षेत्रफल निकालने का सूत्र क्या है?",
        "options_en": ["(1/2) × b × h", "b × h", "b + h", "2 × b × h"],
        "options_hi": ["(1/2) × b × h", "b × h", "b + h", "2 × b × h"],
        "answer_en": "(1/2) × b × h",
        "answer_hi": "(1/2) × b × h",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "If x² = 49, then the value of x is:",
        "question_hi": "यदि x² = 49, तो x का मान है:",
        "options_en": ["±7", "7", "-7", "0"],
        "options_hi": ["±7", "7", "-7", "0"],
        "answer_en": "±7",
        "answer_hi": "±7",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Which of the following is an irrational number?",
        "question_hi": "निम्नलिखित में से कौन अपरिमेय संख्या है?",
        "options_en": ["√3", "4/7", "0.25", "1.5"],
        "options_hi": ["√3", "4/7", "0.25", "1.5"],
        "answer_en": "√3",
        "answer_hi": "√3",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "What is the product of (x + y) and (x - y)?",
        "question_hi": "(x + y) और (x - y) का गुणनफल क्या होता है?",
        "options_en": ["x² - y²", "x² + y²", "2xy", "x² - 2xy + y²"],
        "options_hi": ["x² - y²", "x² + y²", "2xy", "x² - 2xy + y²"],
        "answer_en": "x² - y²",
        "answer_hi": "x² - y²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "The value of π is approximately:",
        "question_hi": "π का मान लगभग क्या होता है?",
        "options_en": ["3.14", "3.41", "2.71", "1.61"],
        "options_hi": ["3.14", "3.41", "2.71", "1.61"],
        "answer_en": "3.14",
        "answer_hi": "3.14",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "What is the value of (a + b)³?",
        "question_hi": "(a + b)³ का मान क्या है?",
        "options_en": ["a³ + 3a²b + 3ab² + b³", "a³ - b³", "a³ + b³", "a² + 2ab + b²"],
        "options_hi": ["a³ + 3a²b + 3ab² + b³", "a³ - b³", "a³ + b³", "a² + 2ab + b²"],
        "answer_en": "a³ + 3a²b + 3ab² + b³",
        "answer_hi": "a³ + 3a²b + 3ab² + b³",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "What is the square root of 121?",
        "question_hi": "121 का वर्गमूल क्या है?",
        "options_en": ["11", "12", "10", "9"],
        "options_hi": ["11", "12", "10", "9"],
        "answer_en": "11",
        "answer_hi": "11",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "What is the distance formula in coordinate geometry?",
        "question_hi": "निर्देशांक ज्यामिति में दूरी सूत्र क्या है?",
        "options_en": [
          "√((x2 - x1)² + (y2 - y1)²)",
          "(x2 - x1) + (y2 - y1)",
          "(x2 + x1)(y2 + y1)",
          "x² + y²"
        ],
        "options_hi": [
          "√((x2 - x1)² + (y2 - y1)²)",
          "(x2 - x1) + (y2 - y1)",
          "(x2 + x1)(y2 + y1)",
          "x² + y²"
        ],
        "answer_en": "√((x2 - x1)² + (y2 - y1)²)",
        "answer_hi": "√((x2 - x1)² + (y2 - y1)²)",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "What is the formula for the surface area of a cube?",
        "question_hi": "घन का पृष्ठीय क्षेत्रफल निकालने का सूत्र क्या है?",
        "options_en": ["6a²", "4a²", "a²", "2a²"],
        "options_hi": ["6a²", "4a²", "a²", "2a²"],
        "answer_en": "6a²",
        "answer_hi": "6a²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "What is the sum of interior angles of a quadrilateral?",
        "question_hi": "चतुर्भुज के आंतरिक कोणों का योग कितना होता है?",
        "options_en": ["360°", "180°", "270°", "90°"],
        "options_hi": ["360°", "180°", "270°", "90°"],
        "answer_en": "360°",
        "answer_hi": "360°",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 51,
        "question_en": "What is the value of sin 90°?",
        "question_hi": "sin 90° का मान क्या है?",
        "options_en": ["1", "0", "√2/2", "1/2"],
        "options_hi": ["1", "0", "√2/2", "1/2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 52,
        "question_en": "If a line is parallel to x-axis, what is the slope?",
        "question_hi": "यदि कोई रेखा x-अक्ष के समानांतर है, तो उसका ढलान क्या होगा?",
        "options_en": ["0", "1", "Undefined", "Infinite"],
        "options_hi": ["0", "1", "अपरिभाषित", "अनंत"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 53,
        "question_en": "What is the value of (x + 3)²?",
        "question_hi": "(x + 3)² का मान क्या है?",
        "options_en": ["x² + 6x + 9", "x² + 9", "x² + 3", "x² + 3x + 9"],
        "options_hi": ["x² + 6x + 9", "x² + 9", "x² + 3", "x² + 3x + 9"],
        "answer_en": "x² + 6x + 9",
        "answer_hi": "x² + 6x + 9",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 54,
        "question_en": "The square of which number is 64?",
        "question_hi": "किस संख्या का वर्ग 64 होता है?",
        "options_en": ["±8", "8", "-8", "6"],
        "options_hi": ["±8", "8", "-8", "6"],
        "answer_en": "±8",
        "answer_hi": "±8",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 55,
        "question_en": "What is the cube of 5?",
        "question_hi": "5 का घन क्या होता है?",
        "options_en": ["125", "25", "15", "150"],
        "options_hi": ["125", "25", "15", "150"],
        "answer_en": "125",
        "answer_hi": "125",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 56,
        "question_en": "Which of the following has terminating decimal expansion?",
        "question_hi": "निम्नलिखित में से किसका दशमलव विस्तार समाप्त होता है?",
        "options_en": ["1/4", "1/3", "1/6", "1/7"],
        "options_hi": ["1/4", "1/3", "1/6", "1/7"],
        "answer_en": "1/4",
        "answer_hi": "1/4",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 57,
        "question_en": "LCM of 12 and 15 is:",
        "question_hi": "12 और 15 का ल.स.न. क्या है?",
        "options_en": ["60", "30", "45", "20"],
        "options_hi": ["60", "30", "45", "20"],
        "answer_en": "60",
        "answer_hi": "60",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 58,
        "question_en": "The height of a cylinder is 7 cm and radius is 3 cm. What is its volume?",
        "question_hi": "एक सिलेंडर की ऊँचाई 7 सेमी और त्रिज्या 3 सेमी है। इसका आयतन क्या होगा?",
        "options_en": ["198 cm³", "231 cm³", "66 cm³", "99 cm³"],
        "options_hi": ["198 सेमी³", "231 सेमी³", "66 सेमी³", "99 सेमी³"],
        "answer_en": "198 cm³",
        "answer_hi": "198 सेमी³",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 59,
        "question_en": "Which figure has only one line of symmetry?",
        "question_hi": "कौन सा आकृति केवल एक रेखीय सममिति रखता है?",
        "options_en": ["Isosceles triangle", "Equilateral triangle", "Square", "Circle"],
        "options_hi": ["समद्विबाहु त्रिभुज", "समभुज त्रिभुज", "वर्ग", "वृत्त"],
        "answer_en": "Isosceles triangle",
        "answer_hi": "समद्विबाहु त्रिभुज",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 60,
        "question_en": "What is the degree measure of a straight angle?",
        "question_hi": "एक सिधा कोण का माप कितने अंश का होता है?",
        "options_en": ["180°", "90°", "360°", "120°"],
        "options_hi": ["180°", "90°", "360°", "120°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false,
        "selected": ""
      },
    
      {
        "num": 61,
        "question_en": "What is the next prime number after 7?",
        "question_hi": "7 के बाद अगली अभाज्य संख्या कौन सी है?",
        "options_en": ["11", "9", "8", "10"],
        "options_hi": ["11", "9", "8", "10"],
        "answer_en": "11",
        "answer_hi": "11",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 62,
        "question_en": "What is the formula for circumference of a circle?",
        "question_hi": "वृत्त की परिधि निकालने का सूत्र क्या है?",
        "options_en": ["2πr", "πr²", "πd", "r²"],
        "options_hi": ["2πr", "πr²", "πd", "r²"],
        "answer_en": "2πr",
        "answer_hi": "2πr",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 63,
        "question_en": "What is 25% of 200?",
        "question_hi": "200 का 25% कितना होगा?",
        "options_en": ["50", "25", "75", "100"],
        "options_hi": ["50", "25", "75", "100"],
        "answer_en": "50",
        "answer_hi": "50",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 64,
        "question_en": "What is the cube root of 27?",
        "question_hi": "27 का घनमूल क्या है?",
        "options_en": ["3", "9", "6", "4"],
        "options_hi": ["3", "9", "6", "4"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 65,
        "question_en": "What is the angle of a right triangle?",
        "question_hi": "समकोण त्रिभुज में एक कोण कितने अंश का होता है?",
        "options_en": ["90°", "60°", "120°", "45°"],
        "options_hi": ["90°", "60°", "120°", "45°"],
        "answer_en": "90°",
        "answer_hi": "90°",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 66,
        "question_en": "What is the perimeter of a square with side 4 cm?",
        "question_hi": "4 सेमी भुजा वाले वर्ग की परिमिति कितनी होगी?",
        "options_en": ["16 cm", "12 cm", "8 cm", "4 cm"],
        "options_hi": ["16 सेमी", "12 सेमी", "8 सेमी", "4 सेमी"],
        "answer_en": "16 cm",
        "answer_hi": "16 सेमी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 67,
        "question_en": "Which term of the A.P. 3, 6, 9, ... is 30?",
        "question_hi": "A.P. 3, 6, 9, ... का कौन सा पद 30 होगा?",
        "options_en": ["10th", "7th", "5th", "8th"],
        "options_hi": ["10वाँ", "7वाँ", "5वाँ", "8वाँ"],
        "answer_en": "10th",
        "answer_hi": "10वाँ",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 68,
        "question_en": "In which quadrant is the point (−3, 4) located?",
        "question_hi": "बिंदु (−3, 4) किस चतुर्थांश में स्थित है?",
        "options_en": ["II", "I", "III", "IV"],
        "options_hi": ["द्वितीय", "प्रथम", "तृतीय", "चतुर्थ"],
        "answer_en": "II",
        "answer_hi": "द्वितीय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 69,
        "question_en": "Which of the following is a linear equation?",
        "question_hi": "निम्नलिखित में से कौन रैखिक समीकरण है?",
        "options_en": ["2x + 3 = 5", "x² + 1 = 0", "x³ = 9", "x/y = 4"],
        "options_hi": ["2x + 3 = 5", "x² + 1 = 0", "x³ = 9", "x/y = 4"],
        "answer_en": "2x + 3 = 5",
        "answer_hi": "2x + 3 = 5",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 70,
        "question_en": "Which angle is the largest in a triangle with sides 3 cm, 4 cm and 5 cm?",
        "question_hi": "3 सेमी, 4 सेमी और 5 सेमी भुजाओं वाले त्रिभुज में सबसे बड़ा कोण कौन सा है?",
        "options_en": ["Opposite to 5 cm", "Opposite to 3 cm", "Opposite to 4 cm", "All are equal"],
        "options_hi": ["5 सेमी के सामने", "3 सेमी के सामने", "4 सेमी के सामने", "सभी बराबर"],
        "answer_en": "Opposite to 5 cm",
        "answer_hi": "5 सेमी के सामने",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 71,
        "question_en": "What is the value of tan 45°?",
        "question_hi": "tan 45° का मान क्या है?",
        "options_en": ["1", "0", "∞", "√3"],
        "options_hi": ["1", "0", "∞", "√3"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 72,
        "question_en": "The sum of angles in a triangle is:",
        "question_hi": "त्रिभुज के कोणों का योग क्या होता है?",
        "options_en": ["180°", "90°", "360°", "270°"],
        "options_hi": ["180°", "90°", "360°", "270°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 73,
        "question_en": "What is the area of a rectangle with length 8 cm and breadth 4 cm?",
        "question_hi": "8 सेमी लंबाई और 4 सेमी चौड़ाई वाले आयत का क्षेत्रफल क्या है?",
        "options_en": ["32 cm²", "16 cm²", "24 cm²", "12 cm²"],
        "options_hi": ["32 सेमी²", "16 सेमी²", "24 सेमी²", "12 सेमी²"],
        "answer_en": "32 cm²",
        "answer_hi": "32 सेमी²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 74,
        "question_en": "What is the solution of the equation 2x - 5 = 9?",
        "question_hi": "समीकरण 2x - 5 = 9 का हल क्या है?",
        "options_en": ["7", "5", "6", "4"],
        "options_hi": ["7", "5", "6", "4"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 75,
        "question_en": "If x = 2, y = 3, what is the value of x² + y²?",
        "question_hi": "यदि x = 2 और y = 3 हो, तो x² + y² का मान क्या होगा?",
        "options_en": ["13", "10", "11", "12"],
        "options_hi": ["13", "10", "11", "12"],
        "answer_en": "13",
        "answer_hi": "13",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 76,
        "question_en": "What is the area of a circle with radius 7 cm?",
        "question_hi": "7 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या है?",
        "options_en": ["49π cm²", "14π cm²", "22π cm²", "25π cm²"],
        "options_hi": ["49π सेमी²", "14π सेमी²", "22π सेमी²", "25π सेमी²"],
        "answer_en": "49π cm²",
        "answer_hi": "49π सेमी²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 77,
        "question_en": "The HCF of 24 and 36 is:",
        "question_hi": "24 और 36 का महत्तम समापवर्तक (HCF) क्या है?",
        "options_en": ["12", "18", "6", "24"],
        "options_hi": ["12", "18", "6", "24"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 78,
        "question_en": "What is the value of 2⁴?",
        "question_hi": "2⁴ का मान क्या है?",
        "options_en": ["16", "8", "4", "32"],
        "options_hi": ["16", "8", "4", "32"],
        "answer_en": "16",
        "answer_hi": "16",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 79,
        "question_en": "What is the volume of a cube with side 3 cm?",
        "question_hi": "3 सेमी भुजा वाले घन का आयतन क्या है?",
        "options_en": ["27 cm³", "9 cm³", "6 cm³", "36 cm³"],
        "options_hi": ["27 सेमी³", "9 सेमी³", "6 सेमी³", "36 सेमी³"],
        "answer_en": "27 cm³",
        "answer_hi": "27 सेमी³",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 80,
        "question_en": "If the radius of a circle is doubled, what happens to its area?",
        "question_hi": "यदि वृत्त की त्रिज्या को दोगुना कर दिया जाए, तो उसके क्षेत्रफल में क्या परिवर्तन होगा?",
        "options_en": ["It becomes four times", "It becomes two times", "It becomes half", "It remains the same"],
        "options_hi": ["यह चार गुना हो जाता है", "यह दो गुना हो जाता है", "यह आधा हो जाता है", "यह वैसा का वैसा रहता है"],
        "answer_en": "It becomes four times",
        "answer_hi": "यह चार गुना हो जाता है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 81,
        "question_en": "What is the perimeter of a square with side 5 cm?",
        "question_hi": "5 सेमी भुजा वाले वर्ग का परिमाप क्या है?",
        "options_en": ["20 cm", "25 cm", "30 cm", "15 cm"],
        "options_hi": ["20 सेमी", "25 सेमी", "30 सेमी", "15 सेमी"],
        "answer_en": "20 cm",
        "answer_hi": "20 सेमी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 82,
        "question_en": "The surface area of a sphere is 4πr². What is the surface area of a sphere with radius 3 cm?",
        "question_hi": "वृत्ताकार गुब्बारे का परिपृष्ठ क्षेत्रफल 4πr² होता है। यदि त्रिज्या 3 सेमी हो, तो परिपृष्ठ क्षेत्रफल क्या होगा?",
        "options_en": ["36π cm²", "9π cm²", "12π cm²", "18π cm²"],
        "options_hi": ["36π सेमी²", "9π सेमी²", "12π सेमी²", "18π सेमी²"],
        "answer_en": "36π cm²",
        "answer_hi": "36π सेमी²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 83,
        "question_en": "The sum of the angles of a quadrilateral is:",
        "question_hi": "चतुर्भुज के कोणों का योग क्या होता है?",
        "options_en": ["360°", "180°", "270°", "90°"],
        "options_hi": ["360°", "180°", "270°", "90°"],
        "answer_en": "360°",
        "answer_hi": "360°",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 84,
        "question_en": "The area of a triangle with base 6 cm and height 4 cm is:",
        "question_hi": "6 सेमी आधार और 4 सेमी ऊँचाई वाले त्रिकोण का क्षेत्रफल क्या है?",
        "options_en": ["12 cm²", "24 cm²", "18 cm²", "10 cm²"],
        "options_hi": ["12 सेमी²", "24 सेमी²", "18 सेमी²", "10 सेमी²"],
        "answer_en": "12 cm²",
        "answer_hi": "12 सेमी²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 85,
        "question_en": "What is the square root of 64?",
        "question_hi": "64 का वर्गमूल क्या है?",
        "options_en": ["8", "6", "4", "7"],
        "options_hi": ["8", "6", "4", "7"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 86,
        "question_en": "What is the value of (x + y)²?",
        "question_hi": "(x + y)² का मान क्या है?",
        "options_en": ["x² + 2xy + y²", "x² - 2xy + y²", "x² + y²", "x² - y²"],
        "options_hi": ["x² + 2xy + y²", "x² - 2xy + y²", "x² + y²", "x² - y²"],
        "answer_en": "x² + 2xy + y²",
        "answer_hi": "x² + 2xy + y²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 87,
        "question_en": "If a number is divisible by 6, it must be divisible by:",
        "question_hi": "यदि कोई संख्या 6 से विभाज्य है, तो वह किससे भी विभाज्य होगी?",
        "options_en": ["2 and 3", "2", "3", "4"],
        "options_hi": ["2 और 3", "2", "3", "4"],
        "answer_en": "2 and 3",
        "answer_hi": "2 और 3",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 88,
        "question_en": "The area of a rhombus is calculated using the formula:",
        "question_hi": "हीरा के क्षेत्रफल की गणना किस सूत्र से की जाती है?",
        "options_en": ["(1/2) × d₁ × d₂", "(1/4) × d₁ × d₂", "(1/3) × d₁ × d₂", "(1/5) × d₁ × d₂"],
        "options_hi": ["(1/2) × d₁ × d₂", "(1/4) × d₁ × d₂", "(1/3) × d₁ × d₂", "(1/5) × d₁ × d₂"],
        "answer_en": "(1/2) × d₁ × d₂",
        "answer_hi": "(1/2) × d₁ × d₂",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 89,
        "question_en": "What is the LCM of 12 and 15?",
        "question_hi": "12 और 15 का लघुत्तम समापवर्त्य (LCM) क्या है?",
        "options_en": ["60", "45", "30", "75"],
        "options_hi": ["60", "45", "30", "75"],
        "answer_en": "60",
        "answer_hi": "60",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 90,
        "question_en": "What is the value of sin 30°?",
        "question_hi": "sin 30° का मान क्या है?",
        "options_en": ["1/2", "√3/2", "1", "0"],
        "options_hi": ["1/2", "√3/2", "1", "0"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 91,
        "question_en": "The value of cos 45° is:",
        "question_hi": "cos 45° का मान क्या है?",
        "options_en": ["1/√2", "1", "√2", "1/2"],
        "options_hi": ["1/√2", "1", "√2", "1/2"],
        "answer_en": "1/√2",
        "answer_hi": "1/√2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 92,
        "question_en": "The roots of the quadratic equation x² - 5x + 6 = 0 are:",
        "question_hi": "द्विघात समीकरण x² - 5x + 6 = 0 के मूल क्या हैं?",
        "options_en": ["1 and 6", "2 and 3", "1 and 5", "3 and 4"],
        "options_hi": ["1 और 6", "2 और 3", "1 और 5", "3 और 4"],
        "answer_en": "2 and 3",
        "answer_hi": "2 और 3",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 93,
        "question_en": "The probability of getting a number greater than 4 when a die is rolled is:",
        "question_hi": "जब एक पासा फेंका जाता है, तो 4 से बड़ा नंबर आने की संभावना क्या है?",
        "options_en": ["1/6", "1/3", "1/2", "5/6"],
        "options_hi": ["1/6", "1/3", "1/2", "5/6"],
        "answer_en": "1/3",
        "answer_hi": "1/3",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 94,
        "question_en": "The volume of a cone is calculated using the formula:",
        "question_hi": "शंकु का आयतन किस सूत्र से गणना किया जाता है?",
        "options_en": ["(1/3)πr²h", "(1/2)πr²h", "(1/4)πr²h", "(1/3)πr²h/2"],
        "options_hi": ["(1/3)πr²h", "(1/2)πr²h", "(1/4)πr²h", "(1/3)πr²h/2"],
        "answer_en": "(1/3)πr²h",
        "answer_hi": "(1/3)πr²h",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 95,
        "question_en": "The midpoint of the line segment joining the points (1, 2) and (3, 4) is:",
        "question_hi": "बिंदुओं (1, 2) और (3, 4) को जोड़ने वाली रेखा खंड का मध्यबिंदु क्या है?",
        "options_en": ["(2, 3)", "(3, 2)", "(1, 4)", "(2, 2)"],
        "options_hi": ["(2, 3)", "(3, 2)", "(1, 4)", "(2, 2)"],
        "answer_en": "(2, 3)",
        "answer_hi": "(2, 3)",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 96,
        "question_en": "The length of the diagonal of a rectangle with length 3 cm and breadth 4 cm is:",
        "question_hi": "3 सेमी लंबाई और 4 सेमी चौड़ाई वाले आयत का विकर्ण क्या है?",
        "options_en": ["5 cm", "7 cm", "6 cm", "8 cm"],
        "options_hi": ["5 सेमी", "7 सेमी", "6 सेमी", "8 सेमी"],
        "answer_en": "5 cm",
        "answer_hi": "5 सेमी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 97,
        "question_en": "If a number is divisible by both 4 and 6, it must be divisible by:",
        "question_hi": "यदि कोई संख्या 4 और 6 दोनों से विभाज्य है, तो वह किससे भी विभाज्य होगी?",
        "options_en": ["12", "24", "18", "10"],
        "options_hi": ["12", "24", "18", "10"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 98,
        "question_en": "The area of a sector of a circle is given by the formula:",
        "question_hi": "वृत्त के खंड का क्षेत्रफल किस सूत्र से दिया जाता है?",
        "options_en": ["(θ/360) × πr²", "(θ/2) × πr²", "(πr²)/2", "(2θ) × πr"],
        "options_hi": ["(θ/360) × πr²", "(θ/2) × πr²", "(πr²)/2", "(2θ) × πr"],
        "answer_en": "(θ/360) × πr²",
        "answer_hi": "(θ/360) × πr²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 99,
        "question_en": "The area of a circle with radius 7 cm is:",
        "question_hi": "7 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या है?",
        "options_en": ["49π cm²", "14π cm²", "35π cm²", "21π cm²"],
        "options_hi": ["49π सेमी²", "14π सेमी²", "35π सेमी²", "21π सेमी²"],
        "answer_en": "49π cm²",
        "answer_hi": "49π सेमी²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 100,
        "question_en": "What is the difference between the squares of 5 and 3?",
        "question_hi": "5 और 3 के वर्गों का अंतर क्या है?",
        "options_en": ["16", "12", "15", "8"],
        "options_hi": ["16", "12", "15", "8"],
        "answer_en": "16",
        "answer_hi": "16",
        "attempted": false,
        "selected": ""
      }

// Add more questions here...
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