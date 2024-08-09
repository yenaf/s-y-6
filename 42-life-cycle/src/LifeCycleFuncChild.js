import React, { useEffect, useState } from 'react'

// 자식 컴포넌트
export default function LifeCycleFuncChild({number}) {
  const [input, setInput] = useState('');

  // 1. 마운트시점에 실행되는 방법(return 생략)
  useEffect(() => {
    console.log('컴포넌트 마운트💙');
  }, [])

  // 2. 마운트시점에 실행되는 방법(return) -> 언마운트포함
  useEffect(() => {
    console.log('컴포넌트 마운트💙');
    return()=>{
      console.log('컴포넌트 언마운트🧡');
    }
  }, [])

  // 3. 마운트 or 업데이트 시점에 실행 (의존성 배열 생략)
  useEffect(() => {
    console.log('컴포넌트 마운트💙 or 업데이트💚');
  })

  // 의존성 배열은 빈배열 이므로 1,2 는 렌더링 시 한번만 실행
  // 의존성 배열을 생략하는 의미는 매 렌더링(상태변경)마다 실행 하겠다 라는 뜻

  // 4. input 상태가 업데이트 될 때 실행
  useEffect(()=>{
    console.log('컴포넌트 마운트💙 or input상태가 변경됨에 따라 컴포넌트 업데이트🧡');
  },[input])
  // input이 배열이 아니라도 의존성 배열에 추가할 수 있다.
  // 문자열이든, 숫자든 상관없이, 이값이 변경될때마다 useEfect()가 실행된다

  return (
    <div style={{color : 'orange'}}>
      자식컴포넌트
      <p>현재 number값은 {number}입니다</p>
      <input type='text' value={input} 
        onChange={(e)=>{setInput(e.target.value)}}
      />
    </div>
  )
}
