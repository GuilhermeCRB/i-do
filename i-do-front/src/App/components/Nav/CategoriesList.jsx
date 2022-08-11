import styled from "styled-components";
import { TiHome } from "react-icons/ti";
import { TbTruckDelivery } from "react-icons/tb";
import { RiAccountCircleFill } from "react-icons/ri";
import { AiFillBook } from "react-icons/ai";

export default function CategoriesList({ active }) {
    return (
        <ListWrapper>
            <List className={active ? "" : "only-icons"}>
                <Category >
                    <TiHome />
                    <h2 className={active ? "" : "no-display"}>Home</h2>
                </Category>
                <Category>
                    <TbTruckDelivery />
                    <h2 className={active ? "" : "no-display"}>Suplliers</h2>
                </Category>
                <Category>
                    <RiAccountCircleFill />
                    <h2 className={active ? "" : "no-display"}>Account</h2>
                </Category>
                <Category>
                    <AiFillBook />
                    <h2 className={active ? "" : "no-display"}>Budget</h2>
                </Category>
            </List>
        </ListWrapper>
    );
}

const ListWrapper = styled.div`
    width:100%;

    .only-icons {
        display: flex;
        flex-direction: column;
        align-items: center;

        li{
            display: flex;
            justify-content: center;
            width: 36px;
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
    font-size: 18px;
    color: var(--icon-color);
    border-radius: 10px;
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