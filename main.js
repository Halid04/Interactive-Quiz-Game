const quiz=[
    {
        question: "Quale impero romano fu fondato da Giulio Cesare e Ottaviano?",
        answers:{
                    a: "Impero Romano d'Occidente",
                    b: "Impero Romano d'Oriente",
                    c: "Repubblica Romana",
                    d: "Impero Cesare"
        },
        correct: "Impero Romano d'Occidente"
    },
    {
        question: "Quale fiume attraversa la città di Londra, Inghilterra?",
        answers:{
                    a: "Tamigi",
                    b: "Nilo",
                    c: "Danubio",
                    d: "Volga"
        },
        correct: "Tamigi"
    },
    {
        question: "Quale scoperta di Galileo Galilei ha confutato la teoria aristotelica della Terra come centro dell'universo?",
        answers:{
                    a: "La teoria della relatività generale",
                    b: "La legge di gravitazione universale",
                    c: "La scoperta dei quattro satelliti di Giove",
                    d: "La scoperta delle macchie solari"
        },
        correct: "La scoperta dei quattro satelliti di Giove"
    },
    {
        question: "Quale sport è stato introdotto per la prima volta alle Olimpiadi Antiche?",
        answers:{
                    a: "Giochi pugilistici",
                    b: "Giochi atletici",
                    c: "Giochi equestri",
                    d: "Giochi di lotta"
        },
        correct: "Giochi atletici"
    },
    {
        question: "Quale sport ha avuto origine negli Stati Uniti negli anni 1800?",
        answers:{
                    a: "Baseball",
                    b: "Hockey su ghiaccio",
                    c: "Football americano",
                    d: "Basket"
        },
        correct: "Football americano"
    },
    {
        question: "Quale deserto si estende tra Algeria, Libia e Egitto?",
        answers:{
                    a: "deserto di Atacama",
                    b: "deserto del Kalahari",
                    c: "deserto del Sahara",
                    d: "deserto di Gobi"
        },
        correct: "deserto del Sahara"
    },
    {
        question: "Quale sport è stato creato dall'educatore svizzero Jahn nel XIX secolo?",
        answers:{
                    a: "Ginnastica",
                    b: "Nuoto",
                    c: "Atletica leggera",
                    d: "Calcio"
        },
        correct: "Ginnastica"
    },
    {
        question: "Quale re d'Inghilterra fu esiliato dal trono nel 1066 dall'invasione normanna?",
        answers:{
                    a: "Enrico V",
                    b: "Enrico IV",
                    c: "Enrico VI",
                    d: "Haroldo II"
        },
        correct: "Haroldo II"
    },
    {
        question: "Quale fiume è considerato il \"padre dei fiumi\" perché fornisce acqua a diversi paesi europei?",
        answers:{
                    a: "Danubio",
                    b: "Reno",
                    c: "Volga",
                    d: "Rijn"
        },
        correct: "Danubio"
    },
    {
        question: "Quale teoria scientifica spiega come la vita sulla Terra si è evoluta nel corso di milioni di anni?",
        answers:{
                    a: "La teoria della relatività generale",
                    b: "La teoria della germinazione",
                    c: "La teoria dell'evoluzione",
                    d: "La teoria dei microrganismi"
        },
        correct: "La teoria dell'evoluzione"
    },
    {
        question: "Quale leader sovietico ha guidato l'Unione Sovietica per oltre trent'anni?",
        answers:{
                    a: "Josef Stalin",
                    b: "Vladimir Lenin",
                    c: "Nikita Khrushchev",
                    d: "Leon Trotsky"
        },
        correct: "Josef Stalin"
    },
    {
        question: "Quale è la più grande penisola del mondo?",
        answers:{
                    a: "Arabia",
                    b: "Iberica",
                    c: "Scandinava",
                    d: "Kamčatka"
        },
        correct: "Arabia"
    },
    {
        question: "Quale scoperta del fisico danese Niels Bohr ha aiutato a comprendere la struttura degli atomi?",
        answers:{
                    a: "La scoperta della relatività ristretta",
                    b: "La scoperta della germinazione",
                    c: "La scoperta della meccanica quantistica",
                    d: "La scoperta del modello atomico di Bohr"
        },
        correct: "La scoperta del modello atomico di Bohr"
    },
    {
        question: "Quale sport è stato introdotto nelle Olimpiadi nel 1996?",
        answers:{
                    a: "Beach Volley",
                    b: "Tiro con l'arco",
                    c: "Triathlon",
                    d: "Skateboard"
        },
        correct: "Triathlon"
    },
    {
        question: "Quale evento ha segnato l'inizio della Prima Guerra Mondiale?",
        answers:{
                    a: "Assassinio dell'arciduca austriaco Franz Ferdinand",
                    b: "Invasione della Polonia da parte della Germania",
                    c: "Invasione della Norvegia da parte della Germania",
                    d: "Invasione della Jugoslavia da parte della Germania"
        },
        correct: "Assassinio dell'arciduca austriaco Franz Ferdinand"
    }
]


