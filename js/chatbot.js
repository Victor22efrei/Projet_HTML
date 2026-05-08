console.log("chatbot.js chargé");

/* ---------- CHATBOT ---------- */

const chatbotButton = document.querySelector("#chatbotButton");
const chatBox = document.querySelector("#chatBox");
const sendMessage = document.querySelector("#sendMessage");
const chatInput = document.querySelector("#chatInput");
const messages = document.querySelector("#messages");

if (chatbotButton && chatBox && sendMessage && chatInput && messages) {

    chatbotButton.addEventListener("click", function() {
        chatBox.classList.toggle("hidden");
    });

    sendMessage.addEventListener("click", function() {
        envoyerMessage();
    });

    chatInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            envoyerMessage();
        }
    });

}

function envoyerMessage() {
    const texte = chatInput.value.trim();

    if (texte === "") {
        return;
    }

    messages.innerHTML += `<p class="user-message">${texte}</p>`;

    let reponse = "Je n'ai pas compris. Essaie avec : cours, qcm, contact, calendrier ou accueil.";

    if (texte.toLowerCase().includes("cours")) {
        reponse = "Tu peux consulter les cours dans la page Cours & Formation.";
    } else if (texte.toLowerCase().includes("qcm") || texte.toLowerCase().includes("évaluation") || texte.toLowerCase().includes("evaluation")) {
        reponse = "Tu peux t'entraîner avec les QCM dans la page Évaluation.";
    } else if (texte.toLowerCase().includes("contact")) {
        reponse = "La page Contact permet d'envoyer un message aux référents.";
    } else if (texte.toLowerCase().includes("calendrier") || texte.toLowerCase().includes("progression")) {
        reponse = "Tu peux suivre ta progression dans la page Calendrier.";
    } else if (texte.toLowerCase().includes("accueil")) {
        reponse = "La page Accueil présente le site et ses fonctionnalités.";
    }

    messages.innerHTML += `<p class="bot-message">${reponse}</p>`;
    chatInput.value = "";
    messages.scrollTop = messages.scrollHeight;
}


/* ---------- BARRE DE RECHERCHE ---------- */

const searchInput = document.querySelector(".search-container input");

if (searchInput) {

    searchInput.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            const recherche = searchInput.value.toLowerCase().trim();

            if (recherche.includes("cours")) {
                window.location.href = "cours&formation.html";

            } else if (recherche.includes("qcm") || recherche.includes("evaluation") || recherche.includes("évaluation")) {
                window.location.href = "evaluation.html";

            } else if (recherche.includes("contact")) {
                window.location.href = "contact.html";

            } else if (recherche.includes("calendrier") || recherche.includes("progression")) {
                window.location.href = "calender.html";

            } else if (recherche.includes("accueil")) {
                window.location.href = "accueil.html";

            } else {
                alert("Aucun résultat trouvé.");
            }
        }
    });
}