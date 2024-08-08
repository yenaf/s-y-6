// map & filter를 활용한 실습 3
// 작성자와 제목을 입력하면 테이블에 추가 되도록 하기

import React, { useState } from 'react'
import  './Prac1.css'

export default function Prac1() {
  const [posts, setPosts] = useState([]);
  const [writer,setWriter] = useState('');
  const [title,setTitle] = useState('');
  const [searchCategory,setSearchCategory]=useState('writer');
  const [searchInput,setSearchInput] = useState('')


  function addPosts(){
    if(writer && title){
      const newPost = {
        id : posts.length +1,
        writer,
        title,
      }
      setPosts([...posts,newPost]);
      setWriter('');
      setTitle('');
    }else{
      alert('아무것도 작성하지 않으셨네요!');
    }
  }

  const activeEnter = (e)=>{
    if(e.key === 'Enter'){
      addPosts();
    }
  }

  function handleSearch() {
    const filterPost = posts.filter((post) => {
      if (searchCategory === 'writer') {
        return post.writer.toLowerCase().includes(searchInput.toLowerCase());
      } else if (searchCategory === 'title') {
        return post.title.toLowerCase().includes(searchInput.toLowerCase());
      }
      return true; // 기본적으로 모든 포스트를 반환
    });
    return filterPost;
  }

  const filteredPosts = handleSearch();


  return (
    <div>
      <form>
        <fieldset>
          <label htmlFor="writer">작성자 : </label>
          <input type="text" id='writer'
            value={writer}
            onChange={(e)=>{setWriter(e.target.value)}}

          />
          <label htmlFor="title">제목 : </label>
          <input type="text" id='title'
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            onKeyDown={(e)=>{activeEnter(e)}}
          />
          <button 
            type="button"
            onClick={addPosts}
          >
            작성
          </button>
        </fieldset>
      </form>
      <form>
        <select 
          name="searchCategory" 
          id="searchCategory" 
          onChange={(e)=>{
            setSearchCategory(e.target.value)}}
        >
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input type="search" placeholder="검색어" 
          onChange={(e)=>{setSearchInput(e.target.value)}}
        />
        <button 
          type="button"
          onClick={handleSearch}
        >검색</button>
      </form>

      {/* <table>
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
      </table> */}

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
            filteredPosts.map((post)=>(
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
