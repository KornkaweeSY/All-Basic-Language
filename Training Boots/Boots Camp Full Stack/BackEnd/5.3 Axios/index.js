 import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  
    
  // Step 2: Play around with the drop downs and see what gets logged.
  // Use axios to make an API request to the /filter endpoint. Making
  // sure you're passing both the type and participants queries.
  // Render the index.ejs file with a single *random* activity that comes back
  // from the API request.
  // Step 3: If you get a 404 error (resource not found) from the API request.
  // Pass an error to the index.ejs to tell the user:
  // "No activities that match your criteria."
  try {
    console.log(req.body);
    const type = req.body.type; // สร้างตัวแปร type ขัึ้นมาเรียกใช้ req และ body ใช้ในการแยกแยะ และ name = type ใน index.ejs
    const participants = req.body.participants; // สร้างตัวแปร participants ขัึ้นมาเรียกใช้ req และ body ใช้ในการแยกแยะ และ name = participants ใน index.ejs
    const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`); // สร้าง response ขึ้นเพื่อเรียกใช้ axios และ
    const result = response.data // สร้าง object ขึ้นเพื่อเก็บของมูล และ เรียกใช้ API ผ่าน axios ซึ่งอยู่ในคุณสมบัติ data ของ response
    res.render("index.ejs", {data : result[Math.floor(Math.random() * result.length)], }); // แสดงผลหน้าจอโดยดึง API จากไฟล์ จาก index.ejs และ ขอมูลจะถูกส่งไปยัง object ที่ชื่อว่า data ผลลัพจาก result คือ Math.random เพื่อสุ่มข้อมูลจาก array เพื่อส่งกลับไปยัง index.ejs
  } catch (error) {
    console.log("Fail to make request:", error.message);
    res.render("index.ejs", {error : "No activities that match your criteria.",
    });
  }

});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
