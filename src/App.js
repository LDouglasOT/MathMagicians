/* eslint-disable */
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Calculator from './Pages/Calculator';
import Quote from './components/Quote';

function App() {
  const [quote, setQuote] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingmessage, setLoadingmessage] = useState('Loading quote...........');
  const getquote = async () => {
    try {
      setLoading(true);
      const apiKey = 'pfJAGEde3i4WWUdixGn67Q==tZMKuoN3cSMtKp04';
      const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness',{
        headers: {
          'X-Api-Key': apiKey
        }
      });
      if (response.status == 200) {
        console.log(response)
        setQuote(response.data[0].quote);
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message)
      setLoading(true);
      setLoadingmessage(err.message);
    }
  };
  useEffect(() => {
    getquote();
  }, []);
  return (
    <div className="main-wrapper">
      <Quote quote={loading ? loadingmessage : quote} />
      <Calculator />
    </div>
  );
}

export default App;
