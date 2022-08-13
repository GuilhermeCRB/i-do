import styled from "styled-components";

export default function Card({ result }) {
    return (
        <CardArea>
            <Img src={result.image} />
            <Title>{result.title}</Title>
            <Link>{result.displayLink}</Link>
            <Snippet>{result.snippet}</Snippet>
        </CardArea>
    );
}

const CardArea = styled.div`
    width: 40vw;
    margin-bottom: 3vh;
    background-color: red;
`

const Img = styled.img`
    
`

const Title = styled.h2`
    
`

const Link = styled.h3`
    
`

const Snippet = styled.p`
    
`