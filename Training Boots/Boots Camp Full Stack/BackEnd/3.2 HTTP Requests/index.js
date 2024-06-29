import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello<h1>, World");
});

app.get("/Gameezaa", (req, res) => {
    res.send("<h1>Hi<h1>, Winner");
});

app.get("/About", (req, res) => {
    res.send("<h1>My name's Kornkawee<h1>, Songyen");
});

app.get("/Contact", (req, res) => {
    res.send("<h1>0339554179<h1>, Thailand");
});

app.listen(port, () => {
    console.log(`Server is running port ${port}`);
});
