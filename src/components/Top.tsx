import logoLeft from './../img/logo-main.png'
import flamingo from './../img/flamingo.png'
import * as s from "./Top.styles";

const Home = () => {
    return (
        <s.Main>
            <s.LogoRow>
                <s.LogoMob alt='' src={logoLeft} />
                <s.LogoText>powered by</s.LogoText>
                <s.LogoFlamingo alt='' src={flamingo} />
            </s.LogoRow>
        </s.Main>
    );
};

export default Home;