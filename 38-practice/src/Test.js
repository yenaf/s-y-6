// props 실습 3
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Test extends Component {
  render(props) {
    const {text, valid} = this.props;
    return (
      <div>
        <h2>{text}</h2>
        <button onClick={()=>{console.log(valid);}}>콘솔 메세지</button>
      </div>
    )
  }

  static defaultProps ={
    text : '이건 기본 text props입니다',
  }

  static propTypes = {
    text : PropTypes.string.isRequired,
  }
}

