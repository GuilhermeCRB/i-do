import styled from "styled-components";
import { TiHome } from "react-icons/ti";
import { TbTruckDelivery } from "react-icons/tb";
import { RiAccountCircleFill } from "react-icons/ri";
import { AiFillBook } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { MenuContext } from "../../../Contexts/MenuContext";

import handleNavigate from "../../../utils/handleNavigate";

export default function MenuList() {
    const { setActive } = useContext(MenuContext);
    const navigate = useNavigate();
    
    return (
        <ListWrapper>
            <div>
                <Category onClick={() => handleNavigate(setActive, navigate, '/')}>
                    <TiHome />
                    <h2>Home</h2>
                </Category>
                <Category onClick={() => handleNavigate(setActive, navigate, '/suppliers')}>
                    <TbTruckDelivery />
                    <h2>Suplliers</h2>
                </Category>
                <Category onClick={() => handleNavigate(setActive, navigate, '/account')}>
                    <RiAccountCircleFill />
                    <h2>Account</h2>
                </Category>
                <Category onClick={() => handleNavigate(setActive, navigate, '/budget')}>
                    <AiFillBook />
                    <h2>Budget</h2>
                </Category>
            </div>
        </ListWrapper>
    );
}

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Category = styled.li`
    display: flex;
    align-items: center;
    margin-top: 3vh;
    padding: 1vh 0.5vw;
    color: var(--icon-color);

    svg{
        min-width: 22px;
        font-size: 22px;
        margin-right: 2vw;
    }
`