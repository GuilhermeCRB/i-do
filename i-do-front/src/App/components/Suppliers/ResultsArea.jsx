import { useContext, useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import Pagination from '@mui/material/Pagination';
import styled from "styled-components";
import axios from "axios";

import Card from "./Card";
import FilterBar from "./FilterBar";

import UrlContext from "../../../Contexts/UrlContext";
import { FilterContext } from "../../../Contexts/FilterContext";

export default function ResultsArea() {
    const BASE_BACK_URL = useContext(UrlContext);
    const PER_PAGE = 10;
    const { filter } = useContext(FilterContext);
    const [results, setResults] = useState(null);
    const [page, setPage] = useState({p: 1, index: 1});
    const token = localStorage.getItem("i_do_token");
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };

    useEffect(() => {
        const url = `${BASE_BACK_URL}suppliers?place=${filter.place}&q=${filter.q}&start=${page.index}`;
        const promise = axios.get(url, config);

        promise.then((response) => {
            const count = 10 + page.p; // TODO: Se trocar o filtro não vai voltar para a página 1.
            setResults({ response: response.data, count });
        });

        promise.catch(err => {
            alert(err.response.data);
            console.log(err);
        });

    }, [filter, page]);

    return (
        results ?
            <>
                <ResultsWrapper>
                    <FilterBar />
                    <CountWrapper>
                        <ResultsCount>{`Approximately ${results.response.resultsAmount} results`}</ResultsCount>
                    </CountWrapper>
                    {results.response.data.map((result, index) => {
                        return <Card key={index} result={result} />
                    })}
                    <Pagination
                        boundaryCount={0}
                        siblingCount={2}
                        count={results.count}
                        showFirstButton
                        onChange={(e, p) => setPage({...page, p, index: (p - 1) * PER_PAGE + 1})}
                    />
                </ResultsWrapper>
            </>
            :
            <TailSpin color="var(--background-header)" />
    );
}

const ResultsWrapper = styled.div`
    margin-top: 5vh;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: calc(var(--header-height) + 5vh);
    }

    @media (max-width: 435px) {
        display: flex;
        align-items: center;
        margin-top: calc(var(--header-height) + 10vh);
    }
`

const CountWrapper = styled.div`
    width: var(--card-width);

    @media (max-width: 425px) {
        width: 100%;
    }
`

const ResultsCount = styled.p`
    margin-bottom: 2vh;
    font-size: calc(1rem + 0.3vw);
    color: var(--icon-color);

    @media (max-width: 425px) {
        width: 100%;
        font-size: 0.6rem;
    }
`