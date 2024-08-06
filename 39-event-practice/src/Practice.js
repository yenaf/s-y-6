import React from 'react'
import { useState } from 'react'
import './Practice.css'

export default function Practice() {
  const [selectedAnimal, setSelectedAnimal] = useState('penguin');
  const [selectedBg, setSelectedBg] = useState('black');
  const [selectedTColor, setSelectedTColor] = useState('yellow');
  const [inputText, setInputText] = useState('안녕!');


  // 동물 사진 선택
  const handleChangeAnimal = (e) =>{
    setSelectedAnimal(e.target.value);
  }
  const getAnimalImg = () =>{
    switch (selectedAnimal) {
      case 'penguin': return '/images/penguin.jpg';
      case 'cat': return '/images/cat.jpg';
      case 'dog': return '/images/dog.jpg';
      case 'panda': return '/images/panda.jpg';
      default:
        return '';
    }
  }

  // 배경색 변경
  const handleChangeBg = (e) =>{
    setSelectedBg(e.target.value);
  }

  // 글자색 변경
  const handleChangeTColor = (e) =>{
    setSelectedTColor(e.target.value);
  }

  // input
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  // const handleInputBlur = ()=>{
  //   setTimeout(() => {
  //     setInputText('');
  //   }, 1000);
  // }

  const activeEnter=(e)=>{
    const inputContent = document.querySelector('input');
    if (e.key === 'Enter'){
      inputContent.value = '';
    }
  }

  return (
    <div>
      <h1>종합실습(props, state, event)</h1>
      <span>
        <label htmlFor="animal">동물 : </label>
        <select name="animal" id="animal" onChange={handleChangeAnimal}>
          <option value="penguin">펭귄</option>
          <option value="cat">고양이</option>
          <option value="dog">강아지</option>
          <option value="panda">팬더</option>
        </select>
      </span> 
      <span>
        <label htmlFor="bg">배경색 : </label>
        <select name="bg" id="bg" onChange={handleChangeBg}>
          <option value="black">검정</option>
          <option value="pink">핑크</option>
          <option value="red">빨강</option>
          <option value="yellow">노랑</option>
        </select>
      </span>
      <span>
        <label htmlFor="tColor">글자색 : </label>
        <select name="tColor" id="tColor" onChange={handleChangeTColor}>
          <option value="yellow">노랑</option>
          <option value="black">검정</option>
          <option value="pink">핑크</option>
          <option value="red">빨강</option>
        </select>
      </span>
      <div>
        <label htmlFor="fruit">내용 : </label>
        <input 
          type="text" 
          placeholder='내용을 입력하세요.' 
          value={inputText} 
          onChange={handleInputChange}
          onKeyDown={activeEnter}
          // onBlur={handleInputBlur}
        />
      </div>

      <div className='img'>
        <img src={getAnimalImg()} alt={selectedAnimal} />
      </div>
      <p style={{background : selectedBg, color : selectedTColor}}>{inputText}</p>
    </div>
  )
}
