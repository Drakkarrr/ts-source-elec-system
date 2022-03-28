import React from 'react'
import initializeAuth from "../firebase.init"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";


import slogan from '../assets/slogan.png';
import signInButton from '../assets/google_signin_button.png'
import styled from 'styled-components';

const Landing: React.FC = () => {
    initializeAuth()
  
  const signInHandler = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth()
  
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user; 

      console.log('You are now signedIn!');
      console.log(user);
    });
  }

    return (
        <StyledContainer>
            <div className='m-auto shadow-2xl	box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25) w-80'>
                    <img className="slogan shadow-box" src={slogan} alt="slogan logo" />
            </div>
            <div className='signin m-auto shadow-2xl	box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25) w-80'>
                <StyledButton onClick={signInHandler}>
                <img className="h-10 shadow-box absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={signInButton} alt="sign in button" />
                </StyledButton>
            </div>
        </StyledContainer>
    )
}

export default Landing;

const StyledContainer = styled.div`
    box-shadow: 0px 6px 8px rgba(25, 50, 47, 0.08),0px 3px 4px rgba(18, 71, 52, 0.02), 0px 1px 16px rgba(18, 71, 52, 0.03);
    height: 80vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
        .slogan {
            height: 92%;
            width: 100%;
            box-shadow: 25px 25px 50px -12px rgb(0 0 0 / 0.25);
                img {
                    size: 100%;
                }
        }
        .signin {
            height: 92%;
            display: grid;
            place-items: center;
            box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
                img {
                    size: 100%;
                }
        }
`

const StyledButton = styled.button`
    border: 0;
    background: none;
    transition: 0.15s;
    cursor: pointer;
        &:hover {
           padding-bottom: 5px;
        }
`