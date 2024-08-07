// map을 이용한 알파벳나열과 input입력값 추가하기
import React, { useState } from 'react'

export default function Alpahbet2() {
  // const [alpahbet, setAlpahbet] = useState(['b','a','n','a','n','a']);

  // 배열 안에는 객체 형태 ex
  const [alpahbet, setAlpahbet] = useState([
    {
      id:1,
      alpha:'b',
    },
    {
      id:2,
      alpha:'a',
    },
    {
      id:3,
      alpha:'n',
    },
    {
      id:4,
      alpha:'a',
    },
  ])

  const [inputAlpha, setInputAlpha] = useState('');

  const addAlpha = () =>{
    // Q. input이 빈값이라면 alphabet 상태가 변경되지 않도록 하기
    if(inputAlpha.trim().length === 0){
      return;
    }

    // * concat
    // - 기존 배열을 변경하지 않고, 주어진 배열이나 값들을 새로운 배열로 결합하여 반환.
    // ex)
    // let arr1 = [1,2,3];
    // let arr2 = [5,6,7];
    // let arr3 = arr1.concat(arr2);
    // console.log(arr3); // [1,2,3,5,6,7];

    const newAlpha = alpahbet.concat({
      id : alpahbet.length + 1,
      alpha : inputAlpha,
    });
    setAlpahbet(newAlpha);
    setInputAlpha('');//입력값 초기화
  }

  // Q ) input에서 enter키 누르면 추가되도록하기 e.key또는 e.code
  const activeEnter = (e)=>{
    if(e.key === 'Enter'){
      console.log(e);
      addAlpha();
    }

    if(e.keyCode === 13){}
  }

  // 글자삭제
  const deleteAlpha = (targetId)=>{
    console.log(targetId); // targetId : 삭제될 요소의 id = value.id
    const newAlpha = alpahbet.filter((alpha)=>alpha.id !== targetId);
    setAlpahbet(newAlpha);
  }

  return (
    <div>
      <h1>map & filter</h1>

      {/* return 키워드 x, 중괄호 x */}
      {/* <ol>
        {alpahbet.map((value, index)=>(
          <li key={index}>{value}</li>
        ))}
      </ol>*/}

      {/* return 키워드 o */}
      {/*<ol>
      
        {alpahbet.map((value, index)=>{
          return <li key={index}>{value}</li>
        })}
      </ol> */}

      {/* 객체 ex */}
      <ol>
        {alpahbet.map((value)=>(
          <li key={value.id}>{value.alpha}</li>
        ))}
      </ol>
      <input 
        type='text' 
        placeholder='알파벳 입력'
        value={inputAlpha}
        onChange={(e)=>{
          setInputAlpha(e.target.value);
        }}
        onKeyDown={(e)=>{
          activeEnter(e);
        }}
      />
      <button 
        onClick={addAlpha}
      >추가</button>

      <hr/>
      {/* 알파벳 삭제해보기 */}
      <ol>
        {alpahbet.map((value)=>(
            <li 
              key={value.id}
              onDoubleClick={()=>{
                deleteAlpha(value.id)
              }}
              style={{cursor:'pointer'}}
            >
              {value.alpha}
            </li>
          ))}
      </ol>
    </div>
  )
}
