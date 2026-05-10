// Sélectionne le lien ou bouton de déconnexion
let deconnection = document.querySelector('.déconnexion');

// Ajoute un événement lors du clic sur le bouton de déconnexion
deconnection.addEventListener('click', function déconnection(event) {

    // Affiche une fenêtre de confirmation
    let reponse = confirm("Etes vous sûr de vouloir vous déconnecter ?");

    // Si l’utilisateur clique sur "Annuler"
    if (!reponse) {

        // Empêche la redirection vers la page de déconnexion
        event.preventDefault();
    }
});