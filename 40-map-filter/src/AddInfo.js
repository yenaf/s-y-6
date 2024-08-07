// map 실습 1
import React, { useState } from 'react'

export default function AddInfo() {
  const [infoList, setInfoList] = useState([
    {
      id:1,
      name : '코디',
      email : 'codi@gmail.com',
    },
    {
      id:2,
      name : '윤소희',
      email : 'yoonsohee@gmail.com',
    },
  ])

  const [inputValue, setInputValue] = useState('');

  const addInfoList = ()=>{
    const newInfoList = infoList.concat({
      id:infoList.length + 1,
      name : inputValue,
      email : inputValue,
    });
    setInfoList(newInfoList);
    setInputValue('');
  }


  return (
    <>
      <form action="">
        <input type='text' placeholder='이름'
          onChange={(e)=>{
            console.log(e);
            setInputValue(e.target.value);
          }}
          // value={inputValue}
        />
        <input type='text' placeholder='이메일'
          onChange={(e)=>{
            setInputValue(e.target.value);
          }}
          // value={inputValue}
        />
        <button type='button' onClick={addInfoList}>등록</button>
      </form>
      <ul>
        {infoList.map((info)=>{
          return <li key={info.id}>{info.name}: {info.email}</li>
        })}
      </ul>
    </>
  )
}
