const quizData = [
    {
        question: "Quantos anos tem o Guilherme?",
        a: "10",
        b: "15",
        c: "26",
        d: "110",
        correct: "c",
    }, {
        question: "Quantos anos a Rosana?",
        a:"24",
        b:"63",
        c:"34",
        d: "49",
        correct: "d",

    }, {
        question: "Quem é o futuro presidente do Brasil?",
        a: "Lula",
        b: "Bolsonaro",
        c: "Ciro", 
        d: "Tiririca",
        correct: "b",
    }, {
        question: "Quem a mãe ama mais?",
        a: "Laercio",
        b: "Guilherme",
        c: "Gustavo",
        d: "Todos Nós!!",
        correct: "a",

    }, {
        question: "Em que ano a Dona Rosana fez pela ultima vez a rosquinha italiana??",
        a: "2012",
        b: "2021",
        c: "2019",
        d: "2015",
        correct: "d"
        
    }

]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

