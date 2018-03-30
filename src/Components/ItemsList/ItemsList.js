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

<<<<<<< HEAD
const ItemsList = ({ items }) => <StyledItemsList>{items.map(item => <Item item={item} />)}</StyledItemsList>;
=======
class ItemsList extends Component {
  constructor(props) {
    super();
  }

  render() {
    return <StyledItemsList>{this.props.items.map(item => <Item item={item} />)}</StyledItemsList>;
  }
}
>>>>>>> 88e08b9b2c51639683a23dc0e4f15990fd054093

const mapStateToProps = state => ({
  items: state.items.data
});

<<<<<<< HEAD
ItemsList.propTypes = {
  items: PropTypes.array.isRequired
};

=======
>>>>>>> 88e08b9b2c51639683a23dc0e4f15990fd054093
export default connect(mapStateToProps)(ItemsList);
