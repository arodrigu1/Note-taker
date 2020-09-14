//dependencies
const express = require("express");

const apiRouter = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRouter);
app.use('/', htmlRouter);

//start server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
