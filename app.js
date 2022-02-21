const express = require("express");
const app = express();
var cors = require("cors");
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Rotas
require("./routes/routerHandler")(app);

app.listen(process.env.PORT  || 5000, () => console.log("🚀 Server is running on port 5000"));

module.exports = app; 