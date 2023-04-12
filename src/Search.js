import { useState, useEffect } from "react";

function Search() {
    const apiKey = 'eb545ec5-2071-4b4a-bac8-eed810daf620';
    const apiUrl = 'https://fortnite-api.com/v2/stats/br/v2/78c16b18a7e04e4380546845dd0e87df';
  
    const [playerStats, setPlayerStats] = useState([]);
  
    useEffect(() => {
      fetch(apiUrl, {
        headers: {
          Authorization: apiKey
        }
      })
        .then(response => response.json())
        .then(data => setPlayerStats(data.data.account))
        .catch(error => console.error(error));
    }, []);
  
    return (
      <div>
        {playerStats && playerStats.name && (
          <>
            <p>Player Name: {playerStats.name}</p>
            <p>Player ID: {playerStats.id}</p>
          </>
        )}
      </div>
    );
  }
  

export default Search;
