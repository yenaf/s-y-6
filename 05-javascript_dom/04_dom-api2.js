// 요소 가져오기
const div1=document.getElementById('div1');


//태그 내부 내용 변경
// innerHTML : 태그 사용 가능
// innerText, textContent : 태그가 문자(기호)로 그대로 노출

// console.log(div1);
console.log(div1.innerText);
console.log(div1.textContent);
console.log(div1.innerHTML);

// .innerText와 .textContent
// 공통점
// 둘 모두 텍스트를 추가한다

// 차이점
// .innerText는 HTML 태그를 해석하지 않는다. 보여지는 텍스트만 그대로
// .textContent는 HTML 태그를 포함하여 처리한다

// 속성(attribute)변경
// setAttribute (속성명, 변경할 속성 값) = > 속성 값을 설정
const naver = document.getElementById('naver');
naver.setAttribute('href','https://www.google.com');


const cat = document.getElementById('cat');
cat.setAttribute('src','/03-css/img/cat3.jpg');

// getAttribute('속성명) : 속성 값 얻기
console.log(cat.getAttribute('src'));

// 참고 1) 속성 접근 (.)연산자로도 가능
console.log(cat.src);
console.log(cat.alt);
console.log(cat.id);

// 참고 2) 연산자로 속성에 접근하고 = 할당 연산자로 속성값 변경 가능
naver.href = '#';
console.log(naver.href);
console.log('---------------------------------');

// css지정
const h1 = document.querySelector('h1');
const list = document.querySelectorAll('ul>li');
console.log(list);
// css지정
// style 속성
// style속성을 이용해 css 지정가능
// style.xxx(xxx : camelCase)

list[0].style.backgroundColor = 'pink';
list[1].style.fontSize = '20px';
list[2].style.color = 'blue';

for(let li of list){
  li.style.backgroundColor = 'pink';
}

// * classList활용
// classList.add
// classList.remove
// classList.contains : 있는지 없는지 확인 (true/false)
// classList.toggle : 있으면 제거, 없으면 추가

h1.classList.add('add-h1');
// h1.classList.remove('add-h1');
console.log(h1.classList.contains('add-h1'));
h1.classList.toggle('add-h1');
console.log('---------------------------------');

// 요소 찾기
// 계층구조 (형제, 자식, 부모, 조상, 자손)
const friends = document.querySelector('#friends');
const tigger = document.querySelector('#tigger');

console.log(friends.children); //HTMLCollection : 유사배열  . 자식요소접근
console.log(friends.children[0]); //HTMLCollection : 유사배열 
console.log('---------------------------------');

console.log(tigger.parentNode);//부모노드접근
console.log(tigger.parentNode.parentNode);
console.log('---------------------------------');

console.log(tigger.previousElementSibling);//이전 형제요소
console.log(tigger.nextElementSibling);//다음 형제요소
console.log(tigger.nextElementSibling.nextElementSibling);//다음 다음 형제요소

console.log('---------------------------------');

const span = document.querySelector('.yami');
span.innerHTML = '맛없다ㅡㅡ;;';
span.style.color='red';
span.style.fontSize = '25px';

console.log('---------------------------------');

// 새로운 요소 생성
const container = document.querySelector('.container');
const p = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
console.log(p);
p.innerText='새로 추가된 p요소 입니다';
p2.innerText='p2';
p3.innerText='p3';

p.style.fontWeight = '700';
p.style.backgroundColor = 'green';

// 새로 만든 요소를 추가해보장!
// append() 여러개추가 / appendChild() 한개 만 추가
// x.append(y) : 요소의 맨 마지막 자식으로 y요소 추가
container.append(p,p2,p3);

p2.classList.add('p-2'); // 요소에 클래스 추가하기(미리만든 스타일)
p3.classList.add('p-3');

// x.prepend(y) : x요소의 맨 처음 자식으로 y요소 추가

const li0=document.createElement('li');
const li1=document.createElement('li');
li0.innerHTML = '<b>친구들을 소개합니다!!</b>';
li1.textContent = '캉가';
friends.prepend(li1);
friends.prepend(li0);

// x.remove() : x요소 자체를 삭제
// x.removeChild(y) : x의 자식요소인 y요소 삭제

li1.remove();
