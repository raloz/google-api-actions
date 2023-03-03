import { google } from 'googleapis';
import { authorize } from "./google-auth.js";
import { insertEvents } from "./google-calendar.js";

authorize()
    .then(async (auth) => {
        
        // const events = createEvent(summary, description);
        // const calendar = google.calendar({ version: 'v3', auth });
        // await insertEvents(calendar);
    })
    .catch(console.error);


function createEvent(){
    return {};//objeto que representa el evento a insertar
}