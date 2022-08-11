import styled from "styled-components";
import { useContext } from "react";

import Menu from "./Menu";
import { MenuContext } from "../../../Contexts/MenuContext";


export default function SideMenu(){
    const { active, setActive } = useContext(MenuContext);

    return(
        <MenuDiv>
            <Menu />
            <BackDrop className={active ? "" : "display-backdrop"} onClick={() => setActive(!active)} />
        </MenuDiv>
    )
}

const MenuDiv = styled.div`
    width: 100%;
    display: flex;

    .display-menu{
        width: 30vw;

        @media (max-width: 425px) {
        width: 50vw;
    }
    }

    .display-backdrop{
        width: 100vw;
    }
`

const BackDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 0;
    height: 100vh;
    background-color: var(--backdrop);
    backdrop-filter: blur(1px);
    transition: all 0.4s ease;
`