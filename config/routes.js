const root = require("../controllers/root.js")
const survey = require("../controllers/survey.js")
module.exports = function(app){

  app.get('/', root.index);
  app.post('/login', root.login)
  app.get('/survey', survey.index)
  app.post('/send', survey.createEvent);
}
