// Affiche un message dans la console pour vérifier que le fichier est bien chargé
console.log("Evaluation.js chargé");

// Objet contenant toutes les bonnes réponses des QCM
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

// Sélectionne tous les boutons "Start"
const startBtn = document.querySelectorAll(".start-btn");

// Parcourt chaque bouton Start
startBtn.forEach(function(button) {

    // Ajoute un événement au clic sur chaque bouton
    button.addEventListener("click", function() {

        // Récupère le QCM correspondant au bouton cliqué
        const qcm = button.closest(".qcm");

        // Récupère le formulaire de questions du QCM
        const form = qcm.querySelector(".questions");

        // Récupère la zone d’affichage du score
        const scoreElement = qcm.querySelector(".score");

        // Réinitialise les réponses du formulaire
        form.reset();

        // Vide l’ancien score
        scoreElement.textContent = "";

        // Affiche le formulaire
        form.classList.remove("hidden");

        // Empêche de relancer le même QCM s’il est déjà démarré
        if (qcm.dataset.started === "true") {
            return;
        }

        // Indique que le QCM est démarré
        qcm.dataset.started = "true";

        // Définit le temps du QCM à 2 minutes
        let temps = 2 * 60;

        // Sélectionne l’affichage du minuteur
        const timerSpan = qcm.querySelector(".timer span");

        // Affiche le temps initial
        timerSpan.textContent = "2:00";

        // Lance le compte à rebours
        const interval = setInterval(function() {

            // Calcule les minutes restantes
            const minutes = Math.floor(temps / 60);

            // Calcule les secondes restantes
            const secondes = temps % 60;

            // Met à jour l’affichage du timer
            timerSpan.textContent =
                `${minutes}:${secondes < 10 ? '0' : ''}${secondes}`;

            // Si le temps est écoulé
            if (temps <= 0) {

                // Arrête le compte à rebours
                clearInterval(interval);

                // Préviens l’utilisateur
                alert("Temps écoulé !");

                // Cache le formulaire
                form.classList.add("hidden");

                // Réinitialise les réponses
                form.reset();

                // Indique que le QCM n’est plus démarré
                qcm.dataset.started = "false";
            }

            // Diminue le temps d’une seconde
            temps--;

        }, 1000);

        // Stocke l’intervalle dans le QCM pour pouvoir l’arrêter plus tard
        qcm.interval = interval;
    });
});

// Sélectionne tous les formulaires de questions
const forms = document.querySelectorAll(".questions");

// Parcourt chaque formulaire de QCM
forms.forEach(function(form) {

    // Ajoute un événement lors de l’envoi du formulaire
    form.addEventListener("submit", function(event) {

        // Empêche le rechargement de la page
        event.preventDefault();

        // Récupère le QCM correspondant au formulaire envoyé
        const qcm = form.closest(".qcm");

        // Arrête le minuteur du QCM
        clearInterval(qcm.interval);

        // Initialise le score à 0
        let score = 0;

        // Parcourt toutes les bonnes réponses
        for (let question in reponses) {

            // Récupère la réponse cochée pour la question actuelle
            const reponse =
                form.querySelector(`input[name="${question}"]:checked`);

            // Si la réponse cochée correspond à la bonne réponse
            if (reponse && reponse.value === reponses[question]) {

                // Ajoute un point au score
                score++;
            }
        }

        // Récupère la zone d’affichage du score
        const scoreElement = qcm.querySelector(".score");

        // Affiche le score final
        scoreElement.textContent =
            "Votre score est : " + score + "/10";

        // Cache le formulaire après l’envoi
        form.classList.add("hidden");

        // Indique que le QCM est terminé
        qcm.dataset.started = "false";
    });
});