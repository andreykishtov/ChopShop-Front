import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

const Item = ({ _id, title, imageUrl }) => (
  <Link to={`/items/${_id}`} key={_id}>
    <Title>{title}</Title>
    <Image src={imageUrl} alt={title} />
  </Link>
);

Item.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default Item;
