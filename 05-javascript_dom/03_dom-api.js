console.log(document);
console.log(document.head);
console.log(document.head.childNodes[0]);
console.log(document.head.childNodes[1]);
console.log(document.head.childNodes[2]);
console.log(document.head.childNodes[3]);
console.log(document.head.childNodes[4]);
console.log('--------------------------------------');

console.log(document.domain); // 도메인 : 아이피주소가 뜬다
// 취소선이 그어지는 이유
// 해당 속성의 사용을 권장하지 않거나, 더이상 지원되지 않을 가능성을 나타냄
// 최신 보안 정책에서는 도메인 사용한 접근 제어방식이 보안상 취약할 수 있기 때문에 지양한다

// document 객체를 이용해 HTML 요소선택

// 1. getElementById
console.log(document.getElementById('green'));

// 2. getElementsByClassName (HTMLCollection)
console.log(document.getElementsByClassName('pink'));
console.log(document.getElementsByClassName('pink')[1]);

// 3. getElementsByTagName (HTMLCollection)
console.log(document.getElementsByTagName('div'));

// 4. getElementsByName (NodeList)
console.log(document.getElementsByName('id'));

// 5. querySelecto
// 처음 발견한 하나만 가지고 옴
console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector('div'));
console.log(document.querySelector('[name ="id"]'));

// 6. querySelectorAll (NodeList)
// 선택자에 해당되는 모든 요소를 선택
console.log(document.querySelectorAll('.pink'));
console.log(document.querySelectorAll('.others'));
console.log(document.querySelectorAll('#green'));
console.log(document.querySelectorAll('[name ="id"]'));

console.log(document.querySelectorAll('.pink')[0]);
console.log(document.querySelectorAll('.pink')[1]);
console.log(document.querySelectorAll('.pink')[2]);
console.log(document.querySelectorAll('.pink')[3]);
console.log('--------------------------------------');

// 유사배열
// [] 식으로 생긴 배열을 의미. 배열은 아님!
// index, length 는 가짐
// 배열과 달리 사용 가능한 메서드가 제한

// NodeList -> forEach() 반복문 사용 가능
document.querySelectorAll('.pink').forEach((elem) => console.log(elem));
console.log('--------------------------------------');

// HTMLCollection -> forEach() 메서드 사용 불가
// 그럼 반복이 필요할 경우? Array로 변경! Array.from()
Array.from(document.getElementsByClassName('pink')).forEach((elem) => console.log(elem));
console.log('--------------------------------------');

// for of 반복문도 가능
const pinks = document.querySelectorAll('.pink');
for(let pink of pinks){
  console.log(pink);
}
console.log('--------------------------------------');

