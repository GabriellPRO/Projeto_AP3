const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["São Paulo", "Rio de Janeiro", "Brasília"],
        correctAnswer: 2
    },
    {
        question: "Qual é o maior planeta do Sistema Solar?",
        options: ["Terra", "Júpiter", "Marte"],
        correctAnswer: 1
    },
    {
        question: "Quem escreveu a peça 'Romeu e Julieta'?",
        options: ["Shakespeare", "Hemingway", "Tolstói"],
        correctAnswer: 0
    },
    {
        question: "Qual é o símbolo químico do ouro?",
        options: ["Au", "Ag", "Fe"],
        correctAnswer: 0
    },
    {
        question: "Quantos continentes existem?",
        options: ["5", "6", "7"],
        correctAnswer: 2
    },
    {
        question: "Quem pintou a 'Mona Lisa'?",
        options: ["Picasso", "Van Gogh", "Da Vinci"],
        correctAnswer: 2
    },
    {
        question: "Qual é o maior mamífero terrestre?",
        options: ["Elefante africano", "Girafa", "Rinoceronte"],
        correctAnswer: 0
    },
    {
        question: "Qual é o elemento mais abundante na crosta terrestre?",
        options: ["Ferro", "Silício", "Oxigênio"],
        correctAnswer: 1
    },
    {
        question: "Qual é o país mais populoso do mundo?",
        options: ["Índia", "China", "Estados Unidos"],
        correctAnswer: 1
    },
    {
        question: "Qual é a capital da França?",
        options: ["Berlim", "Londres", "Paris"],
        correctAnswer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    displayQuestion();
}

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    const resultElement = document.getElementById("result");

    questionElement.innerText = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.innerText = option;
        optionButton.classList.add("option");
        optionButton.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(optionButton);
    });

    resultElement.innerText = "";
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
        document.getElementById("result").innerText = "Resposta correta!";
    } else {
        document.getElementById("result").innerText = "Resposta incorreta.";
    }

    document.querySelectorAll(".option").forEach(button => {
        button.disabled = true;
    });

    document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.querySelectorAll(".option").forEach(button => {
            button.disabled = false;
        });
        document.getElementById("next-button").disabled = true;
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `
        <h1>Quiz Finalizado</h1>
        <p>Você acertou ${score} de ${questions.length} perguntas.</p>
    `;
}

startQuiz();
