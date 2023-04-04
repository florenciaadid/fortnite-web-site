import './App.css';
import React,{ useState, useEffect } from 'react';
import './news.scss'

function News() {
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch('https://fortnite-api.com/v2/news')
      .then(response => response.json())
      .then(json => setData(json.data.br.motds));
  }, []);

  const handlePrevious = () => {
    setCurrentSlide((currentSlide - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % data.length);
  };

  return (
    <div>
      <h1>Fortnite News</h1>
      {data.length > 0 && (
        <div>
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
          <img src={data[currentSlide].image} alt={data[currentSlide].title} />
          <p>{data[currentSlide].title}</p>
          <p>{data[currentSlide].body}</p>
        </div>
      )}
    </div>
  );
}

export default News;
