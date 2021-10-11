let questions = [
    {
        question: "1. What Does HTML stand for?",
        options: [
            "Hyper Text Preporcessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ],
        answer: 1
    },
    {
        question: "2. What is the purpose of the <body> element?",
        options: [
            "The body element conects to the head element.",
            "The body element will remain an empty placeholder.",
            "The body element is where all of the webpage's main content will go.",
            "The body element serves no purpose"
        ],
        answer: 2
    },
    {
        question: "2. How do you add a message to a git commit?",
        options: [
            "Upload and attach a file to git commit.",
            "Add -m &#34message&#34 at the end of git commit.",
            "Both A & B",
            "None of the above"
        ],
        answer: 1
    },
    {
        question: "3. On a technical level, what is the difference between a section and a div?",
        options: [
            "A section element takes up more height on the page.",
            "A section element has bold text by default.",
            "A div element takes up more width on the page.",
            "There is no difference."
        ],
        answer: 3
    },
    {
        question: "4. How do you leave comments in HTML code?",
        options: [
            "/* */",
            "<!-- -->",
            "{{ }}",
            "//"
        ],
        answer: 2
    },
    {
        question: "5. Given the following CSS selector, which HTML element would be the outermost/parent element?",
        options: [
            "<li>",
            "<nav>",
            "<ul>",
            "<header>"
        ],
        answer: 3
    },
    {
        question: "6. What is the correct HTML for making a radio button?",
        options: [
            "<radio>",
            "<radiobutton>",
            "<input type=&#34radiobutton&#34>",
            "<input type=&#34radio&#34>"
        ],
        answer: 3
    },
    {
        question: "7. What is the purpose of the alt attribut for images?",
        options: [
            "To make the image load faster.",
            "To make it easier to style the image with CSS.",
            "To prevent search engines from indexing the image.",
            "To provice context for the image."
        ],
        answer: 3
    },
    {
        question: "8. How can you add more than one class to an HTML element?",
        options: [
            "Add a second class attribute.",
            "Add a comma between the class names.",
            "Add a space between the class names.",
            "Add a class-2 attribute."
        ],
        answer: 2
    },
    {
        question: "9. What CSS declaration could you add to a 50%-width <div> to center it?",
        options: [
            "text-align: center",
            "margin: 0 auto",
            "float: center",
            "align: center"
        ],
        answer: 1
    },
    {
        question: "10. Which CSS property allows the parent element to display its CSS properties by stretching its dimensions to physically contain its child elements?",
        options: [
            "text-align: center",
            "overflow: auto;",
            "margin: auto;",
            "display: inline-block;"
        ],
        answer: 1
    },
    {
        question: "11. Why is it important to be careful of the source when embedding an <iframe>?",
        options: [
            "Copyright infringement.",
            "Security risks from bad websites",
            "Lawsuit from Apple for putting i in front of a noun.",
            "1 and 2"
        ],
        answer: 3
    },
    {
        question: "12. If I wish to align an element to the top of its container, which CSS property should I use?",
        options: [
            "text-align: top;",
            "margin-align: top;",
            "overflow: top;",
            "vertical-align: top;"
        ],
        answer: 3
    },
    {
        question: "13. True or False? The main purpose of the <head> element is that it contains information that helps the browser understand what the page is about, what it should look like, and any other behind-the-scenes information.",
        options: [
            "True",
            "False"
        ],
        answer: 0
    },
    {
        question: "14. True or false? The main purpose of the <body> element is to hold all of the document's actual content that is meant to be seen or interacted with by the page's visitor.",
        options: [
            "True",
            "False"
        ],
        answer: 0
    },
    {
        question: '15. In the following code, what would be logged to the console?' +

        'var name = "lernantino";' +
        'if (name) {' +
          'console.log("sheep!");' +
        '}' +
        'else {' +
          'console.log("goats!");' +
        '}',
        options: [
            "sheep!",
            "goats!",
            "undefined"
        ],
        answer: 0
    },
    {
        question: "16. Which is NOT the proper way to iterate through this cars array to display each element?",
        options: [
            'for (var i = 0; i < cars.length; i++) {' +
                'console.log(cars[i]);' +
              '}',
            'for (var i = 0; i < cars.length; i++) { console.log(i, cars[i]); }',
            'for (var i = 0, i > cars.length, i++) {' +
                'console.log(cars[i]);' +
              '}',
            'var i = cars.length-1;' +
            'while (i >= 0) {' +
              'console.log(cars[i]);' +
              'i--;' +
            '}'
        ],
        answer: 2
    },
    {
        question: '17. Given the following code...' +
                    'var input = 1;' +
                    'var checkNum = function(num) {' +
                    'var sum = num + 1;' +
                    'switch(sum) {' +
                        'case 1:' +
                        'console.log("one");' +
                        'case 2:' +
                        'console.log("two");' +
                        'break;' +
                        'case 3:' +
                        'console.log("three");' +
                        'break;' +
                      '}' +
                    '};' +
                    'checkNum(input);' +
                    "<br>" + 
                    'What will be console logged when the code is executed?'
                    ,
        options: [
            "one",
            "two",
            "three",
            "nothing"
        ],
        answer: 1
    },
    {
        question: '18. Given the following object:' +
        'var computer = {' +
          'ram: 8,' +
          'memory: 250,' +
          'os: "macOS",' +
          'startUp: function() {' +
            'console.log("starting " + this.os);' +
          '}' +
        '};' +
        "<br>" +
        'How would you console log the computer&#39s RAM?',
        options: [
            "console.log(computer[ram]);",
            "console.log(computer.ram);",
            "console.log(computer(ram));",
            "console.log(computer->ram);"
        ],
        answer: 1
    },
    {
        question: "19. Which statement correctly stores data into the Web Storage API?",
        options: [
            "localStorage.getItem(&#34lunch&#34, &#34sandwich&#34)",
            "localStorage.setItem(&#34lunch&#34, &#34sandwich&#34)",
            "getItem.localStorage.(&#34lunch&#34, &#34sandwich&#34)",
            "setItem.localStorage(&#34lunch&#34, &#34sandwich&#34)"
        ],
        answer: 1
    },
    {
        question: "20. What is a pseudo-class?",
        options: [
            'A CSS rule that contains no declarations.',
            'A CSS declaration that hides the element.',
            'An element that has more than on class.',
            'A CSS keyword to target an element&#34s state.'
        ],
        answer: 3
    },
    {
        question: "21. What is an example of a pseudo-element?",
        options: [
            '::before',
            '::after',
            '::first-letter',
            'All of the above'
        ],
        answer: 3
    },
    {
        question: "What does the z-index property do?",
        options: [
            'Removes an element from the DOM.',
            'Changes the stacking order of elements.',
            'Changes the opacity of an element.',
            'Forces an element to be positioned relatively.'
        ],
        answer: 1
    }
]

console.log(questions);