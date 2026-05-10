// Affiche un message dans la console pour vérifier que le fichier JS fonctionne
console.log("console test");

// Sélectionne le bouton ayant la classe "message"
let mail = document.querySelector('.message');

// Vérifie dans la console que le bouton a bien été récupéré
console.log("mail");

// Ajoute un événement au clic sur le bouton
mail.addEventListener('click', function(event) {

    // Empêche le comportement par défaut du bouton (envoi automatique du formulaire)
    event.preventDefault();

    // Affiche une fenêtre de confirmation
    let affichage = confirm("Voulez-vous envoyer ce message ?");

    // Si l’utilisateur clique sur "OK"
    if (affichage) {

        // Affiche un message de confirmation
        alert("Message envoyé !");
    }

    // Si l’utilisateur clique sur "Annuler"
    else {

        // Affiche un message d’annulation
        alert("Message non envoyé !");
    }
});