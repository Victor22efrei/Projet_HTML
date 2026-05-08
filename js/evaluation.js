console.log("Evaluation.js chargé");


const reponses = {
    q1: "A",
    q2: "A",
    q3: "A",
    q4: "B",
    q5: "B",
    q6: "C",
    q7: "B",
    q8: "A",
    q9: "B",
    q10: "C",
    j1: "B",
    j2: "B",
    j3: "A",
    j4: "A",
    j5: "B",
    j6: "B",
    j7: "B",
    j8: "A",
    j9: "A",
    j10: "B",
    b1: "B",
    b2: "A",
    b3: "A",
    b4: "A",
    b5: "A",
    b6: "A",
    b7: "A",
    b8: "A",
    b9: "A",
    b10: "A"
};
const startBtn = document.querySelectorAll(".start-btn");

startBtn.forEach(function(button) {
    button.addEventListener("click", function() {
        const qcm = button.closest(".qcm");
        const form = qcm.querySelector(".questions");
        form.classList.remove("hidden");
    });
});



startBtn.forEach(function(button) {
    button.addEventListener("click", function() {
    let temps = 2 *60;
    const interval = setInterval(function() {
    const minutes = Math.floor(temps / 60);
    const secondes = temps % 60;
    const qcm = button.closest(".qcm");
    const timerSpan = qcm.querySelector(".timer span");
    timerSpan.textContent = `${minutes}:${secondes < 10 ? '0' : ''}${secondes}`;
    if (temps === 0) {
        temps--;
        clearInterval(interval);
        alert("Temps écoulé !");
    }
    temps--;
    }, 1000);
    });
});

const forms = document.querySelectorAll(".questions");

forms.forEach(function(form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let score = 0;
        for (let question in reponses) {
        const reponse = form.querySelector(`input[name="${question}"]:checked`);
        if (reponse && reponse.value === reponses[question]) {
            score++;
        }
    }

    const scoreElement = form.querySelector(".score");
    scoreElement.textContent = "Votre score est : " + score + "/10";
    });
});