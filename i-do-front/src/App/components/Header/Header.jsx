import { FaBars } from "react-icons/fa";
import styled from "styled-components";

export default function Header() {
    return (
        <HeaderBox>
            <FaBars />
            <img src="./logo.png" />
        </HeaderBox>
    );
}

const HeaderBox = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5% 2%;
    background-color: var(--background-header);

    svg{
        font-size: 22px;
        color: var(--icon-color);
    }

    img{
        width: 5.5%;
        height: 5.5%;
    }
`