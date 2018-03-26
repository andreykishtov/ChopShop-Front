import React, { Component } from 'react';
import { connect } from 'react-redux';

import { itemsRequest } from '../../Store/actions/items';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount = async () => {
    try {
      await this.props.getItems();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <p>Test</p>
        <div className="App">Hi I am Site</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(itemsRequest())
});

const mapStateToProps = state => ({
  items: state.items
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
