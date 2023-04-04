import './App.css';
import { useState, useEffect } from 'react';

function News() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fortnite-api.com/v2/news')
      .then(response => response.json())
      .then(json => setData(json.data.br.motds));
  }, []);

  return (
    <div>
      <h2>NEWS</h2>
      <ul>
        {data.map(motd => (
          <li key={motd.id}>{motd.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default News;
