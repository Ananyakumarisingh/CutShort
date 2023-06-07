const express = require("express");
const router = require("./routes/url.route");
const connectMongo = require("./config/db");
const app = express();


const PORT = process.env.PORT || 3500;

// app.set('view engine', 'ejs')

app.use("/", (req, res) => res.send('Welcome'));
app.use("/", router);



app.listen(PORT, async() => {
    try {
      await connectMongo();
      console.log(`Running at PORT: ${PORT}`);
    } catch (error) {
      console.log(error);
    }
});