// Sélectionne l’élément HTML qui contiendra les jours du calendrier
const calendarDays = document.getElementById('calendarDays');

// Fonction principale qui affiche le calendrier
function renderCalendar() {

    // Vide le calendrier avant de le reconstruire
    calendarDays.innerHTML = "";

    // 1. Création de la colonne des heures (00h à 23h)
    const hourColumn = document.createElement('div');

    // Crée une ligne pour chaque heure de la journée
    for (let i = 0; i < 24; i++) {
        const hour = document.createElement('div');
        hour.classList.add('hour-marker');
        hour.textContent = i + ":00";
        hourColumn.appendChild(hour);
    }

    // Ajoute la colonne des heures au calendrier
    calendarDays.appendChild(hourColumn);

    // 2. Récupération des données stockées dans le LocalStorage
    const rendezVous = JSON.parse(localStorage.getItem('mesDemandes')) || [];
    const evaluations = JSON.parse(localStorage.getItem('mesEvaluations')) || [];

    // 3. Dates de la semaine affichée
    const datesSemaine = [
        "2026-04-27", "2026-04-28", "2026-04-29", "2026-04-30", 
        "2026-05-01", "2026-05-02", "2026-05-03"
    ];

    // Parcourt chaque jour de la semaine
    datesSemaine.forEach(dateStr => {

        // Crée une colonne pour le jour
        const dayCol = document.createElement('div');
        dayCol.classList.add('day-column');

        // Ajoute les lignes de fond de la grille horaire
        for(let i = 0; i < 24; i++) {
            const slot = document.createElement('div');
            slot.style.height = "60px";
            slot.style.borderBottom = "1px solid #f5f5f5";
            dayCol.appendChild(slot);
        }

        // Place les rendez-vous venant de la page contact
        rendezVous.forEach(rdv => {
            if (rdv.date === dateStr) {
                dayCol.appendChild(createEventElement(rdv.heure, `RDV: ${rdv.professeur}`, 'event-rdv', rdv.statut));
            }
        });

        // Place les évaluations dans le calendrier
        evaluations.forEach(ev => {
            if (ev.date === dateStr) {
                dayCol.appendChild(createEventElement(ev.heure, `QCM: ${ev.titre}`, 'event-eval'));
            }
        });

        // Ajoute la colonne du jour au calendrier
        calendarDays.appendChild(dayCol);
    });
}

// Fonction qui crée visuellement un événement dans le calendrier
function createEventElement(heureStr, titre, typeClasse, statut = "") {

    // Crée l’élément HTML de l’événement
    const el = document.createElement('div');

    // Ajoute les classes CSS de l’événement
    el.classList.add('event-badge', typeClasse);
    
    // Sépare l’heure et les minutes
    const [h, m] = heureStr.split(':').map(Number);

    // Calcule la position verticale de l’événement
    const topPosition = (h * 60) + m;
    
    // Place l’événement dans la colonne
    el.style.top = topPosition + "px";

    // Définit une hauteur fixe pour l’événement
    el.style.height = "50px";

    // Affiche l’heure, le titre et éventuellement le statut
    el.innerHTML = `<strong>${heureStr}</strong><br>${titre} ${statut ? '<br><i>' + statut + '</i>' : ''}`;
    
    // Retourne l’événement créé
    return el;
}

// Lance l’affichage du calendrier quand la page HTML est chargée
document.addEventListener('DOMContentLoaded', renderCalendar);