// 1부터 100까지의 배열을 for문을 사용해서 만들기!
// 그리고 해당 배열의 합을 for / for of / forEach 를 사용해서 구하기
let numbers = [];
for(let i=1;i<=100;i++){
  numbers.push(i);
}
console.log(numbers);

// for
let forSum = 0;
for(let i=1;i<=numbers.length;i++){
  forSum += i;
}
console.log(forSum);

// for of
let forOfSum = 0;
for(let number of numbers){
  forOfSum += number;
}
console.log(forOfSum);

// forEach
let forEachSum = 0;
numbers.forEach(function(num){
  forEachSum+=num;
})
console.log(forEachSum);

console.log('-------------------------');

// 두 배열에서 동일한 요소만을 가지는 배열 same만들기
// 두 배열에서 서로 다른 요소만을 가지는 배열 diff만들기
let fruits1=['사과','딸기','파인애플','수박','참외','오렌지','자두','망고'];
let fruits2=['수박','사과','참외','오렌지','파인애플','망고'];

let same = []; 
let diff = [];

for(let i=0;i<fruits1.length;i++){
  let n = fruits2.indexOf(fruits1[i])
  if(n<0){
    diff.push(fruits1[i]);
  }else{
    same.push(fruits1[i]);
  }
}
console.log(same);
console.log(diff);
