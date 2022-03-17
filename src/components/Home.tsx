import { Link } from "react-router-dom";
import * as s from "./Home.styles";
import Top from "./Top";

const Home = () => {
  return (
    <s.Main>
      <Top />
      <s.Content>
        <s.Row1>
          <s.VideoFrame>
            <s.Video></s.Video>
          </s.VideoFrame>
          <s.FieldFrame>
            <s.Field></s.Field>
          </s.FieldFrame>
        </s.Row1>
      </s.Content>
      <Link to="/password">
        <button>Admin page</button>
      </Link>
    </s.Main>
  );
};

export default Home;
