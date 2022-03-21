import { Link } from "react-router-dom";
import { Routes } from "../types/enums";
import * as s from "./Home.styles";
import Top from "./Top";
import ReactPlayer from 'react-player'
import SloganComponent from "./sloganComp/SloganComp";
import { HOME_CONSTANTS } from "../types/constant/copy";
import foosPlay from '../img/foosPlay.webp'

const Home = () => {

  const start = new Date('2022-04-11 09:00')
  const now = new Date()
  const diff = (start.getTime() - now.getTime()) / 1000
  const daysLeft = diff > 0 ? Math.floor(diff / 60 / 60 / 24) : 0
  const hoursLeft = diff > 0 ? Math.floor((diff - daysLeft * 24 * 3600) / 3600) : 0
  const minLeft = diff > 0 ? Math.floor((diff - daysLeft * 24 * 3600 - hoursLeft * 3600) / 60) : 0

  return (
    <s.Main>
      <Top />
      <s.Content>
        <s.Row1>
          <s.VideoFrame>
            <s.Video>
              <ReactPlayer url='videos/foosIntro.mp4' width="100%" height="100%" controls={true} />
            </s.Video>
          </s.VideoFrame>
          <s.FieldFrame>
            <s.Field>
              <s.CountDownHeading>Tournament starts in</s.CountDownHeading>
              <s.CountDownDays>{daysLeft}</s.CountDownDays>
              <s.CountDownText>Days</s.CountDownText>
              <s.CountDownHours>{hoursLeft}</s.CountDownHours>
              <s.CountDownText>Hours</s.CountDownText>
              <s.CountDownMin>{minLeft}</s.CountDownMin>
              <s.CountDownText>Minutes</s.CountDownText>
            </s.Field>
          </s.FieldFrame>
        </s.Row1>
        <s.SloganRow>
          <SloganComponent upperText={'The pain of'} lowerText={"DEFEAT"} />
          <SloganComponent upperText={"The elation of"} lowerText={"VICTORY"} />
          <SloganComponent upperText={"A celebration of"} lowerText={"DIVERSITY"} />
        </s.SloganRow>
        <s.TextFrame>
          <s.TextBox>{HOME_CONSTANTS.FIRST_BOX}</s.TextBox>
        </s.TextFrame>
        <s.TextFrame>
          <s.TextBox>{HOME_CONSTANTS.SECOND_BOX}</s.TextBox>
        </s.TextFrame>
        <s.TextFrameWide>
          <s.TextPicBox>
            <img alt='' src={foosPlay} style={{ width: '50%', objectFit: 'cover' }} />
            <div>
              <s.TextBox style={{ border: 'none', height: 'fit-content', textAlign: 'left' }}>{HOME_CONSTANTS.THIRD_BOX.P1}</s.TextBox>
              <s.TextBox style={{ border: 'none', height: 'fit-content', textAlign: 'left' }}>{HOME_CONSTANTS.THIRD_BOX.P2}</s.TextBox>
              <s.TextBox style={{ border: 'none', height: 'fit-content', textAlign: 'left' }}>{HOME_CONSTANTS.THIRD_BOX.P3}</s.TextBox>
              <s.TextBox style={{ border: 'none', height: 'fit-content', textAlign: 'left' }}>{HOME_CONSTANTS.THIRD_BOX.P4}</s.TextBox>
            </div>
          </s.TextPicBox>
        </s.TextFrameWide>
      </s.Content>
      <Link to={Routes.PASSWORD}>
        <button>Admin page</button>
      </Link>
    </s.Main>
  );
};

export default Home;
