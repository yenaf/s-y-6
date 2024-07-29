import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Clock from './Clock';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React.StrictMode : 개발 모드(개발 환경)에서만 작동하는 특수 컴포넌트. 문제 감지나 경고하기 위해 사용 (감시모드)
// 기존 JavaScript 에서는 에러를 확인하기 위해서 console창으로 봐야하지만,React는 치명적인 버그일 경우에 화면에 바로 띄워줍니다.JS의 문제점을 보완하고자 strict mode 강제!


// root.render(
//   <h1>안녕하세요</h1>
// );

// 현재 시간을 나타내는 컴포넌트 띄우기
// setInterval(()=>{
//   root.render(
//     <React.StrictMode>
//       <Clock/>
//     </React.StrictMode>
//   );
// },1000)