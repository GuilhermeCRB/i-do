import styled from "styled-components";

import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import ResultsArea from "./ResultsArea";

export default function Suppliers() {
    return (
        <>
            <Header />
            <Nav />
            <SideMenu />
            <Main>
                <ResultsArea />
            </Main>
        </>
    )
}

const Main = styled.main`
    width: calc(100vw - var(--nav-width));
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: var(--nav-width);

    h6{
        @media (max-width: 768px) {
            margin-top: var(--header-height);
        }

        @media (max-width: 425px) {
            margin-top: calc(var(--search-box) + var(--header-height));
        }
    }
`