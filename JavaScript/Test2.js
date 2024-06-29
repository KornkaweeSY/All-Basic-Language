// function lifeInWeeks(age) {
    
//     /************Don't change the code above************/    
        
//         //Write your code here.
//         var a = 90 - age
//         var x = a * 365;
//         var y = a * 52;
//         var z = a * 12;
        
//         console.log(x + " days "+ y + " weeks "+ z + " months ");    
        
        
//     /*************Don't change the code below**********/
//     }

// lifeInWeeks(20);

// function lifeInWeeks(age) {
    
//     /************Don't change the code above************/    
        
//         //Write your code here.
//         var a = 90 - age
//         var x = a * 365;
//         var y = a * 52;
//         var z = a * 12;
            
//         console.log("You have "+ x + " days ,"+ y + " weeks , and "+ z + " months left. ");    
        
        
//     /*************Don't change the code below**********/
//     }
    
//     lifeInWeeks(10);







// //Create your function below this line.
// function bmiCalculator(weight,height) {
//     //The first parameter should be the weight and the second should be the height.
//         var BMI = weight/(height*height);
//         console.log(Math.floor(BMI));
//         return BMI;
//     }
//         bmiCalculator(65,1.8);
        
        
//     /* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
    
//     var bmi = bmiCalculator(65, 1.8); 
    
//     bmi should equal 20 when it's rounded to the nearest whole number.
    
//     */
    
    

// function bmiCalculator(weight,height) {
//     var BMI = weight/(height*height);
//     if (BMI < 18.5) {
//         console.log("Your BMI is " + Math.floor(BMI) +", so you are underweight.");
//     } else if (BMI >= 18.5 || BMI <= 24.9) {
//         console.log("Your BMI is " + Math.floor(BMI) +", so you have a normal weight.");
//     } else {
//         console.log("Your BMI is " + Math.floor(BMI) +", so you have a  overweight.");
//     }
//     return BMI;
// }

// bmiCalculator(65,1.8);


// Leap year


// function isLeap(year){
//     // if(year%4==0 && year%100!==0){   // year หาเศษส่วน เท่ากับ 0 และ  year หาเศษส่วน ไม่เท่ากัย 0
//     //     console.log(" LEAP YEAR");
//     // }
//     // else if(year%100==0 && year%4==0 && year%400==0 ){
//     //     console.log("IT IS LEAP YEAR.");
//     // }
//     // else{
//     //     console.log("not leap year.");
//     // }
//     }
    
    // isLeap(1948)


    // function isLeap(year) {
    //     if (year % 4 ===0 ) {
    //         if (year % 100 === 0) {
    //             if (year % 400 === 0) {
    //                 return "Leap year";
    //             } else {
    //                 return "Not leap year";
    //             }
    //         }else {
    //             return "Leap year";
    //         }
    //     }else {
    //         return "Not leap year";
    //     }
    // }

    // isLeap(1948)





    // fizz and buzz

    // var output = [];
    // var count = 1;
    // function fizzBuzz() {
        
    //     output.push(count);
    //     console.log(output);
    //     count++;
    // }
    // fizzBuzz();


    // const names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

    // function whoPlaying(names) {
      
    //   var numberOfPeople = names.length; // เช็คว่ามีชื่อในอารเรย์กี่คน
    //   var randomPersonPosition = Math.floor(Math.random() * numberOfPeople); // สุุ่มคนจากรายชื่อในอารเรย์ ที่เป็นตัวเลข 0-999999
    //   var randomPerson = names[randomPersonPosition]; // สุ่มชื่อโดยที่ใช้คุณสมบัติที่อยู่ใน อารเรย์

    //   return randomPerson + "is going to buy lunch today!";
    // }
   
    // console.log(whoPlaying(names));

//     const names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

//     function whoPlaying(names) {
//     // Check if the array is not empty
//     if (names.length > 0) {
//         // Generate a random index
//         const randomIndex = Math.floor(Math.random() * names.length);
        
//         // Get the name at the random index
//         const randomName = names[randomIndex];

//         return randomName + " is going to pay bills";
//     } else {
//         return "No one can't help";
//     }
// }

// console.log(whoPlaying(names));


// var output = [];
// var count = 1;

