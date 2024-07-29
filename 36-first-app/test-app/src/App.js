
import './App.css';
import Larva from './Larva';

function App() {
  const name = 'yena';
  const student = 'sesac';
  const styles = {
    backgroundColor : 'pink'
  }
  return (
    <>
    <div className='App'>
      {name} 안녕?
    </div>
    <div>
      {student ==='sesac' ? <span>새싹크루</span> : <span>새싹이뭐지몰라요</span>}
    </div>
    <div style={styles}>
      스타일적용
    </div>
    <div style={{backgroundColor:'skyblue'}}>
      스타일적용2
    </div>
    <Larva/>
    </>
  );
}

export default App;

// JSX문법
// 1. 하나로 감싸인 요소
// 의미없는 div가 싫다면? <input></> Fragment 문법을 사용하기

// 2. js문법 사용은 중괄호 {}
// {} 안에서 삼항연산자 사용 가능 (if, for문 사용불가)

// 3. style 속성
// 리액트에서 DOM요소에 스타일 적용시 문자열X => 객체사용
// {{스타일명 : '값'}}
// 스타일이름중 하이픈(-)포함시 카멜케이스로 작성해야함 (JSX에서 하이튼은 진짜 빼기를 말한다)

// 4. className사용

// 5. 종료태그가 없는 태그 사용할땐 종료태그를 작성해야함
// <input/> 또는 <input></input>