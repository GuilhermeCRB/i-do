import styled from "styled-components";

export default function Page({children}) {
  return (
    <Div>{children}</Div>
  );
}

const Div = styled.main`
    display: flex;

    h6{
        @media (max-width: 768px) {
            margin-top: var(--header-height);
        }

        @media (max-width: 425px) {
            margin-top: calc(var(--search-box) + var(--header-height));
        }
    }
`