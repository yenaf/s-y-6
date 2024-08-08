// map 실습 1 두개의 인풋에 이름과 이메일을 받고 입력버튼누르면 추가
// map 실습 2 엔터 눌렀을때 추가, 더블클릭했을때 해당정보삭제

import React, { useState } from 'react'

export default function Prac() {
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

  const [inputValue,setInputValue] = useState(
    {
      name : '',
      email : ''
    }
  );

  function addInfoList() {
    if(inputValue.name.trim().length === 0){
      return;
    }

    const newInfoList = infoList.concat(
      {
        id : infoList.length+1,
        name : inputValue.name,
        email : inputValue.email,
      }
    );
    setInfoList(newInfoList);
    setInputValue({name:'',email:''});
  }

  function aciveEnter(e) {
    if(e.code === 'Enter'){
      addInfoList();
    }
  }

  function deleteInfo(targetId){
    // console.log(targetId);
    const afterDelIfo = infoList.filter((infoId)=>infoId.id !== targetId);
    setInfoList(afterDelIfo);
  }

  return (
    <div>
      <form>
        <input type='text' placeholder='이름'
        value={inputValue.name} 
        onChange={(e)=>{
          setInputValue({...inputValue,name : e.target.value})}}
        />
        <input type='email' placeholder='이메일'
        value={inputValue.email} 
        onChange={(e)=>{
          setInputValue({...inputValue,email : e.target.value})}}
        onKeyDown={(e)=>{aciveEnter(e)}}
        />
        <button type='button' onClick={addInfoList}>등록</button>
      </form>
      <div>
        <ol style={{listStyle:'none'}}>
          {infoList.map((info)=>(
            <li 
              key={info.id}
              onDoubleClick={()=>{deleteInfo(info.id)}}
            >
              {info.name} : {info.email}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
