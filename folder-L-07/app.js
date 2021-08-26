'use strict'
console.log('Читаємо і пишемо CSV і JSON файли в Node.js');

// npm i csv-parser
// npm i csv-writer

const fs = require('fs');
const path = require('path');
const student = require('./one.json');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// fs.writeFile('one.txt', 'work', (err) => {
//     if(err) console.log('Error');
// });

/*
* Case 1. Записуємо json file
*/

const man = {
    name: 'John',
    age: 48,
    department: 'History',
    car: 'Ford',
};

// fs.writeFile('one.json', JSON.stringify(man), (err) => {
//     if (err) console.log('Error');
// });

/*
* Case 2. Читаємо json file
*/

// console.log(student);

/*
* Case 3. Читаємо CSV file
*/

const results = [];

// fs.createReadStream('table.csv')
//     .pipe(csv())
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//         console.log(results);
//         // [
//         //   { NAME: 'Daffy Duck', AGE: '24' },
//         //   { NAME: 'Bugs Bunny', AGE: '22' }
//         // ]
//     });


/*
* Case 4. Пишемо CSV file
*/

/*
const csvWriter = createCsvWriter({
    path: 'path/to/file.csv',
    header: [
        {id: 'name', title: 'NAME'},
        {id: 'lang', title: 'LANGUAGE'}
    ]
});
*/

const csvWriter = createCsvWriter({
    path: 'test.csv',
    header: [
        {id: 'name', title: 'NAME'},
        {id: 'surname', title: 'LastName'},
        {id: 'age', title: 'AGE'},
        {id: 'gender', title: 'GENDER'},
    ]
});

const data = [
    {
        name: 'John',
        surname: 'Smith',
        age: 26,
        gender: 'M',
    },
    {
        name: 'Kevin',
        surname: 'Abrams',
        age: 48,
        gender: 'M',
    },
    {
        name: 'Julia',
        surname: 'Obama',
        age: 18,
        gender: 'F',
    },
    {
        name: 'Samantha',
        surname: 'Williams',
        age: 54,
        gender: 'F'
    },
    {
        name: 'Taras',
        surname: 'Shevchenko',
        age: 30,
        gender: 'M'
    },
];

csvWriter.writeRecords(data)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
