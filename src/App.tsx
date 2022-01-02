import { collection, getDocs } from "firebase/firestore";
import db from "./firebase";

const q = collection(db, "tournament");

const getData = async () => {
  const querySnapShot = await getDocs(q);
  if (!querySnapShot.empty) {
    querySnapShot.forEach((doc) => {
      console.log(doc.data());
    });
  } else {
    console.log("No such document!");
  }
};

const players = ["p1", "p2", "p3", "p4", "p5"];

const allPossibleTeams = () => {
  let team: string[] = [];
  let possibleTeamsArr: [string[]] = [team];
  let playersArr = players;
  for (let i = 0; i < players.length; i++) {
    for (let j = 1; j < playersArr.length; j++) {
      team.push(players[i]);
      team.push(playersArr[j]);
      possibleTeamsArr.push(team);
      team = [];
    }
    playersArr = playersArr.filter((player) => player !== players[i]);
    if (playersArr.length === 1) {
      break;
    }
  }
  possibleTeamsArr.shift();
  console.log(possibleTeamsArr);
};

const randomizePlayers = () => {
  const game: string[] = [];
  let playersArr = players;
  const pos1Team1 = playersArr[Math.floor(Math.random() * playersArr.length)];
  game.push(pos1Team1);
  playersArr = playersArr.filter((player) => player !== pos1Team1);
  const pos2Team1 = playersArr[Math.floor(Math.random() * playersArr.length)];
  game.push(pos2Team1);
  playersArr = playersArr.filter((player) => player !== pos2Team1);
  const pos1Team2 = playersArr[Math.floor(Math.random() * playersArr.length)];
  game.push(pos1Team2);
  playersArr = playersArr.filter((player) => player !== pos1Team2);
  const pos2Team2 = playersArr[Math.floor(Math.random() * playersArr.length)];
  game.push(pos2Team2);
  console.log(game);
};

function App() {
  return (
    <div className="App">
      App component
      <button onClick={randomizePlayers}>create all teams</button>
    </div>
  );
}

export default App;
