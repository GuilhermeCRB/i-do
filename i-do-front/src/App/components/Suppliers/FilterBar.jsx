import styled from "styled-components";

export default function FilterBar() {
    return (
        <FilterWrapper>
            <LocationFilter>
                <p>City:</p>
                <input />
            </LocationFilter>
            <ButtonFilters>
                <button>All</button>
                <button>Places</button>
                <button>Buffet</button>
                <button>Photographer</button>
            </ButtonFilters>
        </FilterWrapper>
    );
}

const FilterWrapper = styled.div`
    width: var(--card-width);
    margin-bottom: 5vh;
`

const LocationFilter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3vh;

    input{
        z-index: 2;
        width: 90%;
        height: 5vh;
        padding: 0 1vw;
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
        border: none;
        border-radius: 1vh;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        background-color: var(--background-button);

        :hover{
            cursor: pointer;
        }
    }
`