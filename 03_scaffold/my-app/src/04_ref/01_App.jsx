import React, { PureComponent } from 'react'
import { createRef } from 'react'
export default class App extends PureComponent {
  constructor() {
    super()

    this.titleRef = createRef()
    this.titleEl = null
  }
  // 1.
  getNativeDOM() {
    // const h2EL = document.querySelector()
    // 2.
    // console.log(this.refs.why)

    // 3
    console.log(this.titleRef.current);
    console.log(this.titleEl);
    
  }

  render() {
    return (
      <div>
      <div>App</div>
      <h2 ref="why">Hello</h2>
      <h2 ref={this.titleRef}>Hello World!</h2>
      <h2 ref={el => {this.titleEl = el}}>Hello React</h2>
      <h2 onClick={e => this.getNativeDOM()}>Get DOM</h2>
      </div>
    )
  }
}
