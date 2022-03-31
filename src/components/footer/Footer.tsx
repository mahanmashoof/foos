import { Link } from 'react-router-dom'
import * as s from './Footer.styles'
import { Paths } from "../../types/enums";


const Footer = () => {
    return (
        <s.Frame>
            <s.Main>
                <s.FooterText>
                    Copyright © Mobiento 2022. All rights reserved.
                </s.FooterText>
                <s.FooterText>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={Paths.PASSWORD}>
                        Admin page
                    </Link>
                </s.FooterText>
            </s.Main>
        </s.Frame>
    )
}

export default Footer