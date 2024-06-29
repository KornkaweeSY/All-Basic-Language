/* 

2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "Type to your Url:",
        name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL; // 1. Use the inquirer npm package to get user input.
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-image01.png')); // สร้างไฟล์ png ขึ้นมาชื่อว่า qr-.....

    fs.writeFile("URL01.txt", url, (err) => { // สร้างไฟล์ textขึ้นมา เพื่อแสดงข้อความขึ้นมาใน qr code
        if (err) throw (err);
        console.log("The file has been saved");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });