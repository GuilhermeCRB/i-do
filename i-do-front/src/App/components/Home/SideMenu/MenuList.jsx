import styled from "styled-components";
import { TiHome } from "react-icons/ti";
import { TbTruckDelivery } from "react-icons/tb";
import { RiAccountCircleFill } from "react-icons/ri";
import { AiFillBook } from "react-icons/ai";

export default function MenuList() {
    return (
        <ListWrapper>
            <div>
                <Category >
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
    font-size: 18px;
    color: var(--icon-color);

    svg{
        min-width: 22px;
        font-size: 22px;
        margin-right: 2vw;
    }
`