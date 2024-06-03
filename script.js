/* Barra de navegação */ 
function abrirMenu(event){
    event.preventDefault();
    document.getElementById("menu").style.width = "250px";
    document.getElementById("menu").style.display = "flex";
    document.getElementById("conteudo").style.marginLeft = "";
}

function fecharMenu(event){
    event.preventDefault();
    document.getElementById("menu").style.width = "0px";
    document.getElementById("menu").style.display = "none";
    document.getElementById("conteudo").style.marginLeft = "";
}
/* Conversor */
function convert(id) {
    let decimalInput = document.getElementById("decimal");
    let hexadecimalInput = document.getElementById("hexadecimal");
    let binaryInput = document.getElementById("binary");
  
    if (id === "decimal") {
      let decimal = parseInt(decimalInput.value);
      if (!isNaN(decimal)){
        hexadecimalInput.value = decimal.toString(16);
        binaryInput.value = decimal.toString(2);
        }else{
            hexadecimalInput.value = "";
            binaryInput.value = "";
        }
      } else if (id === "hexadecimal") {
        let decimal = parseInt(hexadecimalInput.value, 16);
        if (!isNaN(decimal)){
        decimalInput.value = decimal;
        binaryInput.value = decimal.toString(2);
    } else{
        decimalInput.value = "";
        binaryInput.value = "";
    }
      } else if (id === "binary") {
        let decimal = parseInt(binaryInput.value, 2);
        if (!isNaN(decimal)){
        decimalInput.value = decimal;
        hexadecimalInput.value = decimal.toString(16);
        } else{
            decimalInput.value = "";
            hexadecimalInput.value = "";
        }
        }
    }

/* Quiz */
const questions = [
    {
        question: "Qual é o valor posicional do dígito '5' no número 3.542?",
        answers: [
            {text: "a) Unidade", correct: false},
            {text: "b) Dezena", correct: false},
            {text: "c) Centena", correct: true},
            {text: "d) Milhar", correct: false},
            {text: "e) Milhão", correct: false}
        ]
    },
    {
        question: "Quanto é 3/4 em formato decimal?",
        answers: [
            {text: "a) 0.25", correct: false},
            {text: "b) 0.5", correct: false},
            {text: "c) 0.75", correct: true},
            {text: "d) 1.25", correct: false},
            {text: "e) 1.5", correct: false}
            
        ]
    },
    {
        question: "Quantos dígitos tem o número decimal '75.689'?",
        answers: [
            {text: "a) 5", correct: true},
            {text: "b) 4", correct: false},
            {text: "c) 3", correct: false},
            {text: "d) 2", correct: false},
            {text: "e) 6", correct: false}
            
        ]
    },
    {
        question: "Realizando a decomposição de um número, encontramos a soma 60000 + 200 + 10 + 1. Qual foi número decomposto?",
        answers: [
            {text: "a) 62.011", correct: false},
            {text: "b) 61.120", correct: false},
            {text: "c) 60.200", correct: false},
            {text: "d) 60.211", correct: true},
            {text: "e) 20.611", correct: false}
            
        ]
    },
    {
        question: "Sobre o número 123.456.789.201, podemos afirmar que:",
        answers: [
            {text: "a) 789 pertence à classe das unidades simples", correct: false},
            {text: "b) 123 pertence à classe das dezenas", correct: false},
            {text: "c) 456 pertence à classe dos milhões", correct: true},
            {text: "d) 201 pertence à classe dos milhares", correct: false},
            {text: "e) 789 pertence à classe dos milhões", correct: false}
            
        ]
    },
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-button');
const nextbutton = document.getElementById('nextbtn');

let currentQuestionIndex = 0;
let score = 0;

function startquiz(){
    /*let*/ currentQuestionIndex = 0;
    /*let*/ score = 0;
    nextbutton.innerHTML = "Próximo"
    showquestion();
}

function showquestion(){
    resetState();
    let currentquestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentquestion.question;

    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextbutton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextbutton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Sua pontuação foi ${score} de ${questions.length}`;
    nextbutton.innerHTML = "Jogar de novo";
    nextbutton.style.display = "block";
}

function handlenextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showquestion();
    } else {
        showScore();
    }
}

nextbutton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handlenextbutton();
    } else {
        startquiz();
    }
    
})

startquiz();


