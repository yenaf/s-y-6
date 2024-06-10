// path 모듈
const path = require('path');

console.log(path.join('a','b','index.html'));
console.log(path.join('/a','b','index.html'));
console.log(path.join('/a','b','../index.html'));
console.log(path.join(__dirname,'data.json'));
console.log('--------------------------');
// join 과 resolve의 차이
// join - 절대경로
console.log(path.join('a','b','index.html')); // a\b\index.html
// resolve - 상대경로
console.log(path.resolve('a','b','index.html')); // C:\Users\sba\Documents\github\s-y-6\12-path_module\a\b\index.html
console.log('--------------------------');
