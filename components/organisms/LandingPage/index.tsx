import styled from "styled-components";

export default function LandingPage() {
  return (
    <>
      <Background>
        <ShadeDiv>
          <div>
            <h1>
              I Congresso Branqueamento dos Corais: Causas, Consequências e
              Impactos
            </h1>
            <h2>17/11/23 - 29/11/23</h2>
          </div>
        </ShadeDiv>
      </Background>
    </>
  );
}

const Background = styled.div`
  width: 100%;
  height: 70vh;

  background-image: url("/assets/coral-background.jpg");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

const ShadeDiv = styled.div`
  width: 100%;
  height: 100%;

  padding: 92px;

  background-color: rgb(0, 0, 0, 0.6);

  display: flex;
  align-items: center;
  gap: 40px;

  color: #fff;

  & div {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  & h1 {
    font-size: 32px;
    font-weight: 400;
  }
`;
