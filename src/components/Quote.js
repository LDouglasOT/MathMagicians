import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quote() {
  const [quote, setQuote] = useState(0);
  const [loading, setLoading] = useState(true);
  const getquote = async () => {
    try {
      setLoading(true);
      const apiKey = 'pfJAGEde3i4WWUdixGn67Q==tZMKuoN3cSMtKp04';
      const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: {
          'X-Api-Key': apiKey,
        },
      });
      if (response.status === 200) {
        setQuote(response.data[0].quote);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getquote();
  }, []);

  if (loading) {
    return <div>Loading quote of the day..........</div>;
  }

  return (
    <div>
      {quote}
      <br />
      <br />
    </div>
  );
}

export default Quote;
