// props 실습2

import React from 'react';
import './BestSeller.css';

export default function BestSeller(props) {
  const {title, author, price, type, src} = props
  return (
    <div className='best'>
      <h2>
        이번주 베스트 셀러
      </h2>
      <img src={src} alt={title} />
      <p>{title}</p>
      <span>저자 : {author}</span>
      <span>판매가 : {price}</span>
      <span>구분 : {type}</span>
    </div>
  )
}