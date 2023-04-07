import React,{ useState, useEffect } from 'react';

function Shop() {
  const [entries, setData] = useState([]);

  useEffect(() => {
    fetch("https://fortnite-api.com/v2/shop/br")
      .then((response) => response.json())
      .then(d => {
        console.log(d)
        return d
      })
      .then((data) => setData(data.data.featured.entries));
  }, []);

  return (
    <div>
    
    {entries.map((entry) => (
      <div>
   
            
      </div>

    ))}
  </div>
  );
}

export default Shop;