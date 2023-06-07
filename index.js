const express = require("express");
const router = require("./routes/url.route");
const app = express();
route

const Port = process.env.Port || 3500;

// app.set('view engine', 'ejs')

app.use("/", (req, res) => res.send('Welcome'));
app.use("/", router);



app.listen(Port);