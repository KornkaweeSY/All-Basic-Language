//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))

var secret01 = false;

function secret(req, res, next) {
    const password = req.body["password"];
    if (password === "0000") {
        secret01 = true;
    }
    next();
}

app.use(secret);

app.get("/", (req, res) => {
    console.log(__dirname + "/public/index.html");
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (secret01) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.send("Incorrect password");
    }
    
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

