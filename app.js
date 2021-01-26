const path = require("path");

const express = require("express");
const handlebars = require("express-handlebars");

// route handlers
const handlers = require("./lib/handlers");

const app = express();

// setting up handlebars view engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.get("/", handlers.home);
app.get("/about", handlers.about);
app.use(handlers.notFound);
app.use(handlers.serverError);

if (require.main === module) {
    app.listen(3000, () => console.log("server listening on port 3000"));
} else {
    module.exports = app;
}
