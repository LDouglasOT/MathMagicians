import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quote }) {
  return (
    <div>{quote}</div>
  );
}
Quote.propTypes = {
  quote: PropTypes.string.isRequired,
};

export default Quote;
