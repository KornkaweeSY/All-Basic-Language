// age = 25;
// let result = (age >= 15 || age <= 25); // true / false

// if(result){
//     // คำสั่งให้ทำอะไร
//     console.log("วัยรุ่น");
// }

// let balance = 5000;
// let withdraw = 5500;

// if(withdraw <= balance){
//     console.log("ดำเนินการถอนเงิน = ",withdraw);
//     balance = balance-withdraw;
//     console.log("ยอดเงินคงเหลือ = ",balance);
// }else{
//     // เมื่อเงื่อนไขเป็นเท็จ
//     console.log("ยอดเงินของคุณไม่พอ");
// }

// let score = 2;

// /*
// มากกว่า  40 => D
// มากกว่า  50 => C
// มากกว่า  60 => B
// มากกว่า  70 => A
// */

// if(score>=70){
//     console.log("Grade A")
// }
// else if(score>60){
//     console.log("Grade B")
// }
// else if(score>50){
//     console.log("Grade C")
// }
// else if(score>40){
//     console.log("Grade D")
// }
// else {
//     console.log("Grade F")
// }


// // ternary Operator

// let score = 90;

// let pass = score >50 ? "ผ่านเกณฑ์" : "ไม่ผ่านเกณฑ์";

// console.log(pass);








let age = 1;

if(age<=15){
    if(age==15){
        console.log("ม.3");
    }else if(age==14){
        console.log("ม.2");
    }else if(age==13){
        console.log("ม.1");
    }else{
        console.log("ประถมศึกษา");
    }
}else{
    console.log("ม.ปลาย / ปริญญา");
}
