import React, { Component } from 'react'
import LifeCycleClassChild from './LifeCycleClassChild';

export default class LifeCycleClass extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
      number : 0,
      visivle:true,
    };
  }

  changeNumberState = () => this.setState({number : this.state.number+1})
  changeVisibleState = () => this.setState({visible : !this.state.visible})
  render() {
    return (
      <div>
        <button onClick={this.changeNumberState}>plus</button>
        <button onClick={this.changeVisibleState}>on / off</button>
        {
          this.state.visible && (
            <LifeCycleClassChild number={this.state.number}/>
          )
        }
      </div>
    )
  }
}
