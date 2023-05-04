import React from 'react';

function Calculator() {
  const handleInput = (value) => value;
  return (
    <div className="calculator-wrapper">
      <div className="app">
        <div className="keypad">
          <p className="result">{0 || 0 || 0}</p>
          <div>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" id="clear">AC</button>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" id="backspace">+/-</button>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="/">&divide;</button>
            <button className="yellow-numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="/">%</button>
          </div>
          <div>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="7">7</button>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="8">8</button>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="9">9</button>
            <button className="yellow-numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="*">x</button>
          </div>
          <div>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="4">4</button>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="5">5</button>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="6">6</button>
            <button className="yellow-numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="-">-</button>
          </div>
          <div>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="1">1</button>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="2">2</button>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="3">3</button>
            <button className="yellow-numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="+">+</button>
          </div>
          <div>
            <button className="last-big-0" onClick={(e) => handleInput(e.target.textContent)} type="button" name="0">0</button>
            <button className="numbers" type="button" onClick={(e) => handleInput(e.target.textContent)} name=".">.</button>
            <button className="yellow-numbers" type="button" onClick={(e) => handleInput(e.target.textContent)} id="result">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
