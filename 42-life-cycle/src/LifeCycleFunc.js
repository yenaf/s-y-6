import React, { useState } from 'react'
import LifeCycleFuncChild from './LifeCycleFuncChild';

// 부모 컴포넌트
export default function LifeCycleFunc() {
  const [number,setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumber = ()=>{
    setNumber(number+1);
  }
  const changeVisible = ()=>{
    setVisible(!visible);
  }
  return (
    <div style={{backgroundColor:'green'}}>
      <button onClick={changeNumber}>plus</button>
      <button onClick={changeVisible}>on / off</button>
      {visible && <LifeCycleFuncChild number={number}/>}
    </div>
  )
}
