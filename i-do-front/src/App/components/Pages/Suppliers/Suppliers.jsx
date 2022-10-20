import styled from "styled-components";

import ResultsArea from "./ResultsArea";

export default function Suppliers() {
    return (
        <Main><ResultsArea /></Main>
    )
}

const Main = styled.main`
    width: calc(100vw - var(--nav-width));
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: var(--nav-width);

    @media (max-width: 768px) {
        margin: 0 auto;
    }
`