const root = require("../controllers/root.js")
const survey = require("../controllers/survey.js")
const confirm = require("../controllers/confirm.js")
const authMiddleware = (req, res, next) => req.session.name ? next() : res.redirect('/');

function youShallPass (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
};

module.exports = function(app){
  app.use(youShallPass)
  // app.post('/upload', survey.incoming)
  app.post('/appt.json', survey.incoming)
  app.get('/', root.index);
  app.post('/login', root.login)
  

  app.use(authMiddleware);
  app.get('/test', root.test)
  app.get('/survey', survey.index)
  
  app.get('/confirm', confirm.index)
}
