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
            <s.Field>
              <s.CountDownHeading>Tournament starts in</s.CountDownHeading>
              <s.CountDownDays>30</s.CountDownDays>
              <s.CountDownText>Days</s.CountDownText>
              <s.CountDownHours>10</s.CountDownHours>
              <s.CountDownText>Hours</s.CountDownText>
              <s.CountDownMin>20</s.CountDownMin>
              <s.CountDownText>Minutes</s.CountDownText>
            </s.Field>
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
