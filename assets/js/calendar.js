require('../scss/calendar.scss');

import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import frLocale from '@fullcalendar/core/locales/fr';

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";


document.addEventListener("DOMContentLoaded", () => {
    var calendarEl = document.getElementById("calendar-holder");
    var eventsUrl = calendarEl.dataset.eventsUrl;

    var calendar = new Calendar(calendarEl, {
        defaultView: "dayGridMonth",
        editable: true,
        locale: frLocale,
        eventSources: [
            {
                url: eventsUrl,
                method: "POST",
                extraParams: {
                    filters: JSON.stringify({})
                },
                failure: () => {
                    alert("There was an error while fetching FullCalendar!");
                },
            },
        ],
        header: {
            left: "prev,next today",
            center: "title",
            right: " ",
        },
        plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin], // https://fullcalendar.io/docs/plugin-index
        timeZone: "UTC",
    });
    calendar.render();
});