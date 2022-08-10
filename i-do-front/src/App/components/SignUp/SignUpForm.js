import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

import UrlContext from "../../../Contexts/UrlContext.js";

export default function SignUpForm() {
  const user = {
    partner1: '',
    partner2: '',
    partner1Email: '',
    partner2Email: '',
    password: '',
    repeatedPassword: ''
  };

  const navigate = useNavigate();
  const [userData, setUserData] = useState(user);
  const [buttonState, setButtonState] = useState(false);
  const BASE_URL = useContext(UrlContext);

  function sendData(e) {
    e.preventDefault();
    setButtonState(true);

    // const URL = BASE_URL + 'sign-up';
    // const promise = axios.post(URL, userData);

    // promise.then(() => {
    //   navigate('/');
    // });

    // promise.catch(err => {
    //   alert(err.response.data);
    //   console.log(err);
    // });

  };

  return (
    <>
      <Form onSubmit={sendData}>
        <input 
          required 
          type='text'
          placeholder="name"
          value={userData.partner1} 
          onChange={e => setUserData({ ...userData, partner1: e.target.value })}
        />
        <input 
          required 
          type='text'
          placeholder="partner's name"
          value={userData.partner2} 
          onChange={e => setUserData({ ...userData, partner2: e.target.value })}
        />
        <input 
          required 
          type='text'
          placeholder="email"
          value={userData.partner1Email} 
          onChange={e => setUserData({ ...userData, partner1Email: e.target.value })}
        />
       <input 
          required 
          type='text'
          placeholder="partner's email"
          value={userData.partner2Email} 
          onChange={e => setUserData({ ...userData, partner2Email: e.target.value })}
        />
        <input
          required
          type='password' 
          placeholder="password"
          value={userData.password} 
          onChange={e => setUserData({ ...userData, password: e.target.value })}
        />
        <input
          required
          type='password' 
          placeholder="repeat your password"
          value={userData.repeatedPassword} 
          onChange={e => setUserData({ ...userData, repeatedPassword: e.target.value })}
        />
      </Form>
      <Link onClick={() => navigate('/')}>Already have an account? Sign in to begin planning your wedding!</Link>
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
    background-color: var(--background-input);

    ::placeholder{
      font-size: 18px;
      color: var(--placeholder-color);
    }
  }

  button{
    border: none;
    border-radius: 6px;
    background-color: rgba(24, 119, 242, 1);
    color: #fff;
    font-size: 22px;
    font-weight: 700;  
    font-family: var(--input-font);

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