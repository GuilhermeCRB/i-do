import styled from "styled-components";

export default function Card({ result }) {
    return (
        <CardArea>
            <DivImg href={result.link}>
                <Img src={result.image} />
            </DivImg>
            <Divider />
            <SiteInfo>
                <Title>{result.title}</Title>
                <Snippet>{result.snippet}</Snippet>
                <Link href={result.link}>{result.displayLink}</Link>
            </SiteInfo>
        </CardArea>
    );
}

const CardArea = styled.div`
    position: relative;
    width: var(--card-width);
    height: var(--card-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3vh;
    padding: var(--card-padding);
    background-color: var(--background-card);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    @media (max-width: 425px) {
        width: 100%;
    }
`

const DivImg = styled.a`
    width: 45%;
    height: calc(var(--card-height) - 2*var(--card-padding));

    :hover{
        cursor: pointer;
    }
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Divider = styled.div`
    width: 1px;
    height: 95%;
    background-color: var(--divider);
`

const SiteInfo = styled.div`
    width: 50%;
    height: calc(var(--card-height) - 2*var(--card-padding));
    text-align: justify;
`

const Title = styled.h3`
    font-weight: 700;
    margin-bottom: 2vh;
`

const Snippet = styled.h4`
    
`

const Link = styled.a`
    position: absolute;
    bottom: 4vh;
    font-size: calc(1rem + 0.3vw);
    color: var(--link-color);

    :hover{
        cursor: pointer;
    }

    @media (max-width: 768px) {
        font-size: calc(1rem);
    }

    @media (max-width: 425px) {
        font-size: calc(0.8rem);
    }
`