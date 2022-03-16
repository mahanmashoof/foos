import logoLeft from './../img/logo-main.png'
import flamingo from './../img/flamingo.png'
import mario from './../img/mario.png'
import ball from './../img/ball.png'
import flower from './../img/flower.png'
import * as s from "./Top.styles";

const Home = () => {
    return (
        <s.Frame>
            <s.Main>
                <div>
                    <s.LogoRow>
                        <s.LogoMob alt='' src={logoLeft} />
                        <s.LogoText>powered by</s.LogoText>
                        <s.LogoFlamingo alt='' src={flamingo} />
                    </s.LogoRow>
                    <s.ButtonRow>
                        <s.Icons alt='' src={mario} />
                        <s.Icons alt='' src={ball} />
                        <s.Icons alt='' src={flower} />
                        <s.ButtonBox />
                        <s.Icons alt='' src={flower} />
                        <s.Icons alt='' src={ball} />
                        <s.Icons alt='' src={mario} />
                    </s.ButtonRow>
                </div>
            </s.Main>
        </s.Frame>
    );
};

export default Home;