import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin/Admin";
import Password from "./components/Password";
import Rules from "./components/Rules";
import Teams from "./components/Teams";
import { Paths } from './types/enums'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={Paths.HOME} element={<Home />} />
        <Route path={Paths.PASSWORD} element={<Password />} />
        <Route path={Paths.RULES} element={<Rules />} />
        <Route path={process.env.REACT_APP_adminRoute} element={<Admin />} />
        <Route path={Paths.TEAMS} element={<Teams />} />
      </Routes>
    </Router >
  );
}

export default App;
