console.log("console");

function verificationMail() {

    let mail = document.getElementById("Id-connexion").value;

    if (!mail.endsWith("@efrei.net")) {

        alert("Mail invalide");
        return false;
    }

    return true;
}

