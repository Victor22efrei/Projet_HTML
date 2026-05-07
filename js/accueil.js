console.log("console");



let images = [
    "../img/efrei.jpeg",
    ".../img/diplome.jpeg",
    "../img/image1.png"
];

let i = 0;

function changementImage() {

    i = (i + 1) % images.length;

    document.getElementById("photo").src = images[i];
}


