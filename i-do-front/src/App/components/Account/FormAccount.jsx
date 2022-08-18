import { useContext, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";
import axios from "axios";

import ChangePassword from "./ChangePassword";

import UrlContext from "../../../Contexts/UrlContext";

export default function FormAccount() {
  const user = {
    partner1: '',
    partner2: '',
    partner1Email: '',
    partner2Email: '',
  };

  const [userData, setUserData] = useState(user);
  const [formState, setFormState] = useState(false);
  const BASE_BACK_URL = useContext(UrlContext);

  function sendData(e) {
    e.preventDefault();
    setFormState(true);

    const URL = BASE_BACK_URL + 'account/update';
    const promise = axios.post(URL, userData);

    promise.then(() => {
      window.location.reload(true);
    });

    promise.catch(err => {
      alert(err.response.data);
      console.log(err);
      setFormState(false);
    });

  };

  return (
    <>
      <Form onSubmit={sendData}>
        <InputDiv>
            <p>Your name: </p>
            <input
            required
            type='text'
            placeholder="name"
            disabled={formState}
            value={userData.partner1}
            onChange={e => setUserData({ ...userData, partner1: e.target.value })}
            />
        </InputDiv>
        <InputDiv>
            <p>Your partner's name: </p>
            <input
            required
            type='text'
            placeholder="partner's name"
            disabled={formState}
            value={userData.partner2}
            onChange={e => setUserData({ ...userData, partner2: e.target.value })}
            />
        </InputDiv>
        <InputDiv>
            <p>Your email: </p>
            <input
            required
            type='email'
            placeholder="email"
            disabled={formState}
            value={userData.partner1Email}
            onChange={e => setUserData({ ...userData, partner1Email: e.target.value })}
            />
        </InputDiv>
        <InputDiv>
            <p>Your partner's email: </p>
            <input
            required
            type="email"
            placeholder="partner's email"
            disabled={formState}
            value={userData.partner2Email}
            onChange={e => setUserData({ ...userData, partner2Email: e.target.value })}
            />
        </InputDiv>
        <ChangePassword />
        <button type="submit" disabled={formState}>
          {formState ? <TailSpin color="#FFF" /> : "Update account"}
        </button>
      </Form>
    </>

  )

}

const Form = styled.form`
    z-index: 1;
    width: 90%;
    display:flex;
    flex-direction:column;
    font-family: var(--input-font);

    p{
        font-size: 1.5vw;
    }

    input{
        width: 100%;
        margin-bottom: 2.5%;
        border: none;
        border-radius: 6px;
        padding: 1.5% 2%;
        font-weight: 700; 
        font-size: 1.5vw;
        color: var(--placeholder-color);
        background-color: var(--background-input);

        ::placeholder{
            font-size: 1.5vw;
            color: var(--placeholder-color);
        }
    }

    button{
        padding: 1% 0;
        border: none;
        border-radius: 6px;
        background-color: var(--background-sign);
        color: var(--background-input);
        font-size: 1.5vw;
        font-weight: 700;  
        font-family: var(--input-font);

        svg{
            margin: auto;
            width: 25px;
            height: 25px;
        }

        :hover{
            cursor: pointer;
        }
    }

    @media (max-width: 768px) {
        z-index: 0;
    }
`

const InputDiv = styled.div`
    p{
        margin-bottom: 1vh;

        @media (max-width: 425px) {
            margin-bottom: 0;
        }
    }
`