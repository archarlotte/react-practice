import React, { Component } from 'react'

export default class MainProductList extends Component {
  render() {
    const {productList} = this.props;
    return (
      <div>
      <div>MainProductList</div>
      <ul>
        {productList.map((item) => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>
    </div>
    )
  }
}
