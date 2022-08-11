import { useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";

import MenuList from "./MenuList";

import { MenuContext } from "../../../../Contexts/MenuContext";

export default function Menu() {
    const { active, setActive } = useContext(MenuContext);

    return (
        <MenuDiv className={active ? "" : "display-menu"}>
            <BarsDiv>
                <BiArrowBack className="bars-icon" onClick={() => setActive(!active)} />
            </BarsDiv>
            <MenuList />
        </MenuDiv>
    );
}


const MenuDiv = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    background-color: var(--background-header);
    transition: all 0.4s ease;
`

const BarsDiv = styled.aside`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: var(--header-height);

    .bars-icon{
        margin: 0 3vw;
        font-size: 22px;
        color: var(--icon-color);
    }
`