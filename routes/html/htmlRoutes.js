// Dependencies
// =============================================================

// Routes
// =============================================================
module.exports = function (app) {

    // GET: Landing page (/)
    app.get("/", function (req, res) {
        res.render('index', {layout: 'landing.handlebars'});
    });

    // GET: Home Page (/home)
    app.get("/home", function (req, res) {
        res.render('home');
    });

    // GET: Projects Page (/projects)
    app.get("/projects", function (req, res) {
        res.render('projects');
    });

    // GET: About Page (/about)
    app.get("/about", function (req, res) {
        res.render('about');
    });

    // GET: Contact Page (/contact)
    app.get("/contact", function (req, res) {
        res.render('contact');
    });

};