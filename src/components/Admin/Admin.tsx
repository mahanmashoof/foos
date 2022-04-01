import db from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { countriesDropdown, groupsDropdown, playersDropdown } from "../../helpers/dropdowns";
import { useGetTeams } from "../../hooks/api/useApi";

const Admin = () => {

  //Add a team
  const [name, setName] = useState("");
  const [flagUrl, setFlagUrl] = useState("");
  const [player1, setPlayer1] = useState('');
  const [player1Card, setPlayer1Card] = useState('');
  const [player2, setPlayer2] = useState('');
  const [player2Card, setPlayer2Card] = useState('');
  const [group, setGroup] = useState('');

  const addTeam = async () => {
    await addDoc(collection(db, "teams"), {
      name: name,
      flagUrl: flagUrl,
      players: {
        player1: {
          name: player1,
          cardUrl: player1Card,
        },
        player2: {
          name: player2,
          cardUrl: player2Card,
        },
      },
      group: group,
      wins: 0,
      goalsMade: 0,
      goalsAgainst: 0,
    })
      .then(() => {
        alert(`${name} added`);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const { data: teams } = useGetTeams()
  console.log(teams)

  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Admin page</h1>
        <h3>Add Team</h3>
        <label htmlFor="countries">Countries:</label>
        <select id="countries" onChange={(e) => { setName(e.target.value); setFlagUrl(`flags/${e.target.value}.png`) }}>
          {countriesDropdown.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label htmlFor="group">Group:</label>
        <select id="group" onChange={(e) => setGroup(e.target.value)}>
          {groupsDropdown.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label htmlFor="player1">Player 1:</label>
        <select id="player1" onChange={(e) => { setPlayer1(e.target.value); setPlayer1Card(`player-cards/${e.target.value}.png`) }}>
          {playersDropdown.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label htmlFor="player2">Player 2:</label>
        <select id="player2" onChange={(e) => { setPlayer2(e.target.value); setPlayer2Card(`player-cards/${e.target.value}.png`) }}>
          {playersDropdown.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button onClick={addTeam}>add team</button>
      </div>
    </div>
  );
};

export default Admin;
