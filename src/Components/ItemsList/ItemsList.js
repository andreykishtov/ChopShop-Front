import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from '../Item/Item';
import styled from 'styled-components';

const StyledItemsList = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 23% 23% 23% 23%;

  @media (max-width: 768px) {
    grid-template-columns: 31% 31% 31%;
  }

  @media (max-width: 544px) {
    grid-template-columns: 92%;
  }
`;

class ItemsList extends Component {
  constructor(props) {
    super();
  }

  render() {
    return <StyledItemsList>{this.props.items.map(item => <Item item={item} />)}</StyledItemsList>;
  }
}

const mapStateToProps = state => ({
  items: state.items.data
});

export default connect(mapStateToProps)(ItemsList);
