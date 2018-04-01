import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Item from '../Item/Item';
import Theme from '../../Theme/Theme';

const StyledItemsList = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 23% 23% 23% 23%;

  @media (max-width: ${Theme.narrowScreen}) {
    grid-template-columns: 31% 31% 31%;
  }

  @media (max-width: ${Theme.mobileWidth}) {
    grid-template-columns: 92%;
  }
`;

const ItemsList = ({ items }) => (
  /* eslint no-underscore-dangle: 0 */
  <StyledItemsList>{items.map(item => <Item {...item} key={item._id} />)}</StyledItemsList>
);

const mapStateToProps = state => ({
  items: state.items.data
});

ItemsList.propTypes = {
  items: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(ItemsList);
