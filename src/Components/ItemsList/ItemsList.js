import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ItemsList extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log(this.props);

    let itemsArr = this.props.items.map((item, index) => {
      return (
        <Link to={`/items/${item._id}`} key={item._id}>
          <p>{item.title} </p>
          <img src={item.imageUrl} alt={item.title} />
        </Link>
      );
    });

    return <div>{itemsArr}</div>;
  }
}

const mapStateToProps = state => ({
  items: state.items.data
});

export default connect(mapStateToProps)(ItemsList);
