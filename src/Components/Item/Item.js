import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Theme from '../../Theme/Theme';

const Title = styled.p`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${Theme.fontColor};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

class Item extends Component {
  render() {
    console.log(this.props);
    return (
      <Link to={`/items/${this.props.item._id}`} key={this.props.item._id}>
        <Title>{this.props.item.title}</Title>
        <Image src={this.props.item.imageUrl} alt={this.props.item.title} />
      </Link>
    );
  }
}

export default Item;
