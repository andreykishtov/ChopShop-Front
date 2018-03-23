import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount = async () => {
    try {
      await this.props.getItems();
      this.setState({ special });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return <div className="App">Hi I am Site</div>;
  }
}

export default App;
