// JS Event(이벤트)
// 어떤 사건을 의미
// ex) 버튼을 클릭, 웹페이지 로드, 키가 눌렸을때 등등

// 이벤트에 함수를 등록하는 방법 2가지
// 1. HTML 상에서 onxxx 속성으로 등록
// 2. js에서 listener를 사용해 등록


// 1. HTML 상에서 onxxx 속성으로 등록
function clickH1() {
  alert('함수 이용 클릭!');
}

// 2. js에서 listener를 사용해 등록
// addEventListener (이벤트 종류, 이벤트가 발생 했을 때 일어날 일 함수)

const btn1=document.querySelector('.btn-black');
const btn2=document.querySelector('.btn-green');
const btn3=document.querySelector('.btn-blue');
const btn4=document.querySelector('.btn-red');
const container = document.getElementById('container');

btn1.addEventListener('click',function(){
  alert('버튼1 클릭했다');
});

btn1.addEventListener('mouseover',function(){
  btn1.style.backgroundColor = 'aqua';
});

btn1.addEventListener('mouseout',function(){
  btn1.style.backgroundColor = 'white';
})

btn2.addEventListener('click',() => {
  const div = document.createElement('div');
  div.style.backgroundColor = 'pink';
  div.innerHTML = '안녕? 난 새로생긴 div';
  container.append(div);
})

btn3.addEventListener('click',changeColor);
function changeColor() {
  document.body.style.backgroundColor = 'yellow';
}

btn4.addEventListener('click',()=>{
  console.log(this);
  console.log(this.parent);
})




// key event
// 이벤트 객체
// 브라우저는 발생한 이벤트에 대한 정보를 담은 "이벤트 객체(event object)"를 이벤트 리스너에 전달
// mousedown 이벤트 발생 -> 이벶트 객체를 마우스 좌표, 
// keydown 이벤트 발생 -> 이벶트 객체를 키 코드값, 어떤
const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click',function(event){
  // 이벤트 객체 : 이벤트에 대한 다양한 정보를 포함
  console.log(event);
})

input.addEventListener('keydown',function(e){
  console.log(e);// event = e 축약 가능
  console.log(e.code);// 눌려진 키의 고유 코드
  console.log(e.key);// input에 입력된 값

  if(e.code === 'ArrowUp'){
    console.log('↑');
  }else if(e.code === 'ArrowDown'){
    console.log('↑');
  }else{
    console.log();
  }
});

const todoForm = document.getElementById('todo-form');//form
const todos = document.querySelector('.todos')//ul

todoForm.addEventListener('submit',(e)=>{
  // submit : 제출 이벤트. 새로고침이 기본값
  e.preventDefault();// 폼 submit 이벤트가 새로고침 되는것을 막음

  const todoInput = document.querySelector('input[name="todo"]');
  console.log(todoInput.value);// 입력된 값을 가져옴

  const newTodo = todoInput.value.trim();//인풋에 입력된 값을 양쪽 공백을 제거한 newTodo

  if(newTodo !== ''){
    const newTodoList = document.createElement('li');//<li></li>
    newTodoList.append(newTodo);
    todos.append(newTodoList);
  }

  // input창 초기화
  todoInput.value='';
})

// change : 인풋 요소에 변경이 일어나고, 다른 요소를 클릭해서 인풋이 포커스아웃(blur)처리 되었을때 일어나는 이벤트
const cngInput = document.querySelector('#change-input');

cngInput.addEventListener('change',(e)=>{
  console.log('change!',e.target);// e.target : 이벤트가 일어나고있는 대상
  console.log(e.target.value);
})

cngInput.addEventListener('input', function(){
  console.log('입력발생!');
  const intro = document.querySelector('.intro');
  console.log(this);
  console.log(intro);
  intro.textContent = this.value;
})