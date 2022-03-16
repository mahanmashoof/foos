import { Link } from "react-router-dom";
import * as s from "./Home.styles";
import Top from "./Top";

const Home = () => {
  return (
    <s.Main>
      <Top />
      <s.Content>
        <Link to="/password">
          <button>Admin page</button>
        </Link>
      </s.Content>
    </s.Main>
  );
};

export default Home;
