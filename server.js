// Dependencies
// =============================================================
const express = require('express');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing (Middleware)
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up Static Folder
// =============================================================
app.use(express.static('public'));

// Sets up Handlebars
// =============================================================
const exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Requires the html-Routes
// =============================================================
require('./routes/html/htmlRoutes')(app);


// Server: Starts our Express Server
// =============================================================
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });