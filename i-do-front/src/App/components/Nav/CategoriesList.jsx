import styled from "styled-components";
import { TiHome } from "react-icons/ti";
import { TbTruckDelivery } from "react-icons/tb";
import { RiAccountCircleFill } from "react-icons/ri";
import { AiFillBook } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import handleNavigate from "../../../utils/handleNavigate";

export default function CategoriesList({ active, setActive }) {
    const navigate = useNavigate();

    return (
        <ListWrapper>
            <List className={active ? "" : "only-icons"}>
                <Category onClick={() => handleNavigate(setActive, navigate, '/')}>
                    <TiHome />
                    <h2 className={active ? "" : "no-display"}>Home</h2>
                </Category>
                <Category onClick={() => handleNavigate(setActive, navigate, '/suppliers')}>
                    <TbTruckDelivery />
                    <h2 className={active ? "" : "no-display"}>Suplliers</h2>
                </Category>
                <Category onClick={() => handleNavigate(setActive, navigate, '/account')}>
                    <RiAccountCircleFill />
                    <h2 className={active ? "" : "no-display"}>Account</h2>
                </Category>
                <Category onClick={() => handleNavigate(setActive, navigate, '/budget')}>
                    <AiFillBook />
                    <h2 className={active ? "" : "no-display"}>Budget</h2>
                </Category>
            </List>
        </ListWrapper>
    );
}

const ListWrapper = styled.div`
    width: 100%;
    padding: 0 0.5vw;

    .only-icons {
        display: flex;
        flex-direction: column;
        align-items: center;

        li{
            display: flex;
            justify-content: center;
            padding: 1vh 0;
    
            svg{
                margin-right: 0;
            }
        }
    }
    
`

const List = styled.ul`
    width:100%;
`

const Category = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 3vh;
    padding: 1vh 0.5vw;
    font-size: 1.2vw;
    color: var(--icon-color);
    border-radius: 10px;
    transition: all 0.4s ease;

    svg{
        font-size: 1.8vw;
        margin-right: 2vw;
    }

    :hover{
        cursor: pointer;
        background-color: var(--nav-hover);
    }
`