import React, { Component } from 'react'

export default class LifeCycleClassChild extends Component {
  componentDidMount(){
    console.log('컴포넌트 마운트💙');
    // 렌더링되고 실행해야하는게 생겼을때
  }
  componentDidUpdate(){
    console.log('컴포넌트 업데이트💚');
  }
  componentWillUnmount(){
    console.log('컴포넌트 언마운트🧡');
    // 예를들면 로그아웃할때
  }
  render() {
    return (
      <div>
        자식컴포넌트
        <p>현재 number 값은 {this.props.number}</p>
      </div>
    )
  }
}
