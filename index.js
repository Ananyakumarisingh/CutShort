const express = require("express");
const app = express();

const Port = process.env.Port || 3500;

app.set('view engine', 'ejs')

app.get("/", (req, res) => res.render('index'));

app.listen(Port);