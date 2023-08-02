import React, { Component } from 'react'
import AddCounter from './AddCounter'

export default class App extends Component {
  constructor () {
    super()

    this.state = {
      count: 100
    }
  }
  add(count){
    this.setState({count: this.state.count + count})
  }
  render() {
    const {count} = this.state;
    return (
      <div>
        <h2>{count}</h2>
        <AddCounter add={(count)=>this.add(count)}/>
      </div>
    )
  }
}
