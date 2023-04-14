import { useState } from "react";
import noImage from './assets/noImage.png'

function Search() {
  const apiKey = "eb545ec5-2071-4b4a-bac8-eed810daf620";
  const apiUrl = "https://fortnite-api.com/v2/stats/br/v2";

  const [searchTerm, setSearchTerm] = useState("");
  const [playerStats, setPlayerStats] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/${searchTerm}`, {
        headers: {
          Authorization: apiKey,
        },
      });

      if (!response.ok) {
        throw new Error("Player not found");
      }

      const data = await response.json();

      setPlayerStats(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  //Copy button
  const [copySuccess, setCopySuccess] = useState('');
  const textToCopy = '78c16b18a7e04e4380546845dd0e87df';

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopySuccess('Copied!');
  };

  return (
    <div>
        <div>
          <h2>ID's examples</h2>
                <h2>{textToCopy}  <button onClick={handleCopy}>Copy</button></h2>
                {copySuccess}
         </div>
      <form onSubmit={handleSearch}>
        <label>
          Player Name:
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {playerStats && (
        <>
          <p>Player Name: {playerStats.account.name}</p>
          <p>Player ID: {playerStats.account.id}</p>
          <p>Battle Pass Level: {playerStats.battlePass.level}</p>             
          <p>Battle Pass Progress: {playerStats.battlePass.progress}</p>
            <img src={playerStats.image || noImage } alt={playerStats.account.name} />
            {playerStats.stats.all.overall && Object.entries(playerStats.stats.all.overall).map(([key, value]) => (
                        <p key={key}>{key}: {value}</p>
                    ))}
        </>
      )}
    </div>
  );
}

export default Search;