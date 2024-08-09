import React, {useState,useCallback,useEffect} from 'react'
import axios from 'axios';

export default function UseCallbackEx2({postId}) {
  const [post, setPost] = useState({});


  // [before]
  // useEfect 의존성 배열에 함수() 넣었을때
  // 컴포넌트가 리랜더링 -> 함수재생성(주소값변경)-> getPost 재호출

  // const getPost = async () => {
  //   console.log('data fetching...');
  //   const res= await axios.get('https://jsonplaceholder.typicode.com/posts/2');
  //   setPost(res.data);
  // }
  
  // useEffect(() => {
  //   getPost();
  // },[getPost])
  

  // [after]
  // useCallback 훅으로 메모이제이션 => 의존성 배열에 있는 postId가 변경되지 않는한
  // 컴포넌트는 리랜더링 되지않음
  // 자식컴포넌트한테 프롭스를 전달할때 유용
  // 필요한 순간에만 api요청을 날린다

  const getPost = useCallback(async ()=>{
    console.log('data fetching...');
    const res= await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    setPost(res.data);
  },[postId])

  useEffect(() => {
    getPost();
  },[getPost]);

  return (
    <div>
      <h2>UseCallbackEx2</h2>
      {post.id ? post.title : '로딩중...' }
      <br/>
    </div>
  )
}
