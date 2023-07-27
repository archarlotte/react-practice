import React from 'react';

class MyApp extends React.Component {
  constructor() {
    super();

    this.state = {
      meesage: 'hello'
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.meesage}</h2>
      </div>
    )
  }
}

export default MyApp;