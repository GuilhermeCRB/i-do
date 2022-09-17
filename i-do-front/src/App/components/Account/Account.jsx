import styled from "styled-components";

import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import AccountInfo from "./AccountInfo";

export default function Account() {
    return (
        <>
            <Header />
            <Nav />
            <SideMenu />
            <Main>
                <AccountInfo />
            </Main>
        </>
    )
}

const Main = styled.main`
    width: calc(100vw - var(--nav-width));
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5vh 0 2vh var(--nav-width);

    h2{
        font-weight: 700;
    }

    @media (max-width: 768px) {
        margin: 0 auto;
        padding-top: calc(var(--header-height) + 5vh);
    }

    @media (max-width: 425px) {
        margin: 0 auto;
        padding-top: calc(var(--header-height) + var(--search-box) + 5vh);
    }
`