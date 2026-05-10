// Indique dans la console que le fichier chatbot.js est bien chargé
console.log("chatbot.js chargé");

/* ---------- CHATBOT ---------- */

// Sélection du bouton qui ouvre ou ferme le chatbot
const chatbotButton = document.querySelector("#chatbotButton");

// Sélection de la fenêtre du chatbot
const chatBox = document.querySelector("#chatBox");

// Sélection du bouton d’envoi du message
const sendMessage = document.querySelector("#sendMessage");

// Sélection du champ de saisie du chatbot
const chatInput = document.querySelector("#chatInput");

// Sélection de la zone où les messages sont affichés
const messages = document.querySelector("#messages");

// Vérifie que tous les éléments du chatbot existent bien sur la page
if (chatbotButton && chatBox && sendMessage && chatInput && messages) {

    // Ouvre ou ferme le chatbot quand on clique sur le bouton
    chatbotButton.addEventListener("click", function() {
        chatBox.classList.toggle("hidden");
    });

    // Envoie le message quand on clique sur le bouton d’envoi
    sendMessage.addEventListener("click", function() {
        envoyerMessage();
    });

    // Envoie le message quand on appuie sur la touche Entrée
    chatInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            envoyerMessage();
        }
    });

}

// Fonction qui gère l’envoi d’un message dans le chatbot
function envoyerMessage() {

    // Récupère le texte écrit par l’utilisateur et enlève les espaces inutiles
    const texte = chatInput.value.trim();

    // Si le champ est vide, on arrête la fonction
    if (texte === "") {
        return;
    }

    // Ajoute le message de l’utilisateur dans la zone des messages
    messages.innerHTML += `<p class="user-message">${texte}</p>`;

    // Réponse par défaut si aucun mot-clé n’est reconnu
    let reponse = "Je n'ai pas compris. Essaie avec : cours, qcm, contact, calendrier ou accueil.";

    // Réponse si l’utilisateur parle des cours
    if (texte.toLowerCase().includes("cours")) {
        reponse = "Tu peux consulter les cours dans la page Cours & Formation.";

    // Réponse si l’utilisateur parle des QCM ou de l’évaluation
    } else if (texte.toLowerCase().includes("qcm") || texte.toLowerCase().includes("évaluation") || texte.toLowerCase().includes("evaluation")) {
        reponse = "Tu peux t'entraîner avec les QCM dans la page Évaluation.";

    // Réponse si l’utilisateur parle du contact
    } else if (texte.toLowerCase().includes("contact")) {
        reponse = "La page Contact permet d'envoyer un message aux référents.";

    // Réponse si l’utilisateur parle du calendrier ou de la progression
    } else if (texte.toLowerCase().includes("calendrier") || texte.toLowerCase().includes("progression")) {
        reponse = "Tu peux suivre ta progression dans la page Calendrier.";

    // Réponse si l’utilisateur parle de l’accueil
    } else if (texte.toLowerCase().includes("accueil")) {
        reponse = "La page Accueil présente le site et ses fonctionnalités.";
    }

    // Ajoute la réponse du bot dans la zone des messages
    messages.innerHTML += `<p class="bot-message">${reponse}</p>`;

    // Vide le champ de saisie après l’envoi
    chatInput.value = "";

    // Fait défiler automatiquement vers le dernier message
    messages.scrollTop = messages.scrollHeight;
}


/* ---------- BARRE DE RECHERCHE ---------- */

// Sélection de la barre de recherche présente dans le header
const searchInput = document.querySelector(".search-container input");

// Vérifie que la barre de recherche existe sur la page
if (searchInput) {

    // Détecte quand l’utilisateur appuie sur une touche dans la barre de recherche
    searchInput.addEventListener("keydown", function(event) {

        // Lance la recherche uniquement si la touche appuyée est Entrée
        if (event.key === "Enter") {

            // Récupère la recherche en minuscules et enlève les espaces inutiles
            const recherche = searchInput.value.toLowerCase().trim();

            // Redirection vers la page des cours
            if (recherche.includes("cours")) {
                window.location.href = "cours&formation.html";

            // Redirection vers la page d’évaluation
            } else if (recherche.includes("qcm") || recherche.includes("evaluation") || recherche.includes("évaluation")) {
                window.location.href = "evaluation.html";

            // Redirection vers la page contact
            } else if (recherche.includes("contact")) {
                window.location.href = "contact.html";

            // Redirection vers la page calendrier
            } else if (recherche.includes("calendrier") || recherche.includes("progression")) {
                window.location.href = "calender.html";

            // Redirection vers la page accueil
            } else if (recherche.includes("accueil")) {
                window.location.href = "accueil.html";

            // Message affiché si aucune recherche ne correspond
            } else {
                alert("Aucun résultat trouvé.");
            }
        }
    });
}