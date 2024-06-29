import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const data = {
    titleHead: "<strong>Enter your name below 👇</strong>"
  };
  res.render("index.ejs", data);
  // res.render(index.ejs);
});

app.post("/submit", (req, res) => {
  const numberOfname =  req.body["fName"].length + req.body["lName"].length 
  res.render("index.ejs", { numberOfnames : numberOfname });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
