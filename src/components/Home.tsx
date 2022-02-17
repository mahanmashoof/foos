import { Link } from "react-router-dom";
import { Main } from "./Global/Global.styles";

const Home = () => {
  return (
    <Main>
      <Link to="/password">
        <button>Admin page</button>
      </Link>
    </Main>
  );
};

export default Home;
