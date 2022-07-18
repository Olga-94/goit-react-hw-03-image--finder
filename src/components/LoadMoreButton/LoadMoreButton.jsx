import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './LoadMoreButton.styled';

export const LoadMoreButton = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      Load more
    </Button>
  );
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func,
};
