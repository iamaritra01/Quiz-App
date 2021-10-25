const questions = [
    {
      question: 'What is the full form of JS?',
       a: "javascript",
       b: "Javasuper",
       c: "justsuper",
       d: "jordershoes",
       ans: "ans1"
    },

    {
      question: 'What is the full form of HTML?',
       a: "javascript",
       b: "Javasuper",
       c: "justsuper",
       d: "Hyper Text Markup Language",
       ans: "ans4"
    },
    {
        question: 'What is the full form of CSS?',
        a: "javascript",
        b: "Javasuper",
        c: "Cascading Style Sheet",
        d: "jordershoes",
        ans: "ans3"
    },
    {
        question: 'What is the full form of JSON?',
        a: "javascript",
        b: "JavaScipt Object Notation",
        c: "justsuper",
        d: "jordershoes",
        ans: "ans2"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answers');

let questionCount = 0;
let score = 0;
function loadQuestion(){
    const questionList = questions[questionCount];
    question.innerHTML = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem)=>{
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
            // console.log(answer);
        }  
    });
    return answer;
}
const showScore = document.querySelector('#showscore');

const deselectAll = () => {
    answers.forEach((curAnsElem)=>{
        curAnsElem.checked = false;
    });
}
submit.addEventListener('click',()=>{
 
    const checkedAnswer = getCheckAnswer();
    // console.log(checkedAnswer);
    if(checkedAnswer === questions[questionCount].ans)
    {
        score++;
        console.log(score);
    }
    questionCount++;

    deselectAll();
    // console.log(questions.length);
    if (questionCount < questions.length) {
        loadQuestion();
    }else{
        showScore.innerHTML = `<h3>Your Score is ${score}/${questions.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>`;


        showScore.classList.remove('scoreArea');
    }
});