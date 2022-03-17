import { Link } from "react-router-dom";
import { Routes } from "../types/enums";
import * as s from "./Home.styles";
import Top from "./Top";

const Home = () => {

  const start = new Date('2022-04-11 09:00')
  const now = new Date()
  const diff = (start.getTime() - now.getTime()) / 1000
  const daysLeft = Math.floor(diff / 60 / 60 / 24)
  const hoursLeft = Math.floor(diff % (daysLeft * 3600) / 3600)
  const minLeft = Math.floor(diff % (daysLeft * 3600) % (hoursLeft * 60) / 60)
  console.log(daysLeft)
  console.log(hoursLeft)
  console.log(minLeft)

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
      <Link to={Routes.PASSWORD}>
        <button>Admin page</button>
      </Link>
    </s.Main>
  );
};

export default Home;
