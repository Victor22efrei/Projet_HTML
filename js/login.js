// Affiche un message dans la console pour vérifier que le fichier fonctionne
console.log("console");

// Fonction appelée lors de la validation du formulaire
function verificationMail() {

    // Récupère la valeur saisie dans le champ identifiant
    let mail = document.getElementById("Id-connexion").value;

    // Vérifie si l’adresse mail se termine par "@efrei.net"
    if (!mail.endsWith("@efrei.net")) {

        // Affiche un message d’erreur si le mail est invalide
        alert("Mail invalide");

        // Empêche l’envoi du formulaire
        return false;
    }

    // Autorise l’envoi du formulaire si le mail est valide
    return true;
}