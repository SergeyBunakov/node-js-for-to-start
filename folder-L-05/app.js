'use strict';
console.log('=== NodeJS. 05. Передача параметрів в Node.js ===');

let a = 12;
let b = 23;
let v = a + b;

let c = (a, b) ? a : b;
console.log(c)
let out = '';
for (let i = 8; i >= 0; i--) {
    out += i + ',  ';
    console.log(out)
}
console.log(" === " + out + " === ");

let d = [6, 7, 8];
let e = d.map(elem => {
    return elem * 3;
});
console.log(e);

const f = {one: 44, two: 'hello'};
console.log(f);

