import React, { Component } from 'react'

export default class MainBanner extends Component {
  constructor (props) {
    super(props)
  }
  
  render() {
    const {banners} = this.props;
    
    return (
      <div>
        <div>MainBanner</div>
        <ul>
          {banners.map((item,index) => {
            return (
              <li key={item.acm}>{item.title}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}
