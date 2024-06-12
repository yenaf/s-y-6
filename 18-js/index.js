// 구조분해 할당

// 배열의 구조분해
// const arr1=[1,2,3,4,5];
// const arr2=['a','b','c','d'];

// const [one, two, tree, four, five] = arr1;
// console.log(one, two, tree, four, five);
// console.log(arr1);
// console.log('------------------');

// const [x,y,alpha] = arr2;
// console.log(x,y,alpha);
// console.log('------------------');


// let num1=1;
// let num2=2;
// console.log('before : ',num1,num2);
// [num2, num1] = [num1, num2]
// console.log('after : ',num1,num2);
// console.log('------------------');

// const lists=['apple','grape'];
// [f1,f2,f3='orange'] = lists;
// console.log(f1);//apple
// console.log(f2);//grape
// console.log(f3);//orange -> 구조분해시 변수의 값이 undefined일때 default(기본)값 할당 가능

// 객체의 구조분해
// key 와 value
// const obj = {
//   title:'엘리먼트',
//   content:'fun',
//   num:5,
// }

// console.log(obj.title);
// console.log(obj.content);
// console.log(obj.num);
// console.log('------------------');

// console.log(obj['title']);
// console.log(obj['content']);
// console.log(obj['num']);
// console.log('------------------');

// 변수 선언 순서에 따라서 값이 할당되는 것이 아닌 key의 이름에 따라서 변수에 값이 할당됨
// const {num, title, content, star=1000} = obj;
// console.log(title, content, num, star);

// const {a1, b1, c1} = obj;//같은 이름을 사용해야한다
// console.log(a1,b1,c1);//undefined
// console.log('------------------');

// undefined : 변수는 할당 되었지만(초기화), 값이 할당되지 않았다

const lectureInfo = {
  name:'Coding on',
  part:'web',
  leader:'Kim',
}

// console.log(lectureInfo);//{ name: 'Coding on', part: 'web', leader: 'Kim' }

function getInfo(lecture){
  const {name, part, leader} = lecture;
  const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`;
  return output;
}
console.log(getInfo(lectureInfo))
