import * as s from "./Home.styles";
import Header from "./header/Header";
import ReactPlayer from 'react-player'
import SloganComponent from "./sloganComp/SloganComp";
import { HOME_CONSTANTS } from "../types/constant/copy";
import DateComp from "./datesComp/DateComp";
import GossipComp from "./gossipComp/GossipComp";
import Footer from "./footer/Footer";
import { useCallback, useEffect, useState } from "react";

interface news {
  imgUrl: string,
  heading: string,
  text: string
}

const Home = () => {

  const [news, setNews] = useState<news[]>([{ imgUrl: '', heading: '', text: '' }])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'data/news.json',
      );
      const json = await res.json();
      setNews(json);
    };
    fetchData();
  }, [])

  const getTimeStamp = useCallback(() => {
    const start = new Date('2022-04-11T09:00')
    const now = new Date()
    const diff = (start.getTime() - now.getTime()) / 1000
    const daysLeft = diff > 0 ? Math.floor(diff / 60 / 60 / 24) : 0
    const hoursLeft = diff > 0 ? Math.floor((diff - daysLeft * 24 * 3600) / 3600) : 0
    const minLeft = diff > 0 ? Math.floor((diff - daysLeft * 24 * 3600 - hoursLeft * 3600) / 60) : 0
    const staticSec = diff > 0 ? Math.floor((diff - daysLeft * 24 * 3600 - hoursLeft * 3600 - minLeft * 60)) : 0

    return {
      daysLeft,
      hoursLeft,
      minLeft,
      staticSec,
    }
  }, [])

  const timeStamp = getTimeStamp();
  const [secLeft, setSecLeft] = useState(timeStamp.staticSec)

  useEffect(() => {
    const interval = setInterval(() => {
      setSecLeft(getTimeStamp().staticSec)
    }, 1000)
    return () => clearInterval(interval)
  }, [getTimeStamp])

  return (
    <s.Main>
      <Header />
      <s.Content>
        <s.Row1>
          <s.VideoFrame>
            <s.Video>
              <ReactPlayer url='videos/foos-intro.mp4' width="100%" height="100%" controls={true} />
            </s.Video>
          </s.VideoFrame>
          <s.FieldFrame>
            <s.Field>
              <s.CountDownHeading>Tournament starts in</s.CountDownHeading>
              <s.CountDownDays>{timeStamp.daysLeft}</s.CountDownDays>
              <s.CountDownText>Days</s.CountDownText>
              <s.CountDownHours>{timeStamp.hoursLeft}</s.CountDownHours>
              <s.CountDownText>Hours</s.CountDownText>
              <s.CountDownMin>{timeStamp.minLeft}</s.CountDownMin>
              <s.CountDownText>Minutes</s.CountDownText>
              <s.CountDownSec>{secLeft}</s.CountDownSec>
              <s.CountDownText>Seconds</s.CountDownText>
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
            <ReactPlayer url='videos/groups-draw.mp4' width="100%" controls={true} />
            <div>
              <s.TextBoxWithVideo>{HOME_CONSTANTS.THIRD_BOX.P1}</s.TextBoxWithVideo>
              <s.TextBoxWithVideo>{HOME_CONSTANTS.THIRD_BOX.P2}</s.TextBoxWithVideo>
              <s.TextBoxWithVideo>{HOME_CONSTANTS.THIRD_BOX.P3}</s.TextBoxWithVideo>
              <s.TextBoxWithVideo>{HOME_CONSTANTS.THIRD_BOX.P4}</s.TextBoxWithVideo>
            </div>
          </s.TextPicBox>
        </s.TextFrameWide>
        <s.Heading>HOW DOES THE FOOS TOURNAMENT WORK?</s.Heading>
        <s.SloganRow style={{ marginBottom: '0' }}>
          <DateComp date={HOME_CONSTANTS.DATE1.date} heading={HOME_CONSTANTS.DATE1.heading} text={HOME_CONSTANTS.DATE1.text}></DateComp>
          <DateComp date={HOME_CONSTANTS.DATE2.date} heading={HOME_CONSTANTS.DATE2.heading} text={HOME_CONSTANTS.DATE2.text}></DateComp>
          <DateComp date={HOME_CONSTANTS.DATE3.date} heading={HOME_CONSTANTS.DATE3.heading} text={HOME_CONSTANTS.DATE3.text}></DateComp>
        </s.SloganRow>
        <s.Heading>GIVE ME THE LATEST GOSSIP!</s.Heading>
        <s.NewsRow>
          {news.map((article, i) => (
              <GossipComp
                key={i}
                imgUrl={article.imgUrl}
                heading={article.heading}
                text={article.text} />
            ))
          }
        </s.NewsRow>
      </s.Content>
      <Footer />
    </s.Main>
  );
};

export default Home;
