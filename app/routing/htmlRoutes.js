let path = require("path");


module.exports = function(app) {
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname.replace('routing','public'), 'survey.html'));
    })

    app.get('/:home?', function(req, res, next){
        if (!req.params.home || req.params.home === 'home') {
            console.log(req.params.home, 'triggered')
            res.sendFile(path.join(__dirname.replace('routing', 'public'),'home.html'));
        }
        else {
            next('route');
        }
    })

    app.use(function(req, res){
        res.sendStatus(404);
})};