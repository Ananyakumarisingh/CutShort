const express = require("express");
const router = require("./routes/url.route");
const connectMongo = require("./config/db");
const PORT = process.env.PORT || 3500;

const app = express();

app.use(express.json());

app.use("/url", router);
app.use("/", (req, res) => res.send('Welcome'));

app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500; // Internal error:- which are not created by us
  error.status = error.status || "error"; //
  res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.message,
  });
});

app.listen(PORT, async() => {
    try {
      await connectMongo();
      console.log(`Running at PORT: ${PORT}`);
    } catch (error) {
      console.log(error);
    }
});