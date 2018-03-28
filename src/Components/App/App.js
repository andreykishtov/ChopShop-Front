import React, { Component } from 'react';
import { connect } from 'react-redux';

import { itemsRequest } from '../../Store/actions/items';
import ItemsList from '../ItemsList/ItemsList';

class App extends Component {
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
        <ItemsList />
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
