const root = require("../controllers/root.js")
const survey = require("../controllers/survey.js")
const authMiddleware = (req, res, next) => req.session.name ? next() : res.redirect('/');
module.exports = function(app){

  app.get('/', root.index);
  app.post('/login', root.login)

  app.use(authMiddleware);

  app.get('/survey', survey.index)
  app.post('/send', survey.createEvent);
}
