import * as s from "./Rules.styles";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Home = () => {
  return (
    <s.Main>
      <Header />
      <s.Content>
        <s.Heading>The foos cup rulebook</s.Heading>
        <s.Frame>
          <s.FrameInner>

          </s.FrameInner>
        </s.Frame>
      </s.Content>
      <Footer />
    </s.Main>
  );
};

export default Home;
