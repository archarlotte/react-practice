import React, { Component } from 'react'

export default class AddCounter extends Component {
  addCount (count) {
    console.log(count)
    this.props.add(count)
  }
  render() {
    return (
      <div>
        <button onClick={()=> this.addCount(1)}>+1</button>
        <button onClick={()=> this.addCount(5)}>+5</button>
        <button onClick={()=> this.addCount(10)}>+10</button>
      </div>
    )
  }
}
