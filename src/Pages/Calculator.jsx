/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Keypad from '../components/Keypad';
import calculate from '../components/logic/calculate';
import Quote from '../components/Quote';

function Calculator() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [quote, setQuote] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingmessage, setLoadingmessage] = useState('Loading quote...........');

  const handleInput = (value) => {
    const result = calculate({ total, next, operation }, value);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  const getquote = async () => {
    try {
      setLoading(true);
      const apiKey = 'pfJAGEde3i4WWUdixGn67Q==tZMKuoN3cSMtKp04';
      const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: {
          'X-Api-Key': apiKey,
        },
      });
      if (response.status == 200) {
        setQuote(response.data[0].quote);
        setLoading(false);
      }
    } catch (err) {
      setLoading(true);
      setLoadingmessage(err.message);
    }
  };
  useEffect(() => {
    getquote();
  }, []);
  return (
    <div className="calculator-wrapper">
      <Quote quote={loading ? loadingmessage : quote} />
      <br/>
      <br/>
      <div className="app">
        <div className="keypad">
          <p className="result">{next || total || 0}</p>
          <div>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" id="clear">AC</button>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" id="backspace">+/-</button>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="/">&divide;</button>
            <Keypad handleInput={handleInput} placeholder="%" />
          </div>
          <div>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="7">7</button>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="8">8</button>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="9">9</button>
            <Keypad handleInput={handleInput} placeholder="x" />
          </div>
          <div>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="4">4</button>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="5">5</button>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="6">6</button>
            <Keypad handleInput={handleInput} placeholder="-" />
          </div>
          <div>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="1">1</button>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="2">2</button>
            <button className="numbers" onClick={(e) => handleInput(e.target.textContent)} type="button" name="3">3</button>
            <Keypad handleInput={handleInput} placeholder="+" />
          </div>
          <div>
            <button className="last-big-0" onClick={(e) => handleInput(e.target.textContent)} type="button" name="0">0</button>
            <button className="numbers" type="button" onClick={(e) => handleInput(e.target.textContent)} name=".">.</button>
            <Keypad handleInput={handleInput} placeholder="=" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
