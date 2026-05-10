// Affiche un message dans la console du navigateur
console.log("console");

// Tableau contenant les chemins des images du carrousel
let images = [
    "../img/efrei.jpeg",
    "../img/diplome.jpeg",
    "../img/image1.png"
];

// Variable servant à suivre l’image actuellement affichée
let i = 0;

// Fonction appelée pour changer l’image du carrousel
function changementImage() {

    // Passe à l’image suivante
    // Le modulo (%) permet de revenir à 0 à la fin du tableau
    i = (i + 1) % images.length;

    // Change la source de l’image affichée
    document.getElementById("photo").src = images[i];

    // Sélectionne tous les points indicateurs du carrousel
    let points = document.querySelectorAll(".point");

    // Retire la classe "active" de tous les points
    points.forEach(function(point) {
        point.classList.remove("active");
    });

    // Ajoute la classe "active" au point correspondant à l’image actuelle
    points[i].classList.add("active");
}