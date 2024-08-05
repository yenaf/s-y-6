import './App.css';
import Food from './Food';


function App() {
      const cute = "color";
      const animal = "cat";
      const a=1;
      const b=2;


      return(
        <div className="app">
          <div>
            제 반려동물의 이름은 {cute}입니다.<br></br>
            {cute}은(는) {animal}입니다.
          </div>
          <div>
            {3 + 5 ==8 ? '정답입니다' : '오답입니다'}
          </div>
          <div>
            {a>b && 'a가 b보다 큽니다'}
          </div>
          <div className="login">
            <h2>
              Hello World
            </h2>
            <div>
              <label for="">아이디 : </label>
              <input type="text" />
            </div>
            <div>
              <label for="">비밀번호 : </label>
              <input type="password" />
            </div>
          </div>
          <Food></Food>
        </div>
      )
}

export default App;
