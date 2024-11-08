// Variabili per il mese e l'anno correnti
    let date = new Date();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();

    const months = [
        "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
        "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
    ];

    const monthEl = document.querySelector(".month .date");
    const daysEl = document.querySelector(".days");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const eventDayEl = document.querySelector(".event-day");

    function renderCalendar() {
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
        const prevLastDate = new Date(currentYear, currentMonth, 0).getDate();


        // Impostazione del nome del mese e dell'anno
        monthEl.textContent = `${months[currentMonth]} ${currentYear}`;

        daysEl.innerHTML = "";


        // Giorni del mese precedente
        for (let x = firstDay; x > 0; x--) {
            const day = document.createElement("div");
            day.classList.add("day", "prev-date");
            day.textContent = prevLastDate - x + 1;
            daysEl.appendChild(day);
        }

        // Giorni del mese corrente
        for (let i = 1; i <= lastDate; i++) {
            const day = document.createElement("div");
            day.classList.add("day");

            if (i === date.getDate() && currentMonth === date.getMonth() && currentYear === date.getFullYear()) {
                day.classList.add("today");
            }
            day.textContent = i;

            day.addEventListener("click", () => {
                // Rimuove l'evidenziazione "today" da tutti i giorni
                document.querySelectorAll(".day").forEach(day => day.classList.remove("today"));
                // Aggiunge l'evidenziazione al giorno selezionato
                day.classList.add("today");
                // Cattura il giorno, mese e anno selezionati
                const selectedDate = new Date(currentYear, currentMonth, i);
                const dayValue = selectedDate.getDate();
                const monthValue = selectedDate.getMonth() + 1;
                const yearValue = selectedDate.getFullYear();

                // Aggiorna il form nascosto con i valori selezionati
                document.getElementById("selectedDay").value = dayValue;
                document.getElementById("selectedMonth").value = monthValue;
                document.getElementById("selectedYear").value = yearValue;
                // Invia automaticamente il form
                document.getElementById("dateForm").submit();


            });
            daysEl.appendChild(day);
        }

        // Giorni del mese successivo per completare la riga
        const totalDays = firstDay + lastDate;
        const nextDays = totalDays <= 35 ? 35 - totalDays : 42 - totalDays;
        for (let j = 1; j <= nextDays; j++) {
            const day = document.createElement("div");
            day.classList.add("day", "next-date");
            day.textContent = j;
            daysEl.appendChild(day);
        }
    }

    // Navigazione tra i mesi
    prevBtn.addEventListener("click", () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
    });

    nextBtn.addEventListener("click", () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    });

    renderCalendar(); // Inizializzazione


//FUNZIONAMENTO BARRA DI RICERCA:
// Elementi della barra di ricerca
const gotoInput = document.querySelector(".date-input");
const gotoBtn = document.querySelector(".goto-btn");

// Evento per il pulsante di ricerca
gotoBtn.addEventListener("click", () => {
    const dateArr = gotoInput.value.split("/");

    // Controllo del formato MM/GG/YYYY
    if (dateArr.length === 3) {
        const day = parseInt(dateArr[0]);
        const month = parseInt(dateArr[1]) - 1;
        const year = parseInt(dateArr[2]);

        // Controllo validità del giorno, mese e anno
        if (
            day >= 1 && day <= 31 &&
            month >= 0 && month <= 11 &&
            year >= 1970 && year <= 2100
        ) {
            currentMonth = month;
            currentYear = year;
            renderCalendar();  // Aggiorna il calendario al mese e anno scelto

            // Seleziona e evidenzia il giorno specifico
            const dayElements = document.querySelectorAll(".day");
            let selectedDayFound = false;

            dayElements.forEach(dayElement => {
                dayElement.classList.remove("today");  // Rimuove l'evidenziazione dal "today" corrente
                if (!selectedDayFound && dayElement.textContent == day) {
                    dayElement.classList.add("today");  // Aggiunge l'evidenziazione al giorno selezionato
                    selectedDayFound = true;
                }
            });
            gotoInput.value = "";
        } else {
            alert("Inserisci una data valida nel formato GG/MM/AAAA.");
        }
    } else {
        alert("Usa il formato GG/MM/AAAA.");
    }
});

//GESTIONE CODICE PER IL PULSANTE OGGI:
const todayBtn = document.querySelector(".today-btn");

todayBtn.addEventListener("click", () => {
    // Ottieni la data odierna reale
    const today = new Date();
    currentMonth = today.getMonth(); // Imposta il mese corrente
    currentYear = today.getFullYear(); // Imposta l'anno corrente

    // Aggiorna il calendario al mese e anno odierno
    renderCalendar();

    // Evidenzia il giorno attuale nel calendario
    const dayElements = document.querySelectorAll(".day");
    dayElements.forEach(dayElement => {
        dayElement.classList.remove("today"); // Rimuove l'eventuale evidenziazione "today" esistente
        if (dayElement.textContent == today.getDate()) {
            dayElement.classList.add("today"); // Aggiunge l'evidenziazione al giorno attuale
        }
    });
});
