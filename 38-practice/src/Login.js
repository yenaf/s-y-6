// jsx 실습 4

import React from 'react'

export default function Login() {
  return (
    <div className="login">
      <h2>
        Hello World
      </h2>
      <div>
        <label htmlFor=''>아이디 : </label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor=''>비밀번호 : </label>
        <input type="password" />
      </div>
    </div>
  )
}
