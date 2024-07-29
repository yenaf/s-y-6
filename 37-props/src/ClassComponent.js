// render() 함수 필수
// return에 실제로 보여주고 싶은 html 요소를 작성

import PropTypes from 'prop-types';
import React from 'react';
// ** 이렇게도 가능하다.
// import {Component} from 'react';
// class ClassComponent extends Component
class ClassComponent extends React.Component {
  // 클래스 인스턴스 속성, 키워드 없이 정의! (let, const, var)
  // 클래스 메서드 내 어디서든 this.키워드로 접근할 수 있다.
  student = '홍길동';
  render(){
    const teacher = 'Damon';
    const {name} = this.props;
    // console.log('props: ', this.props);//name: "yena"
    return(
      <>
      <h1>Hello, {teacher}</h1>
      <h1>Hi, {this.student}</h1>
      <p>Class Component!</p>
      <p>
        {/* 이름은 <b>{this.props.name}</b> */}
        이름은 <b>{name}</b>
      </p>
      </>
    )
  }
  static defaultProps = {
    name: '춘향전',
  }

  static propTypes = {
      name: PropTypes.string,
  }
}




// ClassComponent.defaultProps = {
//     name: '기본 이름',
// }

// ClassComponent.propTypes = {
//     name: PropTypes.string,
// }





export default ClassComponent;

// props 작성법
// 부모가 자식한테 주는것(단방향, 무조건 부모에서 자식으로만)
// 1. 부모쪽에 <자식컴포넌트 작명={줄내용}>
// 2. 자식쪽에 Function(props){
//    <h1>props.작명</h1>
// }

