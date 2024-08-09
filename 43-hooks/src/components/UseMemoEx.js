import React, {useState,useMemo} from 'react'


// useMemo
// 메모이제이션으로 수행한 연산의 결과값을 기억함으로써 불필요한 연산 최소화

export default function UseMemoEx() {
  const [count,setCount] = useState(0);
  const [input,setInput]  = useState('');

  // [before]
  const calc = ()=>{
    console.log('열심히 계산중..계속일함');
    for(let i=0;i<100000;i++){} //시간 소모적인 작업
    return count**2;
  }
  // 입력값을 입력할때마다 재 렌더링 되면서 계속해서 calc함수를 계산한다. 
  // 만약 오래걸리는 함수라면 엄청 버벅되겠지?

  // [after]
  const calcMemo = useMemo(() => {
    console.log('열심히 계산중..📝');
    for(let i=0;i<100000;i++){} //시간 소모적인 작업
    return count**2;
  }, [count]);
  // count의 값이바뀔때에만 함수를 실행해 주세요
  // input 상태가 바뀌면 컴포넌트는 리렌더링 되지만 calc는 연산되지않음
  // ->>재렌더링 되더라도 연산안되니까->최적화 위한 훅(기록해놓고 반복작업 안해겠다)

  return (
    <div>
      <h1>UseMemoEx</h1>
      <input type='text'
        value={input}
        onChange={(e)=>{
          setInput(e.target.value);
        }}
      />
      <button onClick={()=>{setCount(count+1)}}>+1</button>
      <p>{count}</p>

      {/* [before] */}
      <p>calc : {calc()}</p>

      {/* [after] */}
      <p>calcMemo : {calcMemo}</p>
    </div>
  )
}
