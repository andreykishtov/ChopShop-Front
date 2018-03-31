import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { itemsRequest } from '../../Store/actions/items';
import ItemsList from '../ItemsList/ItemsList';
import NavBar from '../NavBar/NavBar';

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
        <NavBar />
        <ItemsList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(itemsRequest)
});

const mapStateToProps = state => ({
  items: state.items
});

App.propTypes = {
  getItems: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
