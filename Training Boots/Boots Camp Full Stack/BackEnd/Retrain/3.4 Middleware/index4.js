import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

let Name ;

app.use(bodyParser.urlencoded({extended: true})); // middle were ใช้แยกobject หน้า HTML (Name)

function logger (req, res, next) {
  console.log(req.body);
  Name = req.body["street"] + req.body["pet"]; // response html 
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  // res.send("Your name is " + Name);
  res.send(`<h1>Your name is :</h1><h2>${Name}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
