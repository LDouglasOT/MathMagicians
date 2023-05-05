import React from 'react';
import PropTypes from 'prop-types';

function Keypad({ handleInput, placeholder }) {
  return (
    <button className="yellow-numbers" type="button" onClick={(e) => handleInput(e.target.textContent)} id="result">{placeholder}</button>
  );
}

Keypad.propTypes = {
  handleInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Keypad;
