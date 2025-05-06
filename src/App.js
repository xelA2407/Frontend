import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;

    fetch(`${apiUrl}/hello`)
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => {
        console.error('Error fetching:', err);
      });
  }, []);

  return (
    <div>
      <h1>AI Learning App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
