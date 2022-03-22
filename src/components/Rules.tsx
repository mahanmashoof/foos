import * as s from "./Rules.styles";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import RulesComponent from "./rulesComp/RulesComp";
import { useEffect, useState } from "react";

interface rules {
  heading: string,
  text: string
}

const Home = () => {
  const [rules, setRules] = useState<rules[]>([{ heading: '', text: '' }])

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

  return (
    <s.Main>
      <Header />
      <s.Content>
        <s.Heading>The foos cup rulebook</s.Heading>
        <s.Frame>
          <s.FrameInner>
            {rules.map((rule, i) => (
              <RulesComponent key={i} ruleNumber={i + 1} heading={rule.heading} text={rule.text} />
            ))}
          </s.FrameInner>
        </s.Frame>
      </s.Content>
      <Footer />
    </s.Main>
  );
};

export default Home;
