import * as s from "./Rules.styles";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import RulesComponent from "./rulesComp/RulesComp";
import { useEffect, useState } from "react";

const Home = () => {
  const [rules, setRules] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'data/rules.json',
      );
      const json = await res.json();
      setRules(json);
    };
    fetchData();
  }, [])

  console.log(rules)

  return (
    <s.Main>
      <Header />
      <s.Content>
        <s.Heading>The foos cup rulebook</s.Heading>
        <s.Frame>
          <s.FrameInner>
            {<RulesComponent ruleNumber={0} heading={"xx"} text={"cc"} />}
          </s.FrameInner>
        </s.Frame>
      </s.Content>
      <Footer />
    </s.Main>
  );
};

export default Home;
