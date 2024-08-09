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

/**
 * 1. deleteAlpha(value.id)의 의미
 * 
 * 해석 : deleteAlpha 함수를 즉시 실행하고, 그 결과값을 반환한다는 뜻.
 * 반환된 결과값이 onDoubleClick에 전달.
 * 삭제 로직일 뿐, 반환값이 없기 때문에 undefined일 확률이 높다. 
 * ->바로실행은 더블클릭했을때가 아니고 렌더링 되고 바로 실행되는겁니다.
 * 
 * 즉시 실행: 컴포넌트가 랜더링 되는 시점에 deleteAlpha(value.id)가 바로 실행된다.
 * value.id라는 인자를 함수에 전달하면서 함수를 실행.
 * 
 * 2. () => deleteAlpha(value.id)의 의미
 * 해석 : deleteAlpha(value.id)라는 함수 호출을 나중에 실행하도록 준비해둔 "함수 참조"이다.
 * 
 * 나중에 실행: 컴포넌트가 렌더링될 때 이 함수는 실행되지 않고, 이벤트가 발생할 때만 실행된다.
 * value.id라는 인자가 이벤트가 발생할 때, deleteAlpha 함수에 전달되면서 실행된다.
 * 필요성: 인자를 넘겨주는 함수 호출을 연기하기 위해 화살표 함수, 즉 콜백 함수 형태로 작성해야 합니다.
 * 
 * 3. deleteAlpha 함수 호출에서 인자 없이 사용하면?
 * 해석 : 그냥 deleteAlpha 라고만 작성 할 수 있음.
 * 이 경우에도 함수는 참조로서 전달됨.
 * 인자를 넘겨줄 필요가 없으므로, 화살표 함수로 감쌀 필요도 없습니다.
 * 
 * ** 요약
 * deleteAlpha(value.id)는 즉시 실행을 의미.
 * () => deleteAlpha(value.id)는 이벤트 발생 시 실행을 의미, 인자를 넘겨줄 때 사용.
 * 인자가 필요 없으면: 그냥 함수 이름(deleteAlpha)만 전달.
 */