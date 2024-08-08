// map & filter를 활용한 실습 4
// 작성자와 제목을 입력하면 테이블에 추가 되도록 하기
// 제목과 작성자를 선택하고 검색어를 입력하면 테이블중에 해당하는 검색결과 출력하기
import React, { useState } from 'react'
import  './Prac1.css'

export default function Prac1() {
  const [posts, setPosts] = useState([]);
  const [writer,setWriter] = useState('');
  const [title,setTitle] = useState('');
  const [searchCategory,setSearchCategory]=useState('writer');
  const [searchInput,setSearchInput] = useState('')
  const [filteredPosts, setFilteredPosts] = useState([]);

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
  
  function handleSearch(e) {
    e.preventDefault();
    const filterPost = posts.filter((post) => {
      if (searchCategory === 'writer') {
        return post.writer.toLowerCase().includes(searchInput.toLowerCase());
      } else if (searchCategory === 'title') {
        return post.title.toLowerCase().includes(searchInput.toLowerCase());
      }
      return false;
    });
    setFilteredPosts(filterPost);
    setSearchInput('');
  }
  
  const activeSearchEnter = (e)=>{
    if(e.key === 'Enter'){
      handleSearch(e);
    }
  }

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
          value={searchInput}
          onChange={(e)=>{setSearchInput(e.target.value)}}
          onKeyDown={(e)=>{activeSearchEnter(e)}}
        />
        <button 
          type="button"
          onClick={handleSearch}
        >검색</button>
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

      {filteredPosts.length > 0 ? (
        <>
          <h3>검색 결과</h3>
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.writer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
        ):(
          <div className='not'>
            <h3>검색 결과</h3>
            <p>검색 결과가 없습니다.</p>
          </div>
        )
      }
      
    </div>
  )
}
