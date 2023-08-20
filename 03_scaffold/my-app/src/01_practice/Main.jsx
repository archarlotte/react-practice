import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'

export default class Main extends Component {
  constructor () {
    super()

    this.state = {
      banners: ['new song', "new MV"],
      productList: ["recommendation", "popular products"]
    }
  }
  render() {
    const {banners, productList} = this.state;
    return (
      <div>
        <div>Main</div>
        <MainBanner banners={banners} />
        <MainProductList productList={productList} />
      </div>

    )
  }
}