let startButton = document.querySelector(".startQuiz");
let homePage = document.querySelector(".firstContainer");
let quizPage = document.querySelector(".secondContainer");
let answerPage = document.querySelector(".thirdContainer");
let quizContainer = document.querySelector(".quizContainer");
let answersLabel = document.querySelectorAll(".answers");
let inputChecked = document.querySelectorAll("input[type=radio]");
let homeButton = document.querySelector(".homeButton");
let submit = document.getElementById("submit");
let i=0;
let j=0
let score = 0;
const userAnswers = []



quizPage.classList.remove("secondContainer");
quizPage.classList.add("hidden");

homeButton.classList.remove("homeButton");
homeButton.classList.add("hidden");

answerPage.classList.remove("thirdContainer");
answerPage.classList.add("hidden");



startButton.addEventListener("click", ()=>{
    homePage.classList.remove("firstContainer");
    homePage.classList.add("hidden");

    quizPage.classList.add("secondContainer");
    quizPage.classList.remove("hidden");

    homeButton.classList.add("homeButton");
    homeButton.classList.remove("hidden");

    
    i=0;
    j=0;
    
    quizContainer.innerHTML = quiz[0].question;
    answersLabel[0].innerHTML = quiz[0].answers.a;
    answersLabel[1].innerHTML = quiz[0].answers.b;
    answersLabel[2].innerHTML = quiz[0].answers.c;
    answersLabel[3].innerHTML = quiz[0].answers.d;

    answerPage.innerHTML = "";
    score=0;
    userAnswers.length = 0;
    inputChecked.forEach(input=>{
        input.checked=false;
    });

    
})

quizContainer.innerHTML = quiz[0].question;

answersLabel[0].innerHTML = quiz[0].answers.a;
answersLabel[1].innerHTML = quiz[0].answers.b;
answersLabel[2].innerHTML = quiz[0].answers.c;
answersLabel[3].innerHTML = quiz[0].answers.d;

submit.addEventListener("click", ()=>{

    
    let checkAnswer = false;

    for(let k=0; k<inputChecked.length; k++){
        if(inputChecked[k].checked == true){
            checkAnswer = true;
            i++;
            j++;
        }
    }


    console.log(i,j);
    if(i == quiz.length){

        for(let k=0; k<userAnswers.length; k++){
            if(userAnswers[k] === quiz[k].correct){
                score++;
            }
        }

        console.log("punti fatti: "+score);

        quizPage.classList.remove("secondContainer");
        quizPage.classList.add("hidden");

        answerPage.classList.add("thirdContainer");
        answerPage.classList.remove("hidden");
        
        for(let j=0; j<userAnswers.length; j++){

            let correctionContainer = document.createElement("div");
            correctionContainer.classList.add("correctionContainer");
            answerPage.append(correctionContainer);

            let questionQuiz = document.createElement("p");
            questionQuiz.innerHTML = "Question "+(j+1)+": "+quiz[j].question;
            correctionContainer.append(questionQuiz);

            let yourAnswer = document.createElement("p");
            yourAnswer.innerHTML = "Your answer: "+userAnswers[j];
            correctionContainer.append(yourAnswer);

            let correctAnswer = document.createElement("p");
            correctAnswer.innerHTML = "Correct answer: "+quiz[j].correct;
            correctionContainer.append(correctAnswer);

        }

        let userScore = document.createElement("div");
        userScore.classList.add("score");
        userScore.innerHTML = "TOTAL SCORE: "+score;
        answerPage.append(userScore);
    }
    else if(!checkAnswer){

        alert("you have to choose an answer")

    }
    else{
        quizContainer.innerHTML = quiz[i].question; 
        answersLabel[0].innerHTML = quiz[i].answers.a;
        answersLabel[1].innerHTML = quiz[i].answers.b;
        answersLabel[2].innerHTML = quiz[i].answers.c;
        answersLabel[3].innerHTML = quiz[i].answers.d;
        
    }

    for(let j=0; j<inputChecked.length; j++){
        inputChecked[j].checked = false;
    }
})

homeButton.addEventListener("click", ()=>{
    

    homePage.classList.add("firstContainer");
    homePage.classList.remove("hidden");

    quizPage.classList.remove("secondContainer");
    quizPage.classList.add("hidden");

    homeButton.classList.remove("homeButton");
    homeButton.classList.add("hidden");

    answerPage.classList.remove("thirdContainer");
    answerPage.classList.add("hidden");

    
})



for(let i=0; i<inputChecked.length; i++){
    inputChecked[i].addEventListener("click", ()=>{
        if(inputChecked[i].checked == true){
            userAnswers[j] = answersLabel[i].innerHTML;
        }        
    })
}
