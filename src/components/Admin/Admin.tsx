import db from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { countriesDropdown, groupsDropdown, playersDropdown } from "../../helpers/dropdowns";
import { useGetTeams } from "../../hooks/api/useApi";
import { APITeam } from "../../models/api/APIGroups";
import { GroupInfo } from "../../types/types";

const Admin = () => {

  //--- Add a team
  const [name, setName] = useState("");
  const [flagUrl, setFlagUrl] = useState("");
  const [player1, setPlayer1] = useState('');
  const [player1Card, setPlayer1Card] = useState('');
  const [player2, setPlayer2] = useState('');
  const [player2Card, setPlayer2Card] = useState('');
  const [group, setGroup] = useState('');

  const addTeam = async () => {
    await setDoc(doc(db, "teams", name), {
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
    })
      .then(() => {
        alert(`${name} added`);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  // ---

  const { data: teams } = useGetTeams()

  const numberOfGamesPerGroup = (group: APITeam[]) => {
    return group && group.length > 0 ? (group.length - 1) * group.length / 2 : 0
  }

  const [allGroups, setAllGroups] = useState<GroupInfo[]>([])

  useEffect(() => {
    if (teams.length === 0) return
    let allGroups: GroupInfo[] = []
    for (let i = 1; i < groupsDropdown.length; i++) {
      const group: APITeam[] = teams.filter((team) => team.group === groupsDropdown[i])
      allGroups.push([groupsDropdown[i], group, numberOfGamesPerGroup(group)])
    }
    setAllGroups(allGroups)
  }, [teams])

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
      {allGroups &&
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          {allGroups.map((group, i) =>
            <div key={i}>
              <div>{group[0]}</div>
              {group[1].map((team, i) => (
                <div key={i}>{team.name}</div>
              ))
              }
              <hr />
              <div>Games played in this group: {group[2]}</div>
            </div>
          )}
        </div>}
    </div>
  );
};

export default Admin;
