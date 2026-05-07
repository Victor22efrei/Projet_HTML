const calendarDays = document.getElementById('calendarDays');

function renderCalendar() {
    calendarDays.innerHTML = "";

    // 1. Création de la colonne des heures (00h à 23h)
    const hourColumn = document.createElement('div');
    for (let i = 0; i < 24; i++) {
        const hour = document.createElement('div');
        hour.classList.add('hour-marker');
        hour.textContent = i + ":00";
        hourColumn.appendChild(hour);
    }
    calendarDays.appendChild(hourColumn);

    // 2. Récupération des données (LocalStorage)
    const rendezVous = JSON.parse(localStorage.getItem('mesDemandes')) || [];
    const evaluations = JSON.parse(localStorage.getItem('mesEvaluations')) || [];

    // 3. Dates de la semaine (Exemple fixe pour correspondre à ta photo Avril 2026)
    const datesSemaine = [
        "2026-04-27", "2026-04-28", "2026-04-29", "2026-04-30", 
        "2026-05-01", "2026-05-02", "2026-05-03"
    ];

    datesSemaine.forEach(dateStr => {
        const dayCol = document.createElement('div');
        dayCol.classList.add('day-column');

        // On ajoute des lignes de fond pour la grille
        for(let i=0; i<24; i++) {
            const slot = document.createElement('div');
            slot.style.height = "60px";
            slot.style.borderBottom = "1px solid #f5f5f5";
            dayCol.appendChild(slot);
        }

        // --- PLACER LES RDV (CONTACT) ---
        rendezVous.forEach(rdv => {
            if (rdv.date === dateStr) {
                dayCol.appendChild(createEventElement(rdv.heure, `RDV: ${rdv.professeur}`, 'event-rdv', rdv.statut));
            }
        });

        // --- PLACER LES EVALUATIONS ---
        evaluations.forEach(ev => {
            if (ev.date === dateStr) {
                dayCol.appendChild(createEventElement(ev.heure, `QCM: ${ev.titre}`, 'event-eval'));
            }
        });

        calendarDays.appendChild(dayCol);
    });
}

function createEventElement(heureStr, titre, typeClasse, statut = "") {
    const el = document.createElement('div');
    el.classList.add('event-badge', typeClasse);
    
    // Calcul de la position : heure * 60px
    const [h, m] = heureStr.split(':').map(Number);
    const topPosition = (h * 60) + m;
    
    el.style.top = topPosition + "px";
    el.style.height = "50px"; // Durée fixe
    el.innerHTML = `<strong>${heureStr}</strong><br>${titre} ${statut ? '<br><i>' + statut + '</i>' : ''}`;
    
    return el;
}

document.addEventListener('DOMContentLoaded', renderCalendar);