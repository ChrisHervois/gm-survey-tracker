const knex = require("../db/knex.js");





module.exports = {
    index: function (req, res) {
        res.render("root");
    },
    login: function (req, res) {
        req.session.name = req.body.name;
        req.session.save(() => {
            res.redirect('/survey')
        })
    },
    test: function (req, res) {
        res.render('test')
    }
}
