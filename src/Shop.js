import React,{ useState, useEffect } from 'react';
import ShopEntry from './ShopEntry';

function Shop() {
  const [entries, setData] = useState([]);

  useEffect(() => {
    fetch("https://fortnite-api.com/v2/shop/br")
      .then((response) => response.json())
      .then((data) => setData(data.data.featured.entries));
  }, []);

  return (
    <div>
    
    {entries.map((entry) => (
        <ShopEntry key={entry.offerId} entry={entry}/>
    ))}
  </div>
  );
}

export default Shop;