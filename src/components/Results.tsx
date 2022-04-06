import { useGetGames } from "../hooks/api/useApi";
import Footer from "./footer/Footer"
import Header from "./header/Header"
import * as s from "./Results.styles";

const Teams = () => {

    const { data: games } = useGetGames()

    return (
        <s.Main>
            <Header />
            <s.Content>
                <s.Heading>Schedule & results</s.Heading>
            </s.Content>
            <Footer />
        </s.Main>
    )
}

export default Teams