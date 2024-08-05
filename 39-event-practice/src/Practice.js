import React from 'react'

export default function Practice() {
  
  return (
    <div>
      <h1>종합실습(props, state, event)</h1>
      <span>
        <label for="fruit">과일 : </label>
        <select name="fruit" id="fruit">
          <option value="">사과</option>
          <option value="">배</option>
          <option value="">포도</option>
          <option value="">딸기</option>
        </select>
      </span>
      <span>
        <label for="bg">배경색 : </label>
        <select name="bg" id="bg">
          <option value="">검정</option>
          <option value="">핑크</option>
          <option value="">빨강</option>
          <option value="">노랑</option>
        </select>
      </span>
      <span>
        <label for="tColor">글자색 : </label>
        <select name="tColor" id="tColor">
          <option value="">검정</option>
          <option value="">핑크</option>
          <option value="">빨강</option>
          <option value="">노랑</option>
        </select>
      </span>
      <span>
        <label for="fruit">내용 : </label>
        <input type="text" placeholder='내용을 입력하세요.'/>
      </span>

      <img src="" alt="" />
      <p></p>
    </div>
  )
}
