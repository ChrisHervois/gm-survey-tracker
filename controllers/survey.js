const knex = require("../db/knex.js");
const CONFIG = require('../config/settings');
const CalendarAPI = require('node-google-calendar');
let cal = new CalendarAPI(CONFIG);
const calendarId = 'chris.hervois@gmail.com'






module.exports = {
  index: function (req, res) {

    res.render("survey", { user: req.session.name });
  },
  incoming: function (req, res) {
    let appts = (req.body)
    let finalKey = Object.keys(appts)[Object.keys(appts).length-1];
    
    
    // Begin loop
    for (let key in appts) {
      
      let appt = JSON.parse(appts[key])
      // console.log(`iteration ${key} is`, appt)
      let event = {
        'start': { 'dateTime': `${appt.date}T${appt.time}:00-07:00` },
        'end': { 'dateTime': `${appt.date}T${appt.time}:00-08:00` },
        'location': `${appt.address} ${appt.address2}, ${appt.city}, ${appt.state} ${appt.zip}`,
        'summary': `ENC (${req.session.name}) ${appt.firstName} ${appt.lastName} (${appt.age})`,
        'status': 'confirmed',
        'description': `${appt.phone} / ${appt.comment}`,
        'colorId': 4
      };
      
      cal.Events.insert(calendarId, event)
        .then(() => {
          if (key === finalKey) {
            res.redirect('/')
          }
        })
        .catch(err => {
          throw err;
        });
      


    }
    // End loop
      
    
    
    








  }

}


