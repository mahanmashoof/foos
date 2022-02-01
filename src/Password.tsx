import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Password = () => {
  let navigate = useNavigate();
  const [writtenPassword, setWrittenPassword] = useState("");
  const checkPassword = () => {
    writtenPassword === process.env.REACT_APP_adminPassword
      ? navigate("/admin")
      : alert("Wrong password, try again");
  };
  return (
    <div>
      <p>Type password here</p>
      <input
        value={writtenPassword}
        onChange={(e) => setWrittenPassword(e.target.value)}
      />
      <button onClick={checkPassword}>OK</button>
    </div>
  );
};

export default Password;
