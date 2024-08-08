// ref실습
import React, { useState, useRef } from 'react'

export default function Ref3() {
  const [posts, setPosts] = useState([]);
  const [writer,setWriter] = useState('');
  const [title,setTitle] = useState('');
  const inputRef = useRef();

  const addPosts =()=>{
    const newPosts = {
      id : posts.length+1,
      writer,
      title,
    }
    setPosts([...posts,newPosts]);
    setTitle('');
    setWriter('');
    inputRef.current.focus();
  }

  return (
    <div>
      <form>
        <label htmlFor="writer">작성자 : </label>
        <input type='text' value={writer} onChange={(e)=>{setWriter(e.target.value)}} ref={inputRef}/>
        <label htmlFor="title">제목 : </label>
        <input type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <button type='button' onClick={addPosts}>작성</button>
      </form>
      <table>
        <caption className='hide'>게시글 목록</caption>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map((post)=>(
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.writer}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
