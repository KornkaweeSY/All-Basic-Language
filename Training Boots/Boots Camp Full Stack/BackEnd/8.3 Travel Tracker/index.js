import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "World",
  password: "253465130",
  port: 5432,
});

db.connect();

// db.query("SELECT * FROM ")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  // try {
  const result = await db.query("SELECT country_code FROM visited_countries"); // ดึงข้อมูล visited_countries ใน database ของ country_code
    let country = []; // ประกาศตัวแปรเพื่อเก็บค่า arrey
    result.rows.forEach(countries => { // นำ result มา วน loop  และเก็บข้อมูล country_code ลงในอาร์เรย์ countries เพื่อนำไปแสดงผลในหน้าเว็บไซต์
    country.push(countries.countries_code); // บันทึค่ากลับไปใน array country : country = ['US', 'TH']
    });
    console.log(result.rows);
    res.render("index.ejs", {countries: country, total: country.length}); //ส่งข้อมูล countries และ total ไปให้กับเทมเพลต เพื่อนำมาแสดงผลในหน้าเว็บ
    db.end(); // ปิดทำการเชื่อมต่อฐานข้อมูล
  // } catch (error) {
  //   res.send("Error " + error)
  // };
});

app.post("/add",async (req, res) => {

  // try {
  const input = req.body["country"];
  const result = await db.query("SELECT country_code FROM countries WHERE country_name = $1", [input]);
  console.log(result);
  if (result.rows.length !== 0) {
    const data = result.rows[0];
    const countryCode = data.country_code;
    console.log(countryCode);
    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
      countryCode,]);
    res.redirect("/");
    } else {
    res.status(400).send("Country not found");
    }
  // } catch (error) {
  //   console.error("Error occurred while adding country:", error);
  //   res.status(500).send("Internal Server Error");
  // }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
