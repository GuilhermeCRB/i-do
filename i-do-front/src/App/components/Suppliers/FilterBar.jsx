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
    margin-bottom: 8vh;

    @media (max-width: 425px) {
        width: 100%;
    }
`

const LocationFilter = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3vh;

    input{
        width: 95%;
        height: 5vh;
        padding: 0 1vw;
        border: none;
        border-radius: 5px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    
        @media (max-width: 768px) {
            width: 90%;
        }
    }
`

const ButtonFilters = styled.div`
    display: flex;
    justify-content: space-between;

    button{
        z-index: 1;
        min-width: var(--button-width);
        height: var(--button-height);
        font-family: var(--main-font);
        border: none;
        border-radius: 1vh;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        background-color: var(--background-button);

        :hover{
            cursor: pointer;
        }

        @media (max-width: 768px) {
            z-index: 0;
            font-size: 2vw;
        }

        @media (max-width: 425px) {
            width: 24%;
            font-size: 0.7rem;
        }
    }
`