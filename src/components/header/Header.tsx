import { Link, useLocation } from 'react-router-dom'
import logoLeft from '../../img/MFC-logo.png'
import flamingo from '../../img/flamingosLogo.png'
import mario from '../../img/mario_kart.gif'
import ball from '../../img/ball.png'
import flower from '../../img/flower.png'
import * as s from "./Header.styles";
import { Routes } from '../../types/enums'

const Top = () => {

    const location = useLocation()

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
                        <s.ButtonBox>
                            <Link to={Routes.HOME}>
                                <s.Button pressed={location.pathname === Routes.HOME}>
                                    <div>Home</div>
                                </s.Button>
                            </Link>
                            <Link to={Routes.RULES}>
                                <s.Button pressed={location.pathname === Routes.RULES}>
                                    <div>Rules</div>
                                </s.Button>
                            </Link>
                        </s.ButtonBox>
                        <s.Icons alt='' src={flower} />
                        <s.Icons alt='' src={ball} />
                        <s.Icons alt='' src={mario} />
                    </s.ButtonRow>
                </div>
            </s.Main>
        </s.Frame>
    );
};

export default Top;
