import styled from "styled-components";
import { TiHome } from "react-icons/ti";
import { TbTruckDelivery } from "react-icons/tb";
import { RiAccountCircleFill } from "react-icons/ri";
import { AiFillBook } from "react-icons/ai";

export default function CategoriesList() {
    return (
        <List>
            <Category>
                <TiHome />
                <h2>Home</h2>
            </Category>
            <Category>
                <TbTruckDelivery />
                <h2>Suplliers</h2>
            </Category>
            <Category>
                <RiAccountCircleFill />
                <h2>Account</h2>
            </Category>
            <Category>
                <AiFillBook />
                <h2>Budget</h2>
            </Category>
        </List>
    );
}

const List = styled.ul`
    width:100%;
`

const Category = styled.li`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    margin-top: 3vh;
    padding-left: 0.5vw;
    font-size: 18px;
    color: var(--icon-color);
    border-radius: 10px;
    overflow-x: hidden;
    transition: all 0.4s ease;

    svg{
        min-width: 22px;
        font-size: 22px;
        margin-right: 2vw;
    }

    :hover{
        cursor: pointer;
        background-color: var(--nav-hover);
    }
`