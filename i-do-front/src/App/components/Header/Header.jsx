import { RiAccountCircleFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { useContext } from "react";
import styled from "styled-components";

import { MenuContext } from "../../../Contexts/MenuContext";

export default function Header() {
    const { active, setActive } = useContext(MenuContext);

    return (
        <HeaderDiv>
            <LogoDiv>
                <FaBars className="bars-icon" onClick={() => setActive(!active)} />
                <img src="./logo.png" />
            </LogoDiv>
            <SearchDiv>
                <FiSearch />
                <SearchBox type="text" placeholder="Search..." />
            </SearchDiv>
            <RiAccountCircleFill className="account-icon" />
        </HeaderDiv>
    );
}

const HeaderDiv = styled.header`
    position: fixed;
    z-index: 1;
    width: 100vw;
    height: var(--header-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3vw;
    background-color: var(--background-header);

    .account-icon{
        min-width: 22px;
        font-size: 32px;
        color: var(--icon-color);
    }

    .bars-icon{
        font-size: 22px;
        color: var(--icon-color);
    }

    img{
        width: 8vw;
        margin-left: 2vw;
    }

    @media (min-width: 769px) {
        display: none;
    }
`

const LogoDiv = styled.div`
    display: flex;
    align-items: center;
`

const SearchDiv = styled.div`
    position: relative;
    width: 50vw;
    height: 5vh;
    margin-left: -3vw;

    svg{
        position: absolute;
        top: 1.4vh;
        left: 0.5vw;
        font-size: 14px;
        color: var(--icon-color);
    }
`

const SearchBox = styled.input`
    height: 100%;
    width: 100%;
    padding-left: 3.5vw;
    border: none;
    border-radius: 12px;
    color: var(--icon-color);

    ::placeholder{
        color: var(--icon-color);
    }
`