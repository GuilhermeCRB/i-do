import { useContext, useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";
import axios from "axios";

import Card from "./Card";
import FilterBar from "./FilterBar";

import UrlContext from "../../../Contexts/UrlContext";
import { FilterContext } from "../../../Contexts/FilterContext";

export default function ResultsArea() {
    const BASE_BACK_URL = useContext(UrlContext);
    const { filter } = useContext(FilterContext);
    const [results, setResults] = useState(null);
    const token = localStorage.getItem("i_do_token");
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };

    useEffect(() => {
        const url = `${BASE_BACK_URL}suppliers?place=${filter.place}&q=${filter.q}`;
        const promise = axios.get(url, config);

        promise.then((response) => {
            setResults(response.data);
        });

        promise.catch(err => {
            alert(err.response.data);
            console.log(err);
        });

    }, [filter]);

    return (
        results ?
            <>
                <ResultsWrapper>
                    <FilterBar />
                    {results.data.map((result, index) => {
                        return <Card key={index} result={result} />
                    })}
                </ResultsWrapper>
            </>
            :
            <TailSpin color="var(--background-header)" />
    );
}

const ResultsWrapper = styled.div`
    margin-top: 5vh;
`