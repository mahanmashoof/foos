import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin/Admin";
import Password from "./components/Password";
import Rules from "./components/Rules";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="password" element={<Password />} />
        <Route path="rules" element={<Rules />} />
        <Route path={process.env.REACT_APP_adminRoute} element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
