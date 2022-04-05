import db from "../../firebase";
import { setDoc, doc, deleteDoc, collection, addDoc } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { countriesDropdown, groupsDropdown, playersDropdown } from "../../helpers/Dropdown";
import { useGetGames, useGetTeams } from "../../hooks/api/useApi";
import { APITeam } from "../../models/api/APIGroups";
import { GroupInfo } from "../../types/types";
import { GameStatus } from "../../types/enums";
import { fiveTeamsGroup, fourTeamsGroup, threeTeamsGroup } from "../../helpers/GroupGames";

const Admin = () => {

  const [name, setName] = useState("");
  const [flagUrl, setFlagUrl] = useState("");
  const [flagUrl2, setFlagUrl2] = useState("");
  const [player1, setPlayer1] = useState('');
  const [player1Card, setPlayer1Card] = useState('');
  const [player2, setPlayer2] = useState('');
  const [player2Card, setPlayer2Card] = useState('');
  const [group, setGroup] = useState('');
  const [team1Name, setTeam1Name] = useState('');
  const [team2Name, setTeam2Name] = useState('');

  //--- Add a team
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

  // --- Remove a team
  const deleteTeam = async (team: string) => {
    if (window.confirm(`are you sure you want to delete ${team}?`)) {
      await deleteDoc(doc(db, "teams", team))
    }
  }
  // ---

  /*   //--- Add a game
    const addGame = async () => {
      await addDoc(collection(db, "games"), {
        group: group,
        status: GameStatus.NOT_PLAYED,
        team1: {
          name: team1Name,
          flagUrl: flagUrl,
          goals: 0,
        },
        team2: {
          name: team2Name,
          flagUrl: flagUrl2,
          goals: 0,
        },
      })
        .then(() => {
          alert(`${team1Name} - ${team2Name} added`);
        })
        .catch((err) => console.log(err));
    };
    // --- */

  const [separatedGroup, setSeparatedGroup] = useState<string[]>([])

  useEffect(() => {
    setSeparatedGroup(teams.filter(team => team.group === group).map(team => team.name))
  }, [teams, group])

  let gameCreationArray = [[0, 0]]
  switch (separatedGroup.length) {
    case 3:
      gameCreationArray = threeTeamsGroup
      break;
    case 4:
      gameCreationArray = fourTeamsGroup
      break;
    case 5:
      gameCreationArray = fiveTeamsGroup
      break;
  }

  const groupGameCombo = gameCreationArray.map((combo) => (
    [separatedGroup[combo[0]], separatedGroup[combo[1]]]
  ))

  const gameId = teams.length.toString()

  //--- Add a game
  const addGame = async (teamName1: string, teamName2: string) => {
    await setDoc(doc(db, "games", gameId), {
      group: group,
      status: GameStatus.NOT_PLAYED,
      team1: {
        name: teamName1,
        flagUrl: `flags/${teamName1}.png`,
        goals: 0,
      },
      team2: {
        name: teamName2,
        flagUrl: `flags/${teamName2}.png`,
        goals: 0,
      },
    })
      .then(() => {
        alert(`${teamName1} - ${teamName2} added`);
      })
      .catch((err) => console.log(err));
  };
  // ---

  const createGames = () => {
    groupGameCombo.forEach((combo) => {
      addGame(combo[0], combo[1])
    })
  }

  return (
    <div>
      <div id="create-team">
        <h1 style={{ textAlign: "center" }}>ugly Admin page</h1>
        <h3 style={{ marginTop: '4rem' }}>1) Add teams to the tournament by selecting Team name, Group, Player1, and Player2</h3>
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
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>{team.name}</div>
                  <div style={{ cursor: 'pointer' }} onClick={() => deleteTeam(team.name)}>&#128465;</div>
                </div>
              ))
              }
              <hr />
              <div>Total number  of games: {group[2]}</div>
            </div>
          )}
        </div>}
      <div>
        <label htmlFor="group">Choose group:</label>
        <select id="group" onChange={(e) => setGroup(e.target.value)}>
          {groupsDropdown.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button onClick={() => createGames()}>create group games</button>
      </div>

      <div id="create-game">
        <h3 style={{ marginTop: '3rem' }}>2) Add group stage games by choosing Group, Home team, and Away team</h3>
        <label htmlFor="group">Group:</label>
        <select id="group" onChange={(e) => setGroup(e.target.value)}>
          {groupsDropdown.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label htmlFor="team1">Home team:</label>
        <select id="team1" onChange={(e) => { setTeam1Name(e.target.value); setFlagUrl(`flags/${e.target.value}.png`) }}>
          {countriesDropdown.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label htmlFor="team2">Away team:</label>
        <select id="team2" onChange={(e) => { setTeam2Name(e.target.value); setFlagUrl2(`flags/${e.target.value}.png`) }}>
          {countriesDropdown.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button onClick={() => console.log('apply addGame function  if auto mode fails')}>add game</button>
      </div>
    </div>
  );
};

export default Admin;
