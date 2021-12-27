import { collection, getDocs } from "firebase/firestore";
import db from "./firebase";

const q = collection(db, "tournament");

const getData = async() => {
  const querySnapShot = await getDocs(q);
  if (!querySnapShot.empty) {
    querySnapShot.forEach((doc) => {
      console.log(doc.data())
    })
  } else {
    console.log("No such document!");
  }
}

function App() {
  return (
    <div className="App">
      App component
      <button onClick={getData}>get data</button>
    </div>
  );
}

export default App;
