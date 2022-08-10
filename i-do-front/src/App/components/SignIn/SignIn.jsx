import styled from "styled-components";

import SignInForm from "./SignInForm";

export default function SignIn() {
    return (
        <Main>
            <LogoSide>
                <img src="logo.png" />
            </LogoSide>
            <FormSide>
                <SignInForm />
            </FormSide>
        </Main>
    );
}


const Main = styled.main`
    height: 100vh;
    display: flex;

    @media(max-width: 768px){
        flex-direction: column;
    }
`

const LogoSide = styled.section`
    width: 60%;
    display: flex;
    align-items: center;
    padding-left: 10%;
    font-family: var(--logo-font);
    font-weight: 700;
    background-color: var(--background-access);

    @media(max-width: 768px){
        width: 100%;
        position: fixed;
        top: 0;
        justify-content: center;
        margin: 0;
        padding-left: 0;

        img{
            width: 30%;
            margin: 5% 0;
        }
    }
`

const FormSide = styled.section`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--background-page);

    @media(max-width: 768px){
        width: 100%;
        justify-content: initial;
        margin-top: 40%;
    }
`