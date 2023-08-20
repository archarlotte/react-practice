import React, { Component } from 'react'
import "./style.css"

export default class TabContral extends Component {
  constructor(){
    super()

    this.state = {
      currentIndex:0
    }
  }
  switchTab(index){
    this.props.show(index)
    this.setState({currentIndex: index})
  }
  render() {
    const {titles} = this.props;
    const {currentIndex} = this.state;
    return (
      <div className='tab-control'>
        {
        titles.map((item,index)=>{
          return (
            <div className={`item ${currentIndex === index && 'active'}`} key={item} onClick={()=>this.switchTab(index)}>
              <span className='text'>{item}</span>
            </div>
          )
        })
        }
      </div>
    )
  }
}
