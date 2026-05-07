console.log("console");



let images = [
    "../img/efrei.jpeg",
    "../img/diplome.jpeg",
    "../img/image1.png"
];

let i = 0;

function changementImage() {

    i = (i + 1) % images.length;

    document.getElementById("photo").src = images[i];

    let points = document.querySelectorAll(".point");

    points.forEach(function(point) {
        point.classList.remove("active");
    });

    points[i].classList.add("active");
}