// function fizzBuzz() {
//   while (count <= 100) {
//     if (count % 3 === 0 && count % 5 === 0) {
//       output.push("FizzBuzz");
//     } else if (count % 3 === 0) {
//       output.push("Fizz");
//     }else if (count % 5 === 0) {
//       output.push("Buzz");
//     }else {
//       output.push(count);
//     }
//     count++;
//   }
// }
// fizzBuzz() // เรียกใช้ฟังก์ชัน fizzBuzz เพื่อให้ตัวแปร output ถูกสร้าง
// console.log(output); //แสดงผลลัพท์


// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }


// var numberOfBottles = 99;
// while (numberOfBottles >= 0) {
//   // var bottleWord = "bottle"
//   // if (numberOfBottles === 1) {
//   //     bottleWord = "bottles"
//   // }
//   console.log(numberOfBottles);
//   numberOfBottles--;
// }




//  var output = [];

// function fizzBuzz() {
//   for (var count = 1; count <= 100; count++ ) {
//     if (count % 3 === 0 && count % 5 === 0) {
//       output.push("FizzBuzz");
//     } else if (count % 3 === 0) {
//       output.push("Fizz");
//     }else if (count % 5 === 0) {
//       output.push("Buzz");
//     }else {
//       output.push(count);
//     }
//   }
// }
// fizzBuzz() // เรียกใช้ฟังก์ชัน fizzBuzz เพื่อให้ตัวแปร output ถูกสร้าง
// console.log(output); //แสดงผลลัพท์



// function  fibonacciGenerator (n) {
//   var output = [];
//   if (n === 1) { // ถ้า n = 1 หรือ อารเรย์ ตัวที่ 0 ให้กำหนด ค่าในอาเรย์ = 0 
//       output = [0];
//   } else if (n === 2) {
//       output = [0,1];
//   } else {
//       output = [0,1]; // ถ้าไม่ตรงกับเงื่อไขข้่างบน ให้กำหนดค่าเริ่มต้นเป็น [0,1]
//       for (var i = 2; i < n; i ++) {
//       output.push(output[output.length - 2] + output[output.length - 1]);
//       }
//   }
// return output
// }

// var result = fibonacciGenerator (5);
// console.log(result);


// var arrayNumber = [];

// function fibonacciGenerator (n) {
//   for ( i = 0; i < n; i++) {  // กำหนด จะสตาร ให้ค่า i = 0 จากนั้น เช็คว่า ค่า i น้อยกว่า n หรือไม่ ถ้าน้อยกว่า ให้หยุดทำลูปนี้ เมื่อจบลูปทุกครั้งให้ บวกค่าทีละ 1
//     if (arrayNumber.length == 0) { 
//       arrayNumber.push(0);     // ถ้าค่า array นี้้มีค่า = 0 ให้เพิ่มค่า 0 เข้าไป 
//     } else if (arrayNumber.length == 1) {
//       arrayNumber.push(1);     // ถ้าค่า array นี้้มีค่า = 1 ให้เพิ่มค่า 1 เข้าไป 
//     } else {
//       arrayNumber.push(arrayNumber[(arrayNumber.length-1)] + arrayNumber[(arrayNumber.length-2)]);
//     }
//   }
//   return arrayNumber;
// }
// fibonacciGenerator (5);
// console.log(arrayNumber);


// function fibonacciGenerator(n) {
//   var a = 0;
//   var b = 1;
//   var c = 0;
//   if (n === 1) {
//       fiboArray = [a];    
//       return fiboArray;    
//   } else if (n === 2) {
//       fiboArray = [a, b];
//       return fiboArray;
//   }
//   fiboArray = [a, b];
//   for(var i = 3; i <= n; i++) {
//       c = b + a;
//       fiboArray.push(c);
//       a = b;
//       b = c;
//   }
//   console.log(fiboArray);
// }

// fibonacciGenerator(5)



// function add(num1, num2) {
//     return num1 + num2;
// }

// function multiply(num1, num2) {
//     return num1 + num2;
// }

// function subtrack(num1, num2) {
//     return num1 - num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }

// function calculator(num1, num2, operator) {
//     return operator (num1, num2);
// }

// var result = calculator(10, 5, divide);
// console.log(result);

function HouseKeeper (name, age, yearsOfExperience, languages) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.languages = languages; 
    this.clean = function() {
        alert("cleaning is progress.....");
    }
}


var houseKeeper1 = new HouseKeeper("Sara", 40, 20, ["thai, English"]);
var houseKeeper2 = new HouseKeeper("Taco", 30, 10, ["Japanise, Thai, English"]);

console.log(houseKeeper2);