const knex = require("../db/knex.js");
const CONFIG = require('../config/settings');
const CalendarAPI = require('node-google-calendar');
let cal = new CalendarAPI(CONFIG); 
const calendarId = 'chris.hervois@gmail.com'




module.exports = {
  index: function(req, res) {
    
    res.render("survey", {user:req.session.name});
  },

  createEvent: function (req, res) {
    let event = {
      'start': { 'dateTime': `${req.body.date}T${req.body.time}:00-07:00` },
      'end': { 'dateTime': `${req.body.date}T${req.body.time}:00-08:00` },
      'location': `${req.body.address} ${req.body.address2}, ${req.body.city}, ${req.body.state} ${req.body.zip}`,
      'summary': `ENC (${req.session.name}) ${req.body.first} ${req.body.last} (${req.body.age})`, 
      'status': 'confirmed',
      'description': `${req.body.phone} / ${req.body.comment}`,
      'colorId': 1
    };

    cal.Events.insert(calendarId, event)
      .then(resp => {
        res.redirect('/confirm')
        // console.log('inserted event:');
        // console.log(resp);
      })
      .catch(err => {
        console.log('Error: insertEvent-' + err.message);
      });


      // res.redirect('/survey')
  }
}
