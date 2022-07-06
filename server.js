const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({
  path: "./config/config.env",
});
let session = require("express-session");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");

//app
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(
  session({
    secret: process.env.TOKEN_SECRET,
    resave: true,
    cookie: { maxAge: 8 * 60 * 60 * 1000 }, // 8 hours
    saveUninitialized: true,
  })
);

// Getting Data from .env file
const accountSid = process.env.ACC_SID;
const authToken = process.env.AUTH_TOKEN;
const twilio = require("twilio");
const client = new twilio(accountSid, authToken);

const request = require("request");

function getdata() {
  request(
    "http://api.openweathermap.org/data/2.5/weather?q=delhi&appid=90b9f7d4a4ff35d02ea7776429c4e05f&units=metric",
    { json: true },
    (err, res, body) => {
      if (err) {
        return console.log(err);
      }

      // Create a message
      let msg = `\nToday's Weather : \n${body.weather[0].main}, ${body.main.temp}°C\nHumidity : ${body.main.humidity}%    
      `;

      // Calling Send Message function
      sendNotification(msg);
    }
  );
}

// Calling function
getdata();

function sendNotification(msg) {
  client.messages
    .create({
      body: msg,
      to: process.env.TO,
      from: process.env.FROM,
    })
    .then((message) => console.log(message.sid));
}
const cron = require("node-cron");

// Cronjob runs everyday at 8:00 AM
cron.schedule("0 8 * * *", () => {
  // Calling getData method which
  // calls the send message method
  getData();
});
// db
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"));

//middlewares
app.use(cors());

//routes middleware
app.use("/auth", authRoutes);
app.use("/product", productRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
