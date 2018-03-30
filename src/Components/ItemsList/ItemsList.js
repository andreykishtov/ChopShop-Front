import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Item from '../Item/Item';

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

const ItemsList = ({ items }) => <StyledItemsList>{items.map(item => <Item item={item} />)}</StyledItemsList>;

const mapStateToProps = state => ({
  items: state.items.data
});

ItemsList.propTypes = {
  items: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(ItemsList);
