import React from 'react'
import { useState } from 'react'

export default function Animal() {
  const [selectedAnimal, setSelectedAnimal] = useState('penguin');
  const handleChangeAnimal = (e) => {
    console.log(e);
    console.log(e.target.value);
  }
  
  return (
    <>
      <span>
        <label htmlFor="animal">동물 : </label>
        <select name="animal" id="animal" onChange={handleChangeAnimal}>
          <option value="penguin">펭귄</option>
          <option value="cat">고양이</option>
          <option value="dog">강아지</option>
          <option value="panda">팬더</option>
        </select>
      </span> 
    </>
  )
}
