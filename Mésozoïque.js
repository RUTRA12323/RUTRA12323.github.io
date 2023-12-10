const cursor=document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX)+"px;")
    


})


document.addEventListener('click', ()=>{
    cursor.classList.add('expand');

    setTimeout(()=>{
        cursor.classList.remove("expand");
    },500);
})
const imageContainer = document.getElementById("image-container");

function scrollImages() {
  const scrollAmount = 1;
  imageContainer.scrollLeft += scrollAmount;
}


setInterval(scrollImages, 2000);
const questions = [
    {
        question: "Combien de temps dure le Mésozoïque?",
        options: ["250 Millions d'années", "180 Millions d'années", "185 Millions d'années", "187 Millions d'années"],
        correctAnswer: "185 Millions d'années"
    },
    {
        question: "Le Permien est une ère du Mésozoïque?",
        options: ["Vrai", "Faux"],
        correctAnswer: "Faux"
    },
    {
        question: "Cités 4 animaux qui y vivaient.",
        options: ["Mamifères", "araignées et scorpions","Brachiosaure, Diplodocus, Archosaures, Tyrannosaure rex", "Diplodocus, Mogévarant"],
        correctAnswer:  "Brachiosaure, Diplodocus, Archosaures, Tyrannosaure rex"
    }
    
];


function generateQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        q.options.forEach((opt, optIndex) => {
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = opt;
            questionDiv.appendChild(optionInput);
            questionDiv.innerHTML += `<label>${opt}</label><br>`;
        });
        quizContainer.appendChild(questionDiv);
    });
}


function submitQuiz() {
    const resultContainer = document.getElementById('result');
    let score = 0;

    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            if (selectedOption.value === q.correctAnswer) {
                score++;
            }
        }
    });

    resultContainer.innerHTML = `Votre score : ${score} / ${questions.length}`;
}


window.onload = generateQuiz;


document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    function scrollToTop() {
        var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentPosition > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentPosition - currentPosition / 8);
        }
    }

    scrollToTopBtn.addEventListener("click", scrollToTop);
});

function redirectToHome() {
   
    window.location.href = "CHR.html";
}