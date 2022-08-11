import styled from "styled-components";

import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";

export default function Account() {
        return (
        <Main>
            <Header />
            <Nav />
            <SideMenu />
            <h6>Account</h6>
        </Main>
    )
}

const Main = styled.main`
    display: flex;

    h6{
        @media (max-width: 768px) {
            margin-top: var(--header-height);
        }

        @media (max-width: 425px) {
            margin-top: calc(var(--search-box) + var(--header-height));
        }
    }
`