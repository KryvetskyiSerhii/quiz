
const prepositionsButton = document.querySelector('.prepositions')
const tenseButton = document.querySelector('.tense')
const idiomsButton = document.querySelector('.idioms')
const pageContainer = document.querySelector('.page__wrapper')
const headerContainer = document.querySelector('.header__wrapper')
const categoriesToHide = document.querySelectorAll('.first')
const answersToShow = document.querySelectorAll('.second')
const questionButton = document.querySelectorAll('.page__btn')
const questionField = document.querySelector('.header__question')
const answersContainer = document.querySelector('.page__answers')
const nextButton = document.querySelector('.next')
const finishButton = document.querySelector('.finish')
const questioncounter = document.querySelector('.header__counter')
const correctAnswersArea = document.querySelector('.correct__answer')
const incorrectAnswersArea = document.querySelector('.incorrect__answer')



let shuffledQuestions 
let currentQuestionIndex  

let correctAnswers = 0
let incorrectAnswers = 0


const prepositionsQuestions = [
    {
        question: 'My dad usually wakes up ___ 6 a.m.',
        answers: [
            { text: 'at', correct: true},
            { text: 'in', correct: false},
            { text: 'on', correct: false},
            { text: 'from', correct: false}
        ]
    },
    {
        question: 'I have a birthday ____ May.',
        answers: [
            { text: 'at', correct: false},
            { text: 'in', correct: true},
            { text: 'on', correct: false},
            { text: 'from', correct: false}
        ]
    },
    {
        question: 'Every week ___ Monday my friend goes to school ___ 8 a.m.',
        answers: [
            { text: 'at/on', correct: false},
            { text: 'in/in', correct: false},
            { text: 'on/at', correct: true},
            { text: 'in/at', correct: false}
        ]
    },
    {
        question: 'You have to finish the assignment ____ Friday',
        answers: [
            { text: 'till', correct: false},
            { text: 'by', correct: true},
            { text: 'on', correct: false},
            { text: 'at', correct: false}
        ]
    },
    {
        question: 'Students have to stay at school ___ 4 p.m. every day',
        answers: [
            { text: 'till', correct: true},
            { text: 'on', correct: false},
            { text: 'by', correct: false},
            { text: 'from', correct: false}
        ]
    },
    {
        question: 'I usually brush my teeth ___ the morning',
        answers: [
            { text: 'on', correct: false},
            { text: 'at', correct: false},
            { text: 'till', correct: false},
            { text: 'in', correct: true}
        ]
    },
    {
        question: 'John started doing his homework ___ 8 p.m. and finished only ___ midnight',
        answers: [
            { text: 'on/at', correct: false},
            { text: 'at/at', correct: true},
            { text: 'in/in', correct: false},
            { text: 'at/in', correct: false}
        ]
    },
    {
        question: 'It often snows __ winter',
        answers: [
            { text: 'at', correct: false},
            { text: 'on', correct: false},
            { text: 'in', correct: true},
            { text: 'from', correct: false}
        ]
    },
    {
        question: 'Kate got married ___ the age of 19',
        answers: [
            { text: 'from', correct: false},
            { text: 'at', correct: false},
            { text: 'in', correct: true},
            { text: 'on', correct: false}
        ]
    },
    {
        question: 'My friend was born ___ 1985',
        answers: [
            { text: 'in', correct: true},
            { text: 'at', correct: false},
            { text: '___', correct: false},
            { text: 'on', correct: false}
        ]
    }
]

const tenseQuestions = [
    {
        question: 'When I ____ in the park yesterday, I ___ a little kitten under the bench',
        answers: [
            { text: 'was walking / saw', correct: true},
            { text: 'was walking / see', correct: false},
            { text: 'walked / saw', correct: false},
            { text: 'walk/ see', correct: false}
        ]
    },
    {
        question: 'I ___ at 7 a.m. yesterday',
        answers: [
            { text: 'wake up', correct: false},
            { text: 'woke up', correct: true},
            { text: 'was waking up', correct: false},
            { text: 'am waking up', correct: false}
        ]
    },
    {
        question: 'Dan ___ a new car las month',
        answers: [
            { text: 'buys', correct: false},
            { text: 'is buying', correct: false},
            { text: 'bought', correct: true},
            { text: 'buy', correct: false}
        ]
    },
    {
        question: 'It usually ___ a lot in March',
        answers: [
            { text: 'rain', correct: false},
            { text: 'is raining', correct: false},
            { text: 'raining', correct: false},
            { text: 'rains', correct: true}
        ]
    },
    {
        question: 'Paul ____ at the moment',
        answers: [
            { text: 'is not working', correct: true},
            { text: 'does not work', correct: false},
            { text: 'is not work', correct: false},
            { text: 'is not worked', correct: false}
        ]
    },
    {
        question: 'Look at these clouds, it ________',
        answers: [
            { text: 'rains', correct: false},
            { text: 'is raining', correct: false},
            { text: 'is going to rain', correct: true},
            { text: 'rained', correct: false}
        ]
    },
    {
        question: 'This is the best book I ______',
        answers: [
            { text: 'ever read', correct: false},
            { text: 'ever reading', correct: false},
            { text: 'have ever readed', correct: false},
            { text: 'have ever read', correct: true}
        ]
    },
    {
        question: 'Shakespear____ "Romeo and Juliet", _____ he',
        answers: [
            { text: "write / didn't", correct: false},
            { text: "wrote / didn't", correct: true},
            { text: 'wrote / did', correct: false},
            { text: 'write / did', correct: false}
        ]
    },
    {
        question: 'The train ____ at 5 p.m. tomorrow',
        answers: [
            { text: 'arrive', correct: false},
            { text: 'arrived', correct: false},
            { text: 'arriving', correct: false},
            { text: 'arrives', correct: true}
        ]
    },
    {
        question: 'We ___ all our money already!',
        answers: [
            { text: 'have spent', correct: true},
            { text: 'have spend', correct: false},
            { text: 'spend', correct: false},
            { text: 'spent', correct: false}
        ]
    },
    
]

const idiomsQuestions = [
    {
        question: 'Peter is a real pain in the neck',
        answers: [
            { text: 'Peter is annoying everyone', correct: true},
            { text: 'Peter has a pain i his neck', correct: false},
            { text: 'Peter likes to hit other people', correct: false},
            { text: 'Peter is too sleepy', correct: false}
        ]
    },
    {
        question: 'Jim kicked the bucket last year',
        answers: [
            { text: 'Jim found the big bucket last year', correct: false},
            { text: 'Jim had the fight last year', correct: false},
            { text: 'Jim passed away last year', correct: true},
            { text: 'Jim started the new life last year', correct: false}
        ]
    },
    {
        question: 'I am gonna put it in a nutshell',
        answers: [
            { text: 'I am gonna hide it', correct: false},
            { text: 'I am gonna stop doing it', correct: false},
            { text: 'I am gonna eat some nuts', correct: false},
            { text: 'I am gonna explain some complicated idea', correct: true}
        ]
    },
    {
        question: "Let's start the ball rolling!",
        answers: [
            { text: 'I want you to play basketball', correct: false},
            { text: 'I want you to pick the ball up', correct: false},
            { text: 'I want you to start doing it', correct: true},
            { text: 'I want you to give me the ball', correct: false}
        ]
    },
    {
        question: "She speaks Queen's English",
        answers: [
            { text: 'She speaks standard pure English', correct: true},
            { text: 'She speaks like a queen', correct: false},
            { text: 'She does not swear', correct: false},
            { text: 'She speaks only English', correct: false}
        ]
    },
    {
        question: "My husband always talks shop",
        answers: [
            { text: 'My husband always wants to go shopping', correct: false},
            { text: 'My husband always talks about shops', correct: false},
            { text: 'My husband hates shopping', correct: false},
            { text: 'My husband always talks about work', correct: true}
        ]
    },
    {
        question: "The teacher finally got the word out",
        answers: [
            { text: 'The teacher finally started speaking', correct: false},
            { text: 'The teacher finally found the word he wanted to say', correct: true},
            { text: 'The teacher finally made his students speak', correct: false},
            { text: 'The teacher finally made a sound', correct: false}
        ]
    },
    {
        question: "My friend drinks like a fish",
        answers: [
            { text: 'My friend drinks a little water', correct: false},
            { text: 'My friends drinks only water', correct: false},
            { text: 'My friend drinks too much alcohol', correct: true},
            { text: 'My friend drinks water and likes fish', correct: false}
        ]
    },
    {
        question: "My mom has an eye for good food",
        answers: [
            { text: 'My mom can see food', correct: false},
            { text: 'My mom can guess what food it is', correct: false},
            { text: 'My mom always looks for something to eat', correct: false},
            { text: 'My mom knows what food is good', correct: true}
        ]
    },
    {
        question: "Death warmed him up",
        answers: [
            { text: 'He looks really sick', correct: true},
            { text: 'He is dead', correct: false},
            { text: 'He killed someone', correct: false},
            { text: 'He takes a risk to be killed', correct: false}
        ]
    },
]


prepositionsButton.addEventListener('click', () => {
    startQuiz(prepositionsQuestions)
})

tenseButton.addEventListener('click', () => {
    startQuiz(tenseQuestions)
})

idiomsButton.addEventListener('click', () => {
    startQuiz(idiomsQuestions)
})

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startQuiz(array) {
categoriesToHide.forEach(element => element.classList.add('hide'))
answersToShow.forEach(element => element.classList.remove('hide'))
shuffledQuestions = array.sort(() => Math.random() - .5)
currentQuestionIndex = 0
setNextQuestion()
}

function setNextQuestion () {
    reset()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion (question) {
    questionField.innerHTML = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('page__btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answersContainer.appendChild(button)
        questioncounter.innerHTML = `Question ${currentQuestionIndex + 1}/${shuffledQuestions.length}`
    })
}

function selectAnswer (element) {
    const selectedButton = element.target
    selectedButton.classList.add('active')
    const correct = selectedButton.dataset.correct
    if(correct) {correctAnswers++}
    else {incorrectAnswers++}
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    }
    if (shuffledQuestions.length == currentQuestionIndex + 1) {
        finishButton.classList.remove('hide')
    }
}

function reset () {
    nextButton.classList.add('hide')
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild)
    }
}

finishButton.addEventListener('click', renderFinalPage)

function renderFinalPage () {
    questionButton.forEach(element => element.classList.add('hide'))
    finishButton.classList.add('hide')
    pageContainer.innerHTML = ''
    pageContainer.innerHTML = `<h3 class="correct__answer">Correct answers: ${correctAnswers}</h3>
    <h3 class="incorrect__answers">Incorrect answers: ${incorrectAnswers}</h3>
    <button class="back">Back</button>`
    const backButton = document.querySelector('.back')
    backButton.addEventListener('click', () => {
        location.reload()
        return false
    })
    headerContainer.innerHTML = `<h2 class="result">Your final result is ${Math.ceil(correctAnswers/shuffledQuestions.length*100)} points</h2>`  
}

