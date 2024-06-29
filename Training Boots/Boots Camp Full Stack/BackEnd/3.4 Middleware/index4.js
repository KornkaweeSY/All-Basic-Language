import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true}));

function logger(req, res, next) {
  console.log("Request Method: ", req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>BandNameofPet<h1> ${bandName}`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
