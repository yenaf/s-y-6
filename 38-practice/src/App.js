import './App.css';
import Food from './Food';
import BestSeller from './BestSeller';
import Animal from './Animal';
import Operator from './Operator'
import Operator2 from './Operator2';
import Login from './Login';
import Test from './Test';


function App() {
  return(
    <div className="app">
        <Animal/>
        <hr/>
        <Operator/>
        <hr/>
        <Operator2/>
        <hr/>
        <Login/>
        <hr/>
        <Food></Food>
        <hr/>
        <BestSeller src='https://image.yes24.com/goods/93513663/XL' title='나의 하루는 4시40분에 시작된다' author='김유진' price='13,500원' type='자기개발서'/>
        <Test text='안녕하세요' valid='콘솔 띄우기 성공!'/>
        <Test valid='콘솔 띄우기 성공!'/>
    </div>
      )
}

export default App;
