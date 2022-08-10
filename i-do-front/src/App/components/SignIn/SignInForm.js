import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";
import axios from "axios";

import UrlContext from "../../../Contexts/UrlContext.js";

export default function SignInForm() {
  const user = {
    email: '',
    password: '',
  };

  const navigate = useNavigate();
  const [userData, setUserData] = useState(user);
  const [formState, setFormState] = useState(false);
  const BASE_BACK_URL = useContext(UrlContext);

  function sendData(e) {
    e.preventDefault();
    setFormState(true);

    const URL = BASE_BACK_URL + 'sign-in';
    const promise = axios.post(URL, userData);

    promise.then(() => {
      navigate('/');
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
        <input
          required
          type='email'
          placeholder="email"
          disabled={formState}
          value={userData.partner1Email}
          onChange={e => setUserData({ ...userData, partner1Email: e.target.value })}
        />
        <input
          required
          type='password'
          placeholder="password"
          disabled={formState}
          value={userData.password}
          onChange={e => setUserData({ ...userData, password: e.target.value })}
        />
        <button type="submit" disabled={formState}>
          {formState ? <TailSpin color="#FFF" /> : "Sign in"}
        </button>
      </Form>
      <Link onClick={() => navigate('/sign-up')}>Don't have an account yet? Sign up for free here!</Link>
    </>
  )

}

const Form = styled.form`
  width: 90%;
  display:flex;
  flex-direction:column;
  font-family: var(--input-font);

  input{
    margin-bottom: 2.5%;
    border: none;
    border-radius: 6px;
    padding: 4% 2.5%;
    font-weight: 700; 
    font-size: 18px;
    color: var(--placeholder-color);
    background-color: var(--background-input);

    ::placeholder{
      font-size: 18px;
      color: var(--placeholder-color);
    }
  }

  button{
    padding: 2% 0;
    border: none;
    border-radius: 6px;
    background-color: var(--background-button);
    color: var(--background-input);
    font-size: 22px;
    font-weight: 700;  
    font-family: var(--input-font);
    
    svg{
      margin: auto;
      width: 25px;
      height: 25px;
    }

    :hover{
      cursor:pointer;
    }
  }  
`

const Link = styled.a`
  width: 85%;
  margin: 5% auto;
  font-family: var(--link-font);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--link-color);

  :hover{
    cursor: pointer;
  }
`