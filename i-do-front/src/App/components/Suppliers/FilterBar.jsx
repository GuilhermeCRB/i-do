import { useContext, useState } from "react";
import styled from "styled-components";

import { FilterContext } from "../../../Contexts/FilterContext";

export default function FilterBar() {
    const {filter, setFilter} = useContext(FilterContext);
    const [place, setPlace] = useState("");

    return (
        <FilterWrapper>
            <LocationFilter>
                <p>City:</p>
                <input 
                    value={place}
                    onChange={e => setPlace(e.target.value )}
                />
            </LocationFilter>
            <ButtonFilters>
                <button onClick={() => setFilter({ ...filter, q: "", place})}>All</button>
                <button onClick={() => setFilter({ ...filter, q: "locais", place})}>Places</button>
                <button onClick={() => setFilter({ ...filter, q: "buffet", place})}>Buffet</button>
                <button onClick={() => setFilter({ ...filter, q: "fotógrafo", place})}>Photographer</button>
            </ButtonFilters>
        </FilterWrapper>
    );
}

const FilterWrapper = styled.div`
    width: var(--card-width);
    margin-bottom: 5vh;
`

const LocationFilter = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3vh;
    font-size: 1.3vw;

    input{
        width: 90%;
        height: 5vh;
        padding: 0 1vw;
        font-size: 1.3vw;
        border: none;
        border-radius: 5px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
`

const ButtonFilters = styled.div`
    display: flex;
    justify-content: space-between;

    button{
        z-index: 2;
        width: var(--button-width);
        height: var(--button-height);
        font-family: var(--main-font);
        font-size: 1.3vw;
        border: none;
        border-radius: 1vh;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        background-color: var(--background-button);

        :hover{
            cursor: pointer;
        }
    }
`