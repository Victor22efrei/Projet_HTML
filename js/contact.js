console.log("console test");

 
let mail = document.querySelector('.message');
console.log("mail");
mail.addEventListener('click', function(event) {
    event.preventDefault();
    let affichage = confirm("Voulez-vous envoyer ce message ?");
    if (affichage) {
        alert("Message envoyé !");
    }
    else {
        alert("Message non envoyé !");
    }
}); 