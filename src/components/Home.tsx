import { Link } from "react-router-dom";
import logoLeft from './../img/logo-left.png'
import flamingo from './../img/flamingo.png'
import * as s from "./Home.styles";

const Home = () => {
  return (
    <s.Main>
      <s.LogoRow>
        <s.LogoMob alt='' src={logoLeft} />
        <div>powered by</div>
        <s.LogoFlamingo alt='' src={flamingo} />
      </s.LogoRow>
      <Link to="/password">
        <button>Admin page</button>
      </Link>
    </s.Main>
  );
};

export default Home;
