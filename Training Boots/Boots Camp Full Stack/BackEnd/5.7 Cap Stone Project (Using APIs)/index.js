import express, { request } from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const lat = 12.724639036963383;
const lon = 101.06510253870964;
const API_key = "339689797789dc7607ed54925721f27e";
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}`;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended : true }));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL);
        // const waetherData = JSON.stringify(result.data);
        // console.log(waetherData);
        res.render("index.ejs", {city: result.data.city, data: result.data}) ;  // แสดงผลบนหน้าจอโดยที่ ดึงข้อมูลมาจาก API_URL ผ่านคำสั้ง result และส่งไปแสดงผลที่ ไฟล์ indxe.ejs โดยที่ ส่งข้อมูล city และ data(ทั้งหมด) ไปยัง  index.ejs 
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
