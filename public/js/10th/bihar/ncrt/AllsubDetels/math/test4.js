
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
      "question_en": "What is the value of (a + b)² - (a - b)²?",
      "question_hi": "(a + b)² - (a - b)² का मान क्या है?",
      "options_en": ["4ab", "2ab", "a² - b²", "a² + b²"],
      "options_hi": ["4ab", "2ab", "a² - b²", "a² + b²"],
      "answer_en": "4ab",
      "answer_hi": "4ab",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "If x + 1/x = 2, then what is the value of x² + 1/x²?",
      "question_hi": "यदि x + 1/x = 2 हो, तो x² + 1/x² का मान क्या होगा?",
      "options_en": ["2", "4", "0", "1"],
      "options_hi": ["2", "4", "0", "1"],
      "answer_en": "2",
      "answer_hi": "2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "What is the HCF of 60 and 48?",
      "question_hi": "60 और 48 का महत्तम समापवर्तक (HCF) क्या है?",
      "options_en": ["12", "6", "24", "18"],
      "options_hi": ["12", "6", "24", "18"],
      "answer_en": "12",
      "answer_hi": "12",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "What is the LCM of 12 and 15?",
      "question_hi": "12 और 15 का लघुत्तम समापवर्त्य (LCM) क्या है?",
      "options_en": ["60", "30", "20", "15"],
      "options_hi": ["60", "30", "20", "15"],
      "answer_en": "60",
      "answer_hi": "60",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "What is the value of (x - y)²?",
      "question_hi": "(x - y)² का मान क्या है?",
      "options_en": ["x² - 2xy + y²", "x² + 2xy + y²", "x² + y²", "x² - y²"],
      "options_hi": ["x² - 2xy + y²", "x² + 2xy + y²", "x² + y²", "x² - y²"],
      "answer_en": "x² - 2xy + y²",
      "answer_hi": "x² - 2xy + y²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "The quadratic equation x² - 5x + 6 = 0 has roots:",
      "question_hi": "x² - 5x + 6 = 0 समीकरण की मूल हैं:",
      "options_en": ["2 and 3", "1 and 6", "5 and 1", "3 and 6"],
      "options_hi": ["2 और 3", "1 और 6", "5 और 1", "3 और 6"],
      "answer_en": "2 and 3",
      "answer_hi": "2 और 3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "If a² - b² = (a + b)(a - b), then what is the value of 49 - 36?",
      "question_hi": "यदि a² - b² = (a + b)(a - b), तो 49 - 36 का मान क्या है?",
      "options_en": ["13", "7", "5", "9"],
      "options_hi": ["13", "7", "5", "9"],
      "answer_en": "13",
      "answer_hi": "13",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "What is the square root of 144?",
      "question_hi": "144 का वर्गमूल क्या है?",
      "options_en": ["12", "14", "10", "16"],
      "options_hi": ["12", "14", "10", "16"],
      "answer_en": "12",
      "answer_hi": "12",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "If sin θ = 1/2, then θ is:",
      "question_hi": "यदि sin θ = 1/2 हो, तो θ का मान क्या होगा?",
      "options_en": ["30°", "45°", "60°", "90°"],
      "options_hi": ["30°", "45°", "60°", "90°"],
      "answer_en": "30°",
      "answer_hi": "30°",
      "attempted": false,
      "selected": ""
    },
    
    {
        "num": 11,
        "question_en": "If the perimeter of a square is 40 cm, what is the length of one side?",
        "question_hi": "यदि एक वर्ग की परिमिति 40 सेमी है, तो उसकी एक भुजा की लंबाई क्या होगी?",
        "options_en": ["10 cm", "20 cm", "5 cm", "15 cm"],
        "options_hi": ["10 सेमी", "20 सेमी", "5 सेमी", "15 सेमी"],
        "answer_en": "10 cm",
        "answer_hi": "10 सेमी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "What is the LCM of 6 and 8?",
        "question_hi": "6 और 8 का लघुत्तम समापवर्त्य (LCM) क्या है?",
        "options_en": ["24", "12", "48", "18"],
        "options_hi": ["24", "12", "48", "18"],
        "answer_en": "24",
        "answer_hi": "24",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "What is the square root of 169?",
        "question_hi": "169 का वर्गमूल क्या है?",
        "options_en": ["13", "12", "14", "15"],
        "options_hi": ["13", "12", "14", "15"],
        "answer_en": "13",
        "answer_hi": "13",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "If x² = 49, what is the value of x?",
        "question_hi": "यदि x² = 49, तो x का मान क्या होगा?",
        "options_en": ["±7", "7", "-7", "0"],
        "options_hi": ["±7", "7", "-7", "0"],
        "answer_en": "±7",
        "answer_hi": "±7",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "What is the area of a triangle with base 10 cm and height 5 cm?",
        "question_hi": "10 सेमी आधार और 5 सेमी ऊँचाई वाले त्रिभुज का क्षेत्रफल क्या है?",
        "options_en": ["25 cm²", "50 cm²", "30 cm²", "15 cm²"],
        "options_hi": ["25 सेमी²", "50 सेमी²", "30 सेमी²", "15 सेमी²"],
        "answer_en": "25 cm²",
        "answer_hi": "25 सेमी²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "If the radius of a circle is doubled, how does its area change?",
        "question_hi": "यदि वृत्त की त्रिज्या दोगुनी कर दी जाए, तो उसका क्षेत्रफल कैसे बदलेगा?",
        "options_en": ["Becomes 4 times", "Becomes 2 times", "Becomes 3 times", "Remains same"],
        "options_hi": ["4 गुना हो जाएगा", "2 गुना हो जाएगा", "3 गुना हो जाएगा", "जैसा है वैसा ही रहेगा"],
        "answer_en": "Becomes 4 times",
        "answer_hi": "4 गुना हो जाएगा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "Which of the following is a rational number?",
        "question_hi": "निम्नलिखित में से कौन एक परिमेय संख्या है?",
        "options_en": ["1/2", "√2", "π", "√3"],
        "options_hi": ["1/2", "√2", "π", "√3"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "What is the volume of a cube of side 4 cm?",
        "question_hi": "4 सेमी भुजा वाले घन का आयतन क्या होगा?",
        "options_en": ["64 cm³", "16 cm³", "32 cm³", "8 cm³"],
        "options_hi": ["64 सेमी³", "16 सेमी³", "32 सेमी³", "8 सेमी³"],
        "answer_en": "64 cm³",
        "answer_hi": "64 सेमी³",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "Which one is the formula of Pythagoras Theorem?",
        "question_hi": "पाइथागोरस प्रमेय का सूत्र क्या है?",
        "options_en": ["a² + b² = c²", "a + b = c", "a² - b² = c²", "a² = b² + c²"],
        "options_hi": ["a² + b² = c²", "a + b = c", "a² - b² = c²", "a² = b² + c²"],
        "answer_en": "a² + b² = c²",
        "answer_hi": "a² + b² = c²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "What is the value of 3² + 4²?",
        "question_hi": "3² + 4² का मान क्या है?",
        "options_en": ["25", "12", "7", "10"],
        "options_hi": ["25", "12", "7", "10"],
        "answer_en": "25",
        "answer_hi": "25",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "What is the probability of getting head in a coin toss?",
        "question_hi": "एक सिक्के को उछालने पर हेड आने की प्रायिकता क्या है?",
        "options_en": ["1/2", "1", "0", "1/4"],
        "options_hi": ["1/2", "1", "0", "1/4"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "In an AP, if a = 5 and d = 2, what is the 10th term?",
        "question_hi": "यदि किसी अंकगणितीय श्रेणी (AP) में a = 5 और d = 2 है, तो 10वाँ पद क्या होगा?",
        "options_en": ["23", "25", "22", "24"],
        "options_hi": ["23", "25", "22", "24"],
        "answer_en": "23",
        "answer_hi": "23",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "What is the sum of angles in a triangle?",
        "question_hi": "त्रिभुज के कोणों का योगफल क्या होता है?",
        "options_en": ["180°", "360°", "90°", "270°"],
        "options_hi": ["180°", "360°", "90°", "270°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Which number is neither prime nor composite?",
        "question_hi": "कौन-सी संख्या अभाज्य भी नहीं है और संयोज्य भी नहीं?",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
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
        "num": 26,
        "question_en": "The value of 0.25 as a fraction is?",
        "question_hi": "0.25 का भिन्न रूप क्या है?",
        "options_en": ["1/4", "1/2", "3/4", "1/3"],
        "options_hi": ["1/4", "1/2", "3/4", "1/3"],
        "answer_en": "1/4",
        "answer_hi": "1/4",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "Which of the following has no real square root?",
        "question_hi": "निम्नलिखित में से किसका वास्तविक वर्गमूल नहीं है?",
        "options_en": ["-4", "0", "4", "1"],
        "options_hi": ["-4", "0", "4", "1"],
        "answer_en": "-4",
        "answer_hi": "-4",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "What is the cube root of 64?",
        "question_hi": "64 का घनमूल क्या है?",
        "options_en": ["4", "8", "16", "6"],
        "options_hi": ["4", "8", "16", "6"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "How many degrees are there in a straight angle?",
        "question_hi": "एक सरल कोण में कितने डिग्री होते हैं?",
        "options_en": ["180°", "90°", "120°", "360°"],
        "options_hi": ["180°", "90°", "120°", "360°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "What is the value of x in the equation 2x + 3 = 11?",
        "question_hi": "समीकरण 2x + 3 = 11 में x का मान क्या है?",
        "options_en": ["4", "5", "6", "3"],
        "options_hi": ["4", "5", "6", "3"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "What is the HCF of 18 and 24?",
        "question_hi": "18 और 24 का महत्तम समापवर्तक (HCF) क्या है?",
        "options_en": ["6", "3", "12", "9"],
        "options_hi": ["6", "3", "12", "9"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "What is the solution of the equation x - 5 = 9?",
        "question_hi": "समीकरण x - 5 = 9 का हल क्या है?",
        "options_en": ["14", "4", "5", "9"],
        "options_hi": ["14", "4", "5", "9"],
        "answer_en": "14",
        "answer_hi": "14",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "What is the circumference of a circle with radius 7 cm? (π = 22/7)",
        "question_hi": "7 सेमी त्रिज्या वाले वृत्त की परिधि क्या है? (π = 22/7)",
        "options_en": ["44 cm", "22 cm", "14 cm", "28 cm"],
        "options_hi": ["44 सेमी", "22 सेमी", "14 सेमी", "28 सेमी"],
        "answer_en": "44 cm",
        "answer_hi": "44 सेमी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "What is the median of 3, 7, 9, 2, 5?",
        "question_hi": "3, 7, 9, 2, 5 का माध्यिका (Median) क्या है?",
        "options_en": ["5", "7", "3", "9"],
        "options_hi": ["5", "7", "3", "9"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "What is the distance formula between two points (x₁, y₁) and (x₂, y₂)?",
        "question_hi": "दो बिंदुओं (x₁, y₁) और (x₂, y₂) के बीच की दूरी का सूत्र क्या है?",
        "options_en": [
          "√[(x₂ - x₁)² + (y₂ - y₁)²]",
          "(x₂ - x₁) + (y₂ - y₁)",
          "(x₁ + x₂)/2",
          "(y₁ + y₂)/2"
        ],
        "options_hi": [
          "√[(x₂ - x₁)² + (y₂ - y₁)²]",
          "(x₂ - x₁) + (y₂ - y₁)",
          "(x₁ + x₂)/2",
          "(y₁ + y₂)/2"
        ],
        "answer_en": "√[(x₂ - x₁)² + (y₂ - y₁)²]",
        "answer_hi": "√[(x₂ - x₁)² + (y₂ - y₁)²]",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "What is the value of 5⁰?",
        "question_hi": "5⁰ का मान क्या है?",
        "options_en": ["1", "5", "0", "Undefined"],
        "options_hi": ["1", "5", "0", "अपरिभाषित"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "What is the formula for the surface area of a cube?",
        "question_hi": "घन के पृष्ठीय क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["6a²", "4a²", "a³", "2a²"],
        "options_hi": ["6a²", "4a²", "a³", "2a²"],
        "answer_en": "6a²",
        "answer_hi": "6a²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "Which is the smallest prime number?",
        "question_hi": "सबसे छोटी अभाज्य संख्या कौन-सी है?",
        "options_en": ["2", "1", "3", "0"],
        "options_hi": ["2", "1", "3", "0"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "What is the value of x in the equation 3x + 2 = 17?",
        "question_hi": "समीकरण 3x + 2 = 17 में x का मान क्या है?",
        "options_en": ["5", "6", "4", "3"],
        "options_hi": ["5", "6", "4", "3"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "Which angle is an acute angle?",
        "question_hi": "निम्न में से कौन सा कोण तीव्र कोण है?",
        "options_en": ["45°", "90°", "120°", "180°"],
        "options_hi": ["45°", "90°", "120°", "180°"],
        "answer_en": "45°",
        "answer_hi": "45°",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "If the sum of interior angles of a polygon is 540°, how many sides does it have?",
        "question_hi": "यदि एक बहुभुज के आंतरिक कोणों का योग 540° है, तो उसमें कितनी भुजाएँ होती हैं?",
        "options_en": ["5", "6", "4", "3"],
        "options_hi": ["5", "6", "4", "3"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "What is the formula for the area of a circle?",
        "question_hi": "वृत्त के क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["πr²", "2πr", "πd", "r²"],
        "options_hi": ["πr²", "2πr", "πd", "r²"],
        "answer_en": "πr²",
        "answer_hi": "πr²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "The cube of 3 is?",
        "question_hi": "3 का घन क्या है?",
        "options_en": ["27", "9", "81", "6"],
        "options_hi": ["27", "9", "81", "6"],
        "answer_en": "27",
        "answer_hi": "27",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "What is the value of | -7 |?",
        "question_hi": "| -7 | का मान क्या है?",
        "options_en": ["7", "-7", "0", "1"],
        "options_hi": ["7", "-7", "0", "1"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Which number is a perfect square?",
        "question_hi": "निम्न में से कौन-सी संख्या पूर्ण वर्ग है?",
        "options_en": ["49", "30", "27", "20"],
        "options_hi": ["49", "30", "27", "20"],
        "answer_en": "49",
        "answer_hi": "49",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "The product of two consecutive odd numbers is 143. What are they?",
        "question_hi": "दो क्रमागत विषम संख्याओं का गुणनफल 143 है। वे कौन सी संख्याएँ हैं?",
        "options_en": ["11 and 13", "13 and 15", "7 and 9", "5 and 7"],
        "options_hi": ["11 और 13", "13 और 15", "7 और 9", "5 और 7"],
        "answer_en": "11 and 13",
        "answer_hi": "11 और 13",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "What is the slope of a line parallel to x-axis?",
        "question_hi": "x-अक्ष के समांतर रेखा का ढाल क्या होता है?",
        "options_en": ["0", "1", "Undefined", "Infinite"],
        "options_hi": ["0", "1", "अपरिभाषित", "अनंत"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "Which number is divisible by 9?",
        "question_hi": "निम्न में से कौन-सी संख्या 9 से विभाज्य है?",
        "options_en": ["81", "72", "27", "All of these"],
        "options_hi": ["81", "72", "27", "इनमें सभी"],
        "answer_en": "All of these",
        "answer_hi": "इनमें सभी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "What is the 5th term of the AP: 2, 4, 6, ...?",
        "question_hi": "AP: 2, 4, 6, ... का पाँचवाँ पद क्या है?",
        "options_en": ["10", "12", "8", "14"],
        "options_hi": ["10", "12", "8", "14"],
        "answer_en": "10",
        "answer_hi": "10",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "What is the cube of 5?",
        "question_hi": "5 का घन क्या है?",
        "options_en": ["125", "25", "15", "100"],
        "options_hi": ["125", "25", "15", "100"],
        "answer_en": "125",
        "answer_hi": "125",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 51,
        "question_en": "What is the value of the discriminant in the quadratic equation x² - 4x + 4 = 0?",
        "question_hi": "समीकरण x² - 4x + 4 = 0 में विषमांक (discriminant) का मान क्या है?",
        "options_en": ["0", "4", "16", "2"],
        "options_hi": ["0", "4", "16", "2"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 52,
        "question_en": "What is the formula for the area of a circle?",
        "question_hi": "वृत्त का क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["πr²", "2πr", "πd", "2r"],
        "options_hi": ["πr²", "2πr", "πd", "2r"],
        "answer_en": "πr²",
        "answer_hi": "πr²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 53,
        "question_en": "What is the value of tan 30°?",
        "question_hi": "tan 30° का मान क्या है?",
        "options_en": ["1/√3", "1", "√3", "0"],
        "options_hi": ["1/√3", "1", "√3", "0"],
        "answer_en": "1/√3",
        "answer_hi": "1/√3",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 54,
        "question_en": "What is the solution to the equation 3x + 5 = 20?",
        "question_hi": "समीकरण 3x + 5 = 20 का हल क्या है?",
        "options_en": ["5", "4", "3", "2"],
        "options_hi": ["5", "4", "3", "2"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 55,
        "question_en": "The perimeter of a square is 40 cm. What is the length of one side?",
        "question_hi": "एक वर्ग का परिधि 40 सेमी है। एक भुजा की लंबाई क्या होगी?",
        "options_en": ["10 cm", "8 cm", "5 cm", "12 cm"],
        "options_hi": ["10 सेमी", "8 सेमी", "5 सेमी", "12 सेमी"],
        "answer_en": "10 cm",
        "answer_hi": "10 सेमी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 56,
        "question_en": "What is the volume of a sphere with radius 3 cm?",
        "question_hi": "3 सेमी त्रिज्या वाले गोले का आयतन क्या है?",
        "options_en": ["36π cm³", "27π cm³", "81π cm³", "54π cm³"],
        "options_hi": ["36π सेमी³", "27π सेमी³", "81π सेमी³", "54π सेमी³"],
        "answer_en": "36π cm³",
        "answer_hi": "36π सेमी³",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 57,
        "question_en": "What is the sum of the interior angles of a triangle?",
        "question_hi": "त्रिभुज के आंतरिक कोणों का योग क्या होता है?",
        "options_en": ["180°", "360°", "90°", "270°"],
        "options_hi": ["180°", "360°", "90°", "270°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 58,
        "question_en": "What is the value of sin 45°?",
        "question_hi": "sin 45° का मान क्या है?",
        "options_en": ["1/√2", "1", "√2", "0"],
        "options_hi": ["1/√2", "1", "√2", "0"],
        "answer_en": "1/√2",
        "answer_hi": "1/√2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 59,
        "question_en": "The base of a triangle is 8 cm and its height is 6 cm. What is the area?",
        "question_hi": "एक त्रिभुज का आधार 8 सेमी और ऊँचाई 6 सेमी है। क्षेत्रफल क्या होगा?",
        "options_en": ["24 cm²", "48 cm²", "14 cm²", "36 cm²"],
        "options_hi": ["24 सेमी²", "48 सेमी²", "14 सेमी²", "36 सेमी²"],
        "answer_en": "24 cm²",
        "answer_hi": "24 सेमी²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 60,
        "question_en": "What is the square root of 49?",
        "question_hi": "49 का वर्गमूल क्या है?",
        "options_en": ["7", "6", "5", "8"],
        "options_hi": ["7", "6", "5", "8"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 61,
        "question_en": "What is the value of (2x + 3) when x = 4?",
        "question_hi": "जब x = 4 हो, तो (2x + 3) का मान क्या होगा?",
        "options_en": ["11", "10", "12", "9"],
        "options_hi": ["11", "10", "12", "9"],
        "answer_en": "11",
        "answer_hi": "11",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 62,
        "question_en": "What is the value of cos 60°?",
        "question_hi": "cos 60° का मान क्या है?",
        "options_en": ["1/2", "1", "√3/2", "0"],
        "options_hi": ["1/2", "1", "√3/2", "0"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 63,
        "question_en": "What is the perimeter of a circle with radius 7 cm?",
        "question_hi": "7 सेमी त्रिज्या वाले वृत्त का परिधि क्या होगा?",
        "options_en": ["14π cm", "7π cm", "21π cm", "22π cm"],
        "options_hi": ["14π सेमी", "7π सेमी", "21π सेमी", "22π सेमी"],
        "answer_en": "14π cm",
        "answer_hi": "14π सेमी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 64,
        "question_en": "What is the area of a parallelogram with base 10 cm and height 5 cm?",
        "question_hi": "10 सेमी आधार और 5 सेमी ऊँचाई वाले समलम्ब्रलय का क्षेत्रफल क्या है?",
        "options_en": ["50 cm²", "40 cm²", "45 cm²", "55 cm²"],
        "options_hi": ["50 सेमी²", "40 सेमी²", "45 सेमी²", "55 सेमी²"],
        "answer_en": "50 cm²",
        "answer_hi": "50 सेमी²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 65,
        "question_en": "What is the value of log10 100?",
        "question_hi": "log10 100 का मान क्या है?",
        "options_en": ["2", "1", "3", "10"],
        "options_hi": ["2", "1", "3", "10"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 66,
        "question_en": "What is the sum of the angles in a quadrilateral?",
        "question_hi": "चतुर्भुज के कोणों का योग क्या होता है?",
        "options_en": ["360°", "180°", "90°", "270°"],
        "options_hi": ["360°", "180°", "90°", "270°"],
        "answer_en": "360°",
        "answer_hi": "360°",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 67,
        "question_en": "What is the value of √16?",
        "question_hi": "√16 का मान क्या है?",
        "options_en": ["4", "8", "2", "16"],
        "options_hi": ["4", "8", "2", "16"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 68,
        "question_en": "What is the value of 5x - 3 when x = 2?",
        "question_hi": "जब x = 2 हो, तो 5x - 3 का मान क्या होगा?",
        "options_en": ["7", "5", "10", "8"],
        "options_hi": ["7", "5", "10", "8"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 69,
        "question_en": "What is the solution to the equation 2x + 3 = 7?",
        "question_hi": "समीकरण 2x + 3 = 7 का हल क्या है?",
        "options_en": ["2", "1", "3", "4"],
        "options_hi": ["2", "1", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 70,
        "question_en": "What is the area of a rectangle with length 12 cm and width 8 cm?",
        "question_hi": "एक आयत का क्षेत्रफल क्या होगा, जिसकी लंबाई 12 सेमी और चौड़ाई 8 सेमी है?",
        "options_en": ["96 cm²", "96 cm", "88 cm²", "100 cm²"],
        "options_hi": ["96 सेमी²", "96 सेमी", "88 सेमी²", "100 सेमी²"],
        "answer_en": "96 cm²",
        "answer_hi": "96 सेमी²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 71,
        "question_en": "What is the value of sin 90°?",
        "question_hi": "sin 90° का मान क्या है?",
        "options_en": ["1", "0", "√2", "√3"],
        "options_hi": ["1", "0", "√2", "√3"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 72,
        "question_en": "The sum of the angles in a triangle is always:",
        "question_hi": "एक त्रिभुज के कोणों का योग हमेशा क्या होता है?",
        "options_en": ["180°", "360°", "90°", "270°"],
        "options_hi": ["180°", "360°", "90°", "270°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 73,
        "question_en": "What is the volume of a cylinder with radius 3 cm and height 5 cm?",
        "question_hi": "एक बेलन का आयतन क्या होगा, जिसकी त्रिज्या 3 सेमी और ऊँचाई 5 सेमी है?",
        "options_en": ["45π cm³", "50π cm³", "40π cm³", "30π cm³"],
        "options_hi": ["45π सेमी³", "50π सेमी³", "40π सेमी³", "30π सेमी³"],
        "answer_en": "45π cm³",
        "answer_hi": "45π सेमी³",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 74,
        "question_en": "What is the value of log10 1000?",
        "question_hi": "log10 1000 का मान क्या है?",
        "options_en": ["3", "2", "1", "4"],
        "options_hi": ["3", "2", "1", "4"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 75,
        "question_en": "What is the area of a rhombus with diagonals 8 cm and 6 cm?",
        "question_hi": "एक समलम्बवृत्त का क्षेत्रफल क्या होगा, जिसकी विकर्ण 8 सेमी और 6 सेमी हैं?",
        "options_en": ["24 cm²", "48 cm²", "18 cm²", "30 cm²"],
        "options_hi": ["24 सेमी²", "48 सेमी²", "18 सेमी²", "30 सेमी²"],
        "answer_en": "24 cm²",
        "answer_hi": "24 सेमी²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 76,
        "question_en": "What is the perimeter of a triangle with sides 6 cm, 8 cm, and 10 cm?",
        "question_hi": "एक त्रिभुज का परिधि क्या होगा, जिसकी भुजाएँ 6 सेमी, 8 सेमी, और 10 सेमी हैं?",
        "options_en": ["24 cm", "20 cm", "18 cm", "16 cm"],
        "options_hi": ["24 सेमी", "20 सेमी", "18 सेमी", "16 सेमी"],
        "answer_en": "24 cm",
        "answer_hi": "24 सेमी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 77,
        "question_en": "What is the solution to the equation 4x - 5 = 15?",
        "question_hi": "समीकरण 4x - 5 = 15 का हल क्या है?",
        "options_en": ["5", "10", "7", "3"],
        "options_hi": ["5", "10", "7", "3"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 78,
        "question_en": "The value of the expression 3x + 5 when x = 2 is:",
        "question_hi": "व्यक्ति 3x + 5 का मान जब x = 2 हो क्या होगा?",
        "options_en": ["11", "7", "6", "9"],
        "options_hi": ["11", "7", "6", "9"],
        "answer_en": "11",
        "answer_hi": "11",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 79,
        "question_en": "What is the volume of a cone with radius 4 cm and height 9 cm?",
        "question_hi": "एक शंकु का आयतन क्या होगा, जिसकी त्रिज्या 4 सेमी और ऊँचाई 9 सेमी है?",
        "options_en": ["36π cm³", "72π cm³", "54π cm³", "48π cm³"],
        "options_hi": ["36π सेमी³", "72π सेमी³", "54π सेमी³", "48π सेमी³"],
        "answer_en": "36π cm³",
        "answer_hi": "36π सेमी³",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 80,
        "question_en": "What is the area of a trapezium with parallel sides 7 cm and 9 cm, and height 5 cm?",
        "question_hi": "एक समलम्ब आयत का क्षेत्रफल क्या होगा, जिसकी समानांतर भुजाएँ 7 सेमी और 9 सेमी हैं, और ऊँचाई 5 सेमी है?",
        "options_en": ["40 cm²", "80 cm²", "60 cm²", "50 cm²"],
        "options_hi": ["40 सेमी²", "80 सेमी²", "60 सेमी²", "50 सेमी²"],
        "answer_en": "40 cm²",
        "answer_hi": "40 सेमी²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 81,
        "question_en": "What is the area of a circle with radius 7 cm?",
        "question_hi": "एक वृत्त का क्षेत्रफल क्या होगा, जिसकी त्रिज्या 7 सेमी है?",
        "options_en": ["49π cm²", "14π cm²", "28π cm²", "21π cm²"],
        "options_hi": ["49π सेमी²", "14π सेमी²", "28π सेमी²", "21π सेमी²"],
        "answer_en": "49π cm²",
        "answer_hi": "49π सेमी²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 82,
        "question_en": "What is the volume of a sphere with radius 3 cm?",
        "question_hi": "एक गोलाकार का आयतन क्या होगा, जिसकी त्रिज्या 3 सेमी है?",
        "options_en": ["36π cm³", "108π cm³", "72π cm³", "24π cm³"],
        "options_hi": ["36π सेमी³", "108π सेमी³", "72π सेमी³", "24π सेमी³"],
        "answer_en": "36π cm³",
        "answer_hi": "36π सेमी³",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 83,
        "question_en": "What is the perimeter of a square with side 5 cm?",
        "question_hi": "एक वर्ग का परिधि क्या होगा, जिसकी भुजा 5 सेमी है?",
        "options_en": ["20 cm", "25 cm", "15 cm", "10 cm"],
        "options_hi": ["20 सेमी", "25 सेमी", "15 सेमी", "10 सेमी"],
        "answer_en": "20 cm",
        "answer_hi": "20 सेमी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 84,
        "question_en": "What is the value of 2³?",
        "question_hi": "2³ का मान क्या है?",
        "options_en": ["8", "6", "4", "10"],
        "options_hi": ["8", "6", "4", "10"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 85,
        "question_en": "The roots of the equation x² - 5x + 6 = 0 are:",
        "question_hi": "समीकरण x² - 5x + 6 = 0 की मूलों की मान क्या हैं?",
        "options_en": ["2 and 3", "1 and 6", "3 and 2", "5 and 1"],
        "options_hi": ["2 और 3", "1 और 6", "3 और 2", "5 और 1"],
        "answer_en": "2 and 3",
        "answer_hi": "2 और 3",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 86,
        "question_en": "What is the solution to the equation 3x + 4 = 10?",
        "question_hi": "समीकरण 3x + 4 = 10 का हल क्या है?",
        "options_en": ["2", "3", "1", "6"],
        "options_hi": ["2", "3", "1", "6"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 87,
        "question_en": "What is the area of a triangle with base 8 cm and height 5 cm?",
        "question_hi": "एक त्रिभुज का क्षेत्रफल क्या होगा, जिसकी आधार 8 सेमी और ऊँचाई 5 सेमी है?",
        "options_en": ["20 cm²", "40 cm²", "30 cm²", "10 cm²"],
        "options_hi": ["20 सेमी²", "40 सेमी²", "30 सेमी²", "10 सेमी²"],
        "answer_en": "20 cm²",
        "answer_hi": "20 सेमी²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 88,
        "question_en": "What is the value of sin 0°?",
        "question_hi": "sin 0° का मान क्या है?",
        "options_en": ["0", "1", "√2", "√3"],
        "options_hi": ["0", "1", "√2", "√3"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 89,
        "question_en": "What is the value of tan 45°?",
        "question_hi": "tan 45° का मान क्या है?",
        "options_en": ["1", "0", "√3", "√2"],
        "options_hi": ["1", "0", "√3", "√2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 90,
        "question_en": "What is the solution to the equation 5x + 2 = 12?",
        "question_hi": "समीकरण 5x + 2 = 12 का हल क्या है?",
        "options_en": ["2", "4", "5", "3"],
        "options_hi": ["2", "4", "5", "3"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 91,
        "question_en": "What is the value of (x + y)²?",
        "question_hi": "(x + y)² का मान क्या है?",
        "options_en": ["x² + y²", "x² + 2xy + y²", "x² + 2xy", "x² + y² - 2xy"],
        "options_hi": ["x² + y²", "x² + 2xy + y²", "x² + 2xy", "x² + y² - 2xy"],
        "answer_en": "x² + 2xy + y²",
        "answer_hi": "x² + 2xy + y²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 92,
        "question_en": "The value of sin 45° is:",
        "question_hi": "sin 45° का मान क्या है?",
        "options_en": ["1/2", "1/√2", "√2", "1"],
        "options_hi": ["1/2", "1/√2", "√2", "1"],
        "answer_en": "1/√2",
        "answer_hi": "1/√2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 93,
        "question_en": "The area of a square is 64 cm². What is the length of one side?",
        "question_hi": "एक वर्ग का क्षेत्रफल 64 सेमी² है। एक भुजा की लंबाई क्या होगी?",
        "options_en": ["8 cm", "16 cm", "4 cm", "10 cm"],
        "options_hi": ["8 सेमी", "16 सेमी", "4 सेमी", "10 सेमी"],
        "answer_en": "8 cm",
        "answer_hi": "8 सेमी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 94,
        "question_en": "What is the value of the expression 2x + 5y if x = 3 and y = 4?",
        "question_hi": "यदि x = 3 और y = 4 हो, तो 2x + 5y का मान क्या होगा?",
        "options_en": ["22", "23", "26", "28"],
        "options_hi": ["22", "23", "26", "28"],
        "answer_en": "22",
        "answer_hi": "22",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 95,
        "question_en": "The perimeter of a rectangle is 30 cm and its length is 8 cm. What is the breadth?",
        "question_hi": "एक आयत की परिधि 30 सेमी है और उसकी लंबाई 8 सेमी है। चौड़ाई क्या होगी?",
        "options_en": ["7 cm", "6 cm", "5 cm", "4 cm"],
        "options_hi": ["7 सेमी", "6 सेमी", "5 सेमी", "4 सेमी"],
        "answer_en": "7 cm",
        "answer_hi": "7 सेमी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 96,
        "question_en": "The roots of the equation x² - 8x + 16 = 0 are:",
        "question_hi": "समीकरण x² - 8x + 16 = 0 के मूल क्या होंगे?",
        "options_en": ["4 and 4", "8 and 8", "16 and 16", "2 and 8"],
        "options_hi": ["4 और 4", "8 और 8", "16 और 16", "2 और 8"],
        "answer_en": "4 and 4",
        "answer_hi": "4 और 4",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 97,
        "question_en": "What is the value of cos 60°?",
        "question_hi": "cos 60° का मान क्या है?",
        "options_en": ["0", "1", "1/2", "√3/2"],
        "options_hi": ["0", "1", "1/2", "√3/2"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 98,
        "question_en": "What is the area of a triangle with base 5 cm and height 6 cm?",
        "question_hi": "एक त्रिकोण का क्षेत्रफल क्या होगा, जिसकी आधार 5 सेमी और ऊँचाई 6 सेमी है?",
        "options_en": ["15 cm²", "30 cm²", "25 cm²", "10 cm²"],
        "options_hi": ["15 सेमी²", "30 सेमी²", "25 सेमी²", "10 सेमी²"],
        "answer_en": "15 cm²",
        "answer_hi": "15 सेमी²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 99,
        "question_en": "What is the value of x in the equation 3x + 2 = 11?",
        "question_hi": "समीकरण 3x + 2 = 11 में x का मान क्या होगा?",
        "options_en": ["3", "2", "5", "4"],
        "options_hi": ["3", "2", "5", "4"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 100,
        "question_en": "The sum of angles in a triangle is:",
        "question_hi": "एक त्रिकोण के कोणों का योग क्या होता है?",
        "options_en": ["180°", "360°", "90°", "120°"],
        "options_hi": ["180°", "360°", "90°", "120°"],
        "answer_en": "180°",
        "answer_hi": "180°",
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