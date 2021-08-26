'use strict'
console.log('=== NodeJS. 06. Читаємо папки і файли. Створюємо файли.');

const fs = require('fs');
const path = require('path');

// Task-1 - reading fails

/*
// way -1
fs.readFile('t1.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log("=== The end one ===");
*/

/*
// way -2
let text = fs.readFileSync('t2.txt', 'utf-8');
console.log(text);
console.log("=== The end two ===");
*/

// console.log("Путін хуйло! Ла-ла-ла-ла-ла-ла!");

/*
fs.readdir('txt', (err, data) => {
    console.log(data);
    data.forEach(file => {
        console.log(file);
        console.log("extension: " + path.extname(file));
        console.log(file + ' ' + path.extname(file));
        // console.log(fs.statSync('txt/' + file));
        console.log(fs.statSync('txt/' + file).size);
    });
});
*/

fs.readdir('txt', (err, data) => {
    console.log(data);
    data.forEach(file => {
        console.log(file  +' \t\t ' + path.extname(file) + ' \t\t ' + fs.statSync('txt/' +  file).size+'B');
    });
});

fs.writeFile('txt/newfile.txt', 'this write my text', (err) => {
    if(err) console.log(err);
})
