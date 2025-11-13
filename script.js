const questions = [
    {
        question: '1-Quanto é "12 x 3 - 4"?',
        answers: [
            'A- 32',
            'B- 36',
            'C- 40',
            'D- 35'
        ],
        'correct': 0,
        'answered': false
    },
    {
        question: '2-Qual é a raiz quadrada de 144?',
        answers: [
            'A- 12',
            'B- 10',
            'C- 18',
            'D- 14'
        ],
        'correct': 0,
        'answered': false
    },
    {
        question: '3-Qual o resultado de "5!"?',
        answers: [
            'A- 15',
            'B- 110',
            'C- 120',
            'D- 48'
        ],
        'correct': 2,
        'answered': false
    },
    {
        question: '4-Qual o resultado de "2.2²"?',
        answers: [
            'A- 2',
            'B- 4+2',
            'C- 3x1x2',
            'D- 8'
        ],
        'correct': 3,
        'answered': false
    },
    {
        question: '5-Qual a derivada de "f(x) = x²+2"?',
        answers: [
            'A- 2x+2',
            'B- 2x',
            'C- x²',
            'D- 2+x'
        ],
        'correct': 1,
        'answered': false
    }
]

let score = 0
let textScore = document.getElementById('score')

const question = document.getElementById('question')
const answers = document.getElementById('answers')

const scoreboard = document.getElementById('scoreboard')

const next = document.getElementById('next')
const prev = document.getElementById('prev')
const end = document.getElementById('end')

let totalQuestions = questions.length

let indexQuestion = 0

function showQuestions() {
    answers.innerHTML = ''
    question.innerText = questions[indexQuestion].question
    let currentAnswers = questions[indexQuestion].answers

    currentAnswers.forEach((item, i) => {
        let answer = document.createElement('li')
        answer.innerText = item
        answer.classList.add('answer')

        if (!questions[indexQuestion].answered) {
            answer.addEventListener('click', () => {
                if (i === questions[indexQuestion].correct) {
                    score++
                    textScore.innerText = `Pontuação: ${score}`
                    answer.style.backgroundColor = "green"

                } else {
                    answer.style.backgroundColor = "red"
                    answers.children[questions[indexQuestion].correct].style.backgroundColor = "green"
                }
                questions[indexQuestion].answered = true

                Array.from(answers.children).forEach(li => {
                    li.style.pointerEvents = 'none'
                })
            })
        }

        answers.appendChild(answer)
    })

    prev.style.display = indexQuestion === 0 ? 'none' : 'block'
    next.style.display = indexQuestion >= totalQuestions - 1 ? 'none' : 'block'
    end.style.display = indexQuestion >= totalQuestions - 1 ? 'block' : 'none'
}

next.addEventListener('click', () => {
    indexQuestion++
    showQuestions()
})
prev.addEventListener('click', () => {
    indexQuestion--
    showQuestions()
})
end.addEventListener('click', () => {
    scoreboard.style.display = "block"
})

const reset = document.getElementById('reset')

reset.addEventListener('click', () => {
    indexQuestion = 0
    scoreboard.style.display = "none"
    score = 0
    textScore.innerText = `Pontuação: ${score}`

    questions.forEach(q => {
        q.answered = false
    })

    showQuestions()
})
showQuestions()