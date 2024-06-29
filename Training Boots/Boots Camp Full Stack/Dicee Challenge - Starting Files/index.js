var randomNumber1 = Math.floor(Math.random()*6) +1 ; // ประกาศตัวแปร 1-6 เริม่ตจาก 0+1 - 6
var randomDice = "dice" + randomNumber1 + ".png" // สร้างตัวแปร randomDice และ สุ่ม โดยใช้ตัวแปร randomNumber1 เชื่อกับ "dice" + ".png"
var randomImage = "images/" + randomDice; // สร้างตัวแปร randomImage และใช้ตัวแปรข้างบน เชื่อกับไฟล์ images/
var Image1 = document.querySelectorAll("img")[0]; // เลือก element img ตัวเเรก คือ [0]
Image1.setAttribute("src", randomImage); // กำหนดค่า "src" และใช้คำสั้ง randomImage

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDice2 = "dice" + randomNumber2 + ".png" // สร้างตัวแปร randomDice และ สุ่ม โดยใช้ตัวแปร randomNumber1 เชื่อกับ "dice" + ".png"
var randomImage2 = "images/" + randomDice2; // สร้างตัวแปร randomImage และใช้ตัวแปรข้างบน เชื่อกับไฟล์ images/
var Image2 = document.querySelectorAll("img")[1]; // เลือก element img ตัวเเรก คือ [0]
Image2.setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2 ) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Win!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Win! 🚩";
} else {
    document.querySelector("h1").innerHTML = " Draw ";
}