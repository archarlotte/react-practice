import React, { Component } from 'react'
import TabContral from './TabContral'

export default class App extends Component {
  constructor () {
    super()

    this.state = {
      titles: ["popular","new song","recommend"],
      index:0
    }
  }
  showTabTitle(index){
    console.log(index)
    this.setState({index: index})
  }
  render() {
    return (
      <div>
        <TabContral titles={this.state.titles} show={(index)=>this.showTabTitle(index)}/>
        <h2>{this.state.titles[this.state.index]}</h2>
      </div>
    )
  }
}
