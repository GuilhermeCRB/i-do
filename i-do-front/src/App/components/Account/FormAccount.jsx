import { useContext, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import jwt_decode from "jwt-decode";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import styled from "styled-components";
import axios from "axios";

import UrlContext from "../../../Contexts/UrlContext";
import { UserContext } from "../../../Contexts/UserContext";

export default function FormAccount() {
    const token = localStorage.getItem("i_do_token");
    const { partner1, partner2, partner1Email, partner2Email } = jwt_decode(token);

    const user = {
        partner1,
        partner2,
        partner1Email,
        partner2Email
    };

    const { setToken } = useContext(UserContext);
    const [userData, setUserData] = useState(user);
    const [formState, setFormState] = useState(false);
    const [open, setOpen] = useState(false);
    const BASE_BACK_URL = useContext(UrlContext);

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };

    function sendData(e) {
        e.preventDefault();
        setFormState(true);

        const URL = BASE_BACK_URL + 'account/update';
        const promise = axios.post(URL, userData, config);

        promise.then(({ data }) => {
            setOpen(false);
            setFormState(false);
            localStorage.setItem("i_do_token", data.token);
            setToken(data.token);
        });

        promise.catch(err => {
            alert(err.response.data);
            console.log(err);
            setFormState(false);
        });

    };

    function handleOpen(e) {
        e.preventDefault();
        setOpen(true);
    }

    return (
        <>
            <Form onSubmit={e => handleOpen(e)}>
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
                <button type="submit" disabled={formState}>
                    {formState ? <TailSpin color="#FFF" /> : "Update account"}
                </button>
            </Form>
            <Dialog open={open} onClose={() => setOpen(false)} maxWidth={false}>
                <DialogContentStyle>
                    <p>
                        Please, confirm your password to update your account.
                    </p>
                    <input
                        autoFocus
                        placeholder="password"
                        type="password"
                        value={userData.password}
                        onChange={e => setUserData({ ...userData, password: e.target.value })}
                    />
                </DialogContentStyle>
                <DialogActionsStyle>
                    <button onClick={() => setOpen(false)}>Cancel</button>
                    <button onClick={e => sendData(e)}>Confirm</button>
                </DialogActionsStyle>
            </Dialog>
        </>
    )

}

const Form = styled.form`
    z-index: 1;
    width: 90%;
    display:flex;
    flex-direction:column;
    font-family: var(--input-font);

    input{
        width: 100%;
        margin-bottom: 2.5%;
        border: none;
        border-radius: 6px;
        padding: 1.5% 2%;
        font-weight: 700; 
        color: var(--placeholder-color);
        background-color: var(--background-input);

        ::placeholder{
            color: var(--placeholder-color);
        }
    }

    button{
        padding: 1% 0;
        border: none;
        border-radius: 6px;
        background-color: var(--background-sign);
        color: var(--background-input);
        font-weight: 700;  

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

const DialogContentStyle = styled(DialogContent)`
    &&{
        padding: 3vh 5vw;
        background-color: var(--background-modal);

        p{
            margin-bottom: 7vh;
            color: var(--modal-color);
        }

        input{
            width: 100%;
            margin-bottom: 2.5%;
            border: none;
            border-radius: 6px;
            padding: 1.5% 4%;
            font-weight: 700;
            color: var(--placeholder-color);
            background-color: var(--background-input);

            ::placeholder{
                font-weight: 700;
                color: var(--placeholder-color);
            }
        }
    }
`

const DialogActionsStyle = styled(DialogActions)`
    &&{
        padding-right: 5vw;
        background-color: var(--background-modal);

        button{
            width: 20%;
            padding: 1% 0;
            margin-bottom: 2vh;
            border: none;
            border-radius: 6px;
            background-color: var(--background-button);
            font-weight: 700;  

            :hover{
            cursor: pointer;
        }
        }
    }
`