import  express  from "express";

const app = express(); // สร้าง HTTP ขึ้นมา
const port = 3000; // สร้าง port ที่ใช้ใน local = 3000

app.get("/", (req, res) => {  // กำหนดหน้าแรกมา ไม่มี / ต่อ
    const d = new Date(); // กำหนดตัวแปรมา ใช้ฟังชั้น date() 
    const day = d.getDay(); // กำหนดตัวแปรมา ใช้ฟังชั้น getday()

    let type = "a Weeked";
    let adv = "it's time to work hard";

    if ( day === 0 || day === 6 ) { // กำหนดค่า ใช้ฟังชั้น if และ || (และ)
        type = "Weeked";
        adv = "it's time to some fun";
    };

    res.render("index.ejs", { //
        dayType: type,
        advice: adv,
    });     
});

app.listen(port, () => {
    console.log(`Server is running on port 3000`);
});


