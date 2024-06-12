// &&(and) , ||(or)

const x=5;
const result = x || 100;
console.log(result);//5

// 왜 5가 나올까??
// 5||100 
// OR 연산자는 첫 번째 피연산자가 truthy(true로 간주되는 값)이면 첫 번째 피연산자를 반환하고, 그렇지 않으면 두 번째 피연산자를 반환
// OR 연산자를 사용하여 변수 x가 falsy한 값(0, null, undefined, false, NaN, '')인 경우 대체 값 100을 사용
console.log('-----------------');
const y=7;
const result2 = x<y && '값이있다문자';
console.log(result2);
// 5<7 && 'yy가 큼' == true && true

console.log('-----------------');

// falsy
// undefined, null, 0, false, '', NaN

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);
