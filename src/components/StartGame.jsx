import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <BackgroundAnimation />
      <Content>
        <div className="image-container">
          <img src="/images/dices.png" alt="Dices" />
        </div>
        <div className="content">
          <h1>Dice Game</h1>
          <p>Welcome to the Dice Game! Get ready to roll the dice and win.</p>
          <p className="name">Created by: Unnat Chvda</p>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Content>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  color: #f0f8ff;
`;

const Content = styled.div`
  position: relative;
  z-index: 2; /* Ensure the content and image are above the background */

  display: flex;
  align-items: center;

  .image-container {
    img {
      max-width: 300px;
      margin-right: 30px;
    }
  }

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
      margin-bottom: 20px;
      color: #f0f8ff;
    }

    p {
      font-size: 24px;
      margin: 10px 0;
      color: #f0f8ff;
    }

    .name {
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 40px;
      color: #f0f8ff;
    }
  }
`;

const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #0d0d0d; /* Dark background color */
  overflow: hidden;
  z-index: 1; /* Ensure background is behind content */

  &::before {
    content: "";
    position: absolute;
    top: 10%;
    left: 20%;
    width: 300px;
    height: 300px;
    background: rgba(255, 255, 255, 0.1); /* Faint white circle */
    border-radius: 50%;
    animation: moveCircle 8s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 60%;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: moveCircle 10s linear infinite reverse;
  }

  @keyframes moveCircle {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(-50px, 50px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;
