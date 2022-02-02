import db from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { playerAttributesDropdown } from "../../helpers/dropdowns";

const Admin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [speed, setSpeed] = useState(0);
  const [rage, setRage] = useState(0);

  const addPlayer = async () => {
    await addDoc(collection(db, "players"), {
      name: name,
      email: email,
      attributes: {
        speed: speed,
        rage: rage,
      },
    })
      .then(() => {
        alert(`${name} added`);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Admin page</h1>
      <h3>Add Player</h3>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="speed">Speed:</label>
      <select id="speed" onChange={(e) => setSpeed(+e.target.value)}>
        {playerAttributesDropdown.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label htmlFor="rage">Rage:</label>
      <select id="rage" onChange={(e) => setRage(+e.target.value)}>
        {playerAttributesDropdown.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button onClick={addPlayer}>add player</button>
    </div>
  );
};

export default Admin;
