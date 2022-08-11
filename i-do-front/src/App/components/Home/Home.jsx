import Nav from "../Nav/Nav";
import styled from "styled-components";

export default function Home() {
    return (
        <Main>
            <Nav />
            <p>Home</p>
        </Main>
    )
}

const Main = styled.main`
    display: flex;
`