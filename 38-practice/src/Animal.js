// jsx 실습1

import React from 'react'

export default function Animal() {
  const cute = "color";
  const animal = "cat";
  return (
    <div>
      제 반려동물의 이름은 {cute}입니다.<br></br>
      {cute}은(는) {animal}입니다.
   </div>
  )
}
