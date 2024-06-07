console.log('강예나');
// math.js 모듈을 불러와 사용
const add = require('./math');
console.log(add(5,7));
console.log('----------------');

const math2 = require('./math2');
console.log(math2.add2(1,2));
console.log(math2.PI);
console.log(math2.E);
console.log('----------------');

const {add2,PI,E} = require('./math2');
console.log(add2(3,5));
console.log(PI);
console.log(E);

