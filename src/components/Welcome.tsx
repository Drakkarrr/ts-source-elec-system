import React from 'react'
import styled from 'styled-components'
import slogan from '../assets/slogan.png';

const Container: React.FC = () => {
  return (
    <StyledContainer>
      <div className="logo-container">
        <img src={slogan} alt="slogan logo" />
      </div>
      <div className="details">
        <h1>WELCOME!</h1>
        <h2>La Salle University - OZC Student Organization Utilizing the Realm of Computer Eclecticim ELECTION for A.Y 2022 - 2023 OFFICERS.</h2>
        <br />
        <p>Student(s) can only elect officers once. Do not close the page while still voting, you will be automatically redirected to logout and reset selected candidates. Choose one (1) candidate per position, Thank you!</p>
      </div>
      <div className="buttons">
          <button className='log-out'>LOGOUT</button>
          <button className='get-started'>GET STARTED</button>
        </div>
    </StyledContainer>
  )
}

export default Container

const StyledContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 5rem;
  width: 85%;
  margin: auto;
  box-shadow: 2px 2px 7px 2px rgba(0,0,0,0.5);
  -webkit-box-shadow: 2px 2px 7px 2px rgba(0,0,0,0.5);
  -moz-box-shadow: 2px 2px 7px 2px rgba(0,0,0,0.5);
  .logo-container {
    display: grid;
    place-items: center;
        img {
          width: 180px;
          height: auto;
          border-radius: 800px;
        }
    }
    .details {
      display: grid;
      place-items: center;
      text-align: center;
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      width: 50%;
      height: 2rem;
       > button {
        padding: 5px 1.5rem;
        font-size: 1.2rem;
        font-weight: bolder;
        width: auto;
        border-radius: 12px;
        transition: 0.25s;
        cursor: pointer;
        &:hover {
          transform: scale(1.2);
          box-shadow: 2px 2px 7px 2px rgba(0,0,0,0.5);
          }
       }
    }
`;