let deconnection = document.querySelector('.déconnexion');
deconnection.addEventListener('click', function déconnection(event) {
    let reponse =confirm("Etes vous sûr de vouloir vous déconnecter ?");
    if (!reponse) {
        event.preventDefault();
    }
});