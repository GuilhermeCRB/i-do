import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

import CategoriesList from "./CategoriesList";

export default function Nav() {
    const [active, setActive] = useState(true);

    return (
        <NavWrapper>
            <NavSide className={active ? "" : "inactive"}>
                <FaBars className="bars-icon" onClick={() => setActive(!active)} />
                <img className={active ? "" : "small-logo"} src="./logo.png" />
                <SearchDiv className={active ? "" : "no-display"} >
                    <FiSearch />
                    <SearchBox type="text" placeholder="Search..." />
                </SearchDiv>
                <CategoriesList active={active} setActive={setActive} />
            </NavSide>
        </NavWrapper>
    );
}

const NavWrapper = styled.div`
    width: 100%;

    @media (max-width: 768px) {
        display: none;
    }

    .inactive{
        width: 4.5vw;
        padding: 1.5vh 0;
        
        .bars-icon{
            position: inherit;
            top: 0;
            right: 0;
        }
    }

    .small-logo{
        width: 4vw;
        margin: 3vh 0;
    }

    .no-display{
        display: none;
    }
`

const NavSide = styled.nav`
    width: 15vw;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5vh 0.8vw;
    background-color: var(--background-header);
    transition: all 0.4s ease;

    .bars-icon{
        position: absolute;
        top: 1.5vh;
        right: 1.5vw;
        font-size: 2vw;
        color: var(--icon-color);
    }

    img{
        width: 8vw;
        margin-bottom: 5vh;
        transition: all 0.4s ease;
    }
`

const SearchDiv = styled.div`
    position: relative;
    height: 5vh;
    width: 100%;

    svg{
        position: absolute;
        top: 1.1vh;
        left: 0.5vw;
        font-size: 1.5vw;
        color: var(--icon-color);
    }
`

const SearchBox = styled.input`
    height: 100%;
    width: 100%;
    padding-left: 2.5vw;
    border: none;
    border-radius: 12px;
    font-size: 1.2vw;
    color: var(--icon-color);

    ::placeholder{
        color: var(--icon-color);
    }
`