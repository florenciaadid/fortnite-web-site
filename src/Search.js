import { useState, useEffect } from "react";

function Search() {
    const apiKey = 'd455e49a-81f32467-98254e27-23f136e0';
    const apiUrl = 'https://fortniteapi.io/v1/lookup?username=Ninja';

    const [accountId, setAccountId] = useState('');
    const fetchAccountId = async () => {
        const response = await fetch(`https://fortniteapi.io/v1/lookup?username=Floradid96`, {
            headers: {
                Authorization: 'd455e49a-81f32467-98254e27-23f136e0'
            }
        });
        const data = await response.json();
        console.log(data);
        const matches = data.matches || [];
        console.log(matches);
        const firstMatch = matches[0] || {};
        console.log(firstMatch);
        const accountId = firstMatch.accountId || '';
        console.log(accountId);
        setAccountId(accountId);

    };
    useEffect(() => {
        fetchAccountId();
    }, []);

    return (
        <div>
            <p>Account ID: {accountId}</p>
        </div>
    );


}

export default Search;





//SEARCH POR ID



// import { useState } from "react";
// import noImage from './assets/noImage.png'

// function Search() {
//   const apiKey = "eb545ec5-2071-4b4a-bac8-eed810daf620";
//   const apiUrl = "https://fortnite-api.com/v2/stats/br/v2";

//   const [searchTerm, setSearchTerm] = useState("");
//   const [playerStats, setPlayerStats] = useState(null);

//   const handleSearch = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch(`${apiUrl}/${searchTerm}`, {
//         headers: {
//           Authorization: apiKey,
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Player not found");
//       }

//       const data = await response.json();

//       setPlayerStats(data.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   //Copy button
//   const [copySuccess, setCopySuccess] = useState('');
//   const textToCopy = '78c16b18a7e04e4380546845dd0e87df';

//   const handleCopy = () => {
//     navigator.clipboard.writeText(textToCopy);
//     setCopySuccess('Copied!');
//   };

//   return (
//     <div>
//         <div>
//           <h2>ID's examples</h2>
//                 <h2>{textToCopy}  <button onClick={handleCopy}>Copy</button></h2>
//                 {copySuccess}
//          </div>
//       <form onSubmit={handleSearch}>
//         <label>
//           Player Name:
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(event) => setSearchTerm(event.target.value)}
//           />
//         </label>
//         <button type="submit">Search</button>
//       </form>

//       {playerStats && (
//         <>
//           <p>Player Name: {playerStats.account.name}</p>
//           <p>Player ID: {playerStats.account.id}</p>
//           <p>Battle Pass Level: {playerStats.battlePass.level}</p>             
//           <p>Battle Pass Progress: {playerStats.battlePass.progress}</p>
//             <img src={playerStats.image || noImage } alt={playerStats.account.name} />
//             {playerStats.stats.all.overall && Object.entries(playerStats.stats.all.overall).map(([key, value]) => (
//                         <p key={key}>{key}: {value}</p>
//                     ))}
//         </>
//       )}
//     </div>
//   );
// }

// export default Search;