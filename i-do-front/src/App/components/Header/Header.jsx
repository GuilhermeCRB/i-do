import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

import { MenuContext } from "../../../Contexts/MenuContext";

import handleNavigate from "../../../utils/handleNavigate";

export default function Header() {
    const { active, setActive } = useContext(MenuContext);
    const navigate = useNavigate();

    return (
        <>
            <HeaderDiv>
                <LogoDiv>
                    <FaBars className="bars-icon" onClick={() => setActive(!active)} />
                    <img className="big-header-img" src="./logo.png" />
                </LogoDiv>
                <img className="small-header-img" src="./logo.png" />
                <SearchDiv className="search-bar">
                    <FiSearch />
                    <SearchBox type="text" placeholder="Search..." />
                </SearchDiv>
                <RiAccountCircleFill className="account-icon" onClick={() => handleNavigate(setActive, navigate, '/account')}/>
            </HeaderDiv>
            <SmallHeaderSearch>
                <SmallSearchDiv className="search-bar">
                    <FiSearch />
                    <SmallSearchBox type="text" placeholder="Search..." />
                </SmallSearchDiv>
            </SmallHeaderSearch>
        </>
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
        width: 8vw;
        font-size: 32px;
        color: var(--icon-color);
    }

    .bars-icon{
        font-size: 5vw;
        color: var(--icon-color);
    }

    .big-header-img{
        width: 8vw;
        min-width: 50px;
        margin-left: 2vw;
    }

    .small-header-img{
        display: none;
    }

    @media (min-width: 769px) {
        display: none;
    }

    @media (max-width: 425px) {
        .search-bar{
            display: none;
        }

        .big-header-img{
            display: none;
        }

        .small-header-img{
            width: 8vw;
            min-width: 50px;
            display: initial;
        }
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

const SmallHeaderSearch = styled.div`
    position: fixed;
    top: var(--header-height);
    left: 0;
    z-index: 1;
    width: 100vw;
    height: 5vh;
    display: none;

    @media (max-width: 425px) {
        display: initial;
    }
`

const SmallSearchDiv = styled.div`
    position: relative;
    height: 100%;

    svg{
        position: absolute;
        top: 1.3vh;
        left: 3vw;
        font-size: 3.5vw;
        color: var(--icon-color);
    }
`

const SmallSearchBox = styled.input`
    height: 5vh;
    width: 100%;
    padding-left: 9vw;
    border: none;
    font-size: 3vw;
    color: var(--icon-color);

    ::placeholder{
        font-size: 3vw;
        color: var(--icon-color);
    }
`